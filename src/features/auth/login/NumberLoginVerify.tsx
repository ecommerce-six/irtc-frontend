import React from "react";
import { useFormik } from "formik";

import { Input } from "@/components";
import LoginAuthLinks from "./LoginAuthLinks";

import { styles } from "@/styles";

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

function NumberLoginVerify({ phoneNumber, loginHandler }: props) {
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
    <div className="px-6 py-8 my-10 md:my-20 w-full lg:w-[25rem] flex flex-col items-center bg-background dark:bg-background-dark rounded-xl shadow-dark dark:shadow-darker">
      <LoginAuthLinks />

      <h1 className="mt-6 text-primary dark:text-primary-dark text-lg md:text-xl font-bold">
        پیامک های خود را چک کنید
      </h1>

      <p className="px-2 mt-4 text-secondary dark:text-secondary-dark text-sm md:text-base text-center">
        کد 5 رقمی به شماره {phoneNumber} ارسال شد.
      </p>

      <form className="w-full" onSubmit={formik.handleSubmit}>
        <Input
          id="verifyCode"
          type="number"
          title="کد تایید"
          pattern="[0-9]{5}"
          value={formik.verifyCode}
          onChange={formik.handleChange}
          placeHolder="برای مثال 12345"
        />

        <p className="my-2 text-red-500">{formik.errors.verifyCode}</p>

        <button
          className={`${styles.primaryButton} mt-4 w-full py-3 bg-brand rounded-xl hover:scale-[1.05]`}
          type="submit"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

export default NumberLoginVerify;
