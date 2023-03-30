import React from "react";
import Image from "next/image";

import { MainLayout } from "../../components/layout";
import CoursesHeader from "../../components/courses/header";
import LatestCourses from "../../components/courses/latestCourses";
import CoursesFilter from "../../components/courses/coursesFilter";

import { TopToRightBottom } from "../../public/badges";

function Courses() {
  return (
    <main>
      <CoursesHeader />

      <div className="mt-10">
        <LatestCourses />
      </div>

      <div className="mt-10 grid justify-items-center">
        <Image src={TopToRightBottom} alt="spiral badge" className="w-16" />
      </div>

      <CoursesFilter />
    </main>
  );
}

Courses.PageLayout = MainLayout;

export default Courses;
