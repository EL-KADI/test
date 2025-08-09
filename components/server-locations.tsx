"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from 'lucide-react';
import { useLanguage } from "../contexts/language-context";
import AnimatedNumber from "./animated-number";

// Original image imports
import map from "../public/map.webp";
import uk from "../public/uk-circle.svg";
import ae from "../public/ae-circle.svg";
import tr from "../public/tr-circle.svg";
import us from "../public/us-circle.svg";
import de from "../public/de-circle.svg";
import sa from "../public/sa-circle.svg";
import korea from "../public/korea.svg";
import sd from "../public/sd-circle.svg";
import fi from "../public/fi-circle.svg";
import it from "../public/it-circle.svg";
import india from "../public/india-circle.svg";

// Circular Gauge Component with proper number positioning
function CircularGauge({ value, max = 100 }: { value: number; max?: number }) {
  const percentage = (value / max) * 100;
  const angle = -185 + (percentage / 100) * 270;
  const centerX = 165;
  const centerY = 165;

  const generateScaleNumbers = () => {
    const numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const radius = 85;
    return numbers.map((num, index) => {
      const numAngle = -225 + (index / (numbers.length - 1)) * 270;
      const radian = (numAngle * Math.PI) / 180;
      const x = centerX + radius * Math.cos(radian);
      const y = centerY + radius * Math.sin(radian) + 5;
      return (
        <text
          key={num}
          x={x}
          y={y}
          fill="#625C5C"
          fontSize="12"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {num}
        </text>
      );
    });
  };

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <svg
        width="330"
        height="330"
        viewBox="0 0 330 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82.5153 247.507C66.1994 231.191 55.0881 210.403 50.5865 187.772C46.085 165.141 48.3953 141.684 57.2255 120.366C66.0556 99.048 81.0089 80.8273 100.194 68.008C119.38 55.1886 141.936 48.3463 165.01 48.3463C188.084 48.3463 210.641 55.1886 229.826 68.008C249.012 80.8273 263.965 99.048 272.795 120.366C281.625 141.684 283.935 165.141 279.434 187.772C274.932 210.403 263.821 231.191 247.505 247.507"
          stroke="#DCE8FF"
          strokeWidth="42.0416"
        />
        <path
          d="M82.4945 247.484C70.5697 235.559 61.3719 221.191 55.5349 205.369C49.6979 189.547 47.3604 172.648 48.6836 155.835C50.0067 139.023 54.959 122.698 63.1992 107.984C71.4395 93.2698 82.7717 80.5172 96.4151 70.6046C110.059 60.6921 125.689 53.8553 142.229 50.5652C158.769 47.2752 175.826 47.6101 192.224 51.547C208.623 55.4839 223.972 62.9291 237.216 73.3696C250.46 83.8101 261.283 96.9978 268.939 112.024"
          stroke="#2364E1"
          strokeWidth="42.0416"
          strokeDasharray="auto"
          strokeDashoffset={400 - (400 * percentage) / 100}
          className="transition-all duration-500 ease-out"
        />
        {generateScaleNumbers()}
        {Array.from({ length: 11 }, (_, index) => {
          const tickAngle = -165 + (index / 10) * 270;
          const radian = (tickAngle * Math.PI) / 180;
          const innerRadius = 65;
          const outerRadius = 75;
          const x1 = centerX + innerRadius * Math.cos(radian);
          const y1 = centerY + innerRadius * Math.sin(radian);
          const x2 = centerX + outerRadius * Math.cos(radian);
          const y2 = centerY + outerRadius * Math.sin(radian);
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#625C5C"
              strokeWidth="0"
            />
          );
        })}
        <circle
          cx={centerX}
          cy={centerY}
          r="8"
          fill="#f3f4f6"
          stroke="#625C5C"
          strokeWidth="1"
        />
        <path
          d="M9.71381 54.3506C5.3041 49.9409 2.30105 44.3226 1.08441 38.2061C-0.132231 32.0897 0.492192 25.7498 2.87871 19.9882C5.26523 14.2267 9.30667 9.30216 14.4919 5.83746C19.6772 2.37277 25.7735 0.523501 32.0097 0.523501C38.246 0.523501 44.3422 2.37277 49.5275 5.83746C54.7128 9.30215 58.7542 14.2267 61.1407 19.9882C63.5273 25.7498 64.1517 32.0897 62.9351 38.2061C61.7184 44.3226 58.7154 49.9409 54.3056 54.3506"
          stroke="#625C5C"
          strokeWidth="0.420416"
          transform="translate(133, 187)"
        />
        <g
          className="transition-all duration-500 ease-out"
          style={{
            transformOrigin: "165px 165px",
            transform: `rotate(${angle}deg)`,
          }}
        >
          <path
            d="M161.661 160.802L212.208 125.170C212.836 124.728 213.56 125.579 213.022 126.127L169.930 170.048C169.615 170.369 169.202 170.585 168.755 170.639C160.658 171.612 160.049 165.675 160.878 161.937C160.981 161.472 161.272 161.076 161.661 160.802Z"
            fill="#2364E1"
          />
          <circle cx="167.58" cy="163.02" r="2.79496" fill="#DCE8FF" />
        </g>
      </svg>
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "calc(50% + 49px)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AnimatedNumber
          value={value}
          className={`text-2xl font-bold ${
            value >= 70 ? "text-red-500" : "text-blue-500"
          }`}
        />
      </div>
    </div>
  );
}

// Simple seedable Pseudo-Random Number Generator (PRNG)
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Function to get a daily seed based on the current date
function getDailySeed() {
  const today = new Date();
  const seedString = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    const char = seedString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

export default function ServerLocations() {
  const { t, isRTL } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isModalOpening, setIsModalOpening] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHoverModal, setShowHoverModal] = useState(false);
  const [isHoverModalClosing, setIsHoverModalClosing] = useState(false);
  const [isHoverModalOpening, setIsHoverModalOpening] = useState(false);

  const initialServerData = [
    {
      nameKey: "serverLocations.uae",
      latency: "85",
      flag: ae,
      gauge: 65,
      download: "42",
      upload: "18",
    },
    {
      nameKey: "serverLocations.germany",
      latency: "95",
      flag: de,
      gauge: 72,
      download: "48",
      upload: "20",
    },
    {
      nameKey: "serverLocations.finland",
      latency: "120",
      flag: fi,
      gauge: 58,
      download: "38",
      upload: "16",
    },
    {
      nameKey: "serverLocations.korea",
      latency: "180",
      flag: korea,
      gauge: 68,
      download: "35",
      upload: "15",
    },
    {
      nameKey: "serverLocations.italy",
      latency: "75",
      flag: it,
      gauge: 75,
      download: "50",
      upload: "22",
    },
    {
      nameKey: "serverLocations.saudi",
      latency: "65",
      flag: sa,
      gauge: 62,
      download: "40",
      upload: "17",
    },
    {
      nameKey: "serverLocations.sudan",
      latency: t("serverLocations.comingSoonTitle"),
      flag: sd,
      gauge: 0,
      download: t("serverLocations.comingSoonTitle"),
      upload: t("serverLocations.comingSoonTitle"),
      isComingSoon: true,
    },
    {
      nameKey: "serverLocations.turkey",
      latency: "90",
      flag: tr,
      gauge: 60,
      download: "44",
      upload: "19",
    },
    {
      nameKey: "serverLocations.britain",
      latency: "55",
      flag: uk,
      gauge: 78,
      download: "52",
      upload: "24",
    },
    {
      nameKey: "serverLocations.america",
      latency: "150",
      flag: us,
      gauge: 45,
      download: "30",
      upload: "12",
    },
    // New countries added
    {
      nameKey: "serverLocations.india",
      latency: "125",
      flag: india,
      gauge: 55,
      download: "32",
      upload: "14",
    },
 
  ];

  const [serverData, setServerData] = useState<any[]>([]);

  useEffect(() => {
    const dailySeed = getDailySeed();
    const dailyRandom = mulberry32(dailySeed);
    
    // Create a refresh seed based on current timestamp (changes on each refresh)
    const refreshSeed = Date.now() % 1000000;
    const refreshRandom = mulberry32(refreshSeed);
    
    const updatedData = initialServerData.map((server) => {
      if (server.isComingSoon) {
        return server;
      }
      
      const originalLatency = Number.parseInt(server.latency as string);
      const originalGauge = server.gauge;
      const originalDownload = Number.parseInt(server.download as string);
      const originalUpload = Number.parseInt(server.upload as string);

      // Daily variation: ±15ms for latency, ±10 for gauge, ±8 for download/upload
      const dailyLatencyOffset = Math.floor(dailyRandom() * 31) - 15; // -15 to +15
      const dailyGaugeOffset = Math.floor(dailyRandom() * 21) - 10; // -10 to +10
      const dailyDownloadOffset = Math.floor(dailyRandom() * 17) - 8; // -8 to +8
      const dailyUploadOffset = Math.floor(dailyRandom() * 17) - 8; // -8 to +8

      // Refresh variation: ±3 for all values
      const refreshLatencyOffset = Math.floor(refreshRandom() * 7) - 3; // -3 to +3
      const refreshGaugeOffset = Math.floor(refreshRandom() * 7) - 3; // -3 to +3
      const refreshDownloadOffset = Math.floor(refreshRandom() * 7) - 3; // -3 to +3
      const refreshUploadOffset = Math.floor(refreshRandom() * 7) - 3; // -3 to +3

      // Calculate new values
      let newLatency = originalLatency + dailyLatencyOffset + refreshLatencyOffset;
      let newGauge = originalGauge + dailyGaugeOffset + refreshGaugeOffset;
      let newDownload = originalDownload + dailyDownloadOffset + refreshDownloadOffset;
      let newUpload = originalUpload + dailyUploadOffset + refreshUploadOffset;

      // Ensure values stay within logical ranges
      newLatency = Math.max(15, Math.min(300, newLatency)); // 15ms to 300ms
      newGauge = Math.max(20, Math.min(95, newGauge)); // 20% to 95%
      newDownload = Math.max(25, Math.min(80, newDownload)); // 25GB to 80GB
      newUpload = Math.max(10, Math.min(40, newUpload)); // 10GB to 40GB

      return {
        ...server,
        latency: newLatency,
        gauge: newGauge,
        download: newDownload,
        upload: newUpload,
      };
    });
    
    setServerData(updatedData);
  }, []);

  const mapDots = [
    {
      top: "16.75%",
      left: isRTL ? "50.55%" : "50.55%",
      countryKey: "serverLocations.germany",
      flag: de,
    },
    {
      top: "23.53%",
      left: isRTL ? "50.94%" : "50.94%",
      countryKey: "serverLocations.italy",
      flag: it,
    },
    {
      top: "14.44%",
      left: isRTL ? "45.78%" : "45.78%",
      countryKey: "serverLocations.britain",
      flag: uk,
    },
    {
      top: "5.7%",
      left: isRTL ? "51.53%" : "51.53%",
      countryKey: "serverLocations.finland",
      flag: fi,
    },
    {
      top: "31.02%",
      left: isRTL ? "20.81%" : "20.81%",
      countryKey: "serverLocations.america",
      flag: us,
    },
    {
      top: "35.3%",
      left: isRTL ? "59.64%" : "59.64%",
      countryKey: "serverLocations.saudi",
      flag: sa,
    },
    {
      top: "40.64%",
      left: isRTL ? "56.34%" : "56.34%",
      countryKey: "serverLocations.sudan",
      flag: sd,
    },
    {
      top: "35.3%",
      left: isRTL ? "63.47%" : "63.47%",
      countryKey: "serverLocations.uae",
      flag: ae,
    },
    {
      top: "32.27%",
      left: isRTL ? "89.54%" : "89.54%",
      countryKey: "serverLocations.korea",
      flag: korea,
    },
    {
      top: "21.21%",
      left: isRTL ? "60.55%" : "60.55%",
      countryKey: "serverLocations.turkey",
      flag: tr,
    },
    // New countries on map
    {
      top: "38.5%",
      left: isRTL ? "72.8%" : "72.8%",
      countryKey: "serverLocations.india",
      flag: india,
    },

  ];

  const handleDotClick = (dot: any) => {
    const countryData = serverData.find(
      (server) => server.nameKey === dot.countryKey
    );
    if (countryData) {
      setIsModalOpening(true);
      setShowModal(true);
      setSelectedCountry({
        ...countryData,
        countryKey: dot.countryKey,
      });
      setTimeout(() => {
        setIsModalOpening(false);
      }, 50);
    }
  };

  const handleDotHover = (dot: any) => {
    const countryData = serverData.find(
      (server) => server.nameKey === dot.countryKey
    );
    if (countryData) {
      setIsHoverModalOpening(true);
      setShowHoverModal(true);
      setHoveredCountry({
        ...countryData,
        countryKey: dot.countryKey,
      });
      setTimeout(() => {
        setIsHoverModalOpening(false);
      }, 50);
    }
  };

  const handleDotLeave = () => {
    setIsHoverModalClosing(true);
    setTimeout(() => {
      setShowHoverModal(false);
      setHoveredCountry(null);
      setIsHoverModalClosing(false);
    }, 300);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setSelectedCountry(null);
      setIsModalClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [showModal]);

  return (
    <div
      className="container xl:max-w-6xl md:max-w-2xl lg:max-w-4xl mx-auto mt-7 max-w-md"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mt-0">
        <h1 className="lg:text-4xl text-xl mb-6 text-black font-bold text-center">
          {t("serverLocations.title")}
        </h1>
        <div className="relative">
          <Image
            className="w-full"
            alt={t("serverLocations.mapAlt")}
            src={map || "/placeholder.svg"}
            width={800}
            height={400}
            loading="lazy"
          />
          <div>
            {mapDots.map((dot, index) => (
              <div
                key={index}
                className="absolute"
                style={{ top: dot.top, left: dot.left }}
              >
                <div
                  className="w-3 h-3 bg-blue-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                  onClick={() => handleDotClick(dot)}
                  onMouseEnter={() => handleDotHover(dot)}
                  onMouseLeave={handleDotLeave}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {serverData.map((server, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] justify-between transition hover:scale-105 ${
              isRTL ? "flex-row" : "flex-row-reverse"
            } ${server.isComingSoon ? "opacity-60" : ""}`}
          >
            <Image
              src={server.flag || "/placeholder.svg"}
              alt={t(server.nameKey)}
              width={40}
              height={40}
              loading="lazy"
            />
            <div className={isRTL ? "text-right" : "text-left"}>
              <h1
                className={`mb-3 text-xl text-black font-semibold ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t(server.nameKey)}
              </h1>
              <p
                className={`text-sm ${
                  server.isComingSoon
                    ? "text-orange-500"
                    : server.latency >= 70
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {server.isComingSoon ? (
                  server.latency
                ) : (
                  <AnimatedNumber value={server.latency} suffix="ms" />
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Click Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 bg-black transition-all duration-300 flex items-center justify-center z-50 p-4 ${
            isModalClosing ? "bg-opacity-0" : "bg-opacity-50"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-lg p-8 max-w-sm w-full relative transform transition-all duration-300 ${
              isModalOpening
                ? "scale-75 opacity-0"
                : isModalClosing
                ? "scale-75 opacity-0"
                : "scale-100 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <button
              onClick={closeModal}
              className={`absolute top-3 ${
                isRTL ? "left-3 " : "right-3"
              } text-gray-500 hover:text-gray-700 transition-colors`}
            >
              <X size={24} />
            </button>
            <div
              className={`flex items-center gap-3 mb-6 ${
                isRTL ? "flex-row" : "flex-row"
              }`}
            >
              <Image
                src={selectedCountry?.flag || "/placeholder.svg"}
                alt={selectedCountry ? t(selectedCountry.countryKey) : ""}
                width={32}
                height={32}
                className="rounded-full"
                loading="lazy"
              />
              <h2
                className={`text-lg font-semibold text-gray-800 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {selectedCountry ? t(selectedCountry.countryKey) : ""}
              </h2>
            </div>
            {selectedCountry?.isComingSoon ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-bold text-orange-500 mb-2">
                  {t("serverLocations.comingSoonTitle")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("serverLocations.comingSoonMessage")}
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-6">
                  <CircularGauge value={selectedCountry?.gauge || 0} />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div
                      className={`flex items-center gap-1 text-gray-500 text-sm mb-1 ${
                        isRTL ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <span>↓</span>
                      <span>{t("serverLocations.download")}</span>
                    </div>
                    <div
                      className={`text-lg font-semibold text-gray-800 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <AnimatedNumber
                        value={selectedCountry?.download || 0}
                        suffix=" GB"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`flex items-center gap-1 text-gray-500 text-sm mb-1 ${
                        isRTL ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <span>↑</span>
                      <span>{t("serverLocations.upload")}</span>
                    </div>
                    <div
                      className={`text-lg font-semibold text-gray-800 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <AnimatedNumber
                        value={selectedCountry?.upload || 0}
                        suffix=" GB"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span
                    className={`text-sm font-semibold ${
                      selectedCountry?.latency >= 70
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    <AnimatedNumber
                      value={selectedCountry?.latency || 0}
                      suffix="ms"
                    />
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hover Modal */}
      {showHoverModal && (
        <div
          className={`fixed inset-0 bg-black transition-all duration-300 flex items-center justify-center z-40 p-4 pointer-events-none ${
            isHoverModalClosing ? "bg-opacity-0" : "bg-opacity-30"
          }`}
        >
          <div
            className={`bg-white rounded-lg p-6 max-w-sm w-full relative transform transition-all duration-300 ${
              isHoverModalOpening
                ? "scale-75 opacity-0"
                : isHoverModalClosing
                ? "scale-75 opacity-0"
                : "scale-100 opacity-100"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div
              className={`flex items-center gap-3 mb-4 ${
                isRTL ? "flex-row" : "flex-row"
              }`}
            >
              <Image
                src={hoveredCountry?.flag || "/placeholder.svg"}
                alt={hoveredCountry ? t(hoveredCountry.countryKey) : ""}
                width={28}
                height={28}
                className="rounded-full"
                loading="lazy"
              />
              <h2
                className={`text-base font-semibold text-gray-800 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {hoveredCountry ? t(hoveredCountry.countryKey) : ""}
              </h2>
            </div>
            {hoveredCountry?.isComingSoon ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-2">🚧</div>
                <h3 className="text-lg font-bold text-orange-500 mb-1">
                  {t("serverLocations.comingSoonTitle")}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {t("serverLocations.comingSoonMessage")}
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <div className="scale-75">
                    <CircularGauge value={hoveredCountry?.gauge || 0} />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="text-center">
                    <div
                      className={`flex items-center gap-1 text-gray-500 text-xs mb-1 ${
                        isRTL ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <span>↓</span>
                      <span>{t("serverLocations.download")}</span>
                    </div>
                    <div
                      className={`text-sm font-semibold text-gray-800 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <AnimatedNumber
                        value={hoveredCountry?.download || 0}
                        suffix=" GB"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`flex items-center gap-1 text-gray-500 text-xs mb-1 ${
                        isRTL ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <span>↑</span>
                      <span>{t("serverLocations.upload")}</span>
                    </div>
                    <div
                      className={`text-sm font-semibold text-gray-800 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <AnimatedNumber
                        value={hoveredCountry?.upload || 0}
                        suffix=" GB"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span
                    className={`text-xs font-semibold ${
                      hoveredCountry?.latency >= 70
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    <AnimatedNumber
                      value={hoveredCountry?.latency || 0}
                      suffix="ms"
                    />
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
