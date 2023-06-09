"use client";

import React from "react";
import { useSelector } from "react-redux";
function Panel() {
  const data = useSelector((state) => state.auth.accessToken);

  console.log(data);
  return <div>safsd{data ?? "data"}sdf</div>;
}

export default Panel;
