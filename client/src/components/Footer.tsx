import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

// Declare grecaptcha on window
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = "6Le0Zg4sAAAAAG0UQJJtvpSuOJ7I5IRcnCFHL1_3";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();
  
  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("Thank you for subscribing!");
      setEmail("");
    },
    onError: (error) => {
      console.error("Newsletter subscription error:", error);
      toast.error("Subscription failed. Please try again.");
    },
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subscribeMutation.isPending) return;
    
    try {
      // Generate reCAPTCHA token
      await window.grecaptcha.ready(async () => {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
          action: 'newsletter_subscribe'
        });
        
        // Submit with reCAPTCHA token
        subscribeMutation.mutate({ 
          email,
          recaptchaToken: token 
        });
      });
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      toast.error("Verification failed. Please try again.");
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
            <h3 className="text-2xl font-light text-white">The Clarity Compass</h3>
            <p className="text-sm text-gray-300 max-w-md text-left md:text-right font-light">
              Thoughtful reflections for leaders seeking clarity, integrity and calm in complexity.
            </p>
            <p className="text-xs text-gray-500 italic max-w-md text-left md:text-right">
              Available in English only.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2 w-full md:justify-end"
            >
              <Input
                type="email"
                placeholder="*E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom - Copyright and reCAPTCHA Notice */}
        <div className="border-t border-gray-600/50 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <p className="text-[10px] text-gray-600 opacity-50">
              {t("footer.rights")} © {new Date().getFullYear()} Ernesto Tages
            </p>
            <span className="hidden sm:inline text-gray-600 opacity-50">·</span>
            <p className="text-[10px] text-gray-600 opacity-50">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
