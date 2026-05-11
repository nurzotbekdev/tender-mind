"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Search, FileText, CircleCheck, BrainCircuit } from "lucide-react";

import featuresImg from "@/public/features.png";

const featuresData = [
  {
    id: 1,
    title: "ai_strategy",
    desc: "tender_search_filter",
    icon: Search,
  },
  {
    id: 2,
    title: "ai_document_generator",
    desc: "ai_document_creation",
    icon: FileText,
  },
  {
    id: 3,
    title: "smart_analysis",
    desc: "ai_tender_strategy",
    icon: BrainCircuit,
  },
];

function Features() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[8%] xl:py-[10%]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="w-full lg:w-[55%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              {t("features")}
            </div>

            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-200 mt-6 whitespace-pre-line">
              {t("ai_power_process_line1")} <br />
              <span className="text-lime-400">
                {t("ai_power_process_line2")}
              </span>
            </h1>

            <p className="text-gray-300 text-sm md:text-lg mt-3 lg:mt-4 xl:mt-8 Inter w-full xl:w-[75%]">
              {t("business_next_level")}
            </p>
          </div>

          <div className="w-full lg:w-[50%] hidden lg:flex"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 mt-6">
          {featuresData.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B0E14] rounded-xl p-6 relative features-card border border-white/10 cursor-pointer group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur features-icon relative z-5">
                  <item.icon className="w-10 h-10 text-lime-400" />
                </div>

                <div>
                  <h1 className="text-white text-xl font-semibold mb-1">
                    {t(`${item.title}`)}
                  </h1>
                  <p className="text-sm text-gray-400">{t(`${item.desc}`)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-10">
                <div className="text-lime-300 text-base flex items-center gap-2 group-hover:text-lime-500 transition-colors duration-300">
                  <CircleCheck size={16} />
                  Batafsil →
                </div>

                <h1 className="text-5xl font-semibold text-gray-600">
                  0{item.id}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
