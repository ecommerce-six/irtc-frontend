/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import { useFormik } from "formik";
import React, { useState } from "react";

import { Access } from "@/components";
import { UserEditInput } from "@/features/panel/user";

import { styles } from "@/styles";
import { useUser, useUpdateUser } from "@/hooks";

import { AvatarSample } from "@/assets";

// !
type formDataType = {
  id?: number | undefined | null;
  firstName?: string | null;
  lastName?: string | null;
  confirmEmail?: boolean;
  email?: string;
  confirmPhoneNumber?: boolean;
  phoneNumber?: string;
  description?: string | null;
  role?: "user" | "admin";
  profileImage?: string;
  coverImage?: string;
  createdAt?: string;
  password?: string;
  repeatPassword?: string;
};
// !

function EditProfile() {
  const { user } = useUser();

  const { useUpdateMe, message, error } = useUpdateUser();

  const [profile, setProfile] = useState(0);

  const avatars = ["", "", "", ""];

  const profileHandler = (index: number) => {
    setProfile(index);
  };

  const initialValues = {};

  const submitHandler = (values: formDataType) => {
    useUpdateMe(values);
  };

  const formik: any = useFormik({
    initialValues,
    onSubmit: (values: formDataType) => {
      submitHandler(values);
    },
  });

  return (
    // ! removed user ?
    <Access admin author normalUser>
      <title>IRTC • تغییر پروفایل</title>

      <section className="p-5 rounded-xl shadow-dark dark:shadow-darker">
        <form onSubmit={formik.handleSubmit}>
          <UserEditInput
            id="firstName"
            name="firstName"
            title="نام"
            type="text"
            placeHolder="برای مثال احمد"
            value={formik.firstName}
            onChange={formik.handleChange}
            defaultValue={user?.firstName}
          />

          <UserEditInput
            id="lastName"
            name="lastName"
            title="نام خانوادگی"
            type="text"
            placeHolder="برای مثال موسوی"
            value={formik.lastName}
            defaultValue={user?.lastName}
            onChange={formik.handleChange}
          />

          <UserEditInput
            id="phoneNumber"
            name="phoneNumber"
            title="شماره همراه"
            type="text"
            placeHolder="برای مثال *************0990 "
            value={formik.phoneNumber}
            defaultValue={user?.phoneNumber}
            onChange={formik.handleChange}
          />

          <UserEditInput
            id="email"
            name="email"
            title="ایمیل"
            type="text"
            placeHolder="برای مثال ahmad@gamil.com"
            value={formik.email}
            defaultValue={user?.email}
            onChange={formik.handleChange}
          />

          <div className="mt-3 w-full space-y-2">
            <label
              htmlFor={"about"}
              className="block text-secondary dark:text-secondary-dark"
            >
              درباره ی من
            </label>
            <textarea
              id={"description"}
              name={"description"}
              placeholder={"برای مثال یک دانشجو..."}
              value={formik.description}
              defaultValue={user?.description}
              onChange={formik.handleChange}
              className={`p-3 w-full text-sm md:text-base text-secondary dark:text-secondary-dark bg-dim-secondary rounded-xl outline-none min-h-[10rem] max-h-[15rem] dark:placeholder:opacity-25`}
            ></textarea>
          </div>

          <div className="my-2 flex items-center gap-4 flex-wrap">
            {avatars.map((avatar, index) => (
              <div className="w-16 md:w-20 h-16 md:h-20 " key={index}>
                <input
                  type="radio"
                  name="profile"
                  id={`${index}`}
                  checked={index === profile}
                  value={index}
                  className="peer hidden"
                  onChange={() => {
                    profileHandler(index);
                  }}
                />
                <label
                  htmlFor={`${index}`}
                  className="block peer-checked:border-brand peer-checked:border-2 rounded-xl cursor-pointer"
                >
                  <Image src={AvatarSample} alt="" className="rounded-xl" />
                </label>
              </div>
            ))}
          </div>

          <UserEditInput
            id="password"
            name="password"
            title="پسورد"
            type={"password"}
            placeHolder="برای مثال *************0990 "
            value={formik.password}
            onChange={(e: any) => {
              formik.handleChange(e);
            }}
          />

          <UserEditInput
            id="oldPassword"
            name="oldPassword"
            title="پسورد قبلی"
            type={"password"}
            placeHolder="برای مثال *************0990 "
            value={formik.oldPassword}
            onChange={formik.handleChange}
          />

          {error && (
            <p className="mt-3 mb-1 p-3 bg-red-100 text-red-500 rounded-md">
              {error}
            </p>
          )}

          {message && (
            <p className="mt-3 mb-1 p-3 bg-green-100 text-green-600 rounded-md">
              {message}
            </p>
          )}

          <button
            className={`${styles.primaryButton} mt-3 py-3 px-10 hover:scale-[1.05]`}
            type="submit"
          >
            اعمال تغییر
          </button>
        </form>
      </section>
    </Access>
  );
}

export default EditProfile;
