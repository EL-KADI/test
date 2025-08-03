import { useLanguage } from "@/contexts/language-context";

export default function CloudTwoBg() {
  const { t } = useLanguage();
  return (
    <div className="w-full xl:-translate-y-44 -translate-y-24">
      <img
        className="w-full my-8"
        src="/cloudtwo.svg"
        alt={t("services.backgroundDecorationAlt")}
      />
    </div>
  );
}
