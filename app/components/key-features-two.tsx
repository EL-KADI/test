"use client";
import Link from "next/link";
import { useLanguage } from "../../contexts/language-context";
import Image from "next/image";

const KeyFeaturesTwo = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      title: t("keyFeaturesTwo.cloudHostingTitle"),
      description: t("keyFeaturesTwo.cloudHostingDescription"),
      image: "/hosting-cloud-sh.svg",
      alt: t("keyFeaturesTwo.cloudHostingAlt"),
    },
    {
      title: t("keyFeaturesTwo.lsSuiteTitle"),
      description: t("keyFeaturesTwo.lsSuiteDescription"),
      image: "/ls-email.svg",
      alt: t("keyFeaturesTwo.lsSuiteAlt"),
    },
    {
      title: t("keyFeaturesTwo.jpaasTitle"),
      description: t("keyFeaturesTwo.jpaasDescription"),
      image: "/jpaas.svg",
      alt: t("keyFeaturesTwo.jpaasAlt"),
    },
  ];

  return (
    <div className="relative mt-32" dir={isRTL ? "rtl" : "ltr"}>
      <Image
      width={393}
      height={636}
      loading="lazy"
        className={`absolute -top-12 ${isRTL ? "left-0" : "right-0"} -z-10`}
        alt={t("mainFeatures.backgroundRightAlt")}
        src="/Lbg.svg"
      />
      <Image
      width={393}
      height={636}
      loading="lazy"
        className={`absolute -top-12 ${isRTL ? "right-0" : "left-0"} -z-10`}
        alt={t("mainFeatures.backgroundLeftAlt")}
        src="/Rbg.svg"
      />
      <h1
        className="lg:text-4xl text-xl mb-6 text-center font-semibold "
      >
        {t("keyFeaturesTwo.mainTitle")}
      </h1>
      <p
        className={`mt-8 text-center mb-16 lg:w-1/2 mx-auto ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("keyFeaturesTwo.mainDescription")}
      </p>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start shadow-light flex-col gap-4 justify-between transition hover:scale-105"
            >
              <Image
              width={70}
              height={70}
              loading="lazy"
                className="relative"
                alt={feature.alt}
                src={feature.image}
              />
              <div>
                <h1
                  className={`mb-6 text-xl ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {feature.title}
                </h1>
                <p
                  className={`text-sm opacity-50 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
              <Link
                className={`flex items-center gap-2 text-blue-600 hover:text-blue-900 duration-300 ${
                  isRTL
                    ? "hover:-translate-x-1 flex-row"
                    : "hover:translate-x-1 flex-row-reverse"
                } rounded-md w-fit`}
                href="#"
              >
                {t("keyFeaturesTwo.learnMore")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesTwo;
