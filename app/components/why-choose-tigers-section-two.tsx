import { useLanguage } from "../../contexts/language-context";

export default function WhyChooseTigersSectionTwo() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/email.svg",
      title: t("whyChooseTigers.blockUnauthorizedEmail"),
      description: t("whyChooseTigers.blockUnauthorizedEmailDesc"),
      alt: t("whyChooseTigers.blockUnauthorizedEmailAlt"),
    },
    {
      image: "/star.svg",
      title: t("whyChooseTigers.preventEmailSpoofing"),
      description: t("whyChooseTigers.preventEmailSpoofingDesc"),
      alt: t("whyChooseTigers.preventEmailSpoofingAlt"),
    },
    {
      image: "/chat.svg",
      title: t("whyChooseTigers.enhanceEmailSecurity"),
      description: t("whyChooseTigers.enhanceEmailSecurityDesc"),
      alt: t("whyChooseTigers.enhanceEmailSecurityAlt"),
    },
    {
      image: "/email2.svg",
      title: t("whyChooseTigers.verifyEmail"),
      description: t("whyChooseTigers.verifyEmailDesc"),
      alt: t("whyChooseTigers.verifyEmailAlt"),
    },
  ];

  return (
    <div className="relative mt-0">
      <img
        className="absolute right-0 z-10 -top-[150px]"
        alt={t("whyChooseTigers.backgroundRightAlt")}
        src="Rbg.svg"
      />
      <img
        className="absolute left-0 z-10 -top-[150px]"
        alt={t("whyChooseTigers.backgroundLeftAlt")}
        src="Lbg.svg"
      />
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto z-20 relative">
        <h1 className="lg:text-4xl text-xl mb-6 text-center">{t("whyChooseTigers.title")}</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white z-20 rounded-lg px-6 py-6 flex items-start gap-4 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] flex-col gap-y-6 transition hover:scale-105"
            >
              <img
                className="relative z-20 before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0"
                src={feature.image}
                alt={feature.alt}
              />
              <div>
                <h1 className="mb-6 text-xl">{feature.title}</h1>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}