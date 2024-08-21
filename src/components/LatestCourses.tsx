import React from "react";

import { Heading } from "@/components";
import CourseCard from "../features/courses/CourseCard";

import { coursesPreviewContent } from "@/data/coursesPreview";

function LatestCourses() {
  return (
    <section className="mt-4">
      <Heading
        title="جدیدترین دوره ها"
        description="آشنایی با جدیدترین دوره‌ها و فرصت‌های آموزشی برای ارتقاء مهارت‌های شما."
      />

      <div className="mt-10 w-full flex items-center justify-center flex-wrap gap-5">
        {coursesPreviewContent.slice(0, 3).map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}

export default LatestCourses;
