import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionFour() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/work-across-platforms.svg",
      alt: t("featuresSectionFour.feature.crossPlatformAlt"),
      title: t("featuresSectionFour.feature.crossPlatform"),
      width:"88px"
    },
    {
      image: "/ddos-mitigation.svg",
      alt: t("featuresSectionFour.feature.ddosMitigationAlt"),
      title: t("featuresSectionFour.feature.ddosMitigation"),
       width:"80px"
    },
    {
      image: "/malware-detection.svg",
      alt: t("featuresSectionFour.feature.malwareRemovalAlt"),
      title: t("featuresSectionFour.feature.malwareRemoval"),
       width:"58px"
    },
    {
      image: "/ssl-certificate.svg",
      alt: t("featuresSectionFour.feature.sslCertificateAlt"),
      title: t("featuresSectionFour.feature.sslCertificate"),
       width:"60px"
    },
    {
      image: "/security-monitoring.svg",
      alt: t("featuresSectionFour.feature.securityMonitoringAlt"),
      title: t("featuresSectionFour.feature.securityMonitoring"),
       width:"88px"
    },
    {
      image: "/performance-optimization.svg",
      alt: t("featuresSectionFour.feature.performanceOptimizationAlt"),
      title: t("featuresSectionFour.feature.performanceOptimization"), 
      width:"88px"
    },
  ];

  return (
    <div className="relative mt-32 bg-gray-50 py-16">
      <h1 className="text-2xl lg:text-4xl mb-6 text-center font-semibold text-gray-800">{t("featuresSectionFour.title")}</h1>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto px-4">{t("featuresSectionFour.description")}</p>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-md transition hover:scale-105 hover:shadow-lg"
            >
             <Image src={feature.image} alt={feature.alt} width={parseInt(feature.width)} height={parseInt(feature.width)} />
              <h2 className="text-center  text-base font-medium text-gray-700">{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}