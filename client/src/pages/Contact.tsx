import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-robot honeypot field
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  // Remounts the error alert on every attempt so a repeated error is announced again.
  const [attempt, setAttempt] = useState(0);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setAttempt(a => a + 1);
    setIsSubmitting(true);

    // Check honeypot - if filled, it's a bot
    if (formData.honeypot) {
      console.log("Bot detected via honeypot");
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrors([t("contact.form.error")]);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors([t("contact.form.invalidEmail")]);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email via Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f13a29e8-61ee-475d-8cb2-6738a6f9779f",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Ernesto Tages Website",
          to_email: "info@ernestotages.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        setErrors([t("contact.form.sendFailed")]);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrors([t("contact.form.sendFailed")]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
        ogTitle={t("seo.contact.ogTitle")}
        ogDescription={t("seo.contact.ogDescription")}
        ogImage="/og-image.png"
      />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl text-[#121212]">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-[#707070] leading-relaxed">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Success Message (status region always present so it is announced) */}
            <div role="status">
            {showSuccess && (
              <div className="mb-8 bg-[#F0FDF4] border border-[#86EFAC] rounded-lg p-6 flex items-start space-x-4 animate-fadeInSlideDown">
                <CheckCircle className="w-6 h-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#12853C] text-lg font-medium">
                    {t("contact.form.success")}
                  </p>
                </div>
              </div>
            )}
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-t-4 border-[#D9307E]">
              {/* noValidate: the form keeps its own (localized) validation messages;
                  `required` / aria-required still mark the fields. */}
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Web3Forms Access Key */}
                <input type="hidden" name="access_key" value="f13a29e8-61ee-475d-8cb2-6738a6f9779f" />
                <input type="hidden" name="from_name" value="Ernesto Tages Website" />
                
                {/* Honeypot field - hidden from users, visible to bots */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#121212] mb-2 font-medium"
                  >
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full"
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
                    name="email"
                    required
                    aria-required="true"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full"
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
                    name="subject"
                    required
                    aria-required="true"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full"
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
                    name="message"
                    required
                    aria-required="true"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full min-h-[150px]"
                  />
                </div>

                {/* Error Messages */}
                {errors.length > 0 && (
                  <div key={attempt} role="alert" className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg p-4">
                    {errors.map((error, index) => (
                      <p key={index} className="text-[#D92525] text-sm">
                        {error}
                      </p>
                    ))}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#D9307E] hover:bg-[#b82567] text-white text-lg py-6 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
