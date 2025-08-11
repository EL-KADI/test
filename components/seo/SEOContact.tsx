import Head from "next/head";
import React from "react";

export default function SEOContact() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "اتصل بنا - دعم فني ومبيعات | نمور",
      description:
        "إذا كنت أحد عملاء الشركة، يمكنك التواصل معنا بسهولة عبر حسابك للوصول إلى فريق الدعم الفني أو المبيعات. نحن ملتزمون بتقديم أفضل خدمة وحلول سريعة تناسب احتياجاتك.",
      keywords:
        "اتصل بنا, دعم فني, مبيعات, نمور, خدمة عملاء, استضافة, تواصل, الرياض, السعودية",
      url: baseUrl + "/ar/contact",
      locale: "ar-SA",
    },
    en: {
      title: "Contact Us - Technical Support & Sales | Nomoor",
      description:
        "If you are one of the company’s customers, you can easily contact us through your account to reach the technical support or sales team. We are committed to providing the best service and fast solutions to suit your needs.",
      keywords:
        "contact us, technical support, sales, Nomoor, customer service, hosting, Riyadh, Saudi Arabia",
      url: baseUrl + "/en/contact",
      locale: "en-US",
    },
    fr: {
      title: "Contactez-nous - Support technique et ventes | Nomoor",
      description:
        "Si vous êtes client de la société, vous pouvez facilement nous contacter via votre compte pour joindre l'équipe de support technique ou de vente. Nous nous engageons à fournir le meilleur service et des solutions rapides adaptées à vos besoins.",
      keywords:
        "contactez-nous, support technique, ventes, Nomoor, service client, hébergement, Riyad, Arabie Saoudite",
      url: baseUrl + "/fr/contact",
      locale: "fr-FR",
    },
    de: {
      title: "Kontaktieren Sie uns - Technischer Support & Vertrieb | Nomoor",
      description:
        "Wenn Sie Kunde des Unternehmens sind, können Sie uns über Ihr Konto leicht erreichen, um das technische Support- oder Vertriebsteam zu kontaktieren. Wir verpflichten uns, den besten Service und schnelle Lösungen für Ihre Bedürfnisse bereitzustellen.",
      keywords:
        "kontaktieren Sie uns, technischer Support, Vertrieb, Nomoor, Kundenservice, Hosting, Riad, Saudi-Arabien",
      url: baseUrl + "/de/contact",
      locale: "de-DE",
    },
    tr: {
      title: "Bize Ulaşın - Teknik Destek ve Satış | Nomoor",
      description:
        "Şirket müşterisiyseniz, teknik destek veya satış ekibine ulaşmak için hesabınız üzerinden kolayca bizimle iletişime geçebilirsiniz. İhtiyaçlarınıza uygun en iyi hizmeti ve hızlı çözümleri sunmayı taahhüt ediyoruz.",
      keywords:
        "bize ulaşın, teknik destek, satış, Nomoor, müşteri hizmetleri, hosting, Riyad, Suudi Arabistan",
      url: baseUrl + "/tr/contact",
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
