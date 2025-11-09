import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.alreadySubscribed) {
          toast.info(t("footer.newsletter.already_subscribed"));
        } else {
          toast.success(t("footer.newsletter.success"));
        }
        setEmail("");
      } else {
        console.error("Newsletter subscription error:", data);
        toast.error(t("footer.newsletter.error"));
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error(t("footer.newsletter.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Logo and Tagline */}
          <div className="flex flex-col items-start justify-end space-y-3">
            <img
              src="/logo-methodology.png"
              alt="Methodology Logo"
              className="h-16 w-16"
            />
            <p className="text-lg font-light italic text-gray-300">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Right Column - Newsletter Subscription */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="text-xl font-semibold">{t("footer.newsletter.title")}</h3>
            <p className="text-sm text-gray-300 max-w-md text-left md:text-right">
              {t("footer.newsletter.description")}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2 w-full md:justify-end"
            >
              <Input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-[#121212] border-none w-full sm:max-w-xs"
              />
              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
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
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-600 opacity-50">
            {t("footer.rights")} © {new Date().getFullYear()} Ernesto Tages
          </p>
        </div>
      </div>
    </footer>
  );
}
