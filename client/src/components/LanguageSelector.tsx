import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Português" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);
  const otherLanguages = languages.filter((lang) => lang.code !== language);

  return (
    <div className="flex flex-col space-y-3">
      {/* Current language display with globe icon in magenta */}
      <div className="flex items-center space-x-2 text-[#D9307E]">
        <Globe className="w-5 h-5" />
        <span className="text-lg font-medium">{currentLanguage?.label}</span>
      </div>
      
      {/* Other language options in gray */}
      <div className="flex flex-col space-y-2 pl-7">
        {otherLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as "en" | "es" | "pt")}
            className="text-left text-lg text-[#777777] hover:text-[#D9307E] transition-colors"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
