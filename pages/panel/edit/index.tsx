import Image from "next/image";
import React, { useState } from "react";

import Header from "../../head";
import { useFormik } from "formik";
import Access from "../../../components/access";
import Input from "../../../components/user/input";
import { PanelLayout } from "../../../components/layout";

import { AvatarSample } from "../../../public";

import { styles } from "../../../styles";

type errors = {
  phoneNumber?: string;
  email?: string | null;
  password?: string;
  repeatPassword?: string;
};

type formDataType = {
  phoneNumber: string;
  email?: string | null;
  password: string;
  repeatPassword: string;
};

function EditProfile() {
  const [profile, setProfile] = useState(0);

  const avatars = ["", "", "", ""];

  const profileHandler = (index: number) => {
    setProfile(index);
  };

  const initialValues: formDataType = {
    phoneNumber: "09900000000",
    email: null,
    password: "",
    repeatPassword: "",
  };

  const validateForm = (formData: formDataType) => {
    const errors: errors = {};

    const inValidPhoneNumberID = formData.phoneNumber.slice(0, 2) !== "09";

    const inValidPhoneNumberLength = formData.phoneNumber.length !== 11;

    const inValidPassword = formData.password.length < 8;

    const includeCapitalLetter = !/[A-Z]/.test(formData.password);

    const includeSmallLetter = !/[a-z]/.test(formData.password);

    const inValidRepeatPassword = formData.password !== formData.repeatPassword;

    if (!formData.phoneNumber) {
      errors.phoneNumber = "لطفا فیلد شماره همراه را وارد کنید.";
    } else if (inValidPhoneNumberID) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    } else if (inValidPhoneNumberLength) {
      errors.phoneNumber = "لطفا شماره همراه معتبر وارد کنید.";
    }

    return errors;
  };

  const submitHandler = (values: formDataType) => {};

  const formik: any = useFormik({
    initialValues,
    validate: validateForm,
    validateOnChange: false,
    onSubmit: (values: formDataType) => {
      submitHandler(values);
    },
  });

  return (
    <Access admin author user>
      <Header title="IRTC	• تغییر پروفایل" />

      <section className="p-5 rounded-xl box-shadow">
        <form onSubmit={formik.handleSubmit}>
          <Input id="name" name="name" title="نام" type="text" placeHolder="برای مثال احمد" />

          <Input id="name" name="name" title="نام خانوادگی" type="text" placeHolder="برای مثال موسوی" />

          <Input id="position" name="position" title="عنوان" type="text" placeHolder="برای مثال دانش جو" />

          <Input
            id="position"
            name="phoneNumber"
            title="شماره همراه"
            type="text"
            placeHolder="برای مثال *************0990 "
          />

          <Input id="position" name="email" title="ایمیل" type="text" placeHolder="برای مثال *************0990 " />

          <div className="mt-3 w-full space-y-2">
            <label htmlFor={"about"} className="block text-secondary">
              درباره ی من
            </label>
            <textarea
              id={"about"}
              name={"about"}
              placeholder={"برای مثال یک دانشجو..."}
              className={`p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary rounded-xl outline-none min-h-[10rem] max-h-[15rem]`}
            ></textarea>
          </div>

          <div className="my-2 flex items-center gap-4 flex-wrap">
            {avatars.map((avatar, index) => (
              <div className="w-16 md:w-20 h-16 md:h-20 " key={index}>
                <input
                  type="radio"
                  name="profile"
                  id={`${index}`}
                  checked={index === profile}
                  value={index}
                  className="peer hidden"
                />
                <label
                  htmlFor={`${index}`}
                  onClick={() => {
                    profileHandler(index);
                  }}
                  className="block peer-checked:border-brand peer-checked:border-2 rounded-xl cursor-pointer"
                >
                  <Image src={AvatarSample} alt="" className="rounded-xl" />
                </label>
              </div>
            ))}
          </div>

          <Input id="position" name="email" title="کد تایید" type="text" placeHolder="برای مثال 12345" />

          <button className={`${styles.primaryButton} mt-3 py-3 px-10 hover:scale-[1.05]`} type="submit">
            اعمال تغییر
          </button>
        </form>
      </section>
    </Access>
  );
}

EditProfile.PageLayout = PanelLayout;

export default EditProfile;
