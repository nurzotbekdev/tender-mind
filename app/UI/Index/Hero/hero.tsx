"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Play } from "lucide-react";

import heroClient1 from "@/public/hero-client-1.jpg";
import heroClient2 from "@/public/hero-client-2.jpg";
import heroClient3 from "@/public/hero-client-3.jpg";
import heroClient4 from "@/public/hero-client-4.jpg";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero h-screen relative z-1 flex justify-center items-center flex-col px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          {t("made_for_uzbekistan")}
        </div>

        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-semibold Poppins text-center">
          {t("win_tenders")}
          <br />
          <span className="bg-linear-to-r from-lime-200 to-lime-400 bg-clip-text text-transparent">
            {t("with_ai")}
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg whitespace-pre-line mt-8 w-full md:w-[80%] lg:w-[60%] 2xl:w-[40%] text-center Inter">
          {t("tender_description")}
        </p>

        <div className="flex items-center gap-5 mt-5">
          <button className="bg-(--prim) px-4 py-2 rounded-lg text-base sm:text-lg font-medium hover:shadow-[0_0_15px_#b6ff3b] transition-all duration-300 cursor-pointer Inter btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] z-0 relative">
            {t("try_for_free")}
          </button>

          <button className="btn overflow-hidden ease-[cubic-bezier(0.02,0.01,0.47,1)] z-0 bg-black border border-gray-600 hover:border-lime-400 text-white px-4 py-2 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 Inter relative">
            <Play className="sm:w-5 sm:h-5 w-4 h-4" />
            {t("how_it_works")}
          </button>
        </div>

        <div className="flex items-center gap-2 mt-8 sm:flex-row flex-col">
          <div className="flex items-center -space-x-3">
            <Image
              src={heroClient1}
              alt=""
              width={30}
              height={30}
              className="rounded-full object-cover blur-[0.5px]"
            />
            <Image
              src={heroClient2}
              alt=""
              width={30}
              height={30}
              className="rounded-full object-cover blur-[0.5px]"
            />
            <Image
              src={heroClient3}
              alt=""
              width={30}
              height={30}
              className="rounded-full object-cover blur-[0.5px]"
            />
            <Image
              src={heroClient4}
              alt=""
              width={30}
              height={30}
              className="rounded-full object-cover blur-[0.5px]"
            />
          </div>

          <h1 className="text-base text-gray-300 text-center">
            <span className="text-(--prim) font-medium">1,200+</span>
            {t("users_trust")}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
