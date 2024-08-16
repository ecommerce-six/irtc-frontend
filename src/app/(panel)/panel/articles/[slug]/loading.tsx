import React from "react";

import Access from "@/components/access";

function EditArticlesLoading() {
  return (
    <Access admin author>
      <div className="p-4 space-y-4 rounded-xl shadow-dark">
        {/* <Header title="IRTC	• ایجاد کردن مقاله" /> */}

        <div className="w-full h-[3.5rem] loading" />

        <div className="mt-3 w-full h-[7rem] loading" />

        <div className="mt-3 w-full h-[8rem] loading" />
      </div>

      <div
        className="mt-4 p-4 rounded-xl shadow-dark sticky"
        data-color-mode="light"
      >
        <div className="flex items-center gap-x-2">
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
          <div className="w-[3rem] h-[3rem] loading" />
        </div>

        <span className="mt-4 block w-full h-[1px] bg-dim-secondary" />

        <div className="mt-4 w-[100%] h-[1rem] loading" />
        <div className="mt-4 w-[100%] h-[1rem] loading" />
        <div className="mt-4 w-[100%] h-[1rem] loading" />
        <div className="mt-4 w-[75%] h-[1rem] loading" />
      </div>

      <div className="my-4 flex items-center gap-x-3">
        <div className="mt-1 w-[10rem] h-[3rem] loading" />

        <div className="mt-1 w-[10rem] h-[3rem] loading" />
      </div>
    </Access>
  );
}

export default EditArticlesLoading;
