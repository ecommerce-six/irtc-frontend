import React from "react";
import Link from "next/link";

import { Heading } from "@/components";
import CourseCard from "@/features/courses/CourseCard";

import { styles } from "@/styles";

function LatestCourses() {
  const courses = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="mt-4">
      <Heading
        title="جدیدترین دوره ها"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      >
        <Link
          href={"/courses"}
          className={`${styles.secondaryButton} py-3 px-6 w-fit hover:bg-brand `}
        >
          مشاهده همه
        </Link>
      </Heading>

      <div className="mt-10 w-full flex items-center justify-center flex-wrap gap-5">
        {courses.map((item, index) => (
          <CourseCard
            key={index}
            slug={"react"}
            cover={
              "https://sabzlearn.ir/wp-content/uploads/2023/12/IMAGE-1402-09-30-20_33_36-1-768x432.webp"
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
