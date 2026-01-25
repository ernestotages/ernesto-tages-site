import { Link } from "wouter";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function CaseStudyA() {
  const [showExtendedReflection, setShowExtendedReflection] = useState(false);

  return (
    <>
      <SEO
        title="When Every Option Has a Cost | Case Studies"
        description="A senior executive faces mounting pressure to approve a decision that is legally defensible but carries significant personal and relational costs."
        lang="en"
        ogTitle="When Every Option Has a Cost — Case Study"
        ogDescription="Deciding without innocence, but with integrity. A reflective case study on ethical leadership under systemic pressure."
      />
      <div className="min-h-screen bg-white flex flex-col">
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-100 sticky top-[73px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center text-sm text-[#777777]">
              <Link href="/" className="hover:text-[#D9307E] transition-colors">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link href="/resources" className="hover:text-[#D9307E] transition-colors">
                Resources
              </Link>
              <span className="mx-2">›</span>
              <Link href="/resources/case-studies" className="hover:text-[#D9307E] transition-colors">
                Case Studies
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[#121212]">When Every Option Has a Cost</span>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Header */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Back Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    href="/resources"
                    className="text-[#D9307E] hover:underline inline-flex items-center gap-2"
                  >
                    ← Back to Resources
                  </Link>
                  <span className="hidden sm:inline text-[#777777]">|</span>
                  <Link
                    href="/resources/case-studies"
                    className="text-[#D9307E] hover:underline inline-flex items-center gap-2"
                  >
                    ← Back to Case Studies
                  </Link>
                </div>
                <h1 className="text-4xl md:text-5xl text-[#121212] font-light">
                  When Every Option Has a Cost
                </h1>
                <p className="text-2xl text-[#777777] italic">
                  Deciding without innocence, but with integrity.
                </p>
              </div>
            </div>
          </section>

          {/* C1 - Public Case */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">
                
                {/* The Tension */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Tension</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    A senior executive in a large organization faced mounting pressure to approve a strategic decision that was legally defensible and economically rational, but that would impose significant costs on people he had worked with for years — people whose trust had been essential to his authority. Board members emphasized institutional necessity and competitive pressure. Yet he knew that once announced, the decision would redefine how he was perceived, both by those affected and by himself.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    He had made defensible decisions before — but was increasingly troubled by the gap between what he could justify externally and what he could sustain internally without erosion. Legally defensible paths conflicted with internal commitments. Strategic necessities collided with personal credibility. Delay would compound pressure; action would invite scrutiny. There was no neutral ground, no solution that would leave all interests intact.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The question was not whether someone would be disappointed — that was inevitable — but whether the decision could be made without requiring self-deception to sustain it. What was at stake was not only the outcome, but the form of authority this leader would carry after the decision became public.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    At first glance, the dilemma appeared technical: mapping risks, calculating exposure, distributing responsibility across organizational structures. Yet beneath this procedural surface lay a deeper tension — one that was ethical and, ultimately, personal.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The executive was not asking, "What is the right decision?" He was asking, often without voicing it, "How do I make this decision without losing myself — or waking up at 3 a.m. knowing I've become someone I don't recognize?"
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The real danger was not making the wrong call. It was making a defensible call that corroded something essential internally while remaining plausible externally.
                  </p>
                </div>

                {/* The Work of Clarification */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Work of Clarification</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work did not begin with evaluating options. It began by slowing down the urgency that framed the decision as purely strategic, and by resisting the pressure to optimize outcomes before clarifying what was actually being optimized for.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The focus shifted to criteria:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-[#777777] leading-relaxed ml-4">
                    <li>Which values were genuinely guiding the decision, and which were being invoked as justification after preferences had already formed?</li>
                    <li>What costs were structurally unavoidable — and which were being denied or displaced onto others without acknowledgment?</li>
                    <li>What kind of responsibility was being exercised: reactive (responding to pressure), protective (minimizing exposure), or assumptive (accepting consequences as part of the decision)?</li>
                  </ul>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    As these questions were explored, a shift occurred. The executive stopped searching for the least damaging option and began clarifying the terms under which damage could be assumed without requiring distortion to remain inhabitable.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This did not resolve the tension. It clarified what was at stake in resolving it.
                  </p>
                </div>

                {/* The Outcome */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Outcome</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The decision that emerged did not protect all interests, nor did it eliminate conflict. It did, however, restore authorship.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The executive chose a path that involved visible costs and accepted that those costs would have to be carried openly, without rhetorical mitigation. The decision became inhabitable — not because it was comfortable, but because it was coherent.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    In the weeks that followed, he could lead without the constant internal noise of justification. The decision remained difficult to explain in certain contexts — but it no longer required him to distort either the facts or himself in order to defend it. Criticism could be faced without needing defensiveness to remain functional.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The pressure did not disappear. But it no longer impaired judgment. He could think ahead again. Authority was no longer spent managing internal contradiction — it became available for the work that actually required it. Discernment had been restored, and with it the capacity to decide again without erosion.
                  </p>
                </div>

                {/* Quote between C1 and C2 */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    Integrity is not choosing the best outcome. It is choosing the decision whose cost you are willing to carry without distortion.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Link to C2 */}
          <div className="text-center py-8 bg-white">
            <button
              onClick={() => setShowExtendedReflection(!showExtendedReflection)}
              className="text-lg text-[#777777] hover:text-[#D9307E] transition-colors italic"
            >
              {showExtendedReflection ? "Hide extended reflection ↑" : "Continue with the extended reflection →"}
            </button>
          </div>

          {/* C2 - Extended Reflection */}
          {showExtendedReflection && (
          <section id="extended-reflection" className="py-12 bg-[#F4F4F4]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">
                
                <h2 className="text-3xl text-[#121212] font-light">Extended Reflection</h2>

                {/* Clearing Fog Without Simplifying Reality */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">Clearing Fog Without Simplifying Reality</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What made this decision difficult was not uncertainty, but clarity. What made this situation dangerous was not complexity alone, but the erosion of discernment under sustained pressure.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    From relatively early in the process, the executive understood the contours of the situation. The facts were known. Scenarios had been mapped. Legal counsel had provided their analysis; financial advisors had modelled implications. What remained unresolved was not what could happen, but what it would mean to act — and whether that meaning could be sustained over time without requiring self-justification to remain tolerable.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This is a less discussed form of difficulty: when ambiguity is low, but responsibility is high, and the decision cannot be deferred to process or delegated to expertise.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    One of the first illusions that required dismantling was the hope for a clean solution — a decision that could be defended comprehensively, leaving no ethical remainder. In situations of genuine ethical tension, this hope often presents itself as professionalism. Leaders tell themselves they are seeking robustness, objectivity, institutional alignment. In reality, they may be seeking innocence: a way to act without feeling implicated in loss, a way to decide without having to carry what the decision costs.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    But some decisions are irreducibly implicating. They cannot be made without cost, and they cannot be made without remainder. Recognizing this — not as failure, but as the actual structure of the situation — was a turning point.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The executive was not asking, "What is the right decision?" He was asking, "When did making defensible decisions start feeling like slow self-betrayal?"
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    He was competent, experienced, trusted by peers. Yet he was increasingly uncertain whether those qualities still connected to anything he recognized as himself — or whether they had become performances he maintained to remain functional.
                  </p>
                </div>

                {/* Responsibility Beyond Justification */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">Responsibility Beyond Justification</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    A recurring dynamic in the clarification process was the tension between justification and responsibility. Not justification in a cynical sense, but in a deeply human one.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The executive repeatedly returned to questions such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-[#777777] leading-relaxed ml-4">
                    <li>"Will this stand up to scrutiny if challenged?"</li>
                    <li>"Can this be defended without weakening my position?"</li>
                    <li>"How do I explain this in a way that protects institutional credibility?"</li>
                  </ul>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    These are legitimate concerns. Leadership operates in environments where decisions must be accountable to multiple constituencies, and where vulnerability can be exploited.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Yet when these concerns dominate the decisional process, they subtly shift responsibility outward. The decision becomes oriented toward defensibility rather than coherence. It becomes a move in a strategic game, rather than an act that can be owned.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work consisted in re-centering responsibility inward — not as an alternative to accountability, but as its ethical foundation:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-[#777777] leading-relaxed ml-4">
                    <li>Could the decision be explained without strategic rhetoric?</li>
                    <li>Could it be owned not only in the moment of announcement, but over time, as consequences unfolded?</li>
                    <li>Could it be inhabited without resentment, without the need to constantly re-justify it to oneself?</li>
                  </ul>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This was not about moral purity or self-righteousness. It was about the sustainability of self-respect — the condition under which authority remains exercisable without requiring denial to remain functional.
                  </p>
                </div>

                {/* The Role of Loss */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">The Role of Loss</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    As clarity increased, so did the visibility of loss.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Something would be damaged: trust in one direction, credibility in another, relationships that could not be preserved intact, institutional arrangements that would require renegotiation. The initial impulse was to minimize this loss through narrative — to present it as temporary, necessary, strategic, or as the unavoidable cost of a larger good.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work consisted in resisting that impulse. Not because narrative is illegitimate, but because when narrative precedes acknowledgment, it becomes a form of concealment — from others, but more importantly, from oneself.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The question became: Which loss can be acknowledged without denial, and which consequences can be accepted as structurally linked to the decision, rather than as unfortunate side effects that might have been avoided with better execution?
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This reframing did not remove pain or difficulty from the decision. It removed the need for self-deception in order to proceed.
                  </p>
                </div>

                {/* Decision as Self-Commitment */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">Decision as Self-Commitment</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Eventually, the decision emerged not as a conclusion reached through optimization, but as a commitment made in full awareness of what it entailed.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    A commitment to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-[#777777] leading-relaxed ml-4">
                    <li>accept consequences without theatrical justification,</li>
                    <li>resist the urge to moralize after the fact, presenting the decision as heroic or as evidence of superior ethical judgment,</li>
                    <li>remain accountable beyond the moment of decision — to live with what was chosen, not only to announce it.</li>
                  </ul>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    In this sense, the decision was less about solving a problem and more about assuming a position in the ethical landscape the executive already inhabited, but had been reluctant to occupy explicitly.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Ethical clarity does not promise relief. It promises orientation.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    In situations where every option carries cost, clarity does not save us from loss. It saves us from fragmentation — from making decisions we cannot sustain without distorting either the decision or ourselves.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This work is possible only when there is willingness to examine what remains unspoken in decisional processes — not because it is hidden deliberately, but because institutional contexts reward speed, consensus, and defensibility over sustained clarification. Few decisional environments afford the form of attention this requires. Fewer still treat it as legitimate use of time.
                  </p>
                </div>

                {/* Final Quote */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    A decision becomes ethical not when it is harmless, but when it can be carried without self-division.
                  </p>
                </div>

              </div>
            </div>
          </section>
          )}
        </main>

      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "When Every Option Has a Cost",
          "description": "A case study on ethical leadership: deciding without innocence, but with integrity.",
          "author": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "publisher": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "inLanguage": "en",
          "url": "https://ernestotages.com/resources/case-studies/case-a"
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
              "item": "https://ernestotages.com/"
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
              "name": "Case Studies",
              "item": "https://ernestotages.com/resources/case-studies"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "When Every Option Has a Cost",
              "item": "https://ernestotages.com/resources/case-studies/case-a"
            }
          ]
        })}
      </script>
    </>
  );
}
