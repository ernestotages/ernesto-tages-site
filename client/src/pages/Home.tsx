import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Target, Lightbulb, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Home() {
  const { t } = useLanguage();
  const [, navigate] = useLocation();

  const scrollToStrategic = () => {
    const element = document.getElementById("strategic-support");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title="Liderança Ética e Clareza Decisional | Ernesto Tages"
        description="Um espaço onde rigor e reflexão se transformam em clareza e energia para a ação ética."
        ogTitle="Liderança Ética e Clareza Decisional"
        ogDescription="Rigor, reflexão e integridade ao serviço de líderes que decidem com consciência."
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#121212] leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-[#777777] leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
              <Button
                size="lg"
                className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                onClick={scrollToStrategic}
              >
                {t("home.hero.cta")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Support Section */}
      <section id="strategic-support" className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl text-[#121212] text-center">
              {t("home.strategic.title")}
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("home.strategic.intro1")}
              </p>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("home.strategic.intro2")}
              </p>
            </div>

            {/* Three Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Block 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
                <div className="flex justify-center">
                  <Target className="w-12 h-12 text-[#D9307E]" />
                </div>
                <h3 className="text-xl text-[#121212]">
                  {t("home.strategic.block1.title")}
                </h3>
                <p className="text-base text-[#777777] leading-relaxed">
                  {t("home.strategic.block1.description")}
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
                <div className="flex justify-center">
                  <Lightbulb className="w-12 h-12 text-[#D9307E]" />
                </div>
                <h3 className="text-xl text-[#121212]">
                  {t("home.strategic.block2.title")}
                </h3>
                <p className="text-base text-[#777777] leading-relaxed">
                  {t("home.strategic.block2.description")}
                </p>
              </div>

              {/* Block 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
                <div className="flex justify-center">
                  <Scale className="w-12 h-12 text-[#D9307E]" />
                </div>
                <h3 className="text-xl text-[#121212]">
                  {t("home.strategic.block3.title")}
                </h3>
                <p className="text-base text-[#777777] leading-relaxed">
                  {t("home.strategic.block3.description")}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <Button
                size="lg"
                className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                onClick={() => navigate("/services")}
              >
                {t("home.strategic.cta")}
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
