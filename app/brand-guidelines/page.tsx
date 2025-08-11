"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import KeyFeaturesSection from "../components/key-features-section";
import { useEffect, useRef, useState } from "react";
import BrandGuidelinesSvg from "../components/all-svg/brand-guidelines-svg";
import LogoShowcase from "../components/logo-showcase";
import LogoSizesShowcase from "../components/logo-sizes-showcase";
import ColorPaletteShowcase from "../components/color-palette-showcase";
import ColorCodesShowcase from "../components/color-codes-showcase";
import TypographyShowcase from "../components/typography-showcase";
import IdentityShowcase from "../components/identity-showcase";
import DownloadsSection from "../components/downloads-section";
import SEOBrandGuidelines from "@/components/seo/SEOBlog";
export default function BrandGuidelines() {
  const { t, isRTL } = useLanguage();
  const [showSVG, setShowSVG] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
    <SEOBrandGuidelines/>
      <Header />
      <div className="relative text-white w-full hero">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="block">
          <div className="bg-[#092346]">
            <Navigation />
          </div>
          <div className="w-full h-auto mx-auto" ref={svgRef}>
            {showSVG ? (
              <BrandGuidelinesSvg />
            ) : (
              <div className="svg-two-placeholder">{/* Placeholder */}</div>
            )}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-16 w-full px-6">
       <h1 className="lg:text-4xl text-xl mb-6 text-white text-center">
        {t("brandGuidelines.headerTitle")}
      </h1>
      <p className="text-white text-center">
        {t("brandGuidelines.headerDescription")}
      </p>
          <div
            className="w-fit mx-auto cursor-pointer font-bold mt-4 flex gap-4"
            role="button"
          >
            <button className="rounded-md md:px-6 md:py-2.5 px-3 py-1.5 text-xs md:text-base bg-inherit border-2 hover:text-[#092346] hover:bg-white duration-300 text-white mr-4">
              {t("appHostingSection.viewPricing")}
            </button>
            <button className="rounded-md md:px-6 md:py-2.5 px-3 py-1.5 text-xs md:text-base bg-white border-2 hover:text-white hover:bg-inherit duration-300 text-[#092346] mr-4">
              {t("appHostingSection.createAccount")}
            </button>
          </div>
        </div>
      </div>

     <div className="-mt-20"><LogoShowcase /></div> 
      <div className="-mt-48 ">
        <LogoSizesShowcase />
        <div className="-mt-40">
          
          <ColorPaletteShowcase />
        </div>
        <div className="lg:-mt-40 -mt-36">
          
          <ColorCodesShowcase />
        </div>
        <div className="-mt-52">
          
          <TypographyShowcase />
        </div>
        <div className="-mt-20">
          
          <IdentityShowcase />
        </div>
        <div className="-mt-28">
          
          <DownloadsSection />
        </div>
        <div className="-mt-16">
          <Questions />
        </div>
        <Footer />
      </div>
    </>
  );
}
