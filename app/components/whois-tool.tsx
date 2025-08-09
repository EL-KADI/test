"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function WhoisTool() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="relative">
  
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8 mt-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <Image
        loading="lazy"
          className="w-5/6 me-auto"
          alt={t("whoisTool.groupImageAlt")}
          src="/Group1.svg"
          width={500}
          height={300}
        />
        <div>
          <h1 className="text-3xl font-semibold">{t("whoisTool.whatIsWhoisTitle")}</h1>
          <p className="mt-8 font-normal text-sm text-primary">
            {t("whoisTool.whatIsWhoisDescription")}
          </p>
        </div>
      </div>
      <div className="container mt-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div>
            <h1 className="text-3xl font-semibold">{t("whoisTool.howItWorksTitle")}</h1>
            <p className="mt-8 font-normal text-sm text-primary">
              {t("whoisTool.howItWorksDescription")}
            </p>
          </div>
          <Image
          loading="lazy"
            className="w-5/6 ms-auto"
            alt={t("whoisTool.sslWhoisImageAlt")}
            src="/ssl-whois.svg"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}