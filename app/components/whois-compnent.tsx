import { useLanguage } from "../../contexts/language-context";

const WhoisComponent = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-20">
      <div className={`order-2 lg:order-1 relative z-10 ${isRTL ? "lg:-translate-x-20 xl:-translate-x-24 " : "lg:translate-x-20 xl:translate-x-24 "}`} >
        <h1 className="text-3xl font-semibold">{t("whois.title")}</h1>
        <p className="mt-8 font-normal text-sm text-primary">
          {t("whois.description")}
        </p>
      </div>
      <div className={`order-1  lg:order-2 w-5/6 h-64 bg-contain bg-no-repeat bg-center ms-auto ${isRTL ? "lg:translate-x-20 xl:translate-x-24" : "lg:-translate-x-20 xl:-translate-x-24"}`}
        style={{ backgroundImage: "url('/WhoisBg.svg')" }}
      ></div>
    </div>
  );
};

export default WhoisComponent;
