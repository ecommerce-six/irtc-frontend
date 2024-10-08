"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import {
  ArticleCard,
  ArticleCardLoading,
  ArticlesFilter,
} from "@/features/articles";
import { Heading } from "@/components";

import { useFetchData } from "@/hooks";
import { articleType, articlesFilterHandlerType } from "@/types/article";

function Articles() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  const searchHandler = ({ time, basis }: articlesFilterHandlerType) => {};

  const { data, fetchedCountPage } = useFetchData("/articles", selectedPage);

  return (
    <main>
      <title>IRTC • مقاله ها</title>

      <div className="mt-6">
        <Heading
          title="جست و جو برای مقاله ها"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
        />
      </div>

      <ArticlesFilter searchHandler={searchHandler} />

      <div className="mt-10 ">
        <div className="flex justify-center flex-wrap gap-20">
          {data
            ? data.article.map((item: articleType, index: number) => (
                <ArticleCard {...item} key={index} />
              ))
            : [...new Array(4)].map((_, index) => (
                <ArticleCardLoading key={index} />
              ))}
        </div>
        <div className="flex items-center justify-center h-20 overflow-x-hidden">
          <ReactPaginate
            pageCount={fetchedCountPage}
            breakLabel="..."
            nextLabel="بعدی"
            previousLabel="قبلی"
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={
              "mt-6 lg:mr-2 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "
            }
            pageClassName={
              "flex items-center justify-center h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
            }
            pageLinkClassName={"pt-1 px-2 lg:px-3 w-full h-full rounded-full"}
            activeClassName={
              "h-6 lg:h-8 rounded-full !text-primary-dark dark:!text-primary bg-brand"
            }
            breakClassName={
              "flex items-center justify-center border-brand pt-1 border px-2 lg:px-3 h-6 lg:h-8 rounded-full text-brand"
            }
            nextClassName={
              "flex items-center justify-center px-2 lg:px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
            }
            previousClassName={
              "flex items-center justify-center px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
            }
            disabledClassName={"hidden"}
          />
        </div>
      </div>
    </main>
  );
}

export default Articles;
