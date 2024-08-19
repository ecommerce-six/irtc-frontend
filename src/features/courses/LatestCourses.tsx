import React from "react";

import CourseCard from "./CourseCard";
import { Heading } from "@/components";

function LatestCourses() {
  const courses = [{}, {}, {}, {}, {}, {}];

  return (
    <section className="mt-4">
      <Heading
        title="جدیدترین دوره ها"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="mt-10 w-full flex items-center justify-center flex-wrap gap-5">
        {courses.map((item, index) => (
          <CourseCard
            key={index}
            slug={"react"}
            cover={
              "https://sabzlearn.ir/wp-content/uploads/2023/11/Course-thumbnail-Algorithm-1.webp"
            }
            title={"اموزش راه اندازی کیف پول"}
            rate={4.5}
            price={100000}
            credit={true}
            duration={"100 ساعت و 67 دقیقه"}
            membersCount={1269}
            shortDescription={
              "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
            }
            recordingFinished={true}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestCourses;
