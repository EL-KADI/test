import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionSix() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/work-across-platforms.svg",
      title: t("featuresSectionSix.feature.crossPlatform"),
      alt: t("featuresSectionSix.feature.crossPlatformAlt"),
    },
    {
      image: "/ddos-mitigation.svg",
      title: t("featuresSectionSix.feature.ddosMitigation"),
      alt: t("featuresSectionSix.feature.ddosMitigationAlt"),
    },
    {
      image: "/malware-detection.svg",
      title: t("featuresSectionSix.feature.malwareDetection"),
      alt: t("featuresSectionSix.feature.malwareDetectionAlt"),
    },
    {
      image: "/ssl-certificate.svg",
      title: t("featuresSectionSix.feature.sslCertificate"),
      alt: t("featuresSectionSix.feature.sslCertificateAlt"),
    },
    {
      image: "/security-monitoring.svg",
      title: t("featuresSectionSix.feature.securityMonitoring"),
      alt: t("featuresSectionSix.feature.securityMonitoringAlt"),
    },
    {
      image: "/performance-optimization.svg",
      title: t("featuresSectionSix.feature.performanceOptimization"),
      alt: t("featuresSectionSix.feature.performanceOptimizationAlt"),
    },
  ];

  return (
    <div className="relative mt-96 py-16">
      <div
        className="absolute xl:-top-80 -top-16 sm:-top-28 md:-top-40 lg:-top-52 inset-0 w-[85%] mx-auto pointer-events-none -z-10 bg-top bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/cloud.svg')`,
        }}
      ></div>
      <div className="mt-16">
        <h1 className="text-2xl lg:text-4xl mb-6 text-center font-semibold text-gray-800">
          {t("featuresSectionSix.title")}
        </h1>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto px-4">
          {t("featuresSectionSix.description")}
        </p>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={54}
                  height={54}
                />
                <h2 className="text-center text-base font-medium text-gray-700">
                  {feature.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}