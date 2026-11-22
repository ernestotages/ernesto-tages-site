import { FileText, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Resources() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.resources.title")}
        description={t("seo.resources.description")}
        ogTitle={t("seo.resources.ogTitle")}
        ogDescription={t("seo.resources.ogDescription")}
        ogImage="/og-image.png"
      />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#121212]">
              {t("resources.hero.title")}
            </h1>
            <p className="text-xl text-[#777777] leading-relaxed">
              {t("resources.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Four Resource Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Block 1: Insights & Essays */}
            <Link href="/resources/insights-essays" className="h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="flex justify-center mb-4">
                <FileText className="w-16 h-16 text-[#D9307E]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#121212]">
                {t("resources.blocks.insights.title")}
              </h3>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("resources.blocks.insights.description")}
              </p>
            </div>
            </Link>

            {/* Block 2: Frameworks & Tools */}
            <Link href="/resources/frameworks-tools" className="h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-16 h-16 text-[#D9307E]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#121212]">
                {t("resources.blocks.frameworks.title")}
              </h3>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("resources.blocks.frameworks.description")}
              </p>
            </div>
            </Link>

            {/* Block 3: Talks & Conversations — hidden until it has content (route /resources/talks still exists) */}

            {/* Block 4: Case Studies */}
            <Link href="/resources/case-studies" className="h-full">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-16 h-16 text-[#D9307E]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#121212]">
                  {t("resources.blocks.caseStudies.title")}
                </h3>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t("resources.blocks.caseStudies.description")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>


      </div>
    </>
  );
}
