import Head from "next/head";
import React from "react";

export default function SEOServerLicenses() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "تراخيص الخوادم - تراخيص كاملة للخوادم الخاصة والمخصصة | نمور هوستينج",
      description:
        "احصل على تراخيص فردية أو شاملة للخوادم الخاصة والمخصصة مع لوحة تحكم واحدة للرؤية الشاملة، وحماية البريد الإلكتروني، وتتبع التهديدات، وتحسين أمان البريد الإلكتروني عبر PowerDMARC.",
      keywords:
        "تراخيص خوادم, تراخيص سيرفرات مخصصة, حماية البريد الإلكتروني, PowerDMARC, cPanel, WHMCS, LiteSpeed, Softaculous, CloudLinux, KernelCare",
      url: baseUrl + "/ar/server-licenses",
      locale: "ar",
    },
    en: {
      title: "Server Licenses - Full Licenses for Private & Dedicated Servers | Nomoar Hosting",
      description:
        "Get individual or full licenses for private and dedicated servers with a unified control panel for complete visibility, email protection, threat tracking, and enhanced email security via PowerDMARC.",
      keywords:
        "server licenses, dedicated server licenses, email protection, PowerDMARC, cPanel, WHMCS, LiteSpeed, Softaculous, CloudLinux, KernelCare",
      url: baseUrl + "/en/server-licenses",
      locale: "en_US",
    },
    fr: {
      title: "Licences Serveurs - Licences Complètes pour Serveurs Privés et Dédiés | Nomoar Hosting",
      description:
        "Obtenez des licences individuelles ou complètes pour serveurs privés et dédiés avec un panneau de contrôle unifié, protection des e-mails, suivi des menaces et sécurité accrue via PowerDMARC.",
      keywords:
        "licences serveurs, licences serveurs dédiés, protection e-mail, PowerDMARC, cPanel, WHMCS, LiteSpeed, Softaculous, CloudLinux, KernelCare",
      url: baseUrl + "/fr/server-licenses",
      locale: "fr_FR",
    },
    de: {
      title: "Server-Lizenzen - Vollständige Lizenzen für private & dedizierte Server | Nomoar Hosting",
      description:
        "Erhalten Sie individuelle oder vollständige Lizenzen für private und dedizierte Server mit einer einheitlichen Steuerzentrale, E-Mail-Schutz, Bedrohungsverfolgung und verbesserter E-Mail-Sicherheit via PowerDMARC.",
      keywords:
        "Server-Lizenzen, dedizierte Serverlizenzen, E-Mail-Schutz, PowerDMARC, cPanel, WHMCS, LiteSpeed, Softaculous, CloudLinux, KernelCare",
      url: baseUrl + "/de/server-licenses",
      locale: "de_DE",
    },
    tr: {
      title: "Sunucu Lisansları - Özel ve Adanmış Sunucular İçin Tam Lisanslar | Nomoar Hosting",
      description:
        "Özel ve adanmış sunucular için bireysel veya tam lisanslar, birleşik kontrol paneli, e-posta koruması, tehdit takibi ve PowerDMARC ile gelişmiş e-posta güvenliği elde edin.",
      keywords:
        "sunucu lisansları, adanmış sunucu lisansları, e-posta koruması, PowerDMARC, cPanel, WHMCS, LiteSpeed, Softaculous, CloudLinux, KernelCare",
      url: baseUrl + "/tr/server-licenses",
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
