import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../contexts/language-context";
import { Navigation } from "lucide-react";
export const metadata: Metadata = {
  title: "Nimor Hosting - استضافة نيمور",
  description: "شركة نيمور هي شركة رائدة في مجال استضافة الويب وحجز النطاقات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ar" dir="rtl">
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "Cairo, sans-serif" }}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
