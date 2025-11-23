import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = "", 
  canonical = "", 
  ogImage = "https://bariscanyonel.com/logo.jpg",
  type = "website",
  article = null
}) => {
  const siteUrl = "https://bariscanyonel.com";
  const fullTitle = title ? `${title} | Barış Can Yönel` : "Barış Can Yönel - Full Stack Developer & Web Designer";
  const fullDescription = description || "Barış Can Yönel - Profesyonel web tasarım hizmetleri. İstanbul, Ankara, İzmir, Bursa, Antalya ve tüm Türkiye'de web sitesi tasarımı, e-ticaret sitesi, responsive tasarım, SEO optimizasyonu ve admin paneli hizmetleri.";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : `${siteUrl}/`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Barış Can Yönel" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language Alternates */}
      <link rel="alternate" hreflang="tr" href={`${siteUrl}${canonical || '/'}`} />
      <link rel="alternate" hreflang="en" href={`${siteUrl}/en${canonical || '/'}`} />
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}${canonical || '/'}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Barış Can Yönel" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content="Barış Can Yönel" />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:creator" content="@brsynl" />
    </Helmet>
  );
};

export default SEO;

