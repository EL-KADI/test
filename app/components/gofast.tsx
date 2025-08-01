import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function GoFast() {
  const { t } = useLanguage();

  return (
    <div className="mt-32 container mx-auto px-4 max-w-6xl">
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-semibold">{t("goFast.title")}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Card 1: Improve Website Performance */}
        <div className="bg-white rounded-lg px-6 py-6 flex flex-col gap-y-6 transition hover:scale-105 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
          <div className="relative pb-2">
            <Image
              src="/improve.svg"
              alt={t("goFast.cdnIconAlt")}
              width={64}
              height={64}
            />
            <div className="absolute bottom-0 left-0 w-16 h-2"></div>
          </div>
          <div>
            <h2 className="mb-6 text-xl">{t("goFast.cdnPerformance")}</h2>
            <p className="text-sm">{t("goFast.cdnPerformanceDesc")}</p>
          </div>
        </div>
        {/* Card 2: DDoS Mitigation */}
        <div className="bg-white rounded-lg px-6 py-6 flex flex-col gap-y-6 transition hover:scale-105 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
          <div className="relative pb-2">
            <Image src="/ddos.svg" alt={t("goFast.ddosIconAlt")} width={64} height={64} />
            <div className="absolute bottom-0 left-0 w-16 h-2"></div>
          </div>
          <div>
            <h2 className="mb-6 text-xl">{t("goFast.ddosMitigation")}</h2>
            <p className="text-sm">{t("goFast.ddosMitigationDesc")}</p>
          </div>
        </div>
        {/* Card 3: Protection from Hacking and Malware */}
        <div className="bg-white rounded-lg px-6 py-6 flex flex-col gap-y-6 transition hover:scale-105 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
          <div className="relative pb-2">
            <Image src="/protection.svg" alt={t("goFast.malwareIconAlt")} width={54} height={54} />
            <div className="absolute bottom-0 left-0 w-16 h-21"></div>
          </div>
          <div>
            <h2 className="mb-6 text-xl">{t("goFast.securityProtection")}</h2>
            <p className="text-sm">{t("goFast.securityProtectionDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}