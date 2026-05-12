import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { TranslationProvider } from "@/app/i18n/provider";

import "./globals.css";

import AppWrapper from "./AppWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "TenderMind",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <TranslationProvider>
          <AppWrapper>{children}</AppWrapper>
        </TranslationProvider>
      </body>
    </html>
  );
}
