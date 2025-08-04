import React from 'react';
import { useLanguage } from '../../contexts/language-context';

const AchievementsSection = () => {
  const { t, isRTL } = useLanguage();

  const achievements = [
    {
      date: '03 - 03 - 2008',
      description: t('achievementsSectionTwo.description'),
    },
    {
      date: '03 - 03 - 2008',
      description: t('achievementsSectionTwo.description'),
    },
    {
      date: '03 - 03 - 2008',
      description: t('achievementsSectionTwo.description'),
    },
    {
      date: '03 - 03 - 2008',
      description: t('achievementsSectionTwo.description'),
    },
    {
      date: '03 - 03 - 2008',
      description: t('achievementsSectionTwo.description'),
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="relative mt-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="lg:text-4xl  text-2xl lg:mb-6 text-center font-bold" >
        {t('achievementsSectionTwo.title')}
      </h1>
      <div className="relative container -mt-10 lg:-mt-0">
        <div className="w-[3px]  h-full bg-gradient-to-b from-white via-[#480689] to-white absolute top-0 left-1/2 transform -translate-x-1/2 hidden lg:block"></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 lg:gap-20">
          <div className="flex flex-col justify-between lg:gap-64">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className={index === 0 ? 'mt-16' : ''}>
                <h1 className={`font-bold ${isRTL ? 'text-right' : 'text-left'} text-xl relative w-fit ${isRTL ? 'lg:me-auto' : 'lg:ms-auto'} mb-6`}>
                  {achievement.date}
                  <span className={`absolute -bottom-4 ${isRTL ? 'lg:-left-[51px]' : 'lg:-right-[51px]'} ${isRTL ? '-right-[51px]' : '-left-[51px]'} bg-[#480689] rounded-full w-[20px] h-[20px]`}></span>
                  <span className="w-[170px] h-[2px] bg-gradient-to-r from-white via-[#480689] to-white absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
                </h1>
                <p className={isRTL ? 'text-right' : 'text-left'}>{achievement.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center lg:gap-64">
            {achievements.slice(3).map((achievement, index) => (
              <div key={index} className={index === 0 ? 'mt-16' : ''}>
                <h1 className={`font-bold ${isRTL ? 'text-right' : 'text-left'} text-xl relative w-fit ${isRTL ? 'lg:ms-auto' : 'lg:me-auto'} mb-6`}>
                  {achievement.date}
                  <span className={`absolute -bottom-4 ${isRTL ? 'lg:-right-[51px]' : 'lg:-left-[51px]'} -left-[51px] bg-[#480689] rounded-full w-[20px] h-[20px]`}></span>
                  <span className="w-[170px] h-[2px] bg-gradient-to-r from-white via-[#480689] to-white absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
                </h1>
                <p className={isRTL ? 'text-right' : 'text-left'}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;