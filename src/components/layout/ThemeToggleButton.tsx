import React from "react";
import Image from "next/image";

import { useTheme } from "@/hooks";

import { DarkIcon, LightIcon } from "@/assets/icons";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <button className="m-auto" onClick={toggleThemeHandler}>
      <Image
        src={theme === "light" ? DarkIcon : LightIcon}
        alt="theme"
        className="w-5 h-5"
      />
    </button>
  );
};

export default ThemeToggleButton;
