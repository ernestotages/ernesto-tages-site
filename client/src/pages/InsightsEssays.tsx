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
                      The Cost of Clarity
                    </h3>
                    <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                      An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them. This white paper examines the practice of costly clarity and how leaders can transform tension into trust through coherent decision-making.
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>

                {/* White Paper 2 - Emotional Excellence */}
                <Link href="/emotional-excellence">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      Emotional Excellence
                    </h3>
                    <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                      Why coherence of emotion, thought, and action has become a strategic advantage for leaders. This white paper explores how emotional excellence transforms leadership effectiveness in complex organizational environments.
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>

                {/* White Paper 3 - Ibero-American Ethical Leadership */}
                <Link href="/iberoamerican-ethical-leadership">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      El liderazgo ético en Iberoamérica
                    </h3>
                    <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                      A comprehensive exploration of how emotion, responsibility, and power shape ethical leadership in Ibero-America. This white paper offers seven movements that outline a moral compass for contemporary leadership.
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>Read more</span>
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
