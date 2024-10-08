"use client";

import React, { useState, useEffect } from "react";

import ToggleAnimate from "./ToggleAnimate";

import { TopIcon } from "@/assets/icons";

function ScrollToTop() {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  }, []);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ToggleAnimate toggle={toggle} className="scale">
      <button
        title="scroll to top"
        className="fixed bottom-6 right-6 h-10 w-10 flex items-center justify-center bg-brand rounded-lg z-[5] growth"
        onClick={scrollToTopHandler}
      >
        <TopIcon />
      </button>
    </ToggleAnimate>
  );
}

export default ScrollToTop;
