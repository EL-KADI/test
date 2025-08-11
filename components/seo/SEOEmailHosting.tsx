import Head from "next/head";
import React from "react";

export default function SEOEmailHosting() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "استضافة البريد الإلكتروني - نمور هوستينج | خدمات بريد إلكتروني آمنة وسريعة",
      description:
        "استضافة البريد الإلكتروني من نمور مع تخزين عالي الأداء، حماية متقدمة عبر الذكاء الاصطناعي ضد البريد العشوائي والفيروسات، لوحة تحكم سهلة الاستخدام وضمان uptime 99.9%.",
      keywords:
        "استضافة البريد الإلكتروني, بريد إلكتروني آمن, حماية البريد, تخزين NVMe, لوحة تحكم cPanel, نمور هوستينج",
      url: baseUrl + "/ar/mail-hosting",
      locale: "ar",
    },
    en: {
      title: "Email Hosting - Nomoar Hosting | Secure & Fast Email Services",
      description:
        "Nomoar Email Hosting offers high-performance storage, AI-powered protection against spam and malware, easy-to-use control panel, and 99.9% uptime guarantee.",
      keywords:
        "email hosting, secure email, spam protection, NVMe storage, cPanel control panel, Nomoar Hosting",
      url: baseUrl + "/en/mail-hosting",
      locale: "en_US",
    },
    fr: {
      title: "Hébergement Email - Nomoar Hosting | Services Email sécurisés et rapides",
      description:
        "Hébergement email de Nomoar avec stockage haute performance, protection IA contre le spam et les malwares, panneau de contrôle facile d'utilisation, et garantie de disponibilité de 99,9%.",
      keywords:
        "hébergement email, email sécurisé, protection anti-spam, stockage NVMe, panneau cPanel, Nomoar Hosting",
      url: baseUrl + "/fr/mail-hosting",
      locale: "fr_FR",
    },
    de: {
      title: "E-Mail Hosting - Nomoar Hosting | Sichere & schnelle E-Mail-Dienste",
      description:
        "Nomoar E-Mail Hosting bietet leistungsstarken Speicher, KI-gestützten Schutz vor Spam und Malware, benutzerfreundliches Control Panel und 99,9% Verfügbarkeitsgarantie.",
      keywords:
        "E-Mail Hosting, sichere E-Mail, Spam-Schutz, NVMe Speicher, cPanel Control Panel, Nomoar Hosting",
      url: baseUrl + "/de/mail-hosting",
      locale: "de_DE",
    },
    tr: {
      title: "E-Posta Barındırma - Nomoar Hosting | Güvenli ve Hızlı E-Posta Hizmetleri",
      description:
        "Nomoar E-Posta Barındırma, yüksek performanslı depolama, yapay zeka destekli spam ve zararlı yazılım koruması, kullanımı kolay kontrol paneli ve %99,9 çalışma süresi garantisi sunar.",
      keywords:
        "e-posta barındırma, güvenli e-posta, spam koruması, NVMe depolama, cPanel kontrol paneli, Nomoar Hosting",
      url: baseUrl + "/tr/mail-hosting",
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
