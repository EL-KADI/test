"use client";
import React from "react";
import { useState, useRef, useEffect, type ReactElement } from "react";
import { useLanguage } from "../contexts/language-context";

type Language = "arabic" | "german" | "english" | "french" | "turkish";

interface LanguageOption {
  value: Language;
  label: string;
  flag: ReactElement;
  countryCode?: string;
}

function LanguageSelector() {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("saudi");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    {
      value: "arabic",
      label: "السعودية",
      countryCode: "saudi",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="2"
            ry="2"
            fill="#215230"
          ></rect>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <path
            d="M25.47,15.008c.105-.506-.616-3.171-.092-2.76,.071-.184-.288-.624-.39-.863-.362,1.107,.47,3.281,.2,4.749-.205,.431-1.607,.948-1.937,1.134,.74,.218,2.5-.651,2.218-2.26Z"
            fill="#fff"
          ></path>
        </svg>
      ),
    },
    {
      value: "arabic",
      label: "الإمارات",
      countryCode: "uae",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path
            d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
            fill="#ea3323"
          ></path>
          <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
          <path fill="#fff" d="M10 11H31V21H10z"></path>
          <path
            d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z"
            fill="#317234"
          ></path>
        </svg>
      ),
    },
    {
      value: "arabic",
      label: "مصر",
      countryCode: "egypt",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path fill="#fff" d="M1 11H31V21H1z"></path>
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v4H1V8c0-2.208,1.792-4,4-4Z"
            fill="#be2a2c"
          ></path>
          <path
            d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24)"
          ></path>
        </svg>
      ),
    },
    {
      value: "arabic",
      label: "السودان",
      countryCode: "sudan",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path fill="#fff" d="M1 11H31V21H1z"></path>
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
            fill="#c22b38"
          ></path>
          <path
            d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24)"
          ></path>
          <path
            d="M2.271,26.911l12.729-10.911L2.271,5.089c-.778,.73-1.271,1.76-1.271,2.911V24c0,1.151,.493,2.181,1.271,2.911Z"
            fill="#31712f"
          ></path>
        </svg>
      ),
    },
    {
      value: "turkish",
      label: "Türkçe",
      countryCode: "turkey",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="2"
            ry="2"
            fill="#e30a17"
          ></rect>
          <path
            d="M12.5 16c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5-4.5 2.015-4.5 4.5z"
            fill="#fff"
          ></path>
          <path
            d="M15.5 16c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5z"
            fill="#e30a17"
          ></path>
          <path
            fill="#fff"
            d="M17.5 13.732l.345 1.035h1.118l-.904.657.345 1.035-.904-.657-.904.657.345-1.035-.904-.657h1.118z"
          ></path>
        </svg>
      ),
    },
    {
      value: "arabic",
      label: "العراق",
      countryCode: "iraq",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path fill="#fff" d="M1 11H31V21H1z"></path>
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v4H1V8c0-2.208,1.792-4,4-4Z"
            fill="#bd2a2b"
          ></path>
          <path
            d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24)"
          ></path>
        </svg>
      ),
    },
    {
      value: "arabic",
      label: "سوريا",
      countryCode: "syria",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path fill="#fff" d="M1 11H31V21H1z"></path>
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v4H1V8c0-2.208,1.792-4,4-4Z"
            fill="#be2a2c"
          ></path>
          <path
            d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24)"
          ></path>
          <path
            fill="#357942"
            d="M11.395 16.551L13.36 15.123 10.931 15.123 10.18 12.812 9.429 15.123 7 15.123 8.965 16.551 8.215 18.861 10.18 17.433 12.146 18.861 11.395 16.551z"
          ></path>
          <path
            fill="#357942"
            d="M20.605 16.551L18.64 15.123 21.069 15.123 21.82 12.813 22.571 15.123 25 15.123 23.035 16.551 23.785 18.861 21.82 17.433 19.854 18.861 20.605 16.551z"
          ></path>
        </svg>
      ),
    },
    {
      value: "german",
      label: "Germany",
      countryCode: "germany",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path fill="#cc2b1d" d="M1 11H31V21H1z"></path>
          <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path>
          <path
            d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24)"
            fill="#f8d147"
          ></path>
        </svg>
      ),
    },
    {
      value: "english",
      label: "Global",
      countryCode: "global",
      flag: (
        <div className="w-6 h-4 bg-gray-100 rounded-sm flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165 120.7c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.3z"></path>
          </svg>
        </div>
      ),
    },
    {
      value: "french",
      label: "France",
      countryCode: "france",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 32 32"
          className="rounded-sm"
        >
          <path fill="#0052b4" d="M1 4h10v24H1V4z"></path>
          <path fill="#fff" d="M11 4h10v24H11V4z"></path>
          <path fill="#d80027" d="M21 4h10v24H21V4z"></path>
        </svg>
      ),
    },
  ];

  // البحث عن اللغة الحالية بناءً على اللغة والدولة المختارة
  const getCurrentLanguage = () => {
    if (language === "arabic") {
      return (
        languages.find((lang) => lang.countryCode === selectedCountry) ||
        languages[0]
      );
    }
    return languages.find((lang) => lang.value === language) || languages[0];
  };

  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (selectedLang: LanguageOption) => {
    // تحديث اللغة
    setLanguage(selectedLang.value);

    // تحديث الدولة المختارة
    if (selectedLang.countryCode) {
      setSelectedCountry(selectedLang.countryCode);
      // حفظ الدولة المختارة في localStorage
      localStorage.setItem("selectedCountry", selectedLang.countryCode);
    }

    setIsOpen(false);
  };

  // تحميل الدولة المحفوظة عند بدء التشغيل
  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative inline-block text-left z-[1200]`}
      ref={dropdownRef}
    >
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
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          } ${isRTL ? "mr-1" : "ml-1"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isRTL ? "left-0" : "right-0"
          } mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[1200]`}
        >
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={`${lang.value}-${lang.countryCode || lang.label}`}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                } ${
                  currentLanguage.countryCode === lang.countryCode
                    ? "bg-blue-50 text-blue-700"
                    : ""
                }`}
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
  );
}

export default React.memo(LanguageSelector);
