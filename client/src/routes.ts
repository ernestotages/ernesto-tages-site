/**
 * Single source of truth for the public, pre-rendered pages.
 *
 * Every path here is rendered to its own static HTML file at build time
 * (see scripts/prerender.mjs). The build fails if a URL in
 * client/public/sitemap.xml is missing from this list, or if netlify.toml
 * has no rewrite for a pre-rendered page.
 *
 * Adding Spanish / Portuguese URLs later:
 *   1. add "es" / "pt" to PRERENDER_LOCALES,
 *   2. add matching `/es/...` and `/pt/...` routes in App.tsx (the router can
 *      use `localizedPath` and pass the locale to <LanguageProvider>),
 *   3. add the new rewrites to netlify.toml and the URLs to sitemap.xml.
 * Each localized page is then rendered with `initialLanguage` set to its locale.
 */
export type Locale = "en" | "es" | "pt";

export const DEFAULT_LOCALE: Locale = "en";

/** Locales whose URLs are pre-rendered. Only English is published today. */
export const PRERENDER_LOCALES: Locale[] = ["en"];

/** Unprefixed (English) paths of every public page. */
export const PAGE_PATHS = [
  "/",
  "/about",
  "/services",
  "/services/individual-consultancy",
  "/services/conferences-seminars",
  "/resources",
  "/resources/insights-essays",
  "/resources/frameworks-tools",
  "/resources/talks",
  "/resources/case-studies",
  "/resources/case-studies/case-a",
  "/resources/case-studies/case-b",
  "/resources/case-studies/case-c",
  "/contact",
  "/clarity-matrix",
  "/cost-of-clarity",
  "/emotional-excellence",
  "/iberoamerican-ethical-leadership",
] as const;

/** "/about" + "es" -> "/es/about"; the default locale stays unprefixed. */
export function localizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export interface PrerenderRoute {
  path: string;
  locale: Locale;
}

export function getPrerenderRoutes(): PrerenderRoute[] {
  return PRERENDER_LOCALES.flatMap(locale =>
    PAGE_PATHS.map(path => ({ path: localizedPath(path, locale), locale }))
  );
}
