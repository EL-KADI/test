import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function WebsiteBuilderSection() {
  const { t ,isRTL } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t("websiteBuilder.chooseTemplate"),
      description: t("websiteBuilder.chooseTemplateDesc"),
      image: "/card-Ceto.svg",
      alt: t("websiteBuilder.websiteBuilderAlt"),
    },
    {
      number: 2,
      title: t("websiteBuilder.chooseTemplate"),
      description: t("websiteBuilder.chooseTemplateDesc"),
      image: "/image-selector.svg",
      alt: t("websiteBuilder.chooseTemplateAlt"),
    },
    {
      number: 3,
      title: t("websiteBuilder.enhanceFunctionality"),
      description: t("websiteBuilder.enhanceFunctionalityDesc"),
    },
    {
      number: 4,
      title: t("websiteBuilder.previewSite"),
      description: t("websiteBuilder.previewSiteDesc"),
    },
    {
      number: 5,
      title: t("websiteBuilder.publishSave"),
      description: t("websiteBuilder.publishSaveDesc"),
    },
  ];

  return (
    <div
      dir="ltr"
      className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
    >
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold">
        {t("websiteBuilder.title")}
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-32 mt-32 relative">
        <div className="bg-blue-500 lg:block hidden w-[2px] h-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-blue-500 lg:block hidden w-[20px] h-[20px] rounded-full absolute bottom-[80px] left-1/2 transform -translate-x-1/2"></div>
        <div className="bg-blue-500 lg:block hidden w-[20px] h-[20px] rounded-full absolute top-[80px] left-1/2 transform -translate-x-1/2"></div>
        {steps.slice(0, 2).map((step, index) => (
          <div
            key={index}
            className={`flex flex-col${
              index === 1 ? "-reverse lg:-order-none order-2" : ""
            } lg:justify-between justify-end lg:gap-64 gap-4`}
          >
            <div  className="relative">
              <div className="absolute -top-14 ltr:right-0 rtl:left-0 rounded-full flex items-center justify-center bg-blue-500 w-[60px] h-[60px] text-white text-2xl font-bold border-[6px] border-white outline outline-2 outline-blue-500">
                {step.number}
              </div>
              <h1 dir={isRTL ? "rtl" : "ltr"} className="font-bold text-2xl">{step.title}</h1>
              <h1 dir={isRTL ? "rtl" : "ltr"} className="mt-4">{step.description}</h1>
            </div>
            <Image
              className="w-full"
              src={step.image ?? "/placeholder.png"}
              alt={step.alt ?? ""}
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-16">
        {steps.slice(2).map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] flex-col transition hover:scale-105"
          >
            <div className="rounded-full flex items-center justify-center bg-blue-600 w-[50px] h-[50px] text-white text-2xl font-bold border-[4px] border-white outline outline-2 outline-blue-500">
              {step.number}
            </div>
            <div>
              <h1 className="mb-6 text-xl">{step.title}</h1>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
