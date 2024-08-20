"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import CourseCard from "./CourseCard";
import { Heading } from "@/components";

function CoursesFilter() {
  const courses = [
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-18-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2024/01/Freelancer32-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-25-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/11/Course-thumbnail-Algorithm-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-18-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-25-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2024/01/Freelancer32-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
    {
      slug: "react",
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/11/Course-thumbnail-Algorithm-1.webp",
      title: "اموزش راه اندازی کیف پول",
      rate: 4.5,
      price: 100000,
      credit: true,
      duration: "100 ساعت و 67 دقیقه",
      membersCount: 1269,
      shortDescription:
        "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید",
      recordingFinished: true,
    },
  ];

  const [countPage, setCountPage] = useState<number>(1);

  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  return (
    <section className="mt-10 mb-20">
      <Heading
        title="جست و جو برای دوره ها"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="mt-10 flex flex-col lg:flex-row justify-between gap-y-8">
        <aside className="px-5 py-6 w-full h-fit lg:w-[25%] shadow-dark dark:shadow-darker rounded-xl">
          <form>
            <h1 className="text-primary dark:text-primary-dark font-semibold text-lg">
              نوع دوره
            </h1>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="free"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  رایگان
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  فقط نقدی
                </label>
              </div>
            </div>

            <h1 className="mt-5 text-primary dark:text-primary-dark font-semibold text-lg">
              مرتب سازی براساس
            </h1>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="free"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  رایگان
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  فقط نقدی
                </label>
              </div>
            </div>

            <h1 className="mt-5 text-primary dark:text-primary-dark font-semibold text-lg">
              مرتب سازی براساس
            </h1>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="basis"
                  id="free"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  رایگان
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="basis"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  در حال برگزاری
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="basis"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  تکمیل ضبط شده ها
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="basis"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  مخصوص ناشنوایان
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="basis"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  قدیمی ترین
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="basis"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  قیمت
                </label>
              </div>
            </div>

            <h1 className="mt-5 text-primary dark:text-primary-dark font-semibold text-lg">
              دسته دوره
            </h1>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="free"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  پایتون
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  جاوااسکریپت
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="free"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  پایتون
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="paid-only"
                  className="w-4 h-4 accent-brand dark:invert dark:checked:invert-0"
                />
                <label
                  htmlFor="free"
                  className="text-md text-secondary dark:text-secondary-dark"
                >
                  جاوااسکریپت
                </label>
              </div>
            </div>
          </form>
        </aside>
        <section className="w-full lg:w-[72.5%]">
          <div className="flex items-center justify-center flex-wrap gap-5">
            {courses.map((item, index) => (
              <CourseCard {...item} key={index} />
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
              containerClassName={
                "mt-6 lg:mr-2 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "
              }
              pageClassName={
                "flex items-center justify-center h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
              }
              pageLinkClassName={"pt-1 px-2 lg:px-3 w-full h-full rounded-full"}
              activeClassName={"h-6 lg:h-8 rounded-full !text-primary-dark dark:!text-primary bg-brand"}
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
        </section>
      </div>
    </section>
  );
}

export default CoursesFilter;
