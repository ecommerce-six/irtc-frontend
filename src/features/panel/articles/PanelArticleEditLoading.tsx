import React from "react";

import { Access } from "@/components";

function PanelArticleEditLoading() {
  return (
    <Access admin author>
      <div className="p-4 space-y-4 rounded-xl shadow-dark dark:shadow-darker">
        <title>IRTC • ایجاد کردن مقاله</title>

        <div className="w-full h-[3.5rem] loading" />

        <div className="mt-3 w-full h-[7rem] loading" />

        <div className="mt-3 w-full h-[8rem] loading" />
      </div>

      <div
        className="mt-4 p-4 rounded-xl shadow-dark dark:shadow-darker sticky"
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

export default PanelArticleEditLoading;
