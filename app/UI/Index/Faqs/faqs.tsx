"use client";

import { useTranslation } from "react-i18next";
import { FileText, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqsData = [
  {
    id: 1,
    question: "faq_q1",
    answer: "faq_a1",
    icon: FileText,
  },
  {
    id: 2,
    question: "faq_q2",
    answer: "faq_a2",
    icon: FileText,
  },
  {
    id: 3,
    question: "faq_q3",
    answer: "faq_a3",
    icon: FileText,
  },
  {
    id: 4,
    question: "faq_q4",
    answer: "faq_a4",
    icon: FileText,
  },
  {
    id: 5,
    question: "faq_q5",
    answer: "faq_a5",
    icon: FileText,
  },
  {
    id: 6,
    question: "faq_q6",
    answer: "faq_a6",
    icon: FileText,
  },
];

function Faqs() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faqs relative px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] xl:py-[10%]">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="w-full lg:w-[70%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              {t("faqs")}
            </div>

            <h1 className="text-2xl md:text-4xl font-semibold text-white my-4 flex items-center gap-2">
              {t("faq_title")}
              <span className="text-(--prim)">{t("title")}</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-lg mt-3 Inter w-full xl:w-[55%]">
              {t("faq_description")}
            </p>

            <ul className="mt-6 space-y-3">
              {faqsData.map((item) => (
                <li
                  key={item.id}
                  className={`border bg-[#0B1020] rounded-lg py-5 px-4 sm:px-6 ${openIndex === item.id ? "border-(--prim)" : "border-[#2A3555]"}`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center sm:gap-4 gap-2">
                      <div className="flex items-center justify-center border border-lime-500 rounded-full p-2">
                        <FileText className="text-lime-300 w-5 h-5" />
                      </div>

                      <h1
                        className={`text-lg text-left md:text-xl font-semibold ${openIndex === item.id ? "text-(--prim)" : "text-white"} `}
                      >
                        {t(`${item.question}`)}
                      </h1>
                    </div>

                    <div className="rounded border border-(--prim) flex items-center justify-center text-xl">
                      {openIndex === item.id ? (
                        <Minus className="text-black bg-(--prim) w-5 h-5" />
                      ) : (
                        <Plus className="text-(--prim) w-5 h-5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out text-white px-0 md:px-14 ${openIndex === item.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                  >
                    {t(`${item.answer}`)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
