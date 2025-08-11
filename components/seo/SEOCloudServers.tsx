import Head from "next/head";
import React from "react";

export default function SEOCloudServers() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الاستضافة السحابية - خوادم سحابية عالية الأداء والثبات | نمور هوستينج",
      description:
        "استمتع بخوادم سحابية موثوقة بأداء عالي وثبات يصل إلى 100% مع مزايا مثل النسخ الاحتياطي، حماية من البرامج الضارة، إدارة مركزية، ودعم أنظمة Windows وLinux.",
      keywords:
        "الاستضافة السحابية, خوادم سحابية, VPS, حماية DDoS, نسخ احتياطي, حماية برامج الفدية, إدارة مركزية, Windows Server, Linux",
      url: baseUrl + "/ar/cloud-servers",
      locale: "ar",
    },
    en: {
      title: "Cloud Hosting - High Performance & Reliable Cloud Servers | Nomoar Hosting",
      description:
        "Enjoy reliable cloud servers with 100% uptime, backup solutions, malware protection, centralized management, and support for Windows & Linux systems.",
      keywords:
        "cloud hosting, cloud servers, VPS, DDoS protection, backup solutions, ransomware protection, centralized management, Windows Server, Linux",
      url: baseUrl + "/en/cloud-servers",
      locale: "en_US",
    },
    fr: {
      title: "Hébergement Cloud - Serveurs Cloud performants et fiables | Nomoar Hosting",
      description:
        "Profitez de serveurs cloud fiables avec une disponibilité de 100%, solutions de sauvegarde, protection contre les logiciels malveillants, gestion centralisée et support Windows & Linux.",
      keywords:
        "hébergement cloud, serveurs cloud, VPS, protection DDoS, solutions de sauvegarde, protection ransomware, gestion centralisée, Windows Server, Linux",
      url: baseUrl + "/fr/cloud-servers",
      locale: "fr_FR",
    },
    de: {
      title: "Cloud Hosting - Hochleistungsfähige und zuverlässige Cloud-Server | Nomoar Hosting",
      description:
        "Profitieren Sie von zuverlässigen Cloud-Servern mit 100% Betriebszeit, Backup-Lösungen, Malware-Schutz, zentraler Verwaltung und Unterstützung für Windows- & Linux-Systeme.",
      keywords:
        "Cloud-Hosting, Cloud-Server, VPS, DDoS-Schutz, Backup-Lösungen, Ransomware-Schutz, zentrale Verwaltung, Windows Server, Linux",
      url: baseUrl + "/de/cloud-servers",
      locale: "de_DE",
    },
    tr: {
      title: "Bulut Barındırma - Yüksek Performanslı ve Güvenilir Bulut Sunucuları | Nomoar Hosting",
      description:
        "%100 çalışma süresi, yedekleme çözümleri, kötü amaçlı yazılım koruması, merkezi yönetim ve Windows & Linux sistem desteği ile güvenilir bulut sunucuların tadını çıkarın.",
      keywords:
        "bulut barındırma, bulut sunucuları, VPS, DDoS koruması, yedekleme çözümleri, fidye yazılım koruması, merkezi yönetim, Windows Server, Linux",
      url: baseUrl + "/tr/cloud-servers",
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
