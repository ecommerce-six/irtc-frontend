import React from "react";
import Image from "next/image";

import { LatestCourses } from "@/components";
import { CoursesHero, CoursesFilter } from "@/features/courses";

import { TopToRightBottom } from "@/assets/badges";

function Courses() {
  return (
    <main>
      <title>IRTC • دوره ها</title>

      <CoursesHero />

      <div className="mt-10">
        <LatestCourses />
      </div>

      <div className="mt-10 grid justify-items-center">
        <Image
          src={TopToRightBottom}
          width={64}
          height={64}
          className="w-16 dark:invert dark:brightness-0 pointer-events-none"
          alt="spiral badge"
        />
      </div>

      <CoursesFilter />
    </main>
  );
}

export default Courses;
