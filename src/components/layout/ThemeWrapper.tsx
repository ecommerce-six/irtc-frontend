"use client";

import React, { ReactNode, useLayoutEffect } from "react";

import { useTheme } from "@/hooks";
import { themeType } from "@/types/theme";

import { IranYekan } from "@/assets/fonts";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { theme, changeTheme } = useTheme();

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("theme") as themeType;

    changeTheme(localTheme || "light");
  }, []);

  return (
    <body
      className={`${theme} ${IranYekan.className} bg-background dark:bg-background-dark`}
    >
      {children}
    </body>
  );
};

export default ThemeWrapper;
