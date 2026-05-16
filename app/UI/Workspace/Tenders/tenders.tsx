"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Bot,
  ChevronDown,
  Search,
  Medal,
  Tag,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import tenderData from "@/app/Json/Tender.json";

function Tenders() {
  const [category, setCategory] = useState<string>("Barchasi");
  const [currentPage, setCurrentPage] = useState(1);

  const currentTenders =
    tenderData[`page${currentPage}` as keyof typeof tenderData];

  const totalPages = Object.keys(tenderData).length;

  return (
    <>
      <div className="px-6 pt-8 pb-10">
        <div className="flex items-end gap-4 border border-[#2A3555] bg-black/25 px-6 py-3 rounded-xl w-full">
          {/*Soha  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-sm uppercase text-(--prim) tracking-wider">
              Soha
            </span>

            <div className="relative flex items-center gap-3 border border-[#2A3555] bg-[#0B0F1A] px-4 h-11 rounded-lg focus-within:border-(--prim) hover:border-(--prim) transition-all duration-200">
              <LayoutGrid className="w-5 h-5 text-lime-400 fill-(--prim)" />
              <span className="text-white text-lg flex-1">{category}</span>

              <ChevronDown className="text-lime-400 w-5 h-5" />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer bg-[#0B0F1A] text-white"
              >
                <option>Barchasi</option>
                <option>IT</option>
              </select>
            </div>
          </div>

          {/*Qidiruv  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-sm uppercase text-(--prim) tracking-wider">
              Qidirish
            </span>

            <div className="flex items-center gap-3 border border-[#2A3555] bg-[#0B0F1A] px-4 h-11 rounded-lg hover:border-(--prim) focus-within:border-lime-400 transition-colors duration-200">
              <Search className="text-(--prim) w-5 h-5" />
              <input
                type="text"
                placeholder="Qidirish"
                className="bg-transparent outline-none text-white placeholder:text-gray-500 w-full "
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-11 border border-transparent px-6 rounded-lg bg-lime-400 text-black font-semibold">
              Qidirish
            </button>

            <button className="h-11 px-3 rounded-lg border border-lime-400 text-lime-400 font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5" />
              AI Tavsiya
            </button>
          </div>
        </div>

        <p className="text-gray-500 pt-10 Inter text-base">
          60 ta tender topildi
        </p>

        <div className="grid grid-cols-3 gap-6 pt-4">
          {currentTenders.map((tender) => (
            <div
              key={tender.id}
              className="bg-black/25 border border-[#2A3555] rounded-2xl flex flex-col p-6 cursor-pointer hover:shadow-xs hover:shadow-gray-900 transition-all duration-500 hover:-translate-y-1 transform-gpu will-change-transform"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span
                    className={`border px-4 py-1 text-sm uppercase rounded-full`}
                    style={{
                      borderColor: tender.border_color,
                      backgroundColor: tender.bg_color,
                      color: tender.tag_color,
                    }}
                  >
                    {tender.soha}
                  </span>

                  <span
                    className={`${tender.yangimi ? "px-2.5 py-0.5 text-xs border border-[#0D7441] bg-[#13352C] text-[#01E57A] rounded-full" : ""} `}
                  >
                    {tender.yangimi ? "Yangi" : ""}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                  <span
                    className={`${tender.muddat <= 0 ? "text-[#EF4444]" : "text-yellow-500"} text-xs`}
                  >
                    {tender.muddat} kun
                  </span>
                </div>
              </div>

              <h1 className="pt-4 text-lg text-white font-semibold Inter">
                {tender.loyiha_nomi}
              </h1>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-gray-500">
                    Byudjet
                  </span>
                  <h2 className="text-[16px] text-lime-500 font-semibold">
                    {tender.byudjet}
                  </h2>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-gray-500">
                    Raqiblar
                  </span>
                  <h2 className="text-[16px] text-white font-semibold">
                    {tender.raqiblar_soni} ta
                  </h2>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 pb-2">
                <p className="text-gray-500 text-xs">G'alaba ehtimoli</p>

                <h1
                  className={`${tender.galaba_ehtimoli >= 75 ? "text-green-500" : tender.galaba_ehtimoli >= 50 ? "text-yellow-500" : "text-red-500"}`}
                >
                  {tender.galaba_ehtimoli}%
                </h1>
              </div>

              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${tender.galaba_ehtimoli}%`,

                    backgroundColor:
                      tender.galaba_ehtimoli >= 75
                        ? "#22C55E"
                        : tender.galaba_ehtimoli >= 50
                          ? "#EAB308"
                          : "#EF4444",

                    boxShadow:
                      tender.galaba_ehtimoli >= 75
                        ? "0 0 10px rgba(34, 197, 94, 0.5)"
                        : tender.galaba_ehtimoli >= 50
                          ? "0 0 10px rgba(234, 179, 8, 0.5)"
                          : "0 0 10px rgba(239, 68, 68, 0.5)",
                  }}
                ></div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center gap-1.5">
                  {tender.teglari.map((tag, index) => (
                    <div
                      key={index}
                      className="border border-gray-800 bg-[#0B0F1A] px-2 py-1 text-xs rounded text-gray-500"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <div className="px-1.5 py-1 rounded border border-gray-800 bg-[#0B0F1A]">
                    <Medal className="text-yellow-500 fill-yellow-500/10 w-4.5 h-4.5" />
                  </div>

                  <div className="px-1.5 py-1 rounded border border-gray-800 bg-[#0B0F1A]">
                    <Tag className="text-yellow-500 fill-yellow-500/10 w-4.5 h-4.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {category == "Barchasi" && (
          <div className="pt-10 flex items-center gap-1.5 justify-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="w-8 h-8 mr-2 rounded-sm border border-[#2A3555] bg-[#0B0F1A] flex items-center justify-center p-1.5 cursor-pointer hover:border-lime-300 group transition-all duration-300"
            >
              <ChevronLeft className="text-gray-600 group-hover:text-lime-300" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => {
                if (currentPage >= totalPages - 1) {
                  return page >= totalPages - 2;
                }

                return (
                  (page >= currentPage && page <= currentPage + 1) ||
                  page === totalPages
                );
              })
              .map((page, index, array) => {
                const prevPage = array[index - 1];

                return (
                  <div key={page} className="flex items-center gap-1.5">
                    {prevPage && page - prevPage > 1 && (
                      <span className="text-gray-500 px-1">...</span>
                    )}

                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-sm border flex items-center justify-center p-1.5 cursor-pointer transition-all duration-300 ${currentPage === page ? "bg-lime-400 border-transparent text-black shadow-[0_0_15px_rgba(163,230,53,0.35)]" : "border-[#2A3555] bg-[#0B0F1A] text-white hover:border-lime-300 hover:text-lime-300"}`}
                    >
                      <span className="text-xs">{page}</span>
                    </button>
                  </div>
                );
              })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="w-8 h-8 ml-2 rounded-sm border border-[#2A3555] bg-[#0B0F1A] flex items-center justify-center p-1.5 cursor-pointer hover:border-lime-300 group transition-all duration-300"
            >
              <ChevronRight className="text-gray-600 group-hover:text-lime-300" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Tenders;
