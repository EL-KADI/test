'use client';

import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export default function FeatureSectionFullServer() {
  const { t, isRTL } = useLanguage();

  const services = [
    t('serverServices.emailProtection'),
    t('serverServices.malwareProtection'),
    t('serverServices.networkSecurity'),
    t('serverServices.cloudMigration'),
    t('serverServices.threatDetection'),
    t('serverServices.identityProtection'),
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="mx-auto py-16 md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-12">
          <h2 className="text-3xl font-bold text-[#2B1F51] text-center mb-12 font-arabic">
            {t('serverServices.mainTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 md:p-6 p-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 border-[#002f6c] border-2 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#002f6c]" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}