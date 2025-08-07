import Image from 'next/image';
import { useLanguage } from '../../contexts/language-context';

const WhoisToolSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="container mt-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8">
        <Image
          className={`w-5/6 ${isRTL ? 'lg:ms-auto' : 'lg:me-auto'} mx-auto`}
          alt={t('whoisToolSection.imageAlt')}
          src="/security-img.svg"
          width={500}
          height={500}
        />
        <div className="grid-flow-dense">
          <h1 className={`text-3xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('whoisToolSection.title')}
          </h1>
          <p className={`mt-8 font-normal text-sm text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('whoisToolSection.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoisToolSection;