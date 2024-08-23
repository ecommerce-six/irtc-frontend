"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useUser } from "@/hooks";
import { checkConnectivity } from "@/utils/checkConnection";

import { FilledStarIcon, StarOutlineIcon } from "@/assets/icons";

function ArticleRating() {
  const { user } = useUser();

  const [rate, setRate] = useState<number>(0);

  const rateHandler = (rate: number) => {
    setRate(rate);
  };

  const submitHandler = async () => {
    const isConnected = await checkConnectivity();
  };

  useEffect(() => {
    const timeoutTimer = setTimeout(() => {
      submitHandler();
    }, 2000);

    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [rate]);

  return (
    <div className="mt-4 p-4 flex items-center justify-between flex-col md:flex-row gap-4 bg-dim-secondary rounded-xl">
      <p className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
        چه امتیازی به این مقاله میدهید؟
      </p>

      <div className="flex items-center flex-row-reverse gap-x-1">
        {[...new Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (user?.role) {
                rateHandler(index + 1);
                return;
              }
              redirect("/login");
            }}
          >
            {index < rate ? <FilledStarIcon /> : <StarOutlineIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ArticleRating;
