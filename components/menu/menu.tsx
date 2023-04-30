import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import MenuLink from "./link";
import Prompt from "../prompt";
import { StoreType } from "../../store";
import { useSelector } from "react-redux";
import useUser from "../../hooks/useUser";
import { AvatarSample } from "../../public";
import useLogout from "../../hooks/useLogout";
import { LogoutIcon } from "../../public/icons/svgs";

function Menu() {
  const router = useRouter();

  const path = usePathname();

  const logout = useLogout();

  const { user } = useUser();

  const [showPrompt, setShowPrompt] = useState(false);

  let role: string = useSelector((state: StoreType) => state.user.user!.role);

  const logoutHandler = async () => {
    await logout();

    router.replace("/");
  };

  const showPromptHandler = () => {
    setShowPrompt((prevValue) => !prevValue);
  };

  const MenuLinks =
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
          // {
          //   path: "/panel/courses",
          //   title: "دوره ها",
          //   subLink: [
          //     {
          //       path: "/panel/courses",
          //       title: "همه ی دوره ها",
          //     },
          //     {
          //       path: "/panel/courses/create",
          //       title: "اضافه کردن دوره",
          //     },
          //   ],
          // },
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
    <aside className={"p-4 bg-background lg:flex flex-col w-full lg:w-[20rem] h-fit rounded-xl box-shadow"}>
      <div className="flex items-center justify-between gap-x-3">
        <Link href={"/panel"}>
          <Image src={AvatarSample} alt="" className="w-14 h-14 rounded-xl border-2 border-brand" />
        </Link>

        <div className="space-y-2 text-sm">
          <h1 className="w-[7.25rem] font-semibold text-primary overflow-hidden text-ellipsis whitespace-nowrap">
            {user?.firstName} {user?.lastName} {!(user?.firstName || user?.lastName) && user?.phoneNumber}
          </h1>

          <p>{user?.phoneNumber}</p>
        </div>

        <button className="group" onClick={showPromptHandler}>
          <LogoutIcon className="group-hover:fill-brand" />
        </button>
      </div>

      <div className="mt-4 space-y-1">
        {MenuLinks.map((item, index) => (
          <MenuLink {...item} key={index} pathname={path} />
        ))}

        {role === "admin" && appsLinks.map((item, index) => <MenuLink {...item} key={index} pathname={path} />)}

        {role !== "user" && contentLinks.map((item, index) => <MenuLink {...item} key={index} pathname={path} />)}
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

export default Menu;
