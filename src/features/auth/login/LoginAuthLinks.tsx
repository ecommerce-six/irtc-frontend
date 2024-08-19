import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "@/styles";

import { LogoIcon } from "@/assets/common";

const LoginAuthLinks = () => {
  return (
    <>
      <Link href={"/"}>
        <Image src={LogoIcon} alt="logo" className="w-16 md:w-32" />
      </Link>
      <div className="mt-8 flex items-center gap-x-4">
        <Link
          href={"/auth/login"}
          className={`${styles.secondaryButton} px-6 py-2 hover:bg-brand `}
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
    </>
  );
};

export default LoginAuthLinks;
