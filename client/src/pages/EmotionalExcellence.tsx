import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Download, ArrowRight } from "lucide-react";

export default function EmotionalExcellence() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/whitepaper-emotional-excellence.pdf";
    link.download = "Emotional-Excellence-Ernesto-Tages.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="The Strategic Advantage of Emotional Excellence | Ernesto Tages"
        description="Why coherence of emotion, thought, and action has become a strategic advantage for leaders in complex organizational environments."
        ogTitle="The Strategic Advantage of Emotional Excellence | Ernesto Tages"
        ogDescription="Why coherence of emotion, thought, and action has become a strategic advantage for leaders."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            "name": "Emotional Excellence",
            "headline": "Why coherence of emotion, thought, and action has become a strategic advantage for leaders",
            "description": "In an era where technical competence is table stakes, emotional excellence has emerged as the defining characteristic of exceptional leadership. This white paper explores how the coherence of emotion, thought, and action creates a strategic advantage in complex organizational environments.",
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
            "datePublished": "2025-12-01",
            "inLanguage": "en",
            "url": "https://ernestotages.com/emotional-excellence"
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
                "name": "Emotional Excellence",
                "item": "https://ernestotages.com/emotional-excellence"
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
                <li className="text-[#666666]">Emotional Excellence</li>
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
                Emotional Excellence
              </h1>

              <h2 className="text-2xl md:text-3xl text-[#777777] font-light leading-relaxed">
                Why coherence of emotion, thought, and action has become a strategic advantage for leaders
              </h2>

              <div className="flex items-center gap-4 text-sm text-[#777777]">
                <span>By Ernesto Tages</span>
                <span>•</span>
                <span>27 pages</span>
                <span>•</span>
                <span>December 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#555555] leading-relaxed mb-8 text-justify">
                In an era where technical competence is table stakes, emotional excellence has emerged as the defining characteristic of exceptional leadership. This white paper explores how the coherence of emotion, thought, and action creates a strategic advantage in complex organizational environments.
              </p>

              <p className="text-lg text-[#777777] leading-relaxed mb-8 text-justify">
                Leaders who master emotional excellence don't suppress or ignore emotions—they integrate them intelligently into decision-making. They recognize that emotions carry information, that feelings signal values, and that the gap between what we feel and what we do creates organizational friction that undermines trust and effectiveness.
              </p>

              <p className="text-lg text-[#777777] leading-relaxed mb-12 text-justify">
                This white paper examines the practice of emotional excellence: how leaders develop the capacity to feel clearly, think rigorously, and act coherently even under pressure. It explores the neuroscience of emotional regulation, the organizational cost of emotional incoherence, and the practical disciplines that transform emotional intelligence from a soft skill into a strategic capability.
              </p>

              <div className="border-t border-gray-200 pt-8">
                <Button
                  size="lg"
                  className="bg-[#D9307E] hover:bg-[#B82567] text-white px-8 py-6 text-lg"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download White Paper (PDF)
                </Button>
                <p className="text-sm text-[#999999] mt-4">
                  Free download • 27 pages • PDF format
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
                href="/iberoamerican-ethical-leadership"
                className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <h4 className="text-xl font-semibold text-[#121212] mb-2">
                  El liderazgo ético en Iberoamérica
                </h4>
                <p className="text-[#777777] mb-4">
                  How emotion, responsibility, and power shape ethical leadership in Ibero-America.
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
