import { LanguageProvider } from "@/contexts/language-context";

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

// السماح بمعاملات ديناميكية غير معرَّفة في generateStaticParams
export const dynamicParams = true;

export const generateStaticParams = () => {
  return [
    { lang: "ar" },
    { lang: "en" },
    { lang: "fr" },
    { lang: "de" },
    { lang: "tr" },
  ];
};

export default function LangLayout({ children, params }: Props) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}