import React from "react";

import { useTheme } from "@/hooks";
import { DarkIcon, LightIcon } from "@/assets/icons";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="m-auto w-6 h-6" onClick={toggleTheme}>
      {theme === "light" ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default ThemeToggleButton;
