"use client"

import Image from "next/image"
import { useLanguage } from "../contexts/language-context"
import AnimatedOnScroll from "./animated-on-scroll"

export default function Payments() {
  const { t, isRTL } = useLanguage()

  return (
    <AnimatedOnScroll className="-z-0 relative">
    <div className="bg-white -z-0 relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Payment Methods Section */}
        <section className="text-center mb-20">
          <h1 className="text-black text-4xl font-bold mb-6 mt-28">{t("payment.title")}</h1>
          <div className="bg-white mt-4 rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.08)] relative flex items-center justify-center flex-wrap gap-2 py-8">
            {/* Payment Methods Image */}
            <Image  loading="lazy" width={350} height={350} className="relative z-10" src="payments.svg" alt={t("payment.title")} />
            {/* Text */}
            <h1 className="relative z-10 text-black">{t("payment.description")}</h1>
            {/* Decorative SVG - Bottom Right */}
            <Image  loading="lazy" width={120} height={120} className="absolute  right-0 bottom-0" alt="bg" src="/br.svg" />
            {/* Decorative SVG - Top Left */}
            <Image  loading="lazy" width={125} height={125} className="absolute left-0 top-0" alt="bg" src="/topleft.svg" />
          </div>
        </section>
      </div>
    </div></AnimatedOnScroll>
  )
}