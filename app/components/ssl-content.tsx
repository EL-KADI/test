"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function SslContent() {
  const { t } = useLanguage();

  return (
    <div className="mt-32 relative">
      <Image
        className="absolute right-0 -top-40 -z-10"
        alt={t("sslContent.rightBackgroundAlt")}
        src="/right-blocks-with-icons.avif"
        width={393}
        height={636}  loading="lazy"
      />
      <Image
        className="absolute left-0 -top-40 -z-10"
        alt={t("sslContent.leftBackgroundAlt")}
        src="/left-blocks-with-icons.avif"
        width={393}
        height={636}  loading="lazy"
      />
      <div className="container lg:mt-32 mt-16 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div>
          <h1 className="lg:text-4xl text-xl mb-6 text-center">
            {t("sslContent.trustTitle")}
          </h1>
          <p className="text-center w-1/2 mx-auto">
            {t("sslContent.trustDescription")}
          </p>
        </div>
        <div className="mt-16">
          <h1 className="lg:text-4xl text-xl mb-6 text-center">
            {t("sslContent.chooseSslTitle")}
          </h1>
          <p className="text-center w-1/2 mx-auto">
            {t("sslContent.chooseSslDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}