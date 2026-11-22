import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  applyStoredConsent,
  getConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  setConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Cookie notice. Rendered only in the browser (the choice lives in
 * localStorage), so the pre-rendered HTML contains just the empty live
 * region and hydration is unaffected.
 *
 * - Shown until the visitor accepts or rejects analytics cookies.
 * - Reopened from the footer ("Cookie settings"); focus then moves into the
 *   notice and returns to where it was once a choice is made.
 * - The wrapper is a polite live region, so screen readers announce the
 *   notice when it appears.
 */
export default function CookieNotice() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);
  const focusOnOpen = useRef(false);

  useEffect(() => {
    applyStoredConsent();
    if (getConsent() === null) setOpen(true);

    const reopen = () => {
      returnFocusTo.current = document.activeElement as HTMLElement | null;
      focusOnOpen.current = true;
      setOpen(true);
      // Already open: just move focus into it.
      acceptRef.current?.focus();
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (open && focusOnOpen.current) {
      focusOnOpen.current = false;
      acceptRef.current?.focus();
    }
  }, [open]);

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setOpen(false);
    const target = returnFocusTo.current;
    returnFocusTo.current = null;
    if (target && document.contains(target)) target.focus();
  };

  const buttonClass =
    "min-w-[7rem] px-5 py-2 rounded border border-[#121212] bg-white text-[#121212] text-base font-medium hover:bg-[#121212] hover:text-white transition-colors";

  return (
    <div aria-live="polite">
      {open && (
        <section
          aria-label={t("cookies.label")}
          className="fixed inset-x-0 bottom-0 z-40 p-4"
        >
          <div className="mx-auto max-w-3xl bg-white border border-gray-200 rounded-lg shadow-lg px-6 py-4 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-base text-[#121212] leading-snug text-center sm:text-left flex-1">
              {t("cookies.message")}
              {/*
                PRIVACY POLICY LINK — placeholder.
                When the privacy policy page exists, add a link here, e.g.
                {" "}<Link href="/privacy" className="underline">{t("cookies.privacyLink")}</Link>
                (add "cookies.privacyLink" to the en/es/pt translations, the
                page to routes.ts, sitemap.xml and netlify.toml).
              */}
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                ref={acceptRef}
                type="button"
                className={buttonClass}
                onClick={() => choose("accepted")}
              >
                {t("cookies.accept")}
              </button>
              <button
                type="button"
                className={buttonClass}
                onClick={() => choose("rejected")}
              >
                {t("cookies.reject")}
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
