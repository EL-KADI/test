import Head from "next/head";
import React from "react";

export default function SEOBusinessHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "استضافة الأعمال - نمور هوستينج | استضافة سريعة وآمنة لمواقع الشركات",
      description:
        "استضافة الأعمال من نمور توفر تخزين NVMe عالي الأداء، لوحة تحكم cPanel، حماية قوية، ودعم فني متواصل لضمان استقرار وأمان مواقع الشركات.",
      keywords:
        "استضافة الأعمال, استضافة مواقع الشركات, استضافة سريعة, تخزين NVMe, لوحة تحكم cPanel, نمور هوستينج",
      url: baseUrl + "/ar/business-hosting",
      locale: "ar",
    },
    en: {
      title: "Business Hosting - Nomoar Hosting | Fast & Secure Hosting for Companies",
      description:
        "Nomoar Business Hosting offers high-performance NVMe storage, cPanel control panel, robust security, and continuous support to ensure your company's website stability and safety.",
      keywords:
        "business hosting, company website hosting, fast hosting, NVMe storage, cPanel control panel, Nomoar Hosting",
      url: baseUrl + "/en/business-hosting",
      locale: "en_US",
    },
    fr: {
      title: "Hébergement d'Affaires - Nomoar Hosting | Hébergement rapide et sécurisé pour entreprises",
      description:
        "L'hébergement d'affaires Nomoar offre un stockage NVMe performant, un panneau de contrôle cPanel, une sécurité renforcée et un support continu pour assurer la stabilité et la sécurité de votre site d'entreprise.",
      keywords:
        "hébergement d'affaires, hébergement site entreprise, hébergement rapide, stockage NVMe, panneau cPanel, Nomoar Hosting",
      url: baseUrl + "/fr/business-hosting",
      locale: "fr_FR",
    },
    de: {
      title: "Business Hosting - Nomoar Hosting | Schnelles & sicheres Hosting für Unternehmen",
      description:
        "Nomoar Business Hosting bietet leistungsstarken NVMe-Speicher, cPanel-Control-Panel, robuste Sicherheit und kontinuierlichen Support für Stabilität und Sicherheit Ihrer Unternehmenswebsite.",
      keywords:
        "Business Hosting, Unternehmenswebsite Hosting, schnelles Hosting, NVMe Speicher, cPanel Control Panel, Nomoar Hosting",
      url: baseUrl + "/de/business-hosting",
      locale: "de_DE",
    },
    tr: {
      title: "İşletme Barındırma - Nomoar Hosting | Şirketler için Hızlı ve Güvenli Barındırma",
      description:
        "Nomoar İşletme Barındırma, yüksek performanslı NVMe depolama, cPanel kontrol paneli, güçlü güvenlik ve şirket web sitenizin istikrarı ve güvenliği için sürekli destek sunar.",
      keywords:
        "işletme barındırma, şirket web sitesi barındırma, hızlı barındırma, NVMe depolama, cPanel kontrol paneli, Nomoar Hosting",
      url: baseUrl + "/tr/business-hosting",
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
