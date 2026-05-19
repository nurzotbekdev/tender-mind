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
  X,
  Landmark,
  ShieldCheck,
  FileCheck,
  ClipboardCheck,
  Check,
  Mail,
  Phone,
  FilePlus,
  FileText,
  Compass,
  Target,
  TrendingUp,
  GitCompare,
  Scale,
  CheckCircle2,
} from "lucide-react";

import tenderData from "@/app/Json/Tender.json";

function Tenders() {
  const [category, setCategory] = useState<string>("Barchasi");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openCartIndex, setOpenCartIndex] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (index: number): void => {
    setOpenCartIndex(openCartIndex === index ? null : index);
    setIsOpen(true);
  };

  const currentTenders =
    tenderData[`page${currentPage}` as keyof typeof tenderData];

  const totalPages = Object.keys(tenderData).length;

  const tenderDetails = currentTenders.find(
    (item) => item.id === openCartIndex,
  );

  return (
    <>
      <div className=" px-4 2xl:px-6 pt-8 pb-10">
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

        <div className="grid grid-cols-3 gap-3 2xl:gap-6 pt-4">
          {currentTenders.map((tender) => (
            <div
              onClick={() => toggle(tender.id)}
              key={tender.id}
              className="bg-black/25 border border-[#2A3555] rounded-2xl flex flex-col p-6 cursor-pointer hover:shadow-xs hover:shadow-gray-900 transition-all duration-500 hover:-translate-y-0.5 transform-gpu will-change-transform"
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

              <h1 className="pt-4 text-base 2xl:text-lg text-white font-semibold Inter">
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
                      className="border border-gray-800 bg-[#0B0F1A] px-1 py-0.5 text-xs rounded text-gray-500"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <div className="px-1 py-0.5 rounded border border-gray-800 bg-[#0B0F1A]">
                    <Medal className="text-yellow-500 fill-yellow-500/10 w-4.5 h-4.5" />
                  </div>

                  <div className="px-1 py-0.5 rounded border border-gray-800 bg-[#0B0F1A]">
                    <Tag className="text-yellow-500 fill-yellow-500/10 w-4.5 h-4.5 rotate-90" />
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

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-[90%] max-w-3xl bg-[#0B0F1A] border border-[#2A3555] rounded-xl shadow-2xl">
            <div className="p-6 border-b border-[#2A3555]">
              <div className="flex items-center justify-between">
                <span
                  className={`border px-3 py-0.5 text-sm uppercase rounded-full`}
                  style={{
                    borderColor: tenderDetails?.border_color,
                    backgroundColor: tenderDetails?.bg_color,
                    color: tenderDetails?.tag_color,
                  }}
                >
                  {tenderDetails?.soha}
                </span>

                <div className="flex items-center gap-3 ">
                  <button className="bg-black/25 h-9 border border-gray-700 px-4 flex items-center gap-2 rounded-lg text-gray-300 cursor-pointer hover:border-(--prim) hover:text-(--prim) transition-all duration-300">
                    <Tag className="text-yellow-500 fill-yellow-500/10 w-4.5 h-4.5 rotate-90" />
                    Saqlash
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-800 rounded-md h-8 w-8 flex items-center justify-center hover:border-red-500 border border-transparent transition-all duration-300 cursor-pointer"
                  >
                    <X className="text-gray-300 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h1 className="text-xl text-white font-semibold">
                {tenderDetails?.loyiha_nomi}
              </h1>

              <div className="flex items-center gap-2 py-2">
                <Landmark className="text-gray-500 w-4 h-4" />
                <p className="text-gray-300 text-sm">
                  {tenderDetails?.buyurtmachi}
                </p>
              </div>

              <div className="flex items-center gap-2 py-6">
                <div className="bg-black/25 border border-[#2A3555] rounded-lg py-4 px-3 flex-2">
                  <span className="text-xs uppercase text-gray-500">
                    Byudjet
                  </span>
                  <h2 className="text-[16px] text-lime-500 font-semibold">
                    {tenderDetails?.byudjet}
                  </h2>
                </div>

                <div className="bg-black/25 border border-[#2A3555] rounded-lg py-4 px-3 flex-1">
                  <span className="text-xs uppercase text-gray-500">
                    G'alaba ehtimoli
                  </span>
                  <h2
                    className={`${tenderDetails!.galaba_ehtimoli >= 75 ? "text-green-500" : tenderDetails!.galaba_ehtimoli >= 50 ? "text-yellow-500" : "text-red-500"}`}
                  >
                    {tenderDetails?.galaba_ehtimoli}%
                  </h2>
                </div>

                <div className="bg-black/25 border border-[#2A3555] rounded-lg py-4 px-3 flex-1">
                  <span className="text-xs uppercase text-gray-500">
                    Raqiblar
                  </span>
                  <h2 className="text-[16px] text-gray-300 font-semibold">
                    {tenderDetails?.raqiblar_soni} ta
                  </h2>
                </div>

                <div className="bg-black/25 border border-[#2A3555] rounded-lg py-4 px-3 flex-1">
                  <span className="text-xs uppercase text-gray-500">
                    Muddat
                  </span>
                  <h2
                    className={`${tenderDetails!.muddat <= 0 ? "text-[#EF4444]" : "text-yellow-500"} text-[16px]`}
                  >
                    {tenderDetails?.muddat} kun qoldi
                  </h2>
                </div>
              </div>

              <div className="pt-2">
                <h2 className="text-base text-gray-300 uppercase">
                  Loyiha haqida
                </h2>
                <span className="text-sm text-gray-500 pt-1">
                  {tenderDetails?.loyiha_tavsifi}
                </span>
              </div>

              <div className="pt-6">
                <h2 className="text-base text-gray-300 uppercase pb-1">
                  Talablar
                </h2>

                {tenderDetails?.talablar.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 pt-2">
                    <CheckCircle2 className="w-5 h-5 text-(--prim)" />
                    <span className="text-gray-500 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h2 className="text-base text-gray-300 uppercase pb-1">
                  Aloqa
                </h2>

                <div className="flex gap-2 items-center pt-2 cursor-pointer">
                  <Mail className="text-(--prim) w-4 h-4" />
                  <span className="text-(--prim) text-sm">
                    {tenderDetails?.email}
                  </span>
                </div>

                <div className="flex gap-2 items-center pt-1 cursor-pointer">
                  <Phone className="text-(--prim) w-4 h-4" />
                  <span className="text-(--prim) text-sm">
                    {tenderDetails?.phone}
                  </span>
                </div>
              </div>

              <div className="pt-6 pb-4">
                <div className="flex items-center gap-1.5">
                  {tenderDetails?.teglari.map((tag, index) => (
                    <div
                      key={index}
                      className="border border-gray-800 bg-[#0B0F1A] px-2 py-1 text-xs rounded text-gray-500"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#2A3555] flex items-center justify-between gap-2">
              <button className="px-3 bg-(--prim) hover:shadow-[0_0_10px_#b6ff3b] transition-all duration-300 rounded-lg py-2.5 border border-transparent font-semibold flex items-center gap-1 text-[16px] cursor-pointer">
                <FileText className="w-4 h-4" />
                Hujjat yaratish
              </button>
              <button className="px-3 hover:border-(--prim) btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] transition-all duration-300 bg-black/25 rounded-lg py-2.5 border border-[#2A3555] text-white font-semibold flex items-center gap-1 text-[16px] text-sm cursor-pointer">
                <Target className="text-white w-4 h-4" />
                Strategiya ko'rish
              </button>
              <button className="px-3 hover:shadow-[0_0_10px_#b6ff3b] transition-all duration-300 bg-(--prim) rounded-lg py-2.5 border border-transparent font-semibold flex items-center gap-1 text-[16px] cursor-pointer">
                <Scale className="w-4 h-4" />
                Taqqoslash
              </button>
              <button className="px-3 btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] transition-all duration-300 bg-black/25 rounded-lg border border-lime-400 text-lime-400 font-semibold py-2.5 flex items-center gap-1 text-[16px] cursor-pointer">
                <Bot className="text-(--prim) w-5 h-5 pb-1" />
                AI dan maslahat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Tenders;
