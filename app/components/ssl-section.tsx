import { useLanguage } from "../../contexts/language-context";

export default function SSLSection() {
  const { t } = useLanguage();

  const cards = [
    {
      image: "/like.svg",
      title: t("sslSection.buildTrust"),
      description: t("sslSection.buildTrustDesc"),
      alt: t("sslSection.buildTrustAlt"),
    },
    {
      image: "/seo-increase.svg",
      title: t("sslSection.seoRanking"),
      description: t("sslSection.seoRankingDesc"),
      alt: t("sslSection.seoRankingAlt"),
    },
    {
      image: "/browser-friendly.svg",
      title: t("sslSection.browserCompatibility"),
      description: t("sslSection.browserCompatibilityDesc"),
      alt: t("sslSection.browserCompatibilityAlt"),
    },
  ];

  return (
    <>
      <div className="relative xl:mt-96 mt-64">
        <div
          className="absolute xl:-top-80 -top-32 sm:-top-36 md:-top-48 lg:-top-64 inset-0 mx-auto w-full pointer-events-none -z-10 bg-top bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url('/sslbg.svg')`,
          }}
        ></div>

        <div className="mt-32 container mx-auto px-4 relative z-10 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <h1
            className="lg:text-4xl text-xl mb-6 text-center font-bold"
            dir="rtl"
          >
            {t("sslSection.title")}
          </h1>
          <p className="text-center mb-16" dir="rtl">
            {t("sslSection.description")}
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105"
              >
                <img
                  className="w-24 h-24 relative before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0"
                  src={card.image}
                  alt={card.alt}
                />
                <div>
                  <h1 className="mb-6 text-xl font-semibold" dir="rtl">
                    {card.title}
                  </h1>
                  <p className="text-sm text-gray-600 leading-relaxed" dir="rtl">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </div>
    </>
  );
}