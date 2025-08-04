import { useLanguage } from "../../contexts/language-context";

export default function Kubernetes() {
  const { t } = useLanguage();

  return (
    <div className="container lg:mt-32 mt-16 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
    <h1 className="lg:text-4xl text-xl text-[#2b1f51] mb-6 text-center">
        {t("kubernetes.title")} <span className="font-bold">Kubernetes</span>
      </h1>
      <p className="text-center lg:w-1/2 mx-auto">{t("kubernetes.description")}</p>
      <div
        className="hover:bg-transparent transition hover:text-primary hover:border-2 hover:border-primary text-white px-12 py-2 w-fit mx-auto cursor-pointer !rounded-xl border-2 bg-transparent !text-primary border-black mt-8"
        role="button"
        aria-label={t("kubernetes.orderNow")}
      >
        <p>{t("kubernetes.orderNow")}</p>
      </div>
    </div>
  );
}