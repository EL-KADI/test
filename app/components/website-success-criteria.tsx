"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function WebsiteSuccessCriteria() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
        <h1 className="lg:text-4xl text-xl mb-6 lg:translate-y-24 text-white text-center">
          {t("websiteSuccessCriteria.sslTitle")}
        </h1>
        <p className="text-white text-center lg:translate-y-24">
          {t("websiteSuccessCriteria.sslDescription")}
        </p>
        <div className="bg-white hover:bg-transparent lg:translate-y-24 transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
          <p>{t("websiteSuccessCriteria.signUpNow")}</p>
        </div>
      </div>
      <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
        <h1 className="lg:text-4xl text-xl mb-6 lg:translate-y-24 text-white text-center">
          {t("websiteSuccessCriteria.cloudflareTitle")}
        </h1>
        <p className="text-white text-center lg:translate-y-24">
          {t("websiteSuccessCriteria.cloudflareDescription")}
        </p>
        <div className="bg-white hover:bg-transparent lg:translate-y-24 transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
          <p>{t("websiteSuccessCriteria.signUpNow")}</p>
        </div>
      </div>
      <div className="mt-24 mb-10 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 className="lg:text-2xl font-bold text-xl mb-6 text-black text-center">
          {t("websiteSuccessCriteria.cloudflareEnhanceTitle")}
        </h1>
        <p className="text-black/80 font-light text-center">
          {t("websiteSuccessCriteria.cloudflareEnhanceDescription")}
        </p>
      </div>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h2 className="text-center font-bold mb-12 text-2xl">
          {t("websiteSuccessCriteria.mainTitle")}
        </h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="md:col-span-1 col-span-3">
            <h2 className="text-xl font-bold">{t("websiteSuccessCriteria.performanceTitle")}</h2>
            <div>
              <p className="mt-4 cursor-pointer py-2 px-4 w-fit bg-[#E6F0FD] rounded-lg">
                {t("websiteSuccessCriteria.globalSpeedBoost")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.contentDelivery")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.loadBalancing")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.latencyReduction")}
              </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <div className="md:mt-12 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] bg-white py-8 px-12 rounded-lg flex items-start justify-start gap-8 flex-col shadow-light transition hover:scale-105">
              <Image
              loading="lazy"
                src="/global-speed-boost-icon.svg"
                alt={t("websiteSuccessCriteria.globalSpeedBoostIconAlt")}
                width={82}
                height={60}
              />
              <h1 className="text-xs">{t("websiteSuccessCriteria.globalSpeedBoostDescription")}</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-1 col-span-3">
            <h2 className="text-xl font-bold">{t("websiteSuccessCriteria.securityTitle")}</h2>
            <div>
              <p className="mt-4 cursor-pointer py-2 px-4 w-fit bg-[#E6F0FD] rounded-lg">
                {t("websiteSuccessCriteria.ddosProtection")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.webApplicationFirewall")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.sslTlsEncryption")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.botManagement")}
              </p>
              <p className="mt-4 font-thin cursor-pointer py-2 px-4 w-fit">
                {t("websiteSuccessCriteria.realTimeThreatAnalysis")}
              </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <div className="md:mt-12 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] bg-white py-8 px-12 rounded-lg flex items-start justify-start gap-8 flex-col shadow-light transition hover:scale-105">
              <Image
              loading="lazy"
                src="/advantage-ddos.svg"
                alt={t("websiteSuccessCriteria.securityIconAlt")}
                width={48}
                height={60}
              />
              <h1 className="text-xs">{t("websiteSuccessCriteria.ddosProtectionDescription")}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}