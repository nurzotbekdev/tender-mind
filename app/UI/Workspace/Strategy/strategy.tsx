"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  Bot,
  CalendarDays,
  ChartNoAxesColumn,
  ChartNoAxesCombined,
  Clock,
  Ellipsis,
  Flag,
  MoveRight,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react";

import it from "@/public/it.png";
import build from "@/public/build.png";

type Props = { selectedTenderId: number | null };

function Strategy({ selectedTenderId }: Props) {
  const percentage = 87;

  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const { t } = useTranslation();

  if (!selectedTenderId) {
    return (
      <div className="px-4 2xl:px-6 pt-8 pb-10">
        <h1 className="text-white text-2xl font-semibold">
          {t("victory_strategy")}
        </h1>

        <p className="text-gray-400 text-base py-3">
          {t("select_tender_ai_strategy")}
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="rounded-xl p-5 border border-[#2A3555] hover:border-(--prim) transition-all duration-300 cursor-pointer hover:-translate-y-0.5 bg-black/25">
            <div className="flex items-center gap-3 pb-6">
              <ChartNoAxesColumn className="w-8 h-8 text-lime-400" />
              <p className="text-white text-sm">{t("win_probability")}</p>
            </div>

            <div className="flex items-start justify-between pt-2 pb-3">
              <div className="relative flex items-center justify-center">
                <svg height={radius * 2} width={radius * 2}>
                  <circle
                    stroke="#1E2A4A"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />

                  <circle
                    stroke="#A3FF12"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    transform={`rotate(-90 ${radius} ${radius})`}
                  />
                </svg>

                <div className="absolute text-center">
                  <h2 className="text-3xl font-bold text-white">
                    {percentage}%
                  </h2>
                  <p className="text-[#A3FF12] text-sm">{t("high")}</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center text-white gap-2 text-sm">
                  <Bot className="w-5 h-5 text-cyan-500" />
                  {t("ai_recommendations")}
                </div>

                <p className="text-white text-base Inter pt-1">
                  {t("win_probability_high_text")}
                </p>

                <span className="text-gray-400 text-xs pt-4">
                  {t("growth_trend")}
                </span>

                <span className="flex items-center gap-1 text-green-500 py-1">
                  <MoveRight className="text-green-500 w-3.5 h-5 rotate-270" />
                  12%
                </span>

                <span className="text-gray-400 text-xs">
                  ({t("last_7_days")})
                </span>
              </div>
            </div>

            <div className="py-3 px-4 border border-[#2A3555] rounded-lg mt-4 bg-[#0B1020] flex items-center gap-4">
              <div className="bg-[#1B2A18] p-2.5 rounded-lg">
                <ChartNoAxesCombined className="text-[#B6FF1A] w-6.5 h-6.5" />
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-sm text-white font-medium">
                  {t("main_factor")}
                </h1>
                <p className="text-xs text-gray-400">{t("analysis_reason")}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-5 border border-[#2A3555] hover:border-(--prim) transition-all duration-300 cursor-pointer hover:-translate-y-0.5 bg-black/25">
            <div className="flex items-center gap-3">
              <Trophy className="w-7 h-7 text-lime-400" />
              <p className="text-white text-sm">{t("won_tender")}</p>
            </div>

            <h1 className="text-4xl font-semibold text-(--prim) py-4">23</h1>

            <div className="flex items-center gap-3">
              <div className="py-2 px-2 border border-[#2A3555] rounded-lg bg-[#0B1020] flex items-center gap-2 flex-1">
                <div className="bg-[#2A1548] p-2 rounded-lg">
                  <Wallet className="text-[#A855F7] w-5 h-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="text-sm text-white font-medium">
                    {t("largest_win")}
                  </h1>
                  <p className="text-xs text-gray-400">
                    {t("largest_win_amount")}
                  </p>
                </div>
              </div>

              <div className="py-2 px-2 border border-[#2A3555] rounded-lg bg-[#0B1020] flex items-center gap-2 flex-1">
                <div className="bg-[#0B2344]  p-2 rounded-lg">
                  <CalendarDays className="text-[#3B82F6] w-5 h-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="text-sm text-white font-medium">
                    {t("last_win")}
                  </h1>
                  <p className="text-xs text-gray-400">{t("days_ago_2")}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 py-4">
              {t("distribution_by_sector")}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#1B2D16] p-1.5 rounded-lg">
                    <Image src={build} alt="it" width={20} height={20} />
                  </div>
                  <p className="text-white text-base">{t("construction")}</p>
                </div>

                <div className="w-[43%] h-1.5 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out bg-lime-400"
                    style={{ width: "52%" }}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <h1 className="text-white text-sm">{t("count_12")}</h1>
                  <p className="text-gray-400 text-sm">(52%)</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#112742] p-1.5 rounded-lg">
                    <Image src={it} alt="it" width={20} height={20} />
                  </div>
                  <p className="text-white text-base">{t("it_services")}</p>
                </div>

                <div className="w-[45%] h-1.5 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out bg-blue-500"
                    style={{ width: "26%" }}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <h1 className="text-white text-sm">{t("count_6")}</h1>
                  <p className="text-gray-400 text-sm">(26%)</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#2A1548] p-1.5 rounded-lg">
                    <Ellipsis className="text-[#A855F7] w-5 h-5" />
                  </div>
                  <p className="text-white text-base">{t("others")}</p>
                </div>

                <div className="w-[45%] h-1.5 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out bg-blue-500"
                    style={{ width: "22%" }}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <h1 className="text-white text-sm">{t("count_5")}</h1>
                  <p className="text-gray-400 text-sm">(22%)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-5 border border-[#2A3555] hover:border-(--prim) transition-all duration-300 cursor-pointer hover:-translate-y-0.5 bg-black/25">
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 text-lime-400" />
              <p className="text-white text-sm">{t("active_tenders")}</p>
            </div>

            <h1 className="text-4xl font-semibold text-(--prim) py-4">30</h1>

            <div className="flex items-center gap-3">
              <div className="py-4 px-3 border border-[#2A3555] rounded-lg bg-[#0B1020] flex items-start gap-3 flex-1">
                <Clock className="text-gray-400 w-7 h-7" />

                <div className="flex flex-col">
                  <h1 className="text-xs text-gray-400 font-medium">
                    {t("near_deadline")}
                  </h1>
                  <p className="text-sm text-white pt-2">{t("days_3")}</p>
                  <span className="text-xs text-gray-400">
                    {t("date_time")}
                  </span>
                </div>
              </div>

              <div className="py-4 px-3 border border-[#2A3555] rounded-lg bg-[#0B1020] flex items-start gap-3 flex-1">
                <Flag className="text-gray-400 w-7 h-7" />

                <div className="flex flex-col">
                  <h1 className="text-xs text-gray-400 font-medium">
                    {t("high_priority")}
                  </h1>
                  <p className="text-sm text-white pt-2">{t("count_5")}</p>
                  <span className="text-xs text-gray-400">
                    {t("important_tenders")}
                  </span>
                </div>
              </div>
            </div>

            <div className="py-4 px-3 border border-[#2A3555] rounded-lg bg-[#0B1020] mt-4">
              <div className="flex items-center justify-between">
                <h1 className="text-sm text-white font-medium">
                  {t("status")}
                </h1>

                <div className="px-4 py-1 rounded-md bg-green-700 text-white text-xs">
                  {t("active")}
                </div>
              </div>

              <div className="w-full h-1.5 bg-gray-700 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out bg-lime-400"
                  style={{ width: "52%" }}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <h1 className="2xl:text-sm text-xs text-gray-400 font-medium">
                  {t("next_step")}
                </h1>

                <p className="2xl:text-sm text-xs text-gray-400">
                  {t("progress_75")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-white px-10 py-14">{selectedTenderId}</h1>
      <div className="h-150"></div>
    </>
  );
}

export default Strategy;
