"use client";
import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";
import React from "react";

const containerStyle = {
  transition:
    "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in-out",
};

function Questions() {
  const { t, isRTL } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: t("questions.vpsDefinition"),
      answer: t("questions.vpsDefinitionDesc"),
    },
    {
      question: t("questions.vpsVsShared"),
      answer: t("questions.vpsVsSharedDesc"),
    },
    {
      question: t("questions.vpsVsDedicated"),
      answer: t("questions.vpsVsDedicatedDesc"),
    },
    {
      question: t("questions.vpsLocations"),
      answer: t("questions.vpsLocationsDesc"),
    },
  ];

  return (
    <div style={containerStyle}>
      <section className="py-20 bg-white max-w-6xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-8 gap-8">
            <div className="col-span-8 md:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                <div className="hover:scale-105 relative flex flex-col gap-2 items-center justify-center bg-white shadow-lg p-8 cursor-pointer hover:shadow-2xl duration-300 transition-all">
                  <Image
                    loading="lazy"
                    src="/img_faqicon_1.svg"
                    alt={t("questions.faqAlt")}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                  <p className="text-center text-sm">{t("questions.faq")}</p>
                  <span className="absolute w-1/2 bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 h-0.5"></span>
                </div>
                <div className="hover:scale-105 relative flex flex-col gap-2 items-center justify-center bg-white shadow-lg p-8 cursor-pointer hover:shadow-2xl duration-300 transition-all before:transition-all before:duration-300 before:absolute before:w-0 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:bg-blue-500 before:h-0.5 hover:before:w-1/2">
                  <Image
                    loading="lazy"
                    src="/img_download_1.svg"
                    alt={t("questions.helpCenterAlt")}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                  <p className="text-center text-sm">
                    {t("questions.helpCenter")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6">
              <div className="p-8 flex flex-col gap-3 bg-white shadow-lg rounded">
                {questions.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden transition-all duration-500 ease-in-out rounded-lg mb-2 bg-white"
                    style={{
                      maxHeight: openQuestion === index ? "500px" : "86px",
                    }}
                  >
                    <div
                      className="flex justify-between items-start p-6 cursor-pointer gap-6"
                      onClick={() => toggleQuestion(index)}
                    >
                      <div className="text-lg font-bold text-blue-500 hover:text-black text-right transition-colors duration-300">
                        {item.question}
                      </div>
                      <div className="relative text-2xl mt-1 flex-shrink-0">
                        <Plus
                          className={`transition-all duration-500 ease-in-out text-blue-500 ${
                            openQuestion === index
                              ? "rotate-90 opacity-0"
                              : "rotate-0 opacity-100"
                          }`}
                        />
                        <Minus
                          className={`transition-all duration-500 ease-in-out text-blue-500 absolute top-0 left-0 ${
                            openQuestion === index
                              ? "rotate-0 opacity-100"
                              : "rotate-90 opacity-0"
                          }`}
                        />
                      </div>
                    </div>
                    <div
                      className={`px-6 pb-6 transition-all duration-500 ease-in-out ${
                        openQuestion === index
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform -translate-y-2"
                      }`}
                    >
                      <div
                        className={`text-md  text-gray-700 leading-relaxed" dir="rtl ${
                          isRTL ? "text-right" : "ltr text-left"
                        }`}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Questions);
