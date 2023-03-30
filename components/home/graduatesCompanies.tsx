import React from "react";
import Image from "next/image";

import { TurnAround } from "../../public/badges";
import { ClickUp, DropBox, Elastic, FreshBooks, Github } from "../../public/companies";

function GraduatesCompanies() {
  return (
    <section className="mt-16 py-10 flex flex-col items-center">
      <div className="flex gap-x-2 md:gap-x-4">
        <h1 className="text-base md:text-lg font-semibold">دانش اموختگان ما در اینجا ها کار میکنند</h1>
        <Image src={TurnAround} alt="turn around" className="mt-2 w-12 md:w-24" />
      </div>

      <div className="mt-10 md:mt-0 flex justify-center items-center flex-wrap gap-10">
        <Image src={Github} alt="Github" className="w-36 md:w-44" />
        <Image src={Elastic} alt="Elastic" className="w-36 md:w-44" />
        <Image src={ClickUp} alt="ClickUp" className="w-36 md:w-44" />
        <Image src={DropBox} alt="DropBox" className="w-36 md:w-44" />
        <Image src={FreshBooks} alt="FreshBooks" className="w-36 md:w-44" />
      </div>
    </section>
  );
}

export default GraduatesCompanies;
