import React from "react";
import Image from "next/image";

import { NineDots } from "@/assets/badges";

type props = {
  header: string;
  children: string;
};

function Activity({ header, children }: props) {
  return (
    <div className="lg:max-w-[45%] space-y-2 rounded-xl">
      <div className="flex items-center gap-x-3">
        <Image src={NineDots} alt="w-10 md:w-16" />

        <h2 className="text-primary dark:text-primary-dark text-base md:text-lg font-bold">
          {header}
        </h2>
      </div>
      <p className="px-2 lg:px-5 text-xs md:text-sm text-secondary dark:text-secondary-dark !leading-loose text-justify">
        {children}
      </p>
    </div>
  );
}

export default Activity;
