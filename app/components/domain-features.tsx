"use client";
import { Lock, BarChart3, RefreshCw, Settings, Shield, DollarSign } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

export default function DomainFeatures() {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Lock,
      title: t("domainFeatures.lockTitle"),
      description: t("domainFeatures.lockDescription"),
    },
    {
      icon: BarChart3,
      title: t("domainFeatures.renewalTitle"),
      description: t("domainFeatures.renewalDescription"),
    },
    {
      icon: RefreshCw,
      title: t("domainFeatures.autoRenewalTitle"),
      description: t("domainFeatures.autoRenewalDescription"),
    },
    {
      icon: Settings,
      title: t("domainFeatures.managementTitle"),
      description: t("domainFeatures.managementDescription"),
    },
    {
      icon: Shield,
      title: t("domainFeatures.privacyTitle"),
      description: t("domainFeatures.privacyDescription"),
    },
    {
      icon: DollarSign,
      title: t("domainFeatures.pricingTitle"),
      description: t("domainFeatures.pricingDescription"),
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-24 px-4 py-12" dir={isRTL ? "rtl" : "ltr"}>
      <h1 className="text-2xl md:text-4xl text-center text-[#1f4b8e] mb-12">
        {t("domainFeatures.mainTitle")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={`feature-${index}`} className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full flex  bg-white shadow-sm  translate-y-6">
              <feature.icon className="w-8 h-8 text-[#1f4b8e]" />
            </div>
            <h3 className={`text-xl ${isRTL ? "text-right" : "text-left"} text-gray-900`}>
              {feature.title}
            </h3>
            <p className={`text-gray-600 ${isRTL ? "text-right" : "text-left"} leading-relaxed`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}