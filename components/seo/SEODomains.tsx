import Head from "next/head";
import React from "react";

export default function SEODomains() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "ابحث واشترِ نطاق - أسعار منخفضة وخيارات واسعة | نمور هوستينج",
      description:
        "احصل على نطاقك المثالي مع أسعار تنافسية ومجموعة ضخمة من الامتدادات. قفل النطاق، التجديد التلقائي، حماية خصوصية Whois، وإدارة سهلة من لوحة تحكم متقدمة.",
      keywords:
        "شراء نطاق, تسجيل نطاق, أسماء نطاقات, حماية خصوصية Whois, قفل النطاق, تجديد تلقائي, إدارة النطاقات",
      url: baseUrl + "/ar/domains",
      locale: "ar",
    },
    en: {
      title: "Search & Buy Domains - Low Prices & Wide Choices | Nomoar Hosting",
      description:
        "Get your perfect domain with competitive prices and a huge selection of extensions. Domain lock, auto renewal, Whois privacy protection, and easy management from an advanced control panel.",
      keywords:
        "buy domain, domain registration, domain names, Whois privacy protection, domain lock, auto renewal, domain management",
      url: baseUrl + "/en/domains",
      locale: "en_US",
    },
    fr: {
      title: "Rechercher et Acheter des Domaines - Prix bas & large choix | Nomoar Hosting",
      description:
        "Obtenez votre domaine idéal avec des prix compétitifs et un large choix d'extensions. Verrouillage de domaine, renouvellement automatique, protection de la vie privée Whois, et gestion facile depuis un panneau avancé.",
      keywords:
        "acheter un domaine, enregistrement de domaine, noms de domaine, protection de la vie privée Whois, verrouillage de domaine, renouvellement automatique, gestion de domaine",
      url: baseUrl + "/fr/domains",
      locale: "fr_FR",
    },
    de: {
      title: "Domainsuchen & Kaufen - Niedrige Preise & Große Auswahl | Nomoar Hosting",
      description:
        "Erhalten Sie Ihre perfekte Domain zu wettbewerbsfähigen Preisen und einer großen Auswahl an Erweiterungen. Domain-Sperre, automatische Verlängerung, Whois-Datenschutz und einfache Verwaltung über ein fortschrittliches Control Panel.",
      keywords:
        "Domain kaufen, Domainregistrierung, Domainnamen, Whois-Datenschutz, Domain-Sperre, automatische Verlängerung, Domainverwaltung",
      url: baseUrl + "/de/domains",
      locale: "de_DE",
    },
    tr: {
      title: "Alan Adı Ara ve Satın Al - Düşük Fiyatlar & Geniş Seçenekler | Nomoar Hosting",
      description:
        "Rekabetçi fiyatlarla ve geniş uzantı seçenekleriyle mükemmel alan adınızı alın. Alan adı kilidi, otomatik yenileme, Whois gizlilik koruması ve gelişmiş kontrol panelinden kolay yönetim.",
      keywords:
        "alan adı satın al, alan adı kaydı, alan adları, Whois gizlilik koruması, alan adı kilidi, otomatik yenileme, alan adı yönetimi",
      url: baseUrl + "/tr/domains",
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
