import { useLanguage } from '../../contexts/language-context';
import Image from 'next/image';

const BenefitsSection = () => {
  const { t, isRTL } = useLanguage();

  const benefits = [
    {
      title: t('benefitsSection.trainingTitle'),
      image: '/stat.svg',
      alt: t('benefitsSection.trainingAlt'),
    },
    {
      title: t('benefitsSection.leaveTitle'),
      image: '/wins.svg',
      alt: t('benefitsSection.leaveAlt'),
    },
    {
      title: t('benefitsSection.rewardsTitle'),
      image: '/cup.svg',
      alt: t('benefitsSection.rewardsAlt'),
    },
    {
      title: t('benefitsSection.insuranceTitle'),
      image: '/heart.svg',
      alt: t('benefitsSection.insuranceAlt'),
    },
  ];

  return (
    <div className="container mt-32 text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className={`lg:text-4xl text-xl mb-6 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('benefitsSection.mainTitle')}
      </h1>
      <p className={isRTL ? 'text-right' : 'text-left'}>
        {t('benefitsSection.description')}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
          >
            <Image src={benefit.image} alt={benefit.alt} width={40} height={40} />
            <h1 className={`text-center text-xs ${isRTL ? 'text-right' : 'text-left'}`}>
              {benefit.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;