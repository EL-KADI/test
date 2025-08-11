import Head from "next/head";
import React from "react";

export default function SEOCloudHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الاستضافة السحابية - نمور هوستينج | خوادم عالية الأداء بثبات 100%",
      description:
        "استضافة سحابية عالية الأداء مع خوادم مستقرة تصل إلى 100%، خطط VPS مرنة مع مواقع جغرافية متعددة وحماية شاملة.",
      keywords:
        "الاستضافة السحابية, VPS, استضافة سيرفر, خوادم VPS, حماية DDoS, شهادة SSL, نمور هوستينج",
      url: baseUrl + "/ar/cloud-hosting",
      locale: "ar",
    },
    en: {
      title: "Cloud Hosting - Nomoar Hosting | High-Performance Servers with 100% Uptime",
      description:
        "High-performance cloud hosting with stable servers guaranteeing 100% uptime, flexible VPS plans with multiple geographic locations and comprehensive protection.",
      keywords:
        "cloud hosting, VPS, server hosting, VPS servers, DDoS protection, SSL certificate, Nomoar Hosting",
      url: baseUrl + "/en/cloud-hosting",
      locale: "en_US",
    },
    fr: {
      title:
        "Hébergement Cloud - Nomoar Hosting | Serveurs haute performance avec 100% de disponibilité",
      description:
        "Hébergement cloud haute performance avec serveurs stables garantissant 100% de disponibilité, plans VPS flexibles avec plusieurs emplacements géographiques et protection complète.",
      keywords:
        "hébergement cloud, VPS, hébergement serveur, serveurs VPS, protection DDoS, certificat SSL, Nomoar Hosting",
      url: baseUrl + "/fr/cloud-hosting",
      locale: "fr_FR",
    },
    de: {
      title:
        "Cloud Hosting - Nomoar Hosting | Hochleistungsserver mit 100% Verfügbarkeit",
      description:
        "Hochleistungsfähiges Cloud-Hosting mit stabilen Servern und 100% Verfügbarkeitsgarantie, flexible VPS-Pläne mit mehreren geografischen Standorten und umfassendem Schutz.",
      keywords:
        "Cloud-Hosting, VPS, Serverhosting, VPS-Server, DDoS-Schutz, SSL-Zertifikat, Nomoar Hosting",
      url: baseUrl + "/de/cloud-hosting",
      locale: "de_DE",
    },
    tr: {
      title:
        "Bulut Hosting - Nomoar Hosting | %100 Çalışma Süresi ile Yüksek Performanslı Sunucular",
      description:
        "Yüksek performanslı ve stabil bulut hosting, %100 çalışma süresi garantili sunucular, çoklu coğrafi konumlarda esnek VPS planları ve kapsamlı koruma.",
      keywords:
        "bulut hosting, VPS, sunucu hosting, VPS sunucuları, DDoS koruması, SSL sertifikası, Nomoar Hosting",
      url: baseUrl + "/tr/cloud-hosting",
      locale: "tr_TR",
    },
  };

  return (
    <Head>
      {/* عنوان افتراضي عربي */}
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoar Hosting" />

      {/* ميتا داتا وصف وكلمات مفتاحية لكل لغة */}
      {Object.entries(data).map(([lang, { description, keywords }]) => (
        <React.Fragment key={`meta-${lang}`}>
          <meta name="description" content={description} lang={lang} />
          <meta name="keywords" content={keywords} lang={lang} />
        </React.Fragment>
      ))}

      {/* Open Graph */}
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

      {/* canonical & hreflang */}
      {Object.entries(data).map(([lang, { url }]) => (
        <link key={`hreflang-${lang}`} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="canonical" href={data.ar.url} />

      {/* favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
