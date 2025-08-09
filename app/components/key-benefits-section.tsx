import Image from 'next/image';
import { useLanguage } from '../../contexts/language-context';

const KeyBenefitsSection = () => {
  const { t, isRTL } = useLanguage();

  const benefits = [
    {
      title: t('keyBenefitsSection.pciDssTitle'),
      image: '/control.svg',
      alt: t('keyBenefitsSection.pciDssAlt'),
    },
    {
      title: t('keyBenefitsSection.encryptionTitle'),
      image: '/data-encrypt.svg',
      alt: t('keyBenefitsSection.encryptionAlt'),
    },
    {
      title: t('keyBenefitsSection.secureClientTitle'),
      image: '/secure-client.svg',
      alt: t('keyBenefitsSection.secureClientAlt'),
    },
    {
      title: t('keyBenefitsSection.supportTitle'),
      image: '/laptop.svg',
      alt: t('keyBenefitsSection.supportAlt'),
    },
    {
      title: t('keyBenefitsSection.warrantyTitle'),
      image: '/Security-Monitoring-icon 1.svg',
      alt: t('keyBenefitsSection.warrantyAlt'),
    },
    {
      title: t('keyBenefitsSection.securityTitle'),
      image: '/feat-speed.svg',
      alt: t('keyBenefitsSection.securityAlt'),
    },
  ];

  return (
    <div className="relative mt-16 mb-10 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mb-16">
        <h1 className={`lg:text-4xl text-xl mb-6 text-center font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('keyBenefitsSection.mainTitle')}
        </h1>
        <p className={`text-center mt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('keyBenefitsSection.mainDescription')}
        </p>
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] mx-6 rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
            >
              <Image width={75} height={75} loading='lazy' src={benefit.image} alt={benefit.alt} />
              <h1 className={`text-center text-xs ${isRTL ? 'text-right' : 'text-left'}`}>
                {benefit.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefitsSection;