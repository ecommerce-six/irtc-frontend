"use client";

import { useFormik } from "formik";
import React, { useState } from "react";

import { Input } from "@/components";
import WelcomeMessage from "../WelcomeMessage";
import RegisterAuthLinks from "./RegisterAuthLinks";

import { styles } from "@/styles";
import { userGenderType } from "@/types/user";
import { registerHandlerType } from "@/types/register";

type props = {
  error: string | null;
  submitHandler: (user: registerHandlerType) => void;
};

type errors = {
  email?: string;
  password?: string;
  phoneNumber?: string;
  repeatPassword?: string;
};

type formDataType = {
  email: string;
  password: string;
  phoneNumber: string;
  repeatPassword: string;
  gender: userGenderType;
};

function RegisterSection({ submitHandler, error }: props) {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const [gender, setGender] = useState("male");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  const genderHandler = (e: any) => {
    setGender(e.target.id);
  };

  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
      phoneNumber: "",
      repeatPassword: "",
      gender: "male",
    },
    validate: validateHandler,
    validateOnChange: false,
    onSubmit: (values: formDataType) => {
      const user = {
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        rememberMe: isRememberMeChecked,
        gender: gender,
      };

      submitHandler(user);
    },
  });

  function validateHandler(formData: formDataType) {
    const errors: errors = {};

    const isInvalidPhoneNumberID = formData.phoneNumber.slice(0, 2) !== "09";
    const isInvalidPhoneNumberLength = formData.phoneNumber.length !== 11;
    const containsNonNumeric = !/^\d+$/.test(formData.phoneNumber);
    const isInvalidEmail = !formData.email.includes("@");
    const isInvalidPasswordLength = formData.password.length < 8;
    const lacksCapitalLetter = !/[A-Z]/.test(formData.password);
    const lacksSmallLetter = !/[a-z]/.test(formData.password);
    const isInvalidRepeatPassword =
      formData.password !== formData.repeatPassword;

    if (!formData.phoneNumber) {
      errors.phoneNumber = "لطفا فیلد شماره همراه را وارد کنید.";
    } else if (
      isInvalidPhoneNumberID ||
      containsNonNumeric ||
      isInvalidPhoneNumberLength
    ) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    }

    if (isInvalidEmail) {
      errors.email = "لطفا ایمیل معتبر وارد کنید. :)";
    }

    if (isInvalidPasswordLength) {
      errors.password = "لطفا پسورد انتخابی حداقل 8 کاراکتر باشد :)";
    } else {
      if (lacksCapitalLetter) {
        errors.password =
          "لطفا پسورد انتخابی حداقل دارای یک حروف بزرگ لاتین باشد :)";
      }
      if (lacksSmallLetter) {
        errors.password =
          "لطفا پسورد انتخابی حداقل دارای یک حروف کوچک لاتین باشد :)";
      }
    }

    if (isInvalidRepeatPassword) {
      errors.repeatPassword = "لطفا تکرار پسورد را مانند پسورد وارد کنید. :(";
    }

    return errors;
  }

  const rememberMeHandler = (e: any) => {
    setIsRememberMeChecked(e.target.checked);
  };

  return (
    <div className="px-6 py-8 my-10 md:my-20 w-full lg:w-fit flex flex-col lg:flex-row-reverse items-center gap-x-7 bg-background rounded-xl shadow-dark">
      <div className="flex flex-col items-center">
        <RegisterAuthLinks />

        <WelcomeMessage title="خوش آمدی" />
      </div>

      <form onSubmit={formik.handleSubmit} className="w-full lg:w-[23rem]">
        <Input
          autoComplete={"username"}
          type="text"
          name="phoneNumber"
          maxlength={11}
          id="phoneNumber"
          title="شماره همراه"
          value={formik.phoneNumber}
          onChange={formik.handleChange}
          error={formik.errors.phoneNumber}
          placeHolder="برای مثال **********0990"
        />

        <Input
          type="text"
          id="email"
          title="ایمیل"
          value={formik.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          placeHolder="برای مثال ahmad.avatar@gmail.com"
        />

        <Input
          type={isPasswordVisible ? "text" : "password"}
          autoComplete={"password"}
          name="password"
          password={true}
          id="password"
          title="پسورد"
          value={formik.phoneNumber}
          error={formik.errors.password}
          onChange={formik.handleChange}
          placeHolder="برای مثال 12345678"
          showPasswordHandler={togglePasswordVisibility}
        />

        <Input
          type={isPasswordVisible ? "text" : "password"}
          password={true}
          id="repeatPassword"
          title="تکرار پسورد"
          value={formik.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
          placeHolder="برای مثال 12345678"
          showPasswordHandler={togglePasswordVisibility}
        />

        <div className="my-2 space-y-2">
          <p className="block text-secondary">جنسیت:</p>

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <label
              htmlFor="male"
              className="py-3 px-3 sm:px-5 flex items-center gap-x-2 text-secondary bg-dim-secondary rounded-xl"
            >
              <input
                type="radio"
                name="gender"
                id="male"
                className="accent-brand bg-primary"
                defaultChecked
                onClick={genderHandler}
              />
              <span>مرد 👨</span>
            </label>

            <label
              htmlFor="female"
              className="py-3 px-3 sm:px-5 flex items-center gap-x-2 text-secondary bg-dim-secondary rounded-xl"
            >
              <input
                type="radio"
                name="gender"
                id="female"
                className="accent-brand bg-primary"
                onClick={genderHandler}
              />
              <span>زن 👩</span>
            </label>

            <label
              htmlFor="others"
              className="py-3 px-3 sm:px-5 flex items-center gap-x-2 text-secondary bg-dim-secondary rounded-xl"
            >
              <input
                type="radio"
                name="gender"
                id="others"
                className="accent-brand bg-primary"
                onClick={genderHandler}
              />
              <span>غیره 🎉</span>
            </label>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-x-2">
          <input
            type="checkbox"
            id="free"
            className="w-4 h-4 !bg-dim-secondary accent-brand"
            onChange={rememberMeHandler}
          />
          <label htmlFor="free" className="text-sm sm:text-md text-secondary">
            مرا به خاطر بسپار :)
          </label>
        </div>

        <ul>
          <li className="my-2 text-red-500">{formik.errors.phoneNumber}</li>
          <li className="my-2 text-red-500">{formik.errors.email}</li>
          <li className="my-2 text-red-500">{formik.errors.password}</li>
          <li className="my-2 text-red-500">{formik.errors.repeatPassword}</li>
        </ul>

        {error && (
          <p className="mt-5 mb-1 p-3 bg-red-100 text-red-500 rounded-md">
            {error}
          </p>
        )}

        <button
          className={`${styles.primaryButton} mt-2 w-full py-3 bg-brand rounded-xl hover:scale-[1.05]`}
          // type="submit"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}

export default RegisterSection;
