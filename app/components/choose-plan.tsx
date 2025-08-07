"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function ChoosePlan() {
  const { t } = useLanguage();

  const plans = Array(9).fill({
    title: t("choosePlan.planTitle"),
    price: "91.30",
    currency: t("choosePlan.currency"),
    features: [
      t("choosePlan.validation"),
      t("choosePlan.organization"),
      t("choosePlan.siteSeal"),
      t("choosePlan.dynamic"),
    ],
  });

  return (
    <div className="mt-32 relative">
      <Image
        className="absolute right-0 -top-16 -z-[4]"
        src="/Rbg.svg"
        alt={t("choosePlan.rightBackgroundAlt")}
        width={393}
        height={636}
      />
      <Image
        className="absolute left-0 -top-16 -z-[4]"
        src="/Lbg.svg"
        alt={t("choosePlan.leftBackgroundAlt")}
        width={393}
        height={636}
      />
      <div className="container max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h2 className="text-center text-[#2b1f51] lg:text-4xl text-2xl mb-8">
          {t("choosePlan.mainTitle")}
        </h2>
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-md bg-white border-t-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] border text-center p-8 shadow-transparent ${
                index % 3 === 0
                  ? "border-t-[#FBE06B]"
                  : index % 3 === 1
                  ? "secondary"
                  : "border-t-[#7F6FCB]"
              } transition hover:scale-105`}
            >
              <h1 className="text-3xl ms-4">{plan.title}</h1>
              <h1 className="mt-4 lg:text-6xl md:text-4xl text-2xl font-light">
                {plan.price}
              </h1>
              <p className="opacity-40 mb-4">{plan.currency}</p>
              <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse"></div>
              <div className="text-center text-[#2b1f51]">
                {plan.features.map((feature: string, i: number) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>
              <div className="mt-8 mx-auto">
                <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2b1f51] hover:border-2 hover:border-[#2b1f51] text-white rounded-md px-12 w-fit mx-auto cursor-pointer py-3">
                  <p>{t("choosePlan.orderNow")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
