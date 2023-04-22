import React from "react";
import Link from "next/link";

function LatestArticleCompact() {
  return (
    <Link href="/articles/react" className="block relative pr-6 p-4 space-y-1 bg-background rounded-xl box-shadow">
      <h1 className="text-primary w-full text-xs md:text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
        دروه اموزش تخصصی redux
      </h1>
      <p className="text-secondary w-full text-[.5rem] md:text-xs text-ellipsis overflow-hidden whitespace-nowrap">
        آیا می خواهید برای بهبود عملکردآیا می خواهید برای بهبود عملکردآیا می خواهید برای بهبود عملکرد
      </p>

      <span className="absolute right-0 top-[15%] h-[60%] w-[6px] bg-brand rounded-tl-xl rounded-bl-xl" />
    </Link>
  );
}

export default LatestArticleCompact;
