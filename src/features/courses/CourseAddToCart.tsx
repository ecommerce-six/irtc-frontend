"use client";

import React from "react";

import { styles } from "@/styles";
import { formatPrice } from "@/utils/priceFormat";

import { TomanIcon } from "@/assets/icons/svgs";

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
    <div className="flex items-center justify-between flex-wrap gap-4">
      <button
        className={`${styles.primaryButton} py-3 px-8 md:px-10 hover:scale-[1.05]`}
        onClick={addToCartHandler}
      >
        {true ? "اضافه کردن به سبد خرید" : "ورود و خرید دوره"}
      </button>
      <div className="flex items-center gap-x-2 justify-self-end">
        <p className="font-semibold text-2xl md:text-3xl">
          <span className="text-primary dark:text-primary-dark">
            {formatPrice(price)}
          </span>

          <span className="ml-2 line-through text-xl text-brand">
            {formatPrice(2000000)}
          </span>
        </p>

        <TomanIcon />
      </div>
    </div>
  );
};

export default CourseAddToCart;
