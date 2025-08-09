"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import OurEdge from "../components/ouredge";
import WebsiteSuccessCriteria from "../components/website-success-criteria";
import Prices from "../components/prices";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import { useEffect, useRef, useState } from "react";
import CloudflareSvg from "../components/all-svg/cloudflare-svg";
export default function FullServers() {
  const { t } = useLanguage();
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
          <div className="w-full h-auto mx-auto" ref={svgRef}>
     {showSVG ? (
              <CloudflareSvg />
            ) : (
              <div  className="svg-placeholder">
                {/* Placeholder */}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
        <h1 className="lg:text-4xl text-xl mb-6 lg:translate-y-24 text-white text-center">
          {t("cloudflareSection.cloudflareTitle")}
        </h1>
        <p className="text-white text-center lg:translate-y-24">
          {t("cloudflareSection.cloudflareDescription")}
        </p>
        <div className="bg-white hover:bg-transparent lg:translate-y-24 transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
          <p>{t("cloudflareSection.signUpNow")}</p>
        </div>
      </div>
      <div className="mt-24 mb-10 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 className="lg:text-2xl font-bold text-xl mb-6 text-black text-center">
          {t("cloudflareSection.cloudflareEnhanceTitle")}
        </h1>
        <p className="text-black/80 font-light text-center">
          {t("cloudflareSection.cloudflareEnhanceDescription")}
        </p>
      </div>
      </div>
       <OurEdge />
       <WebsiteSuccessCriteria/>
         <Prices />
      <Questions />
      <Footer />
    </>
  );
}
