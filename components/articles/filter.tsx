import { articlesFilterHandlerType } from "../../types/article";
import React, { useRef } from "react";

type props = { searchHandler: ({ time, basis }: articlesFilterHandlerType) => void };

function ArticlesFilter({ searchHandler }: props) {
  const time = useRef<HTMLSelectElement>(null);
  const basis = useRef<HTMLSelectElement>(null);

  const formHandler = () => {
    searchHandler({
      time: time.current!.value,
      basis: basis.current!.value,
    });
  };

  return (
    <form onChange={formHandler} className="mt-2">
      <select
        className="px-2 py-2 md:px-4 text-secondary text-base outline-2 outline outline-offset-4 outline-dim-secondary border-none bg-transparent text-[.8rem] rounded-lg"
        ref={time}
      >
        <option className="hidden" value="">
          فیلتر زمانی
        </option>
        <option value="">فرقی نمیکنه</option>

        <option value="1">هفته اخیر</option>
        <option value="1">ماه اخیر</option>
        <option value="1">سال اخیر</option>
      </select>

      <select
        className="mr-6 px-2 py-2 md:px-4 text-secondary text-base outline-2 outline outline-offset-4 outline-dim-secondary border-none bg-transparent text-[.8rem] rounded-lg"
        ref={basis}
      >
        <option className="hidden" value="">
          فیلتر نمایش
        </option>
        <option value="">فرقی نمیکنه</option>

        <option value="3">زمان</option>
        <option value="3">بیشترین امتیاز</option>
        <option value="3">محبوب ترین</option>
      </select>
    </form>
  );
}

export default ArticlesFilter;
