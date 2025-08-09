import Image from 'next/image';
import { useLanguage } from '../../contexts/language-context';

export default function SomeFeature() {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: '/mon.svg',
      title: t('essentialFeatures.serverMonitoringTitle'),
      alt: t('essentialFeatures.serverMonitoringAlt'),
    },
    {
      icon: '/ssl c.svg',
      title: t('essentialFeatures.sslCertificateTitle'),
      alt: t('essentialFeatures.sslCertificateAlt'),
    },
    {
      icon: '/locktwo.svg',
      title: t('essentialFeatures.threatProtectionTitle'),
      alt: t('essentialFeatures.threatProtectionAlt'),
    },
    {
      icon: '/c.svg',
      title: t('essentialFeatures.softaculousInstallerTitle'),
      alt: t('essentialFeatures.softaculousInstallerAlt'),
    },
    {
      icon: '/CloudUpload.svg',
      title: t('essentialFeatures.regularBackupTitle'),
      alt: t('essentialFeatures.regularBackupAlt'),
    },
    {
      icon: '/Cog.svg',
      title: t('essentialFeatures.linuxOsTitle'),
      alt: t('essentialFeatures.linuxOsAlt'),
    },
    {
      icon: '/LayoutDashboard.svg',
      title: t('essentialFeatures.controlPanelTitle'),
      alt: t('essentialFeatures.controlPanelAlt'),
    },
    {
      icon: '/Headphones.svg',
      title: t('essentialFeatures.technicalSupportTitle'),
      alt: t('essentialFeatures.technicalSupportAlt'),
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="mt-24 py-12 md:py-24 lg:py-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
    >
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-[#ffffff] text-2xl md:text-3xl lg:text-4xl font-bold mb-12 max-w-3xl mx-auto">
          {t('essentialFeatures.header')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-[#002f6c] rounded-lg h-52"
            >
              <Image
                src={feature.icon}
                alt={feature.alt}
                width={64}
                height={64}
                className="w-16 h-16 mb-4"  loading="lazy"
              />
              <p className="text-lg font-medium text-[#2a2a96]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}