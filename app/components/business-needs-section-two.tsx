import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export default function BusinessNeedsSectionTwo() {
  const { t } = useLanguage();

  const features = [
    {
      image: "/handshake.svg",
      title: t("businessNeeds.brandAwareness"),
      description: t("businessNeeds.brandAwarenessDesc"),
      alt: t("businessNeeds.brandAwarenessAlt"),
      width: 95
    },
    {
      image: "/safety.svg",
      title: t("businessNeeds.security"),
      description: t("businessNeeds.securityDesc"),
      alt: t("businessNeeds.securityAlt"),
        width: 50
    },
    {
      image: "/correct.svg",
      title: t("businessNeeds.accessCollaboration"),
      description: t("businessNeeds.accessCollaborationDesc"),
      alt: t("businessNeeds.accessCollaborationAlt"),  
      width: 55
    },
  ];

  return (
    <div className="relative mt-40 ">
        <Image
              alt="rightImg"
              width={393}
              height={636}
              className="absolute right-0 -top-44 -z-0"
              style={{ color: "transparent" }}
              src="/rightImg.svg" loading="lazy"
            />
            <Image
              alt="leftImg"
              width={393}
              height={636}
              className="absolute left-0 -top-44 -z-0"
              style={{ color: "transparent" }}
              src="/leftImg.svg" loading="lazy"
            /> 
            <div className=" max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto relative z-0">
      <h1 className="lg:text-4xl text-[#2b1f51] text-xl text-center mb-16">
        {t("businessNeeds.title")}
      </h1>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light flex-col justify-between transition hover:scale-105"
            >
              <Image
                className="relative "
                src={feature.image}
                alt={feature.alt}
                     width={feature.width}
                  height={feature.width} loading="lazy"
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
    </div>
  );
}