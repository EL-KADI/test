import Head from "next/head";
import React from "react";

export default function SEOSpeed() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الأداء والسرعة والأمان - حلول متطورة من نمور",
      description:
        "حسّن أداء موقعك مع حلولنا المتقدمة في السرعة، حماية بيانات موقعك، شهادة الأمان، وحماية ضد هجمات DDoS والاختراقات. نمور تضمن لك تجربة آمنة وسريعة.",
      keywords:
        "الأداء, السرعة, الأمان, حماية البيانات, شهادة الأمان, DDoS, حماية, نمور, VPS, السعودية",
      url: baseUrl + "/ar/speed",
      locale: "ar-SA",
    },
    en: {
      title: "Performance, Speed & Security - Advanced Solutions by Nomoor",
      description:
        "Enhance your website's performance with our advanced solutions in speed, data protection, security certification, and protection against DDoS and hacking attacks. Nomoor guarantees a secure and fast experience.",
      keywords:
        "performance, speed, security, data protection, security certificate, DDoS protection, Nomoor, VPS, Saudi Arabia",
      url: baseUrl + "/en/speed",
      locale: "en-US",
    },
    fr: {
      title: "Performance, Vitesse et Sécurité - Solutions Avancées de Nomoor",
      description:
        "Améliorez les performances de votre site avec nos solutions avancées en vitesse, protection des données, certification de sécurité et protection contre les attaques DDoS et piratage. Nomoor garantit une expérience rapide et sécurisée.",
      keywords:
        "performance, vitesse, sécurité, protection des données, certificat de sécurité, protection DDoS, Nomoor, VPS, Arabie Saoudite",
      url: baseUrl + "/fr/speed",
      locale: "fr-FR",
    },
    de: {
      title: "Leistung, Geschwindigkeit & Sicherheit - Fortschrittliche Lösungen von Nomoor",
      description:
        "Verbessern Sie die Leistung Ihrer Website mit unseren fortschrittlichen Lösungen für Geschwindigkeit, Datenschutz, Sicherheitszertifizierung und Schutz vor DDoS- und Hackerangriffen. Nomoor garantiert eine sichere und schnelle Erfahrung.",
      keywords:
        "leistung, geschwindigkeit, sicherheit, datenschutz, sicherheitszertifikat, ddos-schutz, nomoor, VPS, Saudi-Arabien",
      url: baseUrl + "/de/speed",
      locale: "de-DE",
    },
    tr: {
      title: "Performans, Hız ve Güvenlik - Nomoor'dan Gelişmiş Çözümler",
      description:
        "Web sitenizin performansını hız, veri koruma, güvenlik sertifikası ve DDoS ile hack saldırılarına karşı koruma konularında gelişmiş çözümlerimizle artırın. Nomoor güvenli ve hızlı bir deneyim garanti eder.",
      keywords:
        "performans, hız, güvenlik, veri koruma, güvenlik sertifikası, ddos koruması, nomoor, VPS, Suudi Arabistan",
      url: baseUrl + "/tr/speed",
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
