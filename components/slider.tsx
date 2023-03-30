import React, { ReactNode } from "react";

import { Navigation } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

function Slider({ children, className }: { children: any; className?: string }) {
  return (
    <Swiper
      loop
      navigation
      speed={750}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      modules={[Navigation]}
      className={`${className} swiper-comments`}
    >
      {children}
    </Swiper>
  );
}

export default Slider;
