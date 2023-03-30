/* eslint-disable @next/next/no-img-element */
import React from "react";
import { usePathname } from "next/navigation";

import { coursePreview } from "../../types/course";

import { styles } from "../../styles";

import {
  AvatarRedIcon,
  CostPurpleIcon,
  RateIcon,
  RecordIcon,
  TimeIcon,
  TimePurpleIcon,
  TomanIcon,
} from "../../public/icons/svgs";

function SingleCourseHeader({
  slug,
  rate,
  cover,
  title,
  price,
  credit,
  duration,
  membersCount,
  shortDescription,
  recordingFinished,
}: coursePreview) {
  const pathname = usePathname();

  const addToCartHandler = () => {
    // if (!loggedIn) {
    //   router.push("/login");
    // }
  };

  return (
    <section className="p-5 flex flex-col lg:flex-row items-start gap-8 rounded-xl box-shadow">
      <img src={cover} alt={title} className="w-full lg:w-[50%] rounded-xl" />

      <div className="space-y-5 md:space-y-3 lg:w-[50%]">
        <h1 className="text-primary text-lg md:text-2xl font-bold w-full">{title}</h1>

        <div className="pt-2 flex justify-between flex-wrap gap-5 w-full">
          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <TimeIcon />

            <h2 className="text-primary font-semibold text-sm md:text-base">
              <span className="text-secondary font-normal">در مجموع </span> {duration}
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <RecordIcon />

            <h2 className="text-secondary text-sm md:text-base">{recordingFinished ? "تکمیل" : "در حال ضبط"}</h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <TimePurpleIcon />

            <h2 className="text-primary font-semibold text-sm md:text-base">
              <span className="text-secondary font-normal"> اخرین اپدیت </span> 1401/4/5
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <CostPurpleIcon />

            <h2 className="text-secondary text-sm md:text-base">{credit ? "نقدی - قصدی" : "نقدی"}</h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <AvatarRedIcon />

            <h2 className="text-secondary text-sm md:text-base">{membersCount}</h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <AvatarRedIcon />

            <h2 className="text-primary font-semibold text-sm md:text-base">
              <span className="text-secondary font-normal"> تعداد جلسات </span> 43
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <RateIcon />

            <h2 className="text-secondary text-sm md:text-base">{rate}/5</h2>
          </div>
        </div>

        <p className="text-secondary text-xs md:text-sm md:pl-20 line-clamp-3 leading-6 md:leading-7">
          {shortDescription}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <button className={`${styles.primaryButton} py-3 px-8 md:px-10`} onClick={addToCartHandler}>
            {true ? "اضافه کردن به سبد خرید" : "ورود و خرید دوره"}
          </button>
          <div className="flex items-center gap-x-2 justify-self-end">
            <p className="font-semibold text-2xl md:text-3xl">
              <span>100,000</span>

              <span className="ml-2 line-through text-xl text-brand">{price}</span>
            </p>

            <TomanIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCourseHeader;
