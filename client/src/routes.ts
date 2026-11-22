/**
 * Single source of truth for the public, pre-rendered pages and their
 * language versions.
 *
 * Every path here is rendered to its own static HTML file at build time
 * (see scripts/prerender.mjs), once per locale it is available in:
 *
 *   English    /about      (unprefixed, the default)
 *   Spanish    /es/about
 *   Portuguese /pt/about
 *
 * Slugs are never translated: only the prefix changes.
 *
 * The build fails if a URL in client/public/sitemap.xml is not pre-rendered,
 * if a sitemap entry's hreflang alternates disagree with this file, or if
 * netlify.toml has no rewrite for a pre-rendered page (or no localized 404).
 */
export type Locale = "en" | "es" | "pt";

export const DEFAULT_LOCALE: Locale = "en";

/** All site locales, in the order they are listed in hreflang / the switcher. */
export const LOCALES: Locale[] = ["en", "es", "pt"];

/** Locales whose URLs are pre-rendered. */
export const PRERENDER_LOCALES: Locale[] = LOCALES;

/** Open Graph locale for each language. */
export const OG_LOCALES: Record<Locale, string> = {
  en: "en_GB",
  es: "es_ES",
  pt: "pt_PT",
};

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
  "/privacy",
  "/legal",
] as const;

/**
 * Pages whose content exists in one language only. They live at their
 * unprefixed URL, get no /es/ or /pt/ copy and no hreflang alternates.
 * The value is the language the content is written in (for <html lang>).
 */
export const SINGLE_LANGUAGE_PAGES: Record<string, Locale> = {
  "/clarity-matrix": "en",
  "/cost-of-clarity": "en",
  "/emotional-excellence": "en",
  "/iberoamerican-ethical-leadership": "es",
};

/** True for pages that exist in every locale (and for unknown paths). */
export function isTranslated(path: string): boolean {
  return !(path in SINGLE_LANGUAGE_PAGES);
}

/** URL locales a page is published under. */
export function pageLocales(path: string): Locale[] {
  return isTranslated(path) ? LOCALES : [DEFAULT_LOCALE];
}

/** Language the content at `path` (served under `urlLocale`) is written in. */
export function contentLanguage(path: string, urlLocale: Locale): Locale {
  return SINGLE_LANGUAGE_PAGES[path] ?? urlLocale;
}

/** "/about" + "es" -> "/es/about"; the default locale stays unprefixed. */
export function localizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Where an internal link to `path` should point for a visitor browsing in
 * `locale`: the localized URL when the page has one, otherwise the page's
 * only (unprefixed) URL.
 */
export function localizedHref(path: string, locale: Locale): string {
  if (!path.startsWith("/")) return path;
  const [pathname, rest = ""] = splitSuffix(path);
  // Already localized (e.g. a language-switcher link): leave it alone.
  if (parseLocalePath(pathname).locale !== DEFAULT_LOCALE) return path;
  return (isTranslated(pathname) ? localizedPath(pathname, locale) : pathname) + rest;
}

/** "/es/about" -> { locale: "es", path: "/about" }; "/about" -> { locale: "en", ... }. */
export function parseLocalePath(pathname: string): { locale: Locale; path: string } {
  const match = /^\/(es|pt)(?=\/|$)(.*)$/.exec(pathname);
  if (!match) return { locale: DEFAULT_LOCALE, path: pathname || "/" };
  return { locale: match[1] as Locale, path: match[2] || "/" };
}

function splitSuffix(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ""] : [path.slice(0, i), path.slice(i)];
}

export interface PrerenderRoute {
  /** URL path, including the locale prefix. */
  path: string;
  /** URL locale (prefix). */
  locale: Locale;
  /** Unprefixed page path. */
  page: string;
  /** hreflang -> URL path of every language version (empty for single-language pages). */
  alternates: Partial<Record<Locale, string>>;
}

export function pageAlternates(page: string): Partial<Record<Locale, string>> {
  if (!isTranslated(page)) return {};
  return Object.fromEntries(LOCALES.map(l => [l, localizedPath(page, l)]));
}

export function getPrerenderRoutes(): PrerenderRoute[] {
  return PRERENDER_LOCALES.flatMap(locale =>
    PAGE_PATHS.filter(page => pageLocales(page).includes(locale)).map(page => ({
      path: localizedPath(page, locale),
      locale,
      page,
      alternates: pageAlternates(page),
    }))
  );
}
