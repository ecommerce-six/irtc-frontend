"use client";

import React from "react";

function CloseFocusTimeButton() {
  const CloseFocusHandler = () => {
    document.getElementById("sidebar")!.className = "w-full lg:w-[19%]";
    document.getElementById("closeFocusTimeButton")!.className = "hidden";
    document.getElementById("article")!.className =
      "p-4 w-full lg:w-[80%] rounded-xl shadow-dark";
  };

  return (
    <button
      id="closeFocusTimeButton"
      className="hidden"
      onClick={CloseFocusHandler}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_795_618)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.5 9.625H23.375V5.5C23.375 5.13533 23.2301 4.78559 22.9723 4.52773C22.7144 4.26987 22.3647 4.125 22 4.125C21.6353 4.125 21.2856 4.26987 21.0277 4.52773C20.7699 4.78559 20.625 5.13533 20.625 5.5V9.625C20.625 10.3543 20.9147 11.0538 21.4305 11.5695C21.9462 12.0853 22.6457 12.375 23.375 12.375H27.5C27.8647 12.375 28.2144 12.2301 28.4723 11.9723C28.7301 11.7144 28.875 11.3647 28.875 11C28.875 10.6353 28.7301 10.2856 28.4723 10.0277C28.2144 9.76987 27.8647 9.625 27.5 9.625ZM9.625 12.375C10.3543 12.375 11.0538 12.0853 11.5695 11.5695C12.0853 11.0538 12.375 10.3543 12.375 9.625V5.5C12.375 5.13533 12.2301 4.78559 11.9723 4.52773C11.7144 4.26987 11.3647 4.125 11 4.125C10.6353 4.125 10.2856 4.26987 10.0277 4.52773C9.76987 4.78559 9.625 5.13533 9.625 5.5V9.625H5.5C5.13533 9.625 4.78559 9.76987 4.52773 10.0277C4.26987 10.2856 4.125 10.6353 4.125 11C4.125 11.3647 4.26987 11.7144 4.52773 11.9723C4.78559 12.2301 5.13533 12.375 5.5 12.375H9.625ZM9.625 23.375H5.5C5.13533 23.375 4.78559 23.2301 4.52773 22.9723C4.26987 22.7144 4.125 22.3647 4.125 22C4.125 21.6353 4.26987 21.2856 4.52773 21.0277C4.78559 20.7699 5.13533 20.625 5.5 20.625H9.625C10.3543 20.625 11.0538 20.9147 11.5695 21.4305C12.0853 21.9462 12.375 22.6457 12.375 23.375V27.5C12.375 27.8647 12.2301 28.2144 11.9723 28.4723C11.7144 28.7301 11.3647 28.875 11 28.875C10.6353 28.875 10.2856 28.7301 10.0277 28.4723C9.76987 28.2144 9.625 27.8647 9.625 27.5V23.375ZM23.375 20.625C22.6457 20.625 21.9462 20.9147 21.4305 21.4305C20.9147 21.9462 20.625 22.6457 20.625 23.375V27.5C20.625 27.8647 20.7699 28.2144 21.0277 28.4723C21.2856 28.7301 21.6353 28.875 22 28.875C22.3647 28.875 22.7144 28.7301 22.9723 28.4723C23.2301 28.2144 23.375 27.8647 23.375 27.5V23.375H27.5C27.8647 23.375 28.2144 23.2301 28.4723 22.9723C28.7301 22.7144 28.875 22.3647 28.875 22C28.875 21.6353 28.7301 21.2856 28.4723 21.0277C28.2144 20.7699 27.8647 20.625 27.5 20.625H23.375Z"
            fill="#8000FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_795_618">
            <rect width="33" height="33" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default CloseFocusTimeButton;