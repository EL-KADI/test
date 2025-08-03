import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

const Imglist = () => {
  const { t } = useLanguage();

  const partners = [
    { src: "/Microsoft.svg", alt: t("imglist.partnerLogoAlt") },
    { src: "/google.svg", alt: t("imglist.partnerLogoAlt") },
    { src: "/jelastic.svg", alt: t("imglist.partnerLogoAlt") },
    { src: "/kaspesky.svg", alt: t("imglist.partnerLogoAlt") },
    { src: "/Cpanel-vs.svg", alt: t("imglist.partnerLogoAlt"), className: "w-[65%] ms-5 sm:ms-7" },
  ];

  return (
    <div className="container mt-12 px-4 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <p className="text-center">
        {t("imglist.contactUs")}
        <span className="text-left inline-block">.</span>
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 mt-12 mx-auto">
        {partners.map((partner, index) => (
          <div key={index} className={partner.className}>
            <Image
              alt={partner.alt}
              src={partner.src}
              className="w-full h-auto"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imglist;