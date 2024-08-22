import React from "react";
import Link from "next/link";

import { styles } from "@/styles";

import { LogoIcon } from "@/assets/common";

const LoginAuthLinks = () => {
  return (
    <>
      <Link href={"/"} className="w-20">
        <LogoIcon />
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
