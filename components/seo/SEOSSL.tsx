import Head from "next/head";
import React from "react";

export default function SEOSSL() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "شهادات SSL - حماية بيانات موقعك وأمان الزوار | نمور",
      description:
        "حماية بيانات موقعك، وإظهار شهادة الأمان الخاصة بك لزوارك. قم بترسيخ موثوقية عملك عبر اتصال آمن وتشفير البيانات المقدمة من شهادات SSL.",
      keywords:
        "شهادات SSL, حماية بيانات, أمان الموقع, تشفير البيانات, اتصال آمن, قفل HTTPS, أمن الويب, ثقة العملاء",
      url: baseUrl + "/ar/ssl",
      locale: "ar-SA",
    },
    en: {
      title: "SSL Certificates - Protect Your Site Data & Visitor Security | Nomoor",
      description:
        "Protect your site data and display your security certificate to visitors. Build your business trust with secure connections and encrypted data from SSL certificates.",
      keywords:
        "SSL certificates, data protection, site security, data encryption, secure connection, HTTPS lock, web security, customer trust",
      url: baseUrl + "/en/ssl",
      locale: "en-US",
    },
    fr: {
      title: "Certificats SSL - Protection des données et sécurité des visiteurs | Nomoor",
      description:
        "Protégez les données de votre site et affichez votre certificat de sécurité aux visiteurs. Renforcez la confiance grâce à une connexion sécurisée et un chiffrement SSL.",
      keywords:
        "certificats SSL, protection des données, sécurité du site, chiffrement des données, connexion sécurisée, verrou HTTPS, sécurité web, confiance client",
      url: baseUrl + "/fr/ssl",
      locale: "fr-FR",
    },
    de: {
      title: "SSL-Zertifikate - Schutz Ihrer Daten und Sicherheit der Besucher | Nomoor",
      description:
        "Schützen Sie Ihre Website-Daten und zeigen Sie Ihr Sicherheitszertifikat den Besuchern. Bauen Sie Vertrauen mit sicheren Verbindungen und SSL-Verschlüsselung auf.",
      keywords:
        "SSL-Zertifikate, Datenschutz, Website-Sicherheit, Datenverschlüsselung, sichere Verbindung, HTTPS-Schloss, Web-Sicherheit, Kundenzufriedenheit",
      url: baseUrl + "/de/ssl",
      locale: "de-DE",
    },
    tr: {
      title: "SSL Sertifikaları - Site Verilerinizi ve Ziyaretçi Güvenliğini Koruyun | Nomoor",
      description:
        "Site verilerinizi koruyun ve ziyaretçilere güvenlik sertifikanızı gösterin. SSL sertifikaları ile güvenli bağlantılar ve şifrelenmiş veriler sayesinde işinizin güvenilirliğini artırın.",
      keywords:
        "SSL sertifikaları, veri koruma, site güvenliği, veri şifreleme, güvenli bağlantı, HTTPS kilidi, web güvenliği, müşteri güveni",
      url: baseUrl + "/tr/ssl",
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
