import type { ReactElement } from "react";
import Image from "next/image";

export type Language = "arabic" | "german" | "english" | "french" | "turkish";

export interface BaseLanguageItem {
  value: Language;
  countryCode: string;
  defaultLabel: string;

  labelKey?: string;
  flag: ReactElement;
}

export interface LanguageOption {
  value: Language;
  label: string;
  countryCode: string;
  flag: ReactElement;
}

const FLAGS = {
  saudi: (
    <Image
      src="/Saudi-Flag.avif"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  uae: (
    <Image
      src="/Uae-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  egypt: (
    <Image
      src="/Egypt-Flag.webp"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  sudan: (
    <Image
      src="/Sudan-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  oman: (
    <Image
      src="/Oman-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  qatar: (
    <Image
      src="/Qatar-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  iraq: (
    <Image
      src="/Iraq-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  syria: (
    <Image
      src="/Syria-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  turkey: (
    <Image
      src="/Turkey-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  germany: (
    <Image
      src="/German-Flag.webp"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  france: (
    <Image
      src="/France-Flag.svg"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
  global: (
    <Image
      src="/Global-Flag.webp"
      alt="Egypt Flag"
      width={20}
      height={20}
      className="rounded-sm"
      priority
    />
  ),
} as const;

const BASE_ITEMS: BaseLanguageItem[] = [
  {
    value: "arabic",
    countryCode: "saudi",
    defaultLabel: "السعودية",
    labelKey: "languageSelector.saudi",
    flag: FLAGS.saudi,
  },
  {
    value: "arabic",
    countryCode: "uae",
    defaultLabel: "الإمارات",
    labelKey: "languageSelector.uae",
    flag: FLAGS.uae,
  },
  {
    value: "arabic",
    countryCode: "egypt",
    defaultLabel: "مصر",
    labelKey: "languageSelector.egypt",
    flag: FLAGS.egypt,
  },
  {
    value: "arabic",
    countryCode: "sudan",
    defaultLabel: "السودان",
    labelKey: "languageSelector.sudan",
    flag: FLAGS.sudan,
  },
  {
    value: "arabic",
    countryCode: "oman",
    defaultLabel: "عُمان",
    labelKey: "languageSelector.oman",
    flag: FLAGS.oman,
  },
  {
    value: "arabic",
    countryCode: "qatar",
    defaultLabel: "قطر",
    labelKey: "languageSelector.qatar",
    flag: FLAGS.qatar,
  },
  {
    value: "arabic",
    countryCode: "iraq",
    defaultLabel: "العراق",
    labelKey: "languageSelector.iraq",
    flag: FLAGS.iraq,
  },
  {
    value: "arabic",
    countryCode: "syria",
    defaultLabel: "سوريا",
    labelKey: "languageSelector.syria",
    flag: FLAGS.syria,
  },

  {
    value: "turkish",
    countryCode: "turkey",
    defaultLabel: "Türkçe",
    labelKey: "languageSelector.turkey",
    flag: FLAGS.turkey,
  },
  {
    value: "german",
    countryCode: "germany",
    defaultLabel: "Germany",
    labelKey: "languageSelector.germany",
    flag: FLAGS.germany,
  },
  {
    value: "french",
    countryCode: "france",
    defaultLabel: "France",
    labelKey: "languageSelector.france",
    flag: FLAGS.france,
  },
  {
    value: "english",
    countryCode: "global",
    defaultLabel: "Global",
    flag: FLAGS.global,
  },
];

const BY_CODE: Record<string, BaseLanguageItem> = Object.fromEntries(
  BASE_ITEMS.map((i) => [i.countryCode, i])
);

export function getLanguageOptions(opts?: {
  codes?: string[];
  t?: ((key: string) => string) | null;
}): LanguageOption[] {
  const { codes, t } = opts ?? {};
  const items =
    codes && codes.length > 0
      ? (codes.map((c) => BY_CODE[c]).filter(Boolean) as BaseLanguageItem[])
      : BASE_ITEMS;

  return items.map((i) => ({
    value: i.value,
    countryCode: i.countryCode,
    flag: i.flag,
    label: t && i.labelKey ? t(i.labelKey) : i.defaultLabel,
  }));
}
