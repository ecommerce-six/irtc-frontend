"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "@/styles";
import { useUser } from "@/hooks";

import { AvatarSample, ProfileHeaderImage } from "@/assets";

function Profile() {
  const { user } = useUser();

  return (
    <section className="p-5 rounded-xl shadow-dark">
      <Image
        src={ProfileHeaderImage}
        alt="user trading cover"
        className="h-[9rem] md:h-[18rem] rounded-xl object-cover"
      />

      <div className="relative sm:pr-4 md:pr-8 mt-4 md:-mt-20 flex items-center md:items-end justify-between gap-y-5 flex-wrap w-full">
        <div className="flex items-center md:items-end gap-4">
          <div className="bg-background rounded-2xl border-4 border-background">
            <Image
              src={AvatarSample}
              alt="avatar"
              className="w-14 sm:w-20 md:w-36 h-14 sm:h-20 md:h-36 rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-primary font-semibold text-sm md:text-lg w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {user?.firstName} {user?.lastName}{" "}
              {!(user?.firstName || user?.lastName) && user?.phoneNumber}
            </h1>
            <h2 className="text-secondary text-xs md:text-base w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {user?.firstName && user?.lastName && user?.phoneNumber}
            </h2>
          </div>
        </div>

        <Link
          href={"/panel/edit"}
          className={`${styles.primaryButton} sm:absolute left-0 py-3 md:py-4 px-5 md:px-8 h-fit hover:scale-[1.05]`}
        >
          ویرایش پروفایل
        </Link>
      </div>

      <div className="mt-4 md:mt-10 pr-4 md:pr-8">
        <h1 className="text-primary font-semibold text-base md:text-xl">
          درباره ی من
        </h1>

        <p className="pr-2 mt-2 text-secondary text-xs md:text-sm !leading-loose">
          {user?.description}
        </p>
      </div>
    </section>
  );
}

export default Profile;
