"use client";
import Image from "next/image";
import Rbg from "../public/Rbg.svg";
import Lbg from "../public/Lbg.svg";
import IsCloud from "../public/ls-cloud-card.svg";
import CustomCloud from "../public/custom-cloud.svg";
import SpecialServer from "../public/special-server.svg";
import Vps from "../public/Vps.svg";
import Wpaas from "../public/Wpaas.svg";
import Kaas from "../public/Kaas.svg";
import { useLanguage } from "../contexts/language-context";

export default function ServicesSection() {
const { t, isRTL } = useLanguage();
  const services = [
    {
      title: t("servicesCards.dedicatedServers.title"),
      description: t("servicesCards.dedicatedServers.desc"),
      borderColor: "border-[#FBE06B]",
      image: SpecialServer,
    },
    {
      title: t("servicesCards.sharedCloudHosting.title"),
      description: t("servicesCards.sharedCloudHosting.desc"),
      borderColor: "border-[#E5E7EB]",
      image: CustomCloud,
    },
    {
      title: t("servicesCards.webHosting.title"),
      description: t("servicesCards.webHosting.desc"),
      borderColor: "border-[#7F6FCB]",
      image: IsCloud,
    },
    {
      title: t("servicesCards.controlPanelLicense.title"),
      description: t("servicesCards.controlPanelLicense.desc"),
      borderColor: "border-[#594734]",
      image: Kaas,
    },
    {
      title: t("servicesCards.domains.title"),
      description: t("servicesCards.domains.desc"),
      borderColor: "border-[#333C5E]",
      image: Wpaas,
    },
    {
      title: t("servicesCards.vps.title"),
      description: t("servicesCards.vps.desc"),
      borderColor: "border-[#568F5E]",
      image: Vps,
    },
  ];

  return (
    <div className="relative mt-60" dir="rtl">
      <div className="container mt-32 mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-center w-fit mx-auto bg-[#2B1F51] text-white font-bold text-2xl p-2 rounded-xl mb-4">
          {t("servicesSection.title")}
        </h2>
        <h1 className="lg:text-4xl text-xl text-black text-center">
          {t("servicesSection.subtitle")}
        </h1>

        {/* Background Images */}
        <Image
          className="absolute -top-52 right-0 -z-10"
          alt="rightImg"
          src={Rbg}
          width={393}
          height={636}
        />
        <Image
          className="absolute -top-52 left-0 -z-10"
          alt="leftImg"
          src={Lbg}
          width={393}
          height={636}
        />

        {/* Services Grid */}
        <div className="flex justify-center">
          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mx-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-md bg-white border-t-8 text-center pb-8 shadow-transparent ${service.borderColor} !shadow-lg transition hover:scale-105`}
              >
                {/* Service Image */}
                <div className="flex items-center justify-center h-72 relative">
                  <Image
                    alt={service.title}
                    src={service.image}
                    width={200}
                    height={200}
                    className="object-contain"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "200px",
                      maxHeight: "200px",
                    }}
                  />
                </div>

                {/* Service Content */}
                <div className="px-4 mt-4 text-start max-w-sm">
             <h1 className={`text-2xl text-black font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
  {service.title}
</h1>
<p className={`font-thin text-black mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
  {service.description}
</p>

                  <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse"></div>

                  <div className="mt-8 mx-auto">
                    <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-primary text-base hover:border-2 hover:border-[#2B1F51] text-white rounded-md text-center py-3 mx-auto cursor-pointer max-w-[16rem]">
                      <p>{t("servicesCards.startingPrice")}</p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
