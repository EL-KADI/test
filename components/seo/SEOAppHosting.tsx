import Head from "next/head";
import React from "react";

export default function SEOAppHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "استضافة التطبيقات - نمور هوستينج | استضافة مشتركة عالية الأداء",
      description:
        "استضافة التطبيقات مع خطط مشتركة مرنة تناسب جميع الاحتياجات. تخزين NVMe، موارد مضمونة، دعم فني متواصل، وحماية عالية مع شهادات SSL وحماية DDoS.",
      keywords:
        "استضافة التطبيقات, استضافة مشتركة, استضافة مواقع, تخزين NVMe, حماية DDoS, شهادات SSL, نمور هوستينج",
      url: baseUrl + "/ar/apps-hosting",
      locale: "ar",
    },
    en: {
      title: "App Hosting - Nomoar Hosting | High Performance Shared Hosting",
      description:
        "Flexible shared hosting plans for your apps with NVMe storage, guaranteed resources, continuous support, and high security with SSL certificates and DDoS protection.",
      keywords:
        "app hosting, shared hosting, web hosting, NVMe storage, DDoS protection, SSL certificates, Nomoar Hosting",
      url: baseUrl + "/en/apps-hosting",
      locale: "en_US",
    },
    fr: {
      title: "Hébergement d'applications - Nomoar Hosting | Hébergement mutualisé haute performance",
      description:
        "Plans d'hébergement mutualisé flexibles pour vos applications avec stockage NVMe, ressources garanties, support continu, et haute sécurité avec certificats SSL et protection DDoS.",
      keywords:
        "hébergement d'applications, hébergement mutualisé, hébergement web, stockage NVMe, protection DDoS, certificats SSL, Nomoar Hosting",
      url: baseUrl + "/fr/apps-hosting",
      locale: "fr_FR",
    },
    de: {
      title: "App Hosting - Nomoar Hosting | Leistungsstarkes Shared Hosting",
      description:
        "Flexible Shared Hosting-Pläne für Ihre Apps mit NVMe-Speicher, garantierten Ressourcen, durchgehendem Support und hoher Sicherheit mit SSL-Zertifikaten und DDoS-Schutz.",
      keywords:
        "App Hosting, Shared Hosting, Webhosting, NVMe Speicher, DDoS Schutz, SSL Zertifikate, Nomoar Hosting",
      url: baseUrl + "/de/apps-hosting",
      locale: "de_DE",
    },
    tr: {
      title: "Uygulama Barındırma - Nomoar Hosting | Yüksek Performanslı Paylaşımlı Hosting",
      description:
        "NVMe depolama, garantili kaynaklar, sürekli destek ve SSL sertifikaları ile DDoS koruması sağlayan esnek paylaşımlı hosting planları.",
      keywords:
        "uygulama barındırma, paylaşımlı hosting, web hosting, NVMe depolama, DDoS koruması, SSL sertifikaları, Nomoar Hosting",
      url: baseUrl + "/tr/apps-hosting",
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

      {/* meta description & keywords per language */}
      {Object.entries(data).map(([lang, { description, keywords }]) => (
        <React.Fragment key={`meta-${lang}`}>
          <meta name="description" content={description} lang={lang} />
          <meta name="keywords" content={keywords} lang={lang} />
        </React.Fragment>
      ))}

      {/* Open Graph meta tags */}
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

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.ar.title} />
      <meta name="twitter:description" content={data.ar.description} />

      {/* canonical and hreflang */}
      {Object.entries(data).map(([lang, { url }]) => (
        <link key={`hreflang-${lang}`} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="canonical" href={data.ar.url} />

      {/* favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
