import Head from "next/head";
import React from "react";

export default function SEODevHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "استضافة للمبرمجين - نمور هوستينج | خوادم سحابية عالية الأداء",
      description:
        "استضافة للمبرمجين مع خوادم سحابية قوية، تخزين NVMe، ضمان 99.9٪ uptime، دعم متواصل، وحماية شاملة مع SSL و DDoS.",
      keywords:
        "استضافة للمبرمجين, خوادم سحابية, استضافة VPS, تخزين NVMe, حماية DDoS, شهادة SSL, نمور هوستينج",
      url: baseUrl + "/ar/programers-hosting",
      locale: "ar",
    },
    en: {
      title: "Developer Hosting - Nomoar Hosting | High Performance Cloud Servers",
      description:
        "Powerful cloud hosting for developers with NVMe storage, 99.9% uptime guarantee, continuous support, and comprehensive security including SSL and DDoS protection.",
      keywords:
        "developer hosting, cloud servers, VPS hosting, NVMe storage, DDoS protection, SSL certificates, Nomoar Hosting",
      url: baseUrl + "/en/programers-hosting",
      locale: "en_US",
    },
    fr: {
      title: "Hébergement pour développeurs - Nomoar Hosting | Serveurs cloud haute performance",
      description:
        "Hébergement cloud puissant pour développeurs avec stockage NVMe, garantie de 99,9% de disponibilité, support continu, et sécurité complète avec SSL et protection DDoS.",
      keywords:
        "hébergement développeur, serveurs cloud, hébergement VPS, stockage NVMe, protection DDoS, certificats SSL, Nomoar Hosting",
      url: baseUrl + "/fr/programers-hosting",
      locale: "fr_FR",
    },
    de: {
      title: "Entwickler Hosting - Nomoar Hosting | Leistungsstarke Cloud-Server",
      description:
        "Leistungsstarkes Cloud-Hosting für Entwickler mit NVMe-Speicher, 99,9% Uptime-Garantie, kontinuierlichem Support und umfassender Sicherheit mit SSL und DDoS-Schutz.",
      keywords:
        "Entwickler Hosting, Cloud-Server, VPS Hosting, NVMe Speicher, DDoS Schutz, SSL Zertifikate, Nomoar Hosting",
      url: baseUrl + "/de/programers-hosting",
      locale: "de_DE",
    },
    tr: {
      title: "Geliştirici Barındırma - Nomoar Hosting | Yüksek Performanslı Bulut Sunucuları",
      description:
        "Geliştiriciler için güçlü bulut barındırma; NVMe depolama, %99.9 çalışma garantisi, sürekli destek ve SSL ile DDoS koruması dahil kapsamlı güvenlik.",
      keywords:
        "geliştirici barındırma, bulut sunucuları, VPS barındırma, NVMe depolama, DDoS koruması, SSL sertifikaları, Nomoar Hosting",
      url: baseUrl + "/tr/programers-hosting",
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
