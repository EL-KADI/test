"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Utility for conditionally joining class names
import { useLanguage } from "../../../contexts/language-context";

export default function CountrySelector() {
  const { t, isRTL } = useLanguage();

  // Data for countries with translated names and alt texts
  const countries = [
    {
      id: "italy",
      name: t("countrySelector.italyName"),
      flag: "/it-circle.svg",
      flagAlt: t("countrySelector.italyFlagAlt"),
    },
    {
      id: "france",
      name: t("countrySelector.franceName"),
      flag: "/fr-circle.svg",
      flagAlt: t("countrySelector.franceFlagAlt"),
    },
    {
      id: "germany",
      name: t("countrySelector.germanyName"),
      flag: "/de-circle.svg",
      flagAlt: t("countrySelector.germanyFlagAlt"),
    },
    {
      id: "japan",
      name: t("countrySelector.japanName"),
      flag: "/jp-circle.svg",
      flagAlt: t("countrySelector.japanFlagAlt"),
    },
    {
      id: "finland",
      name: t("countrySelector.finlandName"),
      flag: "/fi-circle.svg",
      flagAlt: t("countrySelector.finlandFlagAlt"),
    },
    {
      id: "usa",
      name: t("countrySelector.usaName"),
      flag: "/us-circle.svg",
      flagAlt: t("countrySelector.usaFlagAlt"),
    },
    {
      id: "turkey",
      name: t("countrySelector.turkeyName"),
      flag: "/tr-circle.svg",
      flagAlt: t("countrySelector.turkeyFlagAlt"),
    },
  ];

  // State to keep track of the currently selected country, defaulting to Italy
  const [selectedCountryId, setSelectedCountryId] = useState("italy");
  // Ref for the main container to measure its position
  const containerRef = useRef<HTMLDivElement>(null);
  // Ref for each country item to measure their individual positions and widths
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // State to store the calculated left position and width for the animated background
  const [backgroundStyle, setBackgroundStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  // Effect to update the background style whenever the selected country changes
  useEffect(() => {
    if (containerRef.current && itemRefs.current[selectedCountryId]) {
      const selectedItem = itemRefs.current[selectedCountryId];
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = selectedItem.getBoundingClientRect();

      // Calculate the left position relative to the container's inner content area (accounting for padding)
      const left = itemRect.left - containerRect.left - 8; // Subtract container's left padding (p-2 = 8px)
      const top = itemRect.top - containerRect.top - 8; // Subtract container's top padding (p-2 = 8px)
      const width = itemRect.width;
      const height = itemRect.height;

      setBackgroundStyle({ left, top, width, height });
    }
  }, [selectedCountryId]);

  // Effect to set the initial background style on the first render for the default selected item
  useEffect(() => {
    if (
      selectedCountryId &&
      containerRef.current &&
      itemRefs.current[selectedCountryId]
    ) {
      const selectedItem = itemRefs.current[selectedCountryId];
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = selectedItem.getBoundingClientRect();

      const left = itemRect.left - containerRect.left - 8;
      const top = itemRect.top - containerRect.top - 8; // Subtract container's top padding (p-2 = 8px)
      const width = itemRect.width;
      const height = itemRect.height;

      setBackgroundStyle({ left, top, width, height });
    }
  }, []); // Empty dependency array means it runs once after the initial render

  return (
    <div className="flex justify-center items-center px-4 p-4">
      <div
        ref={containerRef}
        className={`relative grid grid-cols-2 w-[60%] lg:w-full lg:grid-cols-7 gap-4 rounded-xl bg-white p-2 px-4 max-w-4xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.08)]`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Animated blue background */}
        <motion.div
          className="absolute translate-y-2 bg-blue-600 rounded-full z-0"
          initial={false} // Disable initial animation from (0,0)
          animate={{
            left: backgroundStyle.left,
            top: backgroundStyle.top,
            width: backgroundStyle.width,
            height: backgroundStyle.height,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }} // Smooth spring animation
        />

        {countries.map((country) => (
          <div
            key={country.id}
            ref={(el) => {
              itemRefs.current[country.id] = el;
            }}
            className={cn(
              `relative z-10 flex ${
                isRTL ? "flex-row-reverse" : "flex-row"
              } w-max mx-auto items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer`,
              selectedCountryId === country.id
                ? "text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
            onClick={() => setSelectedCountryId(country.id)}
          >
            <span
              className={`text-sm font-medium ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {country.name}
            </span>
            <Image
              src={country.flag || "/placeholder.svg"}
              alt={country.flagAlt}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
