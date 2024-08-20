import React from "react";
import Image, { StaticImageData } from "next/image";

type ContributorType = {
  name: string;
  profile: string | StaticImageData;
  position: string;
};

function Contributor({ profile, name, position }: ContributorType) {
  return (
    <div className="py-8 px-16 w-[18rem] flex flex-col items-center gap-y-4 rounded-xl shadow-dark dark:shadow-darker">
      <Image
        src={profile}
        alt="profile"
        className="w-32 h-32 rounded-full border-2 border-brand"
      />

      <h2 className="text-brand font-semibold w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {name}
      </h2>

      <p className="text-secondary dark:text-secondary-dark w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {position}
      </p>
    </div>
  );
}

export default Contributor;
