"use client";

import React from "react";

import Access from "@/components/access";
import AllUsers from "@/components/user/allUsers";
import UsersFilter from "@/components/user/usersFilter";

function Roles() {
  const searchHandler = () => {};

  return (
    <Access admin>
      {/* <Header title="IRTC	• مقام ها" /> */}

      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background rounded-xl shadow-dark">
          <h1 className="mb-4 text-lg font-semibold">ادمین ها</h1>
          <AllUsers />
        </section>

        <section className="mt-6 p-5  bg-background rounded-xl shadow-dark">
          <h1 className="mb-4 text-lg font-semibold">نویسنده ها</h1>
          <AllUsers />
        </section>
      </main>
    </Access>
  );
}

export default Roles;
