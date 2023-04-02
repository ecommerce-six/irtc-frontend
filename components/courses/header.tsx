import React from "react";
import Image from "next/image";

import Slide from "./slide";
import Slider from "./slider";

import { CoursesHeaderImage } from "../../public";
import { SwiperSlide } from "swiper/react";

function CoursesHeader() {
  return (
    <section className="py-6 flex flex-col lg:flex-row gap-y-5">
      <div className="flex items-center justify-center w-full lg:w-[50%]">
        <Slider className="w-full">
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Slider>
      </div>

      <Image src={CoursesHeaderImage} alt="courses hero image" className="mx-auto w-full md:w-[85%] md:h-[85%] lg:w-[45%] lg:h-[45%]" />
    </section>
  );
}

export default CoursesHeader;
