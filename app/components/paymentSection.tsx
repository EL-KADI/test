"use client";

import Image from "next/image";
import paymentimage from "../../public/payments.svg";
import topleft from "../../public/topleft.svg";
import btr from "../../public/br.svg";
import { useLanguage } from "../../contexts/language-context";

export default function PaymentsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-white " dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Payment Methods Section */}
        <section className="text-center mb-20">
          <h1 className="text-[#372b77] text-2xl font-bold  mb-6 mt-28">
            {t("payment.titletwo")}
          </h1>
          <div className="bg-white -z-0   mt-4 rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.08)] relative flex items-center justify-center flex-wrap gap-2 py-8">
            {/* Payment Methods Image */}
            <Image
              className="relative z-0"
              src={paymentimage || "/placeholder.svg"}
              alt={t("payment.title")}  loading="lazy"
            />
            {/* Text */}
            <h1 className="relative z-0  text-black">
              {t("payment.description")}
            </h1>
            {/* Decorative SVG - Bottom Right */}
            <Image
              className="absolute -z-10 right-0 bottom-0"
              alt= {t("domainRegistrationSA.backgroundAlt")}
              src={btr || "/placeholder.svg"}  loading="lazy"
            />
            {/* Decorative SVG - Top Left */}
            <Image
              className="absolute -z-10  left-0 top-0"
              alt= {t("domainRegistrationSA.backgroundAlt")}
              src={topleft || "/placeholder.svg"}  loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
