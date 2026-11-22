import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LOCALES, localizedPath, PAGE_PATHS, pageLocales, type Locale } from "@/routes";

const LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

export default function LanguageSelector() {
  const { language, pagePath } = useLanguage();

  // Real links to the same page in the other language. Where that version
  // does not exist (single-language pages, the not-found page) the link goes
  // to the other language's home page instead.
  const isPage = (PAGE_PATHS as readonly string[]).includes(pagePath);
  const target = (code: Locale) =>
    isPage && pageLocales(pagePath).includes(code)
      ? localizedPath(pagePath, code)
      : localizedPath("/", code);

  const otherLanguages = LOCALES.filter(code => code !== language);

  return (
    <div className="flex flex-col space-y-3">
      {/* Current language display with globe icon in magenta */}
      <div className="flex items-center space-x-2 text-[#D9307E]">
        <Globe className="w-5 h-5" />
        <span className="text-lg font-medium">{LABELS[language]}</span>
      </div>

      {/* Other language options in gray */}
      <div className="flex flex-col space-y-2 pl-7">
        {otherLanguages.map(code => (
          <a
            key={code}
            href={target(code)}
            hrefLang={code}
            lang={code}
            className="text-left text-lg text-[#767676] hover:text-[#D9307E] transition-colors"
          >
            {LABELS[code]}
          </a>
        ))}
      </div>
    </div>
  );
}
