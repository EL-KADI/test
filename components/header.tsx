"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/language-context";
import LanguageSelector from "./language-selector";

export default function Header() {
  const { t, isRTL } = useLanguage();

  const navItems = [
    {
      label: t("nav.home"),
      href: "#",
      hasDropdown: false,
    },
    {
      label: t("nav.hosting"),
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          label: t("hosting.shared"),
          desc: t("hosting.shared.desc"),
          href: "#",
        },
        { label: t("hosting.cloud"), desc: t("hosting.cloud.desc"), href: "#" },
        {
          label: t("hosting.wordpress"),
          desc: t("hosting.wordpress.desc"),
          href: "#",
        },
        {
          label: t("hosting.softaculous"),
          desc: t("hosting.softaculous.desc"),
          href: "#",
        },
        { label: t("hosting.email"), desc: t("hosting.email.desc"), href: "#" },
        {
          label: t("hosting.business"),
          desc: t("hosting.business.desc"),
          href: "#",
        },
        {
          label: t("hosting.developer"),
          desc: t("hosting.developer.desc"),
          href: "#",
        },
        {
          label: t("hosting.tamoor"),
          desc: t("hosting.tamoor.desc"),
          href: "#",
        },
      ],
    },
    {
      label: t("nav.reseller"),
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          label: t("reseller.basic"),
          desc: t("reseller.basic.desc"),
          href: "#",
        },
        { label: t("reseller.plus"), desc: t("reseller.plus.desc"), href: "#" },
        {
          label: t("reseller.ultra"),
          desc: t("reseller.ultra.desc"),
          href: "#",
        },
        {
          label: t("reseller.program"),
          desc: t("reseller.program.desc"),
          href: "#",
        },
      ],
    },
    {
      label: t("nav.servers"),
      href: "/vps",
      hasDropdown: true,
      dropdownItems: [
        { label: t("servers.vps"), desc: t("servers.vps.desc"), href: "#" },
        { label: t("servers.cloud"), desc: t("servers.cloud.desc"), href: "#" },
        {
          label: t("servers.dedicated"),
          desc: t("servers.dedicated.desc"),
          href: "#",
        },
        {
          label: t("servers.licenses"),
          desc: t("servers.licenses.desc"),
          href: "#",
        },
        {
          label: t("servers.support"),
          desc: t("servers.support.desc"),
          href: "#",
        },
        {
          label: t("servers.backup"),
          desc: t("servers.backup.desc"),
          href: "#",
        },
      ],
    },
    {
      label: t("nav.domains"),
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          label: t("domains.register"),
          desc: t("domains.register.desc"),
          href: "#",
        },
        { label: t("domains.local"), desc: t("domains.local.desc"), href: "#" },
        {
          label: t("domains.transfer"),
          desc: t("domains.transfer.desc"),
          href: "#",
        },
        {
          label: t("domains.cloudflare"),
          desc: t("domains.cloudflare.desc"),
          href: "#",
        },
        { label: t("domains.ssl"), desc: t("domains.ssl.desc"), href: "#" },
        { label: t("domains.whois"), desc: t("domains.whois.desc"), href: "#" },
      ],
    },
    {
      label: t("nav.company"),
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: t("company.about"), desc: t("company.about.desc"), href: "#" },
        {
          label: t("company.contact"),
          desc: t("company.contact.desc"),
          href: "#",
        },
        { label: t("company.jobs"), desc: t("company.jobs.desc"), href: "#" },
        { label: t("company.news"), desc: t("company.news.desc"), href: "#" },
        {
          label: t("company.reseller"),
          desc: t("company.reseller.desc"),
          href: "#",
        },
        {
          label: t("company.payment"),
          desc: t("company.payment.desc"),
          href: "#",
        },
      ],
    },
    {
      label: t("nav.technology"),
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: t("tech.security"), desc: t("tech.security.desc"), href: "#" },
        { label: t("tech.speed"), desc: t("tech.speed.desc"), href: "#" },
        { label: t("tech.control"), desc: t("tech.control.desc"), href: "#" },
        {
          label: t("tech.datacenter"),
          desc: t("tech.datacenter.desc"),
          href: "#",
        },
        { label: t("tech.status"), desc: t("tech.status.desc"), href: "#" },
        { label: t("tech.backup"), desc: t("tech.backup.desc"), href: "#" },
      ],
    },
  ];

  return (
    <header
      className="bg-white shadow-sm py-3 hidden lg:block z-50"
      dir={isRTL ? "ltr" : "ltr"}
    >
      {/* Top Bar */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center py-2 text-sm ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex items-center space-x-4 ${
                isRTL ? "space-x-reverse" : ""
              }`}
            >
              <span className="text-gray-600 text-base ">
                {t("header.email")}
              </span>
              <span
                className={`border-e border-e-gray-600 cursor-default select-none text-base mx-5 text-white  ${
                  isRTL ? "translate-x-0.5" : "-translate-x-0.5"
                }`}
              >
                z
              </span>
              <span className="text-base text-gray-600 flex gap-3 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
                {t("header.phone")}
              </span>
            </div>
            <div
              className={`flex items-center space-x-0 ${
                isRTL ? "space-x-reverse" : ""
              }`}
            >
              <div className={isRTL ? "order-first " : "order-last ms-4"}>
                <LanguageSelector />
              </div>
              <Button
                size="sm"
                className=" text-gray-600  translate-x-7 hover:text-gray-900 border-none bg-inherit hover:bg-inherit"
              >
                {t("header.register")}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 translate-x-5 hover:text-gray-900 border-none bg-inherit hover:bg-inherit"
              >
                {t("header.login")}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Login">
                    <g>
                      <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z" />
                      <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z" />
                    </g>
                  </g>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
