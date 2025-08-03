import { useLanguage } from "../../contexts/language-context";

export default function SmallContent() {
  const { t } = useLanguage();

  const features = [
    { text: t("smallContent.feature.backupRecovery") },
    { text: t("smallContent.feature.malwareProtection") },
    { text: t("smallContent.feature.deviceProtection") },
    { text: t("smallContent.feature.threatDetection") },
    { text: t("smallContent.feature.emailProtection") },
    { text: t("smallContent.feature.disasterRecovery") },
    { text: t("smallContent.feature.centralManagement") },
    { text: t("smallContent.feature.centralManagement") },
    { text: t("smallContent.feature.centralManagement") },
  ];

  const checkIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="${t("smallContent.checkIconAlt")}">
      <g clip-path="url(#clip0_9_78481)">
        <path d="M12 0C5.37262 0 0 5.37262 0 12C0 18.6277 5.37262 24 12 24C18.6277 24 24 18.6277 24 12C24 5.37262 18.6277 0 12 0ZM12 22.5236C6.21037 22.5236 1.5 17.7896 1.5 12C1.5 6.21033 6.21037 1.49995 12 1.49995C17.7896 1.49995 22.5 6.21035 22.5 12C22.5 17.7896 17.7896 22.5236 12 22.5236ZM16.7891 7.60913L9.74848 14.694L6.57785 11.5234C6.28498 11.2305 5.81023 11.2305 5.51698 11.5234C5.2241 11.8162 5.2241 12.291 5.51698 12.5839L9.2291 16.2964C9.52198 16.5889 9.99673 16.5889 10.29 16.2964C10.3237 16.2626 10.3526 16.2259 10.3789 16.1876L17.8504 8.66998C18.1429 8.3771 18.1429 7.90235 17.8504 7.60913C17.5571 7.31625 17.0824 7.31625 16.7891 7.60913Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_9_78481">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-8 my-12 max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto -mt-16">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <div
            className="flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: checkIcon }}
          />
          <p className="text-black">{feature.text}</p>
        </div>
      ))}
    </div>
  );
}