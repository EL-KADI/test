import React from 'react';
import { useLanguage } from '../../contexts/language-context';
import Image from 'next/image';

const SupportSectionTwo = () => {
  const { t, isRTL } = useLanguage();

  const supportItems = [
    {
      title: t('supportSectionTwo.helpCenter'),
      image: '/HelpCenterIcon.svg',
      alt: t('supportSectionTwo.helpCenterAlt'),
      width: 75,
    },
    {
      title: t('supportSectionTwo.serverStatus'),
      image: '/STATUS.svg',
      alt: t('supportSectionTwo.serverStatusAlt'), width: 100,
    },
    {
      title: t('supportSectionTwo.subscriberServices'),
      image: '/subscribers.svg',
      alt: t('supportSectionTwo.subscriberServicesAlt'), width: 75,
    },
  ];

  const contactInfo = [
    {
      title: t('supportSectionTwo.emailService'),
      value: 'CS@MH.LY',
      image: '/email-two.svg',
      alt: t('supportSectionTwo.emailServiceAlt'),
    },
    {
      title: t('supportSectionTwo.phone'),
      value: '+214568987',
      image: '/phone.svg',
      alt: t('supportSectionTwo.phoneAlt'),
    },
    {
      title: t('supportSectionTwo.location'),
      value: t('supportSectionTwo.locationValue'),
      image: '/location.svg',
      alt: t('supportSectionTwo.locationAlt'),
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="container pt-32 pb-12 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
          >
            <Image width={item.width} height={item.width} loading="lazy" src={item.image} alt={item.alt} />
            <h1 className="text-center text-xs">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2715.20357416589!2d46.67766630464344!3d24.714449700676195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1742057970001!5m2!1sar!2snl"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          title={t('supportSectionTwo.mapTitle')}
        ></iframe>
      </div>
      <div className="mt-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center gap-4 ${index < 2 && !isRTL ? 'lg:border-r-2 border-black border-opacity-50' : index < 2 && isRTL ? 'lg:border-l-2 border-black border-opacity-50' : ''}`}
            >
              <Image width={50} height={50} loading="lazy" alt={info.alt} src={info.image} />
              <p className="text-xl font-bold">{info.title}</p>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportSectionTwo;