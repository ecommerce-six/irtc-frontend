"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

import { useUser } from "@/hooks";

import { AvatarSample } from "@/assets";
import { CartIcon } from "@/assets/icons/svgs";
import { LogoIcon, LogoText } from "@/assets/common";
import { CloseIcon, MenuIcon } from "@/assets/icons";

import { styles } from "@/styles";
import ToggleAnimate from "../ToggleAnimate";

function Navbar() {
  const path = usePathname();

  const [loggedIn, setLoggedIn] = useState<any>(null);

  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const { user } = useUser();

  React.useEffect(() => {
    setLoggedIn(user);
  }, [user]);

  useEffect(() => {
    setShowNavbar(false);
  }, [path]);

  const showNavbarHandler = () => {
    setShowNavbar((prevValue) => !prevValue);
  };

  const links = [
    { path: "/", title: "خانه" },
    {
      path: "/articles",
      title: "مقاله‌ ها",
    },
    {
      path: "/courses",
      title: "دوره‌ ها",
    },
    {
      path: "/about",
      title: "درباره ما",
    },
    {
      path: "/roadmap",
      title: "نقشه ی راه",
    },
  ];

  return (
    <>
      <nav className="">
        <div
          className={`py-5 flex items-center justify-between ${styles.layout}`}
        >
          <div className="flex items-center gap-x-10">
            <Link href="/" className="flex items-center gap-x-4">
              <Image src={LogoIcon} alt="logo" className="w-12 lg:w-16" />
              <Image src={LogoText} alt="logo" className="w-16 lg:w-24" />
            </Link>

            <ul className="hidden lg:flex items-baseline gap-x-7">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`text-primary hover:text-secondary ${
                      link.path === path &&
                      "after:block after:right-0 after:bottom-0 after:w-full after:h-[.15rem] after:bg-primary after:rounded-lg"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {loggedIn ? (
            <div className="hidden lg:flex items-center gap-x-4">
              {user?.role === "admin" ? (
                <Link
                  href={"/panel"}
                  className="text-primary max-w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {user?.firstName} {user?.lastName}{" "}
                  {!(user?.firstName || user?.lastName) && user?.phoneNumber}
                </Link>
              ) : (
                <Link href="/panel/cart" className="group">
                  <CartIcon className="group-hover:fill-brand transition-all duration-300" />
                </Link>
              )}

              <Link
                href="/panel"
                className="border-2 border-brand rounded-full shadow-dark"
              >
                <Image
                  src={AvatarSample}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-x-4">
              <Link
                href={"/auth/login"}
                className={`${styles.brandButton} px-2`}
              >
                ورود
              </Link>
              <Link
                href={"/auth/register"}
                className={`${styles.primaryButton} px-6 py-2 bg-brand text-background text-sm font-semibold border-2 border-brand rounded-lg hover:scale-[1.05]`}
              >
                ثبت نام
              </Link>
            </div>
          )}

          <button className="lg:hidden" onClick={showNavbarHandler}>
            <Image src={MenuIcon} alt="menu icon" className="w-8" />
          </button>
        </div>
      </nav>

      {showNavbar && (
        <>
          <div
            className="fixed left-0 top-0 h-screen w-full z-10"
            onClick={showNavbarHandler}
          />

          <ToggleAnimate className="navbar" toggle={showNavbar}>
            <div>
              <nav className="py-10 fixed left-0 top-0 h-[100dvh] w-36 flex flex-col items-center justify-between bg-background z-10 shadow-dark">
                <button className="lg:hidden" onClick={showNavbarHandler}>
                  <Image src={CloseIcon} alt="close icon" className="w-9" />
                </button>

                <ul className="flex items-center flex-col gap-y-4">
                  {links.map((link, index) => (
                    <li key={index} className="w-fit">
                      <Link
                        href={link.path}
                        className={`text-primary hover:text-secondary ${
                          link.path === path &&
                          "after:block after:right-0 after:bottom-0 after:w-full after:h-[.15rem] after:bg-primary after:rounded-lg"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {loggedIn ? (
                  <div className="flex items-center gap-x-4">
                    {user?.role !== "admin" && (
                      <Link href="/panel/cart" className="group z-40">
                        <CartIcon className="group-hover:fill-brand transition-all duration-300" />
                      </Link>
                    )}

                    <Link
                      href="/panel"
                      className="border-2 border-brand rounded-full shadow-dark"
                    >
                      <Image
                        src={AvatarSample}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <Link
                      href={"/auth/login"}
                      className={`${styles.brandButton} px-2`}
                    >
                      ورود
                    </Link>
                    <Link
                      href={"/auth/register"}
                      className={`${styles.primaryButton} px-6 py-2 bg-brand text-background text-sm font-semibold border-2 border-brand rounded-lg hover:scale-[1.05]`}
                    >
                      ثبت نام
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </ToggleAnimate>
        </>
      )}
    </>
  );
}

export default Navbar;
