import React from "react";
import Image from "next/image";

import { LatestCourseCompact } from "@/features/courses";
import FocusButton from "../articleFocusMode/FocusButton";

import { userType } from "@/types/user";
import { coursesPreviewContent } from "@/data/coursesPreview";

import { AvatarSample } from "@/assets";

const ArticleSidebar = ({ user }: { user: userType }) => {
  return (
    <aside id="sidebar" className="w-full lg:w-[19%]">
      <FocusButton className="hidden lg:block" />

      <div className="my-6 flex items-center gap-x-2">
        <Image
          src={AvatarSample}
          alt="av"
          className="w-16 h-16 border-2 border-brand rounded-full"
        />

        <div className="space-y-2">
          <h1 className="text-primary dark:text-primary-dark font-semibold w-full text-sm md:text-base text-ellipsis overflow-hidden whitespace-nowrap">
            {user?.firstName} {user?.lastName}{" "}
            {!(user?.firstName || user?.lastName) && user?.phoneNumber}
          </h1>
          <h2 className="text-secondary dark:text-secondary-dark w-full text-xs text-ellipsis overflow-hidden whitespace-nowrap">
            {user?.role === "admin" ? "ادمین" : "نویسنده"}
          </h2>
        </div>
      </div>

      <h1 className="text-primary dark:text-primary-dark text-base md:text-lg font-semibold">
        دوره های مربوطه...
      </h1>

      <div className="mt-4 space-y-3">
        {coursesPreviewContent.slice(5, 9).map((course) => (
          <LatestCourseCompact
            key={course.id}
            slug={course.slug}
            title={course.title}
            shortDescription={course.shortDescription}
          />
        ))}
      </div>
    </aside>
  );
};

export default ArticleSidebar;
