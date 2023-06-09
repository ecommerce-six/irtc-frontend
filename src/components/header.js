"use client";

import { authActions } from "@/store/auth-slice";
import Link from "next/link";
import React from "react";

import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(authActions.setAuth({ accessToken: "fadfasdf" }));
        }}
      >
        header
      </button>{" "}
      <Link href={"/panel"}>panel</Link>
    </div>
  );
}

export default Header;
