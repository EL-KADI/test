import Head from "next/head";
import React from "react";

export default function SEOManageServers() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "إدارة الخوادم - دعنا ندير جميع خوادمك من أجلك | نمور هوستينج",
      description:
        "نوفر لك خدمات إدارة الخوادم المتقدمة مع تحسين الأداء عبر CDN، حماية DDoS، مكافحة البرمجيات الضارة، دعم أنظمة التشغيل المتعددة، وشهادات SSL. ابدأ الآن وسهّل إدارة خوادمك.",
      keywords:
        "إدارة الخوادم, حماية DDoS, تحسين أداء الموقع, برمجيات ضارة, سيرفرات VPS, لوحة تحكم cPanel, حماية SSL",
      url: baseUrl + "/ar/server-management",
      locale: "ar",
    },
    en: {
      title: "Server Management - Let Us Manage All Your Servers | Nomoar Hosting",
      description:
        "We offer advanced server management services with CDN performance optimization, DDoS protection, malware prevention, multi-OS support, and SSL certificates. Start now and simplify your server management.",
      keywords:
        "server management, DDoS protection, performance optimization, malware prevention, VPS servers, cPanel control panel, SSL protection",
      url: baseUrl + "/en/server-management",
      locale: "en_US",
    },
    fr: {
      title: "Gestion des serveurs - Laissez-nous gérer tous vos serveurs | Nomoar Hosting",
      description:
        "Nous offrons des services avancés de gestion de serveurs avec optimisation des performances CDN, protection DDoS, prévention des logiciels malveillants, support multi-OS et certificats SSL. Commencez maintenant et simplifiez la gestion de vos serveurs.",
      keywords:
        "gestion des serveurs, protection DDoS, optimisation des performances, prévention des malwares, serveurs VPS, panneau de contrôle cPanel, protection SSL",
      url: baseUrl + "/fr/server-management",
      locale: "fr_FR",
    },
    de: {
      title: "Serververwaltung – Lassen Sie uns alle Ihre Server verwalten | Nomoar Hosting",
      description:
        "Wir bieten fortschrittliche Serververwaltungsdienste mit CDN-Leistungsoptimierung, DDoS-Schutz, Malware-Prävention, Multi-OS-Unterstützung und SSL-Zertifikaten. Starten Sie jetzt und vereinfachen Sie Ihre Serververwaltung.",
      keywords:
        "Serververwaltung, DDoS-Schutz, Leistungsoptimierung, Malware-Prävention, VPS-Server, cPanel-Kontrollpanel, SSL-Schutz",
      url: baseUrl + "/de/server-management",
      locale: "de_DE",
    },
    tr: {
      title: "Sunucu Yönetimi - Tüm Sunucularınızı Biz Yönetelim | Nomoar Hosting",
      description:
        "CDN performans optimizasyonu, DDoS koruması, kötü amaçlı yazılım önleme, çoklu işletim sistemi desteği ve SSL sertifikaları ile gelişmiş sunucu yönetimi hizmetleri sunuyoruz. Hemen başlayın ve sunucu yönetiminizi kolaylaştırın.",
      keywords:
        "sunucu yönetimi, DDoS koruması, performans optimizasyonu, kötü amaçlı yazılım önleme, VPS sunucuları, cPanel kontrol paneli, SSL koruması",
      url: baseUrl + "/tr/server-management",
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
