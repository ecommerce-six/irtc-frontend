import React from "react";
import Link from "next/link";
import Image from "next/image";

import { articlePreviewType } from "@/types/article";

function ArticleCard({ slug, cover, title, description }: articlePreviewType) {
  return (
    <div className="p-[1rem] w-full md:max-w-[32.5rem] rounded-xl shadow-dark">
      <Image
        src={cover}
        alt={title}
        width={1000}
        height={600}
        className="w-full object-cover rounded-xl"
      />

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

export default ArticleCard;
