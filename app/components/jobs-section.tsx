import { useLanguage } from '@/contexts/language-context';

const JobsSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="mt-64 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <img
        className="absolute top-0 right-0 -z-10"
        alt={t('jobsSection.rightBackgroundAlt')}
        src="/Rbg.svg"
      />
      <img
        className="absolute top-0 left-0 -z-10"
        alt={t('jobsSection.leftBackgroundAlt')}
        src="/Lbg.svg"
      />
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <img alt={t('jobsSection.lampImageAlt')} src="/lamp.svg" />
          <div className={`flex flex-col justify-center items-start ${isRTL ? 'me-auto' : 'ms-auto'}`}>
            <h1 className={`font-semibold ${isRTL ? 'text-right' : 'text-left'} text-4xl`}>
              {t('jobsSection.title')}
            </h1>
            <p className={`mt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('jobsSection.description')}
            </p>
            <div>
              <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-primary hover:border-2 hover:border-primary text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer mt-8">
                <p className={isRTL ? 'text-right' : 'text-left'}>
                  {t('jobsSection.button')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;