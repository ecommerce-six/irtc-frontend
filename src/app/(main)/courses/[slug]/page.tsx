import React from "react";

import { Error404, Testimonials } from "@/components";
import { CourseDetails, CourseDescription } from "@/features/courses/course";

import { courseType } from "@/types/course";
import { coursesContent } from "@/data/courses";

type params = { params: { slug: string } };

export async function generateMetadata({ params }: params) {
  const { slug } = params;

  const course: courseType | undefined = coursesContent.find(
    (course: courseType) => course.slug === slug
  );

  return {
    title: `IRTC • ${course?.title}`,
    description: course?.shortDescription,
  };
}

function Course({ params }: params) {
  const { slug } = params;

  const course = coursesContent.find(
    (course: courseType) => course.slug === slug
  );

  if (course)
    return (
      <main>
        <CourseDetails {...course} />

        <CourseDescription
          slug={course.slug}
          description={course.description}
        />

        <Testimonials />
      </main>
    );

  return <Error404 />;
}

export default Course;

export async function generateStaticParams() {
  try {
    const paths = coursesContent.map((course: courseType) => course.slug);

    return paths;
  } catch {
    return [];
  }
}
