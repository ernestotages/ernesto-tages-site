import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { FileText, Download, BookOpen, Video, ArrowRight } from "lucide-react";
import { Link } from "wouter";
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

      {/* Four Resource Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Block 1: Insights & Essays */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col"
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
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col"
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
            <Link href="/resources/talks" className="h-full">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 hover:shadow-xl transition-shadow h-full flex flex-col">
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
            </Link>

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

      {/* Expanded Content Sections */}
      {expandedSection === "insights" && (
        <section id="insights-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.insightsDetails.title")}
              </h2>

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
      )}

      {expandedSection === "frameworks" && (
        <section id="frameworks-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8 text-center">
                {t("resources.frameworksDetails.title")}
              </h2>

              <div className="space-y-6">
                {/* Clarity Matrix */}
                <Link href="/clarity-matrix">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="text-2xl font-semibold text-[#121212] mb-3">
                      The Clarity Matrix™
                    </h3>
                    <p className="text-lg text-[#777777] mb-4 leading-relaxed">
                      A framework for ethical clarity under pressure. Navigate complex decisions through four states: Ethical Drift, Moral Containment, Strategic Dislocation, and Ethical Clarity. Designed for orientation, not evaluation.
                    </p>
                    <div className="flex items-center text-[#D9307E] font-medium">
                      <span>Explore framework</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>


              </div>
            </div>
          </div>
        </section>
      )}


      </div>
    </>
  );
}
