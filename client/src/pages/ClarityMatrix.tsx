import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SEO from "@/components/SEO";

export default function ClarityMatrix() {
  return (
    <>
      <SEO
        title="The Clarity Matrix™ | Ernesto Tages"
        description="A framework for ethical clarity under pressure. Navigate complex decisions through integration and responsible agency."
        ogTitle="The Clarity Matrix™ | A Framework for Ethical Leadership"
        ogDescription="Navigate complex decisions through integration and responsible agency."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "The Clarity Matrix™",
            "headline": "A framework for ethical clarity under pressure",
            "description": "The Clarity Matrix™ is a framework for ethical clarity under pressure. It helps leaders navigate complex decisions where tension exists between internal coherence and external action.",
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
            "url": "https://ernestotages.com/clarity-matrix"
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
                "name": "The Clarity Matrix™",
                "item": "https://ernestotages.com/clarity-matrix"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header with Breadcrumb */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="py-4">
              <a href="/" className="inline-block">
                <img
                  src="/logo_ET.jpg"
                  alt="Ernesto Tages"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <nav className="pb-3">
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
                <li className="text-[#666666]">
                  The Clarity Matrix™
                </li>
              </ol>
            </nav>
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
                Framework
              </div>

              <h1 className="text-5xl md:text-6xl font-serif text-[#121212] leading-tight">
                The Clarity Matrix™
              </h1>

              <h2 className="text-2xl md:text-3xl text-[#777777] font-light leading-relaxed">
                A framework for ethical clarity under pressure
              </h2>

              <p className="text-lg text-[#555555] leading-relaxed">
                The Clarity Matrix™ is a framework for ethical clarity under pressure. It helps leaders navigate complex decisions where tension exists between internal coherence and external action.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-4xl">
            <h3 className="text-3xl font-serif text-[#121212] mb-6">
              The Problem It Addresses
            </h3>
            <div className="prose prose-lg max-w-none text-[#555555]">
              <p>
                In contexts of power, uncertainty, and ethical consequence, leaders face decisions where every option carries weight. The pressure to act can fragment internal coherence. Values become abstract, emotion becomes noise, and action becomes reactive.
              </p>
              <p>
                The question is not whether we act — but from where action emerges: whether it is sustained by internal coherence or driven by unresolved tension.
              </p>
            </div>
          </div>
        </section>

        {/* The Matrix Visualization */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl">
            <h3 className="text-3xl font-serif text-[#121212] mb-12 text-center">
              The Framework
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <img
                src="/clarity-matrix-diagram.png"
                alt="The Clarity Matrix™ - Four quadrants showing Ethical Drift, Moral Containment, Strategic Dislocation, and Ethical Clarity"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Four States */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-4xl">
            <h3 className="text-3xl font-serif text-[#121212] mb-12">
              The Four States
            </h3>

            <div className="space-y-12">
              {/* State I */}
              <div className="border-l-4 border-[#D9307E] pl-6">
                <h4 className="text-2xl font-serif text-[#121212] mb-3">
                  State I — Ethical Drift
                </h4>
                <p className="text-sm text-[#999999] italic mb-4">
                  Fragmentation + Reactivity
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  Ethical Drift occurs when internal coherence erodes under sustained pressure. Values become abstract, emotion becomes noise, and action becomes reactive.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  The leader operates without clear internal reference. Decisions are made under urgency, fatigue, or ambiguity — but without sufficient integration between what is felt, what is believed, and what is done.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium">
                  This is not moral failure. It is disorientation.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-1 list-disc list-inside">
                    <li>Where am I losing coherence between emotion, value, and action?</li>
                    <li>What pressure is fragmenting my internal clarity?</li>
                    <li>What decision am I deferring because I cannot yet name what matters?</li>
                  </ul>
                </div>
              </div>

              {/* State II */}
              <div className="border-l-4 border-[#D9307E] pl-6">
                <h4 className="text-2xl font-serif text-[#121212] mb-3">
                  State II — Moral Containment
                </h4>
                <p className="text-sm text-[#999999] italic mb-4">
                  Integration + Reactivity
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  Here, internal values are relatively clear, but action is constrained by fear, context, or perceived risk.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  The leader knows what matters, yet struggles to act accordingly. Ethical awareness exists, but agency remains inhibited. Responsibility is felt internally, but not fully expressed externally.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  This state often emerges in highly constrained environments or cultures where deviation carries high personal or systemic cost.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium">
                  Moral Containment preserves values, but at the price of frustration, stagnation, or quiet withdrawal.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-1 list-disc list-inside">
                    <li>What am I preserving at the cost of action?</li>
                    <li>Which fear is defining the limits of my agency?</li>
                    <li>What responsibility am I holding internally but not enacting?</li>
                  </ul>
                </div>
              </div>

              {/* State III */}
              <div className="border-l-4 border-[#D9307E] pl-6">
                <h4 className="text-2xl font-serif text-[#121212] mb-3">
                  State III — Strategic Dislocation
                </h4>
                <p className="text-sm text-[#999999] italic mb-4">
                  Fragmentation + Responsible Agency
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  In this state, action is decisive and influence is real — yet internal coherence is compromised.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  The leader acts, executes, and moves systems. However, unresolved internal tensions distort orientation. Values risk becoming instrumental rather than embodied. Emotions remain unexamined or subordinated to performance.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium mb-4">
                  Power moves faster than clarity.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium">
                  This is a particularly dangerous state, not because of weakness, but because of effectiveness without integration. Ethical risk here is not passivity, but unintended harm and long-term erosion of trust.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-1 list-disc list-inside">
                    <li>What am I avoiding naming internally?</li>
                    <li>Which value is being used rather than lived?</li>
                    <li>What cost am I externalizing through my effectiveness?</li>
                  </ul>
                </div>
              </div>

              {/* State IV */}
              <div className="border-l-4 border-[#D9307E] pl-6">
                <h4 className="text-2xl font-serif text-[#121212] mb-3">
                  State IV — Ethical Clarity
                </h4>
                <p className="text-sm text-[#999999] italic mb-4">
                  Integration + Responsible Agency
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  Ethical Clarity is not the absence of tension, doubt, or risk. It is the capacity to act while remaining internally coherent.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  In this state, emotion, values, and reasoning are sufficiently integrated to sustain responsibility under pressure. Action is intentional, contextual, and ethically grounded without rigidity.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium mb-4">
                  Ethical Clarity does not guarantee correct outcomes. It guarantees ownership.
                </p>
                <p className="text-[#555555] leading-relaxed">
                  This state allows leaders to assume the consequences of their decisions without disintegration or denial.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-1 list-disc list-inside">
                    <li>What am I fully taking responsibility for?</li>
                    <li>What tension am I willing to hold rather than resolve prematurely?</li>
                    <li>From where, internally, is this action emerging?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl">
            <h3 className="text-3xl font-serif text-[#121212] mb-6">
              How to Use the Clarity Matrix™
            </h3>
            <div className="prose prose-lg max-w-none text-[#555555]">
              <p>
                The Clarity Matrix™ is designed for <strong>orientation</strong>, not evaluation.
              </p>
              <p>It can be used:</p>
              <ul>
                <li>as a reflective framework for individual leaders,</li>
                <li>as a qualitative diagnostic lens in advisory contexts,</li>
                <li>as a structuring tool for executive workshops and strategic conversations.</li>
              </ul>
              <p>
                Its value lies not in locating oneself permanently, but in recognizing movement between states — and understanding what is required to regain coherence when clarity is compromised.
              </p>
              <p className="font-medium text-[#121212]">
                There is no ideal permanence within the matrix. Only responsible navigation.
              </p>
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-4xl">
            <h3 className="text-3xl font-serif text-[#121212] mb-6">
              For Whom
            </h3>
            <p className="text-lg text-[#555555] leading-relaxed">
              The Clarity Matrix™ is designed for senior executives, public leaders, board members, and founders who operate in contexts where decisions carry ethical weight and systemic consequence.
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-br from-[#D9307E]/5 to-[#D9307E]/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-serif text-[#121212] mb-4">
                Download the Framework
              </h3>
              <p className="text-[#555555] mb-6">
                Access the complete Clarity Matrix™ framework with detailed explanations of all four states and orienting questions.
              </p>
              <a href="/clarity-matrix-framework.pdf" download>
                <Button className="bg-[#D9307E] hover:bg-[#B8256A] text-white px-8 py-6 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Framework (PDF)
                </Button>
              </a>
              <p className="text-sm text-[#777777] mt-4">
                Free download • 12 pages • PDF format
              </p>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <section className="py-16 px-4 bg-white border-t">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none text-[#555555]">
              <p className="text-xl font-medium text-[#121212] mb-4">
                Clarity does not eliminate risk. It makes responsibility assumable.
              </p>
              <p>
                In contexts of power, uncertainty, and ethical consequence, the question is not whether we act — but from where action emerges: whether it is sustained by internal coherence or driven by unresolved tension.
              </p>
              <p>
                The Clarity Matrix™ offers no solutions. It offers orientation — and the demand to decide from it.
              </p>
              <p className="text-sm text-[#777777] italic">
                Drawing on ethical philosophy, moral psychology, and leadership studies, the Clarity Matrix™ is not reducible to any single discipline, nor to any procedural logic. Its purpose is not to resolve complexity, but to restore orientation within it.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#121212] text-white py-16 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <img
                  src="/logo_ET.jpg"
                  alt="Ernesto Tages"
                  className="h-12 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-400 text-sm">
                  Ethical leadership consultancy and advisory services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/resources" className="hover:text-white transition-colors">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Ernesto Tages. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
