"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import BusinessNeedsSectionTwo from "../components/business-needs-section-two";
import WhoisTool from "../components/whois-tool";
import KeyFeaturesSection from "../components/key-features-section";
import WhoisSvg from "../components/all-svg/whois-svg";
import { useEffect, useRef, useState } from "react";
export default function Whois() {
  const { t,isRTL } = useLanguage();
      const [showSVG, setShowSVG] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowSVG(true); 
          observer.disconnect();
        }
      });
    });
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);
  const styles = `


  .draw-line-delay-1 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 3s ease-in-out 0.5s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF; /* Corrected to user's specified blue */
  }

  .draw-line-delay-2 {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: draw 4s ease-in-out 2s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF; /* Corrected to user's specified blue */
  }

  .draw-line-delay-3 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw 4s ease-in-out 3s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF; /* Corrected to user's specified blue */
  }
  .draw-line-delay-4 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw 4.3s ease-in-out 3.5s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #4C73CC; /* Corrected to user's specified blue */
  }


  @keyframes draw {
    to {
      stroke-dashoffset: 0;
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
          <div className="w-full h-auto mx-auto" ref={svgRef}>
               {showSVG ? (
              <WhoisSvg />
            ) : (
              <div className="svg-two-placeholder">
                {/* Placeholder */}
              </div>
            )}



          </div>
        </div>
         <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-16 w-full px-6">
             <h1 className="lg:text-4xl text-xl mb-6 text-white text-center">
               {t("whoisTool.whoisTitle")}
             </h1>
             <p className="text-white text-center">{t("whoisTool.whoisDescription")}</p>
             <div
               className={`flex items-center py-0 px-0 mt-6 justify-start max-w-[34rem] mx-auto bg-white rounded-full p-1 ${
                 isRTL ? "flex-row-reverse" : "flex-row-reverse"
               }`}
             >
               <button  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-8 text-[16px] py-3 rounded-full">
                 {t("whoisTool.searchButton")}
               </button>
               <input
                 type="text"
                 placeholder={t("whoisTool.searchPlaceholder")}
                 className={`flex-1 px-4 py-2 placeholder:text-lg rounded-md text-gray-600 text-sm border-none outline-none bg-transparent placeholder:text-gray-400 ${
                   isRTL ? "text-right" : "text-left"
                 }`}
                 dir={isRTL ? "rtl" : "ltr"}
               />
             </div>
           </div>
      </div>
     
        <BusinessNeedsSectionTwo />
 <WhoisTool/>
 <div className="-mt-10"><KeyFeaturesSection />
        <div className="-mt-16">
          <Questions />
        </div>
        <Footer /></div>
     
    </>
  );
}