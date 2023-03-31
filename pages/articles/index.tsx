import React, { useState } from "react";


import Header from "../head";
import ReactPaginate from "react-paginate";
import { MainLayout } from "../../components/layout";
import Heading from "../../components/elements/heading";
import ArticlesFilter from "../../components/articles/filter";
import ArticlePreview from "../../components/articles/articlePreview";

import { articlesFilterHandlerType } from "../../types/article";

function Articles() {
  const [countPage, setCountPage] = useState<number>(1);

  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  const searchHandler = ({ time, basis }: articlesFilterHandlerType) => {
    // console.log(time, basis);
  };

  const articles = [
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
    {
      slug: "react",
      title: "ری اکت در دنیای واقعی",
      description:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      cover: "https://sabzlearn.ir/wp-content/uploads/2021/11/Com_react-247x139.png",
    },
  ];

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
          {articles.map((item, index) => (
            <ArticlePreview {...item} key={index} />
          ))}
        </div>

        <div className="flex items-center justify-center h-20 overflow-x-hidden">
          <ReactPaginate
            pageCount={countPage}
            breakLabel="..."
            nextLabel="بعدی"
            previousLabel="قبلی"
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"mt-6 lg:mr-2 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "}
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
