import Head from "next/head";
import React from "react";

export default function SEOBrandGuidelines() {
  const baseUrl = "https://doorsoft.co";

  const data = {
    ar: {
      title: "إرشادات البراند - دليل عرض شعار وألوان وهوية نمور",
      description:
        "تعرف على دليل إرشادات البراند لشركة نمور، يشمل عرض الشعار، الألوان، الأكواد، والهوية بشكل واضح ومنظم لضمان الاتساق في جميع التصميمات.",
      keywords:
        "إرشادات البراند, شعار نمور, ألوان نمور, هوية نمور, تصميم, دعم فني, استضافة, VPS, السعودية",
      url: baseUrl + "/ar/brand-guidelines",
      locale: "ar-SA",
    },
    en: {
      title: "Brand Guidelines - Nomoor Logo, Colors & Identity Guide",
      description:
        "Explore Nomoor's brand guidelines including logo usage, colors, codes, and identity for consistent and clear design application across all platforms.",
      keywords:
        "brand guidelines, Nomoor logo, colors, identity, design, support, hosting, VPS, Saudi Arabia",
      url: baseUrl + "/en/brand-guidelines",
      locale: "en-US",
    },
    fr: {
      title: "Directives de Marque - Logo, Couleurs et Identité Nomoor",
      description:
        "Découvrez les directives de marque de Nomoor, incluant l'utilisation du logo, les couleurs, les codes et l'identité pour une application cohérente du design.",
      keywords:
        "directives de marque, logo Nomoor, couleurs, identité, design, support, hébergement, VPS, Arabie Saoudite",
      url: baseUrl + "/fr/brand-guidelines",
      locale: "fr-FR",
    },
    de: {
      title: "Markenrichtlinien - Nomoor Logo, Farben & Identitätsleitfaden",
      description:
        "Entdecken Sie Nomoor's Markenrichtlinien einschließlich Logo-Verwendung, Farben, Codes und Identität für ein konsistentes Design.",
      keywords:
        "Markenrichtlinien, Nomoor Logo, Farben, Identität, Design, Support, Hosting, VPS, Saudi-Arabien",
      url: baseUrl + "/de/brand-guidelines",
      locale: "de-DE",
    },
    tr: {
      title: "Marka Rehberi - Nomoor Logo, Renkler ve Kimlik Kılavuzu",
      description:
        "Nomoor'un logo kullanımı, renkler, kodlar ve kimlik dahil marka rehberini keşfedin, tutarlı tasarım uygulaması için.",
      keywords:
        "marka rehberi, Nomoor logo, renkler, kimlik, tasarım, destek, barındırma, VPS, Suudi Arabistan",
      url: baseUrl + "/tr/brand-guidelines",
      locale: "tr-TR",
    },
  };

  return (
    <Head>
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoor" />

      {Object.entries(data).map(([lang, { description, keywords }]) => (
        <React.Fragment key={`meta-${lang}`}>
          <meta name="description" content={description} lang={lang} />
          <meta name="keywords" content={keywords} lang={lang} />
        </React.Fragment>
      ))}

      {Object.entries(data).map(([lang, { title, description, url, locale }]) => (
        <React.Fragment key={`og-${lang}`}>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:locale" content={locale} />
          <meta property="og:site_name" content="Nomoor" />
        </React.Fragment>
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.ar.title} />
      <meta name="twitter:description" content={data.ar.description} />

      {Object.entries(data).map(([lang, { url }]) => (
        <link key={`hreflang-${lang}`} rel="alternate" hrefLang={lang} href={url} />
      ))}

      <link rel="canonical" href={data.ar.url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
