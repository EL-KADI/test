import Link from "next/link";
import { useLanguage } from '../../contexts/language-context';
import Image from "next/image";

const PaymentMethodsSection = () => {
  const { t, isRTL } = useLanguage();

  const paymentMethods = [
    {
      title: t('paymentMethodsSection.bankakTitle'),
      description: t('paymentMethodsSection.bankakDescription'),
      image: '/bankak.webp',
      alt: t('paymentMethodsSection.bankakAlt'),
    },
    {
      title: t('paymentMethodsSection.ibanTitle'),
      description: t('paymentMethodsSection.ibanDescription'),
      image: '/lban.webp',
      alt: t('paymentMethodsSection.ibanAlt'),
    },
    {
      title: t('paymentMethodsSection.instantTitle'),
      description: t('paymentMethodsSection.instantDescription'),
      image: '/faory.webp',
      alt: t('paymentMethodsSection.instantAlt'),
    },
    {
      title: t('paymentMethodsSection.oowCashTitle'),
      description: t('paymentMethodsSection.oowCashDescription'),
      image: '/oowCash.webp',
      alt: t('paymentMethodsSection.oowCashAlt'),
    },
  ];

  return (
    <div className="container mt-24 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="lg:text-4xl text-xl mb-6 text-center text-[#2b1f51] ">
        {t('paymentMethodsSection.mainTitle')}
      </h1>
      <p className="text-center text-[#2b1f51] ">
        {t('paymentMethodsSection.mainDescription')}
      </p>
      <div className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex gap-4 shadow-light items-start w-64 transition hover:scale-105 flex-col justify-between"
          >
            <Image width={350} height={350} loading="lazy" className="h-36 mx-auto p-4 " src={method.image} alt={method.alt} />
            <div className="relative ">
              <h1 className={`my-6 text-xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                {method.title}
              </h1>
              <p className={`text-sm font-thin ${isRTL ? 'text-right' : 'text-left'}`}>
                {method.description}
              </p>
            </div>
            <div>
              <Link href="#" className="mt-auto" data-discover="true">
                {t('paymentMethodsSection.moreLink')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodsSection;