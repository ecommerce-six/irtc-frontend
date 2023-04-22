import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { useFormik } from "formik";

import Input from "./input";
import { styles } from "../../styles";

import { LogoIcon } from "../../public/common";

type submitHandlerPropsType = {
  password: string;
  phoneNumber: string;
  rememberMe: boolean;
};

type props = { error: string | null; submitHandler: (body: submitHandlerPropsType) => void };

type errors = {
  password?: string;
  phoneNumber?: string;
};

type formDataType = {
  password: string;
  phoneNumber: string;
};

function NumberLogin({ submitHandler, error }: props) {
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const validateForm = (formData: formDataType) => {
    const errors: errors = {};

    const inValidPhoneNumberID = formData.phoneNumber.slice(0, 2) !== "09";

    const inValidPhoneNumberLength = formData.phoneNumber.length !== 11;

    const inValidPassword = formData.password.length < 8;

    const includeCapitalLetter = !/[A-Z]/.test(formData.password);

    const includeSmallLetter = !/[a-z]/.test(formData.password);

    if (!formData.phoneNumber) {
      errors.phoneNumber = "لطفا فیلد شماره همراه را وارد کنید.";
    } else if (inValidPhoneNumberID) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    } else if (inValidPhoneNumberLength) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    }

    if (inValidPassword) {
      errors.password = "لطفا پسورد انتخابی حداقل 8 کاراکتر باشد :)";
    }

    if (includeCapitalLetter) {
      errors.password = "لطفا پسورد انتخابی حداقل دارای یک حروف بزرگ لاتین باشد :)";
    }

    if (includeSmallLetter) {
      errors.password = "لطفا پسورد انتخابی حداقل دارای یک حروف کوچک لاتین باشد :)";
    }

    return errors;
  };

  const formik: any = useFormik({
    initialValues: {
      password: "",
      phoneNumber: "",
    },
    validate: validateForm,
    validateOnChange: false,
    onSubmit: (values: formDataType) => {
      const submitValues = {
        password: values.password,
        phoneNumber: values.phoneNumber,
        rememberMe: rememberMe,
      };

      submitHandler(submitValues);
    },
  });

  const rememberMeHandler = (e: any) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="px-6 py-8 my-10 md:my-20 w-full lg:w-[25rem] flex flex-col items-center bg-background rounded-xl box-shadow">
      <Link href={"/"}>
        <Image src={LogoIcon} alt="logo" className="w-16 md:w-32" />
      </Link>

      <div className="mt-8 flex items-center gap-x-4">
        <Link href={"/auth/login"} className={`${styles.secondaryButton} px-6 py-2 hover:bg-brand `}>
          ورود
        </Link>
        <Link
          href={"/auth/register"}
          className={`${styles.primaryButton} px-6 py-2 bg-brand text-background text-sm font-semibold border-2 border-brand rounded-lg hover:scale-[1.05]`}
        >
          ثبت نام
        </Link>
      </div>

      <h1 className="mt-6 text-primary text-xl md:text-2xl font-bold">خوش برگشتی</h1>

      <p className="px-2 mt-4 text-secondary text-sm md:text-base text-center">
        به خونه خوش اومدی! اگه عضو مجموعه هستی، وارد شو
      </p>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <Input
          type="text"
          maxlength={11}
          id="phoneNumber"
          title="شماره همراه"
          pattern="09[0-9]{9}"
          value={formik.phoneNumber}
          onChange={formik.handleChange}
          error={formik.errors.phoneNumber}
          placeHolder="برای مثال **********0990"
        />

        <Input
          type={showPassword ? "text" : "password"}
          password={true}
          id="password"
          title="پسورد"
          value={formik.phoneNumber}
          error={formik.errors.password}
          onChange={formik.handleChange}
          placeHolder="برای مثال 12345678"
          showPasswordHandler={showPasswordHandler}
        />

        <div className="mt-2 flex items-center gap-x-2">
          <input
            type="checkbox"
            id="free"
            className="w-4 h-4 !bg-dim-secondary accent-brand"
            onChange={rememberMeHandler}
          />
          <label htmlFor="free" className="text-md text-secondary">
            مرا به خاطر بسپار :)
          </label>
        </div>

        <ul>
          <li className="my-2 text-red-500">{formik.errors.phoneNumber}</li>
          <li className="my-2 text-red-500">{formik.errors.password}</li>
        </ul>

        {error && <p className="mt-3 mb-1 p-3 bg-red-100 text-red-500 rounded-md">{error}</p>}

        <button
          className={`${styles.primaryButton} mt-2 w-full py-3 bg-brand rounded-xl hover:scale-[1.05]`}
          type="submit"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

export default NumberLogin;
