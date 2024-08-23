import React from "react";

const LoadingLine = () => (
  <span className="block relative h-1 w-3/4 max-w-72 bg-background dark:bg-background-dark !bg-opacity-50 overflow-hidden rounded-full">
    <span className="block absolute top-0 left-1/2 w-2/5 h-full bg-background dark:bg-background-dark animate-passLine rounded-full" />
  </span>
);

export default LoadingLine;
