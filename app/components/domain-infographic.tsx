"use client";
import { useLanguage } from "../../contexts/language-context";

export default function DomainInfographic() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-900">
            <span className="inline-block mb-5">{t("domainInfographic.titlePart1")}</span>
            <br />
            {t("domainInfographic.titlePart2")}
          </h1>
        </div>

        {/* Three Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Section 01 */}
          <div className="text-center">
            <div className="mb-6">
              <span
                className="text-8xl md:text-9xl font-normal text-[#2B1F51]"
                style={{
                  fontFamily: '"Cheva Display", sans-serif',
                  fontWeight: 400,
                  textShadow: "6px 6px 8px rgba(71, 85, 105, 0.7)",
                }}
              >
                01
              </span>
            </div>
            <div className="bg-white relative z-10 pt-8 -translate-y-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("domainInfographic.section1Title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
                {t("domainInfographic.section1Description")}
              </p>
            </div>
          </div>

          {/* Section 02 */}
          <div className="text-center">
            <div className="mb-6">
              <span
                className="text-8xl md:text-9xl font-normal text-[#2B1F51]"
                style={{
                  fontFamily: '"Cheva Display", sans-serif',
                  fontWeight: 400,
                  textShadow: "6px 6px 8px rgba(71, 85, 105, 0.7)",
                }}
              >
                02
              </span>
            </div>
            <div className="bg-white relative z-10 pt-8 -translate-y-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("domainInfographic.section2Title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
                {t("domainInfographic.section2Description")}
              </p>
            </div>
          </div>

          {/* Section 03 */}
          <div className="text-center">
            <div className="mb-6">
              <span
                className="text-8xl md:text-9xl font-normal text-[#2B1F51]"
                style={{
                  fontFamily: '"Cheva Display", sans-serif',
                  fontWeight: 400,
                  textShadow: "6px 6px 8px rgba(71, 85, 105, 0.7)",
                }}
              >
                03
              </span>
            </div>
            <div className="bg-white relative z-10 pt-8 -translate-y-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("domainInfographic.section3Title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
                {t("domainInfographic.section3Description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}