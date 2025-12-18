import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { FileText, Download, BookOpen, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Resources() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleDownload = (title: string, url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      toast.info(`"${title}" will be available soon. Stay tuned!`);
    }
  };

  const toggleSection = (section: string) => {
    const newSection = expandedSection === section ? null : section;
    setExpandedSection(newSection);
  };

  useEffect(() => {
    if (expandedSection) {
      setTimeout(() => {
        const element = document.getElementById(`${expandedSection}-details`);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [expandedSection]);

  return (
    <>
      <SEO
        title="Reflection and Ethical Leadership Resources | Ernesto Tages"
        description="Articles, essays, and practical tools on ethical leadership, emotional management, and decisional clarity. Free resources for executives seeking to decide with integrity."
        ogTitle="Free Resources: Articles and Ethical Leadership Tools"
        ogDescription="Library of content on ethical dilemmas, emotion management, and conscious decision-making. For leaders who value rigor and integrity."
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

      {/* Three Resource Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Block 1: Insights & Essays */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection("insights")}
            >
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

            {/* Block 2: Frameworks & Tools */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection("frameworks")}
            >
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

            {/* Block 3: Talks & Conversations */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection("talks")}
            >
              <div className="flex justify-center mb-4">
                <Video className="w-16 h-16 text-[#D9307E]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#121212]">
                {t("resources.blocks.talks.title")}
              </h3>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("resources.blocks.talks.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Content Sections */}
      {expandedSection === "insights" && (
        <section id="insights-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.insightsDetails.title")}
              </h2>

              <div className="space-y-6">
                {/* White Paper - Ibero-American Ethical Leadership */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    El liderazgo ético en Iberoamérica
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    A comprehensive exploration of how emotion, responsibility, and power shape ethical leadership in Ibero-America. This white paper offers seven movements that outline a moral compass for contemporary leadership.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload("El liderazgo ético en Iberoamérica", "/whitepaper-iberoamerican-ethical-leadership.pdf")
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.insightsDetails.download")}
                  </Button>
                </div>

                {/* Essay 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.insightsDetails.essay1.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.insightsDetails.essay1.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.insightsDetails.essay1.title"))
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.insightsDetails.download")}
                  </Button>
                </div>

                {/* Essay 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.insightsDetails.essay2.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.insightsDetails.essay2.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() => handleDownload(t("resources.insightsDetails.essay2.title"))}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.insightsDetails.download")}
                  </Button>
                </div>

                {/* Essay 3 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.insightsDetails.essay3.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.insightsDetails.essay3.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.insightsDetails.essay3.title"))
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.insightsDetails.download")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {expandedSection === "frameworks" && (
        <section id="frameworks-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.frameworksDetails.title")}
              </h2>

              <div className="space-y-6">
                {/* Framework 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.frameworksDetails.framework1.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.frameworksDetails.framework1.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.frameworksDetails.framework1.title"))
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.frameworksDetails.download")}
                  </Button>
                </div>

                {/* Framework 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.frameworksDetails.framework2.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.frameworksDetails.framework2.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.frameworksDetails.framework2.title"))
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.frameworksDetails.download")}
                  </Button>
                </div>

                {/* Framework 3 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.frameworksDetails.framework3.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.frameworksDetails.framework3.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.frameworksDetails.framework3.title"))
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("resources.frameworksDetails.download")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {expandedSection === "talks" && (
        <section id="talks-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.talksDetails.title")}
              </h2>

              <div className="space-y-6">
                {/* Talk 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.talksDetails.talk1.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.talksDetails.talk1.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.talksDetails.talk1.title"))
                    }
                  >
                    <Video className="w-4 h-4 mr-2" />
                    {t("resources.talksDetails.watch")}
                  </Button>
                </div>

                {/* Talk 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.talksDetails.talk2.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.talksDetails.talk2.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.talksDetails.talk2.title"))
                    }
                  >
                    <Video className="w-4 h-4 mr-2" />
                    {t("resources.talksDetails.watch")}
                  </Button>
                </div>

                {/* Talk 3 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                    {t("resources.talksDetails.talk3.title")}
                  </h3>
                  <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                    {t("resources.talksDetails.talk3.description")}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#D9307E] text-[#D9307E] hover:bg-[#D9307E] hover:text-white transition-all"
                    onClick={() =>
                      handleDownload(t("resources.talksDetails.talk3.title"))
                    }
                  >
                    <Video className="w-4 h-4 mr-2" />
                    {t("resources.talksDetails.watch")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      </div>
    </>
  );
}
