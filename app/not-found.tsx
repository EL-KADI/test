"use client";
import { useLanguage } from '../contexts/language-context';
import Link from "next/link";

export default function NotFound() {
  const { t, isRTL } = useLanguage();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b1d3a] text-white text-center p-8"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <h1 className="text-7xl mb-4">404</h1>
      <h2 className="text-2xl mb-4">
        {t('notFound.title')}
      </h2>
      <p className="max-w-md mb-8">
        {t('notFound.description')}
      </p>
      <Link
        href="/"
        className="bg-[#1e90ff] py-3 px-6 rounded-md text-white no-underline font-bold"
      >
        {t('notFound.backToHome')}
      </Link>
    </div>
  );
}