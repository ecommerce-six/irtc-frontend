import React from "react";

import CourseRate from "./CourseRate";

type props = {
  slug: string;
  description: string;
};

function CourseDescription({ slug, description }: props) {
  return (
    <section className="mt-6 p-5 rounded-xl shadow-dark">
      <h1 className="text-primary text-base md:text-xl font-semibold">
        توضیحات بیشتر درباره دوره
      </h1>

      <p className="mt-4 md:px-2 text-sm leading-7">{description}</p>

      <CourseRate slug={slug} />
    </section>
  );
}

export default CourseDescription;
