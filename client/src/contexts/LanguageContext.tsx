import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
          title: "Reducing emotional noise",
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
          "My journey began when I noticed a recurring pattern in leadership challenges across the private, public, and social sectors. The problem was never intelligence, nor information.",
        phase2:
          "It was the suffocating intersection where rational analysis collides with emotional pressure — where ethical principles blur under urgency, and power amplifies every blind spot.",
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
      },
    },
    footer: {
      tagline: "Clarity for the decisions that matter.",
      newsletter: {
        title: "Stay Connected",
        description:
          "Receive thoughtful updates — new essays, decision tools, and reflections on ethical leadership.",
        placeholder: "Your email",
        button: "Join the Newsletter",
        success: "Thank you for subscribing!",
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
    },
    home: {
      hero: {
        title:
          "Transformando Dilemas de Liderazgo en Acción Decisiva y Ética",
        subtitle:
          "Guío a líderes en las exigencias éticas y emocionales de la responsabilidad, ayudándoles a navegar la complejidad y decidir con claridad, rigor y equilibrio.",
        cta: "Descubre cómo puedo ayudar",
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
        cta: "Conoce más sobre mi enfoque",
      },
            approach: {
        title: "Guiando con Claridad.",
        subtitle: "La Arquitectura de Decisiones Sabias",
        intro:
          "Lo que sigue es la filosofía que da estructura a mi trabajo — un enfoque disciplinado pero humano para ayudar a los líderes a actuar con integridad en medio de la complejidad.",
        phase1:
          "Mi viaje comenzó cuando noté un patrón recurrente en los desafíos de liderazgo en los sectores privado, público y social. El problema nunca fue la inteligencia, ni la información.",
        phase2:
          "Era la intersección asfixiante donde el análisis racional choca con la presión emocional — donde los principios éticos se desdibujan bajo la urgencia, y el poder amplifica cada punto ciego.",
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
        cta: "Explora mis programas",
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
        cta: "Solicitar una propuesta para tu organización",
      },
    },
    resources: {
      hero: {
        title: "Rigor y reflexión para la acción decisiva",
        subtitle:
          "Un espacio donde las ideas y las prácticas nutren la claridad ética en el liderazgo. Aquí encontrarás ideas, lecturas y herramientas diseñadas para fortalecer la claridad ética — reflexiones prácticas para líderes que eligen pensar antes de actuar.",
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
    },
    contact: {
      hero: {
        title: "Iniciemos una conversación reflexiva",
        subtitle:
          "Si deseas explorar cómo puedo apoyarte a ti o a tu equipo, estaré encantado de escuchar. Escribe con confianza — cada mensaje se recibe con discreción y se responde personalmente.",
      },
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        success: "Gracias — tu mensaje ha sido recibido. Responderé pronto.",
        error: "Por favor completa todos los campos.",
      },
    },
    footer: {
      tagline: "Claridad para las decisiones que importan.",
      newsletter: {
        title: "Mantente Conectado",
        description:
          "Recibe actualizaciones reflexivas — nuevos ensayos, herramientas de decisión y reflexiones sobre liderazgo ético.",
        placeholder: "Tu correo",
        button: "Unirse al Newsletter",
        success: "¡Gracias por suscribirte!",
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
          "A minha jornada começou quando notei um padrão recorrente nos desafios de liderança nos setores privado, público e social. O problema nunca foi inteligência, nem informação.",
        phase2:
          "Era a interseção sufocante onde a análise racional colide com a pressão emocional — onde os princípios éticos se desfocam sob urgência, e o poder amplifica cada ponto cego.",
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
      },
    },
    footer: {
      tagline: "Clareza para as decisões que importam.",
      newsletter: {
        title: "Mantenha-se Conectado",
        description:
          "Receba atualizações reflexivas — novos ensaios, ferramentas de decisão e reflexões sobre liderança ética.",
        placeholder: "O seu email",
        button: "Juntar-se à Newsletter",
        success: "Obrigado por subscrever!",
      },
      rights: "Todos os direitos reservados",
    },
  },
};
