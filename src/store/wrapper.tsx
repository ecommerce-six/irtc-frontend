"use client";

import { Provider } from "react-redux";
import React, { ReactNode } from "react";

import { store } from ".";

const ReduxWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
