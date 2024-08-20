"use client";

import React from "react";

import { Access } from "@/components";
import { Users, UsersFilter } from "@/features/panel/user";

function PanelUsers() {
  const searchHandler = () => {};

  return (
    <Access admin>
      <title>IRTC • کاربران</title>

      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background dark:bg-background-dark rounded-xl shadow-dark dark:shadow-darker">
          <Users />
        </section>
      </main>
    </Access>
  );
}

export default PanelUsers;
