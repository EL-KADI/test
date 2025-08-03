import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionNine() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/toolfour.svg",
      title: t("featuresNine.multilingualSites"),
      alt: t("featuresNine.iconAlt"),
      width: 95,
      height: 95,
    },
    {
      image: "/toolthree.svg",
      title: t("featuresNine.languageSupport"),
      alt: t("featuresNine.iconAlt"),
      width: 75,
      height: 75,
    },
    {
      image: "/tooltwo.svg",
      title: t("featuresNine.responsiveDesign"),
      alt: t("featuresNine.iconAlt"),
      width: 125,
      height: 125,
    },
    {
      image: "/toolone.svg",
      title: t("featuresNine.easyTool"),
      alt: t("featuresNine.iconAlt"),
      width: 145,
      height: 145,
    },
    {
      image: "/tooleight.svg",
      title: t("featuresNine.videoTutorials"),
      alt: t("featuresNine.iconAlt"),
      width: 80,
      height: 80,
    },
    {
      image: "/toolseven.svg",
      title: t("featuresNine.plugins"),
      alt: t("featuresNine.iconAlt"),
      width: 70,
      height: 70,
    },
    {
      image: "/toolsix.svg",
      title: t("featuresNine.millionTemplates"),
      alt: t("featuresNine.iconAlt"),
      width: 75,
      height: 75,
    },
    {
      image: "/toolfive.svg",
      title: t("featuresNine.siteMigration"),
      alt: t("featuresNine.iconAlt"),
      width: 75,
      height: 75,
    },
  ];

  return (
    <div className="relative my-64">
      <Image
        className="absolute top-0 right-0 -z-10"
        alt={t("featuresNine.rightImageAlt")}
        src="/Rbg.svg"
        width={393}
        height={636}
      />
      <Image
        className="absolute top-0 left-0 -z-10"
        alt={t("featuresNine.leftImageAlt")}
        src="/Lbg.svg"
        width={393}
        height={636}
      />
      <h1 className="lg:text-4xl text-xl mb-6 text-center">
        {t("featuresNine.title")}
      </h1>
      <p className="mt-4 text-center">{t("featuresNine.description")}</p>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105"
            >
              <Image
                alt={feature.alt}
                src={feature.image}
                width={feature.width}
                height={feature.height}
              />
              <h1 className="text-center text-xs">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
