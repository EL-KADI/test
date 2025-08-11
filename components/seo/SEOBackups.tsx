import Head from "next/head";
import React from "react";

export default function SEOBackups() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "النسخ الاحتياطي - نسخ احتياطية تلقائية دائمة | نمور هوستينج",
      description:
        "نوفر نسخًا احتياطية تلقائية مستمرة لحماية بياناتك وضمان استرجاعها بسهولة وسرعة. حافظ على أمان بياناتك مع حلول النسخ الاحتياطي المتقدمة لدينا.",
      keywords:
        "نسخ احتياطي, نسخ احتياطية تلقائية, حماية البيانات, استرجاع البيانات, أمان البيانات, Backup, Data Recovery",
      url: baseUrl + "/ar/backups",
      locale: "ar",
    },
    en: {
      title: "Backup Services - Automatic Continuous Backups | Nomoar Hosting",
      description:
        "We provide automatic continuous backups to protect your data and ensure easy and fast recovery. Keep your data secure with our advanced backup solutions.",
      keywords:
        "backup, automatic backups, data protection, data recovery, data security, Backup, Data Recovery",
      url: baseUrl + "/en/backups",
      locale: "en_US",
    },
    fr: {
      title: "Sauvegardes - Sauvegardes automatiques continues | Nomoar Hosting",
      description:
        "Nous fournissons des sauvegardes automatiques continues pour protéger vos données et garantir une récupération facile et rapide. Protégez vos données avec nos solutions de sauvegarde avancées.",
      keywords:
        "sauvegarde, sauvegardes automatiques, protection des données, récupération des données, sécurité des données, Backup, Data Recovery",
      url: baseUrl + "/fr/backups",
      locale: "fr_FR",
    },
    de: {
      title: "Backup-Dienste - Automatische kontinuierliche Backups | Nomoar Hosting",
      description:
        "Wir bieten automatische kontinuierliche Backups zum Schutz Ihrer Daten und zur einfachen und schnellen Wiederherstellung. Schützen Sie Ihre Daten mit unseren fortschrittlichen Backup-Lösungen.",
      keywords:
        "Backup, automatische Backups, Datenschutz, Datenwiederherstellung, Datensicherheit, Backup, Data Recovery",
      url: baseUrl + "/de/backups",
      locale: "de_DE",
    },
    tr: {
      title: "Yedekleme Hizmetleri - Otomatik Sürekli Yedeklemeler | Nomoar Hosting",
      description:
        "Verilerinizi korumak ve kolay, hızlı kurtarma sağlamak için otomatik sürekli yedeklemeler sunuyoruz. Gelişmiş yedekleme çözümlerimizle verilerinizi güvende tutun.",
      keywords:
        "yedekleme, otomatik yedeklemeler, veri koruma, veri kurtarma, veri güvenliği, Backup, Data Recovery",
      url: baseUrl + "/tr/backups",
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
