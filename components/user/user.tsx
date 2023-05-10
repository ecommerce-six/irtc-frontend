import React, { useState } from "react";
import Image from "next/image";

import { AvatarSample } from "../../public";

import { styles } from "../../styles";
import { userType } from "../../types/user";
import { axiosPrivate } from "../../modules/axios";
import { checkConnectivity } from "../../modules/checkConnection";

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
  const [roleState, setRoleState] = useState<"admin" | "user" | string>(role);

  const roles = ["admin", "user"];

  const otherRoles = roles.filter((item) => item !== role);

  const roleHandler = (e: any) => {
    setRoleState(e.target.value);
  };

  const userChangeHandler = async (e: any) => {
    e.preventDefault();

    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const body = { id: id, role: roleState };

        const response = await axiosPrivate.post(USER_UPDATE_ADMIN, JSON.stringify(body), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        // if (response?.status === 200) {
        //   return;
        // }

        // ! no error for not selected genders like animal

        // setError(response?.data.message);
      }
    } catch (err: any) {
      console.log(err);
      // if (!err?.response) {
      //   setError("خطا در ارتباط با سرور");
      // } else if (err.response.status === 400) {
      //   setError("فرمت اطلاعات وارد شده درست نیست. :(");
      // } else if (err.response.status === 409) {
      //   setError("شماره یا ایمیل قبلا استفاده شده");
      // } else if (err.response.status === 500 || err.response.status === 502) {
      //   setError("خطا در ارتباط با سرور");
      // } else {
      //   setError("ثبت نام کاربر به مشکل برخورد");
      // }
    }
  };

  return (
    <div className="pb-5 flex items-center gap-4 justify-between flex-wrap border-b border-dim-secondary">
      <Image
        src={AvatarSample}
        alt={`${firstName} ${lastName}`}
        className="w-14 h-14 rounded-xl border-2 border-brand"
      />

      <h1 className="font-medium">
        {firstName} {lastName}
      </h1>

      <h2 className={`py-1 px-2 rounded-full ${phoneNumberVerified && "text-sm text-green-500 bg-green-200"}`}>
        {phoneNumber}
      </h2>

      <h2 className={`py-1 px-2 rounded-full ${emailVerified && "text-sm text-green-500 bg-green-200"}`}>{email}</h2>

      <form onChange={userChangeHandler}>
        <select name="role" className="outline-none border-none w-24" onChange={roleHandler}>
          <option value={role}>{role}</option>

          {otherRoles.map((item) => (
            <option value={item} key={item} className="text-secondary">
              {item}
            </option>
          ))}
        </select>
      </form>

      <button className={`${styles.primaryButton} py-2 px-4 bg-red-500 border-red-500 hover:scale-[1.05]`}>
        موقوف کردن
      </button>
    </div>
  );
}

export default User;
