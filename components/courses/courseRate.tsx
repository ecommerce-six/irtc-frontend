"use client ";

import React from "react";
import Image from "next/image";

import { FilledStarIcon, StarOutlineIcon } from "../../public/icons";

type props = {
  rate: number;
  setRate: (rate: number) => void;
};

function CourseRate({ rate, setRate }: props) {
  const rateHandler = (rate: number) => {
    setRate(rate);
  };
  return (
    <div className="mt-2 p-4 flex items-center justify-between flex-col md:flex-row gap-4 bg-dim-secondary rounded-xl">
      <p className="text-secondary text-xs md:text-sm">چه امتیازی به این دوره میدهید؟</p>

      <div className="flex items-center flex-row-reverse">
        {[...new Array(5)].map((item, index) => (
          <button
            key={index}
            onClick={() => {
              rateHandler(index + 1);
            }}
          >
            <Image src={index < rate ? FilledStarIcon : StarOutlineIcon} alt="star" className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CourseRate;
