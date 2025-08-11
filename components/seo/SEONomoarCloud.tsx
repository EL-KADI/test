import Head from "next/head";
import React from "react";

export default function SEONomoarCloud() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title:
        "استضافة نمور - بنية تحتية سحابية مرنة وفعّالة | نمور هوستينج",
      description:
        "استضافة نمور تقدم بنية تحتية سحابية سهلة الإدارة وقابلة للتوسّع مع موارد حوسبة وتخزين وشبكات متقدمة لضمان أداء عالي وأمان موثوق.",
      keywords:
        "استضافة نمور, بنية تحتية سحابية, استضافة سحابية, موارد سحابية, إدارة سهلة, نمور هوستينج",
      url: baseUrl + "/ar/nomoar-hosting",
      locale: "ar",
    },
    en: {
      title:
        "Nomoar Hosting - Flexible & Efficient Cloud Infrastructure | Nomoar Hosting",
      description:
        "Nomoar Hosting offers easy-to-manage, scalable cloud infrastructure with advanced computing, storage, and networking resources to ensure high performance and reliable security.",
      keywords:
        "Nomoar hosting, cloud infrastructure, cloud hosting, cloud resources, easy management, Nomoar hosting",
      url: baseUrl + "/en/nomoar-hosting",
      locale: "en_US",
    },
    fr: {
      title:
        "Hébergement Nomoar - Infrastructure Cloud Flexible et Efficace | Nomoar Hosting",
      description:
        "Nomoar Hosting propose une infrastructure cloud facile à gérer et évolutive avec des ressources avancées de calcul, stockage et réseau pour garantir des performances élevées et une sécurité fiable.",
      keywords:
        "hébergement Nomoar, infrastructure cloud, hébergement cloud, ressources cloud, gestion facile, Nomoar Hosting",
      url: baseUrl + "/fr/nomoar-hosting",
      locale: "fr_FR",
    },
    de: {
      title:
        "Nomoar Hosting - Flexible & Effiziente Cloud-Infrastruktur | Nomoar Hosting",
      description:
        "Nomoar Hosting bietet eine einfach zu verwaltende, skalierbare Cloud-Infrastruktur mit fortschrittlichen Computing-, Speicher- und Netzwerkressourcen für hohe Leistung und zuverlässige Sicherheit.",
      keywords:
        "Nomoar Hosting, Cloud-Infrastruktur, Cloud-Hosting, Cloud-Ressourcen, einfache Verwaltung, Nomoar Hosting",
      url: baseUrl + "/de/nomoar-hosting",
      locale: "de_DE",
    },
    tr: {
      title:
        "Nomoar Hosting - Esnek ve Verimli Bulut Altyapısı | Nomoar Hosting",
      description:
        "Nomoar Hosting, yüksek performans ve güvenilir güvenlik sağlamak için gelişmiş hesaplama, depolama ve ağ kaynaklarıyla yönetimi kolay, ölçeklenebilir bulut altyapısı sunar.",
      keywords:
        "Nomoar hosting, bulut altyapısı, bulut barındırma, bulut kaynakları, kolay yönetim, Nomoar hosting",
      url: baseUrl + "/tr/nomoar-hosting",
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
