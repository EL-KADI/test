import { useLanguage } from '../../contexts/language-context';

const TraditionalPaymentSection = () => {
  const { t, isRTL } = useLanguage();

  const paymentMethods = [
    {
      title: t('traditionalPaymentSection.cdnTitle'),
      description: t('traditionalPaymentSection.cdnDescription'),
      image: 'card.svg',
      alt: t('traditionalPaymentSection.cdnAlt'),
    },
    {
      title: t('traditionalPaymentSection.ddosTitle'),
      description: t('traditionalPaymentSection.ddosDescription'),
      image: 'transfer.svg',
      alt: t('traditionalPaymentSection.ddosAlt'),
    },
    {
      title: t('traditionalPaymentSection.securityTitle'),
      description: t('traditionalPaymentSection.securityDescription'),
      image: 'cash.svg',
      alt: t('traditionalPaymentSection.securityAlt'),
    },
  ];

  return (
    <div className="relative my-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="lg:text-4xl text-xl mb-6  text-[#2b1f51] text-center">
        {t('traditionalPaymentSection.mainTitle')}
      </h1>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start shadow-light flex-col gap-4 justify-between transition hover:scale-105"
            >
              <img
                className="mx-auto p-4"
                src={method.image}
                alt={method.alt}
              />
              <div className="relative ">
                <h1 className={`mb-6 text-xl ${isRTL ? 'text-right' : 'text-left'}`}>
                  {method.title}
                </h1>
                <p className={`text-sm font-thin ${isRTL ? 'text-right' : 'text-left'}`}>
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionalPaymentSection;