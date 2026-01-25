import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Talks() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${t("resources.talksPage.title")} | Ernesto Tages`}
        description={t("resources.talksPage.description1")}
        ogTitle={t("resources.talksPage.title")}
        ogDescription={t("resources.talksPage.description2")}
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <div className="mb-6">
              <Link href="/resources">
                <a className="text-[#D9307E] hover:underline inline-flex items-center gap-2">
                  ← {t("resources.talksPage.backToResources")}
                </a>
              </Link>
            </div>

            <div className="space-y-6">
              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-serif text-[#121212] leading-tight">
                {t("resources.talksPage.title")}
              </h1>

              {/* Editorial Description */}
              <p className="text-lg text-[#555555] leading-relaxed">
                {t("resources.talksPage.description1")}
              </p>
              <p className="text-lg text-[#555555] leading-relaxed">
                {t("resources.talksPage.description2")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
