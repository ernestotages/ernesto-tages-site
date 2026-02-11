import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudies() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`${t("resources.caseStudiesPage.title")} | Ernesto Tages`}
        description={t("resources.caseStudiesPage.subtitle")}
        lang={language}
        ogTitle={t("resources.caseStudiesPage.title")}
        ogDescription={t("resources.caseStudiesPage.subtitle")}
      />
      <div className="min-h-screen bg-white flex flex-col">

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-100 sticky top-[73px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center text-sm text-[#777777]">
              <Link href="/" className="hover:text-[#D9307E] transition-colors">
                {t("resources.caseStudiesPage.breadcrumbHome")}
              </Link>
              <span className="mx-2">›</span>
              <Link href="/resources" className="hover:text-[#D9307E] transition-colors">
                {t("resources.caseStudiesPage.breadcrumbResources")}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[#121212]">{t("resources.caseStudiesPage.breadcrumbCaseStudies")}</span>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Header Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl text-[#121212] font-light">
                  {t("resources.caseStudiesPage.title")}
                </h1>
                <p className="text-xl text-[#777777] leading-relaxed">
                  {t("resources.caseStudiesPage.subtitle")}
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies List */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">

                {/* Case Study A */}
                <div className="bg-white border-l-4 border-[#D9307E] pl-6 py-6 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl text-[#121212] font-light mb-2">
                    {t("resources.caseStudiesPage.caseA.title")}
                  </h2>
                  <p className="text-lg text-[#777777] italic mb-4">
                    {t("resources.caseStudiesPage.caseA.tagline")}
                  </p>
                  <p className="text-base text-[#777777] leading-relaxed mb-4">
                    {t("resources.caseStudiesPage.caseA.summary")}
                  </p>
                  <Link
                    href="/resources/case-studies/case-a"
                    className="text-[#D9307E] hover:text-[#b82567] transition-colors inline-flex items-center gap-2"
                  >
                    {t("resources.caseStudiesPage.readCaseStudy")}
                    <span>→</span>
                  </Link>
                </div>

                {/* Case Study B */}
                <div className="bg-white border-l-4 border-[#D9307E] pl-6 py-6 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl text-[#121212] font-light mb-2">
                    {t("resources.caseStudiesPage.caseB.title")}
                  </h2>
                  <p className="text-lg text-[#777777] italic mb-4">
                    {t("resources.caseStudiesPage.caseB.tagline")}
                  </p>
                  <p className="text-base text-[#777777] leading-relaxed mb-4">
                    {t("resources.caseStudiesPage.caseB.summary")}
                  </p>
                  <Link
                    href="/resources/case-studies/case-b"
                    className="text-[#D9307E] hover:text-[#b82567] transition-colors inline-flex items-center gap-2"
                  >
                    {t("resources.caseStudiesPage.readCaseStudy")}
                    <span>→</span>
                  </Link>
                </div>

                {/* Case Study C */}
                <div className="bg-white border-l-4 border-[#D9307E] pl-6 py-6 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl text-[#121212] font-light mb-2">
                    {t("resources.caseStudiesPage.caseC.title")}
                  </h2>
                  <p className="text-lg text-[#777777] italic mb-4">
                    {t("resources.caseStudiesPage.caseC.tagline")}
                  </p>
                  <p className="text-base text-[#777777] leading-relaxed mb-4">
                    {t("resources.caseStudiesPage.caseC.summary")}
                  </p>
                  <Link
                    href="/resources/case-studies/case-c"
                    className="text-[#D9307E] hover:text-[#b82567] transition-colors inline-flex items-center gap-2"
                  >
                    {t("resources.caseStudiesPage.readCaseStudy")}
                    <span>→</span>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        </main>

      </div>

      {/* JSON-LD Schema for BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ernestotages.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Resources",
              "item": "https://ernestotages.com/resources"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Case Studies",
              "item": "https://ernestotages.com/resources/case-studies"
            }
          ]
        })}
      </script>
    </>
  );
}
