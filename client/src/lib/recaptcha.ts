export const RECAPTCHA_SITE_KEY = "6LeeFWgsAAAAANwitFcBtNCVUMXdMo-MXan-o5fn";

let loader: Promise<void> | null = null;

/**
 * Loads the reCAPTCHA Enterprise script on demand (only once), so it is only
 * fetched when a visitor starts using a form that needs it.
 */
export function loadRecaptcha(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha?.enterprise) return Promise.resolve();
  if (loader) return loader;

  loader = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loader = null; // allow a retry (e.g. after disabling an ad blocker)
      script.remove();
      reject(new Error("reCAPTCHA failed to load"));
    };
    document.head.appendChild(script);
  });
  return loader;
}
