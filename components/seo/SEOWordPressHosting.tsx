import Head from "next/head";
import React from "react";

export default function SEOWordPressHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "استضافة ووردبريس - نمور هوستينج | بيئة محسّنة ونشر سريع",
      description:
        "استضافة ووردبريس محسّنة لنمو موقعك مع دعم Kubernetes المدارة بالكامل، منشئ مواقع سهل الاستخدام، وأكثر من 1,000,000 قالب جاهز.",
      keywords:
        "استضافة ووردبريس, Kubernetes, منشئ مواقع, استضافة مواقع, استضافة سحابية, قوالب ووردبريس, نمور هوستينج",
      url: baseUrl + "/ar/wordpress-hosting",
      locale: "ar",
    },
    en: {
      title: "WordPress Hosting - Nomoar Hosting | Optimized Environment & Fast Deployment",
      description:
        "Optimized WordPress hosting for your site's growth with fully managed Kubernetes support, easy site builder, and over 1,000,000 ready-made templates.",
      keywords:
        "WordPress hosting, Kubernetes, site builder, web hosting, cloud hosting, WordPress templates, Nomoar Hosting",
      url: baseUrl + "/en/wordpress-hosting",
      locale: "en_US",
    },
    fr: {
      title:
        "Hébergement WordPress - Nomoar Hosting | Environnement optimisé & déploiement rapide",
      description:
        "Hébergement WordPress optimisé pour la croissance de votre site avec support Kubernetes entièrement géré, constructeur de site facile, et plus de 1 000 000 de modèles prêts à l'emploi.",
      keywords:
        "hébergement WordPress, Kubernetes, constructeur de site, hébergement web, hébergement cloud, modèles WordPress, Nomoar Hosting",
      url: baseUrl + "/fr/wordpress-hosting",
      locale: "fr_FR",
    },
    de: {
      title:
        "WordPress Hosting - Nomoar Hosting | Optimierte Umgebung & schnelle Bereitstellung",
      description:
        "Optimiertes WordPress Hosting für das Wachstum Ihrer Website mit voll verwaltetem Kubernetes Support, einfachem Website-Builder und über 1.000.000 fertigen Vorlagen.",
      keywords:
        "WordPress Hosting, Kubernetes, Website-Builder, Webhosting, Cloud Hosting, WordPress Vorlagen, Nomoar Hosting",
      url: baseUrl + "/de/wordpress-hosting",
      locale: "de_DE",
    },
    tr: {
      title:
        "WordPress Hosting - Nomoar Hosting | Optimize Edilmiş Ortam & Hızlı Dağıtım",
      description:
        "Web sitenizin büyümesi için optimize edilmiş WordPress hosting, tam yönetilen Kubernetes desteği, kolay site oluşturucu ve 1.000.000'dan fazla hazır şablon.",
      keywords:
        "WordPress hosting, Kubernetes, site oluşturucu, web hosting, bulut hosting, WordPress şablonları, Nomoar Hosting",
      url: baseUrl + "/tr/wordpress-hosting",
      locale: "tr_TR",
    },
  };

  return (
    <Head>
      {/* العنوان الافتراضي عربي */}
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoar Hosting" />

      {/* وصف وكلمات مفتاحية لكل لغة */}
      {Object.entries(data).map(([lang, { description, keywords }]) => (
        <React.Fragment key={`meta-${lang}`}>
          <meta name="description" content={description} lang={lang} />
          <meta name="keywords" content={keywords} lang={lang} />
        </React.Fragment>
      ))}

      {/* Open Graph لكل لغة */}
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
