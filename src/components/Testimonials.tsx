"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Heading from "./Heading";

import { Avatar, TestimonialsImage } from "@/assets";
import { RedirectArrowIcon } from "@/assets/icons/svgs";
import Slider from "./Slider";

function Testimonials() {
  return (
    <section className="mt-24">
      <Heading
        title="نظرات دانشجویان"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div>
          <Slider
            loop
            disableOnInteraction
            modules={[Navigation]}
            className="w-[95vw] lg:w-[32.5rem] max-w-screen-sm lg:max-w-[32.5rem] swiper-comments"
          >
            <SwiperSlide>
              <div className="px-10 md:px-14 py-6 w-[95vw] max-w-screen-sm lg:max-w-[32.5rem]">
                <div className="flex items-center">
                  <Image src={Avatar} alt="avatar" className="w-14 md:w-fit" />
                  <div className="space-y-2">
                    <h1 className="max-w-[10rem] md:max-w-[15rem] text-sm md:text-base font-semibold text-primary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      محمد محققیان
                    </h1>
                    <h2 className="max-w-[10rem] md:max-w-[15rem] text-xs md:text-sm text-secondary dark:text-secondary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      دانشجو دوره جاوااسکریپت
                    </h2>
                  </div>
                </div>

                <p className="text-xs md:text-base leading-6 md:leading-7 text-secondary dark:text-secondary-dark">
                  در ای بخش مطالب بسیار باارزشی در حوضه برنامه نویسی و پایتون
                  برای شما دوستان قرار گرفته است که تمامی آن ها از منابع معتبر
                  دنیا جمع آوری و به بهترین شکل ترجمه شده است و در کنار آن ها
                  تجربیات ما نیز قرار گرفته است تا به شما کمک کنیم تا مطالب را
                  هر چه کامل تر و بهتر درک کنید.
                </p>

                <span className="block mt-3 w-full h-[1px] bg-secondary dark:bg-secondary-dark opacity-25 dark:opacity-75" />

                <div className="mt-2 flex items-center justify-between">
                  <div className="space-y-2">
                    <h4 className="max-w-[10rem] md:max-w-[15rem] text-xs md:text-sm font-semibold text-primary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      دوره ی پروژه محور جنگو{" "}
                    </h4>
                    <p className="max-w-[10rem] md:max-w-[15rem] text-xs text-secondary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      132 دانشجو
                    </p>
                  </div>

                  <Link
                    href="/"
                    className="w-10 md:w-20 dark:invert opacity-60"
                  >
                    <RedirectArrowIcon />
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-10 md:px-14 py-6 w-[95vw] max-w-screen-sm lg:max-w-[32.5rem]">
                <div className="flex items-center">
                  <Image src={Avatar} alt="avatar" className="w-14 md:w-fit" />
                  <div className="space-y-2">
                    <h1 className="max-w-[10rem] md:max-w-[15rem] text-sm md:text-base font-semibold text-primary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      سجاد نصاری
                    </h1>
                    <h2 className="max-w-[10rem] md:max-w-[15rem] text-xs md:text-sm text-secondary dark:text-secondary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      دانشجو دوره جاوااسکریپت
                    </h2>
                  </div>
                </div>

                <p className="text-xs md:text-base leading-6 md:leading-7 text-secondary dark:text-secondary-dark">
                  در ای بخش مطالب بسیار باارزشی در حوضه برنامه نویسی و پایتون
                  برای شما دوستان قرار گرفته است که تمامی آن ها از منابع معتبر
                  دنیا جمع آوری و به بهترین شکل ترجمه شده است و در کنار آن ها
                  تجربیات ما نیز قرار گرفته است تا به شما کمک کنیم تا مطالب را
                  هر چه کامل تر و بهتر درک کنید.
                </p>

                <span className="block mt-3 w-full h-[1px] bg-secondary dark:bg-secondary-dark opacity-25 dark:opacity-75" />

                <div className="mt-2 flex items-center justify-between">
                  <div className="space-y-2">
                    <h4 className="max-w-[10rem] md:max-w-[15rem] text-xs md:text-sm font-semibold text-primary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      دوره ی پروژه محور جنگو{" "}
                    </h4>
                    <p className="max-w-[10rem] md:max-w-[15rem] text-xs text-secondary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
                      132 دانشجو
                    </p>
                  </div>

                  <Link
                    href="/"
                    className="w-10 md:w-20 dark:invert opacity-60"
                  >
                    <RedirectArrowIcon />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Slider>
        </div>

        <Image
          src={TestimonialsImage}
          alt="testmonials image"
          className="w-full lg:w-[55%]"
        />
      </div>
    </section>
  );
}

export default Testimonials;
