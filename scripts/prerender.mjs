/**
 * Build-time pre-rendering (static site generation).
 *
 * Runs after `vite build` (client) and `vite build --ssr` (renderer). For each
 * public route it renders the React app to HTML in Node and writes a
 * standalone file into dist/public, with the page's visible text, <title>,
 * meta description, canonical, Open Graph / Twitter tags and JSON-LD already
 * in the markup. The browser bundle then hydrates that markup.
 *
 *   /                  -> dist/public/index.html
 *   /about             -> dist/public/about.html
 *   /resources/talks   -> dist/public/resources/talks.html
 *   (unknown URLs)     -> dist/public/404.html (served with HTTP 404)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf8");
const { render, getPrerenderRoutes } = await import(pathToFileURL(serverEntry).href);

export function fileForPath(urlPath) {
  return urlPath === "/" ? "index.html" : `${urlPath.slice(1)}.html`;
}

// --- Consistency checks: fail the build rather than ship an unrendered page ---
const routes = getPrerenderRoutes();
const routePaths = new Set(routes.map(r => r.path));

const sitemap = fs.readFileSync(path.join(root, "client/public/sitemap.xml"), "utf8");
const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  m => new URL(m[1].trim()).pathname
);
const missingFromRoutes = sitemapPaths.filter(p => !routePaths.has(p));
if (missingFromRoutes.length) {
  throw new Error(
    `[prerender] sitemap.xml lists URLs that are not pre-rendered (add them to client/src/routes.ts): ${missingFromRoutes.join(", ")}`
  );
}

const toml = fs.readFileSync(path.join(root, "netlify.toml"), "utf8");
const missingRewrites = routes
  .filter(r => r.path !== "/")
  .filter(r => {
    const rule = new RegExp(
      `from\\s*=\\s*"${r.path}"\\s*\\n\\s*to\\s*=\\s*"/${fileForPath(r.path)}"`
    );
    return !rule.test(toml);
  })
  .map(r => r.path);
if (missingRewrites.length) {
  throw new Error(
    `[prerender] netlify.toml has no rewrite to the pre-rendered file for: ${missingRewrites.join(", ")}`
  );
}

// --- Render ---
function buildPage({ html, head, htmlAttributes }) {
  let page = template;
  if (head.includes("<title")) {
    page = page.replace(/<title>[\s\S]*?<\/title>\s*/, "");
  }
  if (htmlAttributes) {
    page = page.replace(/<html[^>]*>/, `<html ${htmlAttributes}>`);
  }
  page = page.replace("</head>", `    ${head}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (!page.includes(html)) throw new Error("[prerender] could not inject markup");
  return page;
}

function write(file, contents) {
  const out = path.join(publicDir, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, contents);
}

for (const route of routes) {
  const result = render(route.path, route.locale);
  if (!result.html.trim()) throw new Error(`[prerender] empty render for ${route.path}`);
  write(fileForPath(route.path), buildPage(result));
  console.log(`[prerender] ${route.path} -> ${fileForPath(route.path)}`);
}

// Not-found page, served by netlify.toml with HTTP 404 for unknown URLs.
write("404.html", buildPage(render("/404", "en")));
console.log("[prerender] (not found) -> 404.html");

// The renderer is only needed at build time.
fs.rmSync(path.join(root, "dist/server"), { recursive: true, force: true });
