"use client";
import { useLanguage } from "@/contexts/language-context";

export default function ColorCodesShowcase() {
   const { t,isRTL} = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8 my-32 md:my-0">
      <div className="max-w-4xl w-full " dir="rtl">
        <h1 dir={isRTL ? 'rtl' : 'ltr'} className={`text-2xl md:text-4xl font-bold text-black mb-12 ${isRTL ? "text-right" : "text-left"}`}>      {t("brandGuidelines.colorCodesTitle")}
        </h1>
       
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Color 1: Light Gray */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-[#d1d1d1] border border-gray-300 mb-4" />
            <span className="text-lg font-medium text-gray-700">#1b69ff</span>
          </div>
          {/* Color 2: White */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-[#ffffff] border border-gray-300 mb-4" />
            <span className="text-lg font-medium text-gray-700">#ffffff</span>
          </div>
          {/* Color 3: Dark Blue */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-[#0d034a] border border-gray-300 mb-4" />
            <span className="text-lg font-medium text-gray-700">#0d034a</span>
          </div>
        </div>
      </div>
    </div>
  )
}
