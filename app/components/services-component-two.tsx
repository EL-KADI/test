import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function ServicesComponent() {
  const { t } = useLanguage();

  const services = [
    {
      image: "/stats.svg",
      title: t("services.reliableHosting"),
      description: t("services.reliableHostingDesc"),
      alt: t("services.reliableHostingAlt"),
    },
    {
      image: "/protect.svg",
      title: t("services.scalableStorage"),
      description: t("services.scalableStorageDesc"),
      alt: t("services.scalableStorageAlt"),
    },
    {
      image: "/mouse.svg",
      title: t("services.enterpriseHosting"),
      description: t("services.enterpriseHostingDesc"),
      alt: t("services.enterpriseHostingAlt"),
    },
  ];

  return (
    <div className="relative mt-32">
      <h1 className="lg:text-4xl text-[#2b1f51] font-bold text-xl mb-20 text-center">{t("servicesTwo.title")}</h1>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg px-6 py-6 flex items-start shadow-[0_0_20px_0_rgba(0,0,0,0.08)] flex-col gap-4 justify-between transition hover:scale-105"
            >
              <Image
                className="relative"
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