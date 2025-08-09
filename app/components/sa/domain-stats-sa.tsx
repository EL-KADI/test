"use client";
import Image from "next/image";
import { useLanguage } from "../../../contexts/language-context";

export default function DomainStatsSA() {
  const { t,isRTL } = useLanguage();

  return (
    <div className="relative mt-32">
      <Image loading="lazy"
        className="absolute -top-36 right-0 -z-10"
        src="/Rbg.svg"
        alt={t("domainStatsSA.backgroundRightAlt")}
        width={400}
        height={400}
      />
      <Image loading="lazy"
        className="absolute -top-36 left-0 -z-10"
        src="/Lbg.svg"
        alt={t("domainStatsSA.backgroundLeftAlt")}
        width={400}
        height={400}
      />
      <div className="relative container text-black max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 dir={isRTL ? "rtl" : "ltr"} className="lg:text-4xl text-xl mb-6 text-center font-semibold">
          {t("domainStatsSA.title")}
        </h1>
        <p dir={isRTL ? "rtl" : "ltr"} className="text-center text-sm font-light">
          {t("domainStatsSA.description")}
        </p>
        <p className="text-white text-center text-sm font-light mt-4">
          {t("domainStatsSA.chooseDomain")}
        </p>
        <div className="relative">
          <h1 className="text-9xl absolute -top-[85px] left-1/2 transform -translate-x-1/2 -z-[10] text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#E8F2FC] to-[#F9F9F9]/10">
            1.800
          </h1>
          <h1 className="lg:text-4xl text-xl mb-6 text-center mt-20">
            {t("domainStatsSA.achievement")}
          </h1>
        </div>
      </div>
    </div>
  );
}