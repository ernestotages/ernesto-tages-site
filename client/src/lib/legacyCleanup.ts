/**
 * Removes what earlier versions of the site left in the visitor's browser.
 * The site no longer uses reCAPTCHA or Google Analytics, so for returning
 * visitors this deletes:
 *   - localStorage "_grecaptcha" (reCAPTCHA) and "et-cookie-consent"
 *     (the former analytics cookie notice);
 *   - the Google Analytics cookies _ga, _ga_<id>, _gid and _gat.
 * Runs on page load; once they are gone it finds nothing and changes
 * nothing. It stores nothing itself.
 */
const LEGACY_STORAGE_KEYS = ["_grecaptcha", "et-cookie-consent"];
const GA_COOKIE = /^(_ga|_ga_.+|_gid|_gat.*)$/;

export function removeLegacyBrowserData() {
  try {
    for (const key of LEGACY_STORAGE_KEYS) window.localStorage.removeItem(key);
  } catch {
    // storage unavailable (e.g. blocked): nothing to clean up
  }

  const names = document.cookie
    .split(";")
    .map(c => c.split("=")[0].trim())
    .filter(name => GA_COOKIE.test(name));
  if (!names.length) return;

  // GA set its cookies on the top-most domain it could (".ernestotages.com"),
  // so expire them on the host and on each parent domain.
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.push(`; domain=${d}`, `; domain=.${d}`);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}
