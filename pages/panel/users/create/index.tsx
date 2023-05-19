import React, { useState } from "react";

import Header from "../../../head";
import { useFormik } from "formik";
import { styles } from "../../../../styles";
import Input from "../../../../components/login/input";
import { userGenderType } from "../../../../types/user";
``;
import { axiosPrivate } from "../../../../modules/axios";
import { PanelLayout } from "../../../../components/layout";
import { checkConnectivity } from "../../../../modules/checkConnection";

type errors = {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  repeatPassword?: string;
};

type formDataType = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  repeatPassword?: string;
  gender: userGenderType;
};

const CREATE_URL = "/users/create";

function CreateUser() {
  const [gender, setGender] = useState<userGenderType>("male");

  const [error, setError] = useState<string | null>(null);

  const [message, setMessage] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const genderHandler = (e: any) => {
    setGender(e.target.id);
  };

  const submitHandler = async (user: formDataType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        console.log(user);
        const response = await axiosPrivate.post(CREATE_URL, JSON.stringify({ ...user }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        if (response?.status === 200) {
          setError(null);

          setMessage("کاربر با موفقیت ایجاد شد :)");
          return;
        }

        setError(response?.data.message);
      }
    } catch (err: any) {
      if (!err?.response) {
        setError("خطا در ارتباط با سرور");
      } else if (err.response.status === 400) {
        setError("فرمت اطلاعات وارد شده درست نیست. :(");
      } else if (err.response.status === 409) {
        setError("شماره یا ایمیل قبلا استفاده شده");
      } else if (err.response.status === 500 || err.response.status === 502) {
        setError("خطا در ارتباط با سرور");
      } else {
        setError("ثبت نام کاربر به مشکل برخورد");
      }
    }
  };

  const validateForm = (formData: formDataType) => {
    const errors: errors = {};

    const inValidPhoneNumberID = formData.phoneNumber.slice(0, 2) !== "09";

    const inValidPhoneNumberLength = formData.phoneNumber.length !== 11;

    const includeNumbers = !/^\d+$/.test(formData.phoneNumber);

    const inValidEmail = !formData.email.includes("@");

    const inValidPassword = formData.password.length < 8;

    const includeCapitalLetter = !/[A-Z]/.test(formData.password);

    const includeSmallLetter = !/[a-z]/.test(formData.password);

    const inValidName = !formData.firstName || !formData.lastName;

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

    if (inValidName) {
      errors.name = "لطفا نام و نام خانوادگی را وارد کنید :(.";
    }

    return errors;
  };

  const formik: any = useFormik({
    initialValues: {
      phoneNumber: "",
      email: "",
      lastName: "",
      password: "",
      firstName: "",
      gender: gender,
      repeatPassword: "",
    },

    validate: validateForm,
    validateOnChange: false,
    onSubmit: (values: formDataType) => {
      const user = {
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        gender: gender,
        firstName: values.firstName,
        lastName: values.lastName,
      };

      submitHandler(user);
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
          placeHolder="برای مثال ahmad.mamady@gmail.com"
        />

        <Input
          type="text"
          id="firstName"
          title="نام"
          value={formik.firstName}
          onChange={formik.handleChange}
          error={formik.errors.name}
          placeHolder="برای مثال احمد"
        />

        <Input
          type="text"
          id="lastName"
          title="نام خانوادگی"
          value={formik.lastName}
          onChange={formik.handleChange}
          error={formik.errors.name}
          placeHolder="برای مثال احمدی"
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

        <div className="my-2 space-y-2">
          <p className="block text-secondary">جنسیت:</p>

          <div className="flex items-center gap-x-4 justify-start sm:gap-x-3 text-xs lg:text-sm">
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

        <ul>
          <li className="my-2 text-red-500">{formik.errors.phoneNumber}</li>
          <li className="my-2 text-red-500">{formik.errors.email}</li>
          <li className="my-2 text-red-500">{formik.errors.name}</li>
          <li className="my-2 text-red-500">{formik.errors.password}</li>
          <li className="my-2 text-red-500">{formik.errors.repeatPassword}</li>
        </ul>

        {error && <p className="mt-5 mb-1 p-3 bg-red-100 text-red-500 rounded-md">{error}</p>}

        {message && <p className="mt-3 mb-1 p-3 bg-green-100 text-green-600 rounded-md">{message}</p>}

        <button
          className={`${styles.primaryButton} mt-3 w-full py-3 bg-brand rounded-xl hover:scale-[1.05]`}
          type="submit"
        >
          ثبت نام کاربر
        </button>
      </form>
    </div>
  );
}

CreateUser.PageLayout = PanelLayout;

export default CreateUser;
