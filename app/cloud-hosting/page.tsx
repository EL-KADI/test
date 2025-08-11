"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import HostingPlansTwo from "../components/hosting-plans-two";
import Questions from "../components/questions";
import SmallContent from "../components/smallContent";
import FeaturesSectionThree from "../components/featuresSectionThree";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import NISTComplianceSection from "../components/nist";
import FeaturesSection from "../components/featuresSection";
import CTA from "../components/cta";
import CloudHostingSvg from "../components/all-svg/cloud-hosting-svg";
import { useEffect, useRef, useState } from "react";
import SEOCloudHosting from "@/components/seo/SEOCloudHosting";
export default function CloudHosting() {
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

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  }
`;

  return (
    <>
    <SEOCloudHosting/>
      <Header />
      <div className="relative text-white w-full hero">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="block">
          <div className="bg-[#092346]">
            <Navigation />
          </div>
          <div className="w-full h-auto mx-auto"  ref={svgRef}>
            {showSVG ? (
                        <CloudHostingSvg />
                      ) : (
                        <div  className="svg-placeholder">
                          {/* Placeholder */}
                        </div>
                      )}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
          <h1 className="lg:text-4xl text-xl mb-6 text-white">
            {t("hosting.cloud")}
          </h1>
          <p className="text-white">{t("sharedHosting.description")}</p>
          <div className="bg-white hover:bg-transparent transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
            <p>{t("sharedHosting.startNow")}</p>
          </div>
        </div>
      </div>
      <HostingPlansTwo />
      <div className="translate-y-32">
        <h2 className="text-center text-black text-4xl">
          
          {t("featuresSectionSix.title")}
        </h2>
      </div>
      <div className="mt-60">
        <SmallContent />
        <NISTComplianceSection />
        <FeaturesSection />
        <CTA />
        <FeaturesSectionThree />
        <div>
          <Questions />
        </div>
        <Footer />
      </div>
    </>
  );
}
