import Head from "next/head";
import React from "react";
type Country = "sa" | "eg" | "tr" | "sd" | "iq" | "ae";
type Language = "ar" | "en" | "fr" | "tr" | "de";

type SEOInfo = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  locale: string;
};

type SEOData = {
  [key in Country]: {
    [lang in Language]: SEOInfo;
  };
};

const seoData = {
  sa: {
    ar: {
      title: "احصل على نطاقات السعودية - المسجل رقم #1 | نمور هوستينج",
      description:
        "سجل نطاقات السعودية بأسعار منافسة وامتدادات متنوعة مثل .sa، .com.sa، .edu.sa مع إجراءات الموافقة الرسمية.",
      keywords:
        "نطاقات السعودية, تسجيل نطاق sa, نطاق رسمي, نطاقات .com.sa, نطاقات .edu.sa",
      url: "https://sybergroup.it.com/ar/local-domains",
      locale: "ar-SA",
    },
    en: {
      title: "Get Saudi Domains - #1 Registrar | Nomoor Hosting",
      description:
        "Register Saudi domains with competitive prices and diverse extensions like .sa, .com.sa, .edu.sa with official approval.",
      keywords:
        "Saudi domains, sa domain registration, official domain, .com.sa domains, .edu.sa domains",
      url: "https://sybergroup.it.com/en/local-domains",
      locale: "en-SA",
    },
    fr: {
      title:
        "Obtenez des domaines saoudiens - Enregistreur n°1 | Nomoor Hosting",
      description:
        "Enregistrez des domaines saoudiens à des prix compétitifs avec diverses extensions comme .sa, .com.sa, .edu.sa avec approbation officielle.",
      keywords:
        "domaines saoudiens, enregistrement de domaine sa, domaine officiel, domaines .com.sa, domaines .edu.sa",
      url: "https://sybergroup.it.com/fr/local-domains",
      locale: "fr-SA",
    },
    tr: {
      title: "Suudi Alan Adları Alın - #1 Kayıtçı | Nomoor Hosting",
      description:
        ".sa, .com.sa, .edu.sa gibi çeşitli uzantılarla resmi onaylı uygun fiyatlı Suudi alan adları kaydedin.",
      keywords:
        "Suudi alan adları, sa alan adı kaydı, resmi alan adı, .com.sa alanları, .edu.sa alanları",
      url: "https://sybergroup.it.com/tr/local-domains",
      locale: "tr-SA",
    },
    de: {
      title: "Saudi-Domains erhalten - Nr.1 Registrar | Nomoor Hosting",
      description:
        "Registrieren Sie Saudi-Domains zu wettbewerbsfähigen Preisen mit verschiedenen Erweiterungen wie .sa, .com.sa, .edu.sa mit offizieller Genehmigung.",
      keywords:
        "Saudi-Domains, sa Domain-Registrierung, offizielle Domain, .com.sa Domains, .edu.sa Domains",
      url: "https://sybergroup.it.com/de/local-domains",
      locale: "de-SA",
    },
  },
  eg: {
    ar: {
      title: "احصل على نطاقات مصر - أفضل العروض | نمور هوستينج",
      description:
        "سجل نطاقات مصر مع أسعار تنافسية وامتدادات مثل .eg، .com.eg، .net.eg بسهولة وأمان.",
      keywords: "نطاقات مصر, تسجيل نطاق eg, نطاق رسمي مصر, .com.eg, .net.eg",
      url: "https://sybergroup.it.com/ar/local-domains",
      locale: "ar-EG",
    },
    en: {
      title: "Get Egypt Domains - Best Deals | Nomoor Hosting",
      description:
        "Register Egypt domains with competitive prices and extensions like .eg, .com.eg, .net.eg easily and securely.",
      keywords:
        "Egypt domains, eg domain registration, official Egypt domain, .com.eg, .net.eg",
      url: "https://sybergroup.it.com/en/local-domains",
      locale: "en-EG",
    },
    fr: {
      title:
        "Obtenez des domaines égyptiens - Meilleures offres | Nomoor Hosting",
      description:
        "Enregistrez des domaines égyptiens à des prix compétitifs avec des extensions comme .eg, .com.eg, .net.eg facilement et en toute sécurité.",
      keywords:
        "domaines égyptiens, enregistrement domaine eg, domaine officiel Égypte, .com.eg, .net.eg",
      url: "https://sybergroup.it.com/fr/local-domains",
      locale: "fr-EG",
    },
    tr: {
      title: "Mısır Alan Adları Alın - En İyi Fırsatlar | Nomoor Hosting",
      description:
        ".eg, .com.eg, .net.eg gibi uzantılarla uygun fiyatlı Mısır alan adlarını kolayca ve güvenle kaydedin.",
      keywords: "Mısır alan adları, eg alan adı kaydı, resmi Mısır alan adı",
      url: "https://sybergroup.it.com/tr/local-domains",
      locale: "tr-EG",
    },
    de: {
      title: "Ägypten Domains erhalten - Beste Angebote | Nomoor Hosting",
      description:
        "Registrieren Sie Ägypten-Domains zu wettbewerbsfähigen Preisen mit Erweiterungen wie .eg, .com.eg, .net.eg einfach und sicher.",
      keywords:
        "Ägypten Domains, eg Domain-Registrierung, offizielle Ägypten Domain",
      url: "https://sybergroup.it.com/de/local-domains",
      locale: "de-EG",
    },
  },
  tr: {
    ar: {
      title: "احصل على نطاقات تركيا - عروض مميزة | نمور هوستينج",
      description:
        "سجل نطاقات تركيا مع أسعار تنافسية وامتدادات مثل .tr، .com.tr، .net.tr مع دعم فني عالي.",
      keywords:
        "نطاقات تركيا, تسجيل نطاق tr, نطاق رسمي تركيا, .com.tr, .net.tr",
      url: "https://sybergroup.it.com/ar/local-domains",
      locale: "ar-TR",
    },
    en: {
      title: "Get Turkey Domains - Special Offers | Nomoor Hosting",
      description:
        "Register Turkey domains with competitive prices and extensions like .tr, .com.tr, .net.tr with excellent support.",
      keywords:
        "Turkey domains, tr domain registration, official Turkey domain, .com.tr, .net.tr",
      url: "https://sybergroup.it.com/en/local-domains",
      locale: "en-TR",
    },
    fr: {
      title: "Obtenez des domaines turcs - Offres spéciales | Nomoor Hosting",
      description:
        "Enregistrez des domaines turcs à des prix compétitifs avec des extensions comme .tr, .com.tr, .net.tr avec un excellent support.",
      keywords:
        "domaines turcs, enregistrement domaine tr, domaine officiel Turquie, .com.tr, .net.tr",
      url: "https://sybergroup.it.com/fr/local-domains",
      locale: "fr-TR",
    },
    tr: {
      title: "Türkiye Alan Adları Alın - Özel Teklifler | Nomoor Hosting",
      description:
        ".tr, .com.tr, .net.tr gibi uzantılarla rekabetçi fiyatlarla Türkiye alan adlarını kaydedin ve mükemmel destek alın.",
      keywords:
        "Türkiye alan adları, tr alan adı kaydı, resmi Türkiye alan adı",
      url: "https://sybergroup.it.com/tr/local-domains",
      locale: "tr-TR",
    },
    de: {
      title: "Türkei Domains erhalten - Sonderangebote | Nomoor Hosting",
      description:
        "Registrieren Sie Türkei-Domains zu wettbewerbsfähigen Preisen mit Erweiterungen wie .tr, .com.tr, .net.tr mit exzellentem Support.",
      keywords:
        "Türkei Domains, tr Domain-Registrierung, offizielle Türkei Domain, .com.tr, .net.tr",
      url: "https://sybergroup.it.com/de/local-domains",
      locale: "de-TR",
    },
  },
  sd: {
    ar: {
      title: "احصل على نطاقات السودان - أسعار مناسبة | نمور هوستينج",
      description:
        "سجل نطاقات السودان مع امتدادات متنوعة مثل .sd، .com.sd، .net.sd بأفضل الأسعار.",
      keywords:
        "نطاقات السودان, تسجيل نطاق sd, نطاق رسمي السودان, .com.sd, .net.sd",
      url: "https://sybergroup.it.com/ar/local-domains",
      locale: "ar-SD",
    },
    en: {
      title: "Get Sudan Domains - Affordable Prices | Nomoor Hosting",
      description:
        "Register Sudan domains with various extensions like .sd, .com.sd, .net.sd at best prices.",
      keywords:
        "Sudan domains, sd domain registration, official Sudan domain, .com.sd, .net.sd",
      url: "https://sybergroup.it.com/en/local-domains",
      locale: "en-SD",
    },
    fr: {
      title:
        "Obtenez des domaines soudanais - Prix abordables | Nomoor Hosting",
      description:
        "Enregistrez des domaines soudanais avec diverses extensions comme .sd, .com.sd, .net.sd aux meilleurs prix.",
      keywords:
        "domaines soudanais, enregistrement domaine sd, domaine officiel Soudan, .com.sd, .net.sd",
      url: "https://sybergroup.it.com/fr/local-domains",
      locale: "fr-SD",
    },
    tr: {
      title: "Sudan Alan Adları Alın - Uygun Fiyatlar | Nomoor Hosting",
      description:
        ".sd, .com.sd, .net.sd gibi uzantılarla Sudan alan adlarını en iyi fiyatlarla kaydedin.",
      keywords: "Sudan alan adları, sd alan adı kaydı, resmi Sudan alan adı",
      url: "https://sybergroup.it.com/tr/local-domains",
      locale: "tr-SD",
    },
    de: {
      title: "Sudan Domains erhalten - Günstige Preise | Nomoor Hosting",
      description:
        "Registrieren Sie Sudan-Domains mit verschiedenen Erweiterungen wie .sd, .com.sd, .net.sd zu besten Preisen.",
      keywords:
        "Sudan Domains, sd Domain-Registrierung, offizielle Sudan Domain",
      url: "https://sybergroup.it.com/de/local-domains",
      locale: "de-SD",
    },
  },
  iq: {
    ar: {
      title: "احصل على نطاقات العراق - تسجيل سهل | نمور هوستينج",
      description:
        "سجل نطاقات العراق مع امتدادات مثل .iq، .com.iq، .net.iq بطريقة سهلة وسريعة.",
      keywords:
        "نطاقات العراق, تسجيل نطاق iq, نطاق رسمي العراق, .com.iq, .net.iq",
      url: "https://sybergroup.it.com/ar/local-domains",
      locale: "ar-IQ",
    },
    en: {
      title: "Get Iraq Domains - Easy Registration | Nomoor Hosting",
      description:
        "Register Iraq domains with extensions like .iq, .com.iq, .net.iq easily and quickly.",
      keywords:
        "Iraq domains, iq domain registration, official Iraq domain, .com.iq, .net.iq",
      url: "https://sybergroup.it.com/en/local-domains",
      locale: "en-IQ",
    },
    fr: {
      title:
        "Obtenez des domaines irakiens - Enregistrement facile | Nomoor Hosting",
      description:
        "Enregistrez des domaines irakiens avec des extensions comme .iq, .com.iq, .net.iq facilement et rapidement.",
      keywords:
        "domaines irakiens, enregistrement domaine iq, domaine officiel Irak, .com.iq, .net.iq",
      url: "https://sybergroup.it.com/fr/local-domains",
      locale: "fr-IQ",
    },
    tr: {
      title: "Irak Alan Adları Alın - Kolay Kayıt | Nomoor Hosting",
      description:
        ".iq, .com.iq, .net.iq gibi uzantılarla Irak alan adlarını kolay ve hızlı kaydedin.",
      keywords: "Irak alan adları, iq alan adı kaydı, resmi Irak alan adı",
      url: "https://sybergroup.it.com/tr/local-domains",
      locale: "tr-IQ",
    },
    de: {
      title: "Irak Domains erhalten - Einfache Registrierung | Nomoor Hosting",
      description:
        "Registrieren Sie Irak-Domains mit Erweiterungen wie .iq, .com.iq, .net.iq einfach und schnell.",
      keywords: "Irak Domains, iq Domain-Registrierung, offizielle Irak Domain",
      url: "https://sybergroup.it.com/de/local-domains",
      locale: "de-IQ",
    },
  },
  ae: {
    ar: {
      title: "احصل على نطاقات الإمارات - خدمات مميزة | نمور هوستينج",
      description:
        "سجل نطاقات الإمارات مع امتدادات مثل .ae، .com.ae، .net.ae بأعلى جودة وخدمات دعم.",
      keywords:
        "نطاقات الإمارات, تسجيل نطاق ae, نطاق رسمي الإمارات, .com.ae, .net.ae",
      url: "https://sybergroup.it.com/ar/local-domains",
      locale: "ar-AE",
    },
    en: {
      title: "Get UAE Domains - Premium Services | Nomoor Hosting",
      description:
        "Register UAE domains with extensions like .ae, .com.ae, .net.ae with top quality and support services.",
      keywords:
        "UAE domains, ae domain registration, official UAE domain, .com.ae, .net.ae",
      url: "https://sybergroup.it.com/en/local-domains",
      locale: "en-AE",
    },
    fr: {
      title: "Obtenez des domaines Émirats - Services premium | Nomoor Hosting",
      description:
        "Enregistrez des domaines Émirats avec des extensions comme .ae, .com.ae, .net.ae avec une qualité et un support supérieurs.",
      keywords:
        "domaines Émirats, enregistrement domaine ae, domaine officiel Émirats, .com.ae, .net.ae",
      url: "https://sybergroup.it.com/fr/local-domains",
      locale: "fr-AE",
    },
    tr: {
      title: "BAE Alan Adları Alın - Premium Hizmetler | Nomoor Hosting",
      description:
        ".ae, .com.ae, .net.ae gibi uzantılarla Birleşik Arap Emirlikleri alan adlarını yüksek kalite ve destekle kaydedin.",
      keywords: "BAE alan adları, ae alan adı kaydı, resmi BAE alan adı",
      url: "https://sybergroup.it.com/tr/local-domains",
      locale: "tr-AE",
    },
    de: {
      title: "VAE Domains erhalten - Premium Services | Nomoor Hosting",
      description:
        "Registrieren Sie VAE-Domains mit Erweiterungen wie .ae, .com.ae, .net.ae mit bester Qualität und Support.",
      keywords: "VAE Domains, ae Domain-Registrierung, offizielle VAE Domain",
      url: "https://sybergroup.it.com/de/local-domains",
      locale: "de-AE",
    },
  },
};
interface SEOProps {
  country: Country;
  language: Language;
}
export default function SEOLocalDomains({
  country = "sa",
  language = "ar",
}: SEOProps) {
  const data = seoData[country][language] || seoData["sa"]["ar"];

  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="نمور هوستينج" />

      {/* Open Graph */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:locale" content={data.locale} />
      <meta property="og:site_name" content="نمور هوستينج" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />

      {/* Canonical URL */}
      <link rel="canonical" href={data.url} />

      {/* hreflang Links for all countries and languages */}
      {Object.entries(seoData).map(([cKey, langs]) =>
        Object.entries(langs).map(([langKey, val]) => (
          <link
            key={`hreflang-${cKey}-${langKey}`}
            rel="alternate"
            hrefLang={`${langKey}-${cKey.toUpperCase()}`}
            href={val.url}
          />
        ))
      )}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
