/**
 * Text of the Privacy Policy (/privacy) and Legal Information (/legal)
 * pages, per language. The Portuguese text is the approved source; English
 * and Spanish are faithful translations of it.
 *
 * Inline links use the [text](url) syntax (see LegalPage.tsx).
 */
import type { Locale } from "@/routes";

export type LegalBlock =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  /** Consecutive lines with no gap (address blocks); the first is emphasised. */
  | { lines: string[] }
  | { table: { head: string[]; rows: string[][] } };

export interface LegalPageContent {
  seoTitle: string;
  description: string;
  title: string;
  /** Shown under the title (e.g. last update date). */
  subtitle?: string;
  blocks: LegalBlock[];
}

const EMAIL = "[info@ernestotages.com](mailto:info@ernestotages.com)";

export const privacyContent: Record<Locale, LegalPageContent> = {
  pt: {
    seoTitle: "Política de Privacidade | Ernesto Tages",
    description:
      "Como a Golden Reflections Unipessoal, Lda. recolhe, utiliza e protege os dados pessoais em ernestotages.com e como exercer os seus direitos ao abrigo do RGPD.",
    title: "Política de Privacidade",
    subtitle: "Última atualização: 22 de novembro de 2026",
    blocks: [
      { h2: "1. Responsável pelo tratamento" },
      {
        p: `O responsável pelo tratamento dos dados pessoais recolhidos através de ernestotages.com é a Golden Reflections Unipessoal, Lda., NIPC 508879388, com sede na Av. Fernão de Magalhães, 1131, 4350-169 Porto, Portugal. Para qualquer assunto relacionado com dados pessoais, pode contactar-nos através de ${EMAIL}.`,
      },
      { h2: "2. Que dados recolhemos e para quê" },
      {
        table: {
          head: ["Situação", "Dados", "Finalidade", "Fundamento legal (RGPD)"],
          rows: [
            [
              "Formulário de contacto",
              "Nome, endereço de e-mail, assunto e mensagem",
              "Responder ao seu pedido e, se for o caso, preparar uma proposta de serviços",
              "Diligências pré-contratuais a seu pedido e interesse legítimo em responder a quem nos contacta (art. 6.º, n.º 1, al. b) e f))",
            ],
            [
              "Newsletter The Clarity Compass",
              "Endereço de e-mail",
              "Enviar a newsletter",
              "Consentimento (art. 6.º, n.º 1, al. a)), que pode retirar a qualquer momento",
            ],
            [
              "Visita ao site",
              "Dados técnicos registados pelo serviço de alojamento (endereço IP, data e hora, página pedida, navegador)",
              "Funcionamento, segurança e prevenção de abusos",
              "Interesse legítimo (art. 6.º, n.º 1, al. f))",
            ],
          ],
        },
      },
      { p: "Não tomamos decisões automatizadas nem fazemos definição de perfis com base nestes dados." },
      { h2: "3. Durante quanto tempo guardamos os dados" },
      {
        ul: [
          "Mensagens de contacto: até dois anos após o último contacto.",
          "Clientes: durante a relação contratual e, depois dela, pelos prazos que a lei impõe (por exemplo, dez anos para documentos de faturação).",
          "Newsletter: até cancelar a subscrição.",
          "Dados técnicos de visita: pelo período definido pelo serviço de alojamento, normalmente curto.",
        ],
      },
      { h2: "4. Quem trata os dados por nossa conta" },
      { p: "Recorremos a dois prestadores de serviços, que tratam os dados apenas segundo as nossas instruções:" },
      {
        ul: [
          "Brevo (Sendinblue SAS, França): envio das mensagens do formulário de contacto e gestão da newsletter. É uma empresa estabelecida na União Europeia.",
          "Netlify, Inc. (Estados Unidos): alojamento do site. A transferência de dados para os Estados Unidos baseia-se nas garantias previstas no RGPD, nomeadamente o Quadro de Privacidade de Dados UE-EUA e/ou cláusulas contratuais-tipo aprovadas pela Comissão Europeia.",
        ],
      },
      { p: "Não vendemos nem cedemos dados pessoais a terceiros para fins comerciais." },
      { h2: "5. Cookies" },
      {
        p: "Este site não utiliza cookies nem tecnologias de rastreio ou de análise de audiências. Os links para sites externos (por exemplo, LinkedIn) levam a páginas com políticas próprias.",
      },
      { h2: "6. Os seus direitos" },
      {
        p: `Pode, a qualquer momento, pedir o acesso aos seus dados, a sua retificação ou apagamento, a limitação do tratamento, a portabilidade dos dados, ou opor-se ao tratamento. Quando o tratamento se baseia no consentimento, pode retirá-lo sem afetar a licitude do tratamento anterior. Para isso, basta escrever para ${EMAIL}. Pode cancelar a newsletter através do link incluído em cada envio.`,
      },
      {
        p: "Tem também o direito de apresentar reclamação à autoridade de controlo, a Comissão Nacional de Proteção de Dados (CNPD), em [www.cnpd.pt](https://www.cnpd.pt).",
      },
      { h2: "7. Alterações" },
      { p: "Esta política pode ser atualizada. A data da última atualização está indicada no topo." },
    ],
  },
  en: {
    seoTitle: "Privacy Policy | Ernesto Tages",
    description:
      "How Golden Reflections Unipessoal, Lda. collects, uses and protects personal data on ernestotages.com, and how to exercise your rights under the GDPR.",
    title: "Privacy Policy",
    subtitle: "Last updated: 22 November 2026",
    blocks: [
      { h2: "1. Data controller" },
      {
        p: `The controller of the personal data collected through ernestotages.com is Golden Reflections Unipessoal, Lda., NIPC 508879388, with registered office at Av. Fernão de Magalhães, 1131, 4350-169 Porto, Portugal. For any matter relating to personal data, you can contact us at ${EMAIL}.`,
      },
      { h2: "2. What data we collect and why" },
      {
        table: {
          head: ["Situation", "Data", "Purpose", "Legal basis (GDPR)"],
          rows: [
            [
              "Contact form",
              "Name, email address, subject and message",
              "To respond to your request and, where applicable, to prepare a proposal for services",
              "Pre-contractual steps taken at your request and legitimate interest in responding to those who contact us (Art. 6(1)(b) and (f))",
            ],
            [
              "The Clarity Compass newsletter",
              "Email address",
              "To send the newsletter",
              "Consent (Art. 6(1)(a)), which you may withdraw at any time",
            ],
            [
              "Visit to the website",
              "Technical data logged by the hosting service (IP address, date and time, page requested, browser)",
              "Operation, security and prevention of abuse",
              "Legitimate interest (Art. 6(1)(f))",
            ],
          ],
        },
      },
      { p: "We do not make automated decisions or carry out profiling based on this data." },
      { h2: "3. How long we keep the data" },
      {
        ul: [
          "Contact messages: up to two years after the last contact.",
          "Clients: for the duration of the contractual relationship and, after it ends, for the periods required by law (for example, ten years for invoicing documents).",
          "Newsletter: until you unsubscribe.",
          "Technical visit data: for the period set by the hosting service, usually short.",
        ],
      },
      { h2: "4. Who processes the data on our behalf" },
      { p: "We use two service providers, which process the data only in accordance with our instructions:" },
      {
        ul: [
          "Brevo (Sendinblue SAS, France): sending of contact form messages and management of the newsletter. It is a company established in the European Union.",
          "Netlify, Inc. (United States): website hosting. The transfer of data to the United States is based on the safeguards provided for in the GDPR, namely the EU-US Data Privacy Framework and/or standard contractual clauses approved by the European Commission.",
        ],
      },
      { p: "We do not sell or disclose personal data to third parties for commercial purposes." },
      { h2: "5. Cookies" },
      {
        p: "This website does not use cookies or any tracking or audience analytics technologies. Links to external websites (for example, LinkedIn) lead to pages with their own policies.",
      },
      { h2: "6. Your rights" },
      {
        p: `You may, at any time, request access to your data, its rectification or erasure, restriction of processing or data portability, or object to processing. Where processing is based on consent, you may withdraw it without affecting the lawfulness of prior processing. To do so, simply write to ${EMAIL}. You can unsubscribe from the newsletter via the link included in every mailing.`,
      },
      {
        p: "You also have the right to lodge a complaint with the supervisory authority, the Comissão Nacional de Proteção de Dados (CNPD), at [www.cnpd.pt](https://www.cnpd.pt).",
      },
      { h2: "7. Changes" },
      { p: "This policy may be updated. The date of the last update is shown at the top." },
    ],
  },
  es: {
    seoTitle: "Política de Privacidad | Ernesto Tages",
    description:
      "Cómo Golden Reflections Unipessoal, Lda. recoge, utiliza y protege los datos personales en ernestotages.com, y cómo ejercer sus derechos conforme al RGPD.",
    title: "Política de Privacidad",
    subtitle: "Última actualización: 22 de noviembre de 2026",
    blocks: [
      { h2: "1. Responsable del tratamiento" },
      {
        p: `El responsable del tratamiento de los datos personales recogidos a través de ernestotages.com es Golden Reflections Unipessoal, Lda., NIPC 508879388, con domicilio social en Av. Fernão de Magalhães, 1131, 4350-169 Porto, Portugal. Para cualquier asunto relacionado con datos personales, puede ponerse en contacto con nosotros en ${EMAIL}.`,
      },
      { h2: "2. Qué datos recogemos y para qué" },
      {
        table: {
          head: ["Situación", "Datos", "Finalidad", "Base jurídica (RGPD)"],
          rows: [
            [
              "Formulario de contacto",
              "Nombre, dirección de correo electrónico, asunto y mensaje",
              "Responder a su solicitud y, en su caso, preparar una propuesta de servicios",
              "Aplicación de medidas precontractuales a petición suya e interés legítimo en responder a quien se pone en contacto con nosotros (art. 6.1.b) y f))",
            ],
            [
              "Newsletter The Clarity Compass",
              "Dirección de correo electrónico",
              "Enviar la newsletter",
              "Consentimiento (art. 6.1.a)), que puede retirar en cualquier momento",
            ],
            [
              "Visita al sitio web",
              "Datos técnicos registrados por el servicio de alojamiento (dirección IP, fecha y hora, página solicitada, navegador)",
              "Funcionamiento, seguridad y prevención de abusos",
              "Interés legítimo (art. 6.1.f))",
            ],
          ],
        },
      },
      { p: "No tomamos decisiones automatizadas ni elaboramos perfiles a partir de estos datos." },
      { h2: "3. Durante cuánto tiempo conservamos los datos" },
      {
        ul: [
          "Mensajes de contacto: hasta dos años después del último contacto.",
          "Clientes: durante la relación contractual y, una vez finalizada, durante los plazos que exige la ley (por ejemplo, diez años para los documentos de facturación).",
          "Newsletter: hasta que cancele la suscripción.",
          "Datos técnicos de visita: durante el período definido por el servicio de alojamiento, normalmente breve.",
        ],
      },
      { h2: "4. Quién trata los datos por nuestra cuenta" },
      { p: "Recurrimos a dos proveedores de servicios, que tratan los datos únicamente conforme a nuestras instrucciones:" },
      {
        ul: [
          "Brevo (Sendinblue SAS, Francia): envío de los mensajes del formulario de contacto y gestión de la newsletter. Es una empresa establecida en la Unión Europea.",
          "Netlify, Inc. (Estados Unidos): alojamiento del sitio web. La transferencia de datos a los Estados Unidos se basa en las garantías previstas en el RGPD, en particular el Marco de Privacidad de Datos UE-EE. UU. y/o cláusulas contractuales tipo aprobadas por la Comisión Europea.",
        ],
      },
      { p: "No vendemos ni cedemos datos personales a terceros con fines comerciales." },
      { h2: "5. Cookies" },
      {
        p: "Este sitio web no utiliza cookies ni tecnologías de seguimiento o de análisis de audiencias. Los enlaces a sitios externos (por ejemplo, LinkedIn) llevan a páginas con sus propias políticas.",
      },
      { h2: "6. Sus derechos" },
      {
        p: `Puede, en cualquier momento, solicitar el acceso a sus datos, su rectificación o supresión, la limitación del tratamiento, la portabilidad de los datos, u oponerse al tratamiento. Cuando el tratamiento se base en el consentimiento, puede retirarlo sin que ello afecte a la licitud del tratamiento anterior. Para ello, basta con escribir a ${EMAIL}. Puede darse de baja de la newsletter mediante el enlace incluido en cada envío.`,
      },
      {
        p: "Tiene también derecho a presentar una reclamación ante la autoridad de control, la Comissão Nacional de Proteção de Dados (CNPD), en [www.cnpd.pt](https://www.cnpd.pt).",
      },
      { h2: "7. Cambios" },
      { p: "Esta política puede actualizarse. La fecha de la última actualización figura en la parte superior." },
    ],
  },
};

const LIVRO = "[www.livroreclamacoes.pt](https://www.livroreclamacoes.pt)";
const CICAP_NAME = "CICAP – Centro de Informação de Consumo e Arbitragem do Porto";
const CICAP_ADDRESS = "Rua Damião de Góis, 31, Loja 6, 4050-225 Porto";
const CICAP_LINKS =
  "[cicap@cicap.pt](mailto:cicap@cicap.pt) · [www.cicap.pt](https://www.cicap.pt)";
const CONSUMIDOR = "[www.consumidor.gov.pt](https://www.consumidor.gov.pt)";

export const legalContent: Record<Locale, LegalPageContent> = {
  pt: {
    seoTitle: "Informação Legal | Ernesto Tages",
    description:
      "Informação legal de ernestotages.com: identificação da empresa, Livro de Reclamações, resolução alternativa de litígios de consumo e propriedade intelectual.",
    title: "Informação Legal",
    blocks: [
      { h2: "Identificação" },
      { p: "O site ernestotages.com é explorado por:" },
      {
        lines: [
          "Golden Reflections Unipessoal, Lda.",
          "Sede: Av. Fernão de Magalhães, 1131, 4350-169 Porto, Portugal",
          "NIPC e matrícula: 508879388, Conservatória do Registo Comercial do Porto",
          "Capital social: 5.000 €",
          `E-mail: ${EMAIL}`,
        ],
      },
      { h2: "Livro de Reclamações" },
      { p: `Dispõe do Livro de Reclamações Eletrónico em ${LIVRO}.` },
      { h2: "Resolução alternativa de litígios de consumo" },
      {
        p: "Em caso de litígio de consumo, o consumidor pode recorrer à seguinte entidade de resolução alternativa de litígios:",
      },
      {
        lines: [
          CICAP_NAME,
          CICAP_ADDRESS,
          `Telefone: +351 225 508 349 · E-mail: ${CICAP_LINKS}`,
        ],
      },
      { p: `Mais informação no Portal do Consumidor, em ${CONSUMIDOR}.` },
      { h2: "Propriedade intelectual" },
      {
        p: "Os textos, documentos e materiais deste site, incluindo o Clarity Matrix™, são propriedade de Ernesto Tages e da Golden Reflections Unipessoal, Lda. A sua reprodução, total ou parcial, para fins comerciais requer autorização prévia por escrito. A citação com indicação da fonte é bem-vinda.",
      },
    ],
  },
  en: {
    seoTitle: "Legal Information | Ernesto Tages",
    description:
      "Legal information for ernestotages.com: company identification, Livro de Reclamações, alternative consumer dispute resolution and intellectual property.",
    title: "Legal Information",
    blocks: [
      { h2: "Identification" },
      { p: "The website ernestotages.com is operated by:" },
      {
        lines: [
          "Golden Reflections Unipessoal, Lda.",
          "Registered office: Av. Fernão de Magalhães, 1131, 4350-169 Porto, Portugal",
          "NIPC and registration: 508879388, Conservatória do Registo Comercial do Porto",
          "Share capital: 5.000 €",
          `Email: ${EMAIL}`,
        ],
      },
      { h2: "Livro de Reclamações" },
      { p: `The Livro de Reclamações Eletrónico is available at ${LIVRO}.` },
      { h2: "Alternative consumer dispute resolution" },
      {
        p: "In the event of a consumer dispute, the consumer may refer it to the following alternative dispute resolution entity:",
      },
      {
        lines: [
          CICAP_NAME,
          CICAP_ADDRESS,
          `Telephone: +351 225 508 349 · Email: ${CICAP_LINKS}`,
        ],
      },
      { p: `Further information is available on the Portal do Consumidor, at ${CONSUMIDOR}.` },
      { h2: "Intellectual property" },
      {
        p: "The texts, documents and materials on this website, including the Clarity Matrix™, are the property of Ernesto Tages and Golden Reflections Unipessoal, Lda. Their reproduction, in whole or in part, for commercial purposes requires prior written authorisation. Quotation with acknowledgement of the source is welcome.",
      },
    ],
  },
  es: {
    seoTitle: "Información Legal | Ernesto Tages",
    description:
      "Información legal de ernestotages.com: identificación de la empresa, Livro de Reclamações, resolución alternativa de litigios de consumo y propiedad intelectual.",
    title: "Información Legal",
    blocks: [
      { h2: "Identificación" },
      { p: "El sitio web ernestotages.com es explotado por:" },
      {
        lines: [
          "Golden Reflections Unipessoal, Lda.",
          "Domicilio social: Av. Fernão de Magalhães, 1131, 4350-169 Porto, Portugal",
          "NIPC y número de inscripción: 508879388, Conservatória do Registo Comercial do Porto",
          "Capital social: 5.000 €",
          `Correo electrónico: ${EMAIL}`,
        ],
      },
      { h2: "Livro de Reclamações" },
      { p: `Dispone del Livro de Reclamações Eletrónico en ${LIVRO}.` },
      { h2: "Resolución alternativa de litigios de consumo" },
      {
        p: "En caso de litigio de consumo, el consumidor puede recurrir a la siguiente entidad de resolución alternativa de litigios:",
      },
      {
        lines: [
          CICAP_NAME,
          CICAP_ADDRESS,
          `Teléfono: +351 225 508 349 · Correo electrónico: ${CICAP_LINKS}`,
        ],
      },
      { p: `Más información en el Portal do Consumidor, en ${CONSUMIDOR}.` },
      { h2: "Propiedad intelectual" },
      {
        p: "Los textos, documentos y materiales de este sitio web, incluido el Clarity Matrix™, son propiedad de Ernesto Tages y de Golden Reflections Unipessoal, Lda. Su reproducción, total o parcial, con fines comerciales requiere autorización previa por escrito. La cita con indicación de la fuente es bienvenida.",
      },
    ],
  },
};
