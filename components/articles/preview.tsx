import React from "react";
import Image from "next/image";
import { marked } from "marked";

import { TimeIcon } from "../../public/icons/svgs";
import { estimateReadTimeHandler } from "../../modules/estimateReadTime";
import CloseFocusTimeButton from "./closeFocusTimeButton";

type props = {
  title: string;
  content: string;
};

function CreateArticlePreview({ title, content }: props) {
  return (
    <article id="article" className="p-4 w-full rounded-xl box-shadow">
      <div className="relative">
        <Image src={""} alt={title} className="w-full rounded-xl" />

        <CloseFocusTimeButton />
      </div>

      <h1 className="my-4 pl-4 text-base md:text-2xl font-semibold md:font-extrabold ">{title}</h1>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-x-3">
            <TimeIcon />

            <h3 className="text-secondary text-xs md:text-sm">
              ﺯﻣﺎﻥ ﻣﻄﺎﻟﻌﻪ:{" "}
              <span className="text-primary text-xs md:text-sm font-medium">{estimateReadTimeHandler(content)}</span>
            </h3>
          </div>
        </div>
      </div>

      <div
        className="mt-5 article-body"
        dangerouslySetInnerHTML={{ __html: marked(content ?? "", { breaks: true }) }}
      />
    </article>
  );
}

export default CreateArticlePreview;
