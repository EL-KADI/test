import { useLanguage } from "@/contexts/language-context";
import Image from 'next/image';

export default function CloudTwoBg() {
  const { t } = useLanguage();
  return (
    <div className="w-full xl:-translate-y-44 -translate-y-24">
      <Image
        className="w-full my-8"
        src="/cloudtwo.svg"
        alt={t("services.backgroundDecorationAlt")}
        width={1920}
        height={1080}
      />
    </div>
  );
}