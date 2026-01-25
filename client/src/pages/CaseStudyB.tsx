import { Link } from "wouter";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function CaseStudyB() {
  const [showExtendedReflection, setShowExtendedReflection] = useState(false);

  return (
    <>
      <SEO
        title="When Decisions No Longer Settle | Case Studies"
        description="A decision is clearly identified and well understood, yet it does not close. It returns repeatedly without new information, without disagreement, without any obvious obstacle."
        lang="en"
        ogTitle="When Decisions No Longer Settle — Case Study"
        ogDescription="Discernment under ultimate authority. A reflective case study on restoring the capacity for decisions to conclude."
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
              <span className="text-[#121212]">When Decisions No Longer Settle</span>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Header */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Back Navigation Button */}
                <div className="mb-6">
                  <Link
                    href="/resources/case-studies"
                    className="text-[#D9307E] hover:underline inline-flex items-center gap-2"
                  >
                    ← Back to Case Studies
                  </Link>
                </div>
                <h1 className="text-4xl md:text-5xl text-[#121212] font-light">
                  When Decisions No Longer Settle
                </h1>
                <p className="text-2xl text-[#777777] italic">
                  Discernment under ultimate authority.
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
                    The problem was clearly identified. It concerned a strategic decision that had to be taken — complex, certainly, but well within the range of situations he had handled many times before. The parameters were known, the implications carefully mapped, and several advisors were involved, each working competently within their respective domain. From any external perspective, the situation appeared to be under control.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    And yet, the decision did not close. It returned repeatedly, without new information, without disagreement, without any obvious obstacle. Each time it came back, it resisted completion. Not because it was unclear, and not because the analysis was insufficient, but because acting on it did not settle the matter in the way it normally would. This persistence was not dramatic or disruptive, but it was unmistakable — and increasingly uncomfortable.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The signs were concrete and cumulative. Decisions were postponed without a clear reason. Points already addressed were revisited. Conversations with advisors, which should have brought reassurance, began to generate irritation instead. The work around the decision continued as expected: scenarios refined, arguments strengthened, uncertainty reduced. Everything that normally supports closure was in place, and yet none of it touched what was actually at stake.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    From his perspective, the problem remained external. It belonged to the situation itself. There was no reason to question his judgment, nor any sense that something was "wrong." On the contrary, the decision was well understood. That was precisely what made its persistence so difficult to tolerate. Despite the competence mobilized around it, the situation remained strangely unfinished.
                  </p>
                </div>

                {/* The Work of Clarification */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Work of Clarification</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Reaching out did not come from urgency or crisis. There was no expectation that someone else would provide a solution. What he was looking for was orientation — a way of approaching the situation that did not immediately push toward conclusion, justification, or optimization.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    From the outset, the work did not focus on the decision itself. Nothing was added to the analysis, no alternatives were proposed, and no attempt was made to improve what was already well constructed. The situation was left exactly as it was. What changed was not its content, but the relationship to it.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The first step consisted in interrupting the automatic momentum that had taken over — the pressure to conclude simply because everything appeared ready. The decision was allowed to remain open, not in order to delay it, but in order to understand why it resisted settlement despite being handled correctly. This suspension created the conditions for attention to shift.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    As it did, distinctions began to emerge. Elements that had previously been treated as equivalent separated. What genuinely mattered differentiated itself from what merely demanded attention. Some considerations revealed themselves as unavoidable; others as habitual, repeated more out of inertia than necessity. The situation did not become simpler, but it became more precise.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What had been experienced as friction was no longer something to be pushed through. It became informative. The resistance of the decision itself began to clarify what had not yet been properly assumed.
                  </p>
                </div>

                {/* The Outcome */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#121212] font-light">The Outcome</h2>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    When the decision was finally taken, it was taken without urgency. Nothing external had changed. The constraints were the same, the costs were known, and the risks remained. What had changed was that the decision no longer required reinforcement or justification. It could be assumed as it was, without residue.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Once taken, it settled. Not because it resolved every tension, but because it no longer generated internal accumulation. The matter closed in a way that allowed attention to move on, without needing to be carried forward.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    In the weeks that followed, the effects of this shift became visible beyond the initial situation. Decisions were fewer, but more decisive. Issues that did not require his involvement were recognized earlier. Conversations with advisors regained their proper place — useful, but no longer substituting for judgment.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    From the outside, nothing dramatic had occurred. From the inside, something essential had been restored: the capacity for decisions to conclude, rather than accumulate.
                  </p>
                </div>

                {/* Quote between C1 and C2 */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    A decision concludes not when it is justified, but when it no longer leaves residue behind.
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

                {/* When Competence Stops Orienting Action */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#121212] font-light">When Competence Stops Orienting Action</h3>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What made this situation difficult was not its complexity, but its persistence. The decision had been well framed, treated with care, supported by expertise, and revisited thoroughly. Under normal circumstances, this would have been sufficient. And yet, it was not.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    This pattern tends to appear only after prolonged responsibility. When authority is exercised continuously, decisions accumulate. Most settle. Some do not. Over time, the inability of a decision to conclude begins to matter more than the decision itself, because it signals a shift in how authority is functioning.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What was happening here was not a failure of judgment, but something quieter and more corrosive: the gradual replacement of discernment by repetition. The same tools were applied again, the same questions asked again, the same reassurance sought again — without effect. Everything that should have worked was working, just not where it mattered.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    Only later could it be seen what had actually been at stake. The unease was not caused by the decision itself, but by the fact that deciding no longer produced orientation. Action no longer brought closure. Authority continued to function, but it had begun to lose its capacity to conclude.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    The work consisted in restoring that capacity. Not by resolving the situation differently, but by clarifying what the situation was actually asking for — and what it was not. By separating what had to be assumed from what had merely been repeated. By allowing the resistance of the decision to be understood rather than overridden.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    What returned was not certainty, and not comfort. What returned was lucidity: the ability for a decision to take shape, be assumed, and then release attention. This cannot be standardized or delegated. It requires interruption, precision, and the willingness to stop doing what normally works when it no longer does.
                  </p>
                  <p className="text-lg text-[#777777] leading-relaxed text-justify">
                    For those who carry final authority, this is not a luxury. It is the condition for exercising power without erosion.
                  </p>
                </div>

                {/* Final Quote */}
                <div className="my-16 py-8 border-l-4 border-[#D9307E] pl-6">
                  <p className="text-xl text-[#121212] italic leading-relaxed">
                    Authority erodes not through error, but through decisions that cannot be fully assumed.
                  </p>
                </div>

                {/* Discreet Previous/Next Navigation */}
                <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 text-sm text-[#777777]">
                  <Link href="/resources/case-studies/case-a" className="hover:text-[#D9307E] transition-colors">
                    ← Previous: When Every Option Has a Cost
                  </Link>
                  <Link href="/resources/case-studies/case-c" className="hover:text-[#D9307E] transition-colors">
                    Next: When the Right Decision Costs →
                  </Link>
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
          "headline": "When Decisions No Longer Settle",
          "description": "A case study on discernment under ultimate authority: restoring the capacity for decisions to conclude.",
          "author": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "publisher": {
            "@type": "Person",
            "name": "Ernesto Tages"
          },
          "inLanguage": "en",
          "url": "https://ernestotages.com/resources/case-studies/case-b"
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
              "name": "When Decisions No Longer Settle",
              "item": "https://ernestotages.com/resources/case-studies/case-b"
            }
          ]
        })}
      </script>
    </>
  );
}
