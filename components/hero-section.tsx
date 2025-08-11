"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import AnimatedOnLoad from "./animated-on-load";
import HeroSvg from "./hero-svg";
import NavigationBar from "./navigation-menu";

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      <div
        className="bg-[#092346] h-screen overflow-hidden  relative"
        dir={isRTL ? "rtl" : "ltr"}
      >
             <div className="w-full  ">
          <HeroSvg />
        </div>
        {/* Main Content - positioned above background */}
        <div className="bg-[#092346]">
          <NavigationBar />
        </div>

   

        <AnimatedOnLoad
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-center -z-0 max-w-4xl mx-auto px-4 relative mt-28 ${
            isRTL ? "text-center" : "text-left"
          }`}
        >
          <div
            className={`text-center -z-0 max-w-4xl mx-auto px-4 relative  -translate-y-16 sm:-translate-y-20 lg:translate-y-0 -mt-10 ${
              isRTL ? "text-center" : "text-left"
            }`}
          >
            <h1 className="text-[72px] text-[#3684ff] font-bold mb-0">
              {t("hero.title")}
            </h1>

            <h2 className="text-[36px] -mt-2 text-white">
              {t("hero.subtitle")}
            </h2>

            <p className="text-[24px] mb-5 mt-2 text-white font-thin max-w-2xl mx-auto">
              {t("hero.description")}
            </p>

            <div
              className={`flex items-center justify-start max-w-[34rem] mx-auto bg-white rounded-full p-1 ${
                isRTL ? "flex-row-reverse" : "flex-row-reverse"
              }`}
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-8 text-[16px] py-3 rounded-full">
                {t("hero.search")}
              </button>
              <input
                type="text"
                placeholder={t("hero.searchPlaceholder")}
                className={`flex-1 px-4 py-2 placeholder:text-lg rounded-md text-gray-600 text-sm border-none outline-none bg-transparent placeholder:text-gray-400 ${
                  isRTL ? "text-right" : "text-left"
                }`}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
            <div className="flex justify-center  items-center mx-auto mt-8">
              <Image
                src="/Certificates.webp"
                alt="Certificates"
                 priority
                width={573}
                height={353}
              />
            </div>
          </div>
        </AnimatedOnLoad>
      </div>
    </>
  );
}
