"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../../contexts/language-context";

export default function IdentityShowcase() {
  const { t, isRTL } = useLanguage();
  const [activeCard, setActiveCard] = useState<"left" | "right" | null>("right");

  const handleCardClick = (card: "left" | "right") => {
    setActiveCard(card);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-12">
          {t("brandGuidelines.identityTitle")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div
            className={cn(
              `flex items-center ${isRTL ? "justify-end" : "justify-start"} p-6 max-w-xs rounded-lg shadow-sm cursor-pointer transition-colors duration-300`,
              activeCard === "left" ? "bg-[#e0e4eb]" : "bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)]"
            )}
            onClick={() => handleCardClick("left")}
          >
            <span className={`text-lg font-medium text-[#0D034A] ${isRTL ? "ml-4" : "mr-4"}`}>
              {t("brandGuidelines.identityCard1Title")}
            </span>
            <Image
              src="/icon-logo.webp"
              alt={t("brandGuidelines.identityCard1Alt")}
              width={70}
              height={70}
              className="object-contain max-w-sm lg:max-w-6xl"
              loading="lazy"
            />
          </div>
          <div
            className={cn(
              `flex items-center ${isRTL ? "justify-end" : "justify-start"} p-6 max-w-xs rounded-lg shadow-sm cursor-pointer transition-colors duration-300`,
              activeCard === "right" ? "bg-[#e0e4eb]" : "bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)]"
            )}
            onClick={() => handleCardClick("right")}
          >
            <span className={`text-lg font-medium text-[#0D034A] ${isRTL ? "ml-4" : "mr-4"}`}>
              {t("brandGuidelines.identityCard2Title")}
            </span>
            <Image
              src="/icon-logo.webp"
              alt={t("brandGuidelines.identityCard2Alt")}
              width={70}
              height={70}
              className="object-contain max-w-sm lg:max-w-6xl"
              loading="lazy"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-center p-6 bg-white rounded-lg shadow-sm aspect-[2/1] sm:aspect-[unset]">
            <Image
              src="/Twoologo.webp"
              alt={t("brandGuidelines.identityBottomAlt")}
              width={600}
              height={600}
              className="object-contain max-w-sm lg:max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}