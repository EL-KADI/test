'use client';
import { useState, useRef, useEffect, type ReactElement } from "react";
import { useLanguage } from "../contexts/language-context"; // تأكد من المسار الصحيح

type Language = "arabic" | "german" | "english" | "french" | "turkish";

interface LanguageOption {
  value: Language;
  label: string;
  flag: ReactElement;
  countryCode: string;
}

export default function LanguageSelector() {
  // استخدم selectedCountry و setSelectedCountry من الـ context
  const { language, setLanguage, isRTL, t, selectedCountry, setSelectedCountry } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    {
      value: "arabic",
      label: t("languageSelector.saudi"),
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
      label: t("languageSelector.uae"),
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
      label: t("languageSelector.egypt"),
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
      label: t("languageSelector.sudan"),
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
      value: "arabic",
      label: t("languageSelector.oman"),
      countryCode: "oman",
      flag: (<svg viewBox="0 0 36 36" width="24" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="rounded-sm" preserveAspectRatio="xMidYMid meet" fill="#000000"> <g id="SVGRepo_bgCarrier" strokeWidth={0}></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="green" d="M8 31h24a4 4 0 0 0 4-4v-4H8v8z" /> <path fill="#EEE" d="M32 5H8v8h28V9a4 4 0 0 0-4-4z" /> <path fill="#DB161B" d="M36 13H9V5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h5v-8h27V13z" /> <g fill="#EEE"> <path d="M3.625 8.453c.313.567.313.789.222.839c-.09.05-.238-.09-.55-.657c-.313-.567-.672-1.345-.582-1.395c.091-.051.597.647.91 1.213zM5.516 8.104c-.313.567-.493 1.067-.402 1.117c.09.05.417-.369.73-.935c.312-.567.493-1.067.402-1.117c-.091-.05-.418.369-.73.935zM4.953 9.016l-.297-1.422l-.028-.006c.103-.049.184-.126.184-.237c0-.16-.147-.289-.328-.289s-.328.13-.328.29c0 .108.075.193.175.243l-.284 1.436l.906-.015z" /> <path d="M6.703 11.766c-.271-.226-1.349-1.159-1.861-1.716c.046-.16.073-.332.062-.516h.017v.008h.891v.172h1.094v-.531H5.812v.172h-.89v.008h-.031v-.269h-.813v.269H3.75v.016h-.641v-.22H2.078v.578h1.031v-.218h.641v.016h.276l-.036.374s-1.039.046-1.318.091c-.688.109-.469.312.094.5c.259.086.517.12.761.133c-.397.424-1.207 1.053-1.402 1.164c-.219.125-.219.281.203.188c.409-.091 1.355-.926 1.684-1.348l.285-.012c.15-.006.269-.1.369-.224c.427.505 1.264 1.254 1.6 1.458c.359.219.527.214.654.193c.127-.021.064-.052-.217-.286z" /> </g> </g></svg>
      ),
    },
    {
      value: "arabic",
      label: t("languageSelector.qatar"),
      countryCode: "qatar",
      flag: (<svg viewBox="0 0 36 36" width="24" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="rounded-sm" preserveAspectRatio="xMidYMid meet" fill="#000000"> <g id="SVGRepo_bgCarrier" strokeWidth={0} /> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /> <g id="SVGRepo_iconCarrier"> <path fill="#8D1B3D" d="M32 5H11v26h21a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z" /> <path fill="#EEE" d="M11 28.111l5.295-1.444L11 25.222l5.295-1.444L11 22.333l5.295-1.444L11 19.444L16.295 18L11 16.556l5.295-1.444L11 13.667l5.295-1.444L11 10.778l5.295-1.445L11 7.889l5.295-1.444L11 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h7l5.295-1.444L11 28.111z" /> </g> </svg>
      ),
    },
    {
      value: "arabic",
      label: t("languageSelector.iraq"),
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
      label: t("languageSelector.syria"),
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
      value: "turkish",
      label: t("languageSelector.turkey"),
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
      value: "german",
      label: t("languageSelector.germany"),
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
      value: "french",
      label: t("languageSelector.france"),
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
    {
      value: "english",
      label: "Global",
      countryCode: "global",
      flag: (
        <div className="w-6 h-4 bg-gray-100 rounded-sm flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            className="w-8 h-8"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z" />
          </svg>
        </div>
      ),
    },
  ];

  // العثور على اللغة الحالية
  const currentLanguage =
    languages.find((lang) => lang.countryCode === selectedCountry) ||
    languages[0];

  const handleLanguageChange = (selectedLang: LanguageOption) => {
    setLanguage(selectedLang.value);
    setSelectedCountry(selectedLang.countryCode); // <--- هذا سيحدث selectedCountry في الـ context
    // حفظ كل من اللغة والدولة في localStorage
    localStorage.setItem("selectedLanguage", selectedLang.value);
    localStorage.setItem("selectedCountry", selectedLang.countryCode);
    // تطبيق الـ direction على الـ body
    const direction = selectedLang.value === "arabic" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.body.style.direction = direction;
    setIsOpen(false);
  };

  // useEffect لتحميل اللغة والدولة المحفوظة عند بدء التطبيق
  // هذا الـ useEffect في LanguageSelector لم يعد ضرورياً بنفس القدر
  // لأن LanguageProvider هو من يقوم بالتحميل الأولي
  // ولكن يمكن الاحتفاظ به إذا كان هناك منطق إضافي يعتمد على هذا المكون
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language;
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedLanguage && savedCountry) {
      // تحديث الـ state في الـ context إذا كانت مختلفة
      if (savedLanguage !== language) {
        setLanguage(savedLanguage);
      }
      if (savedCountry !== selectedCountry) { // <--- تأكد من تحديث selectedCountry هنا أيضاً إذا كان مختلفاً
        setSelectedCountry(savedCountry);
      }
      const direction = savedLanguage === "arabic" ? "rtl" : "ltr";
      document.documentElement.dir = direction;
      document.body.style.direction = direction;
    }
  }, [language, setLanguage, selectedCountry, setSelectedCountry]); // أضف selectedCountry و setSelectedCountry كـ dependencies

  // منع السكرول الأفقي عند تغيير الاتجاه
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
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

  // قم بإزالة countryRectsData من هنا، لأنه يجب أن يكون في مكون الـ SVG
  // const countryRectsData = { ... };

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
        <svg
          className={`w-4 h-4 transition-transform flex-shrink-0 ${
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
            isRTL ? "-left-3" : "-right-10"
          } mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 max-h-64 overflow-y-auto`}
        >
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.countryCode}
                className={`w-full flex items-center gap-3 overflow-hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                } ${
                  selectedCountry === lang.countryCode
                    ? "bg-blue-50 text-blue-700"
                    : ""
                }`}
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
  );
}
