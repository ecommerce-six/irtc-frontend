import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Header from "../head";
import useFetchData from "../../hooks/useFetchData";
import { MainLayout } from "../../components/layout";
import Heading from "../../components/elements/heading";
import ArticlesFilter from "../../components/articles/filter";
import { articleType, articlesFilterHandlerType } from "../../types/article";
import ArticlePreview, {
  ArticlePreviewLoading,
} from "../../components/articles/articlePreview";

function Articles() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  const searchHandler = ({ time, basis }: articlesFilterHandlerType) => {};

  const { data, fetchedCountPage } = useFetchData("/articles", selectedPage);

  return (
    <main>
      <Header title="IRTC	• مقاله ها" />

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
                <ArticlePreview {...item} key={index} />
              ))
            : [...new Array(4)].map((_, index) => (
                <ArticlePreviewLoading key={index} />
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
            activeClassName={"h-6 lg:h-8 rounded-full !text-white bg-brand"}
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

Articles.PageLayout = MainLayout;

export default Articles;
