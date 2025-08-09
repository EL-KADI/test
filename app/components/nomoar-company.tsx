import { useLanguage } from "@/contexts/language-context";
import { useEffect, useRef, useState } from "react";
import NomoarCompanySvg from "./all-svg/nomoar-company-svg";

export default function NomoarCompany() {
  const { t } = useLanguage();
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

  return (
    <>
      <h2 className="text-center mt-20 lg:text-4xl text-xl font-bold text-black">
        {t("namoorSection.title")}
      </h2>
      <div className="relative flex  w-full items-center justify-center overflow-hidden max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto  p-4">
        {/* Main diagram container - now fixed size, centered */}

        <div
          className="relative flex h-max  items-center justify-center"
          ref={svgRef}
        >
          {showSVG ? <NomoarCompanySvg /> : <div>{/* Placeholder */}</div>}
        </div>
      </div>
    </>
  );
}
