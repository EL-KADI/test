"use client"

import { useEffect } from "react";
import { useLanguage } from "../contexts/language-context";

export default function LanguageFromURL() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean); // تقسيم الرابط
    const lastSegment = pathSegments[pathSegments.length - 1]?.toLowerCase();

    switch (lastSegment) {
      case "ar":
      case "arabic":
        setLanguage("arabic");
        break;
      case "en":
      case "english":
        setLanguage("english");
        break;
      case "fr":
      case "french":
        setLanguage("french");
        break;
      case "de":
      case "german":
        setLanguage("german");
        break;
      case "tr":
      case "turkish":
        setLanguage("turkish");
        break;
      default:
        break;
    }
  }, [setLanguage]);

  return null;
}
