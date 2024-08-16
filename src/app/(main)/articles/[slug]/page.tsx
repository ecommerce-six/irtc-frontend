import React from "react";
import Image from "next/image";
import { marked } from "marked";

import FocusButton from "@/components/articles/focusButton";
import ArticleRate from "@/components/articles/articleRate";
import LatestArticleCompact from "@/components/articles/latestArticleCompact";
import CloseFocusTimeButton from "@/components/articles/closeFocusTimeButton";

import {
  LikeIcon,
  RateIcon,
  TimeIcon,
  CommentsIcon,
} from "@/assets/icons/svgs";
import axios from "@/configs/axios";
import { AvatarSample } from "@/assets";
import { articleType } from "@/types/article";
import { estimateReadTimeHandler } from "@/utils/estimateReadTime";

import "@/styles/marked.css";
import Error404 from "@/components/404";

type props = {
  params: {
    slug: string;
  };
};

async function Article({ params }: props) {
  const { slug } = params;
  try {
    const response = await axios(`articles/${slug}`);

    const article = response.data.data;

    const { user } = article;

    return (
      <main className="flex justify-between flex-col lg:flex-row gap-5">
        {/* <Header title={`IRTC • ${article.title}`} /> */}

        <article
          id="article"
          className="p-4 w-full lg:w-[80%] rounded-xl shadow-dark"
        >
          <div className="relative">
            <Image
              src={article.cover}
              alt={article.title}
              className="w-full rounded-xl"
              width={1200}
              height={675}
            />

            <CloseFocusTimeButton />
          </div>

          <h1 className="my-4 pl-4 text-base md:text-2xl font-semibold md:font-extrabold ">
            {article.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-x-3">
                <TimeIcon />

                <h3 className="text-secondary text-xs md:text-sm">
                  ﺯﻣﺎﻥ ﻣﻄﺎﻟﻌﻪ:{" "}
                  <span className="text-primary text-xs md:text-sm font-medium">
                    {estimateReadTimeHandler(article.content)}
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-x-3">
                <LikeIcon />

                <h3 className="text-secondary text-xs md:text-sm">
                  {article.likesCount ?? "فعلا 0"}
                </h3>
              </div>

              {article.comments && (
                <div className="flex items-center gap-x-3">
                  <CommentsIcon />

                  <h3 className="text-secondary text-xs md:text-sm">
                    {article.comments.length}
                  </h3>
                </div>
              )}

              {article.rate && (
                <div className="flex items-center gap-x-3">
                  <RateIcon />

                  <h3 className="text-secondary text-xs md:text-sm">
                    {article.rate}
                  </h3>
                </div>
              )}
            </div>

            <time className="text-secondary text-sm">{article.time}</time>
          </div>

          <div
            className="mt-5 article-body"
            dangerouslySetInnerHTML={{ __html: marked(article.content) }}
          />

          <ArticleRate />
        </article>

        <aside id="sidebar" className="w-full lg:w-[19%]">
          <FocusButton className="hidden lg:block" />

          <div className="my-6 flex items-center gap-x-2">
            <Image
              src={AvatarSample}
              alt="av"
              className="w-16 h-16 border-2 border-brand rounded-full"
            />

            <div className="space-y-2">
              <h1 className="text-primary font-semibold w-full text-sm md:text-base text-ellipsis overflow-hidden whitespace-nowrap">
                {user?.firstName} {user?.lastName}{" "}
                {!(user?.firstName || user?.lastName) && user?.phoneNumber}
              </h1>
              <h2 className="text-secondary w-full text-xs text-ellipsis overflow-hidden whitespace-nowrap">
                {user?.role === "admin" ? "ادمین" : "نویسنده"}
              </h2>
            </div>
          </div>

          <h1 className="text-primary text-base md:text-lg font-semibold">
            مقاله های اخیر ...
          </h1>

          <div className="mt-4 space-y-3">
            <LatestArticleCompact />
            <LatestArticleCompact />
            <LatestArticleCompact />
            <LatestArticleCompact />
          </div>
        </aside>
      </main>
    );
  } catch {
    return <Error404 />;
  }
}

export default Article;

export async function generateStaticParams() {
  try {
    const response = await axios("/articles");

    const articles = response.data.data;

    const paths = articles.article.map((item: articleType) => item.slug);

    console.log("second");
    return paths;
  } catch {
    console.log("first");
    return [];
  }
}
