import React from "react";

import Access from "../../../../components/access";
import { PanelLayout } from "../../../../components/layout";
import ArticlesFilter from "../../../../components/articles/filter";
import ArticlePreviewEdit from "../../../../components/articles/articlePreviewEdit";
import Header from "../../../head";

function MyArticles() {
  const articles = [
    {
      slug: "/react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "/react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "/react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "/react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
  ];

  const searchHandler = () => {};

  return (
    <Access admin author>
      <Header title="IRTC	• مقاله های من" />

      <ArticlesFilter searchHandler={searchHandler} />

      <div className="mt-6 flex flex-col items-center gap-y-5">
        {articles.map((item, index) => (
          <ArticlePreviewEdit {...item} key={index} />
        ))}
      </div>
    </Access>
  );
}

MyArticles.PageLayout = PanelLayout;

export default MyArticles;
