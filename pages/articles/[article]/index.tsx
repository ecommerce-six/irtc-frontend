/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";

import { marked } from "marked";
import { MainLayout } from "../../../components/layout";
import FocusButton from "../../../components/articles/focusButton";
import ArticleRate from "../../../components/articles/articleRate";
import LatestArticleCompact from "../../../components/articles/latestArticleCompact";
import CloseFocusTimeButton from "../../../components/articles/closeFocusTimeButton";

import { AvatarSample } from "../../../public";
import { CommentsIcon, LikeIcon, RateIcon, TimeIcon } from "../../../public/icons/svgs";

function Article() {
  const article = {
    slug: "/",
    title: "ری اکت در دنیای واقعی",
    description:
      "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
    cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    content: `# مقدمه
آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید

## ری اکت در دنیای واقعی تر
آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید

<img src="https://sabzlearn.ir/wp-content/uploads/2022/01/Com_python-247x139.png" style="width:75%"/>

### ری اکت در دنیای واقعی ترین
آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید

![MarineGEO circle logo](https://sabzlearn.ir/wp-content/uploads/2021/12/Com_Security_network-min-247x139.png)`,
    readTime: "8 دقیقه",
    likesCount: 169,
    comments: [{}, {}],
    rate: 4.5,
    time: "5 روز پیش",
  };

  return (
    <main className="flex justify-between flex-col lg:flex-row gap-5">
      <article id="article" className="p-4 w-full lg:w-[80%] rounded-xl box-shadow">
        <div className="relative">
          <img src={article.cover} alt={article.title} className="w-full rounded-xl" />

          <CloseFocusTimeButton />
        </div>

        <h1 className="my-4 pl-4 text-base md:text-2xl font-semibold md:font-extrabold ">{article.title}</h1>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-x-3">
              <TimeIcon />

              <h3 className="text-secondary text-xs md:text-sm">
                ﺯﻣﺎﻥ ﻣﻄﺎﻟﻌﻪ: <span className="text-primary text-sm font-medium">{article.readTime}</span>
              </h3>
            </div>

            <div className="flex items-center gap-x-3">
              <LikeIcon />

              <h3 className="text-secondary text-xs md:text-sm">{article.likesCount}</h3>
            </div>

            <div className="flex items-center gap-x-3">
              <CommentsIcon />

              <h3 className="text-secondary text-xs md:text-sm">{article.comments.length}</h3>
            </div>

            <div className="flex items-center gap-x-3">
              <RateIcon />

              <h3 className="text-secondary text-xs md:text-sm">{article.rate}</h3>
            </div>
          </div>

          <time className="text-secondary text-sm">{article.time}</time>
        </div>

        <div className="mt-5 article-body" dangerouslySetInnerHTML={{ __html: marked(article.content) }} />

        <ArticleRate />
      </article>

      <aside id="sidebar" className="w-full lg:w-[19%]">
        <FocusButton />

        <div className="my-6 flex items-center gap-x-2">
          <Image src={AvatarSample} alt="av" className="w-16 h-16 border-2 border-brand rounded-full" />

          <div className="space-y-2">
            <h1 className="text-primary font-semibold w-full text-sm md:text-base text-ellipsis overflow-hidden whitespace-nowrap">
              ویتو محققیان
            </h1>
            <h2 className="text-secondary w-full text-xs text-ellipsis overflow-hidden whitespace-nowrap">
              Front-end Developer
            </h2>
          </div>
        </div>

        <h1 className="text-primary text-base md:text-lg font-semibold">مقاله های اخیر ...</h1>

        <div className="mt-4 space-y-3">
          <LatestArticleCompact />
          <LatestArticleCompact />
          <LatestArticleCompact />
          <LatestArticleCompact />
        </div>
      </aside>
    </main>
  );
}

Article.PageLayout = MainLayout;

export default Article;
