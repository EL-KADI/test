"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Prices from "../components/prices";
import GoFast from "../components/gofast";
import { SystemSucuri } from "../components/systemsucuri";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import FeaturesSectionFour from "../components/featuresSectionFour";
import { useLanguage } from "../../contexts/language-context";
import ServerManagementSvg from "../components/all-svg/server-management-svg";
import { useEffect, useRef, useState } from "react";

export default function ServerManagement() {
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

  return (
    <>
      <Header />
      <div className="relative text-white w-full hero">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="block">
          <div className="bg-[#092346]">
            <Navigation />
          </div>
            <div className="-translate-y-10" ref={svgRef}>
              {showSVG ? (
              <ServerManagementSvg />
            ) : (
              <div className="svg-placeholder">
                {/* Placeholder */}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
          <h1 className="lg:text-4xl text-xl mb-6 text-white">{t("serverManagement.title")}</h1>
          <p className="text-white">{t("serverManagement.description")}</p>
          <div className="bg-white hover:bg-transparent transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
            <p>{t("serverManagement.signUpNow")}</p>
          </div>
        </div>
      </div>
      <Prices />
      <GoFast />
      <SystemSucuri />
      <FeaturesSectionFour />
      <div className="mt-16">
        <Questions />
      </div>
      <Footer />
    </>
  );
}