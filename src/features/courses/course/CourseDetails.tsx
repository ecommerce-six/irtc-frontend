import React from "react";
import Image from "next/image";

import CourseAddToCart from "../CourseAddToCart";

import { courseType } from "@/types/course";

import {
  RateIcon,
  TimeIcon,
  RecordIcon,
  AvatarRedIcon,
  TimePurpleIcon,
  CostPurpleIcon,
} from "@/assets/icons";

function CourseDetails(props: courseType) {
  const {
    id,
    slug,
    rate,
    cover,
    title,
    price,
    duration,
    membersCount,
    shortDescription,
    recordingFinished,
    isInstallmentAvailable,
  } = props;

  return (
    <section className="p-5 flex flex-col lg:flex-row items-start gap-8 rounded-xl bg-background dark:bg-background-dark shadow-dark dark:shadow-darker">
      <Image
        src={cover}
        alt={title}
        width={1000}
        height={600}
        className="w-full lg:w-[50%] rounded-xl"
      />

      <div className="space-y-5 md:space-y-3 lg:w-[50%]">
        <h1 className="text-primary dark:text-primary-dark text-lg md:text-2xl font-bold w-full">
          {title}
        </h1>

        <div className="pt-2 flex justify-between flex-wrap gap-5 w-full">
          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <TimeIcon />

            <h2 className="text-primary dark:text-primary-dark font-semibold text-sm md:text-base">
              <span className="text-secondary dark:text-secondary-dark font-normal">
                در مجموع{" "}
              </span>{" "}
              {duration}
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <RecordIcon />

            <h2 className="text-secondary dark:text-secondary-dark text-sm md:text-base">
              {recordingFinished ? "تکمیل" : "در حال ضبط"}
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <TimePurpleIcon />

            <h2 className="text-primary dark:text-primary-dark font-semibold text-sm md:text-base">
              <span className="text-secondary dark:text-secondary-dark font-normal">
                {" "}
                اخرین اپدیت{" "}
              </span>{" "}
              1403/4/5
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <CostPurpleIcon />

            <h2 className="text-secondary dark:text-secondary-dark text-sm md:text-base">
              {isInstallmentAvailable ? "نقدی - قصدی" : "نقدی"}
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <AvatarRedIcon />

            <h2 className="text-secondary dark:text-secondary-dark text-sm md:text-base">
              {membersCount}
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <AvatarRedIcon />

            <h2 className="text-primary dark:text-primary-dark font-semibold text-sm md:text-base">
              <span className="text-secondary dark:text-secondary-dark font-normal">
                {" "}
                تعداد جلسات{" "}
              </span>{" "}
              43
            </h2>
          </div>

          <div className="pl-2 flex items-center gap-x-2 md:w-[47.5%]">
            <RateIcon />

            <h2 className="text-secondary dark:text-secondary-dark text-sm md:text-base">
              {rate}/5
            </h2>
          </div>
        </div>

        <p className="text-secondary dark:text-secondary-dark text-xs md:text-sm md:pl-20 line-clamp-3 leading-6 md:leading-7">
          {shortDescription}
        </p>

        <CourseAddToCart price={price} slug={slug} />
      </div>
    </section>
  );
}

export default CourseDetails;
