import Head from "next/head";
import React from "react";

export default function SEODashboard() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "لوحة التحكم - إدارة مجالك بسهولة مع نمور",
      description:
        "مرحبًا بك في لوحة التحكم الخاصة بك مع نمور. إدارة مجالك بسهولة، متابعة الأداء والإحصائيات، وتجديد المجالات من مكان واحد.",
      keywords:
        "لوحة التحكم, إدارة المجال, تجديد المجالات, متابعة الأداء, استضافة, نمور, السعودية",
      url: baseUrl + "/ar/static-dashboard",
      locale: "ar-SA",
    },
    en: {
      title: "Dashboard - Easy Domain Management with Nomoor",
      description:
        "Welcome to your dashboard with Nomoor. Manage your domain easily, monitor performance and statistics, and renew domains all in one place.",
      keywords:
        "dashboard, domain management, domain renewal, performance tracking, hosting, Nomoor, Saudi Arabia",
      url: baseUrl + "/en/static-dashboard",
      locale: "en-US",
    },
    fr: {
      title: "Tableau de bord - Gestion facile de domaine avec Nomoor",
      description:
        "Bienvenue sur votre tableau de bord avec Nomoor. Gérez facilement votre domaine, suivez les performances et les statistiques, et renouvelez les domaines en un seul endroit.",
      keywords:
        "tableau de bord, gestion de domaine, renouvellement de domaine, suivi des performances, hébergement, Nomoor, Arabie Saoudite",
      url: baseUrl + "/fr/static-dashboard",
      locale: "fr-FR",
    },
    de: {
      title: "Dashboard - Einfache Domainverwaltung mit Nomoor",
      description:
        "Willkommen in Ihrem Dashboard bei Nomoor. Verwalten Sie Ihre Domain einfach, überwachen Sie Leistung und Statistiken und verlängern Sie Domains an einem Ort.",
      keywords:
        "dashboard, domainverwaltung, domainverlängerung, leistungsüberwachung, hosting, nomoor, saudi-arabien",
      url: baseUrl + "/de/static-dashboard",
      locale: "de-DE",
    },
    tr: {
      title: "Kontrol Paneli - Nomoor ile Kolay Alan Adı Yönetimi",
      description:
        "Nomoor ile kontrol panelinize hoş geldiniz. Alan adınızı kolayca yönetin, performans ve istatistikleri takip edin ve alan adlarını tek yerden yenileyin.",
      keywords:
        "kontrol paneli, alan adı yönetimi, alan adı yenileme, performans takibi, hosting, nomoor, Suudi Arabistan",
      url: baseUrl + "/tr/static-dashboard",
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
