"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

import blog1 from "@/public/blog1.png";
import blog2 from "@/public/blog2.png";
import blog3 from "@/public/blog3.png";
import blog4 from "@/public/blog4.png";

import heroClient1 from "@/public/hero-client-1.jpg";
import heroClient2 from "@/public/hero-client-2.jpg";
import heroClient3 from "@/public/hero-client-3.jpg";
import heroClient4 from "@/public/hero-client-4.jpg";

const blogData = [
  {
    id: 1,
    category: "ai_strategy1",
    date: "date_1",
    readTime: "read_time_1",
    title: "blog_post_1",
    description: "ai_analysis_text",
    comments: 0,
    image: blog1,
  },
  {
    id: 2,
    category: "ai",
    date: "date_2",
    readTime: "read_time_2",
    title: "blog_post_2",
    comments: 3,
    image: blog2,
  },
  {
    id: 3,
    category: "business",
    date: "date_3",
    readTime: "read_time_3",
    title: "blog_post_3",
    comments: 7,
    image: blog3,
  },
  {
    id: 4,
    category: "law",
    date: "date_4",
    readTime: "read_time_4",
    title: "blog_post_4",
    comments: 2,
    image: blog4,
  },
  {
    id: 5,
    category: "strategy",
    date: "date_5",
    readTime: "read_time_5",
    title: "blog_post_5",
    comments: 4,
    image: blog4,
  },
  {
    id: 6,
    category: "ai_tools",
    date: "date_6",
    readTime: "read_time_6",
    title: "blog_post_6",
    comments: 7,
    image: blog4,
  },
];

function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="faqs relative px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] xl:py-[10%] flex flex-col items-center"
        id="blog"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-300 text-sm font-medium shadow-[0_0_20px_rgba(182,255,59,0.20)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          {t("blog_title")}
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold text-white my-4 flex items-center gap-2 text-center">
          {t("latest_articles")} <br />
          <span className="text-(--prim)">{t("latest_articles1")}</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-lg   Inter w-full text-center">
          {t("blog_description")}
        </p>

        <div className="mt-20 flex flex-col lg:flex-row items-start gap-6 w-full">
          <div className="w-full lg:w-[65%]">
            {blogData.slice(0, 1).map((blog) => (
              <div
                key={blog.id}
                className="border border-[#2A3555] bg-[#0B1020] rounded-xl p-2 relative group hover:border-(--prim) transition-all duration-600 cursor-pointer"
              >
                <div className="relative h-80 lg:h-112">
                  <Image
                    src={blog.image}
                    alt="image"
                    fill
                    className="rounded-xl object-cover group-hover:scale-101"
                  />

                  <div className="absolute bottom-4 left-6 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {t(`${blog.date}`)}
                    </div>

                    <div className="flex items-center gap-1 text-gray-400">
                      <MessageCircle className="w-4 h-4" />
                      {t(`${blog.readTime}`)}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4">
                  <h1 className="text-xl sm:text-3xl text-white font-semibold whitespace-pre-line">
                    {t(`${blog.title}`)}
                  </h1>

                  <p className="text-gray-400 text-sm Inter pt-4 w-full">
                    {t(`${blog.description}`)}
                  </p>

                  <div className="flex justify-between items-center gap-4 pt-10 sm:pt-15 pb-2">
                    <div className="flex items-center -space-x-3">
                      <Image
                        src={heroClient1}
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-full object-cover blur-[0.5px] border-2 border-(--prim)"
                      />
                      <Image
                        src={heroClient2}
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-full object-cover blur-[0.5px] border-2 border-(--prim)"
                      />
                      <Image
                        src={heroClient3}
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-full object-cover blur-[0.5px] border-2 border-(--prim)"
                      />
                      <Image
                        src={heroClient4}
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-full object-cover blur-[0.5px] border-2 border-(--prim)"
                      />
                    </div>

                    <h2 className="text-base text-(--prim) font-medium flex items-center gap-2">
                      {t("read_more")}
                      <ArrowRight className="text-(--prim) w-5 h-5" />
                    </h2>
                  </div>

                  <div className="rounded-full border border-lime-400/60 bg-lime-400/40 text-black text-sm font-semibold px-4 py-1.5 absolute top-4 left-6">
                    {t(`${blog.category}`)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {blogData.slice(1, 3).map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col border border-[#2A3555] bg-[#0B1020] rounded-xl p-1 relative group hover:border-(--prim) transition-all duration-600 cursor-pointer"
              >
                <div className="relative h-80 lg:h-50">
                  <Image
                    src={blog.image}
                    alt="image"
                    fill
                    className="rounded-xl object-cover group-hover:scale-101"
                  />

                  <div className="absolute bottom-1 left-4 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {t(`${blog.date}`)}
                    </div>

                    <div className="flex items-center gap-1 text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      {t(`${blog.readTime}`)}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4">
                  <h1 className="text-xl text-white font-semibold w-full xl:w-[90%] 2xl:w-[70%]">
                    {t(`${blog.title}`)}
                  </h1>

                  <div className="flex justify-between items-center pt-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <MessageCircle className="w-4 h-4 " />
                      {blog.comments} {t("idea")}
                    </div>
                    <h2 className="text-base text-(--prim) font-medium flex items-center gap-2">
                      {t("read")}
                      <ArrowRight className="text-(--prim) w-5 h-5" />
                    </h2>
                  </div>

                  <div className="rounded-full border border-lime-400/60 bg-lime-400/40 text-black text-sm font-semibold px-4 py-1.5 absolute top-4 left-6">
                    {t(`${blog.category}`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:mt-8 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogData.slice(3, 6).map((blog) => (
            <div
              key={blog.id}
              className="border border-[#2A3555] bg-[#0B1020] rounded-xl p-1 relative group hover:border-(--prim) transition-all duration-600 cursor-pointer"
            >
              <div className="relative h-50">
                <Image
                  src={blog.image}
                  alt="image"
                  fill
                  className="rounded-xl object-cover group-hover:scale-101"
                />

                <div className="absolute bottom-1 left-4 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {t(`${blog.date}`)}
                  </div>

                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    {t(`${blog.readTime}`)}
                  </div>
                </div>
              </div>

              <div className="px-4 py-4 pb-20">
                <h1 className="text-xl text-white font-semibold w-full">
                  {t(`${blog.title}`)}
                </h1>

                <div className="absolute bottom-5 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="w-4 h-4 " />
                    {blog.comments} {t("idea")}
                  </div>

                  <h2 className="text-base text-(--prim) font-medium flex items-center gap-2">
                    {t("read")}
                    <ArrowRight className="text-(--prim) w-5 h-5" />
                  </h2>
                </div>

                <div className="rounded-full border border-lime-400/60 bg-lime-400/40 text-black text-sm font-semibold px-4 py-1.5 absolute top-4 left-6">
                  {t(`${blog.category}`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
