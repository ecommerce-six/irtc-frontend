import React, { useState } from "react";

import { useFormik } from "formik";
import Input from "../../../../components/login/input";
import { PanelLayout } from "../../../../components/layout";

import { styles } from "../../../../styles";
import Header from "../../../head";

type errors = {
  phoneNumber?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
};

type formDataType = {
  phoneNumber: string;
  email: string;
  password: string;
  repeatPassword: string;
};

function CreateUser() {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const submitHandler = () => {};

  const validateForm = (formData: formDataType) => {
    const errors: errors = {};

    const inValidPhoneNumberID = formData.phoneNumber.slice(0, 2) !== "09";

    const inValidPhoneNumberLength = formData.phoneNumber.length !== 11;

    const includeNumbers = !/^\d+$/.test(formData.phoneNumber);

    const inValidEmail = !formData.email.includes("@");

    const inValidPassword = formData.password.length < 8;

    const includeCapitalLetter = !/[A-Z]/.test(formData.password);

    const includeSmallLetter = !/[a-z]/.test(formData.password);

    function hasNumber(str: string) {
      return /\d/.test(str);
    }

    const inValidRepeatPassword = formData.password !== formData.repeatPassword;

    if (!formData.phoneNumber) {
      errors.phoneNumber = "لطفا فیلد شماره همراه را وارد کنید.";
    }

    if (inValidPhoneNumberID) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    }

    if (includeNumbers) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    }

    if (inValidPhoneNumberLength) {
      errors.phoneNumber = "لطفا شماره همراه کامل وارد کنید.";
    }

    if (inValidEmail) {
      errors.email = "لطفا ایمیل معتبر وارد کنید. :)";
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

    if (inValidRepeatPassword) {
      errors.repeatPassword = "لطفا تکرار پسورد را مانند پسورد وارد کنید. :(";
    }

    return errors;
  };

  const formik: any = useFormik({
    initialValues: {
      phoneNumber: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    validate: validateForm,
    validateOnChange: false,
    onSubmit: (values: formDataType) => {
      submitHandler();
    },
  });

  return (
    <div className="p-4 rounded-xl box-shadow">
      <Header title="IRTC	• ایجاد کاربر" />
      <form onSubmit={formik.handleSubmit} className="w-full">
        <Input
          type="text"
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
          placeHolder="برای مثال ahmad.mamad../..gmail.com"
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

        <Input
          type={showPassword ? "text" : "password"}
          password={true}
          id="repeatPassword"
          title="تکرار پسورد"
          value={formik.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
          placeHolder="برای مثال 12345678"
          showPasswordHandler={showPasswordHandler}
        />

        <ul>
          <li className="my-2 text-red-500">{formik.errors.phoneNumber}</li>
          <li className="my-2 text-red-500">{formik.errors.email}</li>
          <li className="my-2 text-red-500">{formik.errors.password}</li>
          <li className="my-2 text-red-500">{formik.errors.repeatPassword}</li>
        </ul>

        <button className={`${styles.primaryButton} mt-2 w-full py-3 bg-brand rounded-xl`} type="submit">
          ثبت نام
        </button>
      </form>
    </div>
  );
}

CreateUser.PageLayout = PanelLayout;

export default CreateUser;
