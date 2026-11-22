import { Fragment, type ReactNode } from "react";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/routes";
import type { LegalPageContent } from "@/content/legalPages";

const LINK_CLASS = "text-[#D9307E] hover:underline";

/** Renders "[text](url)" segments of a string as links. */
function rich(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    parts.push(text.slice(last, match.index));
    const [, label, href] = match;
    const external = href.startsWith("http");
    parts.push(
      <a
        key={match.index}
        href={href}
        className={LINK_CLASS}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );
    last = match.index + match[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

const TEXT = "text-lg text-[#767676] leading-relaxed";

/** Simple text page (same typography as the case studies) for legal content. */
export default function LegalPage({ content }: { content: Record<Locale, LegalPageContent> }) {
  const { urlLocale } = useLanguage();
  const c = content[urlLocale] ?? content.en;

  return (
    <>
      <SEO title={c.seoTitle} description={c.description} />
      <div className="min-h-screen bg-white">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl text-[#121212] font-light">{c.title}</h1>
              {c.subtitle && <p className="text-lg text-[#767676] italic">{c.subtitle}</p>}
            </div>
          </div>
        </section>

        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-4">
              {c.blocks.map((block, i) => {
                if ("h2" in block) {
                  return (
                    <h2 key={i} className={`text-2xl text-[#121212] font-light${i > 0 ? " pt-8" : ""}`}>
                      {block.h2}
                    </h2>
                  );
                }
                if ("p" in block) {
                  return <p key={i} className={TEXT}>{rich(block.p)}</p>;
                }
                if ("ul" in block) {
                  return (
                    <ul key={i} className={`list-disc pl-6 space-y-2 ${TEXT}`}>
                      {block.ul.map((item, j) => <li key={j}>{rich(item)}</li>)}
                    </ul>
                  );
                }
                if ("lines" in block) {
                  return (
                    <p key={i} className={TEXT}>
                      {block.lines.map((line, j) => (
                        <Fragment key={j}>
                          {j > 0 && <br />}
                          {j === 0 ? <span className="text-[#121212]">{rich(line)}</span> : rich(line)}
                        </Fragment>
                      ))}
                    </p>
                  );
                }
                return (
                  <div key={i} className="overflow-x-auto">
                    <table className="w-full text-left text-base text-[#767676] leading-relaxed border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          {block.table.head.map((h, j) => (
                            <th key={j} scope="col" className="py-3 pr-4 align-bottom font-medium text-[#121212]">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.table.rows.map((row, j) => (
                          <tr key={j} className="border-b border-gray-100">
                            {row.map((cell, k) =>
                              k === 0 ? (
                                <th key={k} scope="row" className="py-3 pr-4 align-top font-normal text-[#121212]">
                                  {cell}
                                </th>
                              ) : (
                                <td key={k} className="py-3 pr-4 align-top">{cell}</td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
