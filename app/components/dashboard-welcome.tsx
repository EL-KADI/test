"use client";
import Image from "next/image";
import { useLanguage } from '../../contexts/language-context';

const DashboardWelcome = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold ">
        {t('dashboardWelcome.title')}
      </h1>
      <p className="mt-8 text-center ">
        {t('dashboardWelcome.description')}
      </p>
      <Image className="mx-auto w-1/2" alt={t('dashboardWelcome.imageAlt')} src="/DashboardWelcome.svg" width={500} height={500} />
    </div>
  );
};

export default DashboardWelcome;
