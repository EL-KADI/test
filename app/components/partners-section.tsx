"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function PartnersSection() {
  const { t, isRTL } = useLanguage();

  const partners = [
    {
      name: t("partnersSection.sucuriName"),
      logo: "/SUCURI.svg",
      description: t("partnersSection.sucuriDescription"),
    },
    {
      name: t("partnersSection.softaculousName"),
      logo: "/Layer.svg",
      description: t("partnersSection.softaculousDescription"),
    },
    {
      name: t("partnersSection.linuxName"),
      logo: "/Linux.svg",
      description: t("partnersSection.linuxDescription"),
    },
  ];

  return (
    <div className="w-full relative z-0 mx-auto px-4 py-12">
      <Image
        className="absolute -top-32 right-0 -z-0"
        alt={t("partnersSection.rightBackgroundAlt")}
        src="/Rbg.svg"
        width={500}
        height={500}  loading="lazy"
      />
      <Image
        className="absolute -top-32 left-0 -z-0"
        alt={t("partnersSection.leftBackgroundAlt")}
        src="/Lbg.svg"
        width={500}
        height={500}  loading="lazy"
      />
      <h2 className="text-3xl relative z-0 font-bold text-center mb-12 text-gray-800">
        {t("partnersSection.mainTitle")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-0 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={`partner-${index}`}
            className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={t(`partnersSection.${partner.name.toLowerCase()}LogoAlt`)}
                width={180}
                height={140}
                className="object-contain"  loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {partner.name}
            </h3>
            <p
              className={`text-gray-600 text-sm leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-8 relative z-0 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={`partner-${index}`}
            className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={t(`partnersSection.${partner.name.toLowerCase()}LogoAlt`)}
                width={180}
                height={140}
                className="object-contain"  loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {partner.name}
            </h3>
            <p
              className={`text-gray-600 text-sm leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-0 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={`partner-${index}`}
            className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={t(`partnersSection.${partner.name.toLowerCase()}LogoAlt`)}
                width={180}
                height={140}
                className="object-contain"  loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {partner.name}
            </h3>
            <p
              className={`text-gray-600 text-sm leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}