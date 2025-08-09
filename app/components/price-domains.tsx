"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

type Domain = {
  tld: string;
};

const domains: Domain[] = [
  { tld: ".Me" },
  { tld: ".Org" },
  { tld: ".Com" },
  { tld: ".Net" },
  { tld: ".Shop" },
  { tld: ".Store" },
  { tld: ".Pro" },
  { tld: ".Site" },
  { tld: ".Biz" },
  { tld: ".Co" },
];

export default function PriceDomains() {
  const { t, isRTL } = useLanguage();

  return (
    <main className="bg-white">
      <section
        dir={isRTL ? "rtl" : "ltr"}
        className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-white z-10 -translate-y-5 rounded-t-3xl"
        aria-labelledby="popular-domains-heading"
      >
        <Image
          src="/Lbg.svg"
          alt={t("priceDomains.backgroundAlt")}
          className="pointer-events-none select-none absolute max-w-[50vw] -bottom-40 right-0"
          width={400}
          height={400}
          loading="lazy"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="popular-domains-heading"
            className="text-center text-[#1f4b8e] font-semibold leading-tight tracking-tight text-xl sm:text-2xl lg:text-4xl"
          >
            {t("priceDomains.title")}
          </h2>
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {domains.map((d, idx) => (
              <article
                key={idx}
                className="group relative rounded-2xl border border-gray-200 bg-white/95 shadow-sm p-5 sm:p-6 flex items-center justify-between gap-4 hover:shadow-md hover:-translate-y-0.5 transition"
                aria-label={t(`priceDomains.domainAriaLabel.${d.tld}`)}
              >
                <div className="min-w-0">
                  <div className="text-[13px] text-gray-500">{t("priceDomains.domainName")}</div>
                  <div className="mt-1 text-3xl sm:text-4xl font-semibold text-[#3b2b6b] leading-none">
                    {d.tld}
                  </div>
                  <div className="mt-3">
                    <div className="text-gray-700 font-medium">{t("priceDomains.price")}</div>
                    <div className="text-xs text-gray-400">{t("priceDomains.originalPrice")}</div>
                  </div>
                </div>
                <div className="shrink-0 size-9 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center group-hover:bg-gray-50">
                  {isRTL ? (
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}