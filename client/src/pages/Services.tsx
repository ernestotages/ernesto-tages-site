import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { User, Users, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Services() {
  const [, setLocation] = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t } = useLanguage();

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
        title="Consultoria e Conferências em Liderança Ética | Ernesto Tages"
        description="Consultoria individual e programas corporativos em liderança ética. Sessões estratégicas, conferências e seminários que integram rigor intelectual, gestão emocional e integridade."
        ogTitle="Serviços: Consultoria Individual e Programas Corporativos"
        ogDescription="Apoio personalizado para executivos e equipas que enfrentam dilemas éticos complexos. Clareza decisional e liderança consciente."
        ogImage="/og-image.png"
      />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl text-[#121212]">
              {t("services.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-[#777777] leading-relaxed">
              {t("services.hero.subtitle")}
            </p>
            <p className="text-lg text-[#777777] leading-relaxed">
              {t("services.hero.intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Two Lines of Work */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-[#121212] text-center mb-12">
            {t("services.twoLines.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Individual Consultancy */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection("individual")}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/consultancy.webp"
                  alt="Individual Consultancy"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-2xl text-[#121212]">
                {t("services.twoLines.individual.title")}
              </h3>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("services.twoLines.individual.tagline")}
              </p>
              <p className="text-base text-[#777777] leading-relaxed">
                {t("services.twoLines.individual.description")}
              </p>
              <div className="mt-6">
                <button className="px-4 py-2 border border-[#D9307E] text-[#D9307E] rounded hover:bg-[#D9307E] hover:text-white transition-colors text-sm">
                  {t("services.explore")}
                </button>
              </div>
            </div>

            {/* Professional Conferences and Seminars */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection("conferences")}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/conferences.webp"
                  alt="Professional Conferences and Seminars"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-2xl text-[#121212]">
                {t("services.twoLines.conferences.title")}
              </h3>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("services.twoLines.conferences.tagline")}
              </p>
              <p className="text-base text-[#777777] leading-relaxed">
                {t("services.twoLines.conferences.description")}
              </p>
              <div className="mt-6">
                <button className="px-4 py-2 border border-[#D9307E] text-[#D9307E] rounded hover:bg-[#D9307E] hover:text-white transition-colors text-sm">
                  {t("services.explore")}
                </button>
              </div>
            </div>
          </div>

          <p className="text-lg text-[#777777] text-center mt-12 max-w-4xl mx-auto leading-relaxed">
            {t("services.twoLines.closing")}
          </p>
        </div>
      </section>

      {/* Individual Consultancy Details - Expanded */}
      {expandedSection === "individual" && (
        <section id="individual-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-[#121212] mb-8">
                {t("services.individualDetails.title")}
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.individualDetails.objectives")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.obj1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.obj2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.obj3")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.individualDetails.modalities")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.mod1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.mod2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.mod3")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.individualDetails.mod4")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.individualDetails.outcome")}
                  </h3>
                  <p className="text-lg text-[#777777] leading-relaxed">
                    {t("services.individualDetails.outcomeText")}
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                    onClick={() => setLocation("/contact")}
                  >
                    {t("services.individualDetails.cta")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Professional Conferences and Seminars Details - Expanded */}
      {expandedSection === "conferences" && (
        <section id="conferences-details" className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-[#121212] mb-8">
                {t("services.conferencesDetails.title")}
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.conferencesDetails.topics")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.topic1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.topic2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.topic3")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.topic4")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.conferencesDetails.approach")}
                  </h3>
                  <p className="text-lg text-[#777777] leading-relaxed mb-3">
                    {t("services.conferencesDetails.approachText1")}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed">
                    {t("services.conferencesDetails.approachText2")}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.conferencesDetails.formats")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.format1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.format2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#777777]">
                        {t("services.conferencesDetails.format3")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                    onClick={() => setLocation("/contact")}
                  >
                    {t("services.conferencesDetails.cta")}
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
