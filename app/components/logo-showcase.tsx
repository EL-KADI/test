"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function LogoShowcase() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">{t("brandGuidelines.logoTitle")}</h1>
        <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          {t("brandGuidelines.logoDescription")}
        </p>
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            <Image
              src="/Two-Logo.webp"
              alt={t("brandGuidelines.logoAlt")}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-full object-contain max-w-sm lg:max-w-full"
            />
            <span className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} text-xs text-gray-500`}>®</span>
          </div>
        </div>
      </div>
    </div>
  );
}