"use client";

import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import CourseCard from "./CourseCard";
import { Slider } from "@/components";

import { useTheme } from "@/hooks";

import { CoursesHeroImage, CoursesHeroImageDark } from "@/assets";

function CoursesHero() {
  const { theme } = useTheme();

  return (
    <section className="py-6 flex flex-col lg:flex-row gap-y-5">
      <div className="flex items-center justify-center w-full lg:w-[50%]">
        <Slider loop className="w-full" modules={[Pagination]}>
          <SwiperSlide>
            <div className="mb-[3rem]">
              <CourseCard
                slug={"react"}
                cover={
                  "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-18-1.webp"
                }
                title={"اموزش راه اندازی کیف پول"}
                rate={4.5}
                price={100000}
                credit={true}
                duration={"100 ساعت و 67 دقیقه"}
                membersCount={1269}
                shortDescription={
                  "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
                }
                recordingFinished={true}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-[3rem]">
              <CourseCard
                slug={"react"}
                cover={
                  "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-18-1.webp"
                }
                title={"اموزش راه اندازی کیف پول"}
                rate={4.5}
                price={100000}
                credit={true}
                duration={"100 ساعت و 67 دقیقه"}
                membersCount={1269}
                shortDescription={
                  "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
                }
                recordingFinished={true}
              />
            </div>
          </SwiperSlide>
        </Slider>
      </div>

      <Image
        src={theme === "light" ? CoursesHeroImage : CoursesHeroImageDark}
        alt="courses hero image"
        className="mx-auto w-full md:w-[85%] md:h-[85%] lg:w-[45%] lg:h-[45%]"
      />
    </section>
  );
}

export default CoursesHero;
