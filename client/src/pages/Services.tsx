import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Services() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  // The whole card stays clickable as before; the "Explore" link inside it is
  // the crawlable <a href>, so clicks on it are left to the link itself.
  const openCard = (path: string) => (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    setLocation(path);
  };

  return (
    <>
      <SEO
        title={t("seo.services.title")}
        description={t("seo.services.description")}
        ogTitle={t("seo.services.ogTitle")}
        ogDescription={t("seo.services.ogDescription")}
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
            <p className="text-xl md:text-2xl text-[#707070] leading-relaxed">
              {t("services.hero.subtitle")}
            </p>
            <p className="text-lg text-[#707070] leading-relaxed">
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
              onClick={openCard("/services/individual-consultancy")}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/consultancy.webp"
                  alt={t("services.twoLines.individual.title")}
                  width={937}
                  height={812}
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-2xl text-[#121212]">
                {t("services.twoLines.individual.title")}
              </h3>
              <p className="text-lg text-[#767676] leading-relaxed">
                {t("services.twoLines.individual.tagline")}
              </p>
              <p className="text-base text-[#767676] leading-relaxed">
                {t("services.twoLines.individual.description")}
              </p>
              <div className="mt-6">
                <Link href="/services/individual-consultancy" className="inline-block px-4 py-2 border border-[#D9307E] text-[#D9307E] rounded hover:bg-[#D9307E] hover:text-white transition-colors text-sm">
                  {t("services.explore")}
                </Link>
              </div>
            </div>

            {/* Professional Conferences and Seminars */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D9307E] text-center space-y-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={openCard("/services/conferences-seminars")}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/conferences.webp"
                  alt={t("services.twoLines.conferences.title")}
                  width={937}
                  height={812}
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-2xl text-[#121212]">
                {t("services.twoLines.conferences.title")}
              </h3>
              <p className="text-lg text-[#767676] leading-relaxed">
                {t("services.twoLines.conferences.tagline")}
              </p>
              <p className="text-base text-[#767676] leading-relaxed">
                {t("services.twoLines.conferences.description")}
              </p>
              <div className="mt-6">
                <Link href="/services/conferences-seminars" className="inline-block px-4 py-2 border border-[#D9307E] text-[#D9307E] rounded hover:bg-[#D9307E] hover:text-white transition-colors text-sm">
                  {t("services.explore")}
                </Link>
              </div>
            </div>
          </div>

          <p className="text-lg text-[#767676] text-center mt-12 max-w-4xl mx-auto leading-relaxed">
            {t("services.twoLines.closing")}
          </p>

          {/* Clarity Matrix card */}
          <div className="max-w-3xl mx-auto mt-12">
            <Link href="/clarity-matrix" className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md transition-shadow cursor-pointer text-left">
                <h3 className="text-2xl text-[#121212] mb-3">{t("clarityMatrixCard.title")}</h3>
                <p className="text-lg text-[#767676] mb-4 leading-relaxed">
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
      </section>

      </div>
    </>
  );
}
