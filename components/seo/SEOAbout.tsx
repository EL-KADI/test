import Head from "next/head";
import React from "react";

export default function SEOAbout() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "عن النمور - المزود الرائد لخدمات السحابة في السعودية | نمور",
      description:
        "النمور هو المزود الرائد لخدمات السحابة في المملكة العربية السعودية، يدعم ويحمي البنية التحتية التقنية للمؤسسات من جميع الأحجام بخبرات واسعة.",
      keywords:
        "نمور, خدمات السحابة, السعودية, استضافة, مراكز بيانات, استضافة المواقع, VPS, خوادم مخصصة, أمان المواقع",
      url: baseUrl + "/ar/about",
      locale: "ar-SA",
    },
    en: {
      title: "About Nomoor - Leading Cloud Provider in Saudi Arabia | Nomoor",
      description:
        "Nomoor is the leading cloud services provider in Saudi Arabia, supporting and securing technical infrastructure for organizations of all sizes.",
      keywords:
        "Nomoor, cloud services, Saudi Arabia, hosting, data centers, web hosting, VPS, dedicated servers, website security",
      url: baseUrl + "/en/about",
      locale: "en-US",
    },
    fr: {
      title: "À propos de Nomoor - Fournisseur de cloud leader en Arabie Saoudite | Nomoor",
      description:
        "Nomoor est le fournisseur leader de services cloud en Arabie Saoudite, soutenant et sécurisant l'infrastructure technique des organisations de toutes tailles.",
      keywords:
        "Nomoor, services cloud, Arabie Saoudite, hébergement, centres de données, hébergement web, VPS, serveurs dédiés, sécurité web",
      url: baseUrl + "/fr/about",
      locale: "fr-FR",
    },
    de: {
      title: "Über Nomoor - Führender Cloud-Anbieter in Saudi-Arabien | Nomoor",
      description:
        "Nomoor ist der führende Cloud-Dienstleister in Saudi-Arabien und unterstützt sowie sichert die technische Infrastruktur von Organisationen jeder Größe.",
      keywords:
        "Nomoor, Cloud-Dienste, Saudi-Arabien, Hosting, Rechenzentren, Webhosting, VPS, dedizierte Server, Website-Sicherheit",
      url: baseUrl + "/de/about",
      locale: "de-DE",
    },
    tr: {
      title: "Nomoor Hakkında - Suudi Arabistan'da Lider Bulut Sağlayıcısı | Nomoor",
      description:
        "Nomoor, Suudi Arabistan'da lider bulut hizmetleri sağlayıcısıdır ve her boyuttaki kuruluşun teknik altyapısını destekleyip korur.",
      keywords:
        "Nomoor, bulut hizmetleri, Suudi Arabistan, hosting, veri merkezleri, web hosting, VPS, özel sunucular, web güvenliği",
      url: baseUrl + "/tr/about",
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
