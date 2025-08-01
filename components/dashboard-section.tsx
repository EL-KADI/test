"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "../contexts/language-context"
import AnimatedOnScroll from "./AnimatedOnScroll"

interface AccordionItem {
  id: number
  titleKey: string
  descriptionKey: string
  isExpanded: boolean
}

export default function DashboardSection() {
  const { t, isRTL } = useLanguage()

  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      id: 1,
      titleKey: "dashboard.easyManagement",
      descriptionKey: "dashboard.easyManagement.desc",
      isExpanded: true,
    },
    {
      id: 2,
      titleKey: "dashboard.oneClick",
      descriptionKey: "dashboard.oneClick.desc",
      isExpanded: false,
    },
    {
      id: 3,
      titleKey: "dashboard.multiplePayment",
      descriptionKey: "dashboard.multiplePayment.desc",
      isExpanded: false,
    },
  ])

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const toggleAccordion = (id: number) => {
    setAccordionItems((items) =>
      items.map((item) => ({
        ...item,
        isExpanded: item.id === id ? !item.isExpanded : false,
      })),
    )
    setActiveImageIndex(id - 1)
  }

  const images = [
    {
      src: "/DashboardLS.svg",
      alt: "dashboard",
      titleKey: "dashboard.mainDashboard",
      width: 500,
      height: 300,
    },
    {
      src: "/dashboard-services.png",
      alt: "services",
      titleKey: "dashboard.servicesManagement",
      width: 500,
      height: 300,
    },
    {
      src: "/checkout-and-review-dashboard.png",
      alt: "checkout",
      titleKey: "dashboard.checkoutProcess",
      width: 500,
      height: 300,
    },
  ]

  return (
    <AnimatedOnScroll>
    <div className={`lg:px-32 md:px-16 px-8 mt-32 ${isRTL ? "dir-rtl" : "dir-ltr"}`}>
      <div className={`${isRTL ? "text-right" : "text-left"}`}>
        <p className="text-black text-sm mb-2">{t("dashboard.subtitle")}</p>
        <h2 className="text-3xl font-semibold text-black mb-4">{t("dashboard.title")}</h2>
        <p className="mt-4 text-black leading-relaxed">{t("dashboard.description")}</p>
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
        <div className={`lg:col-span-1 ${isRTL ? "lg:order-1" : "lg:order-1"}`}>
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <div
                className={`overflow-hidden transition-all duration-300 rounded-lg mb-2 bg-white shadow-sm ${
                  item.isExpanded ? "max-h-96" : "max-h-[86px]"
                }`}
              >
                <div
                  className={`flex justify-between items-start p-6 cursor-pointer gap-6 ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  }`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div
                    className={`text-lg font-bold text-blue-500 hover:text-black transition-colors ${
                      isRTL ? "text-left me-auto" : "text-left"
                    }`}
                  >
                    {t(item.titleKey as any)}
                  </div>
                  <div className="relative text-4xl mt-4">
                    <Plus
                      className={`transition-all  duration-300 text-blue-500 absolute ${
                        isRTL ? "left-0" : "left-0"
                      } top-1/2 transform -translate-y-1/2 ${
                        item.isExpanded ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                      }`}
                      size={24}
                    />
                    <Minus
                      className={`transition-all duration-300 text-blue-500 absolute ${
                        isRTL ? "left-0" : "left-0"
                      } top-1/2 transform -translate-y-1/2 ${
                        item.isExpanded ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                      }`}
                      size={24}
                    />
                  </div>
                </div>
                <div
                  className={`px-5 pb-5 overflow-hidden transition-all duration-300 ${
                    item.isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className={`text-md text-gray-600 ${isRTL ? "text-right" : "text-left"}`}>
                    {t(item.descriptionKey as any)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`lg:col-span-2 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-500 ease-in-out transform overflow-hidden ${
                  activeImageIndex === index
                    ? "opacity-100 scale-100 h-auto relative"
                    : "opacity-0 scale-75 h-0 absolute top-0 left-0"
                }`}
              >
                <div className=" rounded-lg p-8 text-center ">
                  <Image
                    className="w-full rounded-lg"
                    alt={t(image.titleKey as any)}
                    src={image.src || "/placeholder.svg"}
                    width={image.width}
                    height={image.height}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveImageIndex(index)
                  setAccordionItems((items) =>
                    items.map((item, i) => ({
                      ...item,
                      isExpanded: i === index,
                    })),
                  )
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeImageIndex === index ? "bg-blue-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedOnScroll>
  )
}
