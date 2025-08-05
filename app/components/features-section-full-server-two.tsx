import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionFullServerTwo() {
  const { t,isRTL } = useLanguage();

  return (
    <div className="relative mt-96">
      <Image
        src="/fullserverbg.svg"
        alt={t("featuresSection.backgroundDecorationAlt")}
        width={800}
        height={400}
        className="absolute xl:-top-72   lg:-top-48 md:-top-40 -top-32 -z-10 w-full object-cover"
      />
      <div className="mb-16">
        <h1 className="lg:text-4xl text-xl mb-6 text-center" dir="rtl">
          {t("featuresSection.mainFeatures")}
        </h1>
    <p className={`text-center mt-6 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {t('standalone.serverDescription')}
    </p>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/Imunify360.svg" alt={t("featuresSection.sucuriAlt")} width={120} height={80} className="w-52" />
          </div>
                
       <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/Cpanel-vs.svg" alt={t("featuresSection.cpanelAlt")} width={120} height={80} className="w-44" />
        </div>
        
         <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/Layer.svg" alt={t("featuresSection.softaculousAlt")} width={120} height={80} className="w-60" />
          </div>
              <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/Linux.svg" alt={t("featuresSection.linuxAlt")} width={120} height={80} className="w-52" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/mailchannels.svg" alt={t("featuresSection.pleskAlt")} width={120} height={80} className="w-64" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/LiteSpeed.svg" alt={t("featuresSection.acronisAlt")} width={120} height={80} className="w-40" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/Microsoft.svg" alt={t("featuresSection.microsoftAlt")} width={120} height={80} className="w-60" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/Cloudlinux.svg" alt={t("featuresSection.cloudLinuxAlt")} width={120} height={80} className="w-60" />
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
            <Image src="/ISP Manager.svg" alt={t("featuresSection.ispManagerAlt")} width={120} height={80} className="w-52" />
          </div>
        </div>
      </div>
    </div>
  );
}