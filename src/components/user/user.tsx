import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AvatarSample } from "@/assets";

import { styles } from "@/styles";
import { userType } from "@/types/user";
import { axiosPrivate } from "../../configs/axios";
import { checkConnectivity } from "@/utils/checkConnection";

const USER_UPDATE_ADMIN = "/users/update/admin";

function User({
  id,
  role,
  email,
  lastName,
  firstName,
  coverImage,
  phoneNumber,
  emailVerified,
  phoneNumberVerified,
}: userType) {
  const [message, setMessage] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const roles = ["admin", "user"];

  const otherRoles = roles.filter((item) => item !== role);

  const userChangeHandler = async (role: string) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const body = { id: id, role };

        const response = await axiosPrivate.post(
          USER_UPDATE_ADMIN,
          JSON.stringify(body),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (response?.status === 200) {
          setMessage("کاربر با موفقیت اپدیت شد.");
          return;
        }

        setError(response?.data.message);
      }
    } catch (err: any) {
      const statusCode = err.response?.status;

      if (!err?.response) {
        setError("خطا در ارتباط با سرور");
        return;
      } else if (statusCode === 403) {
        setError("شما سطح دسترسی به این مورد را ندارید");
        return;
      } else if (statusCode === 500 || statusCode === 502) {
        setError("خطا در ارتباط با سرور");
        return;
      }
    }
  };

  const roleHandler = (e: any) => {
    userChangeHandler(e.target.value);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  return (
    <div className="pb-5 flex items-center gap-4 justify-between flex-wrap border-b border-dim-secondary">
      <Image
        src={AvatarSample}
        alt={`${firstName} ${lastName}`}
        className="w-14 h-14 rounded-xl border-2 border-brand"
      />

      <h1 className="font-medium min-w-[10rem] max-w-[12rem] overflow-hidden text-ellipsis text-center">
        {firstName || lastName ? `${firstName} ${lastName}` : "-"}
      </h1>

      <h2
        className={`py-1 px-2 rounded-full ${
          phoneNumberVerified && "text-sm text-green-500 bg-green-200"
        }`}
      >
        {phoneNumber}
      </h2>

      <h2
        className={`py-1 px-2 lg:w-[10rem] text-ellipsis overflow-hidden rounded-full ${
          emailVerified && "text-sm text-green-500 bg-green-200"
        }`}
      >
        {email}
      </h2>

      <form>
        <select
          name="role"
          className="outline-none border-none w-24"
          onChange={roleHandler}
        >
          <option value={role}>{role}</option>

          {otherRoles.map((item) => (
            <option value={item} key={item} className="text-secondary">
              {item}
            </option>
          ))}
        </select>
      </form>

      <button
        className={`${styles.primaryButton} py-2 px-4 bg-red-500 border-red-500 hover:scale-[1.05]`}
      >
        موقوف کردن
      </button>
      {message && (
        <div className="fixed bottom-6 right-6 lg:right-36 p-3 w-[85%] lg:w-[15rem] bg-green-100 text-green-600 text-xs lg:text-sm rounded-md">
          {message}
        </div>
      )}

      {error && (
        <div className="fixed bottom-6 right-6 lg:right-36 p-3 w-[85%] lg:w-[15rem] bg-red-100 text-red-600 text-xs lg:text-sm rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}

export default User;

export function UserLoading() {
  return (
    <div className="pb-5 flex items-center gap-4 justify-between flex-wrap border-b border-dim-secondary">
      <div className="mt-3 w-14 h-14 loading" />

      <div className="mt-3 w-[6rem] lg:w-[8rem] h-[1rem] loading" />

      <div className="mt-3 w-[5rem] lg:w-[8rem] h-[1rem] loading" />

      <div className="mt-3 w-[8rem] lg:w-[14rem] h-[1rem] loading" />

      <div className="mt-3 w-[4rem] lg:w-[5rem] h-[1.5rem] loading" />

      <div className="mt-3 w-[6rem] lg:w-[8rem] h-[2.75rem] loading" />
    </div>
  );
}
