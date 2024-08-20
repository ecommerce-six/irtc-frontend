import React from "react";
import Image from "next/image";
import { marked } from "marked";

import { estimateReadTimeHandler } from "@/utils/estimateReadTime";
import CloseFocusTimeButton from "../articleFocusMode/CloseFocusButton";

import { TimeIcon } from "@/assets/icons/svgs";

import "@/styles/marked.css";

type props = {
  title: string;
  content: string;
  previewHandler: () => void;
};

function ArticlePanelEditingPreview({ title, content, previewHandler }: props) {
  return (
    <>
      <div
        className="p-5 lg:p-10 fixed top-0 left-0 w-full h-screen overflow-y-scroll bg-dim-primary"
        onClick={previewHandler}
      >
        <article
          id="article"
          className="p-4 mx-auto w-[full] lg:w-[65rem] rounded-xl shadow-dark dark:shadow-darker bg-background dark:bg-background-dark"
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <div className="relative">
            <Image
              src={
                "https://sabzlearn.ir/wp-content/uploads/2022/06/Free-852x479-1.png"
              }
              alt={title}
              className="w-full rounded-xl"
              width={1200}
              height={675}
            />

            <CloseFocusTimeButton />
          </div>
          <h1 className="my-4 pl-4 text-base md:text-2xl font-semibold md:font-extrabold ">
            {title}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-x-3">
                <TimeIcon />

                <h3 className="text-secondary dark:text-secondary-dark text-xs md:text-sm">
                  ﺯﻣﺎﻥ ﻣﻄﺎﻟﻌﻪ:{" "}
                  <span className="text-primary dark:text-primary-dark text-xs md:text-sm font-medium">
                    {estimateReadTimeHandler(content)}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div
            className="mt-5 article-body"
            dangerouslySetInnerHTML={{
              __html: marked(content ?? "", { breaks: true }),
            }}
          />
        </article>
      </div>
    </>
  );
}

export default ArticlePanelEditingPreview;
