import Head from "next/head";
import React from "react";

export default function SEODataCenters() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "برنامج الموزعين - انضم وابدأ الكسب مع نمور",
      description:
        "انضم إلى برنامج الموزعين لدينا وابدأ في كسب العمولات مع حلول استضافة متقدمة تناسب حجم عملك.",
      keywords:
        "برنامج الموزعين, استضافة, موزعين, عمولات, استضافة مواقع, نمور, السعودية",
      url: baseUrl + "/ar/resellers",
      locale: "ar-SA",
    },
    en: {
      title: "Reseller Program - Join and Start Earning with Nomoor",
      description:
        "Join our reseller program and start earning commissions with advanced hosting solutions tailored to your business scale.",
      keywords:
        "reseller program, hosting, resellers, commissions, web hosting, Nomoor, Saudi Arabia",
      url: baseUrl + "/en/resellers",
      locale: "en-US",
    },
    fr: {
      title: "Programme de revendeurs - Rejoignez et commencez à gagner avec Nomoor",
      description:
        "Rejoignez notre programme de revendeurs et commencez à gagner des commissions avec des solutions d'hébergement avancées adaptées à votre entreprise.",
      keywords:
        "programme de revendeurs, hébergement, revendeurs, commissions, hébergement web, Nomoor, Arabie Saoudite",
      url: baseUrl + "/fr/resellers",
      locale: "fr-FR",
    },
    de: {
      title: "Reseller-Programm - Treten Sie bei und verdienen Sie mit Nomoor",
      description:
        "Treten Sie unserem Reseller-Programm bei und verdienen Sie Provisionen mit fortschrittlichen Hosting-Lösungen, die auf Ihr Geschäft zugeschnitten sind.",
      keywords:
        "reseller-programm, hosting, reseller, provisionen, webhosting, nomoor, saudi-arabien",
      url: baseUrl + "/de/resellers",
      locale: "de-DE",
    },
    tr: {
      title: "Bayilik Programı - Nomoor ile Kazanmaya Başlayın",
      description:
        "Bayilik programımıza katılın ve iş ölçeğinize uygun gelişmiş hosting çözümleri ile komisyon kazanmaya başlayın.",
      keywords:
        "bayilik programı, hosting, bayiler, komisyonlar, web hosting, nomoor, Suudi Arabistan",
      url: baseUrl + "/tr/resellers",
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
