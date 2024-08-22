"use client";

import React from "react";

import { styles } from "@/styles";
import { formatPrice } from "@/utils/priceFormat";

import { TomanIcon } from "@/assets/icons";

type props = {
  slug: string;
  price: number;
};

const CourseAddToCart = ({ slug, price }: props) => {
  const addToCartHandler = () => {
    // if (!loggedIn) {
    //   router.push("/login");
    // }
  };

  return (
    <div className="flex flex-col sm:flex-row-reverse items-center justify-between gap-4">
      <div className="flex items-center gap-x-2 justify-self-end">
        <p className="font-semibold text-xl sm:text-2xl lg:text-3xl">
          <span className="text-primary dark:text-primary-dark">
            {formatPrice(price)}
          </span>

          <span className="ml-2 line-through sm:text-xl text-brand">
            {formatPrice(2000000)}
          </span>
        </p>

        <TomanIcon />
      </div>

      <button
        className={`${styles.primaryButton} py-3 px-14 sm:px-10 hover:scale-[1.05]`}
        onClick={addToCartHandler}
      >
        {true ? "اضافه کردن به سبد خرید" : "ورود و خرید دوره"}
      </button>
    </div>
  );
};

export default CourseAddToCart;
