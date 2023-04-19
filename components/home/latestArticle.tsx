import React from "react";
import Link from "next/link";

import Heading from "../elements/heading";
import ArticlePreview from "../articles/articlePreview";

import { styles } from "../../styles";

function LatestArticle() {
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
        <ArticlePreview
          slug="react"
          title="ری اکت در دنیای واقعی"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
          cover="https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png"
        />

        <ArticlePreview
          slug="react"
          title="ری اکت در دنیای واقعی"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
          cover="https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png"
        />
      </div>
    </section>
  );
}

export default LatestArticle;
