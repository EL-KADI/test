import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function KeyFeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/mail-storage-icon.svg",
      title: t("keyFeatures.mailStorage"),
      alt: t("keyFeatures.mailStorageAlt"),
    },
    {
      image: "/uptime-guarantee.svg",
      title: t("keyFeatures.reliableEmail"),
      alt: t("keyFeatures.reliableEmailAlt"),
    },
    {
      image: "/rel-email-icon.svg",
      title: t("keyFeatures.customEmail"),
      alt: t("keyFeatures.customEmailAlt"),
    },
    {
      image: "/ssl.svg",
      title: t("keyFeatures.calendarSharing"),
      alt: t("keyFeatures.calendarSharingAlt"),
    },
    {
      image: "/Security-Monitoring-icon.svg",
      title: t("keyFeatures.calendarSharing"),
      alt: t("keyFeatures.calendarSharingAlt"),
    },
    {
      image: "/spam-protection-icon.svg",
      title: t("keyFeatures.spamProtection"),
      alt: t("keyFeatures.spamProtectionAlt"),
    },
  ];

  return (
    <div className="relative mt-32 mb-32">
      <div className="mb-16">
        <h1 className="lg:text-4xl text-xl mb-6 text-center">{t("keyFeaturesTwo.title")}</h1>
        <p className="text-center mt-6">{t("keyFeatures.description")}</p>
      </div>
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
            >
              <Image width={75} height={75} loading='lazy' src={feature.image} alt={feature.alt} />
              <h1 className="text-center text-xs">{feature.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}