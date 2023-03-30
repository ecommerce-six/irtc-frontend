import Image from "next/image";
import React, { ReactNode } from "react";

import { FourDots } from "../../public/badges";

type props = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

function Heading({ title, description, children }: props) {
  return (
    <div className="flex md:items-center md:justify-between flex-col lg:flex-row gap-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-x-4">
          <Image src={FourDots} alt="four dots" className="w-5 md:w-7" />
          <h1 className="text-primary text-xl md:text-2xl font-semibold">{title}</h1>
        </div>
        <p className="text-secondary text-xs md:text-base">{description}</p>
      </div>

      <div className="self-end lg:self-auto">{children}</div>
    </div>
  );
}

export default Heading;
