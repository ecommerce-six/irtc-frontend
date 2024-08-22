import React from "react";
import Link from "next/link";
import Image from "next/image";

import { articlePreviewType } from "@/types/article";

function ArticleCard({ slug, cover, title, description }: articlePreviewType) {
  return (
    <div className="p-[1rem] w-full md:max-w-[32.5rem] rounded-xl shadow-dark dark:shadow-darker">
      <Link href={`/articles/${slug}`}>
        <Image
          src={cover}
          alt={title}
          width={1000}
          height={600}
          className="w-full object-cover rounded-xl"
        />
      </Link>

      <Link href={`/articles/${slug}`}>
        <h1 className="mt-4 px-6 lg:min-h-[3rem] line-clamp-2 text-base md:text-xl text-primary dark:text-primary-dark font-semibold text-center">
          {title}
        </h1>
      </Link>

      <p className="mt-2 md:mt-3 px-4 text-center text-xs md:text-sm lg:min-h-[5rem] text-secondary dark:text-secondary-dark leading-5 lg:leading-7 line-clamp-3">
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
