import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2 } from "lucide-react";
import { postForm } from "@/lib/forms";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-robot honeypot field
  const [isPending, setIsPending] = useState(false);
  // When the form appeared, for the server's time-based bot check.
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);
  const { t } = useLanguage();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isPending) return;

    setIsPending(true);
    const result = await postForm("subscribe", {
      email,
      botcheck: honeypot,
      elapsedMs: Date.now() - shownAt.current,
    });
    setIsPending(false);

    if (result.ok) {
      toast.success(t("footer.newsletter.success"));
      setEmail("");
    } else if (result.error === "invalid_email") {
      toast.error(t("contact.form.invalidEmail"));
    } else {
      toast.error(t("footer.newsletter.error"));
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
              {/* Honeypot field - hidden from users, filled in by bots */}
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                style={{ display: "none" }}
              />
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
                required
                aria-required="true"
                disabled={isPending}
                className="bg-white text-[#121212] border-none w-full sm:max-w-xs placeholder:text-gray-400"
              />
              <Button
                type="submit"
                variant="outline"
                disabled={isPending}
                className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-colors disabled:opacity-50 font-light"
              >
                {isPending ? (
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

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-600/50 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <p className="text-xs text-[#858585]">
              {t("footer.rights")} © {new Date().getFullYear()} Ernesto Tages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
