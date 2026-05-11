"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import user1 from "@/public/hero-client-4.jpg";
import user2 from "@/public/hero-client-1.jpg";
import icon from "@/public/testimonials_icon.png";

const testimonialsData = [
  {
    id: 1,
    title:
      "TenderMind bizning ish jarayonimizni to‘liq o‘zgartirdi. Hujjatlar tahlili va AI yordamida tenderlarda g‘alaba foizimiz 3 baravarga oshdi.",
    name: "Abdulla Emazarov",
    role: "Direktor, Elite Construction",
    img: user1,
  },
  {
    id: 2,
    title:
      "Cheksiz qidiruv va AI hujjat tayyorlash funksiyalari juda qulay. Vaqtimizni 70% ga tejashga yordam berdi.",
    name: "Dildora Karimova",
    role: "Buxgalter, Mega Trade",
    img: user2,
  },
  {
    id: 3,
    title:
      "Platforma juda intuitiv va ishlatish oson. Har bir biznes egasiga tavsiya qilaman.",
    name: "Jahongir Usmonov",
    role: "CEO, Smart IT Solutions",
    img: user1,
  },
  {
    id: 4,
    title:
      "Ajoyib servis va tezkor qo‘llab-quvvatlash. TenderMind bilan ishlashdan juda mamnunmiz.",
    name: "Malika Saidova",
    role: "Marketing, Green Energy",
    img: user2,
  },
  {
    id: 5,
    title:
      "TenderMind bizning ish jarayonimizni to‘liq o‘zgartirdi. Hujjatlar tahlili va AI yordamida tenderlarda g‘alaba foizimiz 3 baravarga oshdi.",
    name: "Abdulla Emazarov",
    role: "Direktor, Elite Construction",
    img: user1,
  },
];

function Testimonials() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] xl:py-[10%]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-2">
          <div className="w-full lg:w-[55%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              {t("reviews_title")}
            </div>

            <h1 className="text-2xl md:text-4xl font-semibold text-gray-200 mt-6 whitespace-pre-line">
              {t("reviews_subtitle")} <br />
              <span className="text-lime-400">{t("reviews_subtitle1")}</span>
            </h1>

            <p className="text-gray-300 text-sm lg:text-base xl:text-lg Inter w-full 2xl:w-[65%] mt-2">
              {t("reviews_description")}
            </p>
          </div>

          <div className="flex">
            <div className="flex flex-col border-r border-gray-500 pe-5">
              <h1 className="text-white text-4xl font-bold">4.9</h1>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-(--prim) fill-(--prim)" />
                <Star className="w-4 h-4 text-(--prim) fill-(--prim)" />
                <Star className="w-4 h-4 text-(--prim) fill-(--prim)" />
                <Star className="w-4 h-4 text-(--prim) fill-(--prim)" />
                <Star className="w-4 h-4 text-(--prim) fill-(--prim)" />
              </div>
            </div>

            <div className="flex flex-col ps-5">
              <h1 className="text-white text-4xl font-bold">500+</h1>
              <p className="text-gray-300 text-[14px]">{t("user_review")}</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4500 }}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              1600: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {testimonialsData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="bg-[#0B0F1A] rounded-xl p-6  h-full flex flex-col w-full min-h-65 relative"
              >
                <Image src={icon} alt="icon" width={30} height={30} />

                <p className="pt-4 text-sm text-gray-400">{item.title}</p>

                <div className="flex items-center gap-2 absolute bottom-6 left-6 right-6">
                  <Image
                    src={item.img}
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />

                  <div>
                    <h1 className="text-lg text-white font-medium">
                      {item.name}
                    </h1>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
