import Head from "next/head";
import React from "react";

export default function SEOFullServers() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "السيرفرات الكاملة المخصصة - استضافة عالية الأداء وآمنة | نمور هوستينج",
      description:
        "احصل على سيرفر مخصص مع نظام التشغيل والتطبيقات التي تفضلها، مع ميزات متقدمة مثل حماية البريد الإلكتروني، مكافحة البرامج الضارة، مراقبة على مدار الساعة، ودعم فني مستمر.",
      keywords:
        "سيرفر مخصص, استضافة مخصصة, حماية برامج ضارة, مراقبة الخادم, cPanel, Plesk, نسخ احتياطي, Linux, Windows Server, NIST",
      url: baseUrl + "/ar/full-servers",
      locale: "ar",
    },
    en: {
      title: "Dedicated Servers - High Performance & Secure Hosting | Nomoar Hosting",
      description:
        "Get a dedicated server with your preferred OS and pre-installed applications, advanced features like email protection, malware defense, 24/7 monitoring, and continuous support.",
      keywords:
        "dedicated server, dedicated hosting, malware protection, server monitoring, cPanel, Plesk, backup, Linux, Windows Server, NIST",
      url: baseUrl + "/en/full-servers",
      locale: "en_US",
    },
    fr: {
      title: "Serveurs Dédiés - Hébergement performant et sécurisé | Nomoar Hosting",
      description:
        "Obtenez un serveur dédié avec votre OS préféré et applications préinstallées, avec des fonctionnalités avancées telles que la protection des e-mails, la défense contre les malwares, la surveillance 24h/24 et le support continu.",
      keywords:
        "serveur dédié, hébergement dédié, protection contre les malwares, surveillance du serveur, cPanel, Plesk, sauvegarde, Linux, Windows Server, NIST",
      url: baseUrl + "/fr/full-servers",
      locale: "fr_FR",
    },
    de: {
      title: "Dedizierte Server - Hochleistungs- und sichere Hosting-Lösung | Nomoar Hosting",
      description:
        "Erhalten Sie einen dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen, fortschrittlichen Features wie E-Mail-Schutz, Malware-Abwehr, 24/7-Überwachung und kontinuierlichem Support.",
      keywords:
        "dedizierter Server, dediziertes Hosting, Malware-Schutz, Serverüberwachung, cPanel, Plesk, Backup, Linux, Windows Server, NIST",
      url: baseUrl + "/de/full-servers",
      locale: "de_DE",
    },
    tr: {
      title: "Adanmış Sunucular - Yüksek Performanslı ve Güvenli Hosting | Nomoar Hosting",
      description:
        "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla adanmış sunucu alın, gelişmiş özellikler arasında e-posta koruması, kötü amaçlı yazılım savunması, 7/24 izleme ve sürekli destek bulunur.",
      keywords:
        "adanmış sunucu, adanmış hosting, kötü amaçlı yazılım koruması, sunucu izleme, cPanel, Plesk, yedekleme, Linux, Windows Server, NIST",
      url: baseUrl + "/tr/full-servers",
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
