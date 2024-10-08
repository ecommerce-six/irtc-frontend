"use client";

import React from "react";

import { styles } from "@/styles";

function FocusButton({ className }: { className?: string }) {
  const focusHandler = () => {
    document.getElementById("sidebar")!.className = "hidden";
    document.getElementById("article")!.className = "p-4 w-full rounded-xl";
    document.getElementById("closeFocusTimeButton")!.className =
      "absolute top-4 left-4 p-2 bg-background dark:bg-background-dark rounded-lg";
  };

  return (
    <button
      className={`${styles.brandButton} w-full py-4 rounded-xl shadow-dark dark:shadow-darker ${className}`}
      onClick={focusHandler}
    >
      مطالعه با تمرکز بیشتر
    </button>
  );
}

export default FocusButton;
