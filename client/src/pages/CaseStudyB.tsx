import { Link } from "wouter";
import { useState } from "react";
import SEO from "@/components/SEO";
import { canonicalUrl, personRef } from "@/lib/structuredData";
import { localizedPath } from "@/routes";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudyB() {
  const [showExtendedReflection, setShowExtendedReflection] = useState(false);
  const { t, language } = useLanguage();
  const pageUrl = (path: string) => canonicalUrl(localizedPath(path, language));
  const p = "resources.caseStudiesPage";
  const c = `${p}.caseB`;

  return (
    <>
      <SEO
        ogType="article"
        title={`${t(`${c}.title`)} | ${t(`${p}.breadcrumbCaseStudies`)}`}
        description={t(`${c}.seoDescription`)}
        lang={language}
        ogTitle={`${t(`${c}.title`)} — ${t(`${p}.breadcrumbCaseStudies`)}`}
        ogDescription={t(`${c}.subtitle`)}
      />
      <div className="min-h-screen bg-white flex flex-col">

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-100 sticky top-[73px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center text-sm text-[#777777]">
              <Link href="/" className="hover:text-[#D9307E] transition-colors">
                {t(`${p}.breadcrumbHome`)}
              </Link>
              <span className="mx-2">›</span>
              <Link href="/resources" className="hover:text-[#D9307E] transition-colors">
                {t(`${p}.breadcrumbResources`)}
              </Link>
              <span className="mx-2">›</span>
              <Link href="/resources/case-studies" className="hover:text-[#D9307E] transition-colors">
                {t(`${p}.breadcrumbCaseStudies`)}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[#121212]">{t(`${c}.title`)}</span>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Header */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Back Navigation Button */}
                <div className="mb-6">
                  <Link
                    href="/resources/case-studies"
                    className="text-[#D9307E] hover:underline inline-flex items-center gap-2"
                  >
                    {t(`${p}.backToCaseStudies`)}
                  </Link>
                </div>
                <h1 className="text-4xl md:text-5xl text-[#121212] font-light">
                  {t(`${c}.title`)}
                </h1>
                <p className="text-2xl text-[#777777] italic">
                  {t(`${c}.subtitle`)}
                </p>
              </div>
            </div>
          </section>

          {/* C1 - Public Case */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">

                {/* The Tension */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">{t(`${c}.tension`)}</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.tensionP1`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.tensionP2`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.tensionP3`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.tensionP4`)}
                  </p>
                </div>

                {/* The Work of Clarification */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">{t(`${c}.clarification`)}</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.clarificationP1`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.clarificationP2`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.clarificationP3`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.clarificationP4`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.clarificationP5`)}
                  </p>
                </div>

                {/* The Outcome */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">{t(`${c}.outcome`)}</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.outcomeP1`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.outcomeP2`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.outcomeP3`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.outcomeP4`)}
                  </p>
                </div>

                {/* Quote between C1 and C2 */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    {t(`${c}.quote1`)}
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Link to C2 */}
          <div className="text-center py-8 bg-white">
            <button
              onClick={() => setShowExtendedReflection(!showExtendedReflection)}
              className="text-lg text-[#777777] hover:text-[#D9307E] transition-colors italic"
            >
              {showExtendedReflection ? t(`${p}.hideExtended`) : t(`${p}.continueExtended`)}
            </button>
          </div>

          {/* C2 - Extended Reflection */}
          {showExtendedReflection && (
          <section id="extended-reflection" className="py-12 bg-[#F4F4F4]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">

                <h2 className="text-3xl text-[#121212] font-light">{t(`${p}.extendedReflection`)}</h2>

                {/* When Competence Stops Orienting Action */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">{t(`${c}.extSection1Title`)}</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P1`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P2`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P3`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P4`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P5`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P6`)}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    {t(`${c}.extSection1P7`)}
                  </p>
                </div>

                {/* Final Quote */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    {t(`${c}.quote2`)}
                  </p>
                </div>

                {/* Discreet Previous/Next Navigation */}
                <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 text-sm text-[#777777]">
                  <Link href="/resources/case-studies/case-a" className="hover:text-[#D9307E] transition-colors">
                    {t(`${c}.prevLabel`)}
                  </Link>
                  <Link href="/resources/case-studies/case-c" className="hover:text-[#D9307E] transition-colors">
                    {t(`${c}.nextLabel`)}
                  </Link>
                </div>

              </div>
            </div>
          </section>
          )}
        </main>

      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": t(`${c}.title`),
          "description": t(`${c}.seoDescription`),
          "author": personRef,
          "datePublished": "2025-12-01",
          "publisher": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "inLanguage": language,
          "url": pageUrl("/resources/case-studies/case-b")
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t(`${p}.breadcrumbHome`),
              "item": pageUrl("/")
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": t(`${p}.breadcrumbResources`),
              "item": pageUrl("/resources")
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": t(`${p}.breadcrumbCaseStudies`),
              "item": pageUrl("/resources/case-studies")
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": t(`${c}.title`),
              "item": pageUrl("/resources/case-studies/case-b")
            }
          ]
        })}
      </script>
    </>
  );
}
