import Head from "next/head";
import React from "react";

export default function SEODistributorPlus() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title:
        "الموزع بلاس - حقق الأرباح ووسع خدماتك مع دعم Kubernetes | نمور هوستينج",
      description:
        "الموزع بلاس من نمور يتيح لك بناء مجموعات Kubernetes في دقائق وإدارة تطبيقاتك بكفاءة مع دعم التطبيقات بنقرة واحدة، مع استضافة ثابتة موثوقة وتخزين سحابي قابل للتطوير.",
      keywords:
        "الموزع بلاس, استضافة الموزعين, Kubernetes, استضافة سحابية, دعم Kubernetes, نمور هوستينج, استضافة ويب, تخزين NVMe",
      url: baseUrl + "/ar/distributor-plus",
      locale: "ar",
    },
    en: {
      title:
        "Distributor Plus - Expand Your Services & Profit with Kubernetes Support | Nomoar Hosting",
      description:
        "Distributor Plus by Nomoar lets you build Kubernetes clusters in minutes and efficiently manage your apps with one-click application support, reliable static hosting, and scalable cloud storage.",
      keywords:
        "Distributor Plus, distributors hosting, Kubernetes, cloud hosting, Kubernetes support, Nomoar hosting, web hosting, NVMe storage",
      url: baseUrl + "/en/distributor-plus",
      locale: "en_US",
    },
    fr: {
      title:
        "Distributeur Plus - Développez vos services avec le support Kubernetes | Nomoar Hosting",
      description:
        "Distributeur Plus de Nomoar vous permet de créer des clusters Kubernetes en quelques minutes et de gérer efficacement vos applications avec un support d'application en un clic, une hébergement statique fiable et un stockage cloud évolutif.",
      keywords:
        "Distributeur Plus, hébergement distributeurs, Kubernetes, hébergement cloud, support Kubernetes, Nomoar Hosting, stockage NVMe",
      url: baseUrl + "/fr/distributor-plus",
      locale: "fr_FR",
    },
    de: {
      title:
        "Distributor Plus - Erweitern Sie Ihre Dienste mit Kubernetes-Unterstützung | Nomoar Hosting",
      description:
        "Distributor Plus von Nomoar ermöglicht es Ihnen, Kubernetes-Cluster in Minuten zu erstellen und Ihre Apps effizient mit Ein-Klick-Anwendungsunterstützung, zuverlässigem statischem Hosting und skalierbarem Cloud-Speicher zu verwalten.",
      keywords:
        "Distributor Plus, Distributoren Hosting, Kubernetes, Cloud Hosting, Kubernetes Support, Nomoar Hosting, NVMe Speicher",
      url: baseUrl + "/de/distributor-plus",
      locale: "de_DE",
    },
    tr: {
      title:
        "Distribütör Plus - Hizmetlerinizi Kubernetes Desteği ile Genişletin | Nomoar Hosting",
      description:
        "Nomoar Distribütör Plus, Kubernetes kümelerini dakikalar içinde oluşturmanızı ve tek tıklamayla uygulama desteği, güvenilir statik barındırma ve ölçeklenebilir bulut depolama ile uygulamalarınızı verimli yönetmenizi sağlar.",
      keywords:
        "Distribütör Plus, distribütör hosting, Kubernetes, bulut hosting, Kubernetes desteği, Nomoar hosting, NVMe depolama",
      url: baseUrl + "/tr/distributor-plus",
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
