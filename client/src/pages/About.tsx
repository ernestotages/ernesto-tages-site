import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";

export default function About() {
  const { t } = useLanguage();
  const [, navigate] = useLocation();

  return (
    <>
      <SEO
        title="About Ernesto Tages | Ethical Leadership Mentor"
        description="Philosopher and consultant with 25+ years of experience in ethical leadership. Supporting executives from public, private, and social sectors to transform complex dilemmas into clear, ethical decisions."
        ogTitle="Ernesto Tages - Profile and Experience"
        ogDescription="Expert in emotional management and decisional clarity. Author, speaker, and mentor for leaders facing complex ethical dilemmas."
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section with Photo */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Photo */}
              <div className="relative">
                <img
                  src="/SiteAbout_2486-520.webp"
                  srcSet="/SiteAbout_2486-520.webp 520w, /SiteAbout_2486-1040.webp 1040w"
                  sizes="(min-width: 768px) 520px, 100vw"
                  alt="Ernesto Tages"
                  width={520}
                  height={780}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Column: Text Content */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl text-[#121212]">
                  {t("about.hero.title")}
                </h1>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t("about.hero.p1")}
                </p>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t("about.hero.p2")}
                </p>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t("about.hero.p3")}
                </p>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t("about.hero.p4")}
                </p>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t("about.hero.p5")}
                </p>
              </div>
            </div>
            {/* Button aligned with text column on desktop, centered on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="hidden md:block"></div>
              <div className="flex justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                  onClick={() => {
                    const element = document.getElementById("approach");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {t("about.hero.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl text-[#121212] text-center">
              {t("about.approach.title")}
            </h2>
            <h3 className="text-xl md:text-2xl text-[#777777] text-center italic">
              {t("about.approach.subtitle")}
            </h3>

            <div className="space-y-6 mt-12">
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("about.approach.intro")}
              </p>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("about.approach.phase1")}
              </p>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("about.approach.phase3")}
              </p>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("about.approach.phase4")}
              </p>

              <div className="bg-[#F4F4F4] p-8 rounded-lg space-y-8 mt-12">
                <h3 className="text-2xl md:text-3xl text-[#121212] text-center mb-8">
                  {t("about.approach.pillarsTitle")}
                </h3>
                <div>
                  <h4 className="text-xl text-[#121212] mb-2">
                    {t("about.approach.pillar1Title")}
                  </h4>
                  <p className="text-lg text-[#777777] italic mb-3">
                    {t("about.approach.pillar1Subtitle")}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed">
                    {t("about.approach.pillar1Text")}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#121212] mb-2">
                    {t("about.approach.pillar2Title")}
                  </h4>
                  <p className="text-lg text-[#777777] italic mb-3">
                    {t("about.approach.pillar2Subtitle")}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed">
                    {t("about.approach.pillar2Text")}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#121212] mb-2">
                    {t("about.approach.pillar3Title")}
                  </h4>
                  <p className="text-lg text-[#777777] italic mb-3">
                    {t("about.approach.pillar3Subtitle")}
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed">
                    {t("about.approach.pillar3Text")}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl text-[#121212] mt-12 text-center">
                {t("about.approach.distinctiveTitle")}
              </h3>
              <p className="text-lg text-[#777777] leading-relaxed">
                {t("about.approach.distinctiveText")}
              </p>

              {/* Blockquote with Reduced Line Spacing */}
              <blockquote className="border-l-4 border-[#D9307E] pl-8 my-12">
                <div className="space-y-2">
                  <p className="text-xl text-[#121212] leading-snug italic">
                    {t("about.approach.blockquote1")}
                  </p>
                  <p className="text-xl text-[#121212] leading-snug italic">
                    {t("about.approach.blockquote2")}
                  </p>
                </div>
              </blockquote>

              <p className="text-lg text-[#777777] leading-relaxed">
                {t("about.approach.closingText")}
              </p>

              {/* CTA Button */}
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => {
                    navigate("/services");
                  }}
                  className="bg-[#D9307E] hover:bg-[#D9307E]/90 text-white px-8 py-3 text-lg"
                >
                  {t("about.approach.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
