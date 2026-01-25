import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Ernesto Tages"
        description="Three situations where clarity, discernment, and authority are tested under real pressure — and restored through ethical work."
        lang="en"
        ogTitle="Case Studies — Ethical Leadership in Practice"
        ogDescription="Three situations where clarity, discernment, and authority are tested under real pressure — and restored through ethical work."
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-100 sticky top-[73px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center text-sm text-[#777777]">
              <Link href="/" className="hover:text-[#D946EF] transition-colors">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link href="/resources" className="hover:text-[#D946EF] transition-colors">
                Resources
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[#121212]">Case Studies</span>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Header Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl text-[#121212] font-light">
                  Case Studies
                </h1>
                <p className="text-xl text-[#777777] leading-relaxed">
                  Three situations where clarity, discernment, and authority are tested — and restored.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies List */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">
                
                {/* Case Study A */}
                <div className="bg-white border-l-4 border-[#D946EF] pl-6 py-6 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl text-[#121212] font-light mb-2">
                    When Every Option Has a Cost
                  </h2>
                  <p className="text-lg text-[#777777] italic mb-4">
                    Integrity under systemic pressure.
                  </p>
                  <p className="text-base text-[#777777] leading-relaxed mb-4">
                    A senior executive faces mounting pressure to approve a decision that is legally defensible and economically rational, but that would impose significant costs on people whose trust had been essential to his authority. The question is not whether someone would be disappointed — that was inevitable — but whether the decision could be made without requiring self-deception to sustain it.
                  </p>
                  <Link 
                    href="/resources/case-studies/case-a"
                    className="text-[#D946EF] hover:text-[#b82567] transition-colors inline-flex items-center gap-2"
                  >
                    Read case study
                    <span>→</span>
                  </Link>
                </div>

                {/* Case Study B */}
                <div className="bg-white border-l-4 border-[#D946EF] pl-6 py-6 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl text-[#121212] font-light mb-2">
                    When Decisions No Longer Settle
                  </h2>
                  <p className="text-lg text-[#777777] italic mb-4">
                    Discernment under ultimate authority.
                  </p>
                  <p className="text-base text-[#777777] leading-relaxed mb-4">
                    A decision is clearly identified, well within the range of situations handled many times before. Yet it does not close. It returns repeatedly, without new information, without disagreement, without any obvious obstacle. The persistence is not dramatic or disruptive, but it is unmistakable — and increasingly uncomfortable.
                  </p>
                  <Link 
                    href="/resources/case-studies/case-b"
                    className="text-[#D946EF] hover:text-[#b82567] transition-colors inline-flex items-center gap-2"
                  >
                    Read case study
                    <span>→</span>
                  </Link>
                </div>

                {/* Case Study C */}
                <div className="bg-white border-l-4 border-[#D946EF] pl-6 py-6 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl text-[#121212] font-light mb-2">
                    When the Right Decision Costs
                  </h2>
                  <p className="text-lg text-[#777777] italic mb-4">
                    Authority after the cost of integrity.
                  </p>
                  <p className="text-base text-[#777777] leading-relaxed mb-4">
                    A leader with final authority had made a decision that was necessary, defensible, and correct. The decision was taken knowing it would carry costs: relationships strained, support withdrawn, interpretations that would not be charitable. What was not anticipated was how those consequences would continue to accumulate long after the decision had been executed.
                  </p>
                  <Link 
                    href="/resources/case-studies/case-c"
                    className="text-[#D946EF] hover:text-[#b82567] transition-colors inline-flex items-center gap-2"
                  >
                    Read case study
                    <span>→</span>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* JSON-LD Schema for BreadcrumbList */}
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
            }
          ]
        })}
      </script>
    </>
  );
}
