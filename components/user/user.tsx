import React from "react";
import Image from "next/image";

import { userType } from "../../types/user";

import { AvatarSample } from "../../public";

import { styles } from "../../styles";

function User({
  role,
  email,
  lastName,
  firstName,
  coverImage,
  phoneNumber,
  emailVerified,
  phoneNumberVerified,
}: userType) {
  const roles = ["admin", "author", "user"];

  const otherRoles = roles.filter((item) => item !== role);

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

      <form>
        <select name="" id="" className="outline-none border-none w-24">
          <option value={role}>{role}</option>
          {otherRoles.map((item) => (
            <option value={item} key={item} className="text-secondary">
              {item}
            </option>
          ))}
        </select>
      </form>

      <button className={`${styles.primaryButton} py-2 px-4 bg-red-500 border-red-500 hover:scale-[1.05]`}>موقوف کردن</button>
    </div>
  );
}

export default User;
