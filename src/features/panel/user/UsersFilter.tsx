"use client";

import React, { useRef } from "react";

import { userFilterType } from "@/types/user";

type props = {
  searchHandler: ({ role, name, phoneNumber }: userFilterType) => void;
};

function UsersFilter({ searchHandler }: props) {
  const role = useRef<HTMLSelectElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);

  const formHandler = () => {
    searchHandler({
      role: role.current!.value,
      name: name.current!.value,
      phoneNumber: phoneNumber.current!.value,
    });
  };

  return (
    <section className="p-5 bg-background dark:bg-background-dark rounded-xl shadow-dark dark:shadow-darker">
      <h1 className="text-primary dark:text-primary-dark">فیلتر ها</h1>
      <form
        onChange={formHandler}
        className="mt-8 flex items-center gap-6 flex-wrap"
      >
        <input
          type="text"
          ref={name}
          placeholder="فیلتر نام کاربر"
          className="px-2 py-2 md:px-4 w-full lg:w-[25%] text-secondary dark:text-secondary-dark text-base outline-2 outline outline-offset-4 outline-dim-secondary border-none bg-transparent text-[.8rem] rounded-lg"
        />

        <input
          type="text"
          ref={name}
          placeholder="فیلتر نام کاربر"
          className="px-2 py-2 md:px-4 w-full lg:w-[25%] text-secondary dark:text-secondary-dark text-base outline-2 outline outline-offset-4 outline-dim-secondary border-none bg-transparent text-[.8rem] rounded-lg"
        />

        <select
          className="px-2 py-2 md:px-4 w-full lg:w-[25%] text-secondary dark:text-secondary-dark text-base bg-background dark:bg-background-dark outline-2 outline outline-offset-4 outline-dim-secondary border-none bg-transparent text-[.8rem] rounded-lg"
          ref={role}
        >
          <option className="hidden">فیلتر مقام</option>
          <option>فرقی نمیکنه</option>

          <option value="admin">ادمین</option>
          <option value="author">نوبسنده</option>
          <option value="user">کاربر عادی</option>
        </select>
      </form>
    </section>
  );
}

export default UsersFilter;
