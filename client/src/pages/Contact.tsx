import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { postForm } from "@/lib/forms";

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
  // When the form appeared, for the server's time-based bot check.
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setAttempt(a => a + 1);
    setIsSubmitting(true);

    // Check honeypot - if filled, it's a bot
    if (formData.honeypot) {
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setErrors([t("contact.form.error")]);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrors([t("contact.form.invalidEmail")]);
      setIsSubmitting(false);
      return;
    }

    // Sent by the contact function (netlify/functions/contact.mts), which
    // validates the input again on the server.
    const result = await postForm("contact", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      botcheck: formData.honeypot,
      elapsedMs: Date.now() - shownAt.current,
    });
    setIsSubmitting(false);

    if (result.ok) {
      // Show success message
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else if (result.error === "missing_fields") {
      setErrors([t("contact.form.error")]);
    } else if (result.error === "invalid_email") {
      setErrors([t("contact.form.invalidEmail")]);
    } else {
      setErrors([t("contact.form.sendFailed")]);
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
                {/* Honeypot field - hidden from users, visible to bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  aria-hidden="true"
                  checked={formData.honeypot !== ""}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.checked ? "on" : "" })
                  }
                  className="hidden"
                  style={{ display: "none" }}
                />

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
                    maxLength={100}
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
                    maxLength={254}
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
                    maxLength={200}
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
                    maxLength={5000}
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
