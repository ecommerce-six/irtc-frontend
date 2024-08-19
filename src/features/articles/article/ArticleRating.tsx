"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useUser } from "@/hooks";
import { checkConnectivity } from "@/utils/checkConnection";

import { FilledStarIcon, StarOutlineIcon } from "@/assets/icons";

function ArticleRating() {
  const { user } = useUser();

  const [rate, setRate] = useState(3);

  const rateHandler = (rate: number) => {
    setRate(rate);
  };

  const submitHandler = async () => {
    const isConnected = await checkConnectivity();

    if (isConnected) {
      console.log("adsf");
    }
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
      <p className="text-secondary text-xs md:text-sm">
        چه امتیازی به این مقاله میدهید؟
      </p>

      <div className="flex items-center flex-row-reverse">
        {[...new Array(5)].map((item, index) => (
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
            <Image
              src={index < rate ? FilledStarIcon : StarOutlineIcon}
              alt="star"
              className="w-5 h-5"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ArticleRating;
