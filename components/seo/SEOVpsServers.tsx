import Head from "next/head";
import React from "react";

export default function SEOVpsServers() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الخوادم الافتراضية - استضافة VPS عالية الأداء وموثوقة | نمور هوستينج",
      description:
        "استمتع بقوة وأداء الخوادم الافتراضية VPS مع موارد مخصصة، حماية متقدمة، سرعة عالية، ودعم فني متميز. حلول استضافة VPS تناسب احتياجات أعمالك.",
      keywords:
        "الخوادم الافتراضية, استضافة VPS, استضافة سحابية, خادم افتراضي, NVMe SSD, cPanel, أمان VPS, استضافة موثوقة",
      url: baseUrl + "/ar/vps",
      locale: "ar",
    },
    en: {
      title: "Virtual Servers - High Performance & Reliable VPS Hosting | Nomoar Hosting",
      description:
        "Experience powerful VPS hosting with dedicated resources, advanced security, high speed, and expert support. Flexible VPS solutions tailored to your business needs.",
      keywords:
        "virtual servers, VPS hosting, cloud hosting, dedicated server, NVMe SSD, cPanel, VPS security, reliable hosting",
      url: baseUrl + "/en/vps",
      locale: "en_US",
    },
    fr: {
      title: "Serveurs Virtuels - Hébergement VPS performant et fiable | Nomoar Hosting",
      description:
        "Profitez d’un hébergement VPS puissant avec ressources dédiées, sécurité avancée, haute vitesse, et support expert. Solutions VPS flexibles adaptées à vos besoins.",
      keywords:
        "serveurs virtuels, hébergement VPS, hébergement cloud, serveur dédié, NVMe SSD, cPanel, sécurité VPS, hébergement fiable",
      url: baseUrl + "/fr/vps",
      locale: "fr_FR",
    },
    de: {
      title: "Virtuelle Server - Hochleistungsfähiges und zuverlässiges VPS-Hosting | Nomoar Hosting",
      description:
        "Erleben Sie leistungsstarkes VPS-Hosting mit dedizierten Ressourcen, fortschrittlicher Sicherheit, hoher Geschwindigkeit und Experten-Support. Flexible VPS-Lösungen für Ihre Geschäftsanforderungen.",
      keywords:
        "virtuelle Server, VPS-Hosting, Cloud Hosting, dedizierter Server, NVMe SSD, cPanel, VPS-Sicherheit, zuverlässiges Hosting",
      url: baseUrl + "/de/vps",
      locale: "de_DE",
    },
    tr: {
      title: "Sanal Sunucular - Yüksek Performanslı ve Güvenilir VPS Hosting | Nomoar Hosting",
      description:
        "Özel kaynaklar, gelişmiş güvenlik, yüksek hız ve uzman destek ile güçlü VPS hosting deneyimi yaşayın. İş ihtiyaçlarınıza uygun esnek VPS çözümleri.",
      keywords:
        "sanal sunucular, VPS hosting, bulut hosting, özel sunucu, NVMe SSD, cPanel, VPS güvenliği, güvenilir hosting",
      url: baseUrl + "/tr/vps",
      locale: "tr_TR",
    },
  };

  return (
    <Head>
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoar Hosting" />

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
          <meta property="og:site_name" content="Nomoar Hosting" />
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
