import Head from "next/head";
import React from "react";

export default function SEODistributorsProgram() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title:
        "برنامج الموزعين - حقق الأرباح ووسع خدماتك مع دعم Kubernetes | نمور هوستينج",
      description:
        "انضم إلى برنامج الموزعين من نمور وحقق أرباحاً كبيرة مع إمكانية بناء مجموعات Kubernetes بسرعة واستضافة ثابتة موثوقة وتخزين سحابي قابل للتطوير وأداء عالي بمستوى الشركات.",
      keywords:
        "برنامج الموزعين, استضافة الموزعين, Kubernetes, استضافة سحابية, تخزين NVMe, دعم Kubernetes, نمور هوستينج, استضافة ويب, cPanel",
      url: baseUrl + "/ar/distributors-program",
      locale: "ar",
    },
    en: {
      title:
        "Distributors Program - Expand Your Profit & Services with Kubernetes Support | Nomoar Hosting",
      description:
        "Join Nomoar’s Distributors Program to maximize your profits with fast Kubernetes cluster building, reliable static hosting, scalable cloud storage, and enterprise-level performance.",
      keywords:
        "Distributors Program, distributors hosting, Kubernetes, cloud hosting, NVMe storage, Kubernetes support, Nomoar hosting, cPanel, web hosting",
      url: baseUrl + "/en/distributors-program",
      locale: "en_US",
    },
    fr: {
      title:
        "Programme Distributeurs - Augmentez vos profits et services avec le support Kubernetes | Nomoar Hosting",
      description:
        "Rejoignez le programme distributeurs de Nomoar pour maximiser vos profits avec la création rapide de clusters Kubernetes, un hébergement statique fiable, un stockage cloud évolutif et des performances de niveau entreprise.",
      keywords:
        "Programme distributeurs, hébergement distributeurs, Kubernetes, hébergement cloud, stockage NVMe, support Kubernetes, Nomoar Hosting, cPanel",
      url: baseUrl + "/fr/distributors-program",
      locale: "fr_FR",
    },
    de: {
      title:
        "Distributoren Programm - Steigern Sie Ihre Gewinne & Dienste mit Kubernetes-Unterstützung | Nomoar Hosting",
      description:
        "Treten Sie dem Nomoar Distributoren Programm bei, um Ihre Gewinne mit schnellem Aufbau von Kubernetes-Clustern, zuverlässigem statischem Hosting, skalierbarem Cloud-Speicher und Unternehmensleistung zu maximieren.",
      keywords:
        "Distributoren Programm, Distributoren Hosting, Kubernetes, Cloud Hosting, NVMe Speicher, Kubernetes Support, Nomoar Hosting, cPanel",
      url: baseUrl + "/de/distributors-program",
      locale: "de_DE",
    },
    tr: {
      title:
        "Distribütör Programı - Kubernetes Desteği ile Kazancınızı ve Hizmetlerinizi Genişletin | Nomoar Hosting",
      description:
        "Nomoar’ın Distribütör Programına katılarak hızlı Kubernetes küme oluşturma, güvenilir statik barındırma, ölçeklenebilir bulut depolama ve kurumsal düzey performans ile kazancınızı artırın.",
      keywords:
        "Distribütör Programı, distribütör hosting, Kubernetes, bulut hosting, NVMe depolama, Kubernetes desteği, Nomoar hosting, cPanel",
      url: baseUrl + "/tr/distributors-program",
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
