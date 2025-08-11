import Head from "next/head";
import React from "react";

export default function SEOSecurity() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الأمان - خوادم سحابية عالية الأداء مع حماية متقدمة | نمور",
      description:
        "استمتع بخوادم سحابية مستقرة وآمنة مع حماية شاملة من البرامج الضارة، استرداد النسخ الاحتياطي، وأدوات مراقبة متقدمة من نمور. حلولنا تضمن استمرارية وأمان بياناتك.",
      keywords:
        "أمان, خوادم سحابية, حماية, برامج ضارة, استرداد النسخ الاحتياطي, مراقبة, نمور, VPS, السعودية",
      url: baseUrl + "/ar/security",
      locale: "ar-SA",
    },
    en: {
      title: "Security - High-Performance Cloud Servers with Advanced Protection | Nomoor",
      description:
        "Experience stable and secure cloud servers with comprehensive malware protection, backup recovery, and advanced monitoring tools from Nomoor. Our solutions ensure your data continuity and security.",
      keywords:
        "security, cloud servers, protection, malware, backup recovery, monitoring, Nomoor, VPS, Saudi Arabia",
      url: baseUrl + "/en/security",
      locale: "en-US",
    },
    fr: {
      title: "Sécurité - Serveurs Cloud Haute Performance avec Protection Avancée | Nomoor",
      description:
        "Profitez de serveurs cloud stables et sécurisés avec protection contre les logiciels malveillants, récupération de sauvegarde et outils de surveillance avancés de Nomoor.",
      keywords:
        "sécurité, serveurs cloud, protection, logiciels malveillants, récupération de sauvegarde, surveillance, Nomoor, VPS, Arabie Saoudite",
      url: baseUrl + "/fr/security",
      locale: "fr-FR",
    },
    de: {
      title: "Sicherheit - Hochleistungs-Cloud-Server mit erweitertem Schutz | Nomoor",
      description:
        "Erleben Sie stabile und sichere Cloud-Server mit umfassendem Schutz vor Malware, Backup-Wiederherstellung und fortschrittlichen Überwachungstools von Nomoor.",
      keywords:
        "Sicherheit, Cloud-Server, Schutz, Malware, Backup-Wiederherstellung, Überwachung, Nomoor, VPS, Saudi-Arabien",
      url: baseUrl + "/de/security",
      locale: "de-DE",
    },
    tr: {
      title: "Güvenlik - Gelişmiş Koruma ile Yüksek Performanslı Bulut Sunucuları | Nomoor",
      description:
        "Nomoor'dan kapsamlı kötü amaçlı yazılım koruması, yedek kurtarma ve gelişmiş izleme araçlarıyla kararlı ve güvenli bulut sunucularını deneyimleyin.",
      keywords:
        "güvenlik, bulut sunucuları, koruma, kötü amaçlı yazılım, yedek kurtarma, izleme, Nomoor, VPS, Suudi Arabistan",
      url: baseUrl + "/tr/security",
      locale: "tr-TR",
    },
  };

  return (
    <Head>
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoor" />

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
          <meta property="og:site_name" content="Nomoor" />
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
