import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionCommerce() {
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
    <div className="relative mt-44  mx-auto">
      <Image
        width={400}
        height={400}
        className="absolute lg:-top-60 -top-20 sm:-top-20 md:-top-28 -z-10 w-full object-cover"
        alt={t("featuresSectionThree.rightImageAlt")}
        src="/big-blocks.svg"  
         loading="lazy"
      />
      <h1 className="lg:text-4xl font-bold md:font-normal text-3xl mb-6 text-center">
        {t("featuresSectionThree.title")}
      </h1>
      <p className="mt-4 text-center">
        {t("featuresSectionThree.description")}
      </p>
      <div className="container mx-auto max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105"
            >
              <Image
                width={feature.width} 
                  height={feature.width}
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt}
                className="w-18 h-18 object-contain"   loading="lazy"
              />
              <h1 className="text-center text-xs">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
