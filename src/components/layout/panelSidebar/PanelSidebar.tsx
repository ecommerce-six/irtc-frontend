"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

import Prompt from "../../Prompt";
import PanelSidebarLink from "./PanelSidebarLink";

import { StoreType } from "@/store";
import { useUser, useLogout } from "@/hooks";

import { AvatarSample } from "@/assets";
import { LogoutIcon } from "@/assets/icons";

function PanelSidebar() {
  const router = useRouter();

  const path = usePathname();

  const logout = useLogout();

  const { user } = useUser();

  const [showPrompt, setShowPrompt] = useState<boolean>(false);

  let role: string = useSelector((state: StoreType) => state.user.user!.role);

  const logoutHandler = async () => {
    await logout();

    router.replace("/");
  };

  const showPromptHandler = () => {
    setShowPrompt((prevValue) => !prevValue);
  };

  const PanelSidebarLinks =
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
            disabled: true,
          },
          {
            path: "/panel/invoice",
            title: "تجارت",
            disabled: true,
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
          // {
          //   path: "/panel/purchased-courses",
          //   title: "دوره ها",
          //   subLink: [{ path: "/panel/purchased-courses", title: "دوره ها خریداری شده" }],
          // },
        ];
  const appsLinks = [
    {
      path: "/panel/users",
      title: "کاربر ها",
      subLink: [
        { path: "/panel/users", title: "همه ی کاربر ها" },
        {
          path: "/panel/users/create",
          title: "ایجاد کاربر",
        },
      ],
    },
  ];

  const contentLinks =
    role === "admin"
      ? [
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
          {
            path: "/panel/courses",
            title: "دوره ها",
            disabled: true,
            subLink: [
              {
                path: "/panel/courses",
                title: "همه ی دوره ها",
                disabled: true,
              },
              {
                path: "/panel/courses/create",
                title: "اضافه کردن دوره",
                disabled: true,
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
    <aside
      className={
        "p-4 bg-background dark:bg-background-dark lg:flex flex-col w-full lg:w-[20rem] h-fit rounded-xl shadow-dark dark:shadow-darker"
      }
    >
      <div className="flex items-center justify-between gap-x-3">
        <Link href={"/panel"}>
          <Image
            src={AvatarSample}
            alt=""
            className="w-14 h-14 rounded-xl border-2 border-brand pointer-events-none"
          />
        </Link>

        <div className="space-y-2 text-sm">
          <h1 className="w-[7.25rem] font-semibold text-primary dark:text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
            {user?.firstName} {user?.lastName}{" "}
            {!(user?.firstName || user?.lastName) && user?.phoneNumber}
          </h1>

          {user?.firstName && user?.lastName && (
            <p className="text-secondary dark:text-secondary-dark">
              {user?.phoneNumber}
            </p>
          )}
        </div>

        <button className="group" onClick={showPromptHandler}>
          <LogoutIcon className="group-hover:fill-brand dark:invert dark:brightness-0" />
        </button>
      </div>

      <div className="mt-4 space-y-1">
        {PanelSidebarLinks.map((item, index) => (
          <PanelSidebarLink {...item} key={index} pathname={path} />
        ))}

        {role === "admin" &&
          appsLinks.map((item, index) => (
            <PanelSidebarLink {...item} key={index} pathname={path} />
          ))}

        {role !== "user" &&
          contentLinks.map((item, index) => (
            <PanelSidebarLink {...item} key={index} pathname={path} />
          ))}
      </div>

      {showPrompt && (
        <Prompt
          submitHandler={logoutHandler}
          showHandler={showPromptHandler}
          message="آیا مطمنید که میخواهید از حساب خود خارج شوید؟"
        />
      )}
    </aside>
  );
}

export default PanelSidebar;
