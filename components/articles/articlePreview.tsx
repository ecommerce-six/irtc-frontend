/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { articlePreviewType } from "../../types/article";

function ArticlePreview({ cover, title, description, slug }: articlePreviewType) {
  return (
    <div className="p-[1rem] w-full md:max-w-[32.5rem] rounded-xl box-shadow">
      <img src={cover} alt={title} className="w-full rounded-xl" />

      <h1 className="mt-4 px-6 text-xl text-primary font-semibold text-center">{title}</h1>

      <p className="mt-3 px-4 text-center text-sm text-secondary leading-7">{description}</p>

      <span className="block mt-3 w-full h-[1px] bg-secondary opacity-25" />
      
      <Link href={`/articles/${slug}`} className="pt-3 pb-2 w-full flex justify-center text-brand">
        <span>مشاهده و خواندن مقاله</span>
      </Link>
    </div>
  );
}

export default ArticlePreview;
