import { useLanguage } from '../../contexts/language-context';

const OnlinePaymentSection = () => {
  const { t, isRTL } = useLanguage();

  const paymentMethods = [
    {
      image: '/americanExpress.svg',
      alt: t('onlinePaymentSection.americanExpressAlt'),
    },
    {
      image: 'data:image/svg+xml,%3csvg%20width="210"%20height="68"%20viewBox="0%200%20210%2068"%20fill="none"%20xmlns="http://www.w3.org/2000/svg"%3e%3cpath%20d="M90.9997%2067.0172H73.9883L84.6285%201.19141H101.639L90.9997%2067.0172Z"%20fill="%2300579F"/%3e%3cpath%20d="M152.666%202.80247C149.311%201.47057%20143.989%200%20137.409%200C120.609%200%20108.779%208.96305%20108.707%2021.7775C108.567%2031.232%20117.177%2036.4832%20123.616%2039.6357C130.197%2042.8569%20132.434%2044.9595%20132.434%2047.8308C132.368%2052.2407%20127.116%2054.2734%20122.218%2054.2734C115.427%2054.2734%20111.788%2053.2254%20106.257%2050.772L104.017%2049.7202L101.637%2064.4967C105.627%2066.3154%20112.977%2067.9293%20120.609%2068C138.459%2068%20150.079%2059.1757%20150.217%2045.5198C150.285%2038.0264%20145.739%2032.2847%20135.938%2027.5928C129.988%2024.5809%20126.344%2022.55%20126.344%2019.4683C126.414%2016.6668%20129.426%2013.7973%20136.142%2013.7973C141.673%2013.6568%20145.736%2014.9868%20148.814%2016.3178L150.353%2017.0168L152.666%202.80247Z"%20fill="%2300579F"/%3e%3cpath%20d="M175.277%2043.6975C176.678%2039.9159%20182.068%2025.2799%20182.068%2025.2799C181.998%2025.4205%20183.466%2021.4285%20184.307%2018.9779L185.495%2024.6498C185.495%2024.6498%20188.717%2040.4064%20189.416%2043.6975C186.758%2043.6975%20178.637%2043.6975%20175.277%2043.6975ZM196.275%201.19141H183.117C179.059%201.19141%20175.976%202.38089%20174.225%206.653L148.957%2067.0163H166.807C166.807%2067.0163%20169.745%2058.8918%20170.377%2057.142C172.335%2057.142%20189.699%2057.142%20192.218%2057.142C192.707%2059.4531%20194.248%2067.0163%20194.248%2067.0163H209.999L196.275%201.19141Z"%20fill="%2300579F"/%3e%3cpath%20d="M59.7811%201.19141L43.1212%2046.0783L41.3007%2036.9747C38.2207%2026.4704%2028.561%2015.0576%2017.7812%209.38287L33.0411%2066.9474H51.0302L77.7693%201.19141H59.7811Z"%20fill="%2300579F"/%3e%3cpath%20d="M27.6498%201.19141H0.280004L0%202.52144C21.3502%207.98396%2035.4899%2021.1512%2041.2994%2036.9775L35.3495%206.72467C34.3699%202.52051%2031.3596%201.33009%2027.6498%201.19141Z"%20fill="%23FAA61A"/%3e%3c/svg%3e',
      alt: t('onlinePaymentSection.visaAlt'),
    },
    {
      image: '/masterCard.svg',
      alt: t('onlinePaymentSection.masterCardAlt'),
    },
  ];

  return (
    <div className="container mt-16 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="lg:text-4xl text-xl mb-6 text-center text-[#2b1f51] ">
        {t('onlinePaymentSection.mainTitle')}
      </h1>
      <p className="text-[#2b1f51] text-center ">
        {t('onlinePaymentSection.mainDescription')}
      </p>
      <div className="mt-8 mx-auto grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-8">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 gap-4 shadow-light items-start w-64 transition hover:scale-105 flex flex-col justify-between"
          >
            <img className="h-full mx-auto p-4" src={method.image} alt={method.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlinePaymentSection;