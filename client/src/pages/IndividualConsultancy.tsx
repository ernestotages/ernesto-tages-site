import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function IndividualConsultancy() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${t("services.twoLines.individual.title")} | Ernesto Tages`}
        description={t("services.twoLines.individual.description")}
        ogTitle={t("services.twoLines.individual.title")}
        ogDescription={t("services.twoLines.individual.description")}
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
        <section className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl text-[#121212] mb-8">
                {t("services.individualDetails.title")}
              </h1>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.individualDetails.objectives")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.individualDetails.obj1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.individualDetails.obj2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
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
                      <span className="text-lg text-[#707070]">
                        {t("services.individualDetails.mod1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.individualDetails.mod2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.individualDetails.mod3")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#D9307E] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-[#707070]">
                        {t("services.individualDetails.mod4")}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl text-[#121212] mb-4">
                    {t("services.individualDetails.outcome")}
                  </h3>
                  <p className="text-lg text-[#707070] leading-relaxed">
                    {t("services.individualDetails.outcomeText")}
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#D9307E] hover:bg-[#b82567] text-white text-lg px-8 py-6 transition-all"
                  >
                    <Link href="/contact">
                    {t("services.individualDetails.cta")}
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
