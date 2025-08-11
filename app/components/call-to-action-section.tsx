import { useLanguage } from "../../contexts/language-context";
import Image from 'next/image';

export default function CallToActionSection() {
  const { t } = useLanguage();

  return (
    <div className="container my-32 mx-auto overflow-hidden">
      <div className="relative max-w-md mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-4xl xl:max-w-6xl bg-[#403562] py-16 text-white">
        <Image
          className="absolute lg:rtl:-left-12 lg:ltr:-right-12 lg:bottom-0 inset-0 opacity-10 lg:opacity-100 lg:inset-auto"
          alt={t("callToAction.settingsAlt")}
          src="/ls-suite-cta.webp"
          width={500}
          height={500} loading="lazy"
        />
        <div className="relative z-10 lg:text-start lg:p-16 text-center lg:w-1/2 w-full">
          <h1 className="font-bold text-2xl">{t("callToAction.title")}</h1>
          <p>{t("callToAction.description")}</p>
          <p className="text-white font-bold mt-4 cursor-pointer hover:scale-x-110 transition-all duration-300">
            {t("callToAction.startNow")}
          </p>
        </div>
      </div>
    </div>
  );
}