import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../contexts/language-context";
import { Cairo } from "next/font/google";
import LanguageFromURL from "@/contexts/language-from-url-context";

const baseUrl = "https://sybergroup.it.com";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Nomoar Hosting",
  description:
    "Nomoar Hosting — حلول استضافة سحابية، خوادم مخصصة، حجز نطاقات، أمان الويب، دعم Kubernetes وخدمات إدارة الخوادم. استضافة موثوقة وسريعة وموزعة جغرافيًا.",
  keywords: [
    // Arabic
    "استضافة ويب",
    "السيرفرات المخصصة",
    "خوادم افتراضية",
    "حجز نطاقات",
    "شهادات SSL",
    "حماية DDoS",
    "استضافة موزعين",
    "النسخ الاحتياطي",
    "أمان المواقع",
    "تحسين الأداء",
    "مراكز بيانات",
    "مراقبة الخوادم",
    "استضافة السعودية",
    "استضافة مصر",
    // English
    "web hosting",
    "cloud hosting",
    "dedicated servers",
    "VPS",
    "domain registration",
    "SSL certificates",
    "DDoS protection",
    "reseller hosting",
    "backup and recovery",
    "website security",
    "performance optimization",
    "data centers",
    "server monitoring",
    "hosting Saudi Arabia",
    "hosting Egypt",
    // German
    "Webhosting",
    "Cloud-Hosting",
    "dedizierte Server",
    "VPS Server",
    "Domainregistrierung",
    "SSL-Zertifikate",
    "DDoS-Schutz",
    "Reseller-Hosting",
    "Backup und Wiederherstellung",
    "Webseitensicherheit",
    "Leistungsoptimierung",
    "Rechenzentren",
    "Serverüberwachung",
    // French
    "hébergement web",
    "hébergement cloud",
    "serveurs dédiés",
    "VPS",
    "enregistrement de domaine",
    "certificats SSL",
    "protection DDoS",
    "hébergement revendeur",
    "sauvegarde et restauration",
    "sécurité du site",
    "optimisation des performances",
    "centres de données",
    "surveillance des serveurs",
    // Turkish
    "web barındırma",
    "bulut barındırma",
    "özel sunucular",
    "VPS",
    "alan adı kaydı",
    "SSL sertifikaları",
    "DDoS koruması",
    "bayi hosting",
    "yedekleme ve kurtarma",
    "web güvenliği",
    "performans optimizasyonu",
    "veri merkezleri",
    "sunucu izleme",
  ].join(", "),
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Nomoar Hosting",
    description:
      "Nomoar Hosting — استضافة سحابية، خوادم مخصصة، حلول أمان، وحجز نطاقات مع دعم Kubernetes وإدارة احترافية.",
    url: baseUrl,
    siteName: "Nomoar Hosting",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nomoar Hosting - Cloud & Dedicated Servers",
      },
    ],
    type: "website",
    locale: "ar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomoar Hosting",
    description:
      "استضافة سحابية وخوادم مخصصة، حلول أمان وتراخيص الخوادم — Nomoar Hosting.",
    images: [`${baseUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${baseUrl}/ar`,
    languages: {
      ar: `${baseUrl}/ar`,
      en: `${baseUrl}/en`,
      fr: `${baseUrl}/fr`,
      de: `${baseUrl}/de`,
      tr: `${baseUrl}/tr`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nomoar Hosting",
    url: baseUrl,
    logo: `${baseUrl}/logo.webp`,
    sameAs: [
      "https://www.facebook.com/nomoarhosting",
      "https://twitter.com/nomoarhosting",
      "https://www.linkedin.com/company/nomoar-hosting",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966551234567",
        contactType: "customer service",
        areaServed: ["SA", "EG", "AE", "DE", "FR", "TR"],
        availableLanguage: ["Arabic", "English", "German", "French", "Turkish"],
      },
    ],
  };

  const relatedBlogs = [
    "https://nomoarhosting.wordpress.com/",
    "https://professionalsofinformation.blogspot.com/2025/08/2025-nomoar-hosting.html",
    "https://professionalsofinformation.blogspot.com/2025/08/the-ultimate-guide-to-cloud-hosting-and.html",
    "https://professionalsofinformation.blogspot.com/2025/08/guide-ultime-sur-lhebergement-cloud-et.html",
    "https://professionalsofinformation.blogspot.com/2025/08/der-ultimative-leitfaden-zu-cloud.html",
    "https://professionalsofinformation.blogspot.com/2025/08/2025te-bulut-barndrma-ve-sunucu.html",
  ];

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nomoar Hosting",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    sameAs: relatedBlogs,
  };

  return (
    <html suppressHydrationWarning lang="ar" dir="rtl">
      <head suppressHydrationWarning>
        <style>{`
          @keyframes wave { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
          .animate-wave { animation: wave 3s ease-in-out infinite; }
          .rtl-scroll::-webkit-scrollbar { width: 6px; }
          .rtl-scroll::-webkit-scrollbar-track { background: #d0cfcf; }
          .rtl-scroll::-webkit-scrollbar-thumb { background: #717171; border-radius: 3px; }
          @media only screen and (max-width: 320px) and (max-height: 568px) {
            .custom-media { font-size: 0.59rem; max-width: 230px; }
            .custom-media-cont { height: 65vh; }
          }
          .svg-placeholder { height: 1000px; background: #092346; }
          .svg-two-placeholder { height: 1000px; background: #092346; }
          @media (max-width: 768px) {
            .svg-placeholder, .svg-two-placeholder { height: 250px; border-radius: 50%; border-top-left-radius:0; border-top-right-radius:0; }
          }
          .will-change-transform { will-change: transform, opacity; }
        `}</style>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Related Blog Posts for Nomoar Hosting",
              itemListElement: relatedBlogs.map((u, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: u,
              })),
            }),
          }}
        />
      </head>
      <body className={cairo.className} suppressHydrationWarning>
        <LanguageProvider>
          <LanguageFromURL />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
