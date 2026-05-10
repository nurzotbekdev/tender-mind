"use client";

import { useTranslation } from "react-i18next";
import { Check, Rocket, Star, X } from "lucide-react";

function Pricing() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] xl:py-[10%] bg-black flex flex-col items-center"
        id="pricing"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_25px_rgba(182,255,59,0.30)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          {t("pricing")}
        </div>

        <h1 className="pt-5 text-2xl md:text-5xl text-white font-semibold text-center">
          {t("choose")} <br />{" "}
          <span className="text-lime-400">{t("_pricing")}</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-lg mt-3 lg:w-[40%] w-full text-center Inter">
          {t("choose_best_plan")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5 gap-10 lg:mt-15 mt-10 w-full">
          <div className="border-2 border-[#2A3555] bg-[#0B0F1A] p-6 rounded-2xl h-full flex flex-col">
            <div className="w-12 h-12 rounded-full p-2 bg-[#2D3655] flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-2xl text-white font-semibold mt-4">
              {t("trial")}
            </h1>

            <p className="text-gray-400 text-sm Inter mt-2">
              {t("trial_description")}
            </p>

            <h1 className="text-white text-5xl font-semibold mt-6">
              0{" "}
              <span className="text-gray-400 text-base font-normal">
                {t("currency_month")}
              </span>
            </h1>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-lime-400 w-5 h-5" />
                {t("daily_search_limit")}
              </li>

              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-lime-400 w-5 h-5" />
                {t("ai_document_once")}
              </li>

              <li className="flex items-center gap-2 text-gray-500 text-base">
                <X className="text-gray-300-400 w-5 h-5" />
                {t("strategy_analysis")}
              </li>
            </ul>

            <button className="bg-[#1F2937] border border-[#374151] py-2 w-full rounded-lg text-white text-lg font-semibold mt-8 lg:mt-auto cursor-pointer hover:bg-[#1e2d44] btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] z-0 relative">
              {t("start")}
            </button>
          </div>

          <div className="border-2 border-lime-300 shadow-[0_0_30px_rgba(182,255,59,0.40)] bg-[#0B0F1A] p-6 rounded-2xl relative pricing-card">
            <div className="w-12 h-12 rounded-full p-2 bg-[#2D3655] flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-2xl text-white font-semibold mt-4">
              {t("professional_plan")}
            </h1>

            <p className="text-gray-400 text-sm Inter mt-2">
              {t("professional_description")}
            </p>

            <h1 className="text-(--prim) text-5xl font-semibold mt-6">
              390,000{" "}
              <span className="text-gray-400 text-base font-normal">
                {t("currency_month")}
              </span>
            </h1>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-lime-400 w-5 h-5" />
                {t("unlimited_search")}
              </li>

              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-lime-400 w-5 h-5" />
                {t("unlimited_ai_documents")}
              </li>

              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-lime-400 w-5 h-5" />
                {t("full_ai_strategy")}
              </li>

              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-lime-400 w-5 h-5" />
                {t("export_word_pdf")}
              </li>
            </ul>

            <button className="bg-(--prim) border border-(--prim) py-2 w-full rounded-lg text-black text-lg font-semibold mt-10 cursor-pointer hover:shadow-[0_0_20px_#b6ff3b] btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] z-0 relative">
              {t("subscribe")}
            </button>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2  bg-(--prim) px-3 py-1.5 font-bold Inter rounded-full text-sm uppercase flex items-center gap-1">
              <Star className="w-4 h-4" />
              {t("most_popular")}
            </div>
          </div>

          <div className="border-2 border-[#2A3555] bg-[#0B1020] p-6 rounded-2xl h-full flex flex-col">
            <div className="w-12 h-12 rounded-full p-2 bg-[#2D3655] flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-2xl text-white font-semibold mt-4">
              {t("corporate_plan")}
            </h1>

            <p className="text-gray-400 text-sm Inter mt-2">
              {t("corporate_description")}
            </p>

            <h1 className="text-[#8B5CF6] text-5xl font-semibold mt-6">
              1,200,000{" "}
              <span className="text-gray-400 text-base font-normal">
                {t("currency_month")}
              </span>
            </h1>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-[#8B5CF6] w-5 h-5" />
                {t("user_accounts_5")}
              </li>

              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-[#8B5CF6] w-5 h-5" />
                {t("crm_api_integration")}
              </li>

              <li className="flex items-center gap-2 text-white text-base">
                <Check className="text-[#8B5CF6] w-5 h-5" />
                {t("ai_legal_service")}
              </li>
            </ul>

            <button className="bg-[#0B1020] border border-[#7C3AED] py-2 w-full rounded-lg text-[#A78BFA] text-lg font-semibold mt-8 xl:mt-auto cursor-pointer hover:bg-[#111a27] btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] z-0 relative">
              {t("contact")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
