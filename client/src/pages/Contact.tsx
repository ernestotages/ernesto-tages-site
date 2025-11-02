import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-robot honeypot field
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    // Check honeypot - if filled, it's a bot
    if (formData.honeypot) {
      console.log("Bot detected via honeypot");
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrors([t("contact.form.error")]);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors(["Please enter a valid email address."]);
      return;
    }

    // Show success message
    setShowSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });

    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl text-[#121212]">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-[#777777] leading-relaxed">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-8 bg-[#F0FDF4] border border-[#86EFAC] rounded-lg p-6 flex items-start space-x-4 animate-fadeInSlideDown">
                <CheckCircle className="w-6 h-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#16A34A] text-lg font-medium">
                    {t("contact.form.success")}
                  </p>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-t-4 border-[#D9307E]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, visible to bots */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#121212] mb-2 font-medium"
                  >
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#121212] mb-2 font-medium"
                  >
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-[#121212] mb-2 font-medium"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[#121212] mb-2 font-medium"
                  >
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full"
                    required
                  />
                </div>

                {/* Error Messages */}
                {errors.length > 0 && (
                  <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg p-4">
                    {errors.map((error, index) => (
                      <p key={index} className="text-[#DC2626] text-sm">
                        {error}
                      </p>
                    ))}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#D9307E] hover:bg-[#b82567] text-white text-lg py-6 transition-all"
                >
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
