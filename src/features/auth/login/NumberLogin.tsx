"use client";

import { useFormik } from "formik";
import React, { useState } from "react";

import Input from "@/components/input";
import LoginAuthLinks from "./LoginAuthLinks";
import WelcomeMessage from "../WelcomeMessage";

import { styles } from "@/styles";

type submitHandlerPropsType = {
  password: string;
  phoneNumber: string;
  rememberMe: boolean;
};

type errors = {
  password?: string;
  phoneNumber?: string;
};

type formDataType = {
  password: string;
  phoneNumber: string;
};

type props = {
  error: string | null;
  submitHandler: (body: submitHandlerPropsType) => void;
};

function NumberLogin({ submitHandler, error }: props) {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const formik: any = useFormik({
    initialValues: {
      password: "",
      phoneNumber: "",
    },
    validate: validateHandler,
    validateOnChange: false,
    onSubmit: (values: formDataType) => {
      const submitValues = {
        rememberMe: isRememberMeChecked,
        password: values.password,
        phoneNumber: values.phoneNumber,
      };

      submitHandler(submitValues);
    },
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  function validateHandler(formData: formDataType) {
    const errors: errors = {};

    const inValidPhoneNumberID = formData.phoneNumber.slice(0, 2) !== "09";
    const inValidPhoneNumberLength = formData.phoneNumber.length !== 11;

    if (!formData.phoneNumber) {
      errors.phoneNumber = "لطفا فیلد شماره همراه را وارد کنید.";
    } else if (inValidPhoneNumberID) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    } else if (inValidPhoneNumberLength) {
      errors.phoneNumber = "لطفا شماره همراه را کامل وارد کنید.";
    }

    return errors;
  }

  const rememberMeHandler = (e: any) => {
    setIsRememberMeChecked(e.target.checked);
  };

  return (
    <div className="px-6 py-8 my-10 md:my-20 w-full lg:w-[25rem] flex flex-col items-center bg-background rounded-xl shadow-dark">
      <LoginAuthLinks />

      <WelcomeMessage title="خوش برگشتی" />

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
          type={isPasswordVisible ? "text" : "password"}
          password={true}
          id="password"
          title="پسورد"
          value={formik.phoneNumber}
          error={formik.errors.password}
          onChange={formik.handleChange}
          placeHolder="برای مثال 12345678"
          showPasswordHandler={togglePasswordVisibility}
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

        {error && (
          <p className="mt-3 mb-1 p-3 bg-red-100 text-red-500 rounded-md">
            {error}
          </p>
        )}

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
