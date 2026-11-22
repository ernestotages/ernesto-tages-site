import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function ConferencesSeminars() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${t("services.twoLines.conferences.title")} | Ernesto Tages`}
        description={t("services.twoLines.conferences.description")}
        ogTitle={t("services.twoLines.conferences.title")}
        ogDescription={t("services.twoLines.conferences.description")}
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
        <section className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl text-[#121212] mb-8">
                {t("services.conferencesDetails.title")}
              </h1>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.conferencesDetails.topics")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.topic1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.topic2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.topic3")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.topic4")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.conferencesDetails.approach")}
                  </h3>
                  <p className="text-lg text-[#707070] leading-relaxed mb-3">
                    {t("services.conferencesDetails.approachText1")}
                  </p>
                  <p className="text-lg text-[#707070] leading-relaxed">
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
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.format1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.format2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.conferencesDetails.format3")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                  >
                    <Link href="/contact">
                    {t("services.conferencesDetails.cta")}
                    </Link>
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
