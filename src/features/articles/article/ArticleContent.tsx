import React from "react";
import Image from "next/image";
import { marked } from "marked";

import ArticleRating from "./ArticleRating";
import CloseFocusTimeButton from "../articleFocusMode/CloseFocusButton";

import { articleType } from "@/types/article";
import { estimateReadTimeHandler } from "@/utils/estimateReadTime";

import {
  CommentsIcon,
  LikeIcon,
  RateIcon,
  TimeIcon,
} from "@/assets/icons/svgs";

const ArticleContent = ({ article }: { article: articleType }) => {
  return (
    <article
      id="article"
      className="p-4 w-full lg:w-[80%] rounded-xl shadow-dark dark:shadow-darker"
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

      <h1 className="my-4 pl-4 text-primary dark:text-primary-dark text-base md:text-2xl font-semibold md:font-extrabold ">
        {article.title}
      </h1>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-x-3">
            <TimeIcon />

            <h3 className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
              ﺯﻣﺎﻥ ﻣﻄﺎﻟﻌﻪ:{" "}
              <span className="text-primary dark:text-primary-dark text-xs md:text-sm font-medium">
                {estimateReadTimeHandler(article.content)}
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-x-3">
            <LikeIcon />

            <h3 className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
              {article.likesCount ?? "13"}
            </h3>
          </div>

          {article.comments && (
            <div className="flex items-center gap-x-3">
              <CommentsIcon />

              <h3 className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
                {article.comments.length}
              </h3>
            </div>
          )}

          {article.rate && (
            <div className="flex items-center gap-x-3">
              <RateIcon />

              <h3 className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
                {article.rate}
              </h3>
            </div>
          )}
        </div>

        <time className="text-secondary dark:text-secondary-dark text-sm">
          {article.time}
        </time>
      </div>

      <div
        className="mt-5 article-body"
        dangerouslySetInnerHTML={{ __html: marked(article.content) }}
      />

      <ArticleRating />
    </article>
  );
};

export default ArticleContent;
