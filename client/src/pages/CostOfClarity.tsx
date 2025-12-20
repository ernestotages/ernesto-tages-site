import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

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
        title="The Cost of Clarity | Ernesto Tages"
        description="An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them. Learn how leaders can transform tension into trust through coherent decision-making."
        ogTitle="The Cost of Clarity | Ernesto Tages"
        ogDescription="An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them."
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <a href="/" className="inline-block">
              <img
                src="/logo.svg"
                alt="Ernesto Tages"
                className="h-8"
              />
            </a>
          </div>
        </header>

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

              <h2 className="text-2xl md:text-3xl text-[#777777] font-light leading-relaxed">
                How Ethical Leaders Transform Tension into Trust Across Complex Systems
              </h2>

              <div className="flex items-center gap-4 text-sm text-[#777777]">
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
              <p className="text-xl text-[#555555] leading-relaxed mb-8">
                An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them. This white paper examines the practice of costly clarity and how leaders can transform tension into trust through coherent decision-making.
              </p>

              <p className="text-lg text-[#777777] leading-relaxed mb-8">
                In complex organizational environments, leaders face decisions where every option carries a cost. The temptation is to delay, delegate, or disguise these costs. But ethical leadership demands something different: the courage to name costs clearly, distribute them fairly, and own them publicly.
              </p>

              <p className="text-lg text-[#777777] leading-relaxed mb-12">
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
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D9307E] hover:shadow-md transition-all"
              >
                <h4 className="text-xl font-semibold text-[#121212] mb-2">
                  Emotional Excellence
                </h4>
                <p className="text-[#777777]">
                  Why coherence of emotion, thought, and action has become a strategic advantage for leaders.
                </p>
              </a>
              <a
                href="/iberoamerican-ethical-leadership"
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D9307E] hover:shadow-md transition-all"
              >
                <h4 className="text-xl font-semibold text-[#121212] mb-2">
                  El liderazgo ético en Iberoamérica
                </h4>
                <p className="text-[#777777]">
                  How emotion, responsibility, and power shape ethical leadership in Ibero-America.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
