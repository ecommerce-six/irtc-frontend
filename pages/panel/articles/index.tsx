import React, { useState } from "react";

import Header from "../../head";
import ReactPaginate from "react-paginate";
import Access from "../../../components/access";
import useFetchData from "../../../hooks/useFetchData";
import { PanelLayout } from "../../../components/layout";
import ArticlesFilter from "../../../components/articles/filter";
import ArticlePreviewEdit, { ArticlePreviewEditLoading } from "../../../components/articles/articlePreviewEdit";

function Articles() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const searchHandler = () => {};

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  const { data, fetchedCountPage } = useFetchData("/articles", selectedPage, 20);

  return (
    <Access admin author>
      <Header title="IRTC	• مقاله ها" />

      <ArticlesFilter searchHandler={searchHandler} />

      <div className="mt-6 flex flex-col items-center gap-y-5">
        {data
          ? data.map((item: any, index: number) => <ArticlePreviewEdit {...item} key={index} />)
          : [...new Array(4)].map((index) => <ArticlePreviewEditLoading key={index} />)}
      </div>

      <ReactPaginate
        pageCount={fetchedCountPage}
        breakLabel="..."
        nextLabel="بعدی"
        previousLabel="قبلی"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"mt-4 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "}
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
    </Access>
  );
}

Articles.PageLayout = PanelLayout;

export default Articles;
