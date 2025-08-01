"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import HelpCenterIcon from "../public/HelpCenterIcon.svg";
import Jobs from "../public/JobsIcon.svg";
import Subscriber from "../public/SubscriberIcon.svg";
import DataCenters from "../public/DataCentersIcon.svg";
import { useLanguage } from "../contexts/language-context";
import AnimatedOnScroll from "./AnimatedOnScroll";

export default function CustomerReviewsSection() {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simple testimonials
 const testimonials = [
  {
    text: t("testimonials.1.text"),
    customerName: t("testimonials.1.name"),
    customerTitle: t("testimonials.1.title"),
  },
  {
    text: t("testimonials.2.text"),
    customerName: t("testimonials.2.name"),
    customerTitle: t("testimonials.2.title"),
  },
  {
    text: t("testimonials.3.text"),
    customerName: t("testimonials.3.name"),
    customerTitle: t("testimonials.3.title"),
  },
  {
    text: t("testimonials.4.text"),
    customerName: t("testimonials.4.name"),
    customerTitle: t("testimonials.4.title"),
  },
];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedOnScroll>
      <div className="container mx-auto my-8 px-4 max-w-6xl">
        <div
          className={`grid grid-cols-8 gap-8 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left Side - Services Grid */}
          <div
            className={`col-span-8 md:col-span-4 ${
              isRTL ? "md:order-2" : "md:order-2"
            }`}
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Help Center */}
              <a
                href="/help-center"
                className="hover:scale-105 relative flex flex-col gap-2 items-center justify-center bg-white shadow-lg p-8 cursor-pointer hover:shadow-2xl duration-300 transition-all before:transition-all before:duration-300 before:absolute before:w-0 before:bottom-0 before:left-1/2 before:bg-blue-500 before:h-0.5 hover:before:w-1/2 before:-translate-x-1/2 rounded-3xl"
              >
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-2">
                  <Image
                    src={HelpCenterIcon || "/placeholder.svg"}
                    alt={t("customer.helpCenter")}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-black">
                  {t("customer.helpCenter")}
                </p>
              </a>

              {/* Jobs */}
              <a
                href="/jobs"
                className="hover:scale-105 relative flex flex-col gap-2 items-center justify-center bg-white shadow-lg p-8 cursor-pointer hover:shadow-2xl duration-300 transition-all before:transition-all before:duration-300 before:absolute before:w-0 before:bottom-0 before:left-1/2 before:bg-blue-500 before:h-0.5 hover:before:w-1/2 before:-translate-x-1/2 rounded-3xl"
              >
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-2">
                  <Image
                    src={Jobs || "/placeholder.svg"}
                    alt={t("customer.jobs")}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-black">
                  {t("customer.jobs")}
                </p>
              </a>

              {/* Subscriber Services */}
              <div className="hover:scale-105 relative flex flex-col gap-2 items-center justify-center bg-white shadow-lg p-8 cursor-pointer hover:shadow-2xl duration-300 transition-all before:transition-all before:duration-300 before:absolute before:w-0 before:bottom-0 before:left-1/2 before:bg-blue-500 before:h-0.5 hover:before:w-1/2 before:-translate-x-1/2 rounded-3xl">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-2">
                  <Image
                    src={Subscriber || "/placeholder.svg"}
                    alt={t("customer.subscriberServices")}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-black">
                  {t("customer.subscriberServices")}
                </p>
              </div>

              {/* Data Centers */}
              <a
                href="/data-centers"
                className="hover:scale-105 relative flex flex-col gap-2 items-center justify-center bg-white shadow-lg p-8 cursor-pointer hover:shadow-2xl duration-300 transition-all before:transition-all before:duration-300 before:absolute before:w-0 before:bottom-0 before:left-1/2 before:bg-blue-500 before:h-0.5 hover:before:w-1/2 before:-translate-x-1/2 rounded-3xl"
              >
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-2">
                  <Image
                    src={DataCenters || "/placeholder.svg"}
                    alt={t("customer.dataCenters")}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-black">
                  {t("customer.dataCenters")}
                </p>
              </a>
            </div>
          </div>

          {/* Right Side - Vertical Testimonial Slider */}
          <div
            className={`col-span-8 md:col-span-4 h-full ${
              isRTL ? "md:order-1" : "md:order-1"
            }`}
          >
            <div className="relative h-[400px] md:h-[400px]">
              {/* Slider Container */}
              <div className="h-full overflow-hidden rounded-3xl">
                <div
                  className="flex flex-col transition-transform duration-700 ease-in-out h-full"
                  style={{
                    transform: `translateY(-${currentSlide * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 h-full"
                      style={{ height: "400px" }}
                    >
                      <div className="p-8 flex flex-col gap-6 bg-white shadow-lg rounded-3xl h-full justify-between">
                        {/* Quote Icon */}
                        <div
                          className={`${isRTL ? "text-right" : "text-right"}`}
                        >
                          <div className="text-6xl text-[#2B1F51] font-serif leading-none">
                            "
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <div className="flex-1 flex items-center justify-center pt-4">
                          <p
                            className={`text-gray-700 leading-relaxed text-lg ${
                              isRTL ? "text-right" : "text-right"
                            }`}
                          >
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Customer Info */}
                        <div
                          className={`flex items-center gap-4 ${
                            isRTL ? "flex-row" : "flex-row"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 24 24"
                              className="w-8 h-8 text-[#2B1F51]"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                          <div
                            className={`${isRTL ? "text-right" : "text-right"}`}
                          >
                            <h4 className="text-xl text-[#2B1F51] font-bold">
                              {testimonial.customerName}
                            </h4>
                            <p className="text-gray-500">
                              {testimonial.customerTitle}
                            </p>
                          </div>
                          <div className="mr-auto text-4xl text-black/10 font-serif">
                            "
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-[#2B1F51] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
}
