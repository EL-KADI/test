"use client";
import type React from "react";
import Image from 'next/image';
import { useLanguage } from "../../contexts/language-context";

export default function Bouquets() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="mt-48 relative" dir="rtl">
      {/* Right decorative SVG */}
      <Image
        className="absolute right-0 -top-52 -z-10"
        alt="Right Bg"
        src="Rbg.svg"
        width={500}
        height={500} loading="lazy"
      />
      {/* Left decorative SVG */}
      <Image
        className="absolute left-0 -top-52 -z-10"
        alt="Left Bg"
        src="Lbg.svg"
        width={500}
        height={500} loading="lazy"
      />
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="lg:text-4xl text-xl mb-6 text-center">
          {t("bouquets.choosePlan")}
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
          {/* First Card - Secondary2 border */}
          <div className="rounded-md bg-white border-t-8 text-center p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105 border-[#FBE06B]">
            <h1 className="text-3xl ms-4">{t("bouquets.native")}</h1>
            <h1 className="mt-4 lg:text-6xl md:text-4xl text-2xl font-light">
              91.30
            </h1>
            <p className="opacity-40 mb-4">{t("bouquets.quarterly")}</p>
            {/* Space for image - you can add your image here */}
            <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse">
              {/* Add your image here */}
            </div>
            <div className="mt-8 mx-auto">
              <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2B1F51] hover:border-2 hover:border-[#2B1F51] text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer ">
                <p>{t("bouquets.orderNow")}</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full h-[3px] bg-black bg-opacity-5"></div>
              <div className={`mt-4 ${isRTL ? "text-right" : "text-left"}`}>
                <h1>
                  <strong>60GB</strong> {t("bouquets.nvmeStorage")}
                </h1>
                <h1 className="mt-4">
                  <strong>15</strong> {t("bouquets.websites")}
                </h1>
                <h1 className="mt-4">
                  <strong>4</strong> {t("bouquets.ram")}
                </h1>
                <h1 className="mt-4">
                  <strong>3</strong> {t("bouquets.cpu")}
                </h1>
                <h1 className="mt-4">{t("bouquets.controlPanel")}</h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.subdomains")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.mysqlDatabases")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.emailAccount")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.ftpAccounts")}
                </h1>
                <p className="mt-4">{t("bouquets.oneClickInstaller")}</p>
                <div className="w-full h-[2px] bg-black bg-opacity-5 mt-8"></div>
                <p className="mt-8 text-center">
                  {t("bouquets.comparePackages")}
                </p>
              </div>
            </div>
          </div>
          {/* Second Card - Secondary border */}
          <div className="rounded-md bg-white border-t-8 text-center p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105 border-[#E5E7EB]">
            <h1 className="text-3xl ms-4">{t("bouquets.native")}</h1>
            <h1 className="mt-4 lg:text-6xl md:text-4xl text-2xl font-light">
              91.30
            </h1>
            <p className="opacity-40 mb-4">{t("bouquets.quarterly")}</p>
            {/* Space for image - you can add your image here */}
            <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse">
              {/* Add your image here */}
            </div>
            <div className="mt-8 mx-auto">
              <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2B1F51] hover:border-2 hover:border-[#2B1F51] text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer ">
                <p>{t("bouquets.orderNow")}</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full h-[3px] bg-black bg-opacity-5"></div>
              <div  className={`mt-4 ${isRTL ? "text-right" : "text-left"}`}>
                <h1>
                  <strong>60GB</strong> {t("bouquets.nvmeStorage")}
                </h1>
                <h1 className="mt-4">
                  <strong>15</strong> {t("bouquets.websites")}
                </h1>
                <h1 className="mt-4">
                  <strong>4</strong> {t("bouquets.ram")}
                </h1>
                <h1 className="mt-4">
                  <strong>3</strong> {t("bouquets.cpu")}
                </h1>
                <h1 className="mt-4">{t("bouquets.controlPanel")}</h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.subdomains")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.mysqlDatabases")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.emailAccount")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.ftpAccounts")}
                </h1>
                <p className="mt-4">{t("bouquets.oneClickInstaller")}</p>
                <div className="w-full h-[2px] bg-black bg-opacity-5 mt-8"></div>
                <p className="mt-8 text-center">
                  {t("bouquets.comparePackages")}
                </p>
              </div>
            </div>
          </div>
          {/* Third Card - Primary-400 border */}
          <div className="rounded-md bg-white border-t-8 text-center p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105 border-[#7F6FCB]">
            <h1 className="text-3xl ms-4">{t("bouquets.native")}</h1>
            <h1 className="mt-4 lg:text-6xl md:text-4xl text-2xl font-light">
              91.30
            </h1>
            <p className="opacity-40 mb-4">{t("bouquets.quarterly")}</p>
            {/* Space for image - you can add your image here */}
            <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse">
              {/* Add your image here */}
            </div>
            <div className="mt-8 mx-auto">
              <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2B1F51] hover:border-2 hover:border-[#2B1F51] text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer">
                <p>{t("bouquets.orderNow")}</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full h-[3px] bg-black bg-opacity-5"></div>
              <div  className={`mt-4 ${isRTL ? "text-right" : "text-left"}`}>
                <h1>
                  <strong>60GB</strong> {t("bouquets.nvmeStorage")}
                </h1>
                <h1 className="mt-4">
                  <strong>15</strong> {t("bouquets.websites")}
                </h1>
                <h1 className="mt-4">
                  <strong>4</strong> {t("bouquets.ram")}
                </h1>
                <h1 className="mt-4">
                  <strong>3</strong> {t("bouquets.cpu")}
                </h1>
                <h1 className="mt-4">{t("bouquets.controlPanel")}</h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.subdomains")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.mysqlDatabases")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.emailAccount")}
                </h1>
                <h1 className="mt-4">
                  <strong>Unlimited</strong> {t("bouquets.ftpAccounts")}
                </h1>
                <p className="mt-4">{t("bouquets.oneClickInstaller")}</p>
                <div className="w-full h-[2px] bg-black bg-opacity-5 mt-8"></div>
                <p className="mt-8 text-center">
                  {t("bouquets.comparePackages")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}