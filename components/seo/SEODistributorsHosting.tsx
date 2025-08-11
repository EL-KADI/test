import Head from "next/head";
import React from "react";

export default function SEODistributorsHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title:
        "استضافة الموزعين - حقق الأرباح ووسع خدماتك مع دعم Kubernetes | نمور هوستينج",
      description:
        "استضافة الموزعين من نمور تتيح لك بناء مجموعات Kubernetes بسهولة وإدارة تطبيقاتك بكفاءة مع دعم التطبيقات بنقرة واحدة.",
      keywords:
        "استضافة الموزعين, Kubernetes, استضافة سحابية, دعم Kubernetes, نمور هوستينج, استضافة ويب",
      url: baseUrl + "/ar/distributor-basic",
      locale: "ar",
    },
    en: {
      title:
        "Distributors Hosting - Expand Your Services & Profit with Kubernetes Support | Nomoar Hosting",
      description:
        "Nomoar Distributors Hosting lets you build Kubernetes clusters easily and manage your apps efficiently with one-click application support.",
      keywords:
        "distributors hosting, Kubernetes, cloud hosting, Kubernetes support, Nomoar hosting, web hosting",
      url: baseUrl + "/en/distributor-basic",
      locale: "en_US",
    },
    fr: {
      title:
        "Hébergement Distributeurs - Développez vos services avec le support Kubernetes | Nomoar Hosting",
      description:
        "L'hébergement distributeurs de Nomoar vous permet de créer facilement des clusters Kubernetes et de gérer vos applications efficacement avec un support d'application en un clic.",
      keywords:
        "hébergement distributeurs, Kubernetes, hébergement cloud, support Kubernetes, Nomoar Hosting",
      url: baseUrl + "/fr/distributor-basic",
      locale: "fr_FR",
    },
    de: {
      title:
        "Distributoren Hosting - Erweitern Sie Ihre Dienste mit Kubernetes-Unterstützung | Nomoar Hosting",
      description:
        "Nomoar Distributoren Hosting ermöglicht Ihnen das einfache Erstellen von Kubernetes-Clustern und die effiziente Verwaltung Ihrer Apps mit Ein-Klick-Anwendungsunterstützung.",
      keywords:
        "Distributoren Hosting, Kubernetes, Cloud Hosting, Kubernetes Support, Nomoar Hosting",
      url: baseUrl + "/de/distributor-basic",
      locale: "de_DE",
    },
    tr: {
      title:
        "Distribütör Hosting - Hizmetlerinizi Kubernetes Desteği ile Genişletin | Nomoar Hosting",
      description:
        "Nomoar Distribütör Hosting, Kubernetes kümelerini kolayca oluşturmanızı ve uygulamalarınızı tek tıklamayla destekleyerek verimli bir şekilde yönetmenizi sağlar.",
      keywords:
        "distribütör hosting, Kubernetes, bulut hosting, Kubernetes desteği, Nomoar hosting",
      url: baseUrl + "/tr/distributor-basic",
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
