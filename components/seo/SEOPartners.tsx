import Head from "next/head";
import React from "react";

export default function SEOPartners() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "شركائنا - تعرف على شركاء النجاح في نمور",
      description:
        "تعرف على شركائنا من رواد التكامل والخبراء الذين يساعدوننا في تقديم أفضل حلول الاستضافة والحماية والخدمات التقنية. نمور تضمن لك تجربة موثوقة وآمنة مع شركاء عالميين.",
      keywords:
        "شركاء, نمور, استضافة, حماية, VPS, خدمات تقنية, SUCURI, Softaculous, Linux, السعودية",
      url: baseUrl + "/ar/partners",
      locale: "ar-SA",
    },
    en: {
      title: "Our Partners - Leading Collaborators with Nomoor",
      description:
        "Meet Nomoor's trusted partners who help deliver the best hosting, security, and technical services. Nomoor ensures a reliable and secure experience with global industry leaders.",
      keywords:
        "partners, Nomoor, hosting, security, VPS, technical services, SUCURI, Softaculous, Linux, Saudi Arabia",
      url: baseUrl + "/en/partners",
      locale: "en-US",
    },
    fr: {
      title: "Nos Partenaires - Collaborateurs de confiance chez Nomoor",
      description:
        "Découvrez les partenaires de confiance de Nomoor qui fournissent les meilleures solutions d'hébergement, de sécurité et de services techniques.",
      keywords:
        "partenaires, Nomoor, hébergement, sécurité, VPS, services techniques, SUCURI, Softaculous, Linux, Arabie Saoudite",
      url: baseUrl + "/fr/partners",
      locale: "fr-FR",
    },
    de: {
      title: "Unsere Partner - Führende Partner bei Nomoor",
      description:
        "Lernen Sie Nomoor's vertrauenswürdige Partner kennen, die die besten Hosting-, Sicherheits- und technischen Dienstleistungen bieten.",
      keywords:
        "partner, Nomoor, hosting, sicherheit, VPS, technische dienstleistungen, SUCURI, Softaculous, Linux, Saudi-Arabien",
      url: baseUrl + "/de/partners",
      locale: "de-DE",
    },
    tr: {
      title: "Ortaklarımız - Nomoor'un Önde Gelen İş Ortakları",
      description:
        "Nomoor'un en iyi barındırma, güvenlik ve teknik hizmetleri sunmasına yardımcı olan güvenilir ortaklarımızla tanışın.",
      keywords:
        "ortaklar, Nomoor, barındırma, güvenlik, VPS, teknik hizmetler, SUCURI, Softaculous, Linux, Suudi Arabistan",
      url: baseUrl + "/tr/partners",
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
