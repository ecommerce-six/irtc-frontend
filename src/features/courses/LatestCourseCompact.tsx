import React from "react";
import Link from "next/link";

type props = {
  slug: string;
  title: string;
  shortDescription: string;
};

function LatestCourseCompact({ slug, title, shortDescription }: props) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="block relative pr-6 p-4 space-y-1 bg-background dark:bg-background-dark rounded-xl shadow-dark dark:shadow-darker"
    >
      <h1 className="text-primary dark:text-primary-dark w-full text-xs md:text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </h1>
      <p className="text-secondary dark:text-secondary-dark w-full text-[.5rem] md:text-xs text-ellipsis overflow-hidden whitespace-nowrap">
        {shortDescription}
      </p>

      <span className="absolute right-0 top-[15%] h-[60%] w-[6px] bg-brand rounded-tl-xl rounded-bl-xl" />
    </Link>
  );
}

export default LatestCourseCompact;
