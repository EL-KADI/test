import Head from "next/head";
import React from "react";

export default function SEODistributorUltra() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title:
        "الموزع الترا - حقق الأرباح ووسع خدماتك مع دعم Kubernetes | نمور هوستينج",
      description:
        "الموزع الترا من نمور يتيح لك بناء مجموعات Kubernetes في دقائق وإدارة تطبيقاتك بكفاءة مع استضافة ثابتة موثوقة وتخزين سحابي قابل للتطوير وأداء بمستوى الشركات.",
      keywords:
        "الموزع الترا, استضافة الموزعين, Kubernetes, استضافة سحابية, تخزين NVMe, دعم Kubernetes, نمور هوستينج, استضافة ويب, cPanel",
      url: baseUrl + "/ar/distributor-ultra",
      locale: "ar",
    },
    en: {
      title:
        "Distributor Ultra - Expand Your Services & Profit with Kubernetes Support | Nomoar Hosting",
      description:
        "Distributor Ultra by Nomoar lets you build Kubernetes clusters in minutes and efficiently manage your apps with reliable static hosting, scalable cloud storage, and enterprise-level performance.",
      keywords:
        "Distributor Ultra, distributors hosting, Kubernetes, cloud hosting, NVMe storage, Kubernetes support, Nomoar hosting, cPanel, web hosting",
      url: baseUrl + "/en/distributor-ultra",
      locale: "en_US",
    },
    fr: {
      title:
        "Distributeur Ultra - Développez vos services avec le support Kubernetes | Nomoar Hosting",
      description:
        "Distributeur Ultra de Nomoar vous permet de créer des clusters Kubernetes en quelques minutes et de gérer efficacement vos applications avec un hébergement statique fiable, un stockage cloud évolutif et des performances de niveau entreprise.",
      keywords:
        "Distributeur Ultra, hébergement distributeurs, Kubernetes, hébergement cloud, stockage NVMe, support Kubernetes, Nomoar Hosting, cPanel",
      url: baseUrl + "/fr/distributor-ultra",
      locale: "fr_FR",
    },
    de: {
      title:
        "Distributor Ultra - Erweitern Sie Ihre Dienste mit Kubernetes-Unterstützung | Nomoar Hosting",
      description:
        "Distributor Ultra von Nomoar ermöglicht es Ihnen, Kubernetes-Cluster in Minuten zu erstellen und Ihre Apps effizient mit zuverlässigem statischem Hosting, skalierbarem Cloud-Speicher und Unternehmensleistung zu verwalten.",
      keywords:
        "Distributor Ultra, Distributoren Hosting, Kubernetes, Cloud Hosting, NVMe Speicher, Kubernetes Support, Nomoar Hosting, cPanel",
      url: baseUrl + "/de/distributor-ultra",
      locale: "de_DE",
    },
    tr: {
      title:
        "Distribütör Ultra - Hizmetlerinizi Kubernetes Desteği ile Genişletin | Nomoar Hosting",
      description:
        "Nomoar Distribütör Ultra, Kubernetes kümelerini dakikalar içinde oluşturmanızı ve güvenilir statik barındırma, ölçeklenebilir bulut depolama ve kurumsal düzey performans ile uygulamalarınızı verimli yönetmenizi sağlar.",
      keywords:
        "Distribütör Ultra, distribütör hosting, Kubernetes, bulut hosting, NVMe depolama, Kubernetes desteği, Nomoar hosting, cPanel",
      url: baseUrl + "/tr/distributor-ultra",
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
