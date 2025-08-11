"use client"

import type React from "react"

import { useState, useRef, useEffect, useMemo } from "react"
import { useLanguage } from "../contexts/language-context"
import { getLanguageOptions } from "../lib/language-data"
import { ChevronDown } from "lucide-react"

type Language = "arabic" | "german" | "english" | "french" | "turkish"
interface LanguageOption {
  value: Language
  label: string
  flag: React.ReactElement
  countryCode: string
}

export default function LanguageSelector() {
  const { language, setLanguage, isRTL, t, selectedCountry, setSelectedCountry } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // نفس الخيارات التي كانت موجودة هنا (مع إضافة دعم الترجمة عبر t)
  const languages: LanguageOption[] = useMemo(
    () =>
      getLanguageOptions({
        codes: [
          "saudi",
          "uae",
          "egypt",
          "sudan",
          "oman",
          "qatar",
          "iraq",
          "syria",
          "turkey",
          "germany",
          "france",
          "global",
        ],
        t,
      }),
    [t],
  )

  // العثور على اللغة الحالية
  const currentLanguage = languages.find((lang) => lang.countryCode === selectedCountry) || languages[0]

  const handleLanguageChange = (selectedLang: LanguageOption) => {
    setLanguage(selectedLang.value)
    setSelectedCountry(selectedLang.countryCode)
    // حفظ كل من اللغة والدولة في localStorage
    localStorage.setItem("selectedCountry", selectedLang.countryCode)
    // تطبيق الـ direction على الـ body
    const direction = selectedLang.value === "arabic" ? "rtl" : "ltr"
    document.documentElement.dir = direction
    document.body.style.direction = direction
    setIsOpen(false)
  }

  // التحميل الأولي (كما هو في الكود الأصلي)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language
    const savedCountry = localStorage.getItem("selectedCountry")
    if (savedLanguage && savedCountry) {
      if (savedLanguage !== language) setLanguage(savedLanguage)
      if (savedCountry !== selectedCountry) setSelectedCountry(savedCountry)
      const direction = savedLanguage === "arabic" ? "rtl" : "ltr"
      document.documentElement.dir = direction
      document.body.style.direction = direction
    }
  }, [language, setLanguage, selectedCountry, setSelectedCountry])

  // منع السكرول الأفقي عند تغيير الاتجاه
  useEffect(() => {
    document.body.style.overflowX = "hidden"
    document.documentElement.style.overflowX = "hidden"
    return () => {
      document.body.style.overflowX = ""
      document.documentElement.style.overflowX = ""
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
    <div className="relative inline-block text-left z-[1100]" ref={dropdownRef}>
      <button
        type="button"
        className={`flex items-center gap-2 py-2 px-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
          isRTL ? "flex-row-reverse" : "flex-row"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0">{currentLanguage.flag}</div>
        <span className="whitespace-nowrap">{currentLanguage.label}</span>
     <ChevronDown  className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""} ${
            isRTL ? "mr-1" : "ml-1"
          }`} />
      </button>

      {isOpen && (
        <div
          className={`absolute ${isRTL ? "-left-3" : "-right-10"} mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 max-h-64 overflow-y-auto`}
        >
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.countryCode}
                className={`w-full flex items-center gap-3 overflow-hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                } ${selectedCountry === lang.countryCode ? "bg-blue-50 text-blue-700" : ""}`}
                role="menuitem"
                onClick={() => handleLanguageChange(lang)}
              >
                <div className="flex-shrink-0">{lang.flag}</div>
                <span className="whitespace-nowrap">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
