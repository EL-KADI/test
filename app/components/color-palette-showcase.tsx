"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function ColorPaletteShowcase() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background decorative shapes */}
      <Image
        src="/Lbg.svg"
        alt={t("brandGuidelines.decorativeBackgroundAlt")}
        width={400}
        height={400}
        loading="lazy"
        className={`absolute top-0 ${isRTL ? "right-0" : "left-0"}`}
      />
      <Image
        src="/Rbg.svg"
        alt={t("brandGuidelines.decorativeBackgroundAlt")}
        width={400}
        height={400}
        loading="lazy"
        className={`absolute top-0 ${isRTL ? "left-0" : "right-0"}`}
      />

      <div className="max-w-2xl md:max-w-4xl w-full z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-6">{t("brandGuidelines.colorPaletteTitle")}</h1>
        <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          {t("brandGuidelines.colorPaletteDescription")}
        </p>
        <h1 className={`text-2xl md:text-4xl font-bold text-black mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          {t("brandGuidelines.colorCodesTitle")}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <Image
            src="/Palette.webp"
            alt={t("brandGuidelines.colorPaletteAlt")}
            width={650}
            height={650}
            loading="lazy"
            className="object-contain max-w-sm lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}