import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MenuDivider from "./divider";
import DashboardLink from "./dashboardLink";

import { LogoIcon, LogoText } from "../../public/common";

function Menu() {
  const path = usePathname();

  let role: string = "admin";

  const toggleMenu = true;

  const toggleMenuHandler = () => {
    // dispatch(panelActions.toggleMenu());
  };

  const dashboardLinks =
    role === "admin"
      ? [
          {
            path: "/panel",
            title: "پروفایل",
            subLink: [
              { path: "/panel", title: "پروفایل" },
              { path: "/panel/edit", title: "تغییر پروفایل" },
            ],
          },
          {
            path: "/panel/analytics",
            title: "تحلیل و تجزیه",
          },
          {
            path: "/panel/invoice",
            title: "تجارت",
          },
        ]
      : [
          {
            path: "/panel",
            title: "پروفایل",
            subLink: [
              { path: "/panel", title: "پروفایل" },
              { path: "/panel/edit", title: "تغییر پروفایل" },
              { path: "/panel/cart", title: "سبد خرید" },
            ],
          },
          {
            path: "/panel/purchased-courses",
            title: "دوره ها",
            subLink: [{ path: "/panel/purchased-courses", title: "دوره ها خریداری شده" }],
          },
        ];
  const appsLinks = [
    {
      path: "/panel/users",
      title: "کاربر ها",
      subLink: [
        { path: "/panel/users", title: "همه ی کاربر ها" },
        {
          path: "/panel/roles",
          title: "مقام و دسترسی ها",
        },
      ],
    },
  ];

  const contentLinks =
    role === "admin"
      ? [
          {
            path: "/panel/courses",
            title: "دوره ها",
            subLink: [
              {
                path: "/panel/courses",
                title: "همه ی دوره ها",
              },
              {
                path: "/panel/courses/create",
                title: "اضافه کردن دوره",
              },
            ],
          },
          {
            path: "/panel/articles",
            title: "مقاله ها",
            subLink: [
              {
                path: "/panel/articles",
                title: "همه ی مقاله ها",
              },
              {
                path: "/panel/articles/mine",
                title: "مقاله های من",
              },
              {
                path: "/panel/articles/create",
                title: "ایجاد کردن مقاله",
              },
            ],
          },
        ]
      : [
          {
            path: "/panel/articles/mine",
            title: "مقاله ها",
            subLink: [
              {
                path: "/panel/articles/mine",
                title: "مقاله های من",
              },
              {
                path: "/panel/articles/create",
                title: "ایجاد کردن مقاله",
              },
            ],
          },
        ];

  return (
    <>
      <aside
        className={`${
          toggleMenu ? "block" : "hidden"
        } fixed pt-2 pl-2 bg-background lg:bg-transparent lg:flex flex-col right-0 top-0 h-screen w-[14rem] z-20`}
      >
        <div className="py-4 flex items-center justify-evenly">
          <Link href="/">
            <Image src={LogoIcon} alt="IRTC Logo" className="w-14" />
          </Link>

          <Link href="/">
            <Image src={LogoText} alt="IRTC Logo" className="w-24" />
          </Link>
        </div>

        <div className="mt-3 space-y-1">
          {dashboardLinks.map((item, index) => (
            <DashboardLink {...item} key={index} pathname={path} />
          ))}

          {role === "admin" && appsLinks.map((item, index) => <DashboardLink {...item} key={index} pathname={path} />)}

          {role !== "user" &&
            contentLinks.map((item, index) => <DashboardLink {...item} key={index} pathname={path} />)}
        </div>
      </aside>
      <button
        className={`fixed top-0 left-0 ${toggleMenu ? "block lg:hidden" : "hidden"} !lg:hidden h-screen w-full z-10`}
        onClick={toggleMenuHandler}
      />
    </>
  );
}

export default Menu;
