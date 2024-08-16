/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { coursePreviewType } from "@/types/course";
import {
  AvatarIcon,
  CostIcon,
  SmallRateIcon,
  SmallRecordIcon,
  TomanIcon,
} from "@/assets/icons/svgs";

function CoursePreview(props: coursePreviewType) {
  const {
    slug,
    cover,
    title,
    rate,
    price,
    credit,
    duration,
    membersCount,
    shortDescription,
    recordingFinished,
  } = props;

  return (
    <div className="mx-auto p-[.75rem] w-full sm:w-[23.5rem] shadow-dark rounded-xl">
      <div className="relative">
        <img
          src={cover}
          alt={title}
          className="w-full object-cover rounded-xl"
        />

        <div className="absolute left-3 bottom-3 py-1 px-2 flex items-center gap-x-2 bg-background rounded-lg">
          <AvatarIcon />

          <span className="text-xs h-3">{membersCount}</span>
        </div>
      </div>

      <div className="px-2">
        <h1 className="mt-2 text-md text-primary font-semibold">
          اموزش راه اندازی کیف پول
        </h1>
        <p className="mt-2 text-[.75rem] h-[4.75rem] text-secondary leading-6 overflow-hidden line-clamp-3">
          {shortDescription}
          {shortDescription}
        </p>
        <div className="mt-3 flex items-center gap-x-4">
          {recordingFinished && (
            <div className="flex items-center gap-x-2">
              <div className="p-1 bg-[#0075FF10] rounded-md">
                <SmallRecordIcon />
              </div>

              <h3 className="text-secondary text-xs">تکمیل</h3>
            </div>
          )}
          {credit && (
            <div className="flex items-center gap-x-2">
              <div className="p-1 bg-[#8000FF10] rounded-md">
                <CostIcon />
              </div>

              <h3 className="text-secondary text-xs">تکمیل</h3>
            </div>
          )}

          <div className="flex items-center gap-x-2">
            <div className="p-1 bg-[#F920C310] rounded-md">
              <SmallRateIcon />
            </div>

            <h3 className="text-secondary text-xs">{rate}</h3>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-xs text-secondary">
            در مجموع
            <br />
            <span className="mt-1 !text-primary font-medium">{duration}</span>
          </h3>
          <h4 className="flex items-center gap-x-1  text-2xl font-medium">
            {price}

            <TomanIcon />
          </h4>
        </div>

        <span className="block mt-3 w-full h-[1px] bg-secondary opacity-25" />

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

export default CoursePreview;
