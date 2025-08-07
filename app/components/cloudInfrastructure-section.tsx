import { useLanguage } from "../../contexts/language-context";
import Image from 'next/image';

export default function CloudInfrastructureSection() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/scale.svg",
      title: t("cloudInfrastructure.loadMetrics"),
      alt: t("cloudInfrastructure.loadMetricsAlt"),
    },
    {
      image: "/network.svg",
      title: t("cloudInfrastructure.networking"),
      alt: t("cloudInfrastructure.networkingAlt"),
    },
    {
      image: "/storage.svg",
      title: t("cloudInfrastructure.storageSizes"),
      alt: t("cloudInfrastructure.storageSizesAlt"),
    },
    {
      image: "/virtua.svg",
      title: t("cloudInfrastructure.virtualServers"),
      alt: t("cloudInfrastructure.virtualServersAlt"),
    },
  ];

  return (
    <div className="relative lg:mt-32 mt-16">
      <Image
        className="absolute w-[15%] top-0 right-0 -z-10"
        alt={t("cloudInfrastructure.backgroundAlt")}
        src="RightCloudBg.svg"
        width={300}
        height={300}
      />
      <Image
        className="absolute w-[15%] top-0 left-0 -z-10"
        alt={t("cloudInfrastructure.backgroundAlt")}
        src="/LeftCloudBg.svg"
        width={300}
        height={300}
      />
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="lg:text-2xl text-xl mb-6 text-center">{t("cloudInfrastructure.title")}</h1>
          <p className="lg:w-1/2 mx-auto mb-3 opacity-50">{t("cloudInfrastructure.description")}</p>
          <p className="opacity-50">{t("cloudInfrastructure.tools")}</p>
          <p className="opacity-50">{t("cloudInfrastructure.resources")}</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 grid-cols-2 gap-8 lg:gap-0">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 justify-center flex-col">
              <Image src={feature.image} alt={feature.alt} width={48} height={48} />
              <h1 className="font-bold">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}