"use client";

import React from "react";

import { Access } from "@/components";
import { Users, UsersFilter } from "@/features/panel/user";

function Roles() {
  const searchHandler = () => {};

  return (
    <Access admin>
      <title>IRTC • مقام ها</title>

      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background rounded-xl shadow-dark">
          <h1 className="mb-4 text-lg font-semibold">ادمین ها</h1>
          <Users />
        </section>

        <section className="mt-6 p-5  bg-background rounded-xl shadow-dark">
          <h1 className="mb-4 text-lg font-semibold">نویسنده ها</h1>
          <Users />
        </section>
      </main>
    </Access>
  );
}

export default Roles;
