"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import SupportSectionTwo from "../components/support-section-two";
import Footer from "../../components/footer";
import { useLanguage } from "../../contexts/language-context";
import AnimatedOnLoad from "../../components/animated-on-load";
import AnimatedOnScroll from "../../components/animated-on-scroll";
import ContactForm from "../components/contact-form";
import Questions from "../components/questions";
import { useEffect, useRef, useState } from "react";
import ContactSvg from "../components/all-svg/contact-svg";
import SEOContact from "@/components/seo/SEOContact";


export default function Contact() {
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
    <SEOContact/>
      <Header />
      <div className="relative text-white w-full">
        <div className="block ">
          <div className="bg-[#092346] relative z-50">
            <Navigation className="relative z-[90]" />
          </div>
          <div className="bg-[#092346] h-[40vh] lg:h-[60vh] overflow-hidden relative z-20">
            <AnimatedOnLoad
              className=" w-full absolute  h-auto bottom-0 z-10  "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
<div ref={svgRef}>
  {showSVG ? (
              <ContactSvg />
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
            {t("footer.contactUs")}
          </h1>
          <p className="text-white">{t('supportParagraph.description')}</p>
              <div className="bg-white hover:bg-transparent transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
          {t("footer.contact")}
          </div>
        </div>
       
      </div>
<div className="overflow-hidden">


        <AnimatedOnScroll
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        
          <SupportSectionTwo />
        </AnimatedOnScroll>
        <AnimatedOnScroll
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        
          <ContactForm />
        </AnimatedOnScroll>
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
