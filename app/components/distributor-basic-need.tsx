import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function DistributorBasicNeed() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="container my-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <div  className="relative bg-[#333c5e] bg-opacity-90 py-16 text-white">
        {/* Settings image - left side */}
        <Image
        loading="lazy"
          className={`absolute bottom-0 opacity-40 lg:opacity-100 ${isRTL ? "left-0" : " right-0"}`}
          alt={t("distributorBasicNeed.settingsIllustrationAlt")}
          src="/settings.svg"
        width={300}
        height={300}  
     
        />

        {/* Plus icon - right side */}
        <div className={`absolute top-0 opacity-40 lg:opacity-100 ${isRTL ? "right-0" : " left-0"}`}>
          <svg  width="107" height="119" viewBox="0 0 107 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_85705)">
              <path
                d="M106.424 106.576H93.7238V118.986H84.3048V106.576H71.6758V97.6756H84.3048V85.2656H93.7218V97.6756H106.422L106.424 106.576Z"
                fill="#B0D7F1"
              />
              <path d="M83.3 51.1H52.85V80.85H30.275V51.1H0V29.75H30.275V0H52.85V29.75H83.3V51.1Z" fill="#69A1E3" />
            </g>
            <defs>
              <clipPath id="clip0_9_85705">
                <rect width="106.424" height="118.988" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={`relative mx-auto  ${isRTL ? "md:text-right" : "md:text-left"} md:px-36 text-center`}>
          <h1 className="font-bold text-2xl">{t("distributorBasicNeed.title")}</h1>
          <h1 className="font-bold text-lg mt-4">{t("distributorBasicNeed.subtitle")}</h1>

          <div className="flex gap-4 items-center justify-center mt-8">
            <div className="bg-white text-[#333c5e] hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition rounded-md px-4 py-2 cursor-pointer font-bold">
              <p>{t("distributorBasicNeed.registerButton")}</p>
            </div>
            <div className="bg-white text-[#333c5e] hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition rounded-md px-4 py-2 cursor-pointer font-bold">
              <p>{t("distributorBasicNeed.distributorsButton")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}