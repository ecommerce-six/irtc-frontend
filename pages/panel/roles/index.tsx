import React from "react";

import Access from "../../../components/access";
import AllUsers from "../../../components/user/allUsers";
import { PanelLayout } from "../../../components/layout";
import UsersFilter from "../../../components/user/usersFilter";

function Roles() {
  const searchHandler = () => {};

  return (
    <Access admin>
      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background rounded-xl box-shadow">
          <h1 className="mb-4 text-lg font-semibold">ادمین ها</h1>
          <AllUsers />
        </section>

        <section className="mt-6 p-5  bg-background rounded-xl box-shadow">
          <h1 className="mb-4 text-lg font-semibold">نویسنده ها</h1>
          <AllUsers />
        </section>
      </main>
    </Access>
  );
}

Roles.PageLayout = PanelLayout;

export default Roles;
