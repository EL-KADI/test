"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import Link from "next/link";
import LanguageSelectorTwo from "./language-selector-two";
import Image from "next/image";

const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer
      className="shadow-[0_0_20px_0_rgba(0,0,0,0.08)] py-8 px-6 mt-28 "
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8  ">
          {/* First Column */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoFooter.svg"
              alt="Logo"
              width={100}
              height={100}
              className={`mb-4 max-w-[350px] lg:w-full ${
                isRTL ? "2xl:translate-x-8" : "2xl:-translate-x-8"
              }`}
            />
            <p
              className={`text-[#878787] text-base 2xl:w-64  ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("footer.socialMedia")}
            </p>
            <div
              className={`flex space-x-4  justify-center mt-8   ${
                isRTL ? "space-x-reverse 2xl:translate-x-9 lg:-translate-x-9" : "2xl:-translate-x-5 lg:translate-x-9"
              }`}
            >
              <Facebook className="w-10 h-10 text-white bg-[#A5A5A5] rounded-sm p-1 hover:bg-[#4267B2] duration-300 cursor-pointer" />
              <Twitter className="w-10 h-10 text-white bg-[#A5A5A5] rounded-sm p-1 hover:bg-[#1DA1F2] duration-300 cursor-pointer" />
              <Linkedin className="w-10 h-10 text-white bg-[#A5A5A5] rounded-sm p-1 hover:bg-[#0A66C2] duration-300 cursor-pointer" />
              <Instagram className="w-10 h-10 text-white bg-[#A5A5A5] rounded-sm p-1 hover:bg-[#DD2A7B] duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Column 2 - Company */}
          <div
            className={`  ${isRTL ? "lg:-translate-x-10" : "lg:translate-x-5"}`}
          >
            <h3 className="font-bold mb-2 text-[#5B5B5B] text-base ">
              {t("footer.company")}
            </h3>
            <ul className="text-[#878787] flex flex-col gap-y-2 text-base">
              <li className="hover:text-black/70  duration-200 cursor-pointer">
                {t("footer.aboutUs")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.jobs")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.contactUs")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.mediaCenter")}
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="font-bold mb-2 text-[#5B5B5B] text-xl">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="text-[#878787] flex flex-col gap-y-2 text-base">
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.hosting")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.domains")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.vps")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.serverSupport")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.whois")}
              </li>
            </ul>
          </div>

          {/* Column 4 - Technology */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="font-bold mb-2 text-[#5B5B5B] text-xl">
              {t("footer.technology")}
            </h3>
            <ul className="text-[#878787] flex flex-col gap-y-2 text-base">
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.speed")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.security")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.controlPanel")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.backups")}
              </li>
            </ul>
          </div>

          {/* Column 5 - Legal */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="font-bold mb-2 text-[#5B5B5B] text-xl">
              {t("footer.legal")}
            </h3>
            <ul className="text-[#878787] flex flex-col gap-y-2 text-base">
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.privacy")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.paymentMethods")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.sslCertificates")}
              </li>
              <li className="hover:text-black/70  duration-200 cursor-pointer ">
                {t("footer.partners")}
              </li>
            </ul>
          </div>

          {/* Last Column */}
          <div className="flex flex-col lg:items-center lg:text-center">
            <h3 className="font-semibold text-[#5B5B5B] mb-2 text-xl">
              {t("footer.contact")}
            </h3>
            <Button className="bg-[#1FA536] text-white hover:bg-green-700 flex items-center lg:text-lg rounded-xl xl:w-full w-40  gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              +966551234567
            </Button>
            <div className=" lg:grid lg:grid-cols-1  flex  max-w-xs    py-0">
  
                  <Image

                    src="payments-compny.webp"
                    alt="visa, mastercard, paypal, cib, vodafone, mada"
                      width={250}
              height={250}
                    className=" my-4 max-w-44 lg:max-w-full md:translate-x-1 lg:translate-x-0 "
                  />
         
            </div>
            <div className="bg-[#F36C34] py-0 px-0 rounded-lg flex justify-center items-center lg:w-[75%] w-1/2">
              <Image
                src="/Cpanel.webp"
                alt="cPanel"
                  width={40}
              height={40}
                className="lg:w-full w-9/12  rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-gray-400 opacity-30 mt-8" />
        <div
          className={`flex justify-between max-w-6xl mx-auto items-center py-6 ${
            isRTL ? "flex-row-reverse" : "flex-row-reverse"
          }`}
        >
          <div>
            <Link
              href={"#"}
              className={`text-black/70 text-sm border-b border-black/40 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("footer.privacyPolicy")}
            </Link>
          </div>
          <div
            className={`flex ${
              isRTL
                ? "me-auto justify-end items-end"
                : "me-auto justify-start items-start"
            }`}
          >
            <LanguageSelectorTwo />
          </div>
        </div>
        <div className="text-black text-sm text-center opacity-55">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
