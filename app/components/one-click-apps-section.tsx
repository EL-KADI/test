import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

export default function OneClickAppsSection() {
  const { t } = useLanguage();

  const apps = [
    { text: t("oneClickApps.helmCharts"), ariaLabel: t("oneClickApps.helmCharts") },
    { text: t("oneClickApps.certManager"), ariaLabel: t("oneClickApps.certManager") },
    { text: t("oneClickApps.linkerd"), ariaLabel: t("oneClickApps.linkerd") },
    { text: t("oneClickApps.operators"), ariaLabel: t("oneClickApps.operators") },
  ];

  return (
    <div className="container mt-32 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h1 className="text-3xl">{t("oneClickApps.title")}</h1>
          <p className="mt-8 font-normal text-sm text-primary">{t("oneClickApps.description")}</p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            {apps.map((app, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check
                  className="w-6 h-6 text-blue-500 border-2 border-blue-500 rounded-full"
                  aria-label={app.ariaLabel}
                />
                <p>{app.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          alt={t("oneClickApps.imageAlt")}
          src="/click-B1og.svg"
          width={500}
          height={400}
          className="w-full"  loading="lazy"
        />
      </div>
    </div>
  );
}