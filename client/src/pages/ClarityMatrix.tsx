import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SEO from "@/components/SEO";

export default function ClarityMatrix() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/clarity-matrix-framework.pdf";
    link.download = "The-Clarity-Matrix-Framework-Ernesto-Tages.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="The Clarity Matrix™: Ethical Clarity in Decision-Making"
        description="A framework for ethical clarity under pressure. It helps leaders navigate decisions where tension exists between internal coherence and external action."
        ogTitle="The Clarity Matrix™ — Ethical Clarity Under Pressure"
        ogDescription="A reflective framework offering orientation for leaders navigating ethical tension, power, and responsibility in conditions of uncertainty and pressure."
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
                <li className="text-[#666666]">The Clarity Matrix™</li>
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

        {/* Section I: The Problem */}
        <section className="py-16 px-4 bg-white border-t-2 border-gray-100">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-serif text-[#D9307E]/20">I</span>
              <h3 className="text-3xl font-serif text-[#121212]">
                The Problem It Addresses
              </h3>
            </div>
            <div className="prose prose-lg max-w-none text-[#555555] space-y-4">
              <p className="leading-relaxed">
                In contexts of power, uncertainty, and ethical consequence, leaders face decisions where every option carries weight. The pressure to act can fragment internal coherence. Values become abstract, emotion becomes noise, and action becomes reactive.
              </p>
              <p className="leading-relaxed">
                The question is not whether we act — but from where action emerges: whether it is sustained by internal coherence or driven by unresolved tension.
              </p>
            </div>
          </div>
        </section>

        {/* Section II: The Matrix Visualization */}
        <section className="py-20 px-4 border-t-2 border-gray-100">
          <div className="container max-w-5xl">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-5xl font-serif text-[#D9307E]/20">II</span>
              <h3 className="text-3xl font-serif text-[#121212]">
                The Framework
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <img
                src="/clarity-matrix-diagram.png"
                width={2048}
                height={1143}
                loading="lazy"
                alt="The Clarity Matrix™ - Four quadrants showing Entropic Drift, Moral Containment, Strategic Dislocation, and Ethical Clarity"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section III: Four States */}
        <section className="py-16 px-4 bg-white border-t-2 border-gray-100">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-5xl font-serif text-[#D9307E]/20">III</span>
              <h3 className="text-3xl font-serif text-[#121212]">
                The Four States
              </h3>
            </div>

            <div className="space-y-16">
              {/* State I - Entropic Drift */}
              <div className="border-l-4 border-[#D9307E] pl-6">
                <h4 className="text-2xl font-serif text-[#121212] mb-3">
                  State I — Entropic Drift
                </h4>
                <p className="text-sm text-[#999999] italic mb-4">
                  Fragmentation + Reactivity
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  Entropic Drift occurs when internal coherence erodes under sustained pressure. Values become abstract, emotion becomes noise, and action becomes reactive.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  The leader operates without clear internal reference. Decisions are made under urgency, fatigue, or ambiguity — but without sufficient integration between what is felt, what is believed, and what is done.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium">
                  This is not moral failure. It is disorientation.
                </p>
                <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="text-sm font-semibold text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-2 list-disc list-inside">
                    <li>Where am I losing coherence between emotion, value, and action?</li>
                    <li>What pressure is fragmenting my internal clarity?</li>
                    <li>What decision am I deferring because I cannot yet name what matters?</li>
                  </ul>
                </div>
              </div>

              {/* State II - Moral Containment */}
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
                <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="text-sm font-semibold text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-2 list-disc list-inside">
                    <li>What am I preserving at the cost of action?</li>
                    <li>Which fear is defining the limits of my agency?</li>
                    <li>What responsibility am I holding internally but not enacting?</li>
                  </ul>
                </div>
              </div>

              {/* State III - Strategic Dislocation */}
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
                <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="text-sm font-semibold text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-2 list-disc list-inside">
                    <li>Where am I acting without sufficient internal coherence?</li>
                    <li>What unresolved tension is shaping my decisions without my full awareness?</li>
                    <li>What cost am I externalizing because I have not yet integrated it internally?</li>
                  </ul>
                </div>
              </div>

              {/* State IV - Ethical Clarity */}
              <div className="border-l-4 border-[#D9307E] pl-6">
                <h4 className="text-2xl font-serif text-[#121212] mb-3">
                  State IV — Ethical Clarity
                </h4>
                <p className="text-sm text-[#999999] italic mb-4">
                  Integration + Responsible Agency
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  This is the state where internal coherence and external action align. Values are not abstract — they are felt, embodied, and enacted. Emotion is not noise — it is information. Power is not reactive — it is deliberate.
                </p>
                <p className="text-[#555555] leading-relaxed mb-4">
                  Ethical Clarity does not eliminate tension. It transforms it. The leader acts from a place of integration: aware of cost, clear about values, and capable of sustaining coherence under pressure.
                </p>
                <p className="text-[#555555] leading-relaxed font-medium">
                  This is not perfection. It is orientation.
                </p>
                <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded">
                  <p className="text-sm font-semibold text-[#121212]">Orienting questions:</p>
                  <ul className="text-sm text-[#555555] space-y-2 list-disc list-inside">
                    <li>Where do I feel coherence between what I value, what I feel, and what I do?</li>
                    <li>What decision reflects both internal integration and responsible agency?</li>
                    <li>How can I sustain this clarity when pressure returns?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section IV: How to Use */}
        <section className="py-16 px-4 border-t-2 border-gray-100">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-serif text-[#D9307E]/20">IV</span>
              <h3 className="text-3xl font-serif text-[#121212]">
                How to Use This Framework
              </h3>
            </div>
            <div className="prose prose-lg max-w-none text-[#555555] space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#121212] mb-3">Individual Reflection</h4>
                <p className="leading-relaxed">
                  Use the Clarity Matrix™ as a diagnostic tool for self-assessment. When facing a complex decision, locate yourself within the matrix. Ask: where is my coherence breaking down? What state am I operating from?
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#121212] mb-3">Advisory & Consultancy</h4>
                <p className="leading-relaxed">
                  In one-on-one advisory sessions, the matrix provides a shared language for exploring ethical tension. It allows leaders to name disorientation without judgment and to identify pathways toward greater integration.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#121212] mb-3">Workshops & Executive Sessions</h4>
                <p className="leading-relaxed">
                  In group settings, the framework facilitates collective reflection on organizational dynamics. Teams can map shared challenges, identify systemic patterns, and develop strategies for sustaining ethical clarity under pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section V: For Whom */}
        <section className="py-16 px-4 bg-white border-t-2 border-gray-100">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-serif text-[#D9307E]/20">V</span>
              <h3 className="text-3xl font-serif text-[#121212]">
                For Whom
              </h3>
            </div>
            <div className="prose prose-lg max-w-none text-[#555555]">
              <p className="leading-relaxed mb-6">
                The Clarity Matrix™ is designed for leaders who operate in contexts where ethical consequence is real, where power carries weight, and where decisions shape systems and lives.
              </p>
              <ul className="space-y-3 text-[#555555]">
                <li className="flex items-start gap-3">
                  <span className="text-[#D9307E] mt-1">•</span>
                  <span><strong>Senior executives</strong> navigating strategic decisions with competing stakeholder demands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D9307E] mt-1">•</span>
                  <span><strong>Public leaders</strong> managing institutional integrity under political and social pressure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D9307E] mt-1">•</span>
                  <span><strong>Board members and advisors</strong> seeking clarity on governance and ethical oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D9307E] mt-1">•</span>
                  <span><strong>Founders and entrepreneurs</strong> building organizations aligned with their values</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 px-4 border-t-2 border-gray-100">
          <div className="container max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl font-serif text-[#121212] mb-4">
                Download the Framework
              </h3>
              <p className="text-[#555555] mb-8 max-w-2xl mx-auto">
                Access the complete Clarity Matrix™ framework document, including detailed descriptions, orienting questions, and guidance for practical application.
              </p>
              <Button
                size="lg"
                className="bg-[#D9307E] hover:bg-[#B82567] text-white px-8 py-6 text-lg"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-3" />
                Download Framework (PDF)
              </Button>
              <p className="text-sm text-[#999999] mt-4">
                Free download • PDF format
              </p>
            </div>
          </div>
        </section>

        {/* Closing Section: An Invitation to Further Reflection */}
        <section className="py-20 px-4 bg-white border-t-2 border-gray-100">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-serif text-[#D9307E]/20">VI</span>
              <h3 className="text-3xl font-serif text-[#121212]">
                An Invitation to Further Reflection
              </h3>
            </div>
            <div className="prose prose-lg max-w-none text-[#555555] space-y-4">
              <p className="leading-relaxed">
                The Clarity Matrix™ is not a solution. It is a map. It does not resolve complexity, but it makes orientation possible.
              </p>
              <p className="leading-relaxed">
                Its purpose is not to reduce complexity, but to restore orientation within it.
              </p>
              <p className="leading-relaxed font-medium">
                If this framework resonates with your work, I invite you to explore it further — whether through individual reflection, advisory engagement, or organizational application.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
