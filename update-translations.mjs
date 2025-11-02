import { readFileSync, writeFileSync } from 'fs';

const filePath = '/home/ubuntu/ernesto-tages-website/client/src/contexts/LanguageContext.tsx';
let content = readFileSync(filePath, 'utf-8');

// Spanish translations
const esApproach = `      approach: {
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
          "Mi trabajo no es terapia, coaching ni consultoría en el sentido tradicional. Es un espacio para la reflexión rigurosa y la orientación estratégica — donde los líderes hacen una pausa, piensan y se realinean antes de actuar.",
        blockquote1: "Porque la calidad de una decisión no está determinada por la velocidad, sino por la claridad.",
        blockquote2: "Y la claridad no es un don — es una disciplina.",
        closingText:
          "Este es el espacio donde el rigor y la reflexión se traducen en claridad renovada y energía para la acción decisiva.",
        cta: "Explora mis programas",
      },`;

// Portuguese translations
const ptApproach = `      approach: {
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
          "O meu trabalho não é terapia, coaching ou consultoria no sentido tradicional. É um espaço para reflexão rigorosa e orientação estratégica — onde líderes fazem uma pausa, pensam e realinham antes de agir.",
        blockquote1: "Porque a qualidade de uma decisão não é determinada pela velocidade, mas pela clareza.",
        blockquote2: "E a clareza não é um dom — é uma disciplina.",
        closingText:
          "Este é o espaço onde o rigor e a reflexão se traduzem em clareza renovada e energia para a ação decisiva.",
        cta: "Explore os meus programas",
      },`;

// Replace Spanish approach section
const esRegex = /(es: \{[\s\S]*?about: \{[\s\S]*?)approach: \{[\s\S]*?\},(\s+\},\s+services:)/;
content = content.replace(esRegex, `$1${esApproach}$2`);

// Replace Portuguese approach section  
const ptRegex = /(pt: \{[\s\S]*?about: \{[\s\S]*?)approach: \{[\s\S]*?\},(\s+\},\s+services:)/;
content = content.replace(ptRegex, `$1${ptApproach}$2`);

writeFileSync(filePath, content, 'utf-8');
console.log('Translations updated successfully!');
