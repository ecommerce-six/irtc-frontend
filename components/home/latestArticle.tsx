import React from "react";
import Link from "next/link";

import Heading from "../elements/heading";
import ArticlePreview, { ArticlePreviewLoading } from "../articles/articlePreview";

import { styles } from "../../styles";
import useGetDataArray from "../../hooks/getData";
import { articleType } from "../../types/article";

function LatestArticle() {
  const { data } = useGetDataArray("/articles", 1, 2);

  return (
    <section className="mt-10">
      <Heading
        title="آخرین مقالات سایت"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      >
        <Link href={"/articles"} className={`${styles.secondaryButton} py-3 px-6 w-fit hover:bg-brand `}>
          مشاهده همه
        </Link>
      </Heading>

      <div className="mt-10 flex items-center justify-center flex-wrap gap-x-14 gap-y-10">
        {data.length
          ? data.map((item: articleType, index: number) => <ArticlePreview {...item} key={index} />)
          : [...new Array(4)].map((index) => <ArticlePreviewLoading key={index} />)}
      </div>
    </section>
  );
}

export default LatestArticle;
