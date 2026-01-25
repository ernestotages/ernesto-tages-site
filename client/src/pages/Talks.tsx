import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Talks() {
  return (
    <>
      <SEO
        title="Talks & Conversations | Ernesto Tages"
        description="Public conversations, conferences, and dialogues where ethical clarity is exercised in real time."
        ogTitle="Talks & Conversations"
        ogDescription="Moments where reflection is not prepared in advance, but tested under live conditions."
        ogImage="/og-image.png"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back to Resources */}
              <Link href="/resources">
                <button className="mb-8 text-[#D9307E] hover:text-[#b82567] transition-colors flex items-center gap-2">
                  <span>←</span>
                  <span>Back to Resources</span>
                </button>
              </Link>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#121212] mb-12 leading-tight">
                Talks & Conversations
              </h1>

              {/* Editorial Description */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-[#777777] leading-relaxed">
                  Public conversations, conferences, and dialogues where ethical clarity is exercised in real time.
                </p>
                <p className="text-xl md:text-2xl text-[#777777] leading-relaxed">
                  This section documents moments where reflection is not prepared in advance, but tested under live conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
