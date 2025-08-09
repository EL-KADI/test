"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import { useLanguage } from "@/contexts/language-context";
import { useEffect, useRef, useState } from "react";
import BlogSvg from "../components/all-svg/blog-svg";

export default function Blog() {
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
      <Header />
      <div className="relative text-white w-full">
        <div className="block ">
          <div className="bg-[#092346] relative z-50">
            <Navigation className="relative z-[90]" />
          </div>
          <div className="bg-[#092346] rounded-b-2xl h-[30vh] lg:h-[50vh] overflow-hidden relative z-20">
            <div className=" w-full absolute  h-auto bottom-0 z-10  " ref={svgRef}>
       
             {showSVG ? (
              <BlogSvg />
            ) : (
              <div  className="svg-two-placeholder">
                {/* Placeholder */}
              </div>
            )}
     
            </div>
          </div>
        </div>
        <div className="absolute z-30 h-[20vh] lg:top-24 top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
          <h1 className="lg:text-4xl text-xl text-center mb-6 text-white">
            {t("blogsSection.title")}
          </h1>
          <p className="text-white text-center">
            {t("blogsSection.description")}
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <Questions />

        <Footer />
      </div>
    </>
  );
}
