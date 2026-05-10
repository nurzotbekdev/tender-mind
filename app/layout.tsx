import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Sen } from "next/font/google";
import { TranslationProvider } from "@/app/i18n/provider";
import "./globals.css";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body>
        <TranslationProvider>
          <Navbar />
          {children}
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
