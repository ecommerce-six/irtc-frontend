import React from "react";
import Link from "next/link";
import Image from "next/image";

import { formatPrice } from "@/utils/priceFormat";
import { coursePreviewType } from "@/types/course";

import {
  CostIcon,
  TomanIcon,
  AvatarIcon,
  SmallRateIcon,
  SmallRecordIcon,
} from "@/assets/icons/svgs";

function CourseCard(props: coursePreviewType) {
  const {
    rate,
    slug,
    title,
    cover,
    price,
    duration,
    membersCount,
    shortDescription,
    recordingFinished,
    isInstallmentAvailable,
  } = props;

  return (
    <div className="mx-auto p-[.75rem] w-full sm:w-[23.5rem] shadow-dark dark:shadow-darker rounded-xl">
      <div className="relative">
        <Image
          src={cover}
          alt={title}
          width={1000}
          height={600}
          className="w-full object-cover rounded-xl"
        />

        <div className="absolute left-3 bottom-3 py-1 px-2 flex items-center gap-x-2 bg-background dark:bg-background-dark rounded-lg">
          <AvatarIcon />

          <span className="text-xs h-3 text-primary dark:text-primary-dark">
            {membersCount}
          </span>
        </div>
      </div>

      <div className="px-2">
        <h1 className="mt-2 text-md text-primary dark:text-primary-dark font-semibold">
          {title}
        </h1>
        <p className="mt-2 text-[.75rem] h-[2.75rem] text-secondary dark:text-secondary-dark leading-6 overflow-hidden line-clamp-2">
          {shortDescription}
        </p>
        <div className="mt-3 flex items-center gap-x-4">
          {recordingFinished && (
            <div className="flex items-center gap-x-2">
              <div className="p-1 bg-[#0075FF10] rounded-md">
                <SmallRecordIcon />
              </div>

              <h3 className="text-secondary dark:text-secondary-dark text-xs">
                تکمیل
              </h3>
            </div>
          )}
          {isInstallmentAvailable && (
            <div className="flex items-center gap-x-2">
              <div className="p-1 bg-[#8000FF10] rounded-md">
                <CostIcon />
              </div>

              <h3 className="text-secondary dark:text-secondary-dark text-xs">
                {isInstallmentAvailable ? "نقدی - قصدی" : "نقدی"}
              </h3>
            </div>
          )}

          <div className="flex items-center gap-x-2">
            <div className="p-1 bg-[#F920C310] rounded-md">
              <SmallRateIcon />
            </div>

            <h3 className="text-secondary dark:text-secondary-dark text-xs">
              {rate}
            </h3>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-xs">
            <span className="text-secondary dark:text-secondary-dark">
              در مجموع
            </span>
            <br />
            <span className="mt-1 text-primary dark:text-primary-dark font-medium">
              {duration}
            </span>
          </h3>
          <h4 className="flex items-center gap-x-1  text-2xl font-medium text-primary dark:text-primary-dark">
            {formatPrice(price)}

            <TomanIcon />
          </h4>
        </div>

        <span className="block mt-3 w-full h-[1px] bg-secondary dark:bg-secondary-dark opacity-25 dark:opacity-60" />

        <Link
          href={`/courses/${slug}`}
          className="pt-3 pb-2 w-full flex justify-center text-brand"
        >
          <span>مشاهده و خرید دوره</span>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
