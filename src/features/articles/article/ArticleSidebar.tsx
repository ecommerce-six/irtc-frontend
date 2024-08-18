import React from "react";
import Image from "next/image";

import FocusButton from "../articleFocusMode/FocusButton";
import LatestArticleCompact from "../LatestArticleCompact";

import { userType } from "@/types/user";

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
          <h1 className="text-primary font-semibold w-full text-sm md:text-base text-ellipsis overflow-hidden whitespace-nowrap">
            {user?.firstName} {user?.lastName}{" "}
            {!(user?.firstName || user?.lastName) && user?.phoneNumber}
          </h1>
          <h2 className="text-secondary w-full text-xs text-ellipsis overflow-hidden whitespace-nowrap">
            {user?.role === "admin" ? "ادمین" : "نویسنده"}
          </h2>
        </div>
      </div>

      <h1 className="text-primary text-base md:text-lg font-semibold">
        مقاله های اخیر ...
      </h1>

      <div className="mt-4 space-y-3">
        <LatestArticleCompact />
        <LatestArticleCompact />
        <LatestArticleCompact />
        <LatestArticleCompact />
      </div>
    </aside>
  );
};

export default ArticleSidebar;
