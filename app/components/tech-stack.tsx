"use client";
import Image from 'next/image';
import { useLanguage } from '../../contexts/language-context';

const TechStack = () => {
  const { t, isRTL } = useLanguage();

  const techs = [
    {
      title: t('techStack.reactTitle'),
      image: '/fi_1995685-Cl-Oibpi.svg',
      alt: t('techStack.reactAlt'),
      width: 100,
    },
    {
      title: t('techStack.laravelTitle'),
      image: '/Laravel.svg%201-BC6tyiE6.svg',
      alt: t('techStack.laravelAlt'),width: 100,
    },
    {
      title: t('techStack.phpTitle'),
      image: '/Php-BjU_0vM1.svg',
      alt: t('techStack.phpAlt'),width: 100,
    },
    {
      title: t('techStack.javascriptTitle'),
      image: '/Js-Dc4NxB02.svg',
      alt: t('techStack.javascriptAlt'),width: 100,
    },
    {
      title: t('techStack.lagomTitle'),
      image: '/logo-onlight%201-C8yTmhJR.svg',
      alt: t('techStack.lagomAlt'),width: 170,
    },
    {
      title: t('techStack.whatsappApiTitle'),
      image: '/whatsapp-16%201-CKGxjYoG.svg',
      alt: t('techStack.whatsappApiAlt'),width: 100,
    },
    {
      title: t('techStack.whmcsTitle'),
      image: '/whmcs-logo%202-D6A94U71.svg',
      alt: t('techStack.whmcsAlt'),width: 170,
    },
  ];

  return (
    <div className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mt-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold ">
          {t('techStack.mainTitle')}
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105 lg:col-span-1 md:col-span-2"
            >
              <Image width={tech.width} height={tech.width} loading='lazy' alt={tech.alt} src={tech.image} />
              <h1 className={`text-center text-xs ${isRTL ? 'text-right' : 'text-left'}`}>
                {tech.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;