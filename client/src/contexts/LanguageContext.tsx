import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { isTranslated, type Locale } from "@/routes";

export type Language = Locale;

interface LanguageContextType {
  /** Language of the site chrome (header, footer, navigation links). */
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Locale given by the URL prefix ("/es/..." -> "es"). */
  urlLocale: Language;
  /** Current page path without the locale prefix. */
  pagePath: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/**
 * The language comes from the URL: /es/... is Spanish, /pt/... Portuguese,
 * everything else English, so pre-rendered pages and the hydrated app always
 * agree and there is no flash of another language.
 *
 * The visitor's choice is remembered for the visit: on the few pages that
 * exist in one language only (e.g. /clarity-matrix), the header and footer
 * keep the language the visitor was browsing in. Nothing ever redirects
 * based on the browser language.
 */
export function LanguageProvider({
  children,
  initialLanguage = "en",
  urlLocale,
  pagePath = "/",
}: {
  children: ReactNode;
  initialLanguage?: Language;
  urlLocale?: Language;
  pagePath?: string;
}) {
  const locale = urlLocale ?? initialLanguage;
  const translated = isTranslated(pagePath);
  const [sessionLanguage, setSessionLanguage] = useState<Language>(locale);

  useEffect(() => {
    if (translated) setSessionLanguage(locale);
  }, [translated, locale]);

  const language = translated ? locale : sessionLanguage;

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: setSessionLanguage,
        t,
        urlLocale: locale,
        pagePath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

const translations: Record<Language, any> = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      services: "Services",
      resources: "Resources",
      contact: "Contact",
      close: "Close",
      toggleMenu: "Toggle menu",
      notifications: "Notifications",
      skipToContent: "Skip to content",
    },
    home: {
      hero: {
        title: "Turning Leadership Dilemmas into Decisive, Ethical Action",
        subtitle:
          "I guide leaders in the ethical and emotional demands of responsibility, helping them navigate complexity and decide with clarity, rigor, and balance.",
        cta: "Discover how I can help",
      },
      strategic: {
        title: "Strategic support for critical decisions",
        intro1:
          "In high-demand environments, leadership requires not only technical expertise but also a deep understanding of the emotions influencing decision-making. My work focuses on helping leaders in the public, private, and social sectors reduce emotional noise, clarify priorities, and act with integrity.",
        intro2:
          "With an approach that integrates science, ethics, and emotional management, I provide spaces for critical reflection and strategic guidance for those who exercise power responsibly.",
        block1: {
          title: "Emotional Noise Filtering",
          description:
            "I help identify and manage emotions that interfere with judgment, allowing for calmer, more accurate, and bias-free decisions.",
        },
        block2: {
          title: "Clarity in complex dilemmas",
          description:
            "I support the analysis process in critical situations, helping to distinguish the essential from the accessory and to find viable paths with strategic perspective.",
        },
        block3: {
          title: "Ethical alignment in power environments",
          description:
            "I assist in integrating ethical values into leadership, ensuring decisions reflect coherence, trust, and legitimacy.",
        },
        cta: "See services",
      },
    },
    about: {
      hero: {
        title: "Strong Training. Human Approach. Ethical Commitment.",
        p1: "I am Ernesto Tages, a consultant, researcher, and mentor dedicated to helping leaders make decisions with clarity, rigor, and balance.",
        p2: "Born in Argentina and based in Portugal, I work with leaders across Europe and Latin America. My academic path spans Business Administration, a Master's in Political Science, and a PhD in Philosophy — an interdisciplinary journey shaped by the search to unite reason and emotion in leadership.",
        p3: "For almost three decades, I have cultivated a daily discipline that integrates Eastern and Western techniques of reflection and self-observation — a practice that has deepened my understanding of human nature and the emotional undercurrents that shape our choices. It allows me to support leaders not only with ethical and intellectual rigor, but also with a human vision — bridging analytical clarity with inner awareness.",
        p4: "I have accompanied leaders in the public, private, and social sectors through moments of pressure, uncertainty, and ethical responsibility. My approach is rigorous yet empathetic: listening with care, clarifying what truly matters, and encouraging wise and timely action.",
        p5: "At the core of my work is a conviction: leadership reaches its highest form when grounded in critical thinking, emotional honesty, and service.",
        cta: "Learn more about my approach",
      },
      approach: {
        title: "Guiding with Clarity.",
        subtitle: "The Architecture of Wise Decisions",
        intro:
          "What follows is the philosophy that gives structure to my work — a disciplined yet human approach to helping leaders act with integrity amid complexity.",
        phase1:
          "My journey began when I noticed a recurring pattern in leadership challenges across the private, public, and social sectors. The problem was never intelligence, nor information; it was the suffocating intersection where rational analysis collides with emotional pressure — where ethical principles blur under urgency, and power amplifies every blind spot.",
        phase2:
          "",
        phase3:
          "I realized that leaders don't need more data. They need clarity. Not the clarity that comes from simplification, but the kind that emerges when complexity is faced with discipline, honesty, and structure.",
        phase4:
          "From that insight, my methodology took form: a rigorous process that integrates philosophy, emotional science, and strategic thinking — helping leaders see what truly matters, decide with integrity, and act with confidence.",
        pillarsTitle: "The Three Pillars of My Approach",
        pillar1Title: "1. Emotional Clarity",
        pillar1Subtitle: "Understanding emotion as data, not noise.",
        pillar1Text:
          "Emotions are not obstacles to good decisions — they are information. But when unexamined, they distort judgment. I help leaders identify and manage the emotional undercurrents that cloud their thinking, allowing them to recover calm presence and analytical precision.",
        pillar2Title: "2. Ethical Rigor",
        pillar2Subtitle: "Turning integrity into strategic advantage.",
        pillar2Text:
          "Ethics is not a luxury or a constraint — it is a strategic advantage. Leaders who act with coherence inspire trust, build legitimacy, and make decisions that endure. I guide leaders through structured ethical reflection, helping them align their values with their actions.",
        pillar3Title: "3. Strategic Perspective",
        pillar3Subtitle: "Building structure amid complexity.",
        pillar3Text:
          "Complexity demands structure. I provide frameworks that help leaders distinguish the essential from the accessory, see beyond immediate pressure, and find viable paths forward. This is not about quick fixes — it's about building the capacity to think clearly under any condition.",
        distinctiveTitle: "A Distinctive Space",
        distinctiveText:
          "My work is not therapy, coaching, or consulting in the traditional sense. It is a context for rigorous reflection and strategic guidance — where leaders pause, think, and realign before they act.",
        blockquote1: "Because the quality of a decision is determined not by speed, but by clarity.",
        blockquote2: "And clarity is not a gift — it is a discipline.",
        closingText:
          "Here, rigor and reflection find form — renewing clarity and energy for decisive action.",
        cta: "Explore my programs",
      },
    },
    services: {
      hero: {
        title: "Strategic guidance for conscious leadership",
        subtitle:
          "A space where rigor and reflection translate into renewed clarity and energy for decisive action.",
        intro:
          "When decisions carry real consequences, clarity becomes the most valuable form of power. I work with leaders who want to act with coherence, serenity, and integrity — transforming complexity into lucidity and reflection into decisive action.",
      },
      explore: "Explore",
      twoLines: {
        title: "Two Lines of Work",
        individual: {
          title: "Individual Consultancy",
          tagline: "Depth work for lucid decision-making.",
          description:
            "For leaders in the public, private, and social sectors who face complex, high-stakes decisions and seek to strengthen their clarity, emotional excellence, and ethical alignment.",
        },
        conferences: {
          title: "Professional Conferences and Seminars",
          tagline: "Collective spaces for ethical and emotional renewal.",
          description:
            "For leadership forums, universities, executive teams, and organizations seeking to deepen their ethical culture and emotional intelligence.",
        },
        closing:
          "Each format opens a space for leaders to pause, reflect, and realign — where rigor and reflection translate into renewed clarity and energy for decisive action.",
      },
      individualDetails: {
        title: "Individual Consultancy",
        objectives: "Objectives",
        obj1: "Clarify complex dilemmas → strengthen lucidity and confidence",
        obj2: "Manage undesired emotions → recover calm presence",
        obj3:
          "Align values and actions → achieve coherent, trustworthy decisions",
        modalities: "Modalities",
        mod1:
          "Executive Decision-Clarity Program — ongoing one-to-one advisory partnership",
        mod2:
          "Ethical Blind-Spot Illumination — half-day or full-day intensive",
        mod3: "Ethical Decision Audit — structured analysis of recent decisions",
        mod4:
          "Strategy Day / Crisis Clarity Session — immediate support in moments of pressure",
        outcome: "Expected Outcome",
        outcomeText:
          "A renewed capacity to see clearly, decide serenely, and act with integrity — even when the context resists simplicity.",
        cta: "Request an exploratory dialogue",
      },
      conferencesDetails: {
        title: "Professional Conferences and Seminars",
        topics: "Suggested topics",
        topic1: "Emotional excellence in contexts of high responsibility",
        topic2: "Applied ethics in the exercise of power",
        topic3: "Integrity as a strategic competence",
        topic4: "The art of reflection under pressure",
        approach: "Approach",
        approachText1:
          "Rigorous yet dynamic; intellectually demanding yet accessible.",
        approachText2:
          "Each session combines conceptual clarity, lived experience, and participatory reflection — designed to inspire, provoke, and anchor change.",
        formats: "Formats",
        format1: "Conferences (in-person or virtual)",
        format2: "Tailored seminars or retreats",
        format3: "Private board or leadership briefings",
        cta: "Request a proposal for your organization",
      },
    },
    resources: {
      hero: {
        title: "Rigor and reflection for decisive action",
        subtitle:
          "A space where ideas and practices nurture ethical clarity in leadership. Here you'll find ideas, readings, and tools designed to strengthen ethical clarity — practical reflections for leaders who choose to think before they act.",
      },
      blocks: {
        insights: {
          title: "Insights & Essays",
          description:
            "Brief reflections where ethics, emotion, and power meet in leadership practice.",
        },
        frameworks: {
          title: "Frameworks & Tools",
          description: "Simple models that help reflection become action.",
        },
        talks: {
          title: "Talks & Conversations",
          description:
            "Recordings and transcripts of conferences, interviews, and dialogues.",
        },
        caseStudies: {
          title: "Case Studies",
          description:
            "Situations where decision, authority, and integrity are tested under real pressure.",
        },
      },
      insightsDetails: {
        title: "Insights & Essays",
        essay1: {
          title: "The Inner Compass of the Ethical Leader",
          description:
            "Why integrity begins not in rules, but in awareness — and how leaders can transform uncertainty into clarity.",
        },
        essay2: {
          title: "The Cost of Clarity",
          description:
            "When every option carries a price, the leader's role is not to avoid tension, but to give it meaning.",
        },
        essay3: {
          title: "Emotional Mastery as Strategic Advantage",
          description:
            "How leaders who understand emotion make sharper, fairer, and more humane decisions.",
        },
        download: "PDF download",
        // Cards for the white papers. Titles are not translated (titles of works).
        whitePapers: {
          costOfClarity: {
            title: "The Cost of Clarity",
            description:
              "An exploration of how ethical leadership requires accepting unavoidable costs rather than avoiding them. This white paper examines the practice of costly clarity and how leaders can transform tension into trust through coherent decision-making.",
          },
          emotionalExcellence: {
            title: "Emotional Excellence",
            description:
              "Why coherence of emotion, thought, and action has become a strategic advantage for leaders. This white paper explores how emotional excellence transforms leadership effectiveness in complex organizational environments.",
          },
          iberoamericanEthicalLeadership: {
            title: "El liderazgo ético en Iberoamérica",
            description:
              "A comprehensive exploration of how emotion, responsibility, and power shape ethical leadership in Ibero-America. This white paper offers seven movements that outline a moral compass for contemporary leadership.",
          },
        },
        readMore: "Read more",
      },
      frameworksDetails: {
        title: "Frameworks & Tools",
        framework1: {
          title: "The Decision Compass",
          description:
            "A one-page framework to navigate complex choices with integrity.",
        },
        framework2: {
          title: "The Emotional Audit",
          description:
            "A structured tool to identify and manage emotions that interfere with judgment.",
        },
        framework3: {
          title: "The Ethical Checklist",
          description:
            "A practical guide to ensure decisions reflect coherence, trust, and legitimacy.",
        },
        download: "PDF download",
      },
      talksDetails: {
        title: "Talks & Conversations",
        talk1: {
          title: "Leadership and Emotional Intelligence",
          description:
            "A conversation on how leaders can integrate emotional awareness into strategic decision-making.",
        },
        talk2: {
          title: "Ethics in the Exercise of Power",
          description:
            "A conference exploring the ethical dimensions of leadership in high-stakes environments.",
        },
        talk3: {
          title: "The Art of Reflection Under Pressure",
          description:
            "A dialogue on how leaders can maintain clarity and integrity in moments of crisis.",
        },
        watch: "Watch video",
      },
      talksPage: {
        title: "Talks & Conversations",
        description1:
          "Public conversations, conferences, and dialogues where ethical clarity is exercised in real time.",
        description2:
          "This section documents moments where reflection is not prepared in advance, but tested under live conditions.",
        backToResources: "Back to Resources",
      },
      caseStudiesPage: {
        title: "Case Studies",
        subtitle: "Three situations where clarity, discernment, and authority are tested — and restored.",
        breadcrumbHome: "Home",
        breadcrumbResources: "Resources",
        breadcrumbCaseStudies: "Case Studies",
        readCaseStudy: "Read case study",
        backToCaseStudies: "← Back to Case Studies",
        hideExtended: "Hide extended reflection ↑",
        continueExtended: "Continue with the extended reflection →",
        extendedReflection: "Extended Reflection",
        caseA: {
          title: "When Every Option Has a Cost",
          tagline: "Integrity under systemic pressure.",
          summary: "A senior executive faces sustained pressure to approve a decision that is legally defensible and economically rational, yet difficult to assume without internal cost. The situation is formally correct — and deeply testing.",
          subtitle: "Deciding without innocence, but with integrity.",
          seoDescription: "A senior executive faces mounting pressure to approve a decision that is legally defensible but carries significant personal and relational costs.",
          tension: "The Tension",
          tensionP1: "A senior executive in a large organization faced mounting pressure to approve a strategic decision that was legally defensible and economically rational, but that would impose significant costs on people he had worked with for years — people whose trust had been essential to his authority. Board members emphasized institutional necessity and competitive pressure. Yet he knew that once announced, the decision would redefine how he was perceived, both by those affected and by himself.",
          tensionP2: "He had made defensible decisions before — but was increasingly troubled by the gap between what he could justify externally and what he could sustain internally without erosion. Legally defensible paths conflicted with internal commitments. Strategic necessities collided with personal credibility. Delay would compound pressure; action would invite scrutiny. There was no neutral ground, no solution that would leave all interests intact.",
          tensionP3: "The question was not whether someone would be disappointed — that was inevitable — but whether the decision could be made without requiring self-deception to sustain it. What was at stake was not only the outcome, but the form of authority this leader would carry after the decision became public.",
          tensionP4: "At first glance, the dilemma appeared technical: mapping risks, calculating exposure, distributing responsibility across organizational structures. Yet beneath this procedural surface lay a deeper tension — one that was ethical and, ultimately, personal.",
          tensionP5: "The executive was not asking, \"What is the right decision?\" He was asking, often without voicing it, \"How do I make this decision without losing myself — or waking up at 3 a.m. knowing I've become someone I don't recognize?\"",
          tensionP6: "The real danger was not making the wrong call. It was making a defensible call that corroded something essential internally while remaining plausible externally.",
          clarification: "The Work of Clarification",
          clarificationP1: "The work did not begin with evaluating options. It began by slowing down the urgency that framed the decision as purely strategic, and by resisting the pressure to optimize outcomes before clarifying what was actually being optimized for.",
          clarificationP2: "The focus shifted to criteria:",
          clarificationL1: "Which values were genuinely guiding the decision, and which were being invoked as justification after preferences had already formed?",
          clarificationL2: "What costs were structurally unavoidable — and which were being denied or displaced onto others without acknowledgment?",
          clarificationL3: "What kind of responsibility was being exercised: reactive (responding to pressure), protective (minimizing exposure), or assumptive (accepting consequences as part of the decision)?",
          clarificationP3: "As these questions were explored, a shift occurred. The executive stopped searching for the least damaging option and began clarifying the terms under which damage could be assumed without requiring distortion to remain inhabitable.",
          clarificationP4: "This did not resolve the tension. It clarified what was at stake in resolving it.",
          outcome: "The Outcome",
          outcomeP1: "The decision that emerged did not protect all interests, nor did it eliminate conflict. It did, however, restore authorship.",
          outcomeP2: "The executive chose a path that involved visible costs and accepted that those costs would have to be carried openly, without rhetorical mitigation. The decision became inhabitable — not because it was comfortable, but because it was coherent.",
          outcomeP3: "In the weeks that followed, he could lead without the constant internal noise of justification. The decision remained difficult to explain in certain contexts — but it no longer required him to distort either the facts or himself in order to defend it. Criticism could be faced without needing defensiveness to remain functional.",
          outcomeP4: "The pressure did not disappear. But it no longer impaired judgment. He could think ahead again. Authority was no longer spent managing internal contradiction — it became available for the work that actually required it. Discernment had been restored, and with it the capacity to decide again without erosion.",
          quote1: "Integrity is not choosing the best outcome. It is choosing the decision whose cost you are willing to carry without distortion.",
          extSection1Title: "Clearing Fog Without Simplifying Reality",
          extSection1P1: "What made this decision difficult was not uncertainty, but clarity. What made this situation dangerous was not complexity alone, but the erosion of discernment under sustained pressure.",
          extSection1P2: "From relatively early in the process, the executive understood the contours of the situation. The facts were known. Scenarios had been mapped. Legal counsel had provided their analysis; financial advisors had modelled implications. What remained unresolved was not what could happen, but what it would mean to act — and whether that meaning could be sustained over time without requiring self-justification to remain tolerable.",
          extSection1P3: "This is a less discussed form of difficulty: when ambiguity is low, but responsibility is high, and the decision cannot be deferred to process or delegated to expertise.",
          extSection1P4: "One of the first illusions that required dismantling was the hope for a clean solution — a decision that could be defended comprehensively, leaving no ethical remainder. In situations of genuine ethical tension, this hope often presents itself as professionalism. Leaders tell themselves they are seeking robustness, objectivity, institutional alignment. In reality, they may be seeking innocence: a way to act without feeling implicated in loss, a way to decide without having to carry what the decision costs.",
          extSection1P5: "But some decisions are irreducibly implicating. They cannot be made without cost, and they cannot be made without remainder. Recognizing this — not as failure, but as the actual structure of the situation — was a turning point.",
          extSection1P6: "The executive was not asking, \"What is the right decision?\" He was asking, \"When did making defensible decisions start feeling like slow self-betrayal?\"",
          extSection1P7: "He was competent, experienced, trusted by peers. Yet he was increasingly uncertain whether those qualities still connected to anything he recognized as himself — or whether they had become performances he maintained to remain functional.",
          extSection2Title: "Responsibility Beyond Justification",
          extSection2P1: "A recurring dynamic in the clarification process was the tension between justification and responsibility. Not justification in a cynical sense, but in a deeply human one.",
          extSection2P2: "The executive repeatedly returned to questions such as:",
          extSection2L1: "\"Will this stand up to scrutiny if challenged?\"",
          extSection2L2: "\"Can this be defended without weakening my position?\"",
          extSection2L3: "\"How do I explain this in a way that protects institutional credibility?\"",
          extSection2P3: "These are legitimate concerns. Leadership operates in environments where decisions must be accountable to multiple constituencies, and where vulnerability can be exploited.",
          extSection2P4: "Yet when these concerns dominate the decisional process, they subtly shift responsibility outward. The decision becomes oriented toward defensibility rather than coherence. It becomes a move in a strategic game, rather than an act that can be owned.",
          extSection2P5: "The work consisted in re-centering responsibility inward — not as an alternative to accountability, but as its ethical foundation:",
          extSection2L4: "Could the decision be explained without strategic rhetoric?",
          extSection2L5: "Could it be owned not only in the moment of announcement, but over time, as consequences unfolded?",
          extSection2L6: "Could it be inhabited without resentment, without the need to constantly re-justify it to oneself?",
          extSection2P6: "This was not about moral purity or self-righteousness. It was about the sustainability of self-respect — the condition under which authority remains exercisable without requiring denial to remain functional.",
          extSection3Title: "The Role of Loss",
          extSection3P1: "As clarity increased, so did the visibility of loss.",
          extSection3P2: "Something would be damaged: trust in one direction, credibility in another, relationships that could not be preserved intact, institutional arrangements that would require renegotiation. The initial impulse was to minimize this loss through narrative — to present it as temporary, necessary, strategic, or as the unavoidable cost of a larger good.",
          extSection3P3: "The work consisted in resisting that impulse. Not because narrative is illegitimate, but because when narrative precedes acknowledgment, it becomes a form of concealment — from others, but more importantly, from oneself.",
          extSection3P4: "The question became: Which loss can be acknowledged without denial, and which consequences can be accepted as structurally linked to the decision, rather than as unfortunate side effects that might have been avoided with better execution?",
          extSection3P5: "This reframing did not remove pain or difficulty from the decision. It removed the need for self-deception in order to proceed.",
          extSection4Title: "Decision as Self-Commitment",
          extSection4P1: "Eventually, the decision emerged not as a conclusion reached through optimization, but as a commitment made in full awareness of what it entailed.",
          extSection4P2: "A commitment to:",
          extSection4L1: "accept consequences without theatrical justification,",
          extSection4L2: "resist the urge to moralize after the fact, presenting the decision as heroic or as evidence of superior ethical judgment,",
          extSection4L3: "remain accountable beyond the moment of decision — to live with what was chosen, not only to announce it.",
          extSection4P3: "In this sense, the decision was less about solving a problem and more about assuming a position in the ethical landscape the executive already inhabited, but had been reluctant to occupy explicitly.",
          extSection4P4: "Ethical clarity does not promise relief. It promises orientation.",
          extSection4P5: "In situations where every option carries cost, clarity does not save us from loss. It saves us from fragmentation — from making decisions we cannot sustain without distorting either the decision or ourselves.",
          extSection4P6: "This work is possible only when there is willingness to examine what remains unspoken in decisional processes — not because it is hidden deliberately, but because institutional contexts reward speed, consensus, and defensibility over sustained clarification. Few decisional environments afford the form of attention this requires. Fewer still treat it as legitimate use of time.",
          quote2: "A decision becomes ethical not when it is harmless, but when it can be carried without self-division.",
          nextLabel: "Next: When Decisions No Longer Settle →",
        },
        caseB: {
          title: "When Decisions No Longer Settle",
          tagline: "Discernment under ultimate authority.",
          summary: "A decision is clearly identified and well within familiar territory. Yet it does not close. It returns repeatedly, without new information or disagreement, resisting completion.",
          subtitle: "Discernment under ultimate authority.",
          seoDescription: "A decision is clearly identified and well understood, yet it does not close. It returns repeatedly without new information, without disagreement, without any obvious obstacle.",
          tension: "The Tension",
          tensionP1: "The problem was clearly identified. It concerned a strategic decision that had to be taken — complex, certainly, but well within the range of situations he had handled many times before. The parameters were known, the implications carefully mapped, and several advisors were involved, each working competently within their respective domain. From any external perspective, the situation appeared to be under control.",
          tensionP2: "And yet, the decision did not close. It returned repeatedly, without new information, without disagreement, without any obvious obstacle. Each time it came back, it resisted completion. Not because it was unclear, and not because the analysis was insufficient, but because acting on it did not settle the matter in the way it normally would. This persistence was not dramatic or disruptive, but it was unmistakable — and increasingly uncomfortable.",
          tensionP3: "The signs were concrete and cumulative. Decisions were postponed without a clear reason. Points already addressed were revisited. Conversations with advisors, which should have brought reassurance, began to generate irritation instead. The work around the decision continued as expected: scenarios refined, arguments strengthened, uncertainty reduced. Everything that normally supports closure was in place, and yet none of it touched what was actually at stake.",
          tensionP4: "From his perspective, the problem remained external. It belonged to the situation itself. There was no reason to question his judgment, nor any sense that something was \"wrong.\" On the contrary, the decision was well understood. That was precisely what made its persistence so difficult to tolerate. Despite the competence mobilized around it, the situation remained strangely unfinished.",
          clarification: "The Work of Clarification",
          clarificationP1: "Reaching out did not come from urgency or crisis. There was no expectation that someone else would provide a solution. What he was looking for was orientation — a way of approaching the situation that did not immediately push toward conclusion, justification, or optimization.",
          clarificationP2: "From the outset, the work did not focus on the decision itself. Nothing was added to the analysis, no alternatives were proposed, and no attempt was made to improve what was already well constructed. The situation was left exactly as it was. What changed was not its content, but the relationship to it.",
          clarificationP3: "The first step consisted in interrupting the automatic momentum that had taken over — the pressure to conclude simply because everything appeared ready. The decision was allowed to remain open, not in order to delay it, but in order to understand why it resisted settlement despite being handled correctly. This suspension created the conditions for attention to shift.",
          clarificationP4: "As it did, distinctions began to emerge. Elements that had previously been treated as equivalent separated. What genuinely mattered differentiated itself from what merely demanded attention. Some considerations revealed themselves as unavoidable; others as habitual, repeated more out of inertia than necessity. The situation did not become simpler, but it became more precise.",
          clarificationP5: "What had been experienced as friction was no longer something to be pushed through. It became informative. The resistance of the decision itself began to clarify what had not yet been properly assumed.",
          outcome: "The Outcome",
          outcomeP1: "When the decision was finally taken, it was taken without urgency. Nothing external had changed. The constraints were the same, the costs were known, and the risks remained. What had changed was that the decision no longer required reinforcement or justification. It could be assumed as it was, without residue.",
          outcomeP2: "Once taken, it settled. Not because it resolved every tension, but because it no longer generated internal accumulation. The matter closed in a way that allowed attention to move on, without needing to be carried forward.",
          outcomeP3: "In the weeks that followed, the effects of this shift became visible beyond the initial situation. Decisions were fewer, but more decisive. Issues that did not require his involvement were recognized earlier. Conversations with advisors regained their proper place — useful, but no longer substituting for judgment.",
          outcomeP4: "From the outside, nothing dramatic had occurred. From the inside, something essential had been restored: the capacity for decisions to conclude, rather than accumulate.",
          quote1: "A decision concludes not when it is justified, but when it no longer leaves residue behind.",
          extSection1Title: "When Competence Stops Orienting Action",
          extSection1P1: "What made this situation difficult was not its complexity, but its persistence. The decision had been well framed, treated with care, supported by expertise, and revisited thoroughly. Under normal circumstances, this would have been sufficient. And yet, it was not.",
          extSection1P2: "This pattern tends to appear only after prolonged responsibility. When authority is exercised continuously, decisions accumulate. Most settle. Some do not. Over time, the inability of a decision to conclude begins to matter more than the decision itself, because it signals a shift in how authority is functioning.",
          extSection1P3: "What was happening here was not a failure of judgment, but something quieter and more corrosive: the gradual replacement of discernment by repetition. The same tools were applied again, the same questions asked again, the same reassurance sought again — without effect. Everything that should have worked was working, just not where it mattered.",
          extSection1P4: "Only later could it be seen what had actually been at stake. The unease was not caused by the decision itself, but by the fact that deciding no longer produced orientation. Action no longer brought closure. Authority continued to function, but it had begun to lose its capacity to conclude.",
          extSection1P5: "The work consisted in restoring that capacity. Not by resolving the situation differently, but by clarifying what the situation was actually asking for — and what it was not. By separating what had to be assumed from what had merely been repeated. By allowing the resistance of the decision to be understood rather than overridden.",
          extSection1P6: "What returned was not certainty, and not comfort. What returned was lucidity: the ability for a decision to take shape, be assumed, and then release attention. This cannot be standardized or delegated. It requires interruption, precision, and the willingness to stop doing what normally works when it no longer does.",
          extSection1P7: "For those who carry final authority, this is not a luxury. It is the condition for exercising power without erosion.",
          quote2: "Authority erodes not through error, but through decisions that cannot be fully assumed.",
          prevLabel: "← Previous: When Every Option Has a Cost",
          nextLabel: "Next: When the Right Decision Costs →",
        },
        caseC: {
          title: "When the Right Decision Costs",
          tagline: "Authority after the cost of integrity.",
          summary: "A leader with final authority makes a decision that is necessary, defensible, and correct. The costs are known. What follows is not reversal, but the challenge of sustaining authority after the impact.",
          subtitle: "Sustaining authority after integrity has been exercised.",
          seoDescription: "A leader made a decision that was necessary, defensible, and correct. What was not anticipated was how the consequences would continue to accumulate long after execution.",
          introP1: "A leader with final authority had made a decision that was necessary, defensible, and — by any substantive measure — correct. The reasoning was sound. The alternatives had been examined. The choice aligned with values that could be articulated and defended. It was the kind of decision that authority exists to make when easier paths would compromise what matters.",
          introP2: "The decision was taken knowing it would carry costs: relationships strained, support withdrawn, interpretations that would not be charitable. These consequences were anticipated, not as acceptable losses, but as unavoidable dimensions of the decision itself. What was not anticipated was how those consequences would continue to accumulate long after the decision had been executed.",
          introP3: "The environment changed in ways that were concrete but difficult to name. Meetings that had once been fluid became careful. Colleagues who had worked closely began to maintain distance — not openly, not dramatically, but unmistakably. There was compliance where there had been collaboration. Politeness where there had been trust. The decision was not questioned directly, but neither was it understood. The leader found himself working in a space that had become colder without becoming hostile, isolated without being abandoned.",
          tension: "The Tension",
          tensionP1: "The challenge was not whether the decision had been right. It had been. The challenge was how to continue exercising authority in the aftermath — in an environment where the cost of having decided correctly was still being paid, and where the temptation to adjust either the decision or oneself in response to that cost was constant.",
          tensionP2: "Two pressures emerged, both seemingly reasonable, both corrosive.",
          tensionP3: "The first was the pressure to harden: to interpret the distance as betrayal, the caution as weakness, the lack of immediate support as evidence that integrity is punished and should therefore be protected by withdrawal. To stop being open to influence, to stop seeking counsel, to decide alone not because no one else can decide, but because trust has been withdrawn as a form of self-protection.",
          tensionP4: "The second was the pressure to soften: to revisit the decision, not because new information had emerged, but because the relational cost had become uncomfortable. To signal flexibility, to demonstrate that the decision was not final in spirit even if it could not be reversed in fact. To manage the aftermath by communicating — implicitly or explicitly — that such decisions would not be repeated, that accommodation had been learned, that approval mattered more than had been acknowledged.",
          tensionP5: "Both paths promised relief. Both would corrode authority in ways more lasting than the decision itself.",
          tensionP6: "He was not asking, \"Was the decision right?\" He was asking, \"How do I restore what we had before this? Or was that the cost — and I just have to live with it?\"",
          clarification: "The Work of Clarification",
          clarificationP1: "The work did not begin by reevaluating the decision. The decision remained what it was: necessary, costly, and defensible. What required examination was not whether it had been right to decide, but how to inhabit the authority that had decided — without allowing the consequences of integrity to deform the conditions under which integrity could be exercised again.",
          clarificationP2: "The focus shifted to separating what was being experienced from what was being demanded:",
          clarificationL1: "Which reactions in the environment were expressions of genuine disagreement that required engagement, and which were expressions of discomfort that would resolve over time without requiring adjustment?",
          clarificationL2: "What was being asked of him now — and by whom? Was it accountability (which could be met), approval (which could not be negotiated), or reassurance that the cost had been noted and would be avoided in the future (which would compromise the capacity to decide again)?",
          clarificationL3: "Where had responsibility for the decision become confused with guilt for its consequences — and where had the legitimate weight of having decided become entangled with the illegitimate demand that he carry others' discomfort as his own?",
          clarificationP3: "As these distinctions emerged, a pattern became visible. The pressure to adjust was not coming primarily from external demands. It was coming from the internal experience of isolation — and from the assumption that isolation itself indicated something wrong with how authority had been exercised, rather than something inevitable about exercising it under certain conditions.",
          clarificationP4: "The work consisted in restoring the distinction between authority and approval — not as opposites, but as different orders of relationship that cannot be collapsed without damage to both.",
          outcome: "The Outcome",
          outcomeP1: "What emerged was not reconciliation, vindication, or the recovery of what had been lost. What emerged was the capacity to continue exercising authority without requiring the environment to validate the decision before it could be sustained.",
          outcomeP2: "The distance remained. Some relationships did not return to what they had been. The cost continued to be felt. But it no longer dictated how authority was exercised. The leader could engage with disagreement without interpreting it as betrayal. He could maintain openness to influence without signalling that the decision itself was negotiable. He could acknowledge the cost without treating it as evidence that integrity had been a mistake.",
          outcomeP3: "In the months that followed, something shifted in how he was perceived — not universally, but among those whose judgment he respected. The decision was not forgotten, but it was no longer the only frame through which his authority was understood. What became visible was not the decision itself, but the capacity to have made it and to continue deciding afterward, without requiring justification to dominate every subsequent interaction.",
          outcomeP4: "Authority had not been restored in the sense of returning to how it was before. It had been sustained in a form that could absorb the cost of integrity without deforming in response to it.",
          quote1: "Authority is not sustained by avoiding cost. It is sustained by absorbing cost without undoing the decision, endlessly defending it, or withdrawing from authority itself.",
          extSection1Title: "When Integrity Produces Isolation",
          extSection1P1: "What made this situation difficult was not the decision itself, but the environment it created — and the temptation to respond to that environment in ways that would preserve comfort at the cost of authority.",
          extSection1P2: "The leader had exercised judgment under conditions that required it. The decision was not impulsive, not reactive, not insufficiently considered. It was made with full awareness of what it would cost, and with the understanding that those costs were part of the decision, not unfortunate byproducts of it.",
          extSection1P3: "Yet knowing this intellectually and inhabiting it practically are different orders of experience. When the anticipated costs materialized — when support withdrew, when relationships cooled, when the environment became careful rather than collaborative — the intellectual clarity that had informed the decision proved insufficient to navigate what followed.",
          extSection1P4: "This is the dimension of ethical decision-making that is rarely discussed: not the moment of choice, but the sustained inhabitation of authority after choice has been exercised in ways that produce lasting consequences.",
          extSection2Title: "The Deformation of Authority Under Pressure",
          extSection2P1: "The danger in this territory is not failure of nerve or loss of conviction. The leader remained certain the decision had been correct. The danger was more subtle: the gradual deformation of authority as a defensive response to the isolation that integrity can produce.",
          extSection2P2: "This deformation takes two primary forms, each seemingly reasonable, each corrosive over time.",
          extSection2P3: "The first is hardening: the interpretation of distance as hostility, caution as disloyalty, the lack of immediate support as evidence that openness is weakness. Authority begins to operate from a position of withdrawal. Consultation becomes performative rather than genuine. Influence is resisted not because it is poorly reasoned, but because accepting influence feels like validation of the criticism that integrity should not have been exercised as it was.",
          extSection2P4: "This hardening preserves a certain form of strength, but it is strength that has collapsed into rigidity. Authority becomes defensive, isolated not by circumstance but by choice, unable to distinguish between the legitimate costs of having decided and the illegitimate demand that all costs be interpreted as betrayals requiring fortification.",
          extSection2P5: "The second is softening: the revisiting of decisions not because new information has emerged, but because the relational cost has become unbearable. This does not typically take the form of explicit reversal — the decision, once made, often cannot be undone. It takes the form of signals: increased accommodation in other contexts, public or private communications that implicitly apologize for the firmness that was exercised, demonstrations of flexibility designed to reassure that such decisions will not be repeated.",
          extSection2P6: "This softening preserves relationship, but at the cost of authority. It communicates that integrity is negotiable when the cost becomes high enough — and it establishes the conditions under which future decisions will be compromised before they are made, because the memory of isolation will preclude choices that might reproduce it.",
          extSection3Title: "The Third Path: Absorption Without Deformation",
          extSection3P1: "What was required was neither hardening nor softening, but the capacity to absorb the cost of integrity without allowing that cost to determine how authority would be exercised going forward.",
          extSection3P2: "This is extraordinarily difficult because it requires sustaining tension without resolution: acknowledging the legitimacy of others' discomfort without treating that discomfort as evidence that the decision should not have been made; remaining open to influence without signaling that the decision itself is subject to renegotiation; carrying the isolation that can follow from integrity without interpreting that isolation as a problem to be solved by adjustment.",
          extSection3P3: "The work consisted in creating the conditions under which this third path became inhabitable:",
          extSection3L1: "Clarifying what was being asked in the present environment — and distinguishing between accountability (which could and should be met), approval (which could not be negotiated without compromising future capacity to decide), and reassurance that such costs would be avoided in the future (which would corrupt the decisional process before it began).",
          extSection3L2: "Separating the legitimate weight of having decided from the illegitimate demand to carry others' reactions as if they were one's own responsibility.",
          extSection3L3: "Restoring the distinction between authority and approval: recognizing that authority exercised with integrity will at times produce distance, and that this distance is not evidence of failure but a structural feature of decision-making under certain conditions.",
          extSection4Title: "Authority That Does Not Require Validation",
          extSection4P1: "What was recovered was not comfort, reconciliation, or the relationships that had been altered by the decision. What was recovered was the capacity to continue exercising authority without requiring the environment to validate the correctness of past decisions before new decisions could be made.",
          extSection4P2: "This is a form of authority that is rare and often misunderstood. It is not authority that operates without regard for others — it remains accountable, engaged, open to influence. But it is authority that does not collapse when influence is withdrawn, when support becomes conditional, or when the cost of integrity produces isolation.",
          extSection4P3: "It is authority that can absorb impact without hardening into defensiveness or softening into appeasement. It is authority that distinguishes between respect and approval, recognizing that the former can be sustained even when the latter is withheld.",
          extSection4P4: "The most difficult test of integrity is not the moment of decision, but the period that follows — when the cost becomes visible, when support withdraws, and when the pressure to adjust either the decision or oneself in response to that cost is constant.",
          extSection4P5: "Integrity under these conditions requires something more than conviction. It requires the capacity to sustain authority in a form that can absorb the consequences of having decided correctly, without allowing those consequences to deform the conditions under which integrity can be exercised again.",
          extSection4P6: "This is not heroism. It is not rigidity. It is the maintenance of authority in a form that remains capable of judgment — and that remains worthy of the trust that authority requires, even when that trust must be sustained through periods when approval is withheld.",
          quote2: "Authority is not measured by the decisions it makes, but by the form it maintains after those decisions have been made — especially when those decisions were correct but costly.",
          prevLabel: "← Previous: When Decisions No Longer Settle",
        },
      },
    },
    contact: {
      hero: {
        title: "Let's begin a thoughtful conversation",
        subtitle:
          "If you wish to explore how I can support you or your team, I'll be glad to listen. Write with confidence — every message is received with discretion and answered personally.",
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        success: "Thank you — your message has been received. I'll reply soon.",
        error: "Please fill in all fields.",
        sending: "Sending...",
        invalidEmail: "Please enter a valid email address.",
        sendFailed: "Failed to send message. Please try again.",
      },
    },
    // Page <title>, meta description and Open Graph text.
    seo: {
      home: {
        title: "Ernesto Tages - Ethical Leadership Consultancy",
        description: "Specialized consultancy in ethical leadership for executives. Strategic support in managing complex dilemmas, decisional clarity, and organizational integrity.",
        keywords: "ethical leadership, leadership consultancy, decision-making, emotional mastery, executive advisory, moral clarity, ethical decision-making",
        ogTitle: "Ernesto Tages - Ethical Leadership Consultancy",
        ogDescription: "Specialized consultancy in ethical leadership for executives. Strategic support in managing complex dilemmas, decisional clarity, and organizational integrity.",
      },
      about: {
        title: "About Ernesto Tages | Ethical Leadership Mentor",
        description: "Philosopher and consultant with 25+ years of experience in ethical leadership. Supporting executives from public, private, and social sectors to transform complex dilemmas into clear, ethical decisions.",
        ogTitle: "Ernesto Tages - Profile and Experience",
        ogDescription: "Expert in emotional management and decisional clarity. Author, speaker, and mentor for leaders facing complex ethical dilemmas.",
      },
      services: {
        title: "Consultancy and Conferences in Ethical Leadership | Ernesto Tages",
        description: "Individual consultancy and corporate programs in ethical leadership. Strategic sessions, conferences, and seminars integrating intellectual rigor, emotional management, and integrity.",
        ogTitle: "Services: Individual Consultancy and Corporate Programs",
        ogDescription: "Personalized support for executives and teams facing complex ethical dilemmas. Decisional clarity and conscious leadership.",
      },
      resources: {
        title: "Reflection and Ethical Leadership Resources | Ernesto Tages",
        description: "Articles, essays, and practical tools on ethical leadership, emotional management, and decisional clarity. Free resources for executives seeking to decide with integrity.",
        ogTitle: "Free Resources: Articles and Ethical Leadership Tools",
        ogDescription: "Library of content on ethical dilemmas, emotion management, and conscious decision-making. For leaders who value rigor and integrity.",
      },
      contact: {
        title: "Contact Ernesto Tages | Ethical Leadership Consultancy",
        description: "Get in touch to schedule an ethical leadership consultancy session. Personalized support for executives facing complex dilemmas and seeking decisional clarity.",
        ogTitle: "Contact - Schedule a Consultancy Session",
        ogDescription: "Book a conversation to explore how to transform leadership dilemmas into ethical and strategic decisions. Individual consultancy and corporate programs available.",
      },
    },
    // Card linking to /clarity-matrix (Home, Services, Frameworks & Tools).
    // The name of the framework is not translated.
    clarityMatrixCard: {
      title: "The Clarity Matrix™",
      description:
        "A framework for ethical clarity under pressure. Navigate complex decisions through four states: Entropic Drift, Moral Containment, Strategic Dislocation, and Ethical Clarity. Designed for orientation, not evaluation.",
      cta: "Explore framework",
    },
    notFound: {
      title: "Page not found | Ernesto Tages",
      heading: "Page Not Found",
      line1: "Sorry, the page you are looking for doesn't exist.",
      line2: "It may have been moved or deleted.",
      goHome: "Go Home",
    },
    footer: {
      tagline: "Clarity for the decisions that matter.",
      // PRIVACY POLICY LINK — placeholder. When the privacy policy page exists,
      // add privacyLink here (en/es/pt) and link it in the footer (Footer.tsx);
      // add the page to routes.ts, sitemap.xml and netlify.toml.
      // privacyLink: "...",
      // The newsletter itself is published in English only.
      newsletter: {
        title: "The Clarity Compass",
        description:
          "Thoughtful reflections for leaders seeking clarity, integrity and calm in complexity.",
        englishOnly: "Available in English only.",
        placeholder: "* E-mail",
        // Accessible name of the e-mail field (visually hidden).
        emailLabel: "Email address",
        button: "Subscribe",
        submitting: "Subscribing...",
        success: "Thank you for subscribing!",
        error: "Subscription failed. Please try again.",
      },
      rights: "All rights reserved",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      services: "Servicios",
      resources: "Recursos",
      contact: "Contacto",
      close: "Cerrar",
      toggleMenu: "Abrir o cerrar el menú",
      notifications: "Notificaciones",
      skipToContent: "Saltar al contenido",
    },
    home: {
      hero: {
        title:
          "Transformando Dilemas de Liderazgo en Acción Decisiva y Ética",
        subtitle:
          "Guío a líderes en las exigencias éticas y emocionales de la responsabilidad, ayudándoles a navegar la complejidad y decidir con claridad, rigor y equilibrio.",
        cta: "Descubra cómo puedo ayudarle",
      },
      strategic: {
        title: "Apoyo estratégico para decisiones críticas",
        intro1:
          "En entornos de alta exigencia, el liderazgo requiere no solo experiencia técnica sino también una comprensión profunda de las emociones que influyen en la toma de decisiones. Mi trabajo se centra en ayudar a líderes de los sectores público, privado y social a reducir el ruido emocional, clarificar prioridades y actuar con integridad.",
        intro2:
          "Con un enfoque que integra ciencia, ética y gestión emocional, proporciono espacios para la reflexión crítica y la orientación estratégica para quienes ejercen el poder responsablemente.",
        block1: {
          title: "Reduciendo el ruido emocional",
          description:
            "Ayudo a identificar y gestionar emociones que interfieren con el juicio, permitiendo decisiones más tranquilas, precisas y libres de sesgos.",
        },
        block2: {
          title: "Claridad en dilemas complejos",
          description:
            "Apoyo el proceso de análisis en situaciones críticas, ayudando a distinguir lo esencial de lo accesorio y a encontrar caminos viables con perspectiva estratégica.",
        },
        block3: {
          title: "Alineación ética en entornos de poder",
          description:
            "Asisto en la integración de valores éticos en el liderazgo, asegurando que las decisiones reflejen coherencia, confianza y legitimidad.",
        },
        cta: "Ver servicios",
      },
    },
    about: {
      hero: {
        title: "Formación Sólida. Enfoque Humano. Compromiso Ético.",
        p1: "Soy Ernesto Tages, consultor, investigador y mentor dedicado a ayudar a líderes a tomar decisiones con claridad, rigor y equilibrio.",
        p2: "Nacido en Argentina y radicado en Portugal, trabajo con líderes en Europa y América Latina. Mi trayectoria académica abarca Administración de Empresas, una Maestría en Ciencia Política y un Doctorado en Filosofía — un viaje interdisciplinario moldeado por la búsqueda de unir razón y emoción en el liderazgo.",
        p3: "Durante casi tres décadas, he cultivado una disciplina diaria que integra técnicas orientales y occidentales de reflexión y auto-observación — una práctica que ha profundizado mi comprensión de la naturaleza humana y las corrientes emocionales que moldean nuestras elecciones. Me permite apoyar a líderes no solo con rigor ético e intelectual, sino también con una visión humana — uniendo claridad analítica con conciencia interior.",
        p4: "He acompañado a líderes de los sectores público, privado y social en momentos de presión, incertidumbre y responsabilidad ética. Mi enfoque es riguroso pero empático: escuchar con cuidado, clarificar lo que realmente importa y fomentar una acción sabia y oportuna.",
        p5: "En el núcleo de mi trabajo hay una convicción: el liderazgo alcanza su forma más elevada cuando se fundamenta en el pensamiento crítico, la honestidad emocional y el servicio.",
        cta: "Conozca más sobre mi enfoque",
      },
            approach: {
        title: "Guiando con Claridad.",
        subtitle: "La Arquitectura de Decisiones Sabias",
        intro:
          "Lo que sigue es la filosofía que da estructura a mi trabajo — un enfoque disciplinado pero humano para ayudar a los líderes a actuar con integridad en medio de la complejidad.",
        phase1:
          "Mi viaje comenzó cuando noté un patrón recurrente en los desafíos de liderazgo en los sectores privado, público y social. El problema nunca fue la inteligencia, ni la información; era la intersección asfixiante donde el análisis racional choca con la presión emocional — donde los principios éticos se desdibujan bajo la urgencia, y el poder amplifica cada punto ciego.",
        phase2:
          "",
        phase3:
          "Me di cuenta de que los líderes no necesitan más datos. Necesitan claridad. No la claridad que viene de la simplificación, sino el tipo que emerge cuando la complejidad se enfrenta con disciplina, honestidad y estructura.",
        phase4:
          "De esa percepción, mi metodología tomó forma: un proceso riguroso que integra filosofía, ciencia emocional y pensamiento estratégico — ayudando a los líderes a ver lo que realmente importa, decidir con integridad y actuar con confianza.",
        pillarsTitle: "Los Tres Pilares de Mi Enfoque",
        pillar1Title: "1. Claridad Emocional",
        pillar1Subtitle: "Comprender la emoción como datos, no como ruido.",
        pillar1Text:
          "Las emociones no son obstáculos para buenas decisiones — son información. Pero cuando no se examinan, distorsionan el juicio. Ayudo a los líderes a identificar y gestionar las corrientes emocionales que nublan su pensamiento, permitiéndoles recuperar presencia tranquila y precisión analítica.",
        pillar2Title: "2. Rigor Ético",
        pillar2Subtitle: "Convertir la integridad en ventaja estratégica.",
        pillar2Text:
          "La ética no es un lujo ni una restricción — es una ventaja estratégica. Los líderes que actúan con coherencia inspiran confianza, construyen legitimidad y toman decisiones que perduran. Guío a los líderes a través de la reflexión ética estructurada, ayudándoles a alinear sus valores con sus acciones.",
        pillar3Title: "3. Perspectiva Estratégica",
        pillar3Subtitle: "Construir estructura en medio de la complejidad.",
        pillar3Text:
          "La complejidad exige estructura. Proporciono marcos que ayudan a los líderes a distinguir lo esencial de lo accesorio, ver más allá de la presión inmediata y encontrar caminos viables hacia adelante. Esto no se trata de soluciones rápidas — se trata de construir la capacidad de pensar con claridad bajo cualquier condición.",
        distinctiveTitle: "Un Espacio Distintivo",
        distinctiveText:
          "Mi trabajo no es terapia, coaching ni consultoría en el sentido tradicional. Es un contexto para la reflexión rigurosa y la orientación estratégica — donde los líderes hacen una pausa, piensan y se realinean antes de actuar.",
        blockquote1: "Porque la calidad de una decisión no está determinada por la velocidad, sino por la claridad.",
        blockquote2: "Y la claridad no es un don — es una disciplina.",
        closingText:
          "Aquí, el rigor y la reflexión encuentran forma — renovando la claridad y la energía para la acción decisiva.",
        cta: "Explore mis programas",
      },
    },
    services: {
      hero: {
        title: "Orientación estratégica para liderazgo consciente",
        subtitle:
          "Un espacio donde el rigor y la reflexión se traducen en claridad renovada y energía para la acción decisiva.",
        intro:
          "Cuando las decisiones tienen consecuencias reales, la claridad se convierte en la forma más valiosa de poder. Trabajo con líderes que quieren actuar con coherencia, serenidad e integridad — transformando la complejidad en lucidez y la reflexión en acción decisiva.",
      },
      explore: "Explorar",
      twoLines: {
        title: "Dos Líneas de Trabajo",
        individual: {
          title: "Consultoría Individual",
          tagline: "Trabajo en profundidad para la toma de decisiones lúcida.",
          description:
            "Para líderes de los sectores público, privado y social que enfrentan decisiones complejas de alto riesgo y buscan fortalecer su claridad, excelencia emocional y alineación ética.",
        },
        conferences: {
          title: "Conferencias y Seminarios Profesionales",
          tagline: "Espacios colectivos para la renovación ética y emocional.",
          description:
            "Para foros de liderazgo, universidades, equipos ejecutivos y organizaciones que buscan profundizar su cultura ética e inteligencia emocional.",
        },
        closing:
          "Cada formato abre un espacio para que los líderes hagan una pausa, reflexionen y se realineen — donde el rigor y la reflexión se traducen en claridad renovada y energía para la acción decisiva.",
      },
      individualDetails: {
        title: "Consultoría Individual",
        objectives: "Objetivos",
        obj1:
          "Clarificar dilemas complejos → fortalecer la lucidez y la confianza",
        obj2:
          "Gestionar emociones no deseadas → recuperar la presencia tranquila",
        obj3:
          "Alinear valores y acciones → lograr decisiones coherentes y confiables",
        modalities: "Modalidades",
        mod1:
          "Programa de Claridad en Decisiones Ejecutivas — asociación de asesoramiento continuo uno a uno",
        mod2:
          "Iluminación de Puntos Ciegos Éticos — intensivo de medio día o día completo",
        mod3:
          "Auditoría de Decisiones Éticas — análisis estructurado de decisiones recientes",
        mod4:
          "Día de Estrategia / Sesión de Claridad en Crisis — apoyo inmediato en momentos de presión",
        outcome: "Resultado Esperado",
        outcomeText:
          "Una capacidad renovada para ver con claridad, decidir con serenidad y actuar con integridad — incluso cuando el contexto resiste la simplicidad.",
        cta: "Solicitar un diálogo exploratorio",
      },
      conferencesDetails: {
        title: "Conferencias y Seminarios Profesionales",
        topics: "Temas sugeridos",
        topic1: "Excelencia emocional en contextos de alta responsabilidad",
        topic2: "Ética aplicada en el ejercicio del poder",
        topic3: "La integridad como competencia estratégica",
        topic4: "El arte de la reflexión bajo presión",
        approach: "Enfoque",
        approachText1:
          "Riguroso pero dinámico; intelectualmente exigente pero accesible.",
        approachText2:
          "Cada sesión combina claridad conceptual, experiencia vivida y reflexión participativa — diseñada para inspirar, provocar y anclar el cambio.",
        formats: "Formatos",
        format1: "Conferencias (presenciales o virtuales)",
        format2: "Seminarios o retiros personalizados",
        format3: "Sesiones informativas privadas para juntas o liderazgo",
        cta: "Solicitar una propuesta para su organización",
      },
    },
    resources: {
      hero: {
        title: "Rigor y reflexión para la acción decisiva",
        subtitle:
          "Un espacio donde las ideas y las prácticas nutren la claridad ética en el liderazgo. Aquí encontrará ideas, lecturas y herramientas diseñadas para fortalecer la claridad ética — reflexiones prácticas para líderes que eligen pensar antes de actuar.",
      },
      blocks: {
        insights: {
          title: "Perspectivas y Ensayos",
          description:
            "Reflexiones breves donde la ética, la emoción y el poder se encuentran en la práctica del liderazgo.",
        },
        frameworks: {
          title: "Marcos y Herramientas",
          description:
            "Modelos simples que ayudan a que la reflexión se convierta en acción.",
        },
        talks: {
          title: "Charlas y Conversaciones",
          description:
            "Grabaciones y transcripciones de conferencias, entrevistas y diálogos.",
        },
        caseStudies: {
          title: "Estudios de Caso",
          description:
            "Situaciones donde la decisión, la autoridad y la integridad son puestas a prueba bajo presión real.",
        },
      },
      insightsDetails: {
        title: "Perspectivas y Ensayos",
        essay1: {
          title: "La Brújula Interior del Líder Ético",
          description:
            "Por qué la integridad comienza no en las reglas, sino en la conciencia — y cómo los líderes pueden transformar la incertidumbre en claridad.",
        },
        essay2: {
          title: "El Costo de la Claridad",
          description:
            "Cuando cada opción tiene un precio, el papel del líder no es evitar la tensión, sino darle significado.",
        },
        essay3: {
          title: "Maestría Emocional como Ventaja Estratégica",
          description:
            "Cómo los líderes que entienden la emoción toman decisiones más agudas, justas y humanas.",
        },
        download: "Descargar PDF",
        // Cards for the white papers. Titles are not translated (titles of works).
        whitePapers: {
          costOfClarity: {
            title: "The Cost of Clarity",
            description:
              "Una exploración de cómo el liderazgo ético exige aceptar los costes inevitables en lugar de eludirlos. Este libro blanco examina la práctica de la claridad costosa y cómo los líderes pueden transformar la tensión en confianza mediante decisiones coherentes.",
          },
          emotionalExcellence: {
            title: "Emotional Excellence",
            description:
              "Por qué la coherencia entre emoción, pensamiento y acción se ha convertido en una ventaja estratégica para los líderes. Este libro blanco analiza cómo la excelencia emocional transforma la eficacia del liderazgo en entornos organizativos complejos.",
          },
          iberoamericanEthicalLeadership: {
            title: "El liderazgo ético en Iberoamérica",
            description:
              "Una exploración exhaustiva de cómo la emoción, la responsabilidad y el poder configuran el liderazgo ético en Iberoamérica. Este libro blanco propone siete movimientos que trazan una brújula moral para el liderazgo contemporáneo.",
          },
        },
        readMore: "Leer más",
      },
      frameworksDetails: {
        title: "Marcos y Herramientas",
        framework1: {
          title: "La Brújula de Decisiones",
          description:
            "Un marco de una página para navegar elecciones complejas con integridad.",
        },
        framework2: {
          title: "La Auditoría Emocional",
          description:
            "Una herramienta estructurada para identificar y gestionar emociones que interfieren con el juicio.",
        },
        framework3: {
          title: "La Lista de Verificación Ética",
          description:
            "Una guía práctica para asegurar que las decisiones reflejen coherencia, confianza y legitimidad.",
        },
        download: "Descargar PDF",
      },
      talksDetails: {
        title: "Charlas y Conversaciones",
        talk1: {
          title: "Liderazgo e Inteligencia Emocional",
          description:
            "Una conversación sobre cómo los líderes pueden integrar la conciencia emocional en la toma de decisiones estratégicas.",
        },
        talk2: {
          title: "Ética en el Ejercicio del Poder",
          description:
            "Una conferencia que explora las dimensiones éticas del liderazgo en entornos de alto riesgo.",
        },
        talk3: {
          title: "El Arte de la Reflexión Bajo Presión",
          description:
            "Un diálogo sobre cómo los líderes pueden mantener la claridad y la integridad en momentos de crisis.",
        },
        watch: "Ver video",
      },
      talksPage: {
        title: "Charlas y Conversaciones",
        description1:
          "Conversaciones públicas, conferencias y diálogos donde la claridad ética se ejerce en tiempo real.",
        description2:
          "Esta sección documenta momentos donde la reflexión no se prepara con anticipación, sino que se pone a prueba en condiciones en vivo.",
        backToResources: "Volver a Recursos",
      },
      caseStudiesPage: {
        title: "Estudios de Caso",
        subtitle: "Tres situaciones donde la claridad, el discernimiento y la autoridad son puestos a prueba — y restaurados.",
        breadcrumbHome: "Inicio",
        breadcrumbResources: "Recursos",
        breadcrumbCaseStudies: "Estudios de Caso",
        readCaseStudy: "Leer estudio de caso",
        backToCaseStudies: "← Volver a Estudios de Caso",
        hideExtended: "Ocultar reflexión extendida ↑",
        continueExtended: "Continuar con la reflexión extendida →",
        extendedReflection: "Reflexión Extendida",
        caseA: {
          title: "Cuando Toda Opción Tiene un Costo",
          tagline: "Integridad bajo presión sistémica.",
          summary: "Un alto ejecutivo enfrenta una presión sostenida para aprobar una decisión que es legalmente defendible y económicamente racional, pero difícil de asumir sin costo interno. La situación es formalmente correcta — y profundamente exigente.",
          subtitle: "Decidir sin inocencia, pero con integridad.",
          seoDescription: "Un alto ejecutivo enfrenta presión creciente para aprobar una decisión legalmente defendible pero que conlleva costos personales y relacionales significativos.",
          tension: "La Tensión",
          tensionP1: "Un alto ejecutivo en una gran organización enfrentaba una presión creciente para aprobar una decisión estratégica que era legalmente defendible y económicamente racional, pero que impondría costos significativos a personas con las que había trabajado durante años — personas cuya confianza había sido esencial para su autoridad. Los miembros del consejo enfatizaban la necesidad institucional y la presión competitiva. Sin embargo, él sabía que una vez anunciada, la decisión redefiniría cómo era percibido, tanto por los afectados como por sí mismo.",
          tensionP2: "Había tomado decisiones defendibles antes — pero estaba cada vez más perturbado por la brecha entre lo que podía justificar externamente y lo que podía sostener internamente sin erosión. Los caminos legalmente defendibles entraban en conflicto con compromisos internos. Las necesidades estratégicas colisionaban con la credibilidad personal. La demora compuiría la presión; la acción invitaría al escrutinio. No había terreno neutral, ninguna solución que dejara todos los intereses intactos.",
          tensionP3: "La pregunta no era si alguien quedaría decepcionado — eso era inevitable — sino si la decisión podía tomarse sin requerir autoengaño para sostenerla. Lo que estaba en juego no era solo el resultado, sino la forma de autoridad que este líder llevaría después de que la decisión se hiciera pública.",
          tensionP4: "A primera vista, el dilema parecía técnico: mapear riesgos, calcular exposición, distribuir responsabilidad entre estructuras organizacionales. Sin embargo, bajo esta superficie procedimental yacía una tensión más profunda — una que era ética y, en última instancia, personal.",
          tensionP5: "El ejecutivo no estaba preguntando, \"¿Cuál es la decisión correcta?\" Estaba preguntando, a menudo sin expresarlo, \"¿Cómo tomo esta decisión sin perderme a mí mismo — o despertar a las 3 de la mañana sabiendo que me he convertido en alguien que no reconozco?\"",
          tensionP6: "El verdadero peligro no era tomar la decisión equivocada. Era tomar una decisión defendible que corroía algo esencial internamente mientras permanecía plausible externamente.",
          clarification: "El Trabajo de Clarificación",
          clarificationP1: "El trabajo no comenzó evaluando opciones. Comenzó desacelerando la urgencia que enmarcaba la decisión como puramente estratégica, y resistiendo la presión de optimizar resultados antes de clarificar para qué se estaba optimizando realmente.",
          clarificationP2: "El enfoque se desplazó hacia los criterios:",
          clarificationL1: "¿Qué valores estaban genuinamente guiando la decisión, y cuáles estaban siendo invocados como justificación después de que las preferencias ya se habían formado?",
          clarificationL2: "¿Qué costos eran estructuralmente inevitables — y cuáles estaban siendo negados o desplazados hacia otros sin reconocimiento?",
          clarificationL3: "¿Qué tipo de responsabilidad se estaba ejerciendo: reactiva (respondiendo a la presión), protectora (minimizando la exposición) o asuntiva (aceptando consecuencias como parte de la decisión)?",
          clarificationP3: "A medida que se exploraban estas preguntas, ocurrió un cambio. El ejecutivo dejó de buscar la opción menos dañina y comenzó a clarificar los términos bajo los cuales el daño podía asumirse sin requerir distorsión para permanecer habitable.",
          clarificationP4: "Esto no resolvió la tensión. Clarificó lo que estaba en juego al resolverla.",
          outcome: "El Resultado",
          outcomeP1: "La decisión que surgió no protegió todos los intereses, ni eliminó el conflicto. Sin embargo, restauró la autoría.",
          outcomeP2: "El ejecutivo eligió un camino que implicaba costos visibles y aceptó que esos costos tendrían que ser llevados abiertamente, sin mitigación retórica. La decisión se volvió habitable — no porque fuera cómoda, sino porque era coherente.",
          outcomeP3: "En las semanas siguientes, pudo liderar sin el ruido interno constante de la justificación. La decisión seguía siendo difícil de explicar en ciertos contextos — pero ya no le exigía distorsionar ni los hechos ni a sí mismo para defenderla. Las críticas podían enfrentarse sin necesitar la defensividad para permanecer funcional.",
          outcomeP4: "La presión no desapareció. Pero ya no afectaba el juicio. Podía pensar hacia adelante nuevamente. La autoridad ya no se gastaba gestionando la contradicción interna — se hizo disponible para el trabajo que realmente la requería. El discernimiento había sido restaurado, y con él la capacidad de decidir nuevamente sin erosión.",
          quote1: "La integridad no es elegir el mejor resultado. Es elegir la decisión cuyo costo está dispuesto a llevar sin distorsión.",
          extSection1Title: "Despejando la Niebla Sin Simplificar la Realidad",
          extSection1P1: "Lo que hacía difícil esta decisión no era la incertidumbre, sino la claridad. Lo que hacía peligrosa esta situación no era solo la complejidad, sino la erosión del discernimiento bajo presión sostenida.",
          extSection1P2: "Desde relativamente temprano en el proceso, el ejecutivo comprendía los contornos de la situación. Los hechos eran conocidos. Los escenarios habían sido mapeados. El asesor legal había proporcionado su análisis; los asesores financieros habían modelado las implicaciones. Lo que permanecía sin resolver no era lo que podía suceder, sino lo que significaría actuar — y si ese significado podía sostenerse en el tiempo sin requerir autojustificación para permanecer tolerable.",
          extSection1P3: "Esta es una forma de dificultad menos discutida: cuando la ambigüedad es baja, pero la responsabilidad es alta, y la decisión no puede diferirse al proceso ni delegarse a la experiencia.",
          extSection1P4: "Una de las primeras ilusiones que requirió ser desmantelada fue la esperanza de una solución limpia — una decisión que pudiera defenderse integralmente, sin dejar ningún residuo ético. En situaciones de genuina tensión ética, esta esperanza a menudo se presenta como profesionalismo. Los líderes se dicen a sí mismos que buscan robustez, objetividad, alineación institucional. En realidad, pueden estar buscando inocencia: una forma de actuar sin sentirse implicados en la pérdida, una forma de decidir sin tener que cargar lo que la decisión cuesta.",
          extSection1P5: "Pero algunas decisiones son irreductiblemente implicantes. No pueden tomarse sin costo, y no pueden tomarse sin residuo. Reconocer esto — no como fracaso, sino como la estructura real de la situación — fue un punto de inflexión.",
          extSection1P6: "El ejecutivo no estaba preguntando, \"¿Cuál es la decisión correcta?\" Estaba preguntando, \"¿Cuándo empezó a sentirse como una lenta autotraición tomar decisiones defendibles?\"",
          extSection1P7: "Era competente, experimentado, confiado por sus pares. Sin embargo, estaba cada vez más inseguro de si esas cualidades aún se conectaban con algo que reconocía como él mismo — o si se habían convertido en actuaciones que mantenía para seguir siendo funcional.",
          extSection2Title: "Responsabilidad Más Allá de la Justificación",
          extSection2P1: "Una dinámica recurrente en el proceso de clarificación fue la tensión entre justificación y responsabilidad. No la justificación en un sentido cínico, sino en uno profundamente humano.",
          extSection2P2: "El ejecutivo regresaba repetidamente a preguntas como:",
          extSection2L1: "\"¿Resistirá esto el escrutinio si es cuestionado?\"",
          extSection2L2: "\"¿Puede esto defenderse sin debilitar mi posición?\"",
          extSection2L3: "\"¿Cómo explico esto de una manera que proteja la credibilidad institucional?\"",
          extSection2P3: "Estas son preocupaciones legítimas. El liderazgo opera en entornos donde las decisiones deben rendir cuentas a múltiples audiencias, y donde la vulnerabilidad puede ser explotada.",
          extSection2P4: "Sin embargo, cuando estas preocupaciones dominan el proceso decisional, desplazan sutilmente la responsabilidad hacia afuera. La decisión se orienta hacia la defendibilidad en lugar de la coherencia. Se convierte en un movimiento en un juego estratégico, en lugar de un acto que puede ser asumido.",
          extSection2P5: "El trabajo consistió en recentrar la responsabilidad hacia adentro — no como alternativa a la rendición de cuentas, sino como su fundamento ético:",
          extSection2L4: "¿Podía explicarse la decisión sin retórica estratégica?",
          extSection2L5: "¿Podía asumirse no solo en el momento del anuncio, sino a lo largo del tiempo, a medida que las consecuencias se desarrollaban?",
          extSection2L6: "¿Podía habitarse sin resentimiento, sin la necesidad de rejustificarla constantemente ante uno mismo?",
          extSection2P6: "No se trataba de pureza moral o autojusticia. Se trataba de la sostenibilidad del autorespeto — la condición bajo la cual la autoridad permanece ejercitable sin requerir negación para seguir siendo funcional.",
          extSection3Title: "El Papel de la Pérdida",
          extSection3P1: "A medida que aumentaba la claridad, también lo hacía la visibilidad de la pérdida.",
          extSection3P2: "Algo sería dañado: la confianza en una dirección, la credibilidad en otra, relaciones que no podrían preservarse intactas, arreglos institucionales que requerirían renegociación. El impulso inicial fue minimizar esta pérdida a través de la narrativa — presentarla como temporal, necesaria, estratégica, o como el costo inevitable de un bien mayor.",
          extSection3P3: "El trabajo consistió en resistir ese impulso. No porque la narrativa sea ilegítima, sino porque cuando la narrativa precede al reconocimiento, se convierte en una forma de ocultamiento — de los demás, pero más importantemente, de uno mismo.",
          extSection3P4: "La pregunta se convirtió en: ¿Qué pérdida puede reconocerse sin negación, y qué consecuencias pueden aceptarse como estructuralmente vinculadas a la decisión, en lugar de como efectos secundarios desafortunados que podrían haberse evitado con mejor ejecución?",
          extSection3P5: "Este reencuadre no eliminó el dolor ni la dificultad de la decisión. Eliminó la necesidad de autoengaño para proceder.",
          extSection4Title: "La Decisión como Autocompromiso",
          extSection4P1: "Finalmente, la decisión surgió no como una conclusión alcanzada a través de la optimización, sino como un compromiso realizado con plena conciencia de lo que implicaba.",
          extSection4P2: "Un compromiso de:",
          extSection4L1: "aceptar consecuencias sin justificación teatral,",
          extSection4L2: "resistir la urgencia de moralizar después del hecho, presentando la decisión como heroica o como evidencia de un juicio ético superior,",
          extSection4L3: "permanecer responsable más allá del momento de la decisión — vivir con lo que se eligió, no solo anunciarlo.",
          extSection4P3: "En este sentido, la decisión fue menos sobre resolver un problema y más sobre asumir una posición en el paisaje ético que el ejecutivo ya habitaba, pero que había sido reticente a ocupar explícitamente.",
          extSection4P4: "La claridad ética no promete alivio. Promete orientación.",
          extSection4P5: "En situaciones donde toda opción conlleva un costo, la claridad no nos salva de la pérdida. Nos salva de la fragmentación — de tomar decisiones que no podemos sostener sin distorsionar ni la decisión ni a nosotros mismos.",
          extSection4P6: "Este trabajo es posible solo cuando hay disposición a examinar lo que permanece no dicho en los procesos decisionales — no porque esté deliberadamente oculto, sino porque los contextos institucionales premian la velocidad, el consenso y la defendibilidad por encima de la clarificación sostenida. Pocos entornos decisionales permiten la forma de atención que esto requiere. Menos aún lo tratan como un uso legítimo del tiempo.",
          quote2: "Una decisión se vuelve ética no cuando es inofensiva, sino cuando puede llevarse sin autodivisión.",
          nextLabel: "Siguiente: Cuando las Decisiones Ya No se Asientan →",
        },
        caseB: {
          title: "Cuando las Decisiones Ya No se Asientan",
          tagline: "Discernimiento bajo autoridad final.",
          summary: "Una decisión está claramente identificada y dentro de territorio familiar. Sin embargo, no se cierra. Regresa repetidamente, sin nueva información ni desacuerdo, resistiendo su conclusión.",
          subtitle: "Discernimiento bajo autoridad final.",
          seoDescription: "Una decisión está claramente identificada y bien comprendida, sin embargo no se cierra. Regresa repetidamente sin nueva información, sin desacuerdo, sin ningún obstáculo obvio.",
          tension: "La Tensión",
          tensionP1: "El problema estaba claramente identificado. Se trataba de una decisión estratégica que debía tomarse — compleja, ciertamente, pero bien dentro del rango de situaciones que había manejado muchas veces antes. Los parámetros eran conocidos, las implicaciones cuidadosamente mapeadas, y varios asesores estaban involucrados, cada uno trabajando competentemente dentro de su respectivo dominio. Desde cualquier perspectiva externa, la situación parecía estar bajo control.",
          tensionP2: "Y sin embargo, la decisión no se cerraba. Regresaba repetidamente, sin nueva información, sin desacuerdo, sin ningún obstáculo obvio. Cada vez que volvía, resistía su conclusión. No porque fuera poco clara, ni porque el análisis fuera insuficiente, sino porque actuar sobre ella no resolvía el asunto de la manera que normalmente lo haría. Esta persistencia no era dramática ni disruptiva, pero era inconfundible — y cada vez más incómoda.",
          tensionP3: "Los signos eran concretos y acumulativos. Las decisiones se posponían sin una razón clara. Puntos ya abordados se revisitaban. Las conversaciones con asesores, que deberían haber traído tranquilidad, comenzaron a generar irritación. El trabajo alrededor de la decisión continuaba como se esperaba: escenarios refinados, argumentos fortalecidos, incertidumbre reducida. Todo lo que normalmente apoya el cierre estaba en su lugar, y sin embargo nada de ello tocaba lo que realmente estaba en juego.",
          tensionP4: "Desde su perspectiva, el problema seguía siendo externo. Pertenecía a la situación misma. No había razón para cuestionar su juicio, ni ningún sentido de que algo estuviera \"mal\". Por el contrario, la decisión era bien comprendida. Eso era precisamente lo que hacía su persistencia tan difícil de tolerar. A pesar de la competencia movilizada a su alrededor, la situación permanecía extrañamente inconclusa.",
          clarification: "El Trabajo de Clarificación",
          clarificationP1: "Buscar ayuda no vino de la urgencia ni de la crisis. No había expectativa de que alguien más proporcionara una solución. Lo que buscaba era orientación — una forma de abordar la situación que no empujara inmediatamente hacia la conclusión, la justificación o la optimización.",
          clarificationP2: "Desde el principio, el trabajo no se enfocó en la decisión misma. Nada se añadió al análisis, no se propusieron alternativas, y no se hizo ningún intento de mejorar lo que ya estaba bien construido. La situación se dejó exactamente como estaba. Lo que cambió no fue su contenido, sino la relación con ella.",
          clarificationP3: "El primer paso consistió en interrumpir el impulso automático que se había apoderado — la presión de concluir simplemente porque todo parecía listo. Se permitió que la decisión permaneciera abierta, no para retrasarla, sino para comprender por qué resistía su resolución a pesar de ser manejada correctamente. Esta suspensión creó las condiciones para que la atención se desplazara.",
          clarificationP4: "Al hacerlo, comenzaron a emerger distinciones. Elementos que previamente habían sido tratados como equivalentes se separaron. Lo que genuinamente importaba se diferenció de lo que meramente demandaba atención. Algunas consideraciones se revelaron como inevitables; otras como habituales, repetidas más por inercia que por necesidad. La situación no se volvió más simple, pero se volvió más precisa.",
          clarificationP5: "Lo que se había experimentado como fricción ya no era algo que debía forzarse. Se volvió informativo. La resistencia de la decisión misma comenzó a clarificar lo que aún no había sido propiamente asumido.",
          outcome: "El Resultado",
          outcomeP1: "Cuando la decisión finalmente se tomó, se tomó sin urgencia. Nada externo había cambiado. Las restricciones eran las mismas, los costos conocidos, y los riesgos permanecían. Lo que había cambiado era que la decisión ya no requería refuerzo ni justificación. Podía asumirse tal como era, sin residuo.",
          outcomeP2: "Una vez tomada, se asentó. No porque resolviera toda tensión, sino porque ya no generaba acumulación interna. El asunto se cerró de una manera que permitió que la atención avanzara, sin necesidad de ser llevada hacia adelante.",
          outcomeP3: "En las semanas siguientes, los efectos de este cambio se hicieron visibles más allá de la situación inicial. Las decisiones eran menos, pero más decisivas. Los asuntos que no requerían su participación se reconocían antes. Las conversaciones con asesores recuperaron su lugar apropiado — útiles, pero ya no sustituyendo el juicio.",
          outcomeP4: "Desde afuera, nada dramático había ocurrido. Desde adentro, algo esencial había sido restaurado: la capacidad de que las decisiones concluyeran, en lugar de acumularse.",
          quote1: "Una decisión concluye no cuando se justifica, sino cuando ya no deja residuo detrás.",
          extSection1Title: "Cuando la Competencia Deja de Orientar la Acción",
          extSection1P1: "Lo que hacía difícil esta situación no era su complejidad, sino su persistencia. La decisión había sido bien enmarcada, tratada con cuidado, apoyada por experiencia y revisitada exhaustivamente. En circunstancias normales, esto habría sido suficiente. Y sin embargo, no lo fue.",
          extSection1P2: "Este patrón tiende a aparecer solo después de una responsabilidad prolongada. Cuando la autoridad se ejerce continuamente, las decisiones se acumulan. La mayoría se asientan. Algunas no. Con el tiempo, la incapacidad de una decisión para concluir comienza a importar más que la decisión misma, porque señala un cambio en cómo está funcionando la autoridad.",
          extSection1P3: "Lo que estaba sucediendo aquí no era un fracaso del juicio, sino algo más silencioso y más corrosivo: la sustitución gradual del discernimiento por la repetición. Se aplicaban las mismas herramientas de nuevo, se hacían las mismas preguntas de nuevo, se buscaba la misma tranquilidad de nuevo — sin efecto. Todo lo que debería haber funcionado estaba funcionando, solo que no donde importaba.",
          extSection1P4: "Solo después pudo verse lo que realmente había estado en juego. La inquietud no era causada por la decisión misma, sino por el hecho de que decidir ya no producía orientación. La acción ya no traía cierre. La autoridad continuaba funcionando, pero había comenzado a perder su capacidad de concluir.",
          extSection1P5: "El trabajo consistió en restaurar esa capacidad. No resolviendo la situación de manera diferente, sino clarificando lo que la situación realmente estaba pidiendo — y lo que no. Separando lo que tenía que asumirse de lo que meramente se había repetido. Permitiendo que la resistencia de la decisión fuera comprendida en lugar de anulada.",
          extSection1P6: "Lo que regresó no fue certeza, ni comodidad. Lo que regresó fue lucidez: la capacidad de que una decisión tomara forma, fuera asumida y luego liberara la atención. Esto no puede estandarizarse ni delegarse. Requiere interrupción, precisión y la disposición a dejar de hacer lo que normalmente funciona cuando ya no lo hace.",
          extSection1P7: "Para quienes llevan la autoridad final, esto no es un lujo. Es la condición para ejercer el poder sin erosión.",
          quote2: "La autoridad se erosiona no por el error, sino por las decisiones que no pueden asumirse plenamente.",
          prevLabel: "← Anterior: Cuando Toda Opción Tiene un Costo",
          nextLabel: "Siguiente: Cuando la Decisión Correcta Cuesta →",
        },
        caseC: {
          title: "Cuando la Decisión Correcta Cuesta",
          tagline: "La autoridad después del costo de la integridad.",
          summary: "Un líder con autoridad final toma una decisión que es necesaria, defendible y correcta. Los costos son conocidos. Lo que sigue no es la reversión, sino el desafío de sostener la autoridad después del impacto.",
          subtitle: "Sosteniendo la autoridad después de que la integridad ha sido ejercida.",
          seoDescription: "Un líder tomó una decisión que era necesaria, defendible y correcta. Lo que no se anticipó fue cómo las consecuencias continuarían acumulándose mucho después de la ejecución.",
          introP1: "Un líder con autoridad final había tomado una decisión que era necesaria, defendible y — por cualquier medida sustantiva — correcta. El razonamiento era sólido. Las alternativas habían sido examinadas. La elección se alineaba con valores que podían articularse y defenderse. Era el tipo de decisión que la autoridad existe para tomar cuando los caminos más fáciles comprometerían lo que importa.",
          introP2: "La decisión se tomó sabiendo que conllevaría costos: relaciones tensas, apoyo retirado, interpretaciones que no serían caritativas. Estas consecuencias fueron anticipadas, no como pérdidas aceptables, sino como dimensiones inevitables de la decisión misma. Lo que no se anticipó fue cómo esas consecuencias continuarían acumulándose mucho después de que la decisión hubiera sido ejecutada.",
          introP3: "El entorno cambió de maneras que eran concretas pero difíciles de nombrar. Las reuniones que alguna vez habían sido fluidas se volvieron cautelosas. Los colegas que habían trabajado estrechamente comenzaron a mantener distancia — no abiertamente, no dramáticamente, pero inconfundiblemente. Había cumplimiento donde había habido colaboración. Cortesía donde había habido confianza. La decisión no fue cuestionada directamente, pero tampoco fue comprendida. El líder se encontró trabajando en un espacio que se había vuelto más frío sin volverse hostil, aislado sin ser abandonado.",
          tension: "La Tensión",
          tensionP1: "El desafío no era si la decisión había sido correcta. Lo había sido. El desafío era cómo continuar ejerciendo la autoridad en las consecuencias — en un entorno donde el costo de haber decidido correctamente aún se estaba pagando, y donde la tentación de ajustar ya fuera la decisión o a uno mismo en respuesta a ese costo era constante.",
          tensionP2: "Surgieron dos presiones, ambas aparentemente razonables, ambas corrosivas.",
          tensionP3: "La primera era la presión de endurecerse: interpretar la distancia como traición, la cautela como debilidad, la falta de apoyo inmediato como evidencia de que la integridad es castigada y por lo tanto debería protegerse mediante el repliegue. Dejar de estar abierto a la influencia, dejar de buscar consejo, decidir solo no porque nadie más pueda decidir, sino porque la confianza ha sido retirada como forma de autoprotección.",
          tensionP4: "La segunda era la presión de ablandarse: revisitar la decisión, no porque hubiera surgido nueva información, sino porque el costo relacional se había vuelto incómodo. Señalar flexibilidad, demostrar que la decisión no era definitiva en espíritu aunque no pudiera revertirse en los hechos. Gestionar las consecuencias comunicando — implícita o explícitamente — que tales decisiones no se repetirían, que se había aprendido la acomodación, que la aprobación importaba más de lo que se había reconocido.",
          tensionP5: "Ambos caminos prometían alivio. Ambos corroerían la autoridad de maneras más duraderas que la decisión misma.",
          tensionP6: "No estaba preguntando, \"¿Fue correcta la decisión?\" Estaba preguntando, \"¿Cómo restauro lo que teníamos antes de esto? ¿O ese era el costo — y simplemente tengo que vivir con ello?\"",
          clarification: "El Trabajo de Clarificación",
          clarificationP1: "El trabajo no comenzó reevaluando la decisión. La decisión seguía siendo lo que era: necesaria, costosa y defendible. Lo que requería examen no era si había sido correcto decidir, sino cómo habitar la autoridad que había decidido — sin permitir que las consecuencias de la integridad deformaran las condiciones bajo las cuales la integridad podría ejercerse nuevamente.",
          clarificationP2: "El enfoque se desplazó a separar lo que se estaba experimentando de lo que se estaba demandando:",
          clarificationL1: "¿Qué reacciones en el entorno eran expresiones de desacuerdo genuino que requerían compromiso, y cuáles eran expresiones de incomodidad que se resolverían con el tiempo sin requerir ajuste?",
          clarificationL2: "¿Qué se le estaba pidiendo ahora — y por quién? ¿Era rendición de cuentas (que podía cumplirse), aprobación (que no podía negociarse), o tranquilidad de que el costo había sido notado y se evitaría en el futuro (lo que comprometería la capacidad de decidir nuevamente)?",
          clarificationL3: "¿Dónde se había confundido la responsabilidad por la decisión con la culpa por sus consecuencias — y dónde el peso legítimo de haber decidido se había enredado con la demanda ilegítima de que él cargara la incomodidad de los demás como propia?",
          clarificationP3: "A medida que estas distinciones emergían, un patrón se hacía visible. La presión para ajustar no venía principalmente de demandas externas. Venía de la experiencia interna de aislamiento — y de la suposición de que el aislamiento mismo indicaba algo incorrecto en cómo la autoridad había sido ejercida, en lugar de algo inevitable sobre ejercerla bajo ciertas condiciones.",
          clarificationP4: "El trabajo consistió en restaurar la distinción entre autoridad y aprobación — no como opuestos, sino como órdenes diferentes de relación que no pueden colapsarse sin daño a ambos.",
          outcome: "El Resultado",
          outcomeP1: "Lo que surgió no fue reconciliación, reivindicación ni la recuperación de lo que se había perdido. Lo que surgió fue la capacidad de continuar ejerciendo la autoridad sin requerir que el entorno validara la decisión antes de que pudiera ser sostenida.",
          outcomeP2: "La distancia permaneció. Algunas relaciones no regresaron a lo que habían sido. El costo continuó sintiéndose. Pero ya no dictaba cómo se ejercía la autoridad. El líder podía comprometerse con el desacuerdo sin interpretarlo como traición. Podía mantener la apertura a la influencia sin señalar que la decisión misma era negociable. Podía reconocer el costo sin tratarlo como evidencia de que la integridad había sido un error.",
          outcomeP3: "En los meses siguientes, algo cambió en cómo era percibido — no universalmente, pero sí entre aquellos cuyo juicio él respetaba. La decisión no fue olvidada, pero ya no era el único marco a través del cual se entendía su autoridad. Lo que se hizo visible no fue la decisión misma, sino la capacidad de haberla tomado y de continuar decidiendo después, sin requerir que la justificación dominara cada interacción subsecuente.",
          outcomeP4: "La autoridad no había sido restaurada en el sentido de regresar a cómo era antes. Había sido sostenida en una forma que podía absorber el costo de la integridad sin deformarse en respuesta a él.",
          quote1: "La autoridad no se sostiene evitando el costo. Se sostiene absorbiendo el costo sin deshacer la decisión, defenderla interminablemente o retirarse de la autoridad misma.",
          extSection1Title: "Cuando la Integridad Produce Aislamiento",
          extSection1P1: "Lo que hacía difícil esta situación no era la decisión misma, sino el entorno que creó — y la tentación de responder a ese entorno de maneras que preservarían la comodidad a costa de la autoridad.",
          extSection1P2: "El líder había ejercido el juicio bajo condiciones que lo requerían. La decisión no fue impulsiva, ni reactiva, ni insuficientemente considerada. Se tomó con plena conciencia de lo que costaría, y con el entendimiento de que esos costos eran parte de la decisión, no subproductos desafortunados de ella.",
          extSection1P3: "Sin embargo, saber esto intelectualmente y habitarlo prácticamente son órdenes diferentes de experiencia. Cuando los costos anticipados se materializaron — cuando el apoyo se retiró, cuando las relaciones se enfriaron, cuando el entorno se volvió cauteloso en lugar de colaborativo — la claridad intelectual que había informado la decisión resultó insuficiente para navegar lo que siguió.",
          extSection1P4: "Esta es la dimensión de la toma de decisiones éticas que raramente se discute: no el momento de la elección, sino la habitación sostenida de la autoridad después de que la elección ha sido ejercida de maneras que producen consecuencias duraderas.",
          extSection2Title: "La Deformación de la Autoridad Bajo Presión",
          extSection2P1: "El peligro en este territorio no es la falta de nervio ni la pérdida de convicción. El líder permanecía seguro de que la decisión había sido correcta. El peligro era más sutil: la deformación gradual de la autoridad como respuesta defensiva al aislamiento que la integridad puede producir.",
          extSection2P2: "Esta deformación toma dos formas primarias, cada una aparentemente razonable, cada una corrosiva con el tiempo.",
          extSection2P3: "La primera es el endurecimiento: la interpretación de la distancia como hostilidad, la cautela como deslealtad, la falta de apoyo inmediato como evidencia de que la apertura es debilidad. La autoridad comienza a operar desde una posición de repliegue. La consulta se vuelve performativa en lugar de genuina. La influencia se resiste no porque esté mal razonada, sino porque aceptar influencia se siente como validación de la crítica de que la integridad no debería haberse ejercido como se hizo.",
          extSection2P4: "Este endurecimiento preserva cierta forma de fortaleza, pero es fortaleza que ha colapsado en rigidez. La autoridad se vuelve defensiva, aislada no por circunstancia sino por elección, incapaz de distinguir entre los costos legítimos de haber decidido y la demanda ilegítima de que todos los costos sean interpretados como traiciones que requieren fortificación.",
          extSection2P5: "La segunda es el ablandamiento: la revisión de decisiones no porque haya surgido nueva información, sino porque el costo relacional se ha vuelto insoportable. Esto típicamente no toma la forma de reversión explícita — la decisión, una vez tomada, a menudo no puede deshacerse. Toma la forma de señales: mayor acomodación en otros contextos, comunicaciones públicas o privadas que implícitamente se disculpan por la firmeza que se ejerció, demostraciones de flexibilidad diseñadas para tranquilizar que tales decisiones no se repetirán.",
          extSection2P6: "Este ablandamiento preserva la relación, pero a costa de la autoridad. Comunica que la integridad es negociable cuando el costo se vuelve suficientemente alto — y establece las condiciones bajo las cuales las decisiones futuras serán comprometidas antes de ser tomadas, porque la memoria del aislamiento impedirá elecciones que pudieran reproducirlo.",
          extSection3Title: "El Tercer Camino: Absorción Sin Deformación",
          extSection3P1: "Lo que se requería no era ni endurecimiento ni ablandamiento, sino la capacidad de absorber el costo de la integridad sin permitir que ese costo determinara cómo se ejercería la autoridad en adelante.",
          extSection3P2: "Esto es extraordinariamente difícil porque requiere sostener la tensión sin resolución: reconocer la legitimidad de la incomodidad de otros sin tratar esa incomodidad como evidencia de que la decisión no debería haberse tomado; permanecer abierto a la influencia sin señalar que la decisión misma está sujeta a renegociación; cargar el aislamiento que puede seguir a la integridad sin interpretar ese aislamiento como un problema a resolver mediante ajuste.",
          extSection3P3: "El trabajo consistió en crear las condiciones bajo las cuales este tercer camino se hiciera habitable:",
          extSection3L1: "Clarificar lo que se estaba pidiendo en el entorno actual — y distinguir entre rendición de cuentas (que podía y debía cumplirse), aprobación (que no podía negociarse sin comprometer la capacidad futura de decidir), y tranquilidad de que tales costos se evitarían en el futuro (lo que corrompería el proceso decisional antes de que comenzara).",
          extSection3L2: "Separar el peso legítimo de haber decidido de la demanda ilegítima de cargar las reacciones de otros como si fueran responsabilidad propia.",
          extSection3L3: "Restaurar la distinción entre autoridad y aprobación: reconocer que la autoridad ejercida con integridad a veces producirá distancia, y que esa distancia no es evidencia de fracaso sino una característica estructural de la toma de decisiones bajo ciertas condiciones.",
          extSection4Title: "Una Autoridad Que No Requiere Validación",
          extSection4P1: "Lo que se recuperó no fue comodidad, reconciliación ni las relaciones que habían sido alteradas por la decisión. Lo que se recuperó fue la capacidad de continuar ejerciendo la autoridad sin requerir que el entorno validara la corrección de decisiones pasadas antes de que pudieran tomarse nuevas decisiones.",
          extSection4P2: "Esta es una forma de autoridad que es rara y a menudo malentendida. No es autoridad que opera sin consideración por los demás — permanece responsable, comprometida, abierta a la influencia. Pero es autoridad que no colapsa cuando la influencia se retira, cuando el apoyo se vuelve condicional, o cuando el costo de la integridad produce aislamiento.",
          extSection4P3: "Es autoridad que puede absorber impacto sin endurecerse en defensividad ni ablandarse en apaciguamiento. Es autoridad que distingue entre respeto y aprobación, reconociendo que el primero puede sostenerse incluso cuando la segunda es retenida.",
          extSection4P4: "La prueba más difícil de la integridad no es el momento de la decisión, sino el período que sigue — cuando el costo se hace visible, cuando el apoyo se retira, y cuando la presión para ajustar ya sea la decisión o a uno mismo en respuesta a ese costo es constante.",
          extSection4P5: "La integridad bajo estas condiciones requiere algo más que convicción. Requiere la capacidad de sostener la autoridad en una forma que pueda absorber las consecuencias de haber decidido correctamente, sin permitir que esas consecuencias deformen las condiciones bajo las cuales la integridad puede ejercerse nuevamente.",
          extSection4P6: "Esto no es heroísmo. No es rigidez. Es el mantenimiento de la autoridad en una forma que permanece capaz de juicio — y que permanece digna de la confianza que la autoridad requiere, incluso cuando esa confianza debe sostenerse a través de períodos en que la aprobación es retenida.",
          quote2: "La autoridad no se mide por las decisiones que toma, sino por la forma que mantiene después de que esas decisiones han sido tomadas — especialmente cuando esas decisiones fueron correctas pero costosas.",
          prevLabel: "← Anterior: Cuando las Decisiones Ya No se Asientan",
        },
      },
    },
    contact: {
      hero: {
        title: "Iniciemos una conversación reflexiva",
        subtitle:
          "Si desea explorar cómo puedo apoyarle a usted o a su equipo, estaré encantado de escuchar. Escriba con confianza — cada mensaje se recibe con discreción y se responde personalmente.",
      },
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Su mensaje",
        send: "Enviar Mensaje",
        success: "Gracias — su mensaje ha sido recibido. Responderé pronto.",
        error: "Por favor, complete todos los campos.",
        sending: "Enviando...",
        invalidEmail: "Por favor, introduzca una dirección de correo electrónico válida.",
        sendFailed: "No se ha podido enviar el mensaje. Por favor, inténtelo de nuevo.",
      },
    },
    // Page <title>, meta description and Open Graph text.
    seo: {
      home: {
        title: "Ernesto Tages - Consultoría en Liderazgo Ético",
        description: "Consultoría especializada en liderazgo ético para directivos. Acompañamiento estratégico en la gestión de dilemas complejos, la claridad en la toma de decisiones y la integridad organizacional.",
        keywords: "liderazgo ético, consultoría de liderazgo, toma de decisiones, dominio emocional, asesoramiento a directivos, claridad moral, toma de decisiones éticas",
        ogTitle: "Ernesto Tages - Consultoría en Liderazgo Ético",
        ogDescription: "Consultoría especializada en liderazgo ético para directivos. Acompañamiento estratégico en la gestión de dilemas complejos, la claridad en la toma de decisiones y la integridad organizacional.",
      },
      about: {
        title: "Sobre Ernesto Tages | Mentor en Liderazgo Ético",
        description: "Filósofo y consultor con más de 25 años de experiencia en liderazgo ético. Acompaña a directivos de los sectores público, privado y social para transformar dilemas complejos en decisiones claras y éticas.",
        ogTitle: "Ernesto Tages - Perfil y trayectoria",
        ogDescription: "Experto en gestión emocional y claridad en la toma de decisiones. Autor, conferenciante y mentor de líderes que afrontan dilemas éticos complejos.",
      },
      services: {
        title: "Consultoría y Conferencias en Liderazgo Ético | Ernesto Tages",
        description: "Consultoría individual y programas corporativos en liderazgo ético. Sesiones estratégicas, conferencias y seminarios que integran rigor intelectual, gestión emocional e integridad.",
        ogTitle: "Servicios: Consultoría Individual y Programas Corporativos",
        ogDescription: "Acompañamiento personalizado para directivos y equipos que afrontan dilemas éticos complejos. Claridad en la toma de decisiones y liderazgo consciente.",
      },
      resources: {
        title: "Recursos de Reflexión y Liderazgo Ético | Ernesto Tages",
        description: "Artículos, ensayos y herramientas prácticas sobre liderazgo ético, gestión emocional y claridad en la toma de decisiones. Recursos gratuitos para directivos que desean decidir con integridad.",
        ogTitle: "Recursos gratuitos: artículos y herramientas de liderazgo ético",
        ogDescription: "Biblioteca de contenidos sobre dilemas éticos, gestión de las emociones y toma de decisiones consciente. Para líderes que valoran el rigor y la integridad.",
      },
      contact: {
        title: "Contacto con Ernesto Tages | Consultoría en Liderazgo Ético",
        description: "Póngase en contacto para concertar una sesión de consultoría en liderazgo ético. Acompañamiento personalizado para directivos que afrontan dilemas complejos y buscan claridad en sus decisiones.",
        ogTitle: "Contacto - Concierte una sesión de consultoría",
        ogDescription: "Reserve una conversación para explorar cómo transformar los dilemas de liderazgo en decisiones éticas y estratégicas. Consultoría individual y programas corporativos disponibles.",
      },
    },
    // Card linking to /clarity-matrix (Home, Services, Frameworks & Tools).
    // The name of the framework is not translated.
    clarityMatrixCard: {
      title: "The Clarity Matrix™",
      description:
        "Un marco para la claridad ética bajo presión. Permite abordar decisiones complejas a través de cuatro estados: deriva entrópica, contención moral, dislocación estratégica y claridad ética. Concebido para orientar, no para evaluar.",
      cta: "Explorar el marco",
    },
    notFound: {
      title: "Página no encontrada | Ernesto Tages",
      heading: "Página no encontrada",
      line1: "Lo sentimos, la página que busca no existe.",
      line2: "Es posible que se haya trasladado o eliminado.",
      goHome: "Ir al inicio",
    },
    footer: {
      tagline: "Claridad para las decisiones que importan.",
      // PRIVACY POLICY LINK — placeholder. When the privacy policy page exists,
      // add privacyLink here (en/es/pt) and link it in the footer (Footer.tsx);
      // add the page to routes.ts, sitemap.xml and netlify.toml.
      // privacyLink: "...",
      // The newsletter itself is published in English only.
      newsletter: {
        title: "The Clarity Compass",
        description:
          "Reflexiones meditadas para líderes que buscan claridad, integridad y calma en medio de la complejidad.",
        englishOnly: "El boletín se publica únicamente en inglés.",
        placeholder: "* Correo electrónico",
        // Accessible name of the e-mail field (visually hidden).
        emailLabel: "Correo electrónico",
        button: "Suscribirse",
        submitting: "Suscribiendo...",
        success: "Gracias por suscribirse.",
        error: "No se ha podido completar la suscripción. Por favor, inténtelo de nuevo.",
      },
      rights: "Todos los derechos reservados",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Mim",
      services: "Serviços",
      resources: "Recursos",
      contact: "Contacto",
      close: "Fechar",
      toggleMenu: "Abrir ou fechar o menu",
      notifications: "Notificações",
      skipToContent: "Saltar para o conteúdo",
    },
    home: {
      hero: {
        title:
          "Transformando Dilemas de Liderança em Ação Decisiva e Ética",
        subtitle:
          "Oriento líderes nas exigências éticas e emocionais da responsabilidade, ajudando-os a navegar a complexidade e decidir com clareza, rigor e equilíbrio.",
        cta: "Descubra como posso ajudar",
      },
      strategic: {
        title: "Apoio estratégico para decisões críticas",
        intro1:
          "Em ambientes de alta exigência, a liderança requer não apenas experiência técnica, mas também uma compreensão profunda das emoções que influenciam a tomada de decisões. O meu trabalho centra-se em ajudar líderes dos setores público, privado e social a reduzir o ruído emocional, clarificar prioridades e agir com integridade.",
        intro2:
          "Com uma abordagem que integra ciência, ética e gestão emocional, proporciono espaços para reflexão crítica e orientação estratégica para aqueles que exercem o poder responsavelmente.",
        block1: {
          title: "Reduzindo o ruído emocional",
          description:
            "Ajudo a identificar e gerir emoções que interferem com o julgamento, permitindo decisões mais calmas, precisas e livres de preconceitos.",
        },
        block2: {
          title: "Clareza em dilemas complexos",
          description:
            "Apoio o processo de análise em situações críticas, ajudando a distinguir o essencial do acessório e a encontrar caminhos viáveis com perspetiva estratégica.",
        },
        block3: {
          title: "Alinhamento ético em ambientes de poder",
          description:
            "Auxilio na integração de valores éticos na liderança, garantindo que as decisões reflitam coerência, confiança e legitimidade.",
        },
        cta: "Ver serviços",
      },
    },
    about: {
      hero: {
        title: "Formação Sólida. Abordagem Humana. Compromisso Ético.",
        p1: "Sou Ernesto Tages, consultor, investigador e mentor dedicado a ajudar líderes a tomar decisões com clareza, rigor e equilíbrio.",
        p2: "Nascido na Argentina e radicado em Portugal, trabalho com líderes na Europa e América Latina. O meu percurso académico abrange Administração de Empresas, um Mestrado em Ciência Política e um Doutoramento em Filosofia — uma jornada interdisciplinar moldada pela busca de unir razão e emoção na liderança.",
        p3: "Durante quase três décadas, cultivei uma disciplina diária que integra técnicas orientais e ocidentais de reflexão e auto-observação — uma prática que aprofundou a minha compreensão da natureza humana e das correntes emocionais que moldam as nossas escolhas. Permite-me apoiar líderes não apenas com rigor ético e intelectual, mas também com uma visão humana — unindo clareza analítica com consciência interior.",
        p4: "Acompanhei líderes dos setores público, privado e social em momentos de pressão, incerteza e responsabilidade ética. A minha abordagem é rigorosa mas empática: ouvir com cuidado, clarificar o que realmente importa e encorajar uma ação sábia e oportuna.",
        p5: "No núcleo do meu trabalho está uma convicção: a liderança atinge a sua forma mais elevada quando se fundamenta no pensamento crítico, na honestidade emocional e no serviço.",
        cta: "Saiba mais sobre a minha abordagem",
      },
            approach: {
        title: "Guiando com Clareza.",
        subtitle: "A Arquitetura de Decisões Sábias",
        intro:
          "O que se segue é a filosofia que dá estrutura ao meu trabalho — uma abordagem disciplinada mas humana para ajudar líderes a agir com integridade em meio à complexidade.",
        phase1:
          "A minha jornada começou quando notei um padrão recorrente nos desafios de liderança nos setores privado, público e social. O problema nunca foi inteligência, nem informação; era a interseção sufocante onde a análise racional colide com a pressão emocional — onde os princípios éticos se desfocam sob urgência, e o poder amplifica cada ponto cego.",
        phase2:
          "",
        phase3:
          "Percebi que os líderes não precisam de mais dados. Precisam de clareza. Não a clareza que vem da simplificação, mas o tipo que emerge quando a complexidade é enfrentada com disciplina, honestidade e estrutura.",
        phase4:
          "Dessa percepção, a minha metodologia tomou forma: um processo rigoroso que integra filosofia, ciência emocional e pensamento estratégico — ajudando líderes a ver o que realmente importa, decidir com integridade e agir com confiança.",
        pillarsTitle: "Os Três Pilares da Minha Abordagem",
        pillar1Title: "1. Clareza Emocional",
        pillar1Subtitle: "Compreender a emoção como dados, não como ruído.",
        pillar1Text:
          "As emoções não são obstáculos para boas decisões — são informação. Mas quando não são examinadas, distorcem o julgamento. Ajudo líderes a identificar e gerir as correntes emocionais que obscurecem o seu pensamento, permitindo-lhes recuperar presença calma e precisão analítica.",
        pillar2Title: "2. Rigor Ético",
        pillar2Subtitle: "Transformar integridade em vantagem estratégica.",
        pillar2Text:
          "A ética não é um luxo nem uma restrição — é uma vantagem estratégica. Líderes que agem com coerência inspiram confiança, constroem legitimidade e tomam decisões que perduram. Oriento líderes através da reflexão ética estruturada, ajudando-os a alinhar os seus valores com as suas ações.",
        pillar3Title: "3. Perspetiva Estratégica",
        pillar3Subtitle: "Construir estrutura em meio à complexidade.",
        pillar3Text:
          "A complexidade exige estrutura. Forneço estruturas que ajudam líderes a distinguir o essencial do acessório, ver além da pressão imediata e encontrar caminhos viáveis para a frente. Isto não é sobre soluções rápidas — é sobre construir a capacidade de pensar claramente sob qualquer condição.",
        distinctiveTitle: "Um Espaço Distintivo",
        distinctiveText:
          "O meu trabalho não é terapia, coaching ou consultoria no sentido tradicional. É um contexto para reflexão rigorosa e orientação estratégica — onde líderes fazem uma pausa, pensam e realinham antes de agir.",
        blockquote1: "Porque a qualidade de uma decisão não é determinada pela velocidade, mas pela clareza.",
        blockquote2: "E a clareza não é um dom — é uma disciplina.",
        closingText:
          "Aqui, o rigor e a reflexão encontram forma — renovando a clareza e a energia para a ação decisiva.",
        cta: "Explore os meus programas",
      },
    },
    services: {
      hero: {
        title: "Orientação estratégica para liderança consciente",
        subtitle:
          "Um espaço onde o rigor e a reflexão se traduzem em clareza renovada e energia para a ação decisiva.",
        intro:
          "Quando as decisões têm consequências reais, a clareza torna-se a forma mais valiosa de poder. Trabalho com líderes que querem agir com coerência, serenidade e integridade — transformando a complexidade em lucidez e a reflexão em ação decisiva.",
      },
      explore: "Explorar",
      twoLines: {
        title: "Duas Linhas de Trabalho",
        individual: {
          title: "Consultoria Individual",
          tagline: "Trabalho em profundidade para a tomada de decisões lúcida.",
          description:
            "Para líderes dos setores público, privado e social que enfrentam decisões complexas de alto risco e procuram fortalecer a sua clareza, excelência emocional e alinhamento ético.",
        },
        conferences: {
          title: "Conferências e Seminários Profissionais",
          tagline: "Espaços coletivos para renovação ética e emocional.",
          description:
            "Para fóruns de liderança, universidades, equipas executivas e organizações que procuram aprofundar a sua cultura ética e inteligência emocional.",
        },
        closing:
          "Cada formato abre um espaço para que os líderes façam uma pausa, reflitam e se realinhem — onde o rigor e a reflexão se traduzem em clareza renovada e energia para a ação decisiva.",
      },
      individualDetails: {
        title: "Consultoria Individual",
        objectives: "Objetivos",
        obj1:
          "Clarificar dilemas complexos → fortalecer a lucidez e a confiança",
        obj2:
          "Gerir emoções indesejadas → recuperar a presença calma",
        obj3:
          "Alinhar valores e ações → alcançar decisões coerentes e confiáveis",
        modalities: "Modalidades",
        mod1:
          "Programa de Clareza em Decisões Executivas — parceria de aconselhamento contínuo um a um",
        mod2:
          "Iluminação de Pontos Cegos Éticos — intensivo de meio dia ou dia completo",
        mod3:
          "Auditoria de Decisões Éticas — análise estruturada de decisões recentes",
        mod4:
          "Dia de Estratégia / Sessão de Clareza em Crise — apoio imediato em momentos de pressão",
        outcome: "Resultado Esperado",
        outcomeText:
          "Uma capacidade renovada para ver com clareza, decidir com serenidade e agir com integridade — mesmo quando o contexto resiste à simplicidade.",
        cta: "Solicitar um diálogo exploratório",
      },
      conferencesDetails: {
        title: "Conferências e Seminários Profissionais",
        topics: "Temas sugeridos",
        topic1: "Excelência emocional em contextos de alta responsabilidade",
        topic2: "Ética aplicada no exercício do poder",
        topic3: "A integridade como competência estratégica",
        topic4: "A arte da reflexão sob pressão",
        approach: "Abordagem",
        approachText1:
          "Rigoroso mas dinâmico; intelectualmente exigente mas acessível.",
        approachText2:
          "Cada sessão combina clareza conceptual, experiência vivida e reflexão participativa — concebida para inspirar, provocar e ancorar a mudança.",
        formats: "Formatos",
        format1: "Conferências (presenciais ou virtuais)",
        format2: "Seminários ou retiros personalizados",
        format3: "Sessões informativas privadas para conselhos ou liderança",
        cta: "Solicitar uma proposta para a sua organização",
      },
    },
    resources: {
      hero: {
        title: "Rigor e reflexão para a ação decisiva",
        subtitle:
          "Um espaço onde as ideias e as práticas nutrem a clareza ética na liderança. Aqui encontrará ideias, leituras e ferramentas concebidas para fortalecer a clareza ética — reflexões práticas para líderes que escolhem pensar antes de agir.",
      },
      blocks: {
        insights: {
          title: "Perspetivas e Ensaios",
          description:
            "Reflexões breves onde a ética, a emoção e o poder se encontram na prática da liderança.",
        },
        frameworks: {
          title: "Estruturas e Ferramentas",
          description:
            "Modelos simples que ajudam a que a reflexão se torne ação.",
        },
        talks: {
          title: "Palestras e Conversas",
          description:
            "Gravações e transcrições de conferências, entrevistas e diálogos.",
        },
        caseStudies: {
          title: "Estudos de Caso",
          description:
            "Situações onde a decisão, a autoridade e a integridade são postas à prova sob pressão real.",
        },
      },
      insightsDetails: {
        title: "Perspetivas e Ensaios",
        essay1: {
          title: "A Bússola Interior do Líder Ético",
          description:
            "Por que a integridade começa não nas regras, mas na consciência — e como os líderes podem transformar a incerteza em clareza.",
        },
        essay2: {
          title: "O Custo da Clareza",
          description:
            "Quando cada opção tem um preço, o papel do líder não é evitar a tensão, mas dar-lhe significado.",
        },
        essay3: {
          title: "Mestria Emocional como Vantagem Estratégica",
          description:
            "Como os líderes que entendem a emoção tomam decisões mais aguçadas, justas e humanas.",
        },
        download: "Descarregar PDF",
        // Cards for the white papers. Titles are not translated (titles of works).
        whitePapers: {
          costOfClarity: {
            title: "The Cost of Clarity",
            description:
              "Uma exploração de como a liderança ética exige aceitar custos inevitáveis em vez de os evitar. Este livro branco analisa a prática da clareza custosa e a forma como os líderes podem transformar a tensão em confiança através de decisões coerentes.",
          },
          emotionalExcellence: {
            title: "Emotional Excellence",
            description:
              "Porque é que a coerência entre emoção, pensamento e ação se tornou uma vantagem estratégica para os líderes. Este livro branco analisa a forma como a excelência emocional transforma a eficácia da liderança em contextos organizacionais complexos.",
          },
          iberoamericanEthicalLeadership: {
            title: "El liderazgo ético en Iberoamérica",
            description:
              "Uma exploração aprofundada de como a emoção, a responsabilidade e o poder moldam a liderança ética na Ibero-América. Este livro branco propõe sete movimentos que traçam uma bússola moral para a liderança contemporânea.",
          },
        },
        readMore: "Ler mais",
      },
      frameworksDetails: {
        title: "Estruturas e Ferramentas",
        framework1: {
          title: "A Bússola de Decisões",
          description:
            "Uma estrutura de uma página para navegar escolhas complexas com integridade.",
        },
        framework2: {
          title: "A Auditoria Emocional",
          description:
            "Uma ferramenta estruturada para identificar e gerir emoções que interferem com o julgamento.",
        },
        framework3: {
          title: "A Lista de Verificação Ética",
          description:
            "Um guia prático para garantir que as decisões refletem coerência, confiança e legitimidade.",
        },
        download: "Descarregar PDF",
      },
      talksDetails: {
        title: "Palestras e Conversas",
        talk1: {
          title: "Liderança e Inteligência Emocional",
          description:
            "Uma conversa sobre como os líderes podem integrar a consciência emocional na tomada de decisões estratégicas.",
        },
        talk2: {
          title: "Ética no Exercício do Poder",
          description:
            "Uma conferência que explora as dimensões éticas da liderança em ambientes de alto risco.",
        },
        talk3: {
          title: "A Arte da Reflexão Sob Pressão",
          description:
            "Um diálogo sobre como os líderes podem manter a clareza e a integridade em momentos de crise.",
        },
        watch: "Ver vídeo",
      },
      talksPage: {
        title: "Palestras e Conversas",
        description1:
          "Conversas públicas, conferências e diálogos onde a clareza ética é exercida em tempo real.",
        description2:
          "Esta secção documenta momentos onde a reflexão não é preparada com antecedência, mas testada em condições ao vivo.",
        backToResources: "Voltar a Recursos",
      },
      caseStudiesPage: {
        title: "Estudos de Caso",
        subtitle: "Três situações onde a clareza, o discernimento e a autoridade são postos à prova — e restaurados.",
        breadcrumbHome: "Início",
        breadcrumbResources: "Recursos",
        breadcrumbCaseStudies: "Estudos de Caso",
        readCaseStudy: "Ler estudo de caso",
        backToCaseStudies: "← Voltar a Estudos de Caso",
        hideExtended: "Ocultar reflexão alargada ↑",
        continueExtended: "Continuar com a reflexão alargada →",
        extendedReflection: "Reflexão Alargada",
        caseA: {
          title: "Quando Toda Opção Tem um Custo",
          tagline: "Integridade sob pressão sistémica.",
          summary: "Um executivo sénior enfrenta uma pressão sustentada para aprovar uma decisão que é legalmente defensável e economicamente racional, mas difícil de assumir sem custo interno. A situação é formalmente correta — e profundamente exigente.",
          subtitle: "Decidir sem inocência, mas com integridade.",
          seoDescription: "Um executivo sénior enfrenta pressão crescente para aprovar uma decisão legalmente defensável mas que acarreta custos pessoais e relacionais significativos.",
          tension: "A Tensão",
          tensionP1: "Um executivo sénior numa grande organização enfrentava uma pressão crescente para aprovar uma decisão estratégica que era legalmente defensável e economicamente racional, mas que imporia custos significativos a pessoas com quem trabalhara durante anos — pessoas cuja confiança fora essencial para a sua autoridade. Os membros do conselho enfatizavam a necessidade institucional e a pressão competitiva. No entanto, ele sabia que, uma vez anunciada, a decisão redefiniria a forma como era percebido, tanto pelos afetados como por si mesmo.",
          tensionP2: "Já tomara decisões defensáveis antes — mas estava cada vez mais perturbado pela distância entre o que podia justificar externamente e o que podia sustentar internamente sem erosão. Os caminhos legalmente defensáveis entravam em conflito com compromissos internos. As necessidades estratégicas colidiam com a credibilidade pessoal. O atraso comporia a pressão; a ação convidaria ao escrutínio. Não havia terreno neutro, nenhuma solução que deixasse todos os interesses intactos.",
          tensionP3: "A questão não era se alguém ficaria desapontado — isso era inevitável — mas se a decisão podia ser tomada sem exigir autoengano para a sustentar. O que estava em jogo não era apenas o resultado, mas a forma de autoridade que este líder carregaria depois de a decisão se tornar pública.",
          tensionP4: "À primeira vista, o dilema parecia técnico: mapear riscos, calcular exposição, distribuir responsabilidade entre estruturas organizacionais. No entanto, sob esta superfície procedimental jazia uma tensão mais profunda — uma que era ética e, em última instância, pessoal.",
          tensionP5: "O executivo não estava a perguntar, \"Qual é a decisão certa?\" Estava a perguntar, frequentemente sem o verbalizar, \"Como tomo esta decisão sem me perder a mim mesmo — ou acordar às 3 da manhã sabendo que me tornei alguém que não reconheço?\"",
          tensionP6: "O verdadeiro perigo não era tomar a decisão errada. Era tomar uma decisão defensável que corroía algo essencial internamente enquanto permanecia plausível externamente.",
          clarification: "O Trabalho de Clarificação",
          clarificationP1: "O trabalho não começou avaliando opções. Começou desacelerando a urgência que enquadrava a decisão como puramente estratégica, e resistindo à pressão de otimizar resultados antes de clarificar para que se estava realmente a otimizar.",
          clarificationP2: "O foco deslocou-se para os critérios:",
          clarificationL1: "Que valores estavam genuinamente a guiar a decisão, e quais estavam a ser invocados como justificação depois de as preferências já se terem formado?",
          clarificationL2: "Que custos eram estruturalmente inevitáveis — e quais estavam a ser negados ou deslocados para outros sem reconhecimento?",
          clarificationL3: "Que tipo de responsabilidade estava a ser exercida: reativa (respondendo à pressão), protetora (minimizando a exposição) ou assumptiva (aceitando consequências como parte da decisão)?",
          clarificationP3: "À medida que estas questões eram exploradas, ocorreu uma mudança. O executivo deixou de procurar a opção menos prejudicial e começou a clarificar os termos sob os quais o dano podia ser assumido sem exigir distorção para permanecer habitável.",
          clarificationP4: "Isto não resolveu a tensão. Clarificou o que estava em jogo ao resolvê-la.",
          outcome: "O Resultado",
          outcomeP1: "A decisão que emergiu não protegeu todos os interesses, nem eliminou o conflito. No entanto, restaurou a autoria.",
          outcomeP2: "O executivo escolheu um caminho que envolvia custos visíveis e aceitou que esses custos teriam de ser carregados abertamente, sem mitigação retórica. A decisão tornou-se habitável — não porque fosse confortável, mas porque era coerente.",
          outcomeP3: "Nas semanas seguintes, pôde liderar sem o ruído interno constante da justificação. A decisão continuava difícil de explicar em certos contextos — mas já não lhe exigia distorcer nem os factos nem a si mesmo para a defender. As críticas podiam ser enfrentadas sem necessitar de defensividade para permanecer funcional.",
          outcomeP4: "A pressão não desapareceu. Mas já não prejudicava o juízo. Podia pensar adiante novamente. A autoridade já não era gasta a gerir a contradição interna — tornou-se disponível para o trabalho que realmente a requeria. O discernimento fora restaurado, e com ele a capacidade de decidir novamente sem erosão.",
          quote1: "A integridade não é escolher o melhor resultado. É escolher a decisão cujo custo se está disposto a carregar sem distorção.",
          extSection1Title: "Limpar a Névoa Sem Simplificar a Realidade",
          extSection1P1: "O que tornava esta decisão difícil não era a incerteza, mas a clareza. O que tornava esta situação perigosa não era apenas a complexidade, mas a erosão do discernimento sob pressão sustentada.",
          extSection1P2: "Desde relativamente cedo no processo, o executivo compreendia os contornos da situação. Os factos eram conhecidos. Os cenários haviam sido mapeados. O assessor jurídico fornecera a sua análise; os assessores financeiros haviam modelado as implicações. O que permanecia por resolver não era o que podia acontecer, mas o que significaria agir — e se esse significado podia ser sustentado ao longo do tempo sem exigir autojustificação para permanecer tolerável.",
          extSection1P3: "Esta é uma forma de dificuldade menos discutida: quando a ambiguidade é baixa, mas a responsabilidade é alta, e a decisão não pode ser diferida ao processo nem delegada à especialidade.",
          extSection1P4: "Uma das primeiras ilusões que precisou ser desmantelada foi a esperança de uma solução limpa — uma decisão que pudesse ser defendida integralmente, sem deixar qualquer resíduo ético. Em situações de genuína tensão ética, esta esperança frequentemente apresenta-se como profissionalismo. Os líderes dizem a si mesmos que procuram robustez, objetividade, alinhamento institucional. Na realidade, podem estar a procurar inocência: uma forma de agir sem se sentirem implicados na perda, uma forma de decidir sem ter de carregar o que a decisão custa.",
          extSection1P5: "Mas algumas decisões são irredutivelmente implicantes. Não podem ser tomadas sem custo, e não podem ser tomadas sem resíduo. Reconhecer isto — não como fracasso, mas como a estrutura real da situação — foi um ponto de viragem.",
          extSection1P6: "O executivo não estava a perguntar, \"Qual é a decisão certa?\" Estava a perguntar, \"Quando é que tomar decisões defensáveis começou a parecer uma lenta autotraição?\"",
          extSection1P7: "Era competente, experiente, confiado pelos pares. No entanto, estava cada vez mais incerto se essas qualidades ainda se conectavam a algo que reconhecia como si mesmo — ou se se haviam tornado atuações que mantinha para permanecer funcional.",
          extSection2Title: "Responsabilidade Para Além da Justificação",
          extSection2P1: "Uma dinâmica recorrente no processo de clarificação foi a tensão entre justificação e responsabilidade. Não a justificação num sentido cínico, mas num sentido profundamente humano.",
          extSection2P2: "O executivo regressava repetidamente a questões como:",
          extSection2L1: "\"Isto resistirá ao escrutínio se for questionado?\"",
          extSection2L2: "\"Pode isto ser defendido sem enfraquecer a minha posição?\"",
          extSection2L3: "\"Como explico isto de uma forma que proteja a credibilidade institucional?\"",
          extSection2P3: "Estas são preocupações legítimas. A liderança opera em ambientes onde as decisões devem prestar contas a múltiplas audiências, e onde a vulnerabilidade pode ser explorada.",
          extSection2P4: "No entanto, quando estas preocupações dominam o processo decisional, deslocam subtilmente a responsabilidade para fora. A decisão orienta-se para a defensabilidade em vez da coerência. Torna-se um movimento num jogo estratégico, em vez de um ato que pode ser assumido.",
          extSection2P5: "O trabalho consistiu em recentrar a responsabilidade para dentro — não como alternativa à prestação de contas, mas como o seu fundamento ético:",
          extSection2L4: "Podia a decisão ser explicada sem retórica estratégica?",
          extSection2L5: "Podia ser assumida não apenas no momento do anúncio, mas ao longo do tempo, à medida que as consequências se desenrolavam?",
          extSection2L6: "Podia ser habitada sem ressentimento, sem a necessidade de constantemente rejustificá-la perante si mesmo?",
          extSection2P6: "Não se tratava de pureza moral ou autojustiça. Tratava-se da sustentabilidade do autorrespeito — a condição sob a qual a autoridade permanece exercível sem exigir negação para permanecer funcional.",
          extSection3Title: "O Papel da Perda",
          extSection3P1: "À medida que a clareza aumentava, também aumentava a visibilidade da perda.",
          extSection3P2: "Algo seria danificado: a confiança numa direção, a credibilidade noutra, relações que não poderiam ser preservadas intactas, arranjos institucionais que exigiriam renegociação. O impulso inicial foi minimizar esta perda através da narrativa — apresentá-la como temporária, necessária, estratégica, ou como o custo inevitável de um bem maior.",
          extSection3P3: "O trabalho consistiu em resistir a esse impulso. Não porque a narrativa seja ilegítima, mas porque quando a narrativa precede o reconhecimento, torna-se uma forma de ocultação — dos outros, mas mais importantemente, de si mesmo.",
          extSection3P4: "A questão tornou-se: Que perda pode ser reconhecida sem negação, e que consequências podem ser aceites como estruturalmente ligadas à decisão, em vez de como efeitos secundários infelizes que poderiam ter sido evitados com melhor execução?",
          extSection3P5: "Este reenquadramento não removeu a dor nem a dificuldade da decisão. Removeu a necessidade de autoengano para prosseguir.",
          extSection4Title: "A Decisão como Autocompromisso",
          extSection4P1: "Finalmente, a decisão emergiu não como uma conclusão alcançada através da otimização, mas como um compromisso feito em plena consciência do que implicava.",
          extSection4P2: "Um compromisso de:",
          extSection4L1: "aceitar consequências sem justificação teatral,",
          extSection4L2: "resistir à urgência de moralizar após o facto, apresentando a decisão como heroica ou como evidência de julgamento ético superior,",
          extSection4L3: "permanecer responsável para além do momento da decisão — viver com o que foi escolhido, não apenas anunciá-lo.",
          extSection4P3: "Neste sentido, a decisão foi menos sobre resolver um problema e mais sobre assumir uma posição na paisagem ética que o executivo já habitava, mas que relutara em ocupar explicitamente.",
          extSection4P4: "A clareza ética não promete alívio. Promete orientação.",
          extSection4P5: "Em situações onde toda opção acarreta um custo, a clareza não nos salva da perda. Salva-nos da fragmentação — de tomar decisões que não podemos sustentar sem distorcer a decisão ou a nós mesmos.",
          extSection4P6: "Este trabalho é possível apenas quando há disposição para examinar o que permanece não dito nos processos decisionais — não porque esteja deliberadamente oculto, mas porque os contextos institucionais premiam a velocidade, o consenso e a defensabilidade acima da clarificação sustentada. Poucos ambientes decisionais proporcionam a forma de atenção que isto requer. Menos ainda o tratam como uso legítimo do tempo.",
          quote2: "Uma decisão torna-se ética não quando é inofensiva, mas quando pode ser carregada sem autodivisão.",
          nextLabel: "Seguinte: Quando as Decisões Já Não se Resolvem →",
        },
        caseB: {
          title: "Quando as Decisões Já Não se Resolvem",
          tagline: "Discernimento sob autoridade final.",
          summary: "Uma decisão está claramente identificada e dentro de território familiar. No entanto, não se fecha. Regressa repetidamente, sem nova informação nem desacordo, resistindo à sua conclusão.",
          subtitle: "Discernimento sob autoridade final.",
          seoDescription: "Uma decisão está claramente identificada e bem compreendida, no entanto não se fecha. Regressa repetidamente sem nova informação, sem desacordo, sem qualquer obstáculo óbvio.",
          tension: "A Tensão",
          tensionP1: "O problema estava claramente identificado. Tratava-se de uma decisão estratégica que tinha de ser tomada — complexa, certamente, mas bem dentro do leque de situações que já tinha tratado muitas vezes antes. Os parâmetros eram conhecidos, as implicações cuidadosamente mapeadas, e vários assessores estavam envolvidos, cada um a trabalhar competentemente dentro do seu respetivo domínio. De qualquer perspetiva externa, a situação parecia estar sob controlo.",
          tensionP2: "E no entanto, a decisão não se fechava. Regressava repetidamente, sem nova informação, sem desacordo, sem qualquer obstáculo óbvio. De cada vez que regressava, resistia à sua conclusão. Não porque fosse pouco clara, nem porque a análise fosse insuficiente, mas porque agir sobre ela não resolvia o assunto da forma que normalmente resolveria. Esta persistência não era dramática nem disruptiva, mas era inconfundível — e cada vez mais desconfortável.",
          tensionP3: "Os sinais eram concretos e cumulativos. As decisões eram adiadas sem uma razão clara. Pontos já abordados eram revisitados. As conversas com assessores, que deveriam ter trazido tranquilidade, começaram a gerar irritação. O trabalho em torno da decisão continuava como esperado: cenários refinados, argumentos fortalecidos, incerteza reduzida. Tudo o que normalmente apoia o encerramento estava no lugar, e no entanto nada disso tocava o que realmente estava em jogo.",
          tensionP4: "Da sua perspetiva, o problema permanecia externo. Pertencia à situação em si. Não havia razão para questionar o seu juízo, nem qualquer sensação de que algo estivesse \"errado\". Pelo contrário, a decisão era bem compreendida. Era precisamente isso que tornava a sua persistência tão difícil de tolerar. Apesar da competência mobilizada em torno dela, a situação permanecia estranhamente inacabada.",
          clarification: "O Trabalho de Clarificação",
          clarificationP1: "Procurar ajuda não veio da urgência nem da crise. Não havia expectativa de que alguém fornecesse uma solução. O que procurava era orientação — uma forma de abordar a situação que não empurrasse imediatamente para a conclusão, a justificação ou a otimização.",
          clarificationP2: "Desde o início, o trabalho não se focou na decisão em si. Nada foi adicionado à análise, não foram propostas alternativas, e não foi feita qualquer tentativa de melhorar o que já estava bem construído. A situação foi deixada exatamente como estava. O que mudou não foi o seu conteúdo, mas a relação com ela.",
          clarificationP3: "O primeiro passo consistiu em interromper o impulso automático que se apoderara — a pressão de concluir simplesmente porque tudo parecia pronto. Permitiu-se que a decisão permanecesse aberta, não para a atrasar, mas para compreender por que resistia à resolução apesar de ser tratada corretamente. Esta suspensão criou as condições para que a atenção se deslocasse.",
          clarificationP4: "Ao fazê-lo, começaram a emergir distinções. Elementos que previamente tinham sido tratados como equivalentes separaram-se. O que genuinamente importava diferenciou-se do que meramente exigia atenção. Algumas considerações revelaram-se como inevitáveis; outras como habituais, repetidas mais por inércia do que por necessidade. A situação não se tornou mais simples, mas tornou-se mais precisa.",
          clarificationP5: "O que fora experimentado como fricção já não era algo a ser forçado. Tornou-se informativo. A resistência da própria decisão começou a clarificar o que ainda não fora propriamente assumido.",
          outcome: "O Resultado",
          outcomeP1: "Quando a decisão foi finalmente tomada, foi tomada sem urgência. Nada externo tinha mudado. As restrições eram as mesmas, os custos conhecidos, e os riscos permaneciam. O que tinha mudado era que a decisão já não requeria reforço nem justificação. Podia ser assumida tal como era, sem resíduo.",
          outcomeP2: "Uma vez tomada, assentou. Não porque resolvesse toda a tensão, mas porque já não gerava acumulação interna. O assunto fechou-se de uma forma que permitiu que a atenção avançasse, sem necessidade de ser carregada para a frente.",
          outcomeP3: "Nas semanas seguintes, os efeitos desta mudança tornaram-se visíveis para além da situação inicial. As decisões eram menos, mas mais decisivas. Os assuntos que não requeriam o seu envolvimento eram reconhecidos mais cedo. As conversas com assessores recuperaram o seu lugar apropriado — úteis, mas já não substituindo o juízo.",
          outcomeP4: "Do exterior, nada de dramático tinha ocorrido. Do interior, algo essencial fora restaurado: a capacidade de as decisões concluírem, em vez de se acumularem.",
          quote1: "Uma decisão conclui não quando é justificada, mas quando já não deixa resíduo para trás.",
          extSection1Title: "Quando a Competência Deixa de Orientar a Ação",
          extSection1P1: "O que tornava esta situação difícil não era a sua complexidade, mas a sua persistência. A decisão fora bem enquadrada, tratada com cuidado, apoiada por especialidade e revisitada exaustivamente. Em circunstâncias normais, isto teria sido suficiente. E no entanto, não foi.",
          extSection1P2: "Este padrão tende a aparecer apenas após responsabilidade prolongada. Quando a autoridade é exercida continuamente, as decisões acumulam-se. A maioria assenta. Algumas não. Com o tempo, a incapacidade de uma decisão para concluir começa a importar mais do que a decisão em si, porque sinaliza uma mudança em como a autoridade está a funcionar.",
          extSection1P3: "O que estava a acontecer aqui não era um fracasso de juízo, mas algo mais silencioso e mais corrosivo: a substituição gradual do discernimento pela repetição. As mesmas ferramentas eram aplicadas novamente, as mesmas questões feitas novamente, a mesma tranquilidade procurada novamente — sem efeito. Tudo o que deveria ter funcionado estava a funcionar, apenas não onde importava.",
          extSection1P4: "Só mais tarde se pôde ver o que realmente estivera em jogo. A inquietação não era causada pela decisão em si, mas pelo facto de que decidir já não produzia orientação. A ação já não trazia encerramento. A autoridade continuava a funcionar, mas começara a perder a sua capacidade de concluir.",
          extSection1P5: "O trabalho consistiu em restaurar essa capacidade. Não resolvendo a situação de forma diferente, mas clarificando o que a situação estava realmente a pedir — e o que não estava. Separando o que tinha de ser assumido do que meramente fora repetido. Permitindo que a resistência da decisão fosse compreendida em vez de ultrapassada.",
          extSection1P6: "O que regressou não foi certeza, nem conforto. O que regressou foi lucidez: a capacidade de uma decisão tomar forma, ser assumida e depois libertar a atenção. Isto não pode ser padronizado nem delegado. Requer interrupção, precisão e a disposição para deixar de fazer o que normalmente funciona quando já não funciona.",
          extSection1P7: "Para aqueles que carregam a autoridade final, isto não é um luxo. É a condição para exercer o poder sem erosão.",
          quote2: "A autoridade erode-se não pelo erro, mas pelas decisões que não podem ser plenamente assumidas.",
          prevLabel: "← Anterior: Quando Toda Opção Tem um Custo",
          nextLabel: "Seguinte: Quando a Decisão Certa Custa →",
        },
        caseC: {
          title: "Quando a Decisão Certa Custa",
          tagline: "A autoridade após o custo da integridade.",
          summary: "Um líder com autoridade final toma uma decisão que é necessária, defensável e correta. Os custos são conhecidos. O que se segue não é a reversão, mas o desafio de sustentar a autoridade após o impacto.",
          subtitle: "Sustentando a autoridade depois de a integridade ter sido exercida.",
          seoDescription: "Um líder tomou uma decisão que era necessária, defensável e correta. O que não foi antecipado foi como as consequências continuariam a acumular-se muito depois da execução.",
          introP1: "Um líder com autoridade final tomara uma decisão que era necessária, defensável e — por qualquer medida substantiva — correta. O raciocínio era sólido. As alternativas tinham sido examinadas. A escolha alinhava-se com valores que podiam ser articulados e defendidos. Era o tipo de decisão que a autoridade existe para tomar quando os caminhos mais fáceis comprometeriam o que importa.",
          introP2: "A decisão foi tomada sabendo que acarretaria custos: relações tensas, apoio retirado, interpretações que não seriam caridosas. Estas consequências foram antecipadas, não como perdas aceitáveis, mas como dimensões inevitáveis da própria decisão. O que não foi antecipado foi como essas consequências continuariam a acumular-se muito depois de a decisão ter sido executada.",
          introP3: "O ambiente mudou de formas que eram concretas mas difíceis de nomear. As reuniões que outrora tinham sido fluidas tornaram-se cautelosas. Os colegas que tinham trabalhado de perto começaram a manter distância — não abertamente, não dramaticamente, mas inconfundivelmente. Havia cumprimento onde havia colaboração. Cortesia onde havia confiança. A decisão não foi questionada diretamente, mas também não foi compreendida. O líder encontrou-se a trabalhar num espaço que se tornara mais frio sem se tornar hostil, isolado sem ser abandonado.",
          tension: "A Tensão",
          tensionP1: "O desafio não era se a decisão tinha sido correta. Tinha sido. O desafio era como continuar a exercer a autoridade no rescaldo — num ambiente onde o custo de ter decidido corretamente ainda estava a ser pago, e onde a tentação de ajustar quer a decisão quer a si mesmo em resposta a esse custo era constante.",
          tensionP2: "Surgiram duas pressões, ambas aparentemente razoáveis, ambas corrosivas.",
          tensionP3: "A primeira era a pressão para endurecer: interpretar a distância como traição, a cautela como fraqueza, a falta de apoio imediato como evidência de que a integridade é punida e deveria portanto ser protegida pelo recolhimento. Deixar de estar aberto à influência, deixar de procurar conselho, decidir sozinho não porque ninguém mais possa decidir, mas porque a confiança foi retirada como forma de autoproteção.",
          tensionP4: "A segunda era a pressão para amolecer: revisitar a decisão, não porque nova informação tivesse surgido, mas porque o custo relacional se tornara desconfortável. Sinalizar flexibilidade, demonstrar que a decisão não era final em espírito embora não pudesse ser revertida nos factos. Gerir o rescaldo comunicando — implícita ou explicitamente — que tais decisões não se repetiriam, que a acomodação fora aprendida, que a aprovação importava mais do que fora reconhecido.",
          tensionP5: "Ambos os caminhos prometiam alívio. Ambos corroeriam a autoridade de formas mais duradouras do que a própria decisão.",
          tensionP6: "Não estava a perguntar, \"A decisão foi correta?\" Estava a perguntar, \"Como restauro o que tínhamos antes disto? Ou esse era o custo — e simplesmente tenho de viver com isso?\"",
          clarification: "O Trabalho de Clarificação",
          clarificationP1: "O trabalho não começou por reavaliar a decisão. A decisão permanecia o que era: necessária, custosa e defensável. O que requeria exame não era se tinha sido correto decidir, mas como habitar a autoridade que decidira — sem permitir que as consequências da integridade deformassem as condições sob as quais a integridade poderia ser exercida novamente.",
          clarificationP2: "O foco deslocou-se para separar o que estava a ser experienciado do que estava a ser exigido:",
          clarificationL1: "Que reações no ambiente eram expressões de desacordo genuíno que requeriam envolvimento, e quais eram expressões de desconforto que se resolveriam com o tempo sem requerer ajuste?",
          clarificationL2: "O que lhe estava a ser pedido agora — e por quem? Era prestação de contas (que podia ser cumprida), aprovação (que não podia ser negociada), ou tranquilização de que o custo fora notado e seria evitado no futuro (o que comprometeria a capacidade de decidir novamente)?",
          clarificationL3: "Onde é que a responsabilidade pela decisão se confundira com culpa pelas suas consequências — e onde é que o peso legítimo de ter decidido se enredara com a exigência ilegítima de que ele carregasse o desconforto dos outros como seu?",
          clarificationP3: "À medida que estas distinções emergiam, um padrão tornava-se visível. A pressão para ajustar não vinha principalmente de exigências externas. Vinha da experiência interna de isolamento — e da suposição de que o isolamento em si indicava algo errado com a forma como a autoridade fora exercida, em vez de algo inevitável sobre exercê-la sob certas condições.",
          clarificationP4: "O trabalho consistiu em restaurar a distinção entre autoridade e aprovação — não como opostos, mas como ordens diferentes de relação que não podem ser colapsadas sem dano a ambos.",
          outcome: "O Resultado",
          outcomeP1: "O que emergiu não foi reconciliação, vindicação nem a recuperação do que se perdera. O que emergiu foi a capacidade de continuar a exercer a autoridade sem requerer que o ambiente validasse a decisão antes de ela poder ser sustentada.",
          outcomeP2: "A distância permaneceu. Algumas relações não regressaram ao que tinham sido. O custo continuou a ser sentido. Mas já não ditava como a autoridade era exercida. O líder podia envolver-se com o desacordo sem o interpretar como traição. Podia manter a abertura à influência sem sinalizar que a decisão em si era negociável. Podia reconhecer o custo sem o tratar como evidência de que a integridade fora um erro.",
          outcomeP3: "Nos meses seguintes, algo mudou na forma como era percebido — não universalmente, mas entre aqueles cujo juízo respeitava. A decisão não foi esquecida, mas já não era o único enquadramento através do qual a sua autoridade era compreendida. O que se tornou visível não foi a decisão em si, mas a capacidade de a ter tomado e de continuar a decidir depois, sem requerer que a justificação dominasse cada interação subsequente.",
          outcomeP4: "A autoridade não fora restaurada no sentido de regressar a como era antes. Fora sustentada numa forma que podia absorver o custo da integridade sem se deformar em resposta a ele.",
          quote1: "A autoridade não se sustenta evitando o custo. Sustenta-se absorvendo o custo sem desfazer a decisão, defendê-la interminavelmente ou retirar-se da própria autoridade.",
          extSection1Title: "Quando a Integridade Produz Isolamento",
          extSection1P1: "O que tornava esta situação difícil não era a decisão em si, mas o ambiente que criou — e a tentação de responder a esse ambiente de formas que preservariam o conforto à custa da autoridade.",
          extSection1P2: "O líder exercera o juízo sob condições que o exigiam. A decisão não fora impulsiva, nem reativa, nem insuficientemente considerada. Foi tomada com plena consciência do que custaria, e com o entendimento de que esses custos eram parte da decisão, não subprodutos infelizes dela.",
          extSection1P3: "No entanto, saber isto intelectualmente e habitá-lo praticamente são ordens diferentes de experiência. Quando os custos antecipados se materializaram — quando o apoio se retirou, quando as relações arrefeceram, quando o ambiente se tornou cauteloso em vez de colaborativo — a clareza intelectual que informara a decisão mostrou-se insuficiente para navegar o que se seguiu.",
          extSection1P4: "Esta é a dimensão da tomada de decisões éticas que raramente é discutida: não o momento da escolha, mas a habitação sustentada da autoridade depois de a escolha ter sido exercida de formas que produzem consequências duradouras.",
          extSection2Title: "A Deformação da Autoridade Sob Pressão",
          extSection2P1: "O perigo neste território não é a falta de coragem nem a perda de convicção. O líder permanecia certo de que a decisão fora correta. O perigo era mais subtil: a deformação gradual da autoridade como resposta defensiva ao isolamento que a integridade pode produzir.",
          extSection2P2: "Esta deformação assume duas formas primárias, cada uma aparentemente razoável, cada uma corrosiva com o tempo.",
          extSection2P3: "A primeira é o endurecimento: a interpretação da distância como hostilidade, da cautela como deslealdade, da falta de apoio imediato como evidência de que a abertura é fraqueza. A autoridade começa a operar a partir de uma posição de recolhimento. A consulta torna-se performativa em vez de genuína. A influência é resistida não porque seja mal fundamentada, mas porque aceitar influência se sente como validação da crítica de que a integridade não deveria ter sido exercida como foi.",
          extSection2P4: "Este endurecimento preserva uma certa forma de força, mas é força que colapsou em rigidez. A autoridade torna-se defensiva, isolada não pela circunstância mas pela escolha, incapaz de distinguir entre os custos legítimos de ter decidido e a exigência ilegítima de que todos os custos sejam interpretados como traições que requerem fortificação.",
          extSection2P5: "A segunda é o amolecimento: a revisão de decisões não porque nova informação tenha surgido, mas porque o custo relacional se tornou insuportável. Isto tipicamente não assume a forma de reversão explícita — a decisão, uma vez tomada, frequentemente não pode ser desfeita. Assume a forma de sinais: maior acomodação noutros contextos, comunicações públicas ou privadas que implicitamente pedem desculpa pela firmeza que foi exercida, demonstrações de flexibilidade concebidas para tranquilizar que tais decisões não se repetirão.",
          extSection2P6: "Este amolecimento preserva a relação, mas à custa da autoridade. Comunica que a integridade é negociável quando o custo se torna suficientemente alto — e estabelece as condições sob as quais decisões futuras serão comprometidas antes de serem tomadas, porque a memória do isolamento impedirá escolhas que possam reproduzi-lo.",
          extSection3Title: "O Terceiro Caminho: Absorção Sem Deformação",
          extSection3P1: "O que era necessário não era nem endurecimento nem amolecimento, mas a capacidade de absorver o custo da integridade sem permitir que esse custo determinasse como a autoridade seria exercida no futuro.",
          extSection3P2: "Isto é extraordinariamente difícil porque requer sustentar a tensão sem resolução: reconhecer a legitimidade do desconforto dos outros sem tratar esse desconforto como evidência de que a decisão não deveria ter sido tomada; permanecer aberto à influência sem sinalizar que a decisão em si está sujeita a renegociação; carregar o isolamento que pode seguir-se à integridade sem interpretar esse isolamento como um problema a resolver por ajuste.",
          extSection3P3: "O trabalho consistiu em criar as condições sob as quais este terceiro caminho se tornasse habitável:",
          extSection3L1: "Clarificar o que estava a ser pedido no ambiente atual — e distinguir entre prestação de contas (que podia e devia ser cumprida), aprovação (que não podia ser negociada sem comprometer a capacidade futura de decidir), e tranquilização de que tais custos seriam evitados no futuro (o que corromperia o processo decisional antes de começar).",
          extSection3L2: "Separar o peso legítimo de ter decidido da exigência ilegítima de carregar as reações dos outros como se fossem responsabilidade própria.",
          extSection3L3: "Restaurar a distinção entre autoridade e aprovação: reconhecer que a autoridade exercida com integridade por vezes produzirá distância, e que essa distância não é evidência de fracasso mas uma característica estrutural da tomada de decisões sob certas condições.",
          extSection4Title: "Uma Autoridade Que Não Requer Validação",
          extSection4P1: "O que foi recuperado não foi conforto, reconciliação nem as relações que tinham sido alteradas pela decisão. O que foi recuperado foi a capacidade de continuar a exercer a autoridade sem requerer que o ambiente validasse a correção de decisões passadas antes de novas decisões poderem ser tomadas.",
          extSection4P2: "Esta é uma forma de autoridade que é rara e frequentemente mal compreendida. Não é autoridade que opera sem consideração pelos outros — permanece responsável, comprometida, aberta à influência. Mas é autoridade que não colapsa quando a influência é retirada, quando o apoio se torna condicional, ou quando o custo da integridade produz isolamento.",
          extSection4P3: "É autoridade que pode absorver impacto sem endurecer em defensividade nem amolecer em apaziguamento. É autoridade que distingue entre respeito e aprovação, reconhecendo que o primeiro pode ser sustentado mesmo quando a segunda é retida.",
          extSection4P4: "O teste mais difícil da integridade não é o momento da decisão, mas o período que se segue — quando o custo se torna visível, quando o apoio se retira, e quando a pressão para ajustar quer a decisão quer a si mesmo em resposta a esse custo é constante.",
          extSection4P5: "A integridade nestas condições requer algo mais do que convicção. Requer a capacidade de sustentar a autoridade numa forma que possa absorver as consequências de ter decidido corretamente, sem permitir que essas consequências deformem as condições sob as quais a integridade pode ser exercida novamente.",
          extSection4P6: "Isto não é heroísmo. Não é rigidez. É a manutenção da autoridade numa forma que permanece capaz de juízo — e que permanece digna da confiança que a autoridade requer, mesmo quando essa confiança tem de ser sustentada através de períodos em que a aprovação é retida.",
          quote2: "A autoridade não se mede pelas decisões que toma, mas pela forma que mantém depois de essas decisões terem sido tomadas — especialmente quando essas decisões foram corretas mas custosas.",
          prevLabel: "← Anterior: Quando as Decisões Já Não se Resolvem",
        },
      },
    },
    contact: {
      hero: {
        title: "Vamos iniciar uma conversa reflexiva",
        subtitle:
          "Se deseja explorar como posso apoiar-lhe a si ou à sua equipa, terei todo o gosto em ouvir. Escreva com confiança — cada mensagem é recebida com discrição e respondida pessoalmente.",
      },
      form: {
        name: "Nome Completo",
        email: "Endereço de Email",
        subject: "Assunto",
        message: "A Sua Mensagem",
        send: "Enviar Mensagem",
        success: "Obrigado — a sua mensagem foi recebida. Responderei em breve.",
        error: "Por favor preencha todos os campos.",
        sending: "A enviar...",
        invalidEmail: "Por favor, introduza um endereço de e-mail válido.",
        sendFailed: "Não foi possível enviar a mensagem. Por favor, tente novamente.",
      },
    },
    // Page <title>, meta description and Open Graph text.
    seo: {
      home: {
        title: "Ernesto Tages - Consultoria em Liderança Ética",
        description: "Consultoria especializada em liderança ética para executivos. Acompanhamento estratégico na gestão de dilemas complexos, na clareza decisória e na integridade organizacional.",
        keywords: "liderança ética, consultoria de liderança, tomada de decisão, domínio emocional, aconselhamento executivo, clareza moral, tomada de decisão ética",
        ogTitle: "Ernesto Tages - Consultoria em Liderança Ética",
        ogDescription: "Consultoria especializada em liderança ética para executivos. Acompanhamento estratégico na gestão de dilemas complexos, na clareza decisória e na integridade organizacional.",
      },
      about: {
        title: "Sobre Ernesto Tages | Mentor em Liderança Ética",
        description: "Filósofo e consultor com mais de 25 anos de experiência em liderança ética. Acompanha executivos dos setores público, privado e social na transformação de dilemas complexos em decisões claras e éticas.",
        ogTitle: "Ernesto Tages - Perfil e Percurso",
        ogDescription: "Especialista em gestão emocional e clareza decisória. Autor, orador e mentor de líderes que enfrentam dilemas éticos complexos.",
      },
      services: {
        title: "Consultoria e Conferências em Liderança Ética | Ernesto Tages",
        description: "Consultoria individual e programas corporativos em liderança ética. Sessões estratégicas, conferências e seminários que integram rigor intelectual, gestão emocional e integridade.",
        ogTitle: "Serviços: Consultoria Individual e Programas Corporativos",
        ogDescription: "Acompanhamento personalizado para executivos e equipas que enfrentam dilemas éticos complexos. Clareza decisória e liderança consciente.",
      },
      resources: {
        title: "Recursos de Reflexão e Liderança Ética | Ernesto Tages",
        description: "Artigos, ensaios e ferramentas práticas sobre liderança ética, gestão emocional e clareza decisória. Recursos gratuitos para executivos que procuram decidir com integridade.",
        ogTitle: "Recursos Gratuitos: Artigos e Ferramentas de Liderança Ética",
        ogDescription: "Biblioteca de conteúdos sobre dilemas éticos, gestão das emoções e tomada de decisão consciente. Para líderes que valorizam o rigor e a integridade.",
      },
      contact: {
        title: "Contactar Ernesto Tages | Consultoria em Liderança Ética",
        description: "Entre em contacto para marcar uma sessão de consultoria em liderança ética. Acompanhamento personalizado para executivos que enfrentam dilemas complexos e procuram clareza decisória.",
        ogTitle: "Contacto - Marque uma Sessão de Consultoria",
        ogDescription: "Marque uma conversa para explorar como transformar dilemas de liderança em decisões éticas e estratégicas. Consultoria individual e programas corporativos disponíveis.",
      },
    },
    // Card linking to /clarity-matrix (Home, Services, Frameworks & Tools).
    // The name of the framework is not translated.
    clarityMatrixCard: {
      title: "The Clarity Matrix™",
      description:
        "Um modelo para a clareza ética sob pressão. Permite abordar decisões complexas através de quatro estados: deriva entrópica, contenção moral, deslocação estratégica e clareza ética. Concebido para orientar, não para avaliar.",
      cta: "Explorar o modelo",
    },
    notFound: {
      title: "Página não encontrada | Ernesto Tages",
      heading: "Página Não Encontrada",
      line1: "Lamentamos, mas a página que procura não existe.",
      line2: "Pode ter sido movida ou eliminada.",
      goHome: "Voltar ao início",
    },
    footer: {
      tagline: "Clareza para as decisões que importam.",
      // PRIVACY POLICY LINK — placeholder. When the privacy policy page exists,
      // add privacyLink here (en/es/pt) and link it in the footer (Footer.tsx);
      // add the page to routes.ts, sitemap.xml and netlify.toml.
      // privacyLink: "...",
      // The newsletter itself is published in English only.
      newsletter: {
        title: "The Clarity Compass",
        description:
          "Reflexões ponderadas para líderes que procuram clareza, integridade e calma no meio da complexidade.",
        englishOnly: "A newsletter é publicada apenas em inglês.",
        placeholder: "* E-mail",
        // Accessible name of the e-mail field (visually hidden).
        emailLabel: "Endereço de e-mail",
        button: "Subscrever",
        submitting: "A subscrever...",
        success: "Obrigado pela sua subscrição.",
        error: "Não foi possível concluir a subscrição. Por favor, tente novamente.",
      },
      rights: "Todos os direitos reservados",
    },
  },
};
