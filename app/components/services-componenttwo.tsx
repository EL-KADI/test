import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function ServicesComponentTwo() {
  const { t } = useLanguage();

  const services = [
    {
      image: "/protect.svg",
      title: t("services.scalableStorageTwo"),
      description: t("services.scalableStorageDescTwo"),
      alt: t("services.scalableStorageAltTwo"),
    },
    {
      image: "/mouse.svg",
      title: t("services.enterpriseHostingTwo"),
      description: t("services.enterpriseHostingDescTwo"),
      alt: t("services.enterpriseHostingAltTwo"),
    },
    {
      image: "/stats.svg",
      title: t("services.reliableHostingTwo"),
      description: t("services.reliableHostingDescTwo"),
      alt: t("services.reliableHostingAltTwo"),
    },
  ];

  return (
    <div className="relative mt-32">
      <Image
        className="absolute right-0 -top-[150px] -z-10"
        alt={t("services.backgroundDecorationAltTwo")}
        src="/Rbg.svg"
        width={393}
        height={636}  loading="lazy"
      />
      <Image
        className="absolute left-0 -top-[150px] -z-10"
        alt={t("services.backgroundDecorationAltTwo")}
        src="/Lbg.svg"
        width={393}
        height={636}  loading="lazy"
      />
      <h1 className="lg:text-4xl text-xl mb-5 text-center">{t("servicesTwo.title")}</h1>
      <p className="lg:text-xl text-base mb-20 text-center text-black/50">{t("servicesTwo.description")}</p>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg px-6 py-6 flex items-start shadow-[0_0_20px_0_rgba(0,0,0,0.08)] flex-col gap-4 justify-between transition hover:scale-105"
            >
              <Image
                className="relative before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0"
                src={service.image}
                alt={service.alt}
                width={60}
                height={60}  loading="lazy"
              />
              <div>
                <h1 className="mb-6 text-xl">{service.title}</h1>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}