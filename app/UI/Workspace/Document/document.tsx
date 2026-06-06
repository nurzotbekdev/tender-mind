"use client";

import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  BarChart3Icon,
  Bot,
  Check,
  CheckCircle,
  CheckCircle2,
  CpuIcon,
  FileText,
  LucideShieldAlert,
  LucideSwords,
  LucideWalletCards,
  Zap,
} from "lucide-react";

function Document() {
  const percentage = 84;
  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const { t } = useTranslation();

  return (
    <>
      <div className="px-4 2xl:px-6 pt-8 pb-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-[#2A3555] bg-black/25 p-6 rounded-xl">
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-400 w-6 h-6 fill-yellow-500" />
              <span className="text-3xl text-gray-200 font-semibold ">
                {t("ai_document_generator")}
                <span className="text-sm text-lime-400 pl-2">
                  {t("documents_count")}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#331A22] border border-[#592E3A] mt-4 rounded-xl p-5 Inter">
              <span className="text-[#EF4444] text-sm">
                {t("document_warning")}
              </span>
            </div>

            <form className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {" "}
                    {t("company_full_name")}
                  </span>
                  <input
                    type="text"
                    placeholder="Farand Group"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("legal_structure")}
                  </span>
                  <input
                    type="text"
                    placeholder="MCHJ"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("director_name")}
                  </span>
                  <input
                    type="text"
                    placeholder="Karimov Sardor Akmalovich"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("tax_number")}
                  </span>
                  <input
                    type="text"
                    placeholder="302 456 789"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <span className="text-sm uppercase text-gray-300">
                  {t("legal_address")}
                </span>
                <input
                  type="text"
                  placeholder="Toshkent sh., Chilonzor t., 7-mavze, 21-uy"
                  className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("phone_email")}
                  </span>
                  <input
                    type="text"
                    placeholder="+99 90 123 45 67 / info@farand.uz"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("experience_years")}
                  </span>
                  <input
                    type="number"
                    placeholder="5"
                    min={1}
                    max={30}
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <span className="text-sm uppercase text-gray-300">
                  {t("bank_details")}
                </span>
                <input
                  type="text"
                  placeholder="XTBO Toshkent fil., MFO: 00873, H/R: 20208000000000000001"
                  className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <span className="text-sm uppercase text-gray-300">
                  {t("similar_projects")}
                </span>
                <input
                  type="text"
                  placeholder="2024: Toshkent XTB e-ta'lim, 2023: DSQ analitika..."
                  className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("tender_number")}
                  </span>
                  <input
                    type="text"
                    placeholder="LOT-2026/04-IT"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("customer_organization")}
                  </span>
                  <input
                    type="text"
                    placeholder="Toshkent XTB"
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("offer_price_vat")}
                  </span>
                  <input
                    type="number"
                    placeholder="8500 000 000"
                    min={1}
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm uppercase text-gray-300">
                    {t("completion_period")}
                  </span>
                  <input
                    type="text"
                    placeholder={`${t("calendar_days_90")}`}
                    className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-[#0B0F1A] outline-none"
                  />
                </div>
              </div>
            </form>

            <button className="mt-6 text-black font-semibold text-lg bg-(--prim) rounded-lg py-2 w-full Inter cursor-pointer hover:shadow-[0_0_6px_#b6ff3b] transition-all duration-300">
              {t("generate_ai_documents")}
            </button>
          </div>

          <div className="flex flex-col gap-4.5">
            <div className="border border-[#2A3555] bg-black/25 rounded-lg">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center text-white gap-2 text-lg font-semibold">
                    <Bot className="w-5 h-5 text-lime-400" />
                    {t("ai_assistant")}
                  </h1>

                  <button className="border border-[#2A3555] bg-[#0B0F1A] px-3 py-1 rounded-md text-white cursor-pointer text-sm flex gap-1 items-center">
                    {t("detailed_analysis")}
                    <ArrowRight className="text-white w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="border-t border-[#2A3555] pl-6 py-6 flex items-center gap-4">
                <div className="relative flex items-center justify-center pr-5">
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
                    <h2 className="text-2xl font-bold text-white">
                      {percentage}%
                    </h2>
                    <p className="text-[#A3FF12] text-xs">
                      {t("tender_win_probability")}
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="text-white text-sm font-semibold flex items-center">
                    {t("win_probability_label")}
                    <span className="text-green-500 pl-1 uppercase">
                      {t("high")}
                    </span>
                  </h1>

                  <ul className="pt-4 space-y-2">
                    <li className="flex items-center gap-1 text-gray-400 text-sm">
                      <Check className="text-lime-400 w-4 h-4" />
                      {t("price_optimization")}
                    </li>

                    <li className="flex items-center gap-1 text-gray-400 text-sm">
                      <Check className="text-lime-400 w-4 h-4" />
                      {t("experience_improvement")}
                    </li>

                    <li className="flex items-center gap-1 text-gray-400 text-sm">
                      <Check className="text-lime-400 w-4 h-4" />
                      {t("warranty_extension")}
                    </li>

                    <li className="flex items-center gap-1 text-gray-400 text-sm">
                      <Check className="text-lime-400 w-4 h-4" />
                      {t("technical_offer_improvement")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-[#2A3555] bg-black/25 rounded-lg">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center text-white gap-2 text-lg font-semibold">
                    <BarChart3Icon className="w-5 h-5 text-lime-400" />
                    {t("main_indicators")}
                  </h1>
                </div>
              </div>

              <div className="border-t border-[#2A3555] pb-6 px-6 py-6 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-900 pb-2">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <LucideShieldAlert className="w-5 h-5 text-lime-400" />
                    {t("risk_level")}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-lime-400" />
                    {t("low")}
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-900 pb-2">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <LucideSwords className="w-5 h-5 text-lime-400" />
                    {t("competition_level")}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    {t("medium")}
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-900 pb-2">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <LucideWalletCards className="w-5 h-5 text-lime-400" />
                    {t("financial_stability")}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-lime-400" />
                    {t("good")}
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-900 pb-2">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CpuIcon className="w-5 h-5 text-lime-400" />
                    {t("technical_compatibility")}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-lime-400" />
                    {t("high")}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#2A3555] bg-black/25 rounded-lg">
              <div className="px-6 py-4 flex items-center gap-2">
                <h1 className="flex items-center text-white gap-1 text-lg font-semibold">
                  <FileText className="w-5 h-5 text-blue-500" />
                  {t("generated_documents")}
                </h1>

                <span className="text-white bg-blue-600 rounded-sm px-3 py-0.5 text-xs font-semibold">
                  {t("count_7")}
                </span>
              </div>

              <div className="border-t border-[#2A3555] pb-6 px-6 py-6 flex items-start gap-4">
                <div className="flex-1">
                  <ul className=" space-y-2">
                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("application")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>

                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("company_profile")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>

                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("price_offer")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>

                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("warranty_letter")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>
                  </ul>
                </div>

                <div className="flex-1">
                  <ul className=" space-y-2">
                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("technical_offer")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>

                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("financial_status")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>

                    <li className="flex items-center justify-between border border-[#2A3555] bg-[#0B0F1A] rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-8 h-8 text-violet-500" />
                        <div>
                          <h1 className="text-white text-sm font-semibold">
                            {t("power_of_attorney")}
                          </h1>
                          <p className="text-gray-400 text-xs">
                            {t("will_be_generated")}
                          </p>
                        </div>
                      </div>

                      <CheckCircle className="w-5 h-5 text-lime-400" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document;
