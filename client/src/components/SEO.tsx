import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { canonicalUrl, SITE_URL, WEBSITE_ID } from "@/lib/structuredData";
import {
  contentLanguage,
  DEFAULT_LOCALE,
  localizedPath,
  OG_LOCALES,
  pageAlternates,
  type Locale,
} from "@/routes";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  /** Language of the page content. Defaults to the language of the URL. */
  lang?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.png",
  ogType = "website",
  lang,
}: SEOProps) {
  const { urlLocale, pagePath } = useLanguage();
  const contentLang = (lang ?? contentLanguage(pagePath, urlLocale)) as Locale;
  const fullTitle = title;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  // Self-referencing: /es/about -> https://ernestotages.com/es/about
  const canonical = canonicalUrl(localizedPath(pagePath, urlLocale));
  // Every language version, for hreflang. Empty for single-language pages.
  const alternates = Object.entries(pageAlternates(pagePath)) as [Locale, string][];
  const xDefault = alternates.find(([l]) => l === DEFAULT_LOCALE)?.[1];
  const ogLocale = OG_LOCALES[contentLang] ?? OG_LOCALES.en;

  // Ensure og:image is an absolute URL
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage}`;

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: fullTitle,
    description,
    inLanguage: contentLang,
    isPartOf: { "@id": WEBSITE_ID },
  };

  return (
    <Helmet>
      <html lang={contentLang} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {alternates.map(([l, path]) => (
        // Lower-case `hreflang` in the generated HTML (Helmet copies prop names).
        <link key={l} rel="alternate" {...{ hreflang: l }} href={canonicalUrl(path)} />
      ))}
      {xDefault && (
        <link rel="alternate" {...{ hreflang: "x-default" }} href={canonicalUrl(xDefault)} />
      )}

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="V8ZhuVZRfPrsT74vQZ4rSpXVKo-KhmKnGJwJqY9CLko" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:locale" content={ogLocale} />
      {alternates
        .filter(([l]) => l !== contentLang)
        .map(([l]) => (
          <meta key={l} property="og:locale:alternate" content={OG_LOCALES[l]} />
        ))}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />

      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
    </Helmet>
  );
}
