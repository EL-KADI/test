"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import AnimatedOnLoad from "../../components/animated-on-load";
import AnimatedOnScroll from "../../components/animated-on-scroll";
import { useEffect, useRef, useState } from "react";
import DataCentersSvg from "../components/all-svg/data-centers-svg";
import SEODataCenters from "@/components/seo/SEODataCenters";


export default function DataCenters() {
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
  return (
    <>
    <SEODataCenters/>
      <Header />
      <div className="relative text-white w-full">
        <div className="block ">
          <div className="bg-[#092346] relative z-50">
            <Navigation className="relative z-[90]" />
          </div>
          <div className="bg-[#092346] h-[30vh] lg:h-[50vh] overflow-hidden relative z-20">
            <AnimatedOnLoad
              className="-translate-y-10 w-full absolute  h-auto bottom-0 z-10  "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
<div ref={svgRef}>
             {showSVG ? (
              <DataCentersSvg/>
            ) : (
              <div className="svg-two-placeholder">
                {/* Placeholder */}
              </div>
            )}
</div>
            </AnimatedOnLoad>
          </div>
        </div>
        <div className="absolute z-30 h-[20vh] lg:top-24 top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
          <h1 className="lg:text-4xl text-xl mb-6 text-white">
            {t("customer.dataCenters")}
          </h1>
        </div>
      </div>
<div className="overflow-hidden">
     
        <AnimatedOnScroll
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Questions />
        </AnimatedOnScroll>
        <AnimatedOnScroll
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        
          <Footer />
        </AnimatedOnScroll>
        
      </div>
    </>
  );
}
