"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../public/logo.svg";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import LanguageSelector from "./language-selector";
import AnimatedOnLoad from "./animated-on-load";

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  const [isHostingDropdownOpen, setIsHostingDropdownOpen] = useState(false);
  const [isResellerDropdownOpen, setIsResellerDropdownOpen] = useState(false);
  const [isServersDropdownOpen, setIsServersDropdownOpen] = useState(false);
  const [isDomainsDropdownOpen, setIsDomainsDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isTechnologyDropdownOpen, setIsTechnologyDropdownOpen] =
    useState(false);

  // Mobile menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileHostingOpen, setMobileHostingOpen] = useState(false);
  const [mobileResellerOpen, setMobileResellerOpen] = useState(false);
  const [mobileServersOpen, setMobileServersOpen] = useState(false);
  const [mobileDomainsOpen, setMobileDomainsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileTechnologyOpen, setMobileTechnologyOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileHostingOpen(false);
      setMobileResellerOpen(false);
      setMobileServersOpen(false);
      setMobileDomainsOpen(false);
      setMobileCompanyOpen(false);
      setMobileTechnologyOpen(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className="bg-[#092346] overflow-hidden relative"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Main Content - positioned above background */}
        <div className="relative z-10">
          <div className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto">
            <div
              className={`self-start gap-5 text-[#fdfdfd] opacity-90 hidden lg:flex ${
                isRTL ? "flex-row-reverse" : ""
              }`}
              dir={isRTL ? "ltr" : "ltr"}
            >
              <Link
                href="/"
                className="flex items-center gap-1 cursor-pointer transition-colors hover:text-blue-300"
              >
                <span>{t("nav.home")}</span>
              </Link>
              <div
                className="flex items-center gap-1 cursor-pointer transition-colors relative hover:text-blue-300"
                onMouseEnter={() => setIsHostingDropdownOpen(true)}
                onMouseLeave={() => setIsHostingDropdownOpen(false)}
              >
                <ChevronDown className="w-4 h-4" />
                <span>{t("nav.hosting")}</span>
                {isHostingDropdownOpen && (
                  <div className="absolute top-full cursor-default left-1/2 transform -translate-x-1/2 w-[900px] h-16 bg-transparent z-40"></div>
                )}
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer transition-colors relative hover:text-blue-300"
                onMouseEnter={() => setIsResellerDropdownOpen(true)}
                onMouseLeave={() => setIsResellerDropdownOpen(false)}
              >
                <ChevronDown className="w-4 h-4" />
                <span>{t("nav.reseller")}</span>
                {isResellerDropdownOpen && (
                  <div className="absolute top-full left-1/2 cursor-default transform -translate-x-1/2 w-[700px] h-16 bg-transparent z-40"></div>
                )}
              </div>
              <div
                className="flex items-center top-0 gap-1 cursor-pointer transition-colors relative hover:text-blue-300"
                onMouseEnter={() => setIsServersDropdownOpen(true)}
                onMouseLeave={() => setIsServersDropdownOpen(false)}
              >
                <ChevronDown className="w-4 h-4" />
                <span>{t("nav.servers")}</span>
                {isServersDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform cursor-default -translate-x-1/2 w-[900px] h-16 bg-transparent z-40"></div>
                )}
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer transition-colors relative hover:text-blue-300"
                onMouseEnter={() => setIsDomainsDropdownOpen(true)}
                onMouseLeave={() => setIsDomainsDropdownOpen(false)}
              >
                <ChevronDown className="w-4 h-4" />
                <span>{t("nav.domains")}</span>
                {isDomainsDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform cursor-default -translate-x-1/2 w-[900px] h-16 bg-transparent z-40"></div>
                )}
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer transition-colors relative hover:text-blue-300"
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <ChevronDown className="w-4 h-4" />
                <span>{t("nav.company")}</span>
                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform cursor-default -translate-x-1/2 w-[900px] h-16 bg-transparent z-40"></div>
                )}
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer transition-colors relative hover:text-blue-300"
                onMouseEnter={() => setIsTechnologyDropdownOpen(true)}
                onMouseLeave={() => setIsTechnologyDropdownOpen(false)}
              >
                <ChevronDown className="w-4 h-4" />
                <span>{t("nav.technology")}</span>
                {isTechnologyDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform cursor-default -translate-x-1/2 w-[900px] h-16 bg-transparent z-40"></div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#fdfdfd] p-2 z-[999]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-8">
              <Image
                className="lg:w-[7.2vw] w-[120px] lg:-translate-y-1 2xl:-translate-y-2"
                src={Logo || "/placeholder.svg"}
                alt="Logo Vultr"
              />
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 z-[999] lg:hidden ${
              isMobileMenuOpen
                ? "bg-opacity-50 opacity-100"
                : "bg-opacity-0 opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`fixed ${
                isRTL ? "right-0" : "left-0"
              } top-0 h-full w-80 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-out ${
                isMobileMenuOpen
                  ? "translate-x-0"
                  : isRTL
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between p-4 border-b ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className={isRTL ? "order-first " : "order-last ms-4"}>
                    <LanguageSelector />
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4" dir={isRTL ? "ltr" : "ltr"}>
                <div className="space-y-2">
                  {/* Home */}
                  <Link
                    href="/"
                    dir={isRTL ? "rtl" : "ltr"}
                    className="block py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-gray-700 font-medium">
                      {t("nav.home")}
                    </span>
                  </Link>

                  {/* Hosting */}
                  <div className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                      onClick={() => setMobileHostingOpen(!mobileHostingOpen)}
                    >
                      <span className="text-gray-700 font-medium">
                        {t("nav.hosting")}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          mobileHostingOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileHostingOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pb-3 space-y-3 z-50 relative ${
                          isRTL ? "pr-4  text-right" : " text-left"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/shared-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.shared")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.shared.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/cloud-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.cloud")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.cloud.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/wordpress-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.wordpress")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.wordpress.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/apps-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("softaculousSection.title")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("softaculousSection.description")}
                            </p>
                          </Link>
                          <Link
                            href="/mail-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.email")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.email.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/business-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.business")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.business.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/programers-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.developer")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.developer.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/nomoar-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.tamoor")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.tamoor.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/windows-hosting"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("hosting.windows")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("hosting.windows.description")}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reseller */}
                  <div className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse " : " "
                      }`}
                      onClick={() => setMobileResellerOpen(!mobileResellerOpen)}
                    >
                      <span className="text-gray-700 font-medium">
                        {t("nav.reseller")}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          mobileResellerOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileResellerOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pb-3 space-y-3 z-50 relative ${
                          isRTL ? "pr-4  text-right" : " text-left"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/distributor-basic"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("reseller.basic")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("reseller.basic.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/distributor-plus"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("reseller.plus")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("reseller.plus.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/distributor-ultra"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("reseller.ultra")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("reseller.ultra.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/distributors-program"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("reseller.program")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("reseller.program.desc")}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Servers */}
                  <div className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                      onClick={() => setMobileServersOpen(!mobileServersOpen)}
                    >
                      <span className="text-gray-700 font-medium">
                        {t("nav.servers")}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          mobileServersOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileServersOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pb-3 space-y-3 z-50 relative ${
                          isRTL ? "pr-4  text-right" : " text-left"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/vps"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("servers.vps")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("servers.vps.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/cloud-servers"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("servers.cloud")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("servers.cloud.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/full-servers"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("servers.dedicated")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("servers.dedicated.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/server-licenses"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("servers.licenses")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("servers.licenses.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/server-management"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("servers.support")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("servers.support.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/backups"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("servers.backup")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("servers.backup.desc")}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Domains */}
                  <div className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                      onClick={() => setMobileDomainsOpen(!mobileDomainsOpen)}
                    >
                      <span className="text-gray-700 font-medium">
                        {t("nav.domains")}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          mobileDomainsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileDomainsOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pb-3 space-y-3 z-50 relative ${
                          isRTL ? "pr-4  text-right" : " text-left"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/domains/register"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("domains.register")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("domains.register.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/domains/local"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("domains.local")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("domains.local.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/domains/transfer"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("domains.transfer")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("domains.transfer.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/domains/cloudflare"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("domains.cloudflare")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("domains.cloudflare.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/domains/ssl"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("domains.ssl")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("domains.ssl.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/domains/whois"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("domains.whois")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("domains.whois.desc")}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    >
                      <span className="text-gray-700 font-medium">
                        {t("nav.company")}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          mobileCompanyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileCompanyOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pb-3 space-y-3 z-50 relative ${
                          isRTL ? "pr-4  text-right" : " text-left"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/about"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("company.about")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("company.about.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/contact"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("company.contact")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("company.contact.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/jobs"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("company.jobs")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("company.jobs.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/blog"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("company.news")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("company.news.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/distributors-program"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("company.reseller")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("company.reseller.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/payment"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("company.payment")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("company.payment.desc")}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technology */}
                  <div className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                      onClick={() =>
                        setMobileTechnologyOpen(!mobileTechnologyOpen)
                      }
                    >
                      <span className="text-gray-700 font-medium">
                        {t("nav.technology")}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          mobileTechnologyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileTechnologyOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pb-3 space-y-3 z-50 relative ${
                          isRTL ? "pr-4  text-right" : " text-left"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/security"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("tech.security")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("tech.security.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/speed"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("tech.speed")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("tech.speed.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/static-dashboard"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("tech.control")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("tech.control.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/data-centers"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("tech.datacenter")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("tech.datacenter.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/technology/status"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("tech.status")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("tech.status.desc")}
                            </p>
                          </Link>
                          <Link
                            href="/backups"
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-sm text-gray-800 mb-1">
                              {t("tech.backup")}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {t("tech.backup.desc")}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section مع الخلفيتين */}
          <AnimatedOnLoad
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              className="relative lg:h-[80.6vh] 2xl:h-[82.7vh] xl:h-[84.7vh] h-[88.1vh] flex items-center justify-center z-50 bg-contain bg-bottom xl:bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('/ColumnsBg.svg')`, // خلفية الأعمدة الأساسية
              }}
            >
              {/* الصورة الجديدة فوق الأعمدة - فيها كل العناصر */}

              <div
                className="absolute inset-0 pointer-events-none z-5 bg-contain bg-bottom xl:bg-cover bg-no-repeat animate-wave"
                style={{
                  backgroundImage: `url('/ColumnsElements.svg')`,
                }}
              ></div>

              {/* Desktop Dropdown Menus */}
              {/* Hosting Dropdown Menu */}
              {isHostingDropdownOpen && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
                  onMouseEnter={() => setIsHostingDropdownOpen(true)}
                  onMouseLeave={() => setIsHostingDropdownOpen(false)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-8">
                    <div className="grid grid-cols-3 gap-6">
                      <Link
                        href="/shared-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.shared")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.shared.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/cloud-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.cloud")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.cloud.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/wordpress-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.wordpress")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.wordpress.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/apps-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("softaculousSection.title")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("softaculousSection.description")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/programers-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.developer")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.developer.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/mail-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.email")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.email.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/business-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.business")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.business.desc")}
                          </p>
                        </div>
                      </Link>
             

                      <Link
                        href="/nomoar-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.tamoor")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.tamoor.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/windows-hosting"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("hosting.windows")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("hosting.windows.description")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Reseller Dropdown Menu */}
              {isResellerDropdownOpen && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
                  onMouseEnter={() => setIsResellerDropdownOpen(true)}
                  onMouseLeave={() => setIsResellerDropdownOpen(false)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl w-full mx-8">
                    <div className="grid grid-cols-2 gap-6">
                      <Link
                        href="/distributor-basic"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("reseller.basic")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("reseller.basic.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/distributor-plus"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("reseller.plus")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("reseller.plus.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/distributor-ultra"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("reseller.ultra")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("reseller.ultra.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/distributors-program"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("reseller.program")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("reseller.program.desc")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Servers Dropdown Menu */}
              {isServersDropdownOpen && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
                  onMouseEnter={() => setIsServersDropdownOpen(true)}
                  onMouseLeave={() => setIsServersDropdownOpen(false)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-8">
                    <div className="grid grid-cols-3 gap-6">
                      <Link
                        href="/vps"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("servers.vps")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("servers.vps.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/cloud-servers"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("servers.cloud")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("servers.cloud.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/full-servers"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("servers.dedicated")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("servers.dedicated.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/server-licenses"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("servers.licenses")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("servers.licenses.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/server-management"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("servers.support")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("servers.support.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/backups"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("servers.backup")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("servers.backup.desc")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Domains Dropdown Menu */}
              {isDomainsDropdownOpen && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
                  onMouseEnter={() => setIsDomainsDropdownOpen(true)}
                  onMouseLeave={() => setIsDomainsDropdownOpen(false)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-8">
                    <div className="grid grid-cols-3 gap-6">
                      <Link
                        href="/domains/register"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("domains.register")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("domains.register.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/domains/local"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("domains.local")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("domains.local.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/domains/transfer"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("domains.transfer")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("domains.transfer.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/domains/cloudflare"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("domains.cloudflare")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("domains.cloudflare.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/domains/ssl"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("domains.ssl")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("domains.ssl.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/domains/whois"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("domains.whois")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("domains.whois.desc")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Company Dropdown Menu */}
              {isCompanyDropdownOpen && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-8">
                    <div className="grid grid-cols-3 gap-6">
                      <Link
                        href="/about"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("company.about")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("company.about.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("company.contact")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("company.contact.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/jobs"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("company.jobs")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("company.jobs.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/blog"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("company.news")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("company.news.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/distributors-program"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("company.reseller")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("company.reseller.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/payment"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("company.payment")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("company.payment.desc")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Technology Dropdown Menu */}
              {isTechnologyDropdownOpen && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
                  onMouseEnter={() => setIsTechnologyDropdownOpen(true)}
                  onMouseLeave={() => setIsTechnologyDropdownOpen(false)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-8">
                    <div className="grid grid-cols-3 gap-6">
                      <Link
                        href="/security"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("tech.security")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("tech.security.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/speed"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("tech.speed")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("tech.speed.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/static-dashboard"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("tech.control")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("tech.control.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/data-centers"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("tech.datacenter")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("tech.datacenter.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/technology/status"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("tech.status")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("tech.status.desc")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/backups"
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <div
                          className={`${isRTL ? "text-right" : "text-left"}`}
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {t("tech.backup")}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {t("tech.backup.desc")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Center Content */}
              <AnimatedOnLoad
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`text-center z-10 max-w-4xl mx-auto px-4 relative  -mt-10 ${
                  isRTL ? "text-center" : "text-left"
                }`}
              >
                <div
                  className={`text-center z-10 max-w-4xl mx-auto px-4 relative  -translate-y-16 sm:-translate-y-20 lg:translate-y-0 -mt-10 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  <h1 className="text-[72px] text-[#3684ff] font-bold mb-0">
                    {t("hero.title")}
                  </h1>

                  <h2 className="text-[36px] -mt-2 text-white">
                    {t("hero.subtitle")}
                  </h2>

                  <p className="text-[24px] mb-5 mt-2 text-white font-thin max-w-2xl mx-auto">
                    {t("hero.description")}
                  </p>

                  <div
                    className={`flex items-center justify-start max-w-[34rem] mx-auto bg-white rounded-full p-1 ${
                      isRTL ? "flex-row-reverse" : "flex-row-reverse"
                    }`}
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-8 text-[16px] py-3 rounded-full">
                      {t("hero.search")}
                    </button>
                    <input
                      type="text"
                      placeholder={t("hero.searchPlaceholder")}
                      className={`flex-1 px-4 py-2 placeholder:text-lg rounded-md text-gray-600 text-sm border-none outline-none bg-transparent placeholder:text-gray-400 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className="flex justify-center items-center mx-auto mt-8">
                    <img src="/Certificates.svg" alt="" />
                  </div>
                </div>
              </AnimatedOnLoad>
            </div>
          </AnimatedOnLoad>
        </div>
      </div>
    </>
  );
}
