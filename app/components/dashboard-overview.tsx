"use client";
import { useLanguage } from "../../contexts/language-context";
import Image from 'next/image';

const DashboardOverview = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="grid lg:grid-cols-2 grid-cols-1 justify-between mt-32">
      <div className="order-last lg:order-first">
        <Image className="transform rtl:lg:translate-x-56 ltr:lg:-translate-x-56 mx-auto w-2/3" alt="Dashboard Overview Image" src="/DashboardOverview.svg" width={600} height={400} />
      </div>
      <div className="ps-16 mb-5 lg:mb-0">
           <h1
          className={`text-xl font-bold ${isRTL ? "text-right" : "text-left"}`}
        >
          {t("domainManagement.title")}
        </h1>
        <p className={`lg:w-1/2 mt-4 ${isRTL ? "text-right" : "text-left"}`}>
          {t("domainManagement.description")}
        </p>
      </div>
    </div>
  );
};

export default DashboardOverview;