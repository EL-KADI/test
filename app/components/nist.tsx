import { ClipboardList, ShieldCheck, SearchCheck, RefreshCw } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

export default function NISTComplianceSection() {
  const { t } = useLanguage();

  const principles = [
    {
      icon: <ClipboardList className="w-10 h-10 text-[#1B69FF]" aria-label={t("nistCompliance.principle.identify")} />,
      title: t("nistCompliance.principle.identify"),
      description: t("nistCompliance.principle.identifyDesc"),
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#1B69FF]" aria-label={t("nistCompliance.principle.protect")} />,
      title: t("nistCompliance.principle.protect"),
      description: t("nistCompliance.principle.protectDesc"),
    },
    {
      icon: <SearchCheck className="w-10 h-10 text-[#1B69FF]" aria-label={t("nistCompliance.principle.verify")} />,
      title: t("nistCompliance.principle.verify"),
      description: t("nistCompliance.principle.verifyDesc"),
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-[#1B69FF]" aria-label={t("nistCompliance.principle.recover")} />,
      title: t("nistCompliance.principle.recover"),
      description: t("nistCompliance.principle.recoverDesc"),
    },
  ];

  return (
    <div className="container my-36 max-w-6xl mx-auto">
      <h1 className="lg:text-4xl text-xl mb-12 text-center">{t("nistCompliance.title")}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <p>{t("nistCompliance.description")}</p>
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-md transition hover:scale-105"
          >
            <div className="relative before:absolute before:w-16 before:h-2">
              {principle.icon}
            </div>
            <div>
              <h1 className="mb-6 text-xl">{principle.title}</h1>
              <p className="text-sm text-black">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}