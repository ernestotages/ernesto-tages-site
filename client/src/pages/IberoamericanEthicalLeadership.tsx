import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Download, ArrowRight } from "lucide-react";

export default function IberoamericanEthicalLeadership() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/whitepaper-iberoamerican-ethical-leadership.pdf";
    link.download = "El-liderazgo-etico-en-Iberoamerica-Ernesto-Tages.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="El liderazgo ético en Iberoamérica | Ernesto Tages"
        description="How emotion, responsibility, and power shape ethical leadership in Ibero-America. Seven movements that outline a moral compass for contemporary leadership."
        ogTitle="El liderazgo ético en Iberoamérica | Ernesto Tages"
        ogDescription="Cómo emoción, responsabilidad y poder moldean el liderazgo ético en Iberoamérica."
        lang="es"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            "name": "El liderazgo ético en Iberoamérica",
            "headline": "Cómo emoción, responsabilidad y poder moldean el liderazgo ético en Iberoamérica",
            "description": "Una exploración integral de cómo la emoción, la responsabilidad y el poder moldean el liderazgo ético en Iberoamérica. Este white paper ofrece siete movimientos que trazan una brújula moral para el liderazgo contemporáneo.",
            "author": {
              "@type": "Person",
              "name": "Ernesto Tages",
              "url": "https://ernestotages.com"
            },
            "publisher": {
              "@type": "Person",
              "name": "Ernesto Tages",
              "url": "https://ernestotages.com"
            },
            "datePublished": "2025-10-01",
            "inLanguage": "es",
            "url": "https://ernestotages.com/iberoamerican-ethical-leadership"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ernestotages.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Resources",
                "item": "https://ernestotages.com/resources"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "El liderazgo ético en Iberoamérica",
                "item": "https://ernestotages.com/iberoamerican-ethical-leadership"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ol className="flex items-center gap-2 text-sm text-[#999999]">
                <li>
                  <a href="/" className="hover:text-[#D9307E] transition-colors">
                    Home
                  </a>
                </li>
                <li>›</li>
                <li>
                  <a href="/resources" className="hover:text-[#D9307E] transition-colors">
                    Resources
                  </a>
                </li>
                <li>›</li>
                <li className="text-[#666666]">El liderazgo ético en Iberoamérica</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl">
            <div className="mb-6">
              <a
                href="/resources"
                className="text-[#D9307E] hover:underline inline-flex items-center gap-2"
              >
                ← Back to Resources
              </a>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D9307E]/10 text-[#D9307E] rounded-full text-sm font-medium">
                White Paper
              </div>

              <h1 className="text-5xl md:text-6xl font-serif text-[#121212] leading-tight">
                El liderazgo ético en Iberoamérica
              </h1>

              <h2 className="text-2xl md:text-3xl text-[#777777] font-light leading-relaxed">
                Cómo emoción, responsabilidad y poder moldean el liderazgo ético en Iberoamérica
              </h2>

              <div className="flex items-center gap-4 text-sm text-[#777777]">
                <span>Por Ernesto Tages</span>
                <span>•</span>
                <span>31 páginas</span>
                <span>•</span>
                <span>Octubre 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#555555] leading-relaxed mb-8 text-justify">
                Una exploración integral de cómo la emoción, la responsabilidad y el poder moldean el liderazgo ético en Iberoamérica. Este white paper ofrece siete movimientos que trazan una brújula moral para el liderazgo contemporáneo.
              </p>

              <p className="text-lg text-[#777777] leading-relaxed mb-8 text-justify">
                El liderazgo ético en Iberoamérica no puede ser importado de otras tradiciones sin adaptación. Surge de una historia particular de tensiones entre lo individual y lo colectivo, entre la autoridad formal y la legitimidad moral, entre las instituciones heredadas y las aspiraciones democráticas.
              </p>

              <p className="text-lg text-[#777777] leading-relaxed mb-12 text-justify">
                Este white paper examina cómo los líderes iberoamericanos navegan dilemas éticos específicos de la región: el peso de las jerarquías informales, la gestión de lealtades cruzadas, la construcción de confianza en contextos de alta incertidumbre, y la práctica del poder con responsabilidad en sistemas donde las reglas formales coexisten con normas culturales profundas.
              </p>

              <div className="border-t border-gray-200 pt-8">
                <Button
                  size="lg"
                  className="bg-[#D9307E] hover:bg-[#B82567] text-white px-8 py-6 text-lg"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Descargar White Paper (PDF)
                </Button>
                <p className="text-sm text-[#999999] mt-4">
                  Descarga gratuita • 31 páginas • Formato PDF
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-4xl">
            <h3 className="text-2xl font-serif text-[#121212] mb-8">
              Related Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/cost-of-clarity"
                className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <h4 className="text-xl font-semibold text-[#121212] mb-2">
                  The Cost of Clarity
                </h4>
                <p className="text-[#777777] mb-4">
                  How ethical leaders transform tension into trust across complex systems.
                </p>
                <div className="flex items-center text-[#D9307E] font-medium">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
              <a
                href="/emotional-excellence"
                className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <h4 className="text-xl font-semibold text-[#121212] mb-2">
                  Emotional Excellence
                </h4>
                <p className="text-[#777777] mb-4">
                  Why coherence of emotion, thought, and action has become a strategic advantage for leaders.
                </p>
                <div className="flex items-center text-[#D9307E] font-medium">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
