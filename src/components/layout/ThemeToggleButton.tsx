import React from "react";
import Image from "next/image";

import { useTheme } from "@/hooks";

import { DarkIcon, LightIcon } from "@/assets/icons";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="m-auto" onClick={toggleTheme}>
      <Image
        src={theme === "light" ? DarkIcon : LightIcon}
        alt="theme"
        className="w-5 h-5 pointer-events-none"
      />
    </button>
  );
};

export default ThemeToggleButton;
