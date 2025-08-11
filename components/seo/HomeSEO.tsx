import Head from "next/head";
import React from "react";

export default function HomeSEO() {
  const baseUrl = "https://sybergroup.it.com";

  // البيانات لكل لغة
  const data = {
    ar: {
      title: "استضافة النمور  - بنية تحتية سحابية سهلة الإدارة وفعالة التكلفة",
      description:
        "نمور هوستينج تقدم خدمات استضافة سحابية، خوادم مخصصة، حماية متقدمة ودعم فني متميز لتلبية احتياجات أعمالك.",
      keywords:
        "استضافة, استضافة ويب, بنية تحتية سحابية, خوادم مخصصة, حماية متقدمة, دعم فني, نمور هوستينج",
      url: baseUrl + "/",
      locale: "ar",
    },
    en: {
      title: "Nomoar Hosting - Easy-to-Manage and Cost-Effective Cloud Infrastructure",
      description:
        "Nomoar Hosting offers cloud hosting, dedicated servers, advanced protection, and excellent support to meet your business needs.",
      keywords:
        "hosting, web hosting, cloud infrastructure, dedicated servers, advanced protection, support, Nomoar Hosting",
      url: baseUrl + "/en/",
      locale: "en_US",
    },
    fr: {
      title: "Nomoar Hosting - Infrastructure Cloud Facile à Gérer et Rentable",
      description:
        "Nomoar Hosting propose l'hébergement cloud, serveurs dédiés, protection avancée et support excellent pour répondre à vos besoins.",
      keywords:
        "hébergement, hébergement web, infrastructure cloud, serveurs dédiés, protection avancée, support, Nomoar Hosting",
      url: baseUrl + "/fr/",
      locale: "fr_FR",
    },
    de: {
      title:
        "Nomoar Hosting - Einfach zu verwaltende und kostengünstige Cloud-Infrastruktur",
      description:
        "Nomoar Hosting bietet Cloud-Hosting, dedizierte Server, erweiterten Schutz und hervorragenden Support zur Erfüllung Ihrer Geschäftsanforderungen.",
      keywords:
        "Hosting, Webhosting, Cloud-Infrastruktur, dedizierte Server, erweiterter Schutz, Support, Nomoar Hosting",
      url: baseUrl + "/de/",
      locale: "de_DE",
    },
    tr: {
      title:
        "Nomoar Hosting - Yönetimi Kolay ve Maliyet Etkin Bulut Altyapısı",
      description:
        "Nomoar Hosting, bulut barındırma, özel sunucular, gelişmiş koruma ve mükemmel destek sunar, iş ihtiyaçlarınızı karşılamak için.",
      keywords:
        "barındırma, web barındırma, bulut altyapısı, özel sunucular, gelişmiş koruma, destek, Nomoar Hosting",
      url: baseUrl + "/tr/",
      locale: "tr_TR",
    },
  };

  return (
    <Head>
      {/* العربية عنوان افتراضي */}
      <title>{data.ar.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* ميتا داتا عامة */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nomoar Hosting" />

      {/* الميتا داتا والkeywords والdescription لكل اللغات */}
      {Object.entries(data).map(([lang, { description, keywords }]) => (
        <React.Fragment key={`meta-${lang}`}>
          <meta name="description" content={description} lang={lang} />
          <meta name="keywords" content={keywords} lang={lang} />
        </React.Fragment>
      ))}

      {/* Open Graph لكل اللغات */}
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

      {/* Twitter Card - استخدم العربية افتراضياً */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.ar.title} />
      <meta name="twitter:description" content={data.ar.description} />

      {/* canonical links لكل لغة */}
      {Object.entries(data).map(([lang, { url }]) => (
        <link
          key={`canonical-${lang}`}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      <link rel="canonical" href={data.ar.url} />

      {/* favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
