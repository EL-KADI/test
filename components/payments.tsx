"use client"

import Image from "next/image"
import paymentimage from "../public/payments.svg"
import topleft from "../public/topleft.svg"
import btr from "../public/br.svg"
import { useLanguage } from "../contexts/language-context"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function Payments() {
  const { t, isRTL } = useLanguage()

  return (
    <AnimatedOnScroll>
    <div className="bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Payment Methods Section */}
        <section className="text-center mb-20">
          <h1 className="text-black text-4xl font-bold mb-6 mt-28">{t("payment.title")}</h1>
          <div className="bg-white mt-4 rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.08)] relative flex items-center justify-center flex-wrap gap-2 py-8">
            {/* Payment Methods Image */}
            <Image className="relative z-10" src={paymentimage || "/placeholder.svg"} alt={t("payment.title")} />
            {/* Text */}
            <h1 className="relative z-10 text-black">{t("payment.description")}</h1>
            {/* Decorative SVG - Bottom Right */}
            <Image className="absolute right-0 bottom-0" alt="bg" src={btr || "/placeholder.svg"} />
            {/* Decorative SVG - Top Left */}
            <Image className="absolute left-0 top-0" alt="bg" src={topleft || "/placeholder.svg"} />
          </div>
        </section>
      </div>
    </div></AnimatedOnScroll>
  )
}