"use client";

import React from "react";
import Image from "next/image";

import { useTheme } from "@/hooks";

import { TurnAround } from "@/assets/badges";
import {
  Github,
  ClickUp,
  DropBox,
  Elastic,
  FreshBooks,
} from "@/assets/companies";
import {
  GithubDark,
  ClickUpDark,
  DropBoxDark,
  ElasticDark,
  FreshBooksDark,
} from "@/assets/companies/dark";

function GraduatesCompanies() {
  const { theme } = useTheme();

  const isLightMode = theme === "light";

  return (
    <section className="mt-16 py-10 flex flex-col items-center">
      <div className="flex gap-x-2 md:gap-x-4">
        <h1 className="text-primary dark:text-primary-dark text-base md:text-lg font-semibold">
          تحلیل سهام شرکت‌های بزرگ، با ما
        </h1>
        <Image
          src={TurnAround}
          alt="turn around"
          className="mt-2 w-12 md:w-24 dark:invert dark:brightness-0"
        />
      </div>

      <div className="mt-10 md:mt-0 flex justify-center items-center flex-wrap gap-10">
        <Image
          src={isLightMode ? Github : GithubDark}
          alt="Github"
          className="w-36 md:w-44"
        />
        <Image
          src={isLightMode ? Elastic : ElasticDark}
          alt="Elastic"
          className="w-36 md:w-44"
        />
        <Image
          src={isLightMode ? ClickUp : ClickUpDark}
          alt="ClickUp"
          className="w-36 md:w-44"
        />
        <Image
          src={isLightMode ? DropBox : DropBoxDark}
          alt="DropBox"
          className="w-36 md:w-44"
        />
        <Image
          src={isLightMode ? FreshBooks : FreshBooksDark}
          alt="FreshBooks"
          className="w-36 md:w-44"
        />
      </div>
    </section>
  );
}

export default GraduatesCompanies;
