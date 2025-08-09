import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function PricingTwoSection() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricingSection.planName"),
      price: "91.30", 
      period: t("pricingSection.pricePeriod"),
      borderColorClass: "border-[#FBE06B]",
      features: [
        t("pricingSection.feature.nvmeStorage"),
        t("pricingSection.feature.websites"),
        t("pricingSection.feature.ram"),
        t("pricingSection.feature.cpu"),
        t("pricingSection.feature.cpanel"),
        t("pricingSection.feature.subdomains"),
        t("pricingSection.feature.databases"),
        t("pricingSection.feature.email"),
        t("pricingSection.feature.ftp"),
        t("pricingSection.feature.oneClickInstaller"),
      ],
    },
    {
      name: t("pricingSection.planName"),
      price: "91.30",
      period: t("pricingSection.pricePeriod"),
      borderColorClass: "border-[#E5E7EB]",
      features: [
        t("pricingSection.feature.nvmeStorage"),
        t("pricingSection.feature.websites"),
        t("pricingSection.feature.ram"),
        t("pricingSection.feature.cpu"),
        t("pricingSection.feature.cpanel"),
        t("pricingSection.feature.subdomains"),
        t("pricingSection.feature.databases"),
        t("pricingSection.feature.email"),
        t("pricingSection.feature.ftp"),
        t("pricingSection.feature.oneClickInstaller"),
      ],
    },
    {
      name: t("pricingSection.planName"),
      price: "91.30",
      period: t("pricingSection.pricePeriod"),
      borderColorClass: "border-[#7F6FCB]",
      features: [
        t("pricingSection.feature.nvmeStorage"),
        t("pricingSection.feature.websites"),
        t("pricingSection.feature.ram"),
        t("pricingSection.feature.cpu"),
        t("pricingSection.feature.cpanel"),
        t("pricingSection.feature.subdomains"),
        t("pricingSection.feature.databases"),
        t("pricingSection.feature.email"),
        t("pricingSection.feature.ftp"),
        t("pricingSection.feature.oneClickInstaller"),
      ],
    },
  ];

  return (
    <div className="lg:mt-32 mt-52 relative">
      <Image
        className="absolute right-0 -top-52 -z-10"
        alt={t("pricingSection.rightBlocksAlt")}
        src="/Rbg.svg"
        width={400}
        height={400}  loading="lazy"
      />
      <Image
        className="absolute left-0 -top-52 -z-10"
        alt={t("pricingSection.leftBlocksAlt")}
        src="/Lbg.svg"
        width={400}
        height={400}  loading="lazy"
      />
      <div className="container mx-auto px-4  max-w-sm  sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <h1 className="lg:text-4xl text-xl lg:mb-16 mb-7 text-center font-bold">
          {t("pricingSection.choosePlan")}
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 xl:gap-16 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-md bg-white border-t-8 text-center p-8 shadow-transparent !shadow-lg transition hover:scale-105 ${plan.borderColorClass}`}
            >
              <h1 className="text-3xl ms-4 font-semibold">{plan.name}</h1>
              <h1 className="mt-4 lg:text-6xl md:text-4xl text-2xl font-light">
                {plan.price}
              </h1>
              <p className="opacity-40 mb-4">{plan.period}</p>
              <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse">
                {/* Placeholder for additional content if needed */}
              </div>
              <div className="mt-8 mx-auto">
                <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2B1F51] hover:border-2 hover:border-[#2B1F51] text-white rounded-md px-12 w-fit mx-auto cursor-pointer py-3">
                  <p>{t("pricingSection.orderNow")}</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="w-full h-[3px] bg-[black] bg-opacity-5"></div>
                <div className="text-start mt-4">
                  {plan.features.map((feature, featureIndex) => (
                    <h1 key={featureIndex} className="mt-4">
                      <strong>{feature.split(" ")[0]}</strong>{" "}
                      {feature.substring(feature.indexOf(" ") + 1)}
                    </h1>
                  ))}
                </div>
                <div className="w-full h-[2px] bg-[black] bg-opacity-5 mt-8"></div>
                <p className="mt-8 text-center">{t("pricingSection.comparePackages")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}