"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <div className="container mt-64 max-w-6xl mx-auto">
      <div className="relative bg-[#403562] py-16 text-white text-center rounded-lg">
        <Image
          className="absolute right-0 bottom-0"
          src="/section-block-right.svg"
          alt={t("cta.sectionBlockRightAlt")}
          width={200}
          height={200}
        />
        <Image
          className="absolute left-0 bottom-0"
          src="/section-block-left.svg"
          alt={t("cta.sectionBlockLeftAlt")}
          width={180}
          height={180}
        />
        <div className="relative z-10">
          <h1 className="font-bold text-2xl">{t("cta.title")}</h1>
          <h1 className="font-bold text-lg mt-4">{t("cta.description")}</h1>
          <div className="bg-white text-primary hover:bg-transparent transition hover:text-white hover:border-2 hover:border-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer mt-8 font-bold">
            <p>{t("cta.orderNow")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}