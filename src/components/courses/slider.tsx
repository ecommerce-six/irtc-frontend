import React, { ReactNode } from "react";

import "@/styles/swiper.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Slider({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Swiper
      loop
      pagination
      speed={750}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      modules={[Autoplay, Pagination]}
      className={className}
    >
      {children}
    </Swiper>
  );
}

export default Slider;
