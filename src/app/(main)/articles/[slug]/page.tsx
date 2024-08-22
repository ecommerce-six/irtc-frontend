import React from "react";

import { Error404 } from "@/components";
import { ArticleContent, ArticleSidebar } from "@/features/articles/article";

import axios from "@/configs/axios";
import { articleType } from "@/types/article";

import "@/styles/marked.css";

type props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: props) {
  const { slug } = params;

  const response = await axios(`articles/${slug}`);

  const article: articleType = response.data.data;

  return {
    title: `IRTC • ${article.title}`,
    description: article.description,
  };
}

async function Article({ params }: props) {
  const { slug } = params;
  try {
    const response = await axios(`articles/${slug}`);

    const article = response.data.data;

    const { user } = article;

    return (
      <main className="flex justify-between flex-col lg:flex-row gap-5">
        <ArticleContent article={article} />

        <ArticleSidebar user={user} />
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

    return paths;
  } catch {
    return [];
  }
}
