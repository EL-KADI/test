import Head from "next/head";
import React from "react";

export default function SEOSharedHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الاستضافات المشتركة - نمور هوستينج | استضافة سحابية عالية الأداء",
      description:
        "خوادم سحابية عالية الأداء والاستقرار مع مواقع جغرافية متعددة، خطط استضافة مشتركة بميزات متقدمة وحماية شاملة.",
      keywords:
        "استضافة مشتركة, استضافة ويب, خوادم سحابية, حماية DDoS, شهادة SSL, استضافة نمور, VPS",
      url: baseUrl + "/ar/shared-hosting",
      locale: "ar",
    },
    en: {
      title: "Shared Hosting - Nomoar Hosting | High-Performance Cloud Servers",
      description:
        "High-performance and stable cloud servers with multiple geographic locations, shared hosting plans with advanced features and comprehensive protection.",
      keywords:
        "shared hosting, web hosting, cloud servers, DDoS protection, SSL certificate, Nomoar Hosting, VPS",
      url: baseUrl + "/en/shared-hosting",
      locale: "en_US",
    },
    fr: {
      title: "Hébergement Mutualisé - Nomoar Hosting | Serveurs Cloud Performants",
      description:
        "Serveurs cloud performants et stables avec plusieurs emplacements géographiques, plans d'hébergement mutualisé avec fonctionnalités avancées et protection complète.",
      keywords:
        "hébergement mutualisé, hébergement web, serveurs cloud, protection DDoS, certificat SSL, Nomoar Hosting, VPS",
      url: baseUrl + "/fr/shared-hosting",
      locale: "fr_FR",
    },
    de: {
      title:
        "Shared Hosting - Nomoar Hosting | Hochleistungs-Cloud-Server",
      description:
        "Hochleistungsfähige und stabile Cloud-Server mit mehreren geografischen Standorten, Shared-Hosting-Pläne mit erweiterten Funktionen und umfassendem Schutz.",
      keywords:
        "Shared Hosting, Webhosting, Cloud-Server, DDoS-Schutz, SSL-Zertifikat, Nomoar Hosting, VPS",
      url: baseUrl + "/de/shared-hosting",
      locale: "de_DE",
    },
    tr: {
      title:
        "Paylaşımlı Hosting - Nomoar Hosting | Yüksek Performanslı Bulut Sunucuları",
      description:
        "Çoklu coğrafi konumlarda yüksek performanslı ve stabil bulut sunucuları, gelişmiş özellikler ve kapsamlı koruma ile paylaşımlı hosting planları.",
      keywords:
        "paylaşımlı hosting, web hosting, bulut sunucuları, DDoS koruması, SSL sertifikası, Nomoar Hosting, VPS",
      url: baseUrl + "/tr/shared-hosting",
      locale: "tr_TR",
    },
  };

  return (
    <Head>
      {/* العربية عنوان افتراضي */}
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoar Hosting" />

      {/* ميتا داتا وصف وكلمات مفتاحية */}
      {Object.entries(data).map(([lang, { description, keywords }]) => (
        <React.Fragment key={`meta-${lang}`}>
          <meta name="description" content={description} lang={lang} />
          <meta name="keywords" content={keywords} lang={lang} />
        </React.Fragment>
      ))}

      {/* Open Graph لكل لغة */}
      {Object.entries(data).map(([lang, { title, description, url, locale }]) => (
        <React.Fragment key={`og-${lang}`}>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:locale" content={locale} />
          <meta property="og:site_name" content="Nomoar Hosting" />
        </React.Fragment>
      ))}

      {/* Twitter Card (افتراضي عربي) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.ar.title} />
      <meta name="twitter:description" content={data.ar.description} />

      {/* canonical & hreflang links */}
      {Object.entries(data).map(([lang, { url }]) => (
        <link
          key={`canonical-${lang}`}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      <link rel="canonical" href={data.ar.url} />

      {/* favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
