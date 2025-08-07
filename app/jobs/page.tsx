"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "@/contexts/language-context";

import JobsSection from "../components/jobs-section";
import BenefitsSection from "../components/benefits-section";
export default function Jobs() {
  const { t, isRTL } = useLanguage();
  const styles = `


  .draw-line-delay-1 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 3s ease-in-out 0.5s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #4C73CC; /* Corrected to user's specified blue */
  }

  .draw-line-delay-2 {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: draw 4s ease-in-out 2s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #4C73CC; /* Corrected to user's specified blue */
  }

  .draw-line-delay-3 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw 4s ease-in-out 3s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #4C73CC; /* Corrected to user's specified blue */
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  }
`;

  return (
    <>
      <Header />
      <div className="relative text-white w-full hero">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="block">
          <div className="bg-[#092346]">
            <Navigation />
          </div>
          <div className="w-full h-auto mx-auto">
            <img
              className="w-full  h-[50vh] lg:h-[80vh] mx-auto"
              src="/contbg.png"
              alt="bg"
            />
          </div>
        </div>
        <div
                  dir={isRTL ? "rtl " : "ltr "}

         className={`absolute top-16  text-center transform  mt-10 w-full px-6 ${
              isRTL ? "left-[20%] lg:left-[15%]  lg:-translate-y-16 md:-translate-x-[60%] -translate-x-[50%]" : "text-left lg:-translate-y-16"
            }`}
        
        >
          <h1
            className={`lg:text-4xl text-xl mb-6 lg:translate-y-24 text-white ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t("joinUsSection.title")}
          </h1>
          <p
            className={`text-white max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-2xl lg:text-base  lg:translate-y-24 ${
              isRTL ? "text-right text-sm" : "text-left text-xs"
            }`}
          >
            {t("joinUsSection.description")}
          </p>
          <div className="bg-white  absolute hover:bg-transparent lg:translate-y-24 transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
            <p
              className={`text-sm lg:text-base ${
                isRTL ? "text-right left-[55%] sm:left-[65%] md:left-[70%] lg:left-[75%]" : " text-left"
              }`}
            >
              {t("joinUsSection.button")}
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-40">
        <JobsSection />
      </div>
      <BenefitsSection />
      <Questions />

      <Footer />
    </>
  );
}
