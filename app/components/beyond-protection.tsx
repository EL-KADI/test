"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function BeyondProtection() {
  const { t } = useLanguage();

  return (
    <div className="relative lg:mt-48 mt-24 sm:mt-40 mx-auto">
      <Image
        className="absolute mx-auto lg:-top-60 sm:-top-28 inset-0 -z-10"
        alt={t("beyondProtection.bigBlocksAlt")}
        src="/big-blocks.svg"
        width={1393}
        height={836}
         loading="lazy"
      />
      <div className="mb-16">
        <h1 className="lg:text-4xl text-xl mb-6 text-center text-primary font-bold">
          {t("beyondProtection.mainTitle")}
        </h1>
        <p className="text-center mt-6">{t("beyondProtection.mainDescription")}</p>
      </div>
      <div className="container  max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start shadow-light flex-col gap-4 justify-between transition hover:scale-105">
            <Image
              className="relative before:absolute before:w-16"
              src="/customer-trust.svg"
              alt={t("beyondProtection.customerTrustAlt")}
              width={80}
              height={80} loading="lazy"
            />
            <div>
              <h1 className="mb-6 text-xl">{t("beyondProtection.browserCompatibilityTitle")}</h1>
              <p className="text-sm">{t("beyondProtection.browserCompatibilityDescription")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light flex-col justify-between transition hover:scale-105">
            <Image
              className="relative before:absolute before:w-16"
              src="/browser-friendly.webp"
              alt={t("beyondProtection.browserFriendlyAlt")}
              width={80}
              height={80}
            />
            <div>
              <h1 className="mb-6 text-xl">{t("beyondProtection.seoTitle")}</h1>
              <p className="text-sm">{t("beyondProtection.seoDescription")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start shadow-light flex-col gap-4 justify-between transition hover:scale-105">
            <Image
              className="relative before:absolute before:w-16"
              src="/seo-increase.svg"
              alt={t("beyondProtection.seoIncreaseAlt")}
              width={80}
              height={80}
            />
            <div>
              <h1 className="mb-6 text-xl">{t("beyondProtection.customerTrustTitle")}</h1>
              <p className="text-sm">{t("beyondProtection.customerTrustDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}