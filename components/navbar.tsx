"use client"

import React, { useState, useRef, useEffect, useMemo, type ReactElement } from "react"
import { useLanguage } from "../contexts/language-context"
import { getLanguageOptions } from "../lib/language-data"
import { ChevronDown } from "lucide-react"

type Language = "arabic" | "german" | "english" | "french" | "turkish"
interface LanguageOption {
  value: Language
  label: string
  flag: ReactElement
  countryCode?: string
}

function Navbar() {
  const { language, setLanguage, isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("saudi")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // نفس الترتيب/الخيارات التي كانت موجودة في Navbar الأصلي
  const languages = useMemo(
    () =>
      getLanguageOptions({
        codes: ["saudi", "uae", "egypt", "sudan", "turkey", "iraq", "syria", "germany", "global", "france"],
      }),
    [],
  )

  // البحث عن اللغة الحالية بناءً على اللغة والدولة المختارة
  const getCurrentLanguage = () => {
    if (language === "arabic") {
      return languages.find((lang) => lang.countryCode === selectedCountry) || languages[0]
    }
    return languages.find((lang) => lang.value === language) || languages[0]
  }

  const currentLanguage = getCurrentLanguage()

  const handleLanguageChange = (selectedLang: any) => {
    // تحديث اللغة
    setLanguage(selectedLang.value)
    // تحديث الدولة المختارة
    if (selectedLang.countryCode) {
      setSelectedCountry(selectedLang.countryCode)
      // حفظ الدولة المختارة في localStorage
      localStorage.setItem("selectedCountry", selectedLang.countryCode)
    }
    setIsOpen(false)
  }

  // تحميل الدولة المحفوظة عند بدء التشغيل
  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry")
    if (savedCountry) {
      setSelectedCountry(savedCountry)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={"relative inline-block text-left z-[1200]"} ref={dropdownRef}>
      <button
        type="button"
        className={`flex items-center gap-2 py-2 px-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
          isRTL ? "flex-row-reverse" : "flex-row"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {currentLanguage.flag}
        <span>{currentLanguage.label}</span>
           <ChevronDown  className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""} ${
                  isRTL ? "mr-1" : "ml-1"
                }`} />
      </button>

      {isOpen && (
        <div
          className={`absolute ${isRTL ? "left-0" : "right-0"} mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[1200]`}
        >
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={`${lang.value}-${lang.countryCode || lang.label}`}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                } ${currentLanguage.countryCode === lang.countryCode ? "bg-blue-50 text-blue-700" : ""}`}
                role="menuitem"
                onClick={() => handleLanguageChange(lang)}
              >
                {lang.flag}
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(Navbar)
