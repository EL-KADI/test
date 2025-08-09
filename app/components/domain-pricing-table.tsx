"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

type Domain = {
  tld: string;
  registration: string;
  renewal: string;
  transfer: string;
  protection: string;
};

const tldData: Domain[] = [
  {
    tld: ".com",
    registration: "10.28",
    renewal: "10.48",
    transfer: "10.48",
    protection: "10.28",
  },
  {
    tld: ".net",
    registration: "12.95",
    renewal: "12.95",
    transfer: "12.95",
    protection: "10.28",
  },
  {
    tld: ".org",
    registration: "11.48",
    renewal: "11.48",
    transfer: "11.48",
    protection: "10.28",
  },
  {
    tld: ".info",
    registration: "15.99",
    renewal: "15.99",
    transfer: "15.99",
    protection: "10.28",
  },
  {
    tld: ".biz",
    registration: "13.25",
    renewal: "13.25",
    transfer: "13.25",
    protection: "10.28",
  },
  {
    tld: ".me",
    registration: "19.99",
    renewal: "19.99",
    transfer: "19.99",
    protection: "10.28",
  },
  {
    tld: ".co",
    registration: "24.99",
    renewal: "24.99",
    transfer: "24.99",
    protection: "10.28",
  },
  {
    tld: ".tv",
    registration: "29.99",
    renewal: "29.99",
    transfer: "29.99",
    protection: "10.28",
  },
  {
    tld: ".cc",
    registration: "18.99",
    renewal: "18.99",
    transfer: "18.99",
    protection: "10.28",
  },
  {
    tld: ".ws",
    registration: "22.99",
    renewal: "22.99",
    transfer: "22.99",
    protection: "10.28",
  },
  {
    tld: ".mobi",
    registration: "16.99",
    renewal: "16.99",
    transfer: "16.99",
    protection: "10.28",
  },
  {
    tld: ".name",
    registration: "14.99",
    renewal: "14.99",
    transfer: "14.99",
    protection: "10.28",
  },
  {
    tld: ".pro",
    registration: "17.99",
    renewal: "17.99",
    transfer: "17.99",
    protection: "10.28",
  },
  {
    tld: ".sa",
    registration: "45.99",
    renewal: "45.99",
    transfer: "45.99",
    protection: "10.28",
  },
  {
    tld: ".ae",
    registration: "39.99",
    renewal: "39.99",
    transfer: "39.99",
    protection: "10.28",
  },
  {
    tld: ".eg",
    registration: "35.99",
    renewal: "35.99",
    transfer: "35.99",
    protection: "10.28",
  },
];

export default function DomainPricingTable() {
  const { t, isRTL } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = tldData.filter((item) =>
    item.tld.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 13;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6"
      style={{
        backgroundImage: "url('/bg-pattern.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1F4B8E] mb-2">
            {t("domainPricingTable.title1")}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F4B8E]">
            {t("domainPricingTable.title2")}
          </h2>
        </div>

        {/* Table Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-blue-200">
                  <th
                    className={`px-6 py-4 ${
                      isRTL ? "text-right" : "text-left"
                    } text-sm font-semibold text-gray-700 border-l border-gray-200`}
                  >
                    {t("domainPricingTable.domain")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-l border-gray-200">
                    {t("domainPricingTable.registration")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-l border-gray-200">
                    {t("domainPricingTable.renewal")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-l border-gray-200">
                    {t("domainPricingTable.transfer")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    {t("domainPricingTable.protection")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <td
                      dir="ltr"
                      className={`px-6 py-4 ${
                        isRTL ? "text-right" : "text-left"
                      } font-medium text-gray-900 border-l border-gray-100`}
                    >
                      {item.tld}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 border-l border-gray-100">
                      {isRTL
                        ? `${item.registration}${t(
                            "domainPricingTable.currencySymbol"
                          )}`
                        : `${t("domainPricingTable.currencySymbol")}${
                            item.registration
                          }`}
                    </td>

                    <td className="px-6 py-4 text-center text-gray-700 border-l border-gray-100">
                      {isRTL
                        ? `${item.renewal}${t(
                            "domainPricingTable.currencySymbol"
                          )}`
                        : `${t("domainPricingTable.currencySymbol")}${
                            item.renewal
                          }`}
                    </td>

                    <td className="px-6 py-4 text-center text-gray-700 border-l border-gray-100">
                      {isRTL
                        ? `${item.transfer}${t(
                            "domainPricingTable.currencySymbol"
                          )}`
                        : `${t("domainPricingTable.currencySymbol")}${
                            item.transfer
                          }`}
                    </td>

                    <td className="px-6 py-4 text-center text-gray-700">
                      {isRTL
                        ? `${item.protection}${t(
                            "domainPricingTable.currencySymbol"
                          )}`
                        : `${t("domainPricingTable.currencySymbol")}${
                            item.protection
                          }`}
                    </td>
                  </tr>
                ))}
                {currentData.length === 0 && searchTerm && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      {t("domainPricingTable.noResults")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer with Search and Pagination */}
          <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 ${
                  isRTL ? "right-3" : "left-3"
                }`}
              />
              <Input
                type="text"
                placeholder={t("domainPricingTable.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${isRTL ? "pr-10 text-right" : "pl-10 text-left"}`}
              />
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="text-sm"
              >
                {t("domainPricingTable.previous")}
              </Button>
              {Array.from(
                { length: Math.min(5, totalPages) },
                (_, i) => i + 1
              ).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 p-0 text-sm ${
                    currentPage === page
                      ? "bg-[#1f4b8e] hover:bg-[#1f3b8e] text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="text-sm"
              >
                {t("domainPricingTable.next")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
