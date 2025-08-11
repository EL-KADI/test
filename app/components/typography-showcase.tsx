"use client";
import { useLanguage } from "../../contexts/language-context";

export default function TypographyShowcase() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-6">
          {t("brandGuidelines.typographyTitle")}
        </h1>
        <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          {t("brandGuidelines.typographyDescription")}
        </p>
        <div dir="ltr" className={`flex flex-col ${isRTL ? "items-end" : "items-start"} w-full px-4 md:px-0`}>
          <p className="md:text-base text-sm font-semibold text-black mb-8">
            {t("brandGuidelines.typographyFontName")}
          </p>
          <div className="w-full">
            <p className={`text-sm ${isRTL ? "text-right" : "text-left"} md:text-base text-gray-800 mb-4`}>
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
            <p className={`text-sm ${isRTL ? "text-right" : "text-left"} md:text-base text-gray-800 mb-4`}>
              a b c d e f g h i j k l m n o p q r s t u v w x y z
            </p>
            <p className={`text-sm ${isRTL ? "text-right" : "text-left"} md:text-base text-gray-800`}>
              0 1 2 3 4 5 6 7 8 9 &mdash; &amp; * # @ ? ! / + ( . , : ; )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}