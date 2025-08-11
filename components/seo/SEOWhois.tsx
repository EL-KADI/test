import Head from "next/head";
import React from "react";

export default function SEOWhois() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "أداة Whois - استعلام احترافي عن بيانات الدومين | نمور",
      description:
        "أداة Whois للاستعلام عن معلومات تسجيل النطاقات مثل المالك، تاريخ التسجيل، وتاريخ الانتهاء. احصل على معلومات دقيقة وموثوقة بسهولة.",
      keywords:
        "أداة Whois, استعلام دومين, بيانات تسجيل النطاق, معلومات المالك, تاريخ التسجيل, انتهاء النطاق, أدوات النطاق",
      url: baseUrl + "/ar/whois",
      locale: "ar-SA",
    },
    en: {
      title: "Whois Tool - Professional Domain Data Lookup | Nomoor",
      description:
        "Whois tool to lookup domain registration info like owner, registration date, and expiry date. Get accurate and reliable domain data easily.",
      keywords:
        "Whois tool, domain lookup, domain registration data, owner info, registration date, expiry date, domain tools",
      url: baseUrl + "/en/whois",
      locale: "en-US",
    },
    fr: {
      title: "Outil Whois - Recherche professionnelle des données de domaine | Nomoor",
      description:
        "Outil Whois pour consulter les informations d'enregistrement de domaine comme le propriétaire, la date d'enregistrement et la date d'expiration. Obtenez des données fiables facilement.",
      keywords:
        "Outil Whois, recherche domaine, données enregistrement domaine, info propriétaire, date enregistrement, date expiration, outils domaine",
      url: baseUrl + "/fr/whois",
      locale: "fr-FR",
    },
    de: {
      title: "Whois-Tool - Professionelle Domain-Datenabfrage | Nomoor",
      description:
        "Whois-Tool zur Abfrage von Domain-Registrierungsdaten wie Besitzer, Registrierungs- und Ablaufdatum. Erhalten Sie genaue und zuverlässige Domain-Daten einfach.",
      keywords:
        "Whois-Tool, Domain-Abfrage, Domain-Registrierungsdaten, Besitzerinformationen, Registrierungsdatum, Ablaufdatum, Domain-Tools",
      url: baseUrl + "/de/whois",
      locale: "de-DE",
    },
    tr: {
      title: "Whois Aracı - Profesyonel Alan Adı Bilgisi Sorgulama | Nomoor",
      description:
        "Whois aracı ile alan adı kayıt bilgilerini, sahibi, kayıt ve bitiş tarihlerini öğrenin. Doğru ve güvenilir alan adı verilerini kolayca alın.",
      keywords:
        "Whois aracı, alan adı sorgulama, kayıt bilgileri, sahibi bilgisi, kayıt tarihi, bitiş tarihi, alan adı araçları",
      url: baseUrl + "/tr/whois",
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
