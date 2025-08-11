import Head from "next/head";
import React from "react";

export default function SEOJobs() {
  const baseUrl = "https://sybergroup.it.com";

  const data = {
    ar: {
      title: "الوظائف - انضم إلى فريق نمور | فرص عمل مميزة",
      description:
        "نؤمن بأن فريقنا هو أساس نجاحنا، ونسعى لتوفير بيئة عمل محفزة مع الاستثمار المستمر في تطوير مهاراتهم. انضم إلينا وكن جزءًا من قيادة التطور التقني محليًا واقتصاديًا وثقافيًا.",
      keywords:
        "وظائف, فرص عمل, انضم إلينا, نمور, بيئة عمل, تدريب, مكافآت, تأمين صحي, تطوير مهني, الرياض, السعودية",
      url: baseUrl + "/ar/jobs",
      locale: "ar-SA",
    },
    en: {
      title: "Jobs - Join Nomoor Team | Exciting Career Opportunities",
      description:
        "We believe our team is the foundation of our success, providing a motivating work environment and continuous skill development. Join us and be part of leading local, economic, and cultural tech advancement.",
      keywords:
        "jobs, careers, join us, Nomoor, work environment, training, rewards, health insurance, professional development, Riyadh, Saudi Arabia",
      url: baseUrl + "/en/jobs",
      locale: "en-US",
    },
    fr: {
      title: "Emplois - Rejoignez l'équipe Nomoor | Opportunités de carrière",
      description:
        "Nous croyons que notre équipe est la base de notre succès, offrant un environnement de travail motivant et un développement continu des compétences. Rejoignez-nous pour participer à l'avancement technologique local, économique et culturel.",
      keywords:
        "emplois, carrières, rejoignez-nous, Nomoor, environnement de travail, formation, récompenses, assurance santé, développement professionnel, Riyad, Arabie Saoudite",
      url: baseUrl + "/fr/jobs",
      locale: "fr-FR",
    },
    de: {
      title: "Jobs - Werden Sie Teil des Nomoor-Teams | Karrierechancen",
      description:
        "Wir glauben, dass unser Team die Grundlage unseres Erfolgs ist und eine motivierende Arbeitsumgebung sowie kontinuierliche Weiterentwicklung der Fähigkeiten bietet. Werden Sie Teil der führenden lokalen, wirtschaftlichen und kulturellen technologischen Entwicklung.",
      keywords:
        "jobs, karriere, treten sie uns bei, Nomoor, arbeitsumfeld, training, belohnungen, krankenversicherung, berufliche entwicklung, Riad, Saudi-Arabien",
      url: baseUrl + "/de/jobs",
      locale: "de-DE",
    },
    tr: {
      title: "İşler - Nomoor Ekibine Katılın | Heyecan Verici Kariyer Fırsatları",
      description:
        "Ekibimizin başarımızın temeli olduğuna inanıyoruz, motive edici bir çalışma ortamı ve sürekli beceri geliştirme sağlıyoruz. Yerel, ekonomik ve kültürel teknoloji ilerlemesinin lideri olun.",
      keywords:
        "işler, kariyer, bize katılın, Nomoor, çalışma ortamı, eğitim, ödüller, sağlık sigortası, profesyonel gelişim, Riyad, Suudi Arabistan",
      url: baseUrl + "/tr/jobs",
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
