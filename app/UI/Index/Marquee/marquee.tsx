"use client";

import { useTranslation } from "react-i18next";

function Marquee() {
  const { t } = useTranslation();

  const MarqueeData = t("marquee_items", { returnObjects: true }) as string[];

  return (
    <>
      <div className="marquee-wrapper py-5 bg-[#070B1A] text-gray-400">
        <div className="marquee-track">
          {[...MarqueeData, ...MarqueeData].map((item, index) => (
            <div key={index} className="marquee-item flex items-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-lime-500"></span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marquee;
