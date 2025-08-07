import React from 'react';
import { useLanguage } from '../../contexts/language-context';

const FeaturesSectionEleven = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      title: t('featuresSection.multilingualSites'),
      image: '/4.svg',
      alt: t('featuresSection.multilingualSitesAlt'),
    },
    {
      title: t('featuresSection.fiftyLanguages'),
      image: 'data:image/svg+xml,%3csvg%20width="65"%20height="113"%20viewBox="0%200%2065%20113"%20fill="none"%20xmlns="http://www.w3.org/2000/svg"%3e%3cpath%20d="M6.93359%2034.1884C7.93026%2029.2894%2010.5364%2027.8308%2014.1547%2028.5027C14.4017%2028.5488%2014.6825%2028.2585%2014.7042%2027.9021C14.8186%2026.0367%2014.8532%2024.1%2014.9225%2022.0252L10.1238%2018.2371V11.4067L15.4807%2015.6355L16.4973%2010.4297L21.316%2016.3265C21.1297%2017.4487%2020.9528%2018.5135%2020.7543%2019.7044L25.5479%2023.489V30.309L20.0923%2026.0019L19.8219%2030.8879L25.1509%2035.095L25.6779%2032.4951L30.3978%2037.5366C30.4558%2037.6875%2030.497%2037.8443%2030.5208%2038.0043C29.7409%2040.1391%2030.6015%2042.1644%2032.1814%2045.0711C38.3001%2056.3216%2037.793%2068.131%2031.3338%2068.7272C28.9071%2068.9506%2025.3685%2067.386%2022.5718%2064.8096V57.7862C23.8821%2058.5748%2025.2343%2059.291%2026.6225%2059.9315C27.4207%2060.275%2028.3056%2060.3616%2029.1549%2060.1792C32.4266%2059.3543%2032.0253%2052.8421%2028.5093%2047.4667C27.4566%2049.2948%2026.2849%2051.0512%2025.0019%2052.7247C22.6861%2055.3645%2019.6234%2055.774%2015.7208%2053.3975C11.3597%2050.7437%208.31509%2045.4614%207.09482%2038.3702C7.05144%2038.1808%206.99759%2037.9939%206.93359%2037.8105V34.1884ZM15.5136%2045.6961C15.2805%2042.7929%2015.0465%2039.887%2014.7753%2036.5179C14.0635%2036.8582%2013.3989%2037.29%2012.7984%2037.8026C12.0799%2038.5849%2011.7012%2039.8444%2012.3512%2042.0149C12.5804%2042.8213%2012.9814%2043.5681%2013.5267%2044.2037C14.072%2044.8393%2014.7484%2045.3485%2015.5093%2045.6961H15.5136ZM20.2491%2045.2693L20.6183%2045.7439L23.5476%2041.3734L19.8357%2038.4432C19.9796%2040.8832%2020.1122%2043.0789%2020.2457%2045.2693H20.2491Z"%20fill="%23CEE7FD"%20stroke="%23005BEA"%20stroke-width="2"/%3e%3cpath%20d="M58.61%20103.122L53.1032%2098.7758C52.4905%2095.81%2051.8275%2092.778%2051.2642%2089.7835C51.2237%2089.3271%2051.0873%2088.8845%2050.8642%2088.4847C50.641%2088.0848%2050.3361%2087.7369%2049.9694%2087.4636C47.3321%2085.4426%2044.6922%2083.3678%2042.0549%2081.2104C41.2914%2080.5854%2040.9195%2080.5932%2040.6786%2081.4885C40.1222%2083.566%2039.4654%2085.5192%2038.8509%2087.521L33.4004%2083.2174C33.8129%2081.9501%2034.1978%2080.7497%2034.5904%2079.5588C37.4209%2070.9665%2040.2609%2062.3872%2043.0689%2053.7635C43.3055%2053.0342%2043.5725%2052.8491%2044.2823%2053.4654C45.5294%2054.5502%2046.7852%2055.4263%2048.0349%2056.4894C48.4126%2056.8655%2048.6927%2057.3287%2048.8505%2057.8385C52.1346%2072.8472%2055.3975%2087.8495%2058.6394%20102.845C58.6389%20102.938%2058.6291%20103.031%2058.61%20103.122ZM49.4432%2080.8696C48.3166%2075.2535%2047.2098%2069.773%2046.0051%2063.7918L42.5628%2075.4395L49.4432%2080.8696Z"%20fill="%231B69FF"/%3e%3c/svg%3e',
      alt: t('featuresSection.fiftyLanguagesAlt'),
    },
    {
      title: t('featuresSection.responsiveDesign'),
      image: '/2.svg',
      alt: t('featuresSection.responsiveDesignAlt'),
    },
    {
      title: t('featuresSection.easyTool'),
      image: '/1.svg',
      alt: t('featuresSection.easyToolAlt'),
    },
    {
      title: t('featuresSection.videoTutorials'),
      image: '/8.svg',
      alt: t('featuresSection.videoTutorialsAlt'),
    },
    {
      title: t('featuresSection.plugins'),
      image: '/7.svg',
      alt: t('featuresSection.pluginsAlt'),
    },
    {
      title: t('featuresSection.templates'),
      image: '/6.svg',
      alt: t('featuresSection.templatesAlt'),
    },
    {
      title: t('featuresSection.siteMigration'),
      image: '/5.svg',
      alt: t('featuresSection.siteMigrationAlt'),
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="relative my-64">
      <img
        className="absolute top-0 -z-10 left-0"
        alt={t('featuresSection.rightImgAlt')}
        src="/Lbg.svg"
      />
      <img
        className="absolute top-0 right-0  -z-10"
        alt={t('featuresSection.leftImgAlt')}
        src="/Rbg.svg"
      />
      <h1 className="lg:text-4xl text-xl mb-6 text-center">{t('featuresSection.title')}</h1>
      <p className="mt-4 text-center  relative">{t('featuresSection.description')}</p>
      <div className="container   max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)]  rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
            >
              <img src={feature.image} alt={feature.alt} />
              <h1 className="text-center text-xs ">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionEleven;