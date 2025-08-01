"use client"

import Image from "next/image"
import map from "../public/map.png"
import uk from "../public/uk-circle.svg"
import ae from "../public/ae-circle.svg"
import tr from "../public/tr-circle.svg"
import us from "../public/us-circle.svg"
import de from "../public/de-circle.svg"
import sa from "../public/sa-circle.svg"
import korea from "../public/korea.svg"
import sd from "../public/sd-circle.svg"
import fi from "../public/fi-circle.svg"
import it from "../public/it-circle.svg"
import { useLanguage } from "../contexts/language-context"

export default function ServerLocations() {
  const { t, isRTL } = useLanguage()

  const serverData = [
    { nameKey: "serverLocations.uae", latency: "109ms", flag: ae },
    { nameKey: "serverLocations.germany", latency: "129ms", flag: de },
    { nameKey: "serverLocations.finland", latency: "165ms", flag: fi },
    { nameKey: "serverLocations.korea", latency: "123ms", flag: korea },
    { nameKey: "serverLocations.italy", latency: "45ms", flag: it },
    { nameKey: "serverLocations.saudi", latency: "146ms", flag: sa },
    { nameKey: "serverLocations.sudan", latency: "127ms", flag: sd },
    { nameKey: "serverLocations.turkey", latency: "157ms", flag: tr },
    { nameKey: "serverLocations.britain", latency: "71ms", flag: uk },
    { nameKey: "serverLocations.america", latency: "223ms", flag: us },
  ]

  const mapDots = [
    { top: "16.75%", left: "50.55%", countryKey: "serverLocations.germany", flag: de },
    { top: "23.53%", left: "50.94%", countryKey: "serverLocations.italy", flag: it },
    { top: "14.44%", left: "45.78%", countryKey: "serverLocations.britain", flag: uk },
    { top: "5.7%", left: "51.53%", countryKey: "serverLocations.finland", flag: fi },
    { top: "31.02%", left: "20.81%", countryKey: "serverLocations.america", flag: us },
    { top: "35.3%", left: "59.64%", countryKey: "serverLocations.saudi", flag: sa },
    { top: "40.64%", left: "56.34%", countryKey: "serverLocations.sudan", flag: sd },
    { top: "35.3%", left: "63.47%", countryKey: "serverLocations.uae", flag: ae },
    { top: "32.27%", left: "89.54%", countryKey: "serverLocations.korea", flag: korea },
    { top: "21.21%", left: "60.55%", countryKey: "serverLocations.turkey", flag: tr },
  ]

  return (
    <div className="container xl:max-w-6xl md:max-w-2xl lg:max-w-4xl mx-auto mt-7 max-w-xs" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mt-0">
        <h1 className={`lg:text-4xl text-xl mb-6 text-center text-black font-bold ${isRTL ? "text-right" : "text-left"}`}>
          {t("serverLocations.title")}
        </h1>
        {/* Map Section */}
        <div className="relative">
          <Image className="w-full" alt="World Map" src={map || "/placeholder.svg"} />
          {/* Map Dots */}
          <div>
            {mapDots.map((dot, index) => (
              <div key={index} className="absolute" style={{ top: dot.top, left: dot.left }}>
                <div className="group relative">
                  <div className="w-3 h-3 bg-blue-500 rounded-full cursor-pointer"></div>
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 hidden group-hover:flex items-center bg-white py-3 shadow-lg rounded-lg px-8 gap-4 justify-center z-10 whitespace-nowrap">
                    <h1 className="w-fit text-black">{t(dot.countryKey as any)}</h1>
                    <Image width={30} height={30} alt={t(dot.countryKey as any)} src={dot.flag || "/placeholder.svg"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Server Cards Grid */}
      <div className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 ${isRTL ? "text-right" : "text-left"}`}>
        {serverData.map((server, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] justify-between transition hover:scale-105 ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Image
              className="relative before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0"
              src={server.flag || "/placeholder.svg"}
              alt={t(server.nameKey as any)}
            />
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <h1 className="mb-3 text-xl text-black font-semibold">{t(server.nameKey as any)}</h1>
              <p className="text-sm text-green-500">{server.latency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}