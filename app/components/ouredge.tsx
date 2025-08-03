import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function OurEdge() {
  const { t ,isRTL } = useLanguage();

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 z-50 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-6">{t("ourEdge.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:px-28 max-w-7xl mx-auto" dir="ltr">
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/img_gearicon_1.svg"
                  alt={t("ourEdge.performanceAlt")}
                  width={75}
                  height={65}
                  className={`w-[60px]  ${isRTL ? "ms-auto " : "me-auto"}`}
                />
              </div>
              <h3 dir={isRTL ? "rtl" : "ltr"} className={`lg:text-lg text-base font-semibold mb-4  ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.cdnPerformance")}</h3>
              <p dir={isRTL ? "rtl" : "ltr"} className={`lg:text-sm text-xs text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.cdnPerformanceDesc")}</p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/img_performanceicon_1.svg"
                  alt={t("ourEdge.ddosProtectionAlt")}
                  width={75}
                  height={74}
                 className={`w-[65px]  ${isRTL ? "ms-auto " : "me-auto"}`}
                />
              </div>
              <h3 dir={isRTL ? "rtl" : "ltr"} className={`lg:text-lg text-base font-semibold mb-4  ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.ddosMitigation")}</h3>
              <p dir={isRTL ? "rtl" : "ltr"} className={`lg:text-sm text-xs text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.ddosMitigationDesc")}</p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/img_securityicon_1.svg"
                  alt={t("ourEdge.securityAlt")}
                  width={77}
                  height={56}
                   className={`w-12  ${isRTL ? "ms-auto " : "me-auto"}`}
                />
              </div>
              <h3 dir={isRTL ? "rtl" : "ltr"} className={`lg:text-lg text-base font-semibold mb-4  ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.securityProtection")}</h3>
              <p dir={isRTL ? "rtl" : "ltr"} className={`lg:text-sm text-xs text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.securityProtectionDesc")}</p>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-28 max-w-7xl mx-auto" dir="ltr">
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/img_visitorsicon_1.svg"
                  alt={t("ourEdge.visitorsAlt")}
                  width={75}
                  height={36}
                  className={`w-12 h-[75px]  ${isRTL ? "ms-auto " : "me-auto"}`}
                />
              </div>
              <h3 dir={isRTL ? "rtl" : "ltr"} className={`lg:text-lg text-base font-semibold mb-4  ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.cdnPerformance")}</h3>
              <p dir={isRTL ? "rtl" : "ltr"} className={`lg:text-sm text-xs text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.cdnPerformanceDesc")}</p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/img_easetouseicon_1.svg"
                  alt={t("ourEdge.easeOfUseAlt")}
                  width={74}
                  height={78}
                   className={`w-18 h-18  ${isRTL ? "ms-auto " : "me-auto"}`}
                />
              </div>
              <h3 dir={isRTL ? "rtl" : "ltr"} className={`lg:text-lg text-base font-semibold mb-4  ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.ddosMitigation")}</h3>
              <p dir={isRTL ? "rtl" : "ltr"} className={`lg:text-sm text-xs text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.ddosMitigationDesc")}</p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                  src="/img_growthicon_1.svg"
                  alt={t("ourEdge.growthAlt")}
                  width={88}
                  height={65}
                  className={`w-[54px]  ${isRTL ? "ms-auto " : "me-auto"}`}
                />
              </div>
              <h3 dir={isRTL ? "rtl" : "ltr"} className={`lg:text-lg text-base font-semibold mb-4  ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.securityProtection")}</h3>
              <p dir={isRTL ? "rtl" : "ltr"} className={`lg:text-sm text-xs text-gray-600 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("ourEdge.securityProtectionDesc")}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}