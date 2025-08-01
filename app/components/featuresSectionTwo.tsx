import { Check } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionTwo() {
  const { t } = useLanguage();

  const features = [
    t("keyFeatures.feature.backupRecovery"),
    t("keyFeatures.feature.malwareProtection"),
    t("keyFeatures.feature.deviceProtection"),
    t("keyFeatures.feature.threatDetection"),
    t("keyFeatures.feature.emailProtection"),
    t("keyFeatures.feature.disasterRecovery"),
    t("keyFeatures.feature.centralManagement"),
    t("keyFeatures.feature.centralManagement"),
    t("keyFeatures.feature.centralManagement"),
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="lg:text-4xl text-xl mb-6 text-center my-36">{t("keyFeatures.title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto justify-items-center px-4 sm:px-6 lg:px-24">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 p-6 w-full max-w-[22rem]">
            <div className="w-6 h-6 rounded-full mx-2 border-2 border-black flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-sm leading-relaxed font-medium ">{feature}</p>
            </div>
            <div className="flex-shrink-0 mt-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}