"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

export default function DownloadsSection() {
  const { t, isRTL } = useLanguage();

  const downloadItems = [
    {
      id: 3,
      imageSrc: "/icon-logo.webp",
      altText: t("brandGuidelines.downloadItem3Alt"),
      title: t("brandGuidelines.downloadItem3Title"),
      cardClasses: "w-[300px] lg:w-[280px] xl:w-[300px] lg:ms-16 xl:ms-0 h-[170px] bg-[#E0E7F2]",
      contentOrder: "image-first",
    },
    {
      id: 4,
      imageSrc: "/icon-logo.webp",
      altText: t("brandGuidelines.downloadItem4Alt"),
      title: null,
      cardClasses: "w-[180px] lg:w-[150px] xl:w-[180px] lg:ms-14 xl:ms-0 h-[170px] bg-[#E0E7F2]",
      contentOrder: "image-first",
    },
    {
      id: 2,
      imageSrc: "/icon-logo.webp",
      altText: t("brandGuidelines.downloadItem2Alt"),
      title: t("brandGuidelines.downloadItem2Title"),
      cardClasses: "w-[300px] lg:w-[280px] xl:w-[300px] lg:ms-12 xl:ms-0 h-[170px] bg-white",
      contentOrder: "image-first",
    },
    {
      id: 1,
      imageSrc: "/icon-logo.webp",
      altText: t("brandGuidelines.downloadItem1Alt"),
      title: null,
      cardClasses: "w-[180px] lg:w-[150px] xl:w-[180px] lg:ms-12 xl:ms-0 h-[170px] bg-white",
      contentOrder: "image-first",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32  bg-white mt-32 lg:mt-12 mx-auto" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container  px-4 md:px-6 mx-auto">
        <div className={`flex flex-col    ${isRTL ? "items-center" : "items-center"} space-y-4 ${isRTL ? "text-right" : "text-left"} mb-12`}>
          <h2 className="text-3xl mx-auto font-bold tracking-tighter sm:text-3xl md:text-4xl">{t("brandGuidelines.downloadsTitle")}</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("brandGuidelines.downloadsDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-sm lg:max-w-5xl mx-auto justify-items-center">
          {downloadItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col my-3 lg:my-0 items-center lg:justify-between p-6 rounded-lg border border-gray-200 shadow-sm ${item.cardClasses}`}
            >
              <div
                className={`flex items-center justify-center gap-4 mb-4 ${
                  item.contentOrder === "text-first" ? (isRTL ? "flex-row" : "flex-row-reverse") : (isRTL ? "flex-row-reverse" : "flex-row")
                }`}
              >
                {item.title && (
                  <span className="text-lg font-semibold text-gray-800 whitespace-nowrap">{item.title}</span>
                )}
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  width={100}
                  height={100}
                  alt={item.altText}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="flex gap-4 text-sm text-gray-600 h-0 translate-y-12">
                <span className="flex items-center hover:text-black cursor-pointer">
                  {t("brandGuidelines.downloadPDF")} <Download className="w-4 h-4 ml-1" />
                </span>
                <span className="flex items-center hover:text-black cursor-pointer">
                  {t("brandGuidelines.downloadSVG")} <Download className="w-4 h-4 ml-1" />
                </span>
                <span className="flex items-center hover:text-black cursor-pointer">
                  {t("brandGuidelines.downloadPNG")} <Download className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}