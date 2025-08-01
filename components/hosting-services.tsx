"use client"
import Image from "next/image"
import { useState } from "react"
import Rbg from "../public/Rbg.svg"
import Lbg from "../public/Lbg.svg"
import Jpaas from "../public/jpaas.svg"
import Ls from "../public/ls-email.svg"
import HostingCloud from "../public/hosting-cloud-sh.svg"
import { useLanguage } from "../contexts/language-context"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function CloudServicesSection() {
  const { t, isRTL } = useLanguage()
  const [activeTab, setActiveTab] = useState("cloudServices")

  const tabsData = {
    designDevelopment: [
      {
        titleKey: "designDevelopment.webDesign",
        descriptionKey: "designDevelopment.webDesign.desc",
        image: HostingCloud,
      },
      {
        titleKey: "designDevelopment.mobileApps",
        descriptionKey: "designDevelopment.mobileApps.desc",
        image: Ls,
      },
      {
        titleKey: "designDevelopment.uiux",
        descriptionKey: "designDevelopment.uiux.desc",
        image: Jpaas,
      },
    ],
    domains: [
      {
        titleKey: "domains.domainRegistration",
        descriptionKey: "domains.domainRegistration.desc",
        image: HostingCloud,
      },
      {
        titleKey: "domains.domainTransfer",
        descriptionKey: "domains.domainTransfer.desc",
        image: Ls,
      },
      {
        titleKey: "domains.domainManagement",
        descriptionKey: "domains.domainManagement.desc",
        image: Jpaas,
      },
    ],
    cloudServices: [
      {
        titleKey: "cloudServices.sharedCloudHosting",
        descriptionKey: "cloudServices.sharedCloudHosting.desc",
        image: HostingCloud,
      },
      {
        titleKey: "cloudServices.lsSuite",
        descriptionKey: "cloudServices.lsSuite.desc",
        image: Ls,
      },
      {
        titleKey: "cloudServices.jpaas",
        descriptionKey: "cloudServices.jpaas.desc",
        image: Jpaas,
      },
    ],
  }

  const services = tabsData[activeTab as keyof typeof tabsData]

  return (
    <AnimatedOnScroll>
      <div className="relative mt-32 mb-32" dir={isRTL ? "rtl" : "ltr"}>
        {/* Background decorative SVGs */}
        <Image
          className={`absolute ${isRTL ? "left-0" : "right-0"} -z-10 -top-[150px]`}
          alt="Background"
          src={Rbg || "/placeholder.svg"}
        />
        <Image
          className={`absolute ${isRTL ? "right-0" : "left-0"} -z-10 -top-[150px]`}
          alt="Background"
          src={Lbg || "/placeholder.svg"}
        />
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h1
            className={`lg:text-4xl text-xl mb-6 text-center text-black font-bold ${
              isRTL ? "text-center" : "text-left"
            }`}
          >
            {t("cloudServices.title")}
          </h1>
          {/* Description */}
          <p
            className={`text-center md:w-3/6 text-black mx-auto leading-6 mt-20 ${isRTL ? "text-right" : "text-left"}`}
          >
            {t("cloudServices.description")}
          </p>
          {/* Navigation Tabs */}
          <div className="bg-gray-100 md:w-fit md:flex items-center gap-16 mx-auto mt-8 py-2 px-4 rounded-md font-medium">
            <p
              className={`cursor-pointer transition-colors ${
                activeTab === "designDevelopment" ? "bg-white text-black px-4 py-2 rounded-md" : "text-black"
              } ${isRTL ? "text-right" : "text-left"}`}
              onClick={() => setActiveTab("designDevelopment")}
            >
              {t("cloudServices.designDevelopment")}
            </p>
            <p
              className={`my-2 md:m-0 cursor-pointer transition-colors ${
                activeTab === "domains" ? "bg-white text-black px-4 py-2 rounded-md" : "text-black"
              } ${isRTL ? "text-right" : "text-left"}`}
              onClick={() => setActiveTab("domains")}
            >
              {t("cloudServices.domains")}
            </p>
            <p
              className={`cursor-pointer transition-colors ${
                activeTab === "cloudServices" ? "bg-white text-black px-4 py-2 rounded-md" : "text-black"
              } ${isRTL ? "text-right" : "text-left"}`}
              onClick={() => setActiveTab("cloudServices")}
            >
              {t("cloudServices.cloudServices")}
            </p>
          </div>
          {/* Service Cards */}
          <div className="flex max-w-6xl justify-center mx-auto">
            <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-6 py-6 flex flex-col gap-4 justify-between shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105"
                >
                  {/* Image */}
                  <div className="w-[5.5rem] h-[5.3rem] rounded-lg flex items-center justify-center">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={t(service.titleKey as any)}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className={`mb-6 text-xl text-black ${isRTL ? "text-right" : "text-left"}`}>
                      {t(service.titleKey as any)}
                    </h1>
                    <p className={`text-sm text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                      {t(service.descriptionKey as any)}
                    </p>
                  </div>
                  <a
                    className={`flex items-center gap-2 text-blue-600 hover:text-blue-900 duration-300 hover:translate-x-1 rounded-md w-fit ${
                      isRTL ? "flex-row-reverse" : "flex-row"
                    }`}
                    href="/"
                  >
                    {t("cloudServices.learnMore")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  )
}
