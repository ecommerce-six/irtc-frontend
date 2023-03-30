import React from "react";

import { MainLayout } from "../../../components/layout";
import Testimonials from "../../../components/home/testimonials";
import CourseDescription from "../../../components/courses/courseDescription";
import SingleCourseHeader from "../../../components/courses/singleCourseHeader";

function Course() {
  const course = {
    slug: "react",
    rate: 4.5,
    price: 690000,
    credit: true,
    membersCount: 1269,
    title: "اموزش راه اندازی کیف پول",
    duration: "100 ساعت و 67 دقیقه",
    cover: "https://sabzlearn.ir/wp-content/uploads/2022/06/Com_project_price-247x139.png",
    description:
      "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید ",
    shortDescription:
      "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
    recordingFinished: true,
  };

  return (
    <main>
      <SingleCourseHeader {...course} />

      <CourseDescription description={course.description} />

      <Testimonials />
    </main>
  );
}

Course.PageLayout = MainLayout;

export default Course;
