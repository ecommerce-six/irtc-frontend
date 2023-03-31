import React from "react";
import Link from "next/link";
import Image from "next/image";

import Input from "./input";
import { useFormik } from "formik";

import { styles } from "../../styles";

import { LogoIcon } from "../../public/common";


type props = {
  phoneNumber: string;
  loginHandler: (code: number) => void;
};

type errors = {
  verifyCode?: string;
};

type formDataType = {
  verifyCode: number;
};

function RegisterVerify({ phoneNumber, loginHandler }: props) {
  const validateEmployee = (empData: formDataType) => {
    const errors: errors = {};

    const inValidVerifyCode = empData.verifyCode.toString().length !== 5;

    if (!empData.verifyCode) {
      errors.verifyCode = "لطفا فیلد کد تایید را وارد کنید.";
    } else if (inValidVerifyCode) {
      errors.verifyCode = "لطفا کد تایید صحیح را وارد کنید.";
    }

    return errors;
  };

  const formik: any = useFormik({
    initialValues: {
      verifyCode: 0,
    },
    validate: validateEmployee,
    onSubmit: (values: formDataType) => {
      loginHandler(values.verifyCode);
    },
  });

  return (
    <div className="px-6 py-8 my-10 md:my-20 w-full lg:w-[25rem] flex flex-col items-center bg-background rounded-xl box-shadow">
      <Image src={LogoIcon} alt="logo" className="w-16 md:w-32" />

      <div className="mt-8 flex items-center gap-x-4">
        <Link href={"/auth/login"} className={`${styles.secondaryButton} px-6 py-2`}>
          ورود
        </Link>
        <Link
          href={"/auth/register"}
          className={`${styles.primaryButton} px-6 py-2 bg-brand text-background text-sm font-semibold border-2 border-brand rounded-lg`}
        >
          ثبت نام
        </Link>
      </div>

      <h1 className="mt-6 text-primary text-lg md:text-xl font-bold">پیامک های خود را چک کنید</h1>

      <p className="px-2 mt-4 text-secondary text-sm md:text-base text-center">
        کد 5 رقمی به شماره {phoneNumber} ارسال شد.
      </p>

      <form className="w-full" onSubmit={formik.handleSubmit}>
        <Input
          id="verifyCode"
          type="number"
          title="کد تایید"
          maxlength={5}
          value={formik.verifyCode}
          onChange={formik.handleChange}
          placeHolder="برای مثال 12345"
        />

        <p className="my-2 text-red-500">{formik.errors.verifyCode}</p>

        <button className={`${styles.primaryButton} mt-4 w-full py-3 bg-brand rounded-xl`} type="submit">
          ورود
        </button>
      </form>
    </div>
  );
}

export default RegisterVerify;
