"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function LogoSizesShowcase() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">{t("brandGuidelines.logoSizesTitle")}</h1>
        <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          {t("brandGuidelines.logoSizesDescription")}
        </p>
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            <Image
              src="/Four-Logo.webp"
              alt={t("brandGuidelines.logoSizesAlt")}
              width={700}
              height={700}
              loading="lazy"
              className="object-contain max-w-sm lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}