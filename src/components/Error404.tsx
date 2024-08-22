import React from "react";
import Link from "next/link";

import { styles } from "@/styles";

import { NotFoundImage } from "@/assets";

function Error404() {
  return (
    <>
      <div
        className={`${styles.layout} py-10 lg:py-4 flex items-center flex-col lg:flex-row justify-between gap-x-4 gap-y-10`}
      >
        <title>IRTC • این صفحه وجود ندارد</title>
        <div className="md:mt-20 flex md:block flex-col items-center space-y-4">
          <h1 className="text-primary dark:text-primary-dark text-5xl lg:text-7xl xl:text-8xl font-semibold">
            ارور 404
          </h1>
          <p className="max-w-[95%] md:max-w-[22rem] text-secondary dark:text-secondary-dark text-sm md:text-base xl:text-lg text-center md:text-start !leading-loose">
            با عرض پوزش از شما، چنین صفحه‌ای در سایت وجود ندارد یا این صفحه از
            سایت پاک شده است.
          </p>
          <Link
            href="/"
            className={`${styles.primaryButton} inline-block py-4 px-10 hover:scale-[1.05]`}
          >
            بازگشت به خانه
          </Link>
        </div>

        <div className="w-full lg:w-[45%]">
          <NotFoundImage />
        </div>
      </div>
    </>
  );
}

export default Error404;
