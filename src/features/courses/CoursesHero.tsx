"use client";

import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import CourseCard from "./CourseCard";
import { Slider } from "@/components";

import { useTheme } from "@/hooks";
import { coursesContent } from "@/data/courses";

import { CoursesHeroImage, CoursesHeroImageDark } from "@/assets";

function CoursesHero() {
  const { theme } = useTheme();

  return (
    <section className="py-6 flex flex-col-reverse lg:flex-row gap-y-5">
      <div className="flex items-center justify-center w-full lg:w-[50%]">
        <Slider loop className="w-full" modules={[Pagination]}>
          {coursesContent.slice(6, 9).map((course) => (
            <SwiperSlide key={course.id}>
              <div className="mb-[3rem]">
                <CourseCard {...course} />
              </div>
            </SwiperSlide>
          ))}
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
