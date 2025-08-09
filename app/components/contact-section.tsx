import React from "react";
import { useLanguage } from "../../contexts/language-context";
import Image from "next/image";

const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="container mt-12 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
    >
      <p className="text-center">{t("contactSection.description")}</p>
      <div className="grid grid-cols-5  gap-2 mt-12 mx-auto">
         <div>
          <Image
            alt={t("loginSection.logoAlt")}
            loading="lazy"
            width={25}
            height={25}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto"
            style={{ color: "transparent" }}
            src="/Microsoft.svg"
          />
        </div>
        <div>
          <Image
            alt={t("loginSection.logoAlt")}
            loading="lazy"
            width={25}
            height={25}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto"
            style={{ color: "transparent" }}
            src="/google.svg"
          />
        </div>
        <div>
          <Image
            alt={t("loginSection.logoAlt")}
            loading="lazy"
            width={25}
            height={25}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto"
            style={{ color: "transparent" }}
            src="/jelastic.svg"
          />
        </div>
        <div>
          <Image
            alt={t("loginSection.logoAlt")}
            loading="lazy"
            width={25}
            height={25}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto"
            style={{ color: "transparent" }}
            src="/kaspesky.svg"
          />
        </div>
        <div className="w-[65%] ms-5 sm:ms-7">
          <Image
            alt={t("loginSection.logoAlt")}
            loading="lazy"
            width={25}
            height={25}
            decoding="async"
            data-nimg={1}
            className="w-full h-auto"
            style={{ color: "transparent" }}
            src="/Cpanel-vs.svg"
          />
        </div>
      </div>
      <div className="mt-12 bg-[#333C5E] py-8 px-6 flex justify-between items-center flex-wrap text-white">
        <div>
          <h1
            className={`text-3xl font-bold mb-4 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t("contactSection.helpTitle")}
          </h1>
          <p className={isRTL ? "text-right" : "text-left"}>
            {t("contactSection.helpDescription")}
          </p>
        </div>
        <div className="bg-primary  transition hover:text-primary hover:border-2 hover:border-primary text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer !m-0 !text-primary bg-white font-bold  hover:!bg-transparent hover:!text-white hover:border-white">
          <p>{t("contactSection.contactButton")}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
