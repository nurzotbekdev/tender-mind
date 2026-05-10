"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Search, Database, BarChart3, FileText, Zap } from "lucide-react";

import icon2 from "@/public/icon2.png";

const howItWorkData = [
  {
    id: 1,
    title: "tender_search",
    desc: "ai_scan_tenders",
    image: icon2,
  },
  {
    id: 2,
    title: "competitor_analysis",
    desc: "ai_competitor_insights",
    image: icon2,
  },
  {
    id: 3,
    title: "document_auto_generation",
    desc: "ai_document_speed",
    image: icon2,
  },
];

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="howItWork relative z-4 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] xl:py-[10%] flex flex-col items-center"
        id="how_it_work"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          {t("how_it_works")}
        </div>

        <h1 className="pt-5 text-2xl sm:text-4xl md:text-5xl text-white font-semibold flex items-center gap-3">
          {t("process")} <span className="text-lime-400">{t("three")}</span>
          {t("steps")}
        </h1>

        <p className="text-gray-300  text-sm md:text-lg mt-3 md:mt-8 lg:w-[50%] w-full text-center Inter">
          {t("manage_tenders_ai")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-14">
          {howItWorkData.map((item) => (
            <div
              key={item.id}
              className="bg-[#152026] p-4 rounded-lg relative flex items-start cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              <div className="rounded-full text-lime-300 flex items-center justify-center p-3 w-5 h-5 border border-lime-300">
                {item.id}
              </div>

              <div className="flex items-center mt-6">
                <Image src={item.image} alt="icon" width={150} height={260} />

                <div>
                  <h1 className="text-xl text-white mb-6 mt-2">
                    {t(`${item.title}`)}
                  </h1>
                  <p className="text-sm text-gray-400"> {t(`${item.desc}`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#152026] py-10 pl-10 mt-6 w-full rounded-lg lg:flex hidden flex-col items-center">
          <h1 className="text-center text-2xl text-white">
            {t("how_it_works")}?
          </h1>

          <div className="grid grid-cols-4 gap-4 my-8 w-full">
            <div className="flex items-center gap-2 justify-around">
              <div className="flex items-center gap-2">
                <div className="rounded-full p-4 border border-(--prim) flex items-center justify-center">
                  <Search className="w-6 h-6 text-lime-400" />
                </div>
                <h1 className="text-white whitespace-pre-line text-sm">
                  {t("step_auto_search")}
                </h1>
              </div>

              <div className="w-20 h-0 border-b-[3px] border-dotted border-[#acdb29] opacity-80 shadow-[0_0_8px_1px_rgba(172,219,41,0.6)]"></div>
            </div>

            <div className="flex items-center gap-2 justify-around">
              <div className="flex items-center gap-2">
                <div className="rounded-full p-4 border border-(--prim) flex items-center justify-center">
                  <Database className="w-6 h-6 text-lime-400" />
                </div>
                <h1 className="text-white whitespace-pre-line text-sm">
                  {t("step_data_analysis")}
                </h1>
              </div>

              <div className="w-20 h-0 border-b-[3px] border-dotted border-[#acdb29] opacity-80 shadow-[0_0_8px_1px_rgba(172,219,41,0.6)]"></div>
            </div>

            <div className="flex items-center gap-2 justify-around">
              <div className="flex items-center gap-2">
                <div className="rounded-full p-4 border border-(--prim) flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-lime-400" />
                </div>
                <h1 className="text-white whitespace-pre-line text-sm">
                  {t("step_best_strategy")}
                </h1>
              </div>

              <div className="w-20 h-0 border-b-[3px] border-dotted border-[#acdb29] opacity-80 shadow-[0_0_8px_1px_rgba(172,219,41,0.6)]"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full p-4 border border-(--prim) flex items-center justify-center">
                <FileText className="w-6 h-6 text-lime-400" />
              </div>
              <h1 className="text-white whitespace-pre-line text-sm">
                {t("step_documents_ready")}
              </h1>
            </div>
          </div>

          <div className="inline-flex items-center w-f gap-2 px-4 py-2 rounded-full bg-[#1a1f26] border border-gray-800 shadow-lg">
            <Zap
              size={18}
              className="text-[#acdb29] fill-[#acdb29] drop-shadow-[0_0_8px_rgba(172,219,41,0.8)]"
            />

            <span className="text-gray-300 text-sm font-medium">
              {t("process_summary")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
