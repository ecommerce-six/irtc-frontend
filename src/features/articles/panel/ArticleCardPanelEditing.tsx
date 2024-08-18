import React from "react";
import Link from "next/link";

import { articlePreviewType } from "@/types/article";

function ArticleCardPanelEditing({ slug, title }: articlePreviewType) {
  return (
    <div className="p-6 flex items-center justify-between gap-y-2 w-full rounded-xl shadow-dark flex-wrap">
      <Link
        href={`/articles/${slug}`}
        className="w-full md:w-[25rem] text-sm md:text-base text-primary font-medium overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {title}
      </Link>

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-3">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_789_603)">
              <rect
                width="31"
                height="31"
                rx="5"
                fill="#FF0000"
                fillOpacity="0.1"
              />
              <path
                d="M18.6873 9.125C20.8393 9.125 22.5832 10.8958 22.5832 13.375C22.5832 18.3333 17.2707 21.1667 15.4998 22.2292C13.729 21.1667 8.4165 18.3333 8.4165 13.375C8.4165 10.8958 10.1873 9.125 12.3123 9.125C13.6298 9.125 14.7915 9.83333 15.4998 10.5417C16.2082 9.83333 17.3698 9.125 18.6873 9.125ZM16.1614 20.1778C16.7544 19.8079 17.3267 19.4057 17.8756 18.973C19.9871 17.2942 21.1665 15.4596 21.1665 13.375C21.1665 11.7033 20.0778 10.5417 18.6873 10.5417C17.9252 10.5417 17.1007 10.9454 16.5014 11.5433L15.4998 12.5448L14.4983 11.5433C13.899 10.9454 13.0745 10.5417 12.3123 10.5417C10.9382 10.5417 9.83317 11.7147 9.83317 13.375C9.83317 15.4603 11.0133 17.2942 13.1234 18.973C13.6511 19.3923 14.2142 19.784 14.8383 20.1771C15.05 20.311 15.2597 20.4392 15.4998 20.5823C15.74 20.4392 15.9496 20.311 16.1614 20.1778Z"
                fill="#FF0000"
              />
            </g>
            <defs>
              <clipPath id="clip0_789_603">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3 className="text-secondary text-xs md:text-sm">{129}</h3>
        </div>

        <div className="flex items-center gap-x-3">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="31"
              height="30"
              rx="5"
              fill="#F920C3"
              fillOpacity="0.1"
            />
            <path
              d="M12.3725 19.9639L15.4998 18.1049L18.6272 19.9883L17.8081 16.4661L20.5632 14.1179L16.9394 13.7999L15.4998 10.4733L14.0602 13.7755L10.4365 14.0934L13.1915 16.4661L12.3725 19.9639ZM15.4998 20.4042L11.3796 22.8502C11.1976 22.9643 11.0073 23.0132 10.8088 22.9969C10.6102 22.9806 10.4365 22.9154 10.2875 22.8013C10.1386 22.6871 10.0228 22.5446 9.94006 22.3737C9.85733 22.2022 9.84078 22.0104 9.89042 21.7984L10.9825 17.1754L7.33393 14.069C7.16846 13.9222 7.06521 13.7549 7.02417 13.5671C6.98248 13.3799 6.99472 13.1966 7.06091 13.0172C7.1271 12.8378 7.22638 12.6911 7.35875 12.5769C7.49113 12.4628 7.67314 12.3894 7.9048 12.3568L12.7199 11.941L14.5815 7.58704C14.6642 7.39136 14.7926 7.2446 14.9667 7.14676C15.1401 7.04892 15.3178 7 15.4998 7C15.6818 7 15.8599 7.04892 16.0339 7.14676C16.2074 7.2446 16.3354 7.39136 16.4182 7.58704L18.2797 11.941L23.0948 12.3568C23.3265 12.3894 23.5085 12.4628 23.6409 12.5769C23.7732 12.6911 23.8725 12.8378 23.9387 13.0172C24.0049 13.1966 24.0175 13.3799 23.9764 13.5671C23.9347 13.7549 23.8312 13.9222 23.6657 14.069L20.0171 17.1754L21.1092 21.7984C21.1588 22.0104 21.1423 22.2022 21.0596 22.3737C20.9768 22.5446 20.861 22.6871 20.7121 22.8013C20.5632 22.9154 20.3894 22.9806 20.1909 22.9969C19.9923 23.0132 19.802 22.9643 19.62 22.8502L15.4998 20.4042Z"
              fill="#F920C3"
            />
          </svg>

          <h3 className="text-secondary flex-1 w-fit text-xs md:text-sm">
            {4.5}
          </h3>
        </div>

        <time className="text-secondary text-sm">3 روز پیش</time>
      </div>

      <div className="flex items-center gap-x-5">
        <Link
          href={`/panel/articles/${slug}`}
          className="flex justify-center text-brand"
        >
          <span>ادیت مقاله</span>
        </Link>

        <button className="flex justify-center text-red-500">
          <span>حذف مقاله</span>
        </button>
      </div>
    </div>
  );
}

export default ArticleCardPanelEditing;
