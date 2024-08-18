"use client";

import React from "react";

import Access from "@/components/access";
import { Users, UsersFilter } from "@/features/panel/user";

function PanelUsers() {
  const searchHandler = () => {};

  return (
    <Access admin>
      <title>IRTC • کاربران</title>

      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background rounded-xl shadow-dark">
          <Users />
        </section>
      </main>
    </Access>
  );
}

export default PanelUsers;
