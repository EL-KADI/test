"use client";
import Link from "next/link";
import { useLanguage } from "../../contexts/language-context";

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
      <img
        className={`absolute -top-12 ${isRTL ? "left-0" : "right-0"} -z-10`}
        alt={t("mainFeatures.backgroundRightAlt")}
        src="data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77870)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M330.305%20134.66L468%2071.9882L330.305%200L192.61%2071.9882L330.305%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M192.61%2071.9883V427.472L330.305%20489.904V134.658L192.61%2071.9883Z'%20fill='url(%23paint0_linear_9_77870)'/%3e%3cpath%20d='M468%2071.9883L330.305%20134.659V489.901L468%20409.631'%20fill='url(%23paint1_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint2_linear_9_77870)'/%3e%3cpath%20d='M137.695%20280.76L275.391%20218.09L137.695%20146.102L0.00302124%20218.09L137.695%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M7.62939e-05%20218.09V573.573L137.695%20636.005V280.761L7.62939e-05%20218.09Z'%20fill='url(%23paint3_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint4_linear_9_77870)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77870'%20x1='268.204'%20y1='547.158'%20x2='156.896'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77870'%20x1='380.564'%20y1='287.631'%20x2='562.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77870'%20x1='75.5948'%20y1='693.26'%20x2='-35.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77870'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='matrix(-1%200%200%201%20468%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
      />
      <img
        className={`absolute -top-12 ${isRTL ? "right-0" : "left-0"} -z-10`}
        alt={t("mainFeatures.backgroundLeftAlt")}
        src="data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77861)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M62.6952%20134.66L-75%2071.9882L62.6952%200L200.39%2071.9882L62.6952%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M200.39%2071.9883V427.472L62.6953%20489.904V134.658L200.39%2071.9883Z'%20fill='url(%23paint0_linear_9_77861)'/%3e%3cpath%20d='M-75%2071.9883L62.6952%20134.659V489.901L-75%20409.631'%20fill='url(%23paint1_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint2_linear_9_77861)'/%3e%3cpath%20d='M255.305%20280.76L117.609%20218.09L255.305%20146.102L392.997%20218.09L255.305%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M393%20218.09V573.573L255.305%20636.005V280.761L393%20218.09Z'%20fill='url(%23paint3_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint4_linear_9_77861)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77861'%20x1='124.796'%20y1='547.158'%20x2='236.104'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77861'%20x1='12.4365'%20y1='287.631'%20x2='-169.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77861'%20x1='317.405'%20y1='693.26'%20x2='428.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77861'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='translate(-75)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
      />
      <h1
        className={`lg:text-4xl text-xl mb-6 text-center font-semibold ${
          isRTL ? "text-right" : "text-left"
        }`}
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
              <img
                className="relative before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0"
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
