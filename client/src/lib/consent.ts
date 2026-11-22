/**
 * Analytics consent.
 *
 * Google Analytics (gtag.js) is never part of the HTML. It is injected only
 * after the visitor explicitly accepts analytics cookies, so before consent
 * (or after a rejection) no request goes to googletagmanager.com or
 * google-analytics.com and no _ga cookie is set.
 *
 * The choice is stored in localStorage under CONSENT_KEY.
 */
export const GA_MEASUREMENT_ID = "G-BL2GRBTZ37";
export const CONSENT_KEY = "et-cookie-consent";
/** Fired (on window) to reopen the cookie notice, e.g. from the footer. */
export const OPEN_COOKIE_SETTINGS_EVENT = "et:open-cookie-settings";

export type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null; // storage blocked: treat as "not decided"
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // storage blocked: the choice applies to this page view only
  }
  if (choice === "accepted") {
    loadAnalytics();
  } else {
    disableAnalytics();
  }
}

let loaded = false;

/** Injects gtag.js once. Call only after consent has been given. */
export function loadAnalytics() {
  if (typeof window === "undefined") return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (loaded) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the Arguments object itself.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/** Stops tracking (if gtag was loaded in this visit) and deletes _ga cookies. */
export function disableAnalytics() {
  if (typeof window === "undefined") return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  removeAnalyticsCookies();
}

/** Deletes every Google Analytics cookie (_ga, _ga_<id>, _gid, _gat...). */
export function removeAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map(c => c.split("=")[0].trim())
    .filter(name => /^(_ga|_gid|_gat)/.test(name));
  if (!names.length) return;

  // GA sets its cookies on the top-most domain it can (".ernestotages.com"),
  // so try the host and each parent domain.
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

/** Applies a choice stored in an earlier visit. */
export function applyStoredConsent() {
  const choice = getConsent();
  if (choice === "accepted") loadAnalytics();
  else if (choice === "rejected") removeAnalyticsCookies();
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
