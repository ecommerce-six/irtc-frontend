"use client";

import React from "react";

import Access from "@/components/access";
import AllUsers from "@/components/user/allUsers";
import UsersFilter from "@/components/user/usersFilter";

function PanelUsers() {
  const searchHandler = () => {};

  return (
    <Access admin>
      {/* <Header title="IRTC	• کاربر ها" /> */}

      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background rounded-xl shadow-dark">
          <AllUsers />
        </section>
      </main>
    </Access>
  );
}

export default PanelUsers;
