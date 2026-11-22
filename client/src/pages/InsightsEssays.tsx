import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function InsightsEssays() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${t("resources.insightsDetails.title")} | Ernesto Tages`}
        description={t("resources.blocks.insights.description")}
        ogTitle={t("resources.insightsDetails.title")}
        ogDescription={t("resources.blocks.insights.description")}
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
        <section className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.insightsDetails.title")}
              </h1>

              <div className="space-y-6">
                {/* White Paper 1 - The Cost of Clarity */}
                <Link href="/cost-of-clarity">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      {t("resources.insightsDetails.whitePapers.costOfClarity.title")}
                    </h3>
                    <p className="text-lg text-[#767676] mb-4 leading-relaxed">
                      {t("resources.insightsDetails.whitePapers.costOfClarity.description")}
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>{t("resources.insightsDetails.readMore")}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>

                {/* White Paper 2 - Emotional Excellence */}
                <Link href="/emotional-excellence">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      {t("resources.insightsDetails.whitePapers.emotionalExcellence.title")}
                    </h3>
                    <p className="text-lg text-[#767676] mb-4 leading-relaxed">
                      {t("resources.insightsDetails.whitePapers.emotionalExcellence.description")}
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>{t("resources.insightsDetails.readMore")}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>

                {/* White Paper 3 - Ibero-American Ethical Leadership */}
                <Link href="/iberoamerican-ethical-leadership">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      {t("resources.insightsDetails.whitePapers.iberoamericanEthicalLeadership.title")}
                    </h3>
                    <p className="text-lg text-[#767676] mb-4 leading-relaxed">
                      {t("resources.insightsDetails.whitePapers.iberoamericanEthicalLeadership.description")}
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>{t("resources.insightsDetails.readMore")}</span>
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
