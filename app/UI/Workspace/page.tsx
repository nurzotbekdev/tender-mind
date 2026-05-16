"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, FileText, Target } from "lucide-react";
import Tenders from "./Tenders/tenders";
import Document from "./Document/document";
import Strategy from "./Strategy/strategy";

function Workspace() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("tender");

  return (
    <>
      <div className="bg-black px-[4%] md:px-[6%] lg:px-[8%] 2xl:px-[10%] pt-[20%] sm:pt-[14%] md:pt-[12%] lg:pt-[10%] xl:pt-[8%] 2xl:pt-[6%]">
        <div className="border border-[#2A3555] bg-[#0B0F1A] rounded-2xl overflow-hidden">
          <div className="flex">
            {/* Tenders */}
            <div
              onClick={() => setActive("tender")}
              className={`w-full flex justify-center py-4 border-b cursor-pointer transition-all duration-300
                ${
                  active === "tender"
                    ? "border-(--prim) bg-[#151A2E]"
                    : "border-[#2A3555] border-b"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-[10px] p-2.5 bg-[#2D3655] border border-transparent">
                  <Search className="w-6 h-6 text-lime-500" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl text-white font-semibold">
                      {t("tenders")}
                    </h1>

                    <span className="text-black bg-lime-500 rounded-sm px-3 py-0.5 text-xs font-semibold">
                      32
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">{t("all_tenders")}</p>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div
              onClick={() => setActive("document")}
              className={`w-full flex justify-center py-4 border-b cursor-pointer transition-all duration-300
                ${
                  active === "document"
                    ? "border-(--prim) bg-[#151A2E]"
                    : "border-[#2A3555] border-b"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-[10px] p-2.5 bg-[#2D3655] border border-transparent">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl text-white font-semibold">
                      {t("document")}
                    </h1>

                    <span className="text-black bg-blue-500 rounded-sm px-3 py-0.5 text-xs font-semibold">
                      7
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">
                    {t("documents_templates")}
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy */}
            <div
              onClick={() => setActive("strategy")}
              className={`w-full flex justify-center py-4 border-b cursor-pointer transition-all duration-300
                ${
                  active === "strategy"
                    ? "border-(--prim) bg-[#151A2E]"
                    : "border-[#2A3555] border-b"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-[10px] p-2.5 bg-[#2D3655] border border-transparent">
                  <Target className="w-6 h-6 text-[#8B5CF6]" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl text-white font-semibold">
                      {t("strategy")}
                    </h1>

                    <span className="text-black bg-[#8B5CF6] rounded-sm px-3 py-0.5 text-xs font-semibold">
                      5
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">{t("strategic_plan")}</p>
                </div>
              </div>
            </div>
          </div>

          {active === "tender" && <Tenders />}

          {active === "document" && <Document />}

          {active === "strategy" && <Strategy />}
        </div>

        <div className="h-50"></div>
      </div>
    </>
  );
}

export default Workspace;
