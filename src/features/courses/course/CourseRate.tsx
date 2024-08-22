"use client";

import React, { useState } from "react";

import { FilledStarIcon, StarOutlineIcon } from "@/assets/icons";

function CourseRate({ slug }: { slug: string }) {
  const [rate, setRate] = useState(0);

  const rateHandler = (rate: number) => {
    setRate(rate);
  };

  return (
    <div className="mt-2 p-4 flex items-center justify-between flex-col md:flex-row gap-4 bg-dim-secondary rounded-xl">
      <p className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
        چه امتیازی به این دوره میدهید؟
      </p>

      <div className="flex items-center flex-row-reverse ga-x-1">
        {[...new Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              rateHandler(index + 1);
            }}
          >
            {index < rate ? <FilledStarIcon /> : <StarOutlineIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CourseRate;
