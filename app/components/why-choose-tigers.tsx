import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function WhyChooseTigers() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      title: t("whyChooseTigers.feature.emailBlocking"),
      description: t("whyChooseTigers.feature.emailBlockingDesc"),
      image: "/email.svg",
      imageAlt: t("whyChooseTigers.feature.emailBlockingAlt"),
    },
    {
      id: 2,
      title: t("whyChooseTigers.feature.realTimeMonitoring"),
      description: t("whyChooseTigers.feature.realTimeMonitoringDesc"),
      image: "/chat.svg",
      imageAlt: t("whyChooseTigers.feature.realTimeMonitoringAlt"),
    },
    {
      id: 3,
      title: t("whyChooseTigers.feature.brandEnhancement"),
      description: t("whyChooseTigers.feature.brandEnhancementDesc"),
      image: "/star.svg",
      imageAlt: t("whyChooseTigers.feature.brandEnhancementAlt"),
    },
    {
      id: 4,
      title: t("whyChooseTigers.feature.emailDelivery"),
      description: t("whyChooseTigers.feature.emailDeliveryDesc"),
      image: "/email2.svg",
      imageAlt: t("whyChooseTigers.feature.emailDeliveryAlt"),
    },
  ];

  return (
    <div className="relative mt-40 mb-16">
      <Image
              width={500}
              height={500}
              loading="lazy"
        className="absolute right-0 -z-10 -top-[150px]"
        alt="Right Background"
        src="/Rbg.svg"
      />
      <Image
              width={500}
              height={500}
              loading="lazy"
        className="absolute left-0 -z-10 -top-[150px]"
        alt="Left Background"
        src="/Lbg.svg"
      />
      <div className="container max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 className="lg:text-4xl text-xl mb-6 text-center">
          {t("whyChooseTigers.title")}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)] px-6 py-6 flex items-start gap-4 shadow-light flex-col gap-y-6 transition hover:scale-105"
            >
              <Image
                   width={80}
                height={80}
                loading="lazy"
                className="relative w-20 h-20"
                src={feature.image}
                alt={feature.imageAlt}
              />
              <div>
                <h1 className="mb-6 text-xl">{feature.title}</h1>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}