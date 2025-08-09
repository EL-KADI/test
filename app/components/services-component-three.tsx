import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function ServicesComponentThree() {
  const { t } = useLanguage();

  const services = [
    {
      image: "/stats.svg",
      title: t("servicesThree.reliableStaticHosting"),
      description: t("servicesThree.reliableStaticHostingDesc"),
      alt: t("servicesThree.reliableStaticHostingAlt"),
    },
    {
      image: "/servers.svg",
      title: t("servicesThree.scalableCloudStorage"),
      description: t("servicesThree.scalableCloudStorageDesc"),
      alt: t("servicesThree.scalableCloudStorageAlt"),
    },
    {
      image: "/counter.svg",
      title: t("servicesThree.enterpriseStaticHosting"),
      description: t("servicesThree.enterpriseStaticHostingDesc"),
      alt: t("servicesThree.enterpriseStaticHostingAlt"),
    },
  ];

  return (
    <div className="relative mt-32">
      <h1 className="lg:text-4xl text-xl mb-16 text-[#2b1f51] font-bold text-center">
        {t("servicesThree.title")}
      </h1>
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