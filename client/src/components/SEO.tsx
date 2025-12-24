import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  lang?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/logo-methodology.png",
  ogType = "website",
  lang = "en",
}: SEOProps) {
  const fullTitle = `${title} | Ernesto Tages`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  
  // Ensure og:image is an absolute URL
  const absoluteOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `https://ernestotages.com${ogImage}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="V8ZhuVZRfPrsT74vQZ4rSpXVKo-KhmKnGJwJqY9CLko" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={absoluteOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={finalOgTitle} />
      <meta property="twitter:description" content={finalOgDescription} />
      <meta property="twitter:image" content={absoluteOgImage} />
    </Helmet>
  );
}
