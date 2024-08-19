"use client";

import { Swiper } from "swiper/react";
import React, { ReactNode } from "react";
import { SwiperModule } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "@/styles/swiper.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type props = {
  loop?: boolean;
  speed?: number;
  className?: string;
  children: ReactNode;
  AutoplayDelay?: number;
  modules: SwiperModule[];
  disableOnInteraction?: boolean | undefined;
};

function Slider({
  loop,
  speed,
  modules,
  children,
  className,
  AutoplayDelay,
  disableOnInteraction,
}: props) {
  return (
    <Swiper
      speed={speed || 750}
      loop={loop}
      modules={[...modules, Autoplay]}
      className={className}
      navigation={modules?.includes(Navigation) ? true : false}
      pagination={modules?.includes(Pagination) ? true : false}
      autoplay={{
        delay: AutoplayDelay || 4000,
        disableOnInteraction,
      }}
    >
      {children}
    </Swiper>
  );
}

export default Slider;
