import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { loadRecaptcha, RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";
import { openCookieSettings } from "@/lib/consent";

// Declare grecaptcha on window
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}


export default function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();
  
  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success(t("footer.newsletter.success"));
      setEmail("");
    },
    onError: (error) => {
      console.error("Newsletter subscription error:", error);
      toast.error(t("footer.newsletter.error"));
    },
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subscribeMutation.isPending) return;
    
    try {
      // Load reCAPTCHA on demand (usually already started on input focus)
      try {
        await loadRecaptcha();
      } catch {
        // handled by the check below
      }
      if (typeof window.grecaptcha === 'undefined') {
        toast.error(t("footer.newsletter.adBlocker"));
        return;
      }
      
      // Generate reCAPTCHA token with timeout
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('reCAPTCHA timeout')), 10000)
      );
      
      const recaptchaPromise = new Promise<string>((resolve, reject) => {
        window.grecaptcha.enterprise.ready(async () => {
          try {
            const token = await window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, {
              action: 'newsletter_subscribe'
            });
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });
      
      const token = await Promise.race([recaptchaPromise, timeoutPromise]) as string;
      

      
      // Submit with reCAPTCHA token
      subscribeMutation.mutate({ email, recaptchaToken: token });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      if (error instanceof Error && error.message === 'reCAPTCHA timeout') {
        toast.error(t("footer.newsletter.adBlocker"));
      } else {
        toast.error(t("footer.newsletter.verificationFailed"));
      }
    }
  };

  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Logo and Tagline */}
          <div className="flex flex-col items-start justify-end space-y-3">
            {/* Brand mark: decorative, the tagline next to it names the brand. */}
            <img
              src="/logo-methodology-64.webp"
              srcSet="/logo-methodology-64.webp 1x, /logo-methodology-128.webp 2x"
              alt=""
              width={64}
              height={64}
              loading="lazy"
              className="h-16 w-16"
            />
            <p className="text-lg font-light italic text-gray-300">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Right Column - Newsletter Subscription */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="text-2xl font-light text-white">{t("footer.newsletter.title")}</h3>
            <p className="text-sm text-gray-300 max-w-md text-left md:text-right font-light">
              {t("footer.newsletter.description")}
            </p>
            <p className="text-xs text-[#858585] italic max-w-md text-left md:text-right">
              {t("footer.newsletter.englishOnly")}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2 w-full md:justify-end"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t("footer.newsletter.emailLabel")}
              </label>
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t("footer.newsletter.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {
                  loadRecaptcha().catch(() => {});
                }}
                required
                aria-required="true"
                disabled={subscribeMutation.isPending}
                className="bg-white text-[#121212] border-none w-full sm:max-w-xs placeholder:text-gray-400"
              />
              <Button
                type="submit"
                variant="outline"
                disabled={subscribeMutation.isPending}
                className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-colors disabled:opacity-50 font-light"
              >
                {subscribeMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("footer.newsletter.submitting")}
                  </>
                ) : (
                  t("footer.newsletter.button")
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom - Copyright and reCAPTCHA Notice */}
        <div className="border-t border-gray-600/50 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <p className="text-xs text-[#858585]">
              {t("footer.rights")} © {new Date().getFullYear()} Ernesto Tages
            </p>
            <span aria-hidden="true" className="hidden sm:inline text-xs text-[#858585]">·</span>
            <p className="text-xs text-[#858585]">
              {t("footer.recaptcha.before")}{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                {t("footer.recaptcha.privacy")}
              </a>{" "}
              {t("footer.recaptcha.and")}{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                {t("footer.recaptcha.terms")}
              </a>{" "}
              {t("footer.recaptcha.after")}
            </p>
            <span aria-hidden="true" className="hidden sm:inline text-xs text-[#858585]">·</span>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-xs text-[#858585] underline hover:text-gray-300"
            >
              {t("footer.cookieSettings")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
