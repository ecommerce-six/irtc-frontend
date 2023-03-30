import React, { useState } from "react";
import CourseRate from "./courseRate";

function CourseDescription({ description }: { description: string }) {
  const [rate, setRate] = useState(0);

  return (
    <section className="mt-6 p-5 rounded-xl box-shadow">
      <h1 className="text-primary text-base md:text-xl font-semibold">توضیحات بیشتر درباره دوره</h1>

      <p className="mt-4 md:px-2 text-sm leading-7">{description}</p>

      <CourseRate rate={rate} setRate={setRate} />
    </section>
  );
}

export default CourseDescription;
