"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ChevronRight, ArrowRight, Lock } from "lucide-react";

import icon1 from "@/public/contact_icon1.png";
import icon2 from "@/public/contact_icon2.png";
import icon3 from "@/public/contact_icon3.png";
import icon4 from "@/public/contact_icon4.png";

const documentsData = [
  {
    id: 1,
    title: "partnership_agreement",
    description: "partnership_docs_desc",
    icon: icon1,
  },
  {
    id: 2,
    title: "license",
    description: "license_docs_desc",
    icon: icon2,
  },
  {
    id: 3,
    title: "invoice_samples",
    description: "invoice_docs_desc",
    icon: icon3,
  },
  {
    id: 4,
    title: "terms_of_use",
    description: "usage_rules_desc",
    icon: icon4,
  },
];

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="bg-black px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] xl:py-[10%]"
        id="contact"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          {t("contact_title")}
        </div>

        <div className="flex flex-col 2xl:flex-row items-end justify-between gap-6">
          <div className="w-full 2xl:w-[40%]">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-200 mt-6 whitespace-pre-line">
              {t("contact_subtitle")} <br />
              <span className="text-lime-400">{t("contact_subtitle1")}</span>
            </h1>

            <p className="text-gray-300 text-sm 2xl:text-lg Inter w-full mt-3">
              {t("contact_description")}
            </p>
            <p className="text-gray-300 text-sm 2xl:text-lg Inter w-full">
              {t("contact_channels")}
            </p>

            <div className="flex flex-col rounded-xl bg-[#0B0F1A] border-2 border-[#2A3555] mt-6 px-4 sm:px-8">
              {documentsData.map((document, index) => (
                <div
                  key={document.id}
                  className={`flex justify-between items-center py-6 ${index !== documentsData.length - 1 ? "border-b-2 border-gray-900" : ""}`}
                >
                  <div className="flex gap-4 sm:gap-6 items-center">
                    <Image
                      src={document.icon}
                      alt="icon"
                      width={70}
                      height={70}
                      className="border border-(--prim) rounded-lg p-2 object-cover"
                    />

                    <div className="flex flex-col gap-1">
                      <h1 className="text-white text-base sm:text-lg font-semibold">
                        {t(`${document.title}`)}
                      </h1>
                      <p className="text-xs sm:text-sm text-gray-500 w-full lg:w-[90%] ">
                        {t(`${document.description}`)}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full 2xl:w-[55%]">
            <div className="rounded-xl bg-[#0B0F1A] border-2 border-[#2A3555] py-6 sm:px-8 px-5 cursor-pointer hover:border-(--prim)">
              <h1 className="text-2xl sm:text-3xl text-white font-semibold">
                {t("quick_contact_form")}
              </h1>

              <form className="mt-6">
                <div className="flex 2xl:flex-row flex-col items-center gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-sm text-gray-500">
                      {t("first_name")}
                    </span>
                    <input
                      type="text"
                      placeholder={t("enter_first_name")}
                      className="placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border border-[#2A3555] focus:outline-none focus:border-(--prim) text-gray-300 rounded-md bg-black/40"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-sm text-gray-500">
                      {t("last_name")}
                    </span>
                    <input
                      type="text"
                      placeholder={t("enter_last_name")}
                      className="placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border border-[#2A3555] focus:outline-none focus:border-(--prim) text-gray-300 rounded-md bg-black/40"
                    />
                  </div>
                </div>

                <div className="flex 2xl:flex-row flex-col items-center gap-5 mt-5 xl:mt-8 2xl:mt-10">
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-sm text-gray-500">{t("email")}</span>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border border-[#2A3555] focus:outline-none focus:border-(--prim) text-gray-300 rounded-md bg-black/40"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-sm text-gray-500">{t("phone")}</span>
                    <input
                      type="tel"
                      placeholder="+998 (90) 123-4567"
                      className="placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border border-[#2A3555] focus:outline-none focus:border-(--prim) text-gray-300 rounded-md bg-black/40"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5 xl:mt-8 2xl:mt-10">
                  <span className="text-sm text-gray-500">{t("message")}</span>
                  <textarea
                    placeholder={t("enter_message")}
                    rows={6}
                    className="placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border border-[#2A3555] focus:outline-none focus:border-(--prim) text-gray-300 rounded-md bg-black/40"
                  ></textarea>
                </div>

                <button className="xl:my-8 2xl:my-10 my-5 flex items-center justify-center gap-1 bg-(--prim) py-2 w-full rounded font-semibold text-lg uppercase cursor-pointer hover:shadow-[0_0_10px_#b6ff3b]">
                  {t("send")}
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>

                <p className="text-gray-400 text-sm font-medium flex items-center gap-2 justify-center">
                  <Lock className="w-4 h-4" />
                  {t("privacy_note")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
