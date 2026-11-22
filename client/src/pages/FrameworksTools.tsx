import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function FrameworksTools() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${t("resources.frameworksDetails.title")} | Ernesto Tages`}
        description={t("resources.blocks.frameworks.description")}
        ogTitle={t("resources.frameworksDetails.title")}
        ogDescription={t("resources.blocks.frameworks.description")}
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
        <section className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.frameworksDetails.title")}
              </h1>

              <div className="space-y-6">
                {/* Clarity Matrix */}
                <Link href="/clarity-matrix">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      {t("clarityMatrixCard.title")}
                    </h3>
                    <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                      {t("clarityMatrixCard.description")}
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>{t("clarityMatrixCard.cta")}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>


              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
