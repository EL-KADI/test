"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";

interface Props {
  params: Promise<{ lang: string }>;
}

const supportedLangs = ["ar", "en", "fr", "de", "tr"];

export default function LangPage({ params }: Props) {
  const langData = React.use(params);
  const { lang } = langData;
  const { setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (supportedLangs.includes(lang)) {
      // ضبط اللغة حسب الكود
      switch (lang) {
        case "ar":
          setLanguage("arabic");
          break;
        case "en":
          setLanguage("english");
          break;
        case "fr":
          setLanguage("french");
          break;
        case "de":
          setLanguage("german");
          break;
        case "tr":
          setLanguage("turkish");
          break;
      }

      // إزالة language code من الـ URL
      let redirectPath = "/";
      
      // تحديد مكان الـ language code في الـ URL
      const pathSegments = pathname.split('/').filter(Boolean);
      const langIndex = pathSegments.indexOf(lang);
      
      if (langIndex !== -1) {
        // إزالة الـ language code من المسار
        const newSegments = pathSegments.filter((segment, index) => index !== langIndex);
        redirectPath = newSegments.length > 0 ? `/${newSegments.join('/')}` : "/";
      }

      router.replace(redirectPath);
    } else {
      // بدل ما نروح للـ not-found، نروح للـ home page
      router.replace("/");
    }
  }, [lang, setLanguage, router, pathname]);

  return (
    <div dir="ltr" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p  className="mt-2 text-sm text-gray-600">Setting language...</p>
      </div>
    </div>
  );
}