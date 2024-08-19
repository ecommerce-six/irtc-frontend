import React from "react";

import { Testimonials } from "@/components";
import { CourseDetails, CourseDescription } from "@/features/courses/course";

function Course() {
  const course = {
    slug: "react",
    rate: 4.5,
    price: 350000,
    credit: true,
    membersCount: 1269,
    title: "اموزش راه اندازی کیف پول",
    duration: "100 ساعت و 67 دقیقه",
    cover: "https://sabzlearn.ir/wp-content/uploads/2022/06/Free-852x479-1.png",
    description:
      "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید ",
    shortDescription:
      "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
    recordingFinished: true,
  };

  return (
    <main>
      <title>IRTC • {course.title}</title>

      <CourseDetails {...course} />

      <CourseDescription slug={course.slug} description={course.description} />

      <Testimonials />
    </main>
  );
}

export default Course;
