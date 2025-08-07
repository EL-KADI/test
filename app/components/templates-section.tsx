import { useLanguage } from "../../contexts/language-context";

export default function TemplatesSection() {
  const { t } = useLanguage();

  return (
    <div className="container my-32 relative max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="text-9xl absolute -top-[85px] left-1/2 transform -translate-x-1/2 -z-[10] text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#E8F2FC] to-[#F9F9F9]/10">
        {t("templates.million")}
      </h1>
      <h1 className="lg:text-4xl text-xl mb-6 text-center relative -z-0">{t("templates.title")}</h1>
      <p className="text-center lg:w-1/2 mx-auto">{t("templates.description")}</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mt-12">
        <div className="bg-gray-300 h-[150px] rounded-xl"></div>
        <div className="bg-gray-300 h-[150px] rounded-xl"></div>
        <div className="bg-gray-300 h-[150px] rounded-xl"></div>
        <div className="bg-gray-300 h-[150px] rounded-xl"></div>
      </div>
      <div
        className="hover:bg-transparent transition hover:text-primary hover:border-2 hover:border-primary rounded-md py-2 w-fit mx-auto cursor-pointer bg-transparent border-2 border-black rounded-8 !text-black mt-12 px-6"
        role="button"
        aria-label={t("templates.viewMore")}
      >
        <p>{t("templates.viewMore")}</p>
      </div>
    </div>
  );
}