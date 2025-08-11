"use client";

import { useEffect } from "react";
import Head from "next/head";
import { useLanguage } from "../contexts/language-context";

export default function SEOHandler() {
  const { language } = useLanguage();

  const langMap: Record<string, string> = {
    arabic: "ar",
    english: "en",
    french: "fr",
    german: "de",
    turkish: "tr",
  };

  useEffect(() => {
    const isoLang = langMap[language] || "en";
    document.documentElement.lang = isoLang;
  }, [language]);

  return (
    <Head>
      <meta httpEquiv="Content-Language" content={langMap[language] || "en"} />
    </Head>
  );
}
