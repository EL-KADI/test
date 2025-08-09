import { useLanguage } from '../../contexts/language-context';
import Image from 'next/image';

const CryptocurrenciesSection = () => {
  const { t, isRTL } = useLanguage();

  const cryptocurrencies = [
    {
      image: '/ethereum-logo.svg',
      alt: t('cryptocurrenciesSection.ethereumAlt'),
    },
    {
      image: '/Binance_Logo.svg',
      alt: t('cryptocurrenciesSection.binanceAlt'),
    },
    {
      image: '/Bitcoin.svg',
      alt: t('cryptocurrenciesSection.bitcoinAlt'),
    },
    {
      image: '/tether_large.svg',
      alt: t('cryptocurrenciesSection.tetherAlt'),
    },
  ];

  return (
    <div className="container mt-16 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="lg:text-4xl text-xl mb-6 text-center text-[#2b1f51]">
        {t('cryptocurrenciesSection.mainTitle')}
      </h1>
      <p className="text-[#2b1f51] text-center">
        {t('cryptocurrenciesSection.mainDescription')}
      </p>
      <div className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {cryptocurrencies.map((crypto, index) => (
          <div
            key={index}
            className="bg-white mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 gap-4 shadow-light items-start w-64 transition hover:scale-105 flex flex-col justify-between"
          >
            <Image  loading="lazy" className="h-full mx-auto p-4" src={crypto.image} alt={crypto.alt} width={175} height={175} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptocurrenciesSection;