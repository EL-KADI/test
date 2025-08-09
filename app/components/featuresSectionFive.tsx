import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function FeaturesSectionFive() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      title: t("featuresSectionFive.feature.emailOverview"),
      description: t("featuresSectionFive.feature.emailOverviewDesc"),
      image: "/message.svg",
      imageAlt: t("featuresSectionFive.feature.emailOverviewAlt"),
    },
    {
      id: 2,
      title: t("featuresSectionFive.feature.topThreats"),
      description: t("featuresSectionFive.feature.topThreatsDesc"),
      image: "/warning.svg",
      imageAlt: t("featuresSectionFive.feature.topThreatsAlt"),
    },
    {
      id: 3,
      title: t("featuresSectionFive.feature.spfDkimCompliance"),
      description: t("featuresSectionFive.feature.spfDkimComplianceDesc"),
      image: "/lock.svg",
      imageAlt: t("featuresSectionFive.feature.spfDkimComplianceAlt"),
    },
    {
      id: 4,
      title: t("featuresSectionFive.feature.powerDmarcCompliance"),
      description: t("featuresSectionFive.feature.powerDmarcComplianceDesc"),
      image: "/shield.svg",
      imageAlt: t("featuresSectionFive.feature.powerDmarcComplianceAlt"),
    },
  ];

  return (
    <div className="mt-32 bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="lg:text-4xl text-xl mb-6 font-semibold text-gray-900">
            {t("featuresSectionFive.title")}
          </h1>
          <p className="text-center mx-auto mt-4 lg:w-1/2 text-gray-600 leading-relaxed">
            {t("featuresSectionFive.description")}
          </p>
        </div>
        <div className="lg:px-20 md:px-8 px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mt-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl px-6 py-8 flex flex-col items-start gap-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.imageAlt}
                      width={45}
                      height={39}
                      className="w-10 h-10 object-contain"  loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}