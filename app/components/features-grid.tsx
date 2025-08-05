"use client";

import { Check } from "lucide-react";
import { useLanguage } from '../../contexts/language-context';

const FeaturesGrid = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    t('featuresGrid.disasterRecovery'),
    t('featuresGrid.emailProtection'),
    t('featuresGrid.threatDetection'),
    t('featuresGrid.centralizedManagement1'),
    t('featuresGrid.centralizedManagement2'),
    t('featuresGrid.centralizedManagement3'),
    t('featuresGrid.centralizedManagement4'),
    t('featuresGrid.centralizedManagement5'),
    t('featuresGrid.centralizedManagement6'),
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 p-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <p className={`text-gray-800 text-sm font-medium leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;