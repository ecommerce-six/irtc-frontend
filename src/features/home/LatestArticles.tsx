"use client";
import React from "react";
import Link from "next/link";

import { Heading } from "@/components";
import { ArticleCard, ArticleCardLoading } from "@/features/articles";

import { styles } from "@/styles";
import { useFetchData } from "@/hooks";
import { articleType } from "@/types/article";

function LatestArticles() {
  const { data } = useFetchData("/articles", 1, 2);

  return (
    <section className="mt-10">
      <Heading
        title="آخرین مقالات سایت"
        description="آخرین مقالات سایت را بخوانید و دانش و اطلاعات خود را به‌روز نگه دارید."
      >
        <Link
          href={"/articles"}
          className={`${styles.secondaryButton} py-3 px-6 w-fit hover:bg-brand `}
        >
          مشاهده همه
        </Link>
      </Heading>

      <div className="mt-10 flex items-center justify-center flex-wrap gap-x-14 gap-y-10">
        {data
          ? data.article.map((item: articleType) => (
              <ArticleCard {...item} key={item.id} />
            ))
          : [...new Array(4)].map((_, index) => (
              <ArticleCardLoading key={index} />
            ))}
      </div>
    </section>
  );
}

export default LatestArticles;
