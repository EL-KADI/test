import Head from "next/head";
import React from "react";

export default function SEOWindowsHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title:
        "استضافة ويندوز - خدمات استضافة سريعة وسهلة مع دعم Kubernetes | نمور هوستينج",
      description:
        "استضافة ويندوز من نمور تقدم خدمات استضافة سريعة وسهلة مع دعم Kubernetes المُدار بالكامل لبناء وإدارة مجموعات الحاويات بسرعة وأمان.",
      keywords:
        "استضافة ويندوز, استضافة سريعة, Kubernetes, استضافة سحابية, دعم Kubernetes, نمور هوستينج",
      url: baseUrl + "/ar/windows-hosting",
      locale: "ar",
    },
    en: {
      title:
        "Windows Hosting - Fast & Easy Hosting with Kubernetes Support | Nomoar Hosting",
      description:
        "Nomoar Windows Hosting offers fast and easy hosting services with fully managed Kubernetes support to build and manage your container clusters quickly and securely.",
      keywords:
        "Windows hosting, fast hosting, Kubernetes, cloud hosting, Kubernetes support, Nomoar hosting",
      url: baseUrl + "/en/windows-hosting",
      locale: "en_US",
    },
    fr: {
      title:
        "Hébergement Windows - Hébergement rapide et facile avec support Kubernetes | Nomoar Hosting",
      description:
        "Nomoar Hébergement Windows propose des services d'hébergement rapides et faciles avec un support Kubernetes entièrement géré pour construire et gérer rapidement et en toute sécurité vos clusters de conteneurs.",
      keywords:
        "hébergement Windows, hébergement rapide, Kubernetes, hébergement cloud, support Kubernetes, Nomoar Hosting",
      url: baseUrl + "/fr/windows-hosting",
      locale: "fr_FR",
    },
    de: {
      title:
        "Windows Hosting - Schnelles & Einfaches Hosting mit Kubernetes-Unterstützung | Nomoar Hosting",
      description:
        "Nomoar Windows Hosting bietet schnelle und einfache Hosting-Dienste mit vollständig verwaltetem Kubernetes-Support zum schnellen und sicheren Aufbau und zur Verwaltung Ihrer Container-Cluster.",
      keywords:
        "Windows Hosting, schnelles Hosting, Kubernetes, Cloud Hosting, Kubernetes Support, Nomoar Hosting",
      url: baseUrl + "/de/windows-hosting",
      locale: "de_DE",
    },
    tr: {
      title:
        "Windows Hosting - Kubernetes Desteği ile Hızlı ve Kolay Hosting | Nomoar Hosting",
      description:
        "Nomoar Windows Hosting, konteyner kümelerinizi hızlı ve güvenli bir şekilde oluşturup yönetmek için tam yönetilen Kubernetes desteği ile hızlı ve kolay hosting hizmetleri sunar.",
      keywords:
        "Windows hosting, hızlı hosting, Kubernetes, bulut hosting, Kubernetes desteği, Nomoar hosting",
      url: baseUrl + "/tr/windows-hosting",
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
