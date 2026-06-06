"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  Mail,
  Phone,
  FileText,
  Target,
  Scale,
  CheckCircle2,
  Check,
  TriangleAlert,
} from "lucide-react";

import tenderData from "@/app/Json/Tender.json";

type Props = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTenderId: React.Dispatch<React.SetStateAction<number | null>>;
};

function Tenders({ setActive, setSelectedTenderId }: Props) {
  const { t } = useTranslation();

  const [category, setCategory] = useState<string>("Barchasi");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openCartIndex, setOpenCartIndex] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [comparison, setComparison] = useState<boolean>(false);
  const [comparisonId, setComparisonId] = useState<number | null>(null);
  const [comparisonIsOpen, setComparisonIsOpen] = useState<boolean>(false);

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

  const selectedTender = currentTenders.find((t) => t.id === comparisonId);

  return (
    <>
      <div className="px-4 2xl:px-6 pt-8 pb-10">
        <div className="flex items-end gap-4 border border-[#2A3555] bg-black/25 px-6 py-3 rounded-xl w-full">
          {/*Soha  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-sm uppercase text-(--prim) tracking-wider">
              {t("category")}
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
                <option>{t("all")}</option>
                <option>IT</option>
              </select>
            </div>
          </div>

          {/*Qidiruv  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-sm uppercase text-(--prim) tracking-wider">
              {t("search")}
            </span>

            <div className="flex items-center gap-3 border border-[#2A3555] bg-[#0B0F1A] px-4 h-11 rounded-lg hover:border-(--prim) focus-within:border-lime-400 transition-colors duration-200">
              <Search className="text-(--prim) w-5 h-5" />
              <input
                type="text"
                placeholder={`${t("search")}`}
                className="bg-transparent outline-none text-white placeholder:text-gray-500 w-full "
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-11 border border-transparent px-6 rounded-lg bg-lime-400 text-black font-semibold">
              {t("search")}
            </button>

            <button className="h-11 px-3 rounded-lg border border-lime-400 text-lime-400 font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5" />
              {t("ai_recommendation")}
            </button>
          </div>
        </div>

        <p className="text-gray-500 pt-10 Inter text-base">
          60 {t("tenders_found")}
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
              <button
                onClick={() => {
                  setIsOpen(false);
                  setActive("document");
                }}
                className="px-3 bg-(--prim) hover:shadow-[0_0_10px_#b6ff3b] transition-all duration-300 rounded-lg py-2.5 border border-transparent font-semibold flex items-center gap-1 text-[16px] cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Hujjat yaratish
              </button>

              <button
                onClick={() => {
                  setSelectedTenderId(tenderDetails!.id);
                  setActive("strategy");
                  setIsOpen(false);
                }}
                className="px-3 hover:border-(--prim) btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] transition-all duration-300 bg-black/25 rounded-lg py-2.5 border border-[#2A3555] text-white font-semibold flex items-center gap-1 text-[16px] text-sm cursor-pointer"
              >
                <Target className="text-white w-4 h-4" />
                Strategiya ko'rish
              </button>

              <button
                onClick={() => {
                  setComparison(true);
                  setIsOpen(false);
                }}
                className="px-3 hover:shadow-[0_0_10px_#b6ff3b] transition-all duration-300 bg-(--prim) rounded-lg py-2.5 border border-transparent font-semibold flex items-center gap-1 text-[16px] cursor-pointer"
              >
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

      {comparison && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 backdrop-blur-[1px] bg-black/30" />

          <div className="relative w-[50%] max-w-md h-[65vh] bg-[#0B0F1A] border border-[#2A3555] rounded-xl shadow-2xl px-5 py-4 flex flex-col">
            <h1 className="text-xl text-gray-200 font-semibold mb-4">
              Taqqoslash uchun 2-tender tanlang
            </h1>

            <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scroll">
              {currentTenders
                .filter((tender) => tender.id !== openCartIndex)
                .map((tender) => (
                  <div
                    onClick={() => {
                      setComparison(false);
                      setComparisonId(tender.id);
                      setComparisonIsOpen(true);
                    }}
                    key={tender.id}
                    className="space-y-2 bg-black rounded-lg px-4 py-3.5 my-1.5 cursor-pointer tender-card border-l-3 border-lime-400"
                  >
                    <h1 className="text-sm text-white font-medium line-clamp-1">
                      {tender.loyiha_nomi}
                    </h1>

                    <div className="flex items-center gap-2">
                      <p className="text-gray-300 text-xs">{tender.byudjet}</p>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <p className="text-gray-300 text-xs">
                        {tender.raqiblar_soni} raqib
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={() => setComparison(false)}
              className="w-full mt-3 py-1.5 rounded-sm bg-gray-600 hover:bg-gray-700 text-white cursor-pointer transition-colors duration-300 font-medium"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

      {comparisonIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 backdrop-blur-[1px] bg-black/30" />

          <div className="relative w-[50%] bg-[#0B0F1A] border border-[#2A3555] rounded-xl shadow-2xl">
            <div className="px-6 py-4 border-b border-[#2A3555]">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-white font-semibold">
                  Tender Taqqoslash
                </span>

                <button
                  onClick={() => setComparisonIsOpen(false)}
                  className="bg-gray-800 rounded-md h-8 w-8 flex items-center justify-center hover:border-red-500 border border-transparent transition-all duration-300 cursor-pointer"
                >
                  <X className="text-gray-300 w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="py-4 px-6 flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="bg-[#23272F] rounded-lg p-4 border-l-4 border-[#B6FF00]">
                  <h1 className="text-[#B6FF00] text-lg font-semibold line-clamp-2">
                    {tenderDetails?.loyiha_nomi}
                  </h1>

                  <ul className="pt-4">
                    <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                      <span className="font-semibold text-base text-gray-400">
                        Byudjet:
                      </span>
                      {tenderDetails?.byudjet}
                    </li>

                    <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                      <span className="font-semibold text-base text-gray-400">
                        Raqiblar:
                      </span>
                      {tenderDetails?.raqiblar_soni}
                    </li>

                    <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                      <span className="font-semibold text-base text-gray-400">
                        G'alaba:
                      </span>

                      <h2
                        className={`${tenderDetails!.galaba_ehtimoli >= 75 ? "text-green-500" : tenderDetails!.galaba_ehtimoli >= 50 ? "text-yellow-500" : "text-red-500"}`}
                      >
                        {tenderDetails?.galaba_ehtimoli}%
                      </h2>
                    </li>

                    <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                      <span className="font-semibold text-base text-gray-400">
                        Muddati:
                      </span>
                      {tenderDetails?.date}
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <h1 className="text-base text-[#B6FF00] font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Tender 1 ni Afzalliklari
                  </h1>

                  <ul className="pt-2 space-y-2">
                    <li className="flex items-center gap-1">
                      <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                      <h1 className="text-sm text-gray-300">
                        {tenderDetails?.galaba_ehtimoli}% g'alaba ehtimoli
                      </h1>
                    </li>

                    <li className="flex items-center gap-1">
                      <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                      <h1 className="text-sm text-gray-300">
                        {tenderDetails?.raqiblar_soni} ta raqib
                      </h1>
                    </li>

                    <li className="flex items-center gap-1">
                      <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                      <h1 className="text-sm text-gray-300">
                        {tenderDetails?.byudjet} byudjet
                      </h1>
                    </li>

                    <li className="flex items-center gap-1">
                      <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                      <h1 className="text-sm text-gray-300 flex gap-1">
                        {tenderDetails?.teglari.map((item) => (
                          <div key={item} className="">
                            {item},
                          </div>
                        ))}{" "}
                        sohalari
                      </h1>
                    </li>
                  </ul>

                  <h1 className="text-base text-red-700 font-semibold flex items-center gap-1 pt-6">
                    <TriangleAlert className="w-4 h-4 text-yellow-500" />
                    Tender 1 ni Xavflari
                  </h1>

                  <div className="flex items-center gap-1 pt-2">
                    <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                    <h1 className="text-sm text-gray-300">
                      Muddati tez tugaydi — shoshilinch hujjatlar
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {selectedTender && (
                  <>
                    <div className="bg-[#1F2438] rounded-lg p-4 border-l-4 border-[#4D7CFF]">
                      <h1 className="text-[#4D7CFF] text-lg font-semibold line-clamp-2">
                        {selectedTender.loyiha_nomi}
                      </h1>

                      <ul className="pt-4">
                        <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                          <span className="text-gray-400">Byudjet:</span>
                          {selectedTender.byudjet}
                        </li>

                        <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                          <span className="text-gray-400">Raqiblar:</span>
                          {selectedTender.raqiblar_soni}
                        </li>

                        <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                          <span className="text-gray-400">G'alaba:</span>
                          <span
                            className={
                              selectedTender.galaba_ehtimoli >= 75
                                ? "text-green-500"
                                : selectedTender.galaba_ehtimoli >= 50
                                  ? "text-yellow-500"
                                  : "text-red-500"
                            }
                          >
                            {selectedTender.galaba_ehtimoli}%
                          </span>
                        </li>

                        <li className="flex items-center gap-1 text-[#8B90A0] font-medium">
                          <span className="text-gray-400">Muddati:</span>
                          {selectedTender.date}
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6">
                      <h1 className="text-base text-[#4D7CFF] font-semibold flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        Tender 2 ni Afzalliklari
                      </h1>

                      <ul className="pt-2 space-y-2">
                        <li className="flex items-center gap-1">
                          <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                          <h1 className="text-sm text-gray-300">
                            {selectedTender.galaba_ehtimoli}% g'alaba ehtimoli
                          </h1>
                        </li>

                        <li className="flex items-center gap-1">
                          <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                          <h1 className="text-sm text-gray-300">
                            {selectedTender.raqiblar_soni} ta raqib
                          </h1>
                        </li>

                        <li className="flex items-center gap-1">
                          <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                          <h1 className="text-sm text-gray-300">
                            {selectedTender.byudjet} byudjet
                          </h1>
                        </li>
                        <li className="flex items-center gap-1">
                          <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                          <h1 className="text-sm text-gray-300 flex gap-1">
                            {selectedTender.teglari.map((item) => (
                              <div key={item} className="">
                                {item},
                              </div>
                            ))}{" "}
                            sohalari
                          </h1>
                        </li>
                      </ul>

                      <h1 className="text-base text-red-700 font-semibold flex items-center gap-1 pt-6">
                        <TriangleAlert className="w-4 h-4 text-yellow-500" />
                        Tender 2 ni Xavflari
                      </h1>

                      <div className="flex items-center gap-1 pt-2">
                        <span className="bg-gray-400 w-1.5 h-1.5 rounded-full"></span>
                        <h1 className="text-sm text-gray-300">
                          Muddati tez tugaydi — shoshilinch hujjatlar
                        </h1>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="py-4 px-3 rounded-lg bg-[#1B2F38] mx-6 my-4 border-l-4 border-green-500">
              <h1 className="text-base text-green-500 font-semibold uppercase">
                Taklif
              </h1>

              <p className="text-white text-sm pt-1">
                {(tenderDetails?.galaba_ehtimoli ?? 0) >
                (selectedTender?.galaba_ehtimoli ?? 0)
                  ? tenderDetails?.loyiha_nomi
                  : selectedTender?.loyiha_nomi}
                . Yuqori g'alaba ehtimoli va ko'proq vaqt mavjud.
              </p>
            </div>

            <div className="bg-black mx-6 my-4 py-3 px-4 rounded-md flex">
              <div className="w-full lg:w-1/2">
                <h1 className="flex items-center gap-1 text-gray-300 text-sm font-normal">
                  <span className="text-gray-400 font-semibold text-sm">
                    Qiyinchi:
                  </span>
                  Oson
                </h1>
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="flex items-center gap-1 text-gray-300 text-sm font-normal">
                  <span className="text-gray-400 font-semibold text-sm">
                    Hujjatlar vaqti:
                  </span>
                  6 kun
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Tenders;
