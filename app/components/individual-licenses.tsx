import { Plus } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";
import Image from "next/image";

export default function IndividualLicenses() {
  const { t } = useLanguage();

  const licenses = [
    {
      id: 1,
      name: t("individualLicenses.license.cloudLinux"),
      image: "/Cloudlinux.svg",
      alt: t("individualLicenses.license.cloudLinuxAlt"),
      price: "15.00",
    },
    {
      id: 2,
      name: t("individualLicenses.license.whmcs"),
      image: "/whmcs-logo.svg",
      alt: t("individualLicenses.license.whmcsAlt"),
      price: "15.00",
    },
    {
      id: 3,
      name: t("individualLicenses.license.kernelCare"),
      image: "/kernel-care-new-logo.svg",
      alt: t("individualLicenses.license.kernelCareAlt"),
      price: "15.00",
    },
    {
      id: 4,
      name: t("individualLicenses.license.liteSpeed"),
      image: "/litespeed-logo.svg",
      alt: t("individualLicenses.license.liteSpeedAlt"),
      price: "15.00",
    },
    {
      id: 5,
      name: t("individualLicenses.license.directAdmin"),
      image: "/jet-logo.svg",
      alt: t("individualLicenses.license.directAdminAlt"),
      price: "15.00",
    },
    {
      id: 6,
      name: t("individualLicenses.license.cPanelWHM"),
      image: "/cpanel-whm.svg",
      alt: t("individualLicenses.license.cPanelWHMAlt"),
      price: "15.00",
    },
    {
      id: 7,
      name: t("individualLicenses.license.softaculous"),
      image: "/Layer.svg",
      alt: t("individualLicenses.license.softaculousAlt"),
      price: "15.00",
    },
    {
      id: 8,
      name: t("individualLicenses.license.cloudLinuxPro"),
      image: "/Cloudlinux.svg",
      alt: t("individualLicenses.license.cloudLinuxProAlt"),
      price: "15.00",
    },
  ];

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <div className="mt-32">
          <div className="text-center mb-16">
            <h1
              className="lg:text-4xl text-xl mb-6 font-semibold text-gray-800"
             
            >
              {t("individualLicenses.title")}
            </h1>
            <p className="mt-4 mb-12 text-gray-600 text-lg" dir="rtl">
              {t("individualLicenses.description")}
            </p>
          </div>
          <div className="lg:px-16 md:px-8 px-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
              {licenses.map((license) => (
                <div
                  key={license.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl py-6 px-4 flex items-center justify-between gap-4 flex-col transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-full h-20 flex items-center justify-center mb-4">
                    <Image
                      width={150}
                      height={150}
                      loading="lazy"
                      src={license.image}
                      alt={license.alt}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <div className="px-2 flex items-center justify-between mt-4">
                      <div className="flex items-end">
                        <h2 className="lg:text-4xl text-2xl text-[#2b1f51] font-bold">
                          ${license.price}
                        </h2>
                        <span className="text-[#2b1f51]/70 text-sm font-semibold mb-1 mr-1">
                          {t("individualLicenses.monthly")}
                        </span>
                      </div>
                      <button className="bg-[#2b1f51] hover:from-blue-700 hover:to-blue-800 rounded-full p-2 cursor-pointer transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg">
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}