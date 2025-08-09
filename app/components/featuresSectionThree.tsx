import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionThree() {
  const { t } = useLanguage();

  const features = [
     {
      image: "/advantage-support.svg",
      title: t("featuresSectionThree.feature.windowsLinuxSupport"),
      alt: t("featuresSectionThree.feature.windowsLinuxSupportAlt"),
      width: 62,
    },
    {
      image: "/advantage-ddos.svg",
      title: t("featuresSectionThree.feature.ddosProtection"),
      alt: t("featuresSectionThree.feature.ddosProtectionAlt"),
      width: 52,
    },
    {
      image: "/advantage-ssl.svg",
      title: t("featuresSectionThree.feature.sslTlsCertificate"),
      alt: t("featuresSectionThree.feature.sslTlsCertificateAlt"),
      width: 48,
    },
    {
      image: "/advantage-plan.svg",
      title: t("featuresSectionThree.feature.backupPlans"),
      alt: t("featuresSectionThree.feature.backupPlansAlt"),
      width: 75,
    },
    {
      image: "/advantage-global.svg",
      title: t("featuresSectionThree.feature.globalDataCenters"),
      alt: t("featuresSectionThree.feature.globalDataCentersAlt"),
      width: 67,
    },
    {
      image: "/advantage-ip.svg",
      title: t("featuresSectionThree.feature.dedicatedIp"),
      alt: t("featuresSectionThree.feature.dedicatedIpAlt"),
      width: 83,
    },
    {
      image: "/advantage-community.svg",
      title: t("featuresSectionThree.feature.network10Gbit"),
      alt: t("featuresSectionThree.feature.network10GbitAlt"),
      width: 70,
    },
    {
      image: "/advantage-windows.svg",
      title: t("featuresSectionThree.feature.windowsServerSupport"),
      alt: t("featuresSectionThree.feature.windowsServerSupportAlt"),
      width: 73,
    },
  ];

  return (
    <div className="relative mt-44">
      <Image
        width={500}
        height={500}
        loading="lazy"
        className="absolute top-0 right-0 -z-10"
        alt={t("featuresSectionThree.rightImageAlt")}
        src="/Rbg.svg"
      />
      <Image
        width={500}
        height={500}
        loading="lazy"
        className="absolute top-0 left-0 -z-10"
        alt={t("featuresSectionThree.leftImageAlt")}
        src="/Lbg.svg"
      />
      <h1 className="lg:text-4xl text-xl mb-6 text-center">{t("featuresSectionThree.title")}</h1>
      <p className="mt-4 text-center">{t("featuresSectionThree.description")}</p>
      <div className="container mx-auto px-4 max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105"
            >
              <Image
        width={50}
        height={50}
        loading="lazy"
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt}
                className="w-20 h-20 object-contain"
              />
              <h1 className="text-center text-xs">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}