import Image from 'next/image';
import { useLanguage } from '../../contexts/language-context';

const WalletsSection = () => {
  const { t, isRTL } = useLanguage();

  const wallets = [
    {
      title: t('walletsSection.sdadTitle'),
      description: t('walletsSection.sdadDescription'),
      image: '/sdad.webp',
      alt: t('walletsSection.sdadAlt'),
    },
    {
      title: t('walletsSection.paypalTitle'),
      description: t('walletsSection.paypalDescription'),
      image: '/paypal.webp',
      alt: t('walletsSection.paypalAlt'),
    },
    {
      title: t('walletsSection.vodafoneTitle'),
      description: t('walletsSection.vodafoneDescription'),
      image: '/vodafon.webp',
      alt: t('walletsSection.vodafoneAlt'),
    },
    {
      title: t('walletsSection.zainTitle'),
      description: t('walletsSection.zainDescription'),
      image: '/zien.svg',
      alt: t('walletsSection.zainAlt'),
    },
  ];

  return (
    <div className="container mt-16 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="lg:text-4xl text-xl mb-6 text-center text-[#2b1f51] ">
        {t('walletsSection.mainTitle')}
      </h1>
      <p className="text-[#2b1f51] text-center ">
        {t('walletsSection.mainDescription')}
      </p>
      <div className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {wallets.map((wallet, index) => (
          <div
            key={index}
            className="bg-white  mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 gap-4 shadow-light items-start w-64 transition hover:scale-105 flex flex-col justify-between"
          >
            <Image width={250} height={250} loading='lazy' className="h-36 mx-auto p-4" src={wallet.image} alt={wallet.alt} />
            <div className="relative">
              <h1 className={`my-6 text-xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                {wallet.title}
              </h1>
              <p className={`text-sm font-thin ${isRTL ? 'text-right' : 'text-left'}`}>
                {wallet.description}
              </p>
            </div>
            <div>
              <a className="mt-auto" href="/payment" data-discover="true">
                {t('walletsSection.moreLink')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletsSection;