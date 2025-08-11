import Head from "next/head";
import React from "react";

export default function SEOPayment() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "طرق الدفع - ادفع بالطريقة التي تناسبك مع نمور",
      description:
        "اكتشف جميع طرق الدفع المتنوعة والسريعة التي تقدمها نمور، من التحويل البنكي إلى المحافظ الإلكترونية والعملات الرقمية، مع ضمان أمان وسلاسة المعاملات.",
      keywords:
        "طرق الدفع, تحويل بنكي, محافظ إلكترونية, بايبال, فودافون كاش, زين كاش, العملات الرقمية, الدفع الآمن, نمور",
      url: baseUrl + "/ar/payment",
      locale: "ar-SA",
    },
    en: {
      title: "Payment Methods - Pay Your Way with Nomoor",
      description:
        "Explore all the diverse and fast payment methods offered by Nomoor, from bank transfers to e-wallets and cryptocurrencies, ensuring secure and smooth transactions.",
      keywords:
        "payment methods, bank transfer, e-wallets, PayPal, Vodafone Cash, Zain Cash, cryptocurrencies, secure payment, Nomoor",
      url: baseUrl + "/en/payment",
      locale: "en-US",
    },
    fr: {
      title: "Méthodes de paiement - Payez comme vous voulez avec Nomoor",
      description:
        "Découvrez toutes les méthodes de paiement rapides et variées proposées par Nomoor, des virements bancaires aux portefeuilles électroniques et cryptomonnaies, garantissant des transactions sécurisées.",
      keywords:
        "méthodes de paiement, virement bancaire, portefeuilles électroniques, PayPal, Vodafone Cash, Zain Cash, cryptomonnaies, paiement sécurisé, Nomoor",
      url: baseUrl + "/fr/payment",
      locale: "fr-FR",
    },
    de: {
      title: "Zahlungsmethoden - Bezahlen Sie auf Ihre Weise mit Nomoor",
      description:
        "Entdecken Sie alle vielfältigen und schnellen Zahlungsmethoden von Nomoor, von Banküberweisungen über E-Wallets bis hin zu Kryptowährungen, die sichere und reibungslose Transaktionen gewährleisten.",
      keywords:
        "Zahlungsmethoden, Banküberweisung, E-Wallets, PayPal, Vodafone Cash, Zain Cash, Kryptowährungen, sichere Zahlung, Nomoor",
      url: baseUrl + "/de/payment",
      locale: "de-DE",
    },
    tr: {
      title: "Ödeme Yöntemleri - Nomoor ile İstediğiniz Yöntemle Ödeyin",
      description:
        "Nomoor’un sunduğu banka transferlerinden e-cüzdanlara ve kripto paralara kadar çeşitli ve hızlı ödeme yöntemlerini keşfedin, güvenli ve sorunsuz işlemler sağlayın.",
      keywords:
        "ödeme yöntemleri, banka transferi, e-cüzdanlar, PayPal, Vodafone Cash, Zain Cash, kripto paralar, güvenli ödeme, Nomoor",
      url: baseUrl + "/tr/payment",
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
