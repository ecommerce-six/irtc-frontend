import Link from "next/link";
import React, { useState, useEffect } from "react";

import { ArrowIcon, CircleIcon } from "@/assets/icons";

type subLink = {
  path: string;
  title: string;
  disabled?: boolean;
};

type props = {
  path: string;
  title: string;
  disabled?: boolean;
  subLink?: subLink[];
  pathname: string | null;
};

function PanelSidebarLink({ path, title, subLink, pathname, disabled }: props) {
  const [open, setOpen] = useState(false);

  const active = pathname === path;

  const openDropDownHandler = (e: any) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (active) {
      setOpen((prevValue) => !prevValue);
    }
  };

  useEffect(() => {
    if (active) {
      setOpen(true);
      return;
    }

    if (subLink) {
      const activeSubLinks = subLink.filter((item) => item.path === pathname);

      if (activeSubLinks.length > 0) {
        setOpen(true);
        return;
      }
    }

    setOpen(false);
  }, [active, pathname, subLink]);

  return (
    <div
      className={`${!open && "h-12"} overflow-hidden ${disabled && "hidden"}`}
    >
      <Link
        href={path}
        onClick={openDropDownHandler}
        className={`px-3 ${
          active ? "py-3 bg-brand" : "py-3"
        } w-full flex items-center justify-between rounded-xl ${
          disabled && "cursor-default"
        }`}
      >
        <div className="flex items-center gap-x-2">
          <CircleIcon active={active} />

          <span
            className={`${
              active ? "text-background" : "text-primary dark:text-primary-dark"
            } text-base !leading-none`}
          >
            {title}
          </span>
        </div>
        {subLink && (
          <button className={`self-end ${open && "rotate-90"}`}>
            <ArrowIcon active={active} />
          </button>
        )}
      </Link>

      {subLink &&
        subLink.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "/" : item.path}
            className={`px-3 pr-8 pt-3 py-2 ${
              item.path === pathname
                ? "text-brand font-semibold"
                : "text-secondary dark:text-secondary-dark opacity-75"
            } w-full text-sm flex items-center gap-x-2 rounded-tl-xl rounded-bl-xl ${
              item.disabled && "cursor-default"
            }`}
            onClick={(e: any) => {
              if (disabled) {
                e.preventDefault(0);
              }
            }}
          >
            {item.title}
          </Link>
        ))}
    </div>
  );
}

export default PanelSidebarLink;
