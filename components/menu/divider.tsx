import React from "react";

function MenuDivider({ children }: { children: string }) {
  return (
    <div className="py-5 h-[2rem]">
      <span className="block bg-dim-secondary h-[1px] w-full " />
      <h1 className="text-xs mr-5 -mt-2 px-3 text-secondary bg-[#F4F5FA] w-fit">{children}</h1>
    </div>
  );
}

export default MenuDivider;
