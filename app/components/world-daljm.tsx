import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function WorldDaljm() {
 const { t, isRTL } = useLanguage();

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="bg-[#092346] lg:py-32 py-5 relative px-16 grid lg:grid-cols-2 max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-20">
      <div className="text-white col-start-2">
        <div className="flex flex-col mx-auto w-full justify-center items-center lg:block">
          <h1 className="font-semibold text-2xl mb-3 w-full">{t("worldDaljm.multiRegionSupport")}</h1>
          <p className="w-full">{t("worldDaljm.description")}</p>
        </div>
        <Image
        width={380}
        height={380}
        loading="lazy" 
           className={`lg:absolute bottom-0   ${
                isRTL ? "lg:right-0" : "lg:left-0"
              }`}
      
          alt={t("worldDaljm.worldIllustrationAlt")}
          src="/world-DaLjm.svg"
        />
      </div>
    </div>
  );
}