import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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

          {/* Right Column - Brevo Newsletter Form (iframe) */}
          <div className="flex flex-col items-start md:items-end">
            <iframe
              width="540"
              height="305"
              src="https://cff690b1.sibforms.com/serve/MUIFAJroweZhwoolfAJSmgVXMtRG-2koeCn8-yjzf_Gpl_aABPW3N5GD-kuowXZoqnkNu_Zyx3dseDzM60EikS0cOdzGkWULzCG3KgDF1aImBdqdc9NNSdLxYxjxYLQ8xtcsRAkpHjmKlZ5bzHOvrda00hSc2Twdr9if2Bkn5GK8vIAxVW6rckewQvj5a8eIrQHMWPpFKzUHbxY3jA=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: '0',
                maxWidth: '100%',
              }}
              title="Newsletter Subscription Form"
            />
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
