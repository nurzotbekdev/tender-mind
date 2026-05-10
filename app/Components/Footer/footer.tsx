"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Menu, Phone } from "lucide-react";

import logo from "@/public/logo.svg";
import pay1 from "@/public/pay_1.png";
import pay2 from "@/public/pay_2.png";
import pay3 from "@/public/pay_3.png";
import pay4 from "@/public/pay_4.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="faqs relative px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] pt-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-10 gap-6">
          <div>
            <Link href="/" className="flex items-center gap-1">
              <Image
                src={logo}
                alt="logo"
                width={20}
                height={20}
                className="object-cover"
              />
              <h1 className="text-4xl font-semibold Poppins">
                <span className="text-lime-200">Tender</span>
                <span className="bg-linear-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">
                  Mind
                </span>
              </h1>
            </Link>

            <p className="pt-8 text-lg text-gray-200 Inter">
              {t("platform_description")}
            </p>

            <div className="flex items-center gap-2 pt-4 text-gray-400">
              <Phone className="text-(--prim) w-5 h-5" />
              +998 (90) 123-4567
            </div>

            <div className="flex items-center gap-2 pt-4 text-gray-400">
              <Mail className="text-(--prim) w-5 h-5" />
              info@tendermind.uz
            </div>

            <div className="flex items-center gap-2 pt-4 text-gray-400">
              <MapPin className="text-(--prim) w-5 h-5" />
              {t("location")}
            </div>
          </div>

          <div>
            <h1 className="text-2xl text-white font-semibold">{t("pages")}</h1>

            <div className="mt-3 w-20 h-1 rounded-full bg-(--prim)"></div>

            <ul className="flex flex-col items-start pt-6 space-y-4">
              <Link href="/">
                <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                  {t("home")}
                </li>
              </Link>

              <Link href="#how_it_work">
                <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                  {t("how_it_works")}
                </li>
              </Link>

              <Link href="#pricing">
                <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                  {t("pricing")}
                </li>
              </Link>

              <Link href="#blog">
                <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                  {t("blog_title")}
                </li>
              </Link>

              <Link href="#contact">
                <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                  {t("contact_title")}
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-white font-semibold">
              {t("documents")}
            </h1>

            <div className="mt-3 w-20 h-1 rounded-full bg-(--prim)"></div>

            <ul className="flex flex-col items-start pt-6 space-y-4">
              <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                {t("partnership_agreement")}
              </li>

              <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                {t("license")}
              </li>

              <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                {t("invoice_sample")}
              </li>

              <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                {t("terms_of_use1")}
              </li>

              <li className="text-lg text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
                {t("privacy_policy")}
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-white font-semibold">{t("news")}</h1>

            <div className="mt-3 w-20 h-1 rounded-full bg-(--prim)"></div>

            <p className="pt-6 text-gray-400 text-lg Inter">
              {t("newsletter_text")}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-gray-700 mt-15">
          <h1 className="text-gray-500 text-base sm:text-lg font-medium py-10 Inter">
            © 2026 <span className="text-[#AEE85E]">TenderMind</span>.{" "}
            {t("all_rights_reserved")}
          </h1>

          <div className="hidden sm:flex items-center gap-2">
            <Image
              src={pay1}
              alt="pay1"
              width={60}
              height={40}
              className="bg-black w-14 h-10 p-2 rounded border border-gray-600"
            />
            <Image
              src={pay2}
              alt="pay2"
              width={60}
              height={40}
              className="bg-black w-14 h-10 p-2 rounded border border-gray-600"
            />
            <Image
              src={pay3}
              alt="pay3"
              width={60}
              height={40}
              className="bg-black w-14 h-10 p-2 rounded border border-gray-600"
            />
            <Image
              src={pay4}
              alt="pay4"
              width={60}
              height={40}
              className="bg-black w-14 h-10 p-2 rounded border border-gray-600"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
