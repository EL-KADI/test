"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import LaunchAppsSection from "../components/launch-apps-section";
import FeaturesGrid from "../components/features-grid";
import BackgroundSectionSpeed from "../components/background-section-speed";
import OurEdge from "../components/ouredge";
import SpeedSvg from "../components/all-svg/speed-svg";
import { useEffect, useRef, useState } from "react";
import SEOSpeed from "@/components/seo/SEOSpeed";
export default function Speed() {
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
    <SEOSpeed/>
      <Header />
      <div className="relative text-white w-full hero">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="block">
          <div className="bg-[#092346]">
            <Navigation />
          </div>
          <div className="w-full h-auto mx-auto lg:-translate-y-20" ref={svgRef}>
               {showSVG ? (
              <SpeedSvg />
            ) : (
              <div className="svg-two-placeholder">
                {/* Placeholder */}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 lg:mt-16 mt-10 w-full px-6">
<h1 className="lg:text-4xl text-xl mb-6 text-white text-center ">
        {t('speedSection.title')}
      </h1>
      <p className="text-white text-center ">
        {t('speedSection.description')}
      </p>
       <button className="font-bold hover:text-[#2b1f51] rounded-lg px-10 py-2 duration-200 mt-5 bg-inherit hover:bg-white text-white border-white border-2">
                {t("serverLicenses.signUpNow")}
              </button>
        </div>
      </div>
     <div className="mt-16 lg:mt-0">
   <LaunchAppsSection/>
   <FeaturesGrid/>
   <BackgroundSectionSpeed/>
   <OurEdge/>

        <div>
          <Questions />
        </div>
        <Footer />
     </div>
    </>
  );
}
