import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <div className="relative mt-64">
      <Image
        src="/big-blocks.svg"
        alt={t("featuresSection.backgroundDecorationAlt")}
        width={800}
        height={400}
        className="absolute -top-60 -z-10 w-full object-cover"  loading="lazy"
      />
      <div className="mb-16">
        <h1 className="lg:text-4xl text-xl mb-6 text-center" dir="rtl">
          {t("featuresSection.mainFeatures")}
        </h1>
        <p className="text-center mt-6" dir="rtl">
          {t("featuresSection.description")}
        </p>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Sucuri.svg" alt={t("featuresSection.sucuriAlt")} width={120} height={80} className="w-48" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Layer.svg" alt={t("featuresSection.softaculousAlt")} width={120} height={80} className="w-60" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Linux.svg" alt={t("featuresSection.linuxAlt")} width={120} height={80} className="w-52" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Cpanel-vs.svg" alt={t("featuresSection.cpanelAlt")} width={120} height={80} className="w-48" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Plesk.svg" alt={t("featuresSection.pleskAlt")} width={120} height={80} className="w-64" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Acronis.svg" alt={t("featuresSection.acronisAlt")} width={120} height={80} className="w-44" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Microsoft.svg" alt={t("featuresSection.microsoftAlt")} width={120} height={80} className="w-60" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/Cloudlinux.svg" alt={t("featuresSection.cloudLinuxAlt")} width={120} height={80} className="w-60" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image  loading="lazy" src="/ISP Manager.svg" alt={t("featuresSection.ispManagerAlt")} width={120} height={80} className="w-52" />
          </div>
        </div>
      </div>
    </div>
  );
}