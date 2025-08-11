import Head from "next/head";
import React from "react";

export default function SEOCloudflare() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "كلاودفلير - الحل المثالي لتجربة ويب أسرع وأكثر أمانًا وموثوقية | نمور",
      description:
        "عزّز حماية موقعك الإلكتروني من التهديدات السيبرانية وحسّن أداؤه مع كلاودفلير. من الحماية ضد التهديدات السيبرانية إلى تسريع تسليم المحتوى، تعد كلاودفلير شريكك الموثوق في أداء وأمان الويب.",
      keywords:
        "كلاودفلير, حماية موقع, أداء ويب, هجمات DDoS, أمان ويب, CDN, شهادة SSL, تسريع الموقع, جدار حماية",
      url: baseUrl + "/ar/cloudflare",
      locale: "ar-SA",
    },
    en: {
      title: "Cloudflare - The Ideal Solution for a Faster, More Secure, and Reliable Web Experience | Nomoor",
      description:
        "Enhance your website security from cyber threats and improve its performance with Cloudflare. From cybersecurity protection to accelerating content delivery, Cloudflare is your trusted partner for web performance and security.",
      keywords:
        "Cloudflare, website protection, web performance, DDoS attacks, web security, CDN, SSL certificate, site acceleration, firewall",
      url: baseUrl + "/en/cloudflare",
      locale: "en-US",
    },
    fr: {
      title: "Cloudflare - La solution idéale pour une expérience web plus rapide, sécurisée et fiable | Nomoor",
      description:
        "Renforcez la sécurité de votre site contre les menaces cybernétiques et améliorez ses performances avec Cloudflare. De la protection à l’accélération du contenu, Cloudflare est votre partenaire de confiance pour la performance et la sécurité web.",
      keywords:
        "Cloudflare, protection site web, performance web, attaques DDoS, sécurité web, CDN, certificat SSL, accélération site, pare-feu",
      url: baseUrl + "/fr/cloudflare",
      locale: "fr-FR",
    },
    de: {
      title: "Cloudflare - Die ideale Lösung für ein schnelleres, sichereres und zuverlässiges Web-Erlebnis | Nomoor",
      description:
        "Verbessern Sie die Sicherheit Ihrer Website vor Cyber-Bedrohungen und steigern Sie deren Leistung mit Cloudflare. Von Cybersicherheitsschutz bis zur Beschleunigung der Inhaltsbereitstellung ist Cloudflare Ihr vertrauenswürdiger Partner für Webleistung und -sicherheit.",
      keywords:
        "Cloudflare, Website-Schutz, Web-Performance, DDoS-Angriffe, Web-Sicherheit, CDN, SSL-Zertifikat, Seitenbeschleunigung, Firewall",
      url: baseUrl + "/de/cloudflare",
      locale: "de-DE",
    },
    tr: {
      title: "Cloudflare - Daha Hızlı, Daha Güvenli ve Güvenilir Web Deneyimi İçin İdeal Çözüm | Nomoor",
      description:
        "Web sitenizi siber tehditlere karşı koruyun ve performansını Cloudflare ile artırın. Siber güvenlikten içerik teslim hızlandırmaya kadar Cloudflare, web performansı ve güvenliğinde güvenilir ortağınızdır.",
      keywords:
        "Cloudflare, web sitesi koruması, web performansı, DDoS saldırıları, web güvenliği, CDN, SSL sertifikası, site hızlandırma, güvenlik duvarı",
      url: baseUrl + "/tr/cloudflare",
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
