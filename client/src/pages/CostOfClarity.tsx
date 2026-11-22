import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { personRef } from "@/lib/structuredData";
import { Helmet } from "react-helmet-async";
import { Download, ArrowRight } from "lucide-react";

export default function CostOfClarity() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/whitepaper-cost-of-clarity.pdf";
    link.download = "The-Cost-of-Clarity-Ernesto-Tages.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        ogType="article"
        title="The Cost of Clarity: Ethical Leadership Under Tension"
        description="An exploration of how ethical leadership often entails unavoidable costs. For leaders navigating stakeholder tensions."
        ogTitle="The Cost of Clarity — Ethical Leadership Under Tension"
        ogDescription="A reflective exploration of why ethical leadership often entails unavoidable costs, especially in contexts shaped by stakeholder tension and moral responsibility."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "name": "The Cost of Clarity",
            "headline": "How Ethical Leaders Transform Tension into Trust Across Complex Systems",
            "description": "An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them. This white paper examines the practice of costly clarity and how leaders can transform tension into trust through coherent decision-making.",
            "author": personRef,
            "publisher": {
              "@type": "Person",
              "name": "Ernesto Tages",
              "url": "https://ernestotages.com"
            },
            "datePublished": "2025-12-01",
            "inLanguage": "en",
            "url": "https://ernestotages.com/cost-of-clarity"
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
                "name": "The Cost of Clarity",
                "item": "https://ernestotages.com/cost-of-clarity"
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
                <li className="text-[#666666]">The Cost of Clarity</li>
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
                The Cost of Clarity
              </h1>

              <h2 className="text-2xl md:text-3xl text-[#767676] font-light leading-relaxed">
                How Ethical Leaders Transform Tension into Trust Across Complex Systems
              </h2>

              <div className="flex items-center gap-4 text-sm text-[#767676]">
                <span>By Ernesto Tages</span>
                <span>•</span>
                <span>24 pages</span>
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
                An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them. This white paper examines the practice of costly clarity and how leaders can transform tension into trust through coherent decision-making.
              </p>

              <p className="text-lg text-[#767676] leading-relaxed mb-8 text-justify">
                In complex organizational environments, leaders face decisions where every option carries a cost. The temptation is to delay, delegate, or disguise these costs. But ethical leadership demands something different: the courage to name costs clearly, distribute them fairly, and own them publicly.
              </p>

              <p className="text-lg text-[#767676] leading-relaxed mb-12 text-justify">
                This white paper explores how clarity—when practiced with rigor and emotional coherence—becomes a strategic advantage. It examines real-world scenarios where leaders must choose between competing goods, navigate stakeholder tensions, and maintain institutional integrity while acknowledging the human cost of their decisions.
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
                  Free download • 24 pages • PDF format
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
                href="/emotional-excellence"
                className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#D9307E] hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <h4 className="text-xl font-semibold text-[#121212] mb-2">
                  Emotional Excellence
                </h4>
                <p className="text-[#767676] mb-4">
                  Why coherence of emotion, thought, and action has become a strategic advantage for leaders.
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
                <p className="text-[#767676] mb-4">
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
