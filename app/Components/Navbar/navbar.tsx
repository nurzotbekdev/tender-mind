"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

import logo from "@/public/logo.svg";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("uz");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "uz";
    setLang(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className={`navbar w-full z-20 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-3.5 border-b border-gray-800 flex justify-between items-center fixed top-0 left-0 bg-black transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            width={20}
            height={20}
            className="object-cover"
          />
          <h1 className="text-2xl font-semibold Poppins">
            <span className="text-lime-200">Tender</span>
            <span className="bg-linear-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">
              Mind
            </span>
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center lg:gap-6 gap-4">
          <Link href="/" onClick={() => setActiveId("/")}>
            <li className="text-base text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
              {t("home")}
            </li>
          </Link>

          <Link href="#how_it_work" onClick={() => setActiveId("#how_it_work")}>
            <li className="text-base text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
              {t("how_it_works")}
            </li>
          </Link>

          <Link href="#pricing" onClick={() => setActiveId("#pricing")}>
            <li className="text-base text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
              {t("pricing")}
            </li>
          </Link>

          <Link href="#blog" onClick={() => setActiveId("#blog")}>
            <li className="text-base text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
              {t("blog_title")}
            </li>
          </Link>

          <Link href="#contact" onClick={() => setActiveId("#contact")}>
            <li className="text-base text-gray-500 hover:text-gray-300 cursor-pointer font-medium transition-colors duration-300">
              {t("contact_title")}
            </li>
          </Link>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          {/* lang */}
          <ul className="flex items-center bg-[#1c1f2ad8] border border-gray-600 rounded-lg">
            <li
              onClick={() => setLang("uz")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
                lang === "uz"
                  ? "bg-lime-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              UZ
            </li>

            <li
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
                lang === "en"
                  ? "bg-lime-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </li>

            <li
              onClick={() => setLang("ru")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
                lang === "ru"
                  ? "bg-lime-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              RU
            </li>
          </ul>

          {/*Login */}
          <button className="bg-(--prim) px-6 py-1.5 rounded-lg cursor-pointer hover:shadow-[0_0_10px_#b6ff3b] font-medium btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] z-0 rela">
            {t("login")}
          </button>
        </div>

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex lg:hidden bg-[#1c1f2ad8] border border-gray-600 rounded-md p-1"
        >
          {openMenu ? (
            <X className="text-lime-300 w-6 h-6" />
          ) : (
            <Menu className="text-lime-300 w-6 h-6" />
          )}
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-black lg:hidden flex flex-col items-start px-[4%] md:px-[6%] gap-4 transition-all duration-800 ease-in-out overflow-hidden ${
            openMenu
              ? "max-h-125 opacity-100 py-6 border-b-2 border-t border-gray-800"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 w-full Inter">
            <Link href="/" onClick={() => setActiveId("/")}>
              <li className="text-base text-black bg-(--prim) cursor-pointer font-semibold px-6 py-1.5 rounded-sm">
                {t("home")}
              </li>
            </Link>

            <Link
              href="#how_it_work"
              onClick={() => setActiveId("#how_it_work")}
            >
              <li className="text-base text-black bg-(--prim) cursor-pointer font-semibold px-6 py-1.5 rounded-sm">
                {t("how_it_works")}
              </li>
            </Link>

            <Link href="#pricing" onClick={() => setActiveId("#pricing")}>
              <li className="text-base text-black bg-(--prim) cursor-pointer font-semibold px-6 py-1.5 rounded-sm">
                {t("pricing")}
              </li>
            </Link>

            <Link href="#blog" onClick={() => setActiveId("#blog")}>
              <li className="text-base text-black bg-(--prim) cursor-pointer font-semibold px-6 py-1.5 rounded-sm">
                {t("blog_title")}
              </li>
            </Link>

            <Link href="#contact" onClick={() => setActiveId("#contact")}>
              <li className="text-base text-black bg-(--prim) cursor-pointer font-semibold px-6 py-1.5 rounded-sm">
                {t("contact_title")}
              </li>
            </Link>
          </ul>

          <div className="flex justify-between items-center w-full pt-2">
            <ul className="flex items-center bg-[#1c1f2ad8] border border-gray-600 rounded-lg">
              <li
                onClick={() => setLang("uz")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
                  lang === "uz"
                    ? "bg-lime-400 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                UZ
              </li>

              <li
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
                  lang === "en"
                    ? "bg-lime-400 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </li>

              <li
                onClick={() => setLang("ru")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
                  lang === "ru"
                    ? "bg-lime-400 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                RU
              </li>
            </ul>

            {/*Login */}
            <button className="bg-(--prim) px-6 py-1.5 rounded-lg cursor-pointer hover:shadow-[0_0_10px_#b6ff3b] font-medium">
              {t("login")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
