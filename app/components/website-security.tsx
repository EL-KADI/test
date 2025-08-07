"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function WebsiteSecurity() {
  const { t } = useLanguage();

  return (
    <div className="container mt-32 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl">{t("websiteSecurity.title")}</h1>
          <p className="mt-8 font-normal text-sm text-primary">
            {t("websiteSecurity.description")}
          </p>
        </div>
        <Image
          className="w-5/6 ms-auto"
          alt={t("websiteSecurity.securityImageAlt")}
          src="/securityWebsite.svg"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}