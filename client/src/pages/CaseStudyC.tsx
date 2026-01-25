import { Link } from "wouter";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function CaseStudyC() {
  const [showExtendedReflection, setShowExtendedReflection] = useState(false);

  return (
    <>
      <SEO
        title="When the Right Decision Costs | Case Studies"
        description="A leader made a decision that was necessary, defensible, and correct. What was not anticipated was how the consequences would continue to accumulate long after execution."
        lang="en"
        ogTitle="When the Right Decision Costs — Case Study"
        ogDescription="Sustaining authority after integrity has been exercised. A reflective case study on absorbing cost without deformation."
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
              <span className="text-[#121212]">When the Right Decision Costs</span>
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
                  When the Right Decision Costs
                </h1>
                <p className="text-2xl text-[#777777] italic">
                  Sustaining authority after integrity has been exercised.
                </p>
              </div>
            </div>
          </section>

          {/* C1 - Public Case */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">
                
                {/* Introduction */}
                <div className="space-y-4">
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    A leader with final authority had made a decision that was necessary, defensible, and — by any substantive measure — correct. The reasoning was sound. The alternatives had been examined. The choice aligned with values that could be articulated and defended. It was the kind of decision that authority exists to make when easier paths would compromise what matters.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The decision was taken knowing it would carry costs: relationships strained, support withdrawn, interpretations that would not be charitable. These consequences were anticipated, not as acceptable losses, but as unavoidable dimensions of the decision itself. What was not anticipated was how those consequences would continue to accumulate long after the decision had been executed.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The environment changed in ways that were concrete but difficult to name. Meetings that had once been fluid became careful. Colleagues who had worked closely began to maintain distance — not openly, not dramatically, but unmistakably. There was compliance where there had been collaboration. Politeness where there had been trust. The decision was not questioned directly, but neither was it understood. The leader found himself working in a space that had become colder without becoming hostile, isolated without being abandoned.
                  </p>
                </div>

                {/* The Tension */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Tension</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The challenge was not whether the decision had been right. It had been. The challenge was how to continue exercising authority in the aftermath — in an environment where the cost of having decided correctly was still being paid, and where the temptation to adjust either the decision or oneself in response to that cost was constant.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Two pressures emerged, both seemingly reasonable, both corrosive.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The first was the pressure to harden: to interpret the distance as betrayal, the caution as weakness, the lack of immediate support as evidence that integrity is punished and should therefore be protected by withdrawal. To stop being open to influence, to stop seeking counsel, to decide alone not because no one else can decide, but because trust has been withdrawn as a form of self-protection.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The second was the pressure to soften: to revisit the decision, not because new information had emerged, but because the relational cost had become uncomfortable. To signal flexibility, to demonstrate that the decision was not final in spirit even if it could not be reversed in fact. To manage the aftermath by communicating — implicitly or explicitly — that such decisions would not be repeated, that accommodation had been learned, that approval mattered more than had been acknowledged.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Both paths promised relief. Both would corrode authority in ways more lasting than the decision itself.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    He was not asking, "Was the decision right?" He was asking, "How do I restore what we had before this? Or was that the cost — and I just have to live with it?"
                  </p>
                </div>

                {/* The Work of Clarification */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Work of Clarification</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work did not begin by reevaluating the decision. The decision remained what it was: necessary, costly, and defensible. What required examination was not whether it had been right to decide, but how to inhabit the authority that had decided — without allowing the consequences of integrity to deform the conditions under which integrity could be exercised again.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The focus shifted to separating what was being experienced from what was being demanded:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-[#777777] leading-relaxed ml-4">
                    <li>Which reactions in the environment were expressions of genuine disagreement that required engagement, and which were expressions of discomfort that would resolve over time without requiring adjustment?</li>
                    <li>What was being asked of him now — and by whom? Was it accountability (which could be met), approval (which could not be negotiated), or reassurance that the cost had been noted and would be avoided in the future (which would compromise the capacity to decide again)?</li>
                    <li>Where had responsibility for the decision become confused with guilt for its consequences — and where had the legitimate weight of having decided become entangled with the illegitimate demand that he carry others' discomfort as his own?</li>
                  </ul>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    As these distinctions emerged, a pattern became visible. The pressure to adjust was not coming primarily from external demands. It was coming from the internal experience of isolation — and from the assumption that isolation itself indicated something wrong with how authority had been exercised, rather than something inevitable about exercising it under certain conditions.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work consisted in restoring the distinction between authority and approval — not as opposites, but as different orders of relationship that cannot be collapsed without damage to both.
                  </p>
                </div>

                {/* The Outcome */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Outcome</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What emerged was not reconciliation, vindication, or the recovery of what had been lost. What emerged was the capacity to continue exercising authority without requiring the environment to validate the decision before it could be sustained.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The distance remained. Some relationships did not return to what they had been. The cost continued to be felt. But it no longer dictated how authority was exercised. The leader could engage with disagreement without interpreting it as betrayal. He could maintain openness to influence without signalling that the decision itself was negotiable. He could acknowledge the cost without treating it as evidence that integrity had been a mistake.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    In the months that followed, something shifted in how he was perceived — not universally, but among those whose judgment he respected. The decision was not forgotten, but it was no longer the only frame through which his authority was understood. What became visible was not the decision itself, but the capacity to have made it and to continue deciding afterward, without requiring justification to dominate every subsequent interaction.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Authority had not been restored in the sense of returning to how it was before. It had been sustained in a form that could absorb the cost of integrity without deforming in response to it.
                  </p>
                </div>

                {/* Quote between C1 and C2 */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    Authority is not sustained by avoiding cost. It is sustained by absorbing cost without undoing the decision, endlessly defending it, or withdrawing from authority itself.
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

                {/* When Integrity Produces Isolation */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">When Integrity Produces Isolation</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What made this situation difficult was not the decision itself, but the environment it created — and the temptation to respond to that environment in ways that would preserve comfort at the cost of authority.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The leader had exercised judgment under conditions that required it. The decision was not impulsive, not reactive, not insufficiently considered. It was made with full awareness of what it would cost, and with the understanding that those costs were part of the decision, not unfortunate byproducts of it.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Yet knowing this intellectually and inhabiting it practically are different orders of experience. When the anticipated costs materialized — when support withdrew, when relationships cooled, when the environment became careful rather than collaborative — the intellectual clarity that had informed the decision proved insufficient to navigate what followed.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This is the dimension of ethical decision-making that is rarely discussed: not the moment of choice, but the sustained inhabitation of authority after choice has been exercised in ways that produce lasting consequences.
                  </p>
                </div>

                {/* The Deformation of Authority Under Pressure */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">The Deformation of Authority Under Pressure</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The danger in this territory is not failure of nerve or loss of conviction. The leader remained certain the decision had been correct. The danger was more subtle: the gradual deformation of authority as a defensive response to the isolation that integrity can produce.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This deformation takes two primary forms, each seemingly reasonable, each corrosive over time.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The first is hardening: the interpretation of distance as hostility, caution as disloyalty, the lack of immediate support as evidence that openness is weakness. Authority begins to operate from a position of withdrawal. Consultation becomes performative rather than genuine. Influence is resisted not because it is poorly reasoned, but because accepting influence feels like validation of the criticism that integrity should not have been exercised as it was.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This hardening preserves a certain form of strength, but it is strength that has collapsed into rigidity. Authority becomes defensive, isolated not by circumstance but by choice, unable to distinguish between the legitimate costs of having decided and the illegitimate demand that all costs be interpreted as betrayals requiring fortification.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The second is softening: the revisiting of decisions not because new information has emerged, but because the relational cost has become unbearable. This does not typically take the form of explicit reversal — the decision, once made, often cannot be undone. It takes the form of signals: increased accommodation in other contexts, public or private communications that implicitly apologize for the firmness that was exercised, demonstrations of flexibility designed to reassure that such decisions will not be repeated.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This softening preserves relationship, but at the cost of authority. It communicates that integrity is negotiable when the cost becomes high enough — and it establishes the conditions under which future decisions will be compromised before they are made, because the memory of isolation will preclude choices that might reproduce it.
                  </p>
                </div>

                {/* The Third Path: Absorption Without Deformation */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">The Third Path: Absorption Without Deformation</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What was required was neither hardening nor softening, but the capacity to absorb the cost of integrity without allowing that cost to determine how authority would be exercised going forward.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This is extraordinarily difficult because it requires sustaining tension without resolution: acknowledging the legitimacy of others' discomfort without treating that discomfort as evidence that the decision should not have been made; remaining open to influence without signaling that the decision itself is subject to renegotiation; carrying the isolation that can follow from integrity without interpreting that isolation as a problem to be solved by adjustment.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work consisted in creating the conditions under which this third path became inhabitable:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-[#777777] leading-relaxed ml-4">
                    <li>Clarifying what was being asked in the present environment — and distinguishing between accountability (which could and should be met), approval (which could not be negotiated without compromising future capacity to decide), and reassurance that such costs would be avoided in the future (which would corrupt the decisional process before it began).</li>
                    <li>Separating the legitimate weight of having decided from the illegitimate demand to carry others' reactions as if they were one's own responsibility.</li>
                    <li>Restoring the distinction between authority and approval: recognizing that authority exercised with integrity will at times produce distance, and that this distance is not evidence of failure but a structural feature of decision-making under certain conditions.</li>
                  </ul>
                </div>

                {/* Authority That Does Not Require Validation */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">Authority That Does Not Require Validation</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What was recovered was not comfort, reconciliation, or the relationships that had been altered by the decision. What was recovered was the capacity to continue exercising authority without requiring the environment to validate the correctness of past decisions before new decisions could be made.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This is a form of authority that is rare and often misunderstood. It is not authority that operates without regard for others — it remains accountable, engaged, open to influence. But it is authority that does not collapse when influence is withdrawn, when support becomes conditional, or when the cost of integrity produces isolation.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    It is authority that can absorb impact without hardening into defensiveness or softening into appeasement. It is authority that distinguishes between respect and approval, recognizing that the former can be sustained even when the latter is withheld.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The most difficult test of integrity is not the moment of decision, but the period that follows — when the cost becomes visible, when support withdraws, and when the pressure to adjust either the decision or oneself in response to that cost is constant.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Integrity under these conditions requires something more than conviction. It requires the capacity to sustain authority in a form that can absorb the consequences of having decided correctly, without allowing those consequences to deform the conditions under which integrity can be exercised again.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This is not heroism. It is not rigidity. It is the maintenance of authority in a form that remains capable of judgment — and that remains worthy of the trust that authority requires, even when that trust must be sustained through periods when approval is withheld.
                  </p>
                </div>

                {/* Final Quote */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    Authority is not measured by the decisions it makes, but by the form it maintains after those decisions have been made — especially when those decisions were correct but costly.
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
          "headline": "When the Right Decision Costs",
          "description": "A case study on sustaining authority after integrity has been exercised: absorbing cost without deformation.",
          "author": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "publisher": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "inLanguage": "en",
          "url": "https://ernestotages.com/resources/case-studies/case-c"
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
              "name": "When the Right Decision Costs",
              "item": "https://ernestotages.com/resources/case-studies/case-c"
            }
          ]
        })}
      </script>
    </>
  );
}
