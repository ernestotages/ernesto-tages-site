export const SITE_URL = "https://ernestotages.com";
export const PERSON_ID = `${SITE_URL}/#person`;

export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Ernesto Tages",
  jobTitle: "Philosopher and ethical leadership consultant",
  url: SITE_URL,
  image: `${SITE_URL}/SiteAbout_2486-1040.webp`,
  knowsAbout: [
    "ethical leadership",
    "emotional autonomy",
    "political philosophy",
    "decision-making",
  ],
  sameAs: ["https://www.linkedin.com/in/ernestotages/"],
};

/** Reference to the Person for use as `author` in Article markup. */
export const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Ernesto Tages",
  url: SITE_URL,
};

export const professionalService = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Ernesto Tages",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  areaServed: ["Europe", "Latin America"],
  founder: { "@id": PERSON_ID },
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [person, professionalService],
};

/** Canonical URL for a path: absolute, no trailing slash (root stays "/"). */
export function canonicalUrl(path: string) {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean ? `${SITE_URL}${clean}` : `${SITE_URL}/`;
}
