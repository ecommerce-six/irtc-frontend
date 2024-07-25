/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { articlePreviewType } from "../../types/article";

function ArticlePreview({
  cover,
  title,
  description,
  slug,
}: articlePreviewType) {
  return (
    <div className="p-[1rem] w-full md:max-w-[32.5rem] rounded-xl box-shadow">
      <img src={cover} alt={title} className="w-full object-cover rounded-xl" />

      <h1 className="mt-4 px-6 text-base md:text-xl text-primary font-semibold text-center">
        {title}
      </h1>

      <p className="mt-2 md:mt-3 px-4 text-center text-xs md:text-sm lg:min-h-[5rem] text-secondary leading-5 lg:leading-7 line-clamp-3">
        {description}
      </p>

      <span className="block mt-3 w-full h-[1px] bg-secondary opacity-25" />

      <Link
        href={`/articles/${slug}`}
        className="pt-3 pb-2 w-full flex justify-center text-brand "
      >
        <span>مشاهده و خواندن مقاله</span>
      </Link>
    </div>
  );
}

export default ArticlePreview;

export function ArticlePreviewLoading() {
  return (
    <div className="p-[1rem] w-full md:max-w-[32.5rem] rounded-xl box-shadow">
      <div className="w-full h-[10rem] lg:h-[17rem] loading" />

      <div className="mt-4 mx-auto w-[85%] h-[1.25rem] loading" />

      <div className="mt-5 mx-auto w-[95%] h-[.8rem] loading" />
      <div className="mt-3 mx-auto w-[95%] h-[.8rem] loading" />
      <div className="mt-3 mx-auto w-[75%] h-[.8rem] loading" />

      <span className="block mt-4 w-full h-[1px] bg-secondary opacity-25" />

      <div className="mt-3 mx-auto w-[10rem] h-[1.75rem] loading" />
    </div>
  );
}
