"use client";

import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import HostingPlans from "../components/hosting-plans";
import FeaturesSectionVps from "../components/featuresSectionVps";
import Dashboard from "../components/dashboard";
import WorldDaljm from "../components/world-daljm";
import TrustCustomer from "../components/trust-customer";
import OurEdge from "../components/ouredge";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import FeaturesSectionTen from "../components/features-SectionTen";
import VpsSvg from "../components/all-svg/vps-svg";
import { useEffect, useRef, useState } from "react";
import SEOVpsServers from "@/components/seo/SEOVpsServers";
export default function Vps() {
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
  .draw-line {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 3s ease-in-out forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF;
  }
  
  .draw-line-delay-1 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 3s ease-in-out 1s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF;
  }
  
  .draw-line-delay-2 {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: draw 4s ease-in-out 2s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF;
  }
  
  .draw-line-delay-3 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw 4s ease-in-out 3s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
    }
  
`;

  const { t, isRTL } = useLanguage();


  return (
    <>
    <SEOVpsServers/>
    <Header />
         <div className="relative text-white w-full hero">
           <style dangerouslySetInnerHTML={{ __html: styles }} />
           <div className="block">
             <div className="bg-[#092346]">
               <Navigation />
             </div>
             <div className="lg:-translate-y-10" ref={svgRef}>
               {showSVG ? (
              <VpsSvg />
            ) : (
              <div className="svg-placeholder">
                {/* Placeholder */}
              </div>
            )}


             </div>
           </div>
    <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
         <h1 className="lg:text-4xl text-xl mb-6 text-white  'md:text-right' : 'md:text-left">
           {t('cloudInfrastructure.virtualServers')}
         </h1>
         <p className="text-white">
           {t('appHostingSection.description')}
         </p>
         <div
           className="w-fit mx-auto cursor-pointer font-bold mt-4 flex gap-4"
           role="button"
         >
           <button className="rounded-md md:px-6 md:py-2.5 px-3 py-1.5 text-xs md:text-base bg-inherit border-2 hover:text-[#092346] hover:bg-white duration-300 text-white mr-4">
             {t('appHostingSection.viewPricing')}
           </button>
           <button className="rounded-md md:px-6 md:py-2.5 px-3 py-1.5 text-xs md:text-base bg-white border-2 hover:text-white hover:bg-inherit duration-300 text-[#092346] mr-4">
             {t('appHostingSection.createAccount')}
           </button>
         </div>
       </div>
         </div>
      <HostingPlans />
      <FeaturesSectionTen />
      <FeaturesSectionVps />
      <Dashboard />
      <WorldDaljm />
      <TrustCustomer />
      <OurEdge />
      <Questions />
      <Footer />
    </>
  );
}
