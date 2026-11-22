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
 *   /es                -> dist/public/es.html
 *   /es/about          -> dist/public/es/about.html
 *   /pt/resources/talks -> dist/public/pt/resources/talks.html
 *   (unknown URLs)     -> dist/public/404.html, es/404.html, pt/404.html
 *                         (served with HTTP 404, in the URL's language)
 *
 * Each page gets <html lang>, a self-referencing canonical, hreflang links to
 * its other language versions and og:locale from the React tree (SEO.tsx).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf8");
const { render, getPrerenderRoutes, LOCALES, DEFAULT_LOCALE, localizedPath } = await import(
  pathToFileURL(serverEntry).href
);
const SITE_URL = "https://ernestotages.com";

export function fileForPath(urlPath) {
  return urlPath === "/" ? "index.html" : `${urlPath.slice(1)}.html`;
}

// --- Consistency checks: fail the build rather than ship an unrendered page ---
const routes = getPrerenderRoutes();
const routePaths = new Set(routes.map(r => r.path));

const sitemap = fs.readFileSync(path.join(root, "client/public/sitemap.xml"), "utf8");
const sitemapEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => ({
  path: new URL(/<loc>([^<]+)<\/loc>/.exec(m[1])[1].trim()).pathname,
  alternates: Object.fromEntries(
    [...m[1].matchAll(/<xhtml:link[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/g)].map(a => [
      a[1],
      new URL(a[2]).pathname,
    ])
  ),
}));
const missingFromRoutes = sitemapEntries.map(e => e.path).filter(p => !routePaths.has(p));
if (missingFromRoutes.length) {
  throw new Error(
    `[prerender] sitemap.xml lists URLs that are not pre-rendered (add them to client/src/routes.ts): ${missingFromRoutes.join(", ")}`
  );
}

// Sitemap hreflang alternates must match the ones the page itself declares.
const expectedAlternates = route => {
  const alt = { ...route.alternates };
  if (alt[DEFAULT_LOCALE]) alt["x-default"] = alt[DEFAULT_LOCALE];
  return alt;
};
const sameAlternates = (a, b) =>
  JSON.stringify(Object.entries(a).sort()) === JSON.stringify(Object.entries(b).sort());
const badAlternates = sitemapEntries
  .filter(e => !sameAlternates(e.alternates, expectedAlternates(routes.find(r => r.path === e.path))))
  .map(e => e.path);
if (badAlternates.length) {
  throw new Error(
    `[prerender] sitemap.xml hreflang alternates do not match client/src/routes.ts for: ${badAlternates.join(", ")}`
  );
}

// A page listed in the sitemap must be listed in every language it exists in.
const sitemapPaths = new Set(sitemapEntries.map(e => e.path));
const missingLanguages = sitemapEntries
  .flatMap(e => Object.values(e.alternates))
  .filter(p => !sitemapPaths.has(p));
if (missingLanguages.length) {
  throw new Error(
    `[prerender] sitemap.xml is missing language versions: ${[...new Set(missingLanguages)].join(", ")}`
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

const notFoundFile = locale => (locale === DEFAULT_LOCALE ? "404.html" : `${locale}/404.html`);
const missing404 = LOCALES.filter(l => l !== DEFAULT_LOCALE).filter(
  l =>
    !new RegExp(
      `from\\s*=\\s*"/${l}/\\*"\\s*\\n\\s*to\\s*=\\s*"/${notFoundFile(l)}"\\s*\\n\\s*status\\s*=\\s*404`
    ).test(toml)
);
if (missing404.length) {
  throw new Error(
    `[prerender] netlify.toml has no localized 404 rule for: ${missing404.map(l => `/${l}/*`).join(", ")}`
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

// Sanity-check the language markup of every pre-rendered page.
function checkPage(route, page) {
  const problems = [];
  const lang = /<html[^>]*\slang="([^"]+)"/.exec(page)?.[1];
  if (!lang) problems.push("no <html lang>");
  if (route.alternates[route.locale] && lang !== route.locale) {
    problems.push(`<html lang="${lang}"> but URL locale is ${route.locale}`);
  }
  const canonical = /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/.exec(page)?.[1];
  const self = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
  if (canonical !== self) problems.push(`canonical is ${canonical}, expected ${self}`);
  const hreflangs = [...page.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"/gi)].map(m => m[1]);
  const expected = Object.keys(expectedAlternates(route));
  if (hreflangs.sort().join() !== expected.sort().join()) {
    problems.push(`hreflang [${hreflangs}] expected [${expected}]`);
  }
  if (/<meta[^>]*name="robots"[^>]*noindex/.test(page)) problems.push("rendered the not-found page");
  if (problems.length) {
    throw new Error(`[prerender] ${route.path}: ${problems.join("; ")}`);
  }
}

for (const route of routes) {
  const result = render(route.path, route.locale);
  if (!result.html.trim()) throw new Error(`[prerender] empty render for ${route.path}`);
  const page = buildPage(result);
  checkPage(route, page);
  write(fileForPath(route.path), page);
  console.log(`[prerender] ${route.path} -> ${fileForPath(route.path)}`);
}

// Not-found pages, served by netlify.toml with HTTP 404 for unknown URLs.
for (const locale of LOCALES) {
  write(notFoundFile(locale), buildPage(render(localizedPath("/404", locale), locale)));
  console.log(`[prerender] (not found, ${locale}) -> ${notFoundFile(locale)}`);
}

// The renderer is only needed at build time.
fs.rmSync(path.join(root, "dist/server"), { recursive: true, force: true });
