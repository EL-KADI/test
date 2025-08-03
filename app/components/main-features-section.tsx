import { useLanguage } from "../../contexts/language-context";

export default function MainFeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/work-acroos.svg",
      title: t("mainFeatures.crossPlatform"),
      alt: t("mainFeatures.crossPlatformAlt"),
    },
    {
      image: "/cloud-check-icon.svg",
      title: t("mainFeatures.ddosMitigation"),
      alt: t("mainFeatures.ddosMitigationAlt"),
    },
    {
      image: "/privacy-protection.svg",
      title: t("mainFeatures.malwareDetection"),
      alt: t("mainFeatures.malwareDetectionAlt"),
    },
    {
      image: "/ssl-certificate.svg",
      title: t("mainFeatures.sslCertificate"),
      alt: t("mainFeatures.sslCertificateAlt"),
    },
    {
      image: "/hashed.svg",
      title: t("mainFeatures.securityMonitoring"),
      alt: t("mainFeatures.securityMonitoringAlt"),
    },
    {
      image: "/counter.svg",
      title: t("mainFeatures.performanceOptimization"),
      alt: t("mainFeatures.performanceOptimizationAlt"),
    },
  ];

  return (
    <div className="relative mb-32 mt-72">
      <img
        className="absolute bottom-4 right-0 -z-10"
        src="/Rbg.svg"
        alt={t("mainFeatures.backgroundRightAlt")}
      />
      <img
        className="absolute bottom-4 left-0 -z-10"
        src="/Lbg.svg"
        alt={t("mainFeatures.backgroundLeftAlt")}
      />
      <h1 className="lg:text-2xl text-xl mb-6 text-center font-semibold">{t("mainFeatures.title")}</h1>
      <p className="mt-4 text-center">{t("mainFeatures.description")}</p>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
            >
              <img src={feature.image} alt={feature.alt} />
              <h1 className="text-center text-xs">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}