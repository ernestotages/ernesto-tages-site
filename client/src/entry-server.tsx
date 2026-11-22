/**
 * Build-time renderer used by scripts/prerender.mjs. Runs in Node, never in
 * the browser. Browser-only code (window, localStorage, the
 * newsletter and contact submit handlers) lives in effects / event handlers, which
 * React does not run during renderToString.
 */
import { renderToString } from "react-dom/server";
import App from "./App";
import type { Locale } from "./routes";

export {
  getPrerenderRoutes,
  PAGE_PATHS,
  LOCALES,
  DEFAULT_LOCALE,
  localizedPath,
} from "./routes";

export function render(url: string, locale: Locale = "en") {
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <App ssrPath={url} helmetContext={helmetContext} initialLanguage={locale} />
  );

  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script].map(t => t.toString()).join("\n    ")
    : "";
  const htmlAttributes = h ? h.htmlAttributes.toString() : "";

  return { html, head, htmlAttributes };
}
