"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

const DomainManagement = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div
      className="grid lg:grid-cols-2 grid-cols-1 justify-between"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="ps-16">
        <h1
          className={`text-xl font-bold ${isRTL ? "text-right" : "text-left"}`}
        >
          {t("domainManagement.title")}
        </h1>
        <p className={`lg:w-1/2 mt-4 ${isRTL ? "text-right" : "text-left"}`}>
          {t("domainManagement.description")}
        </p>
      </div>
      <div>
        <Image
        width={500}
        height={500}
          className={`transform ${
            isRTL ? "lg:-translate-x-56" : "lg:translate-x-56"
          } mx-auto w-2/3`}
          alt={t("domainManagement.imageAlt")}
          src="/DomainManagement.svg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default DomainManagement;
