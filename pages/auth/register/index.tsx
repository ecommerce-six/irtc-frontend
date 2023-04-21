import React, { useState } from "react";

import Header from "../../head";
import { AuthLayout } from "../../../components/layout";
import RegisterSection from "../../../components/login/register";

import axios from "../../../modules/axios";
import useUser from "../../../hooks/useUser";
import useError from "../../../hooks/useError";
import { registerHandlerType } from "../../../types/register";
import { checkConnectivity } from "../../../modules/checkConnection";

const REGISTER_URL = "/users/create";

function Register() {
  const { setUser } = useUser();

  const { error, setError } = useError();

  const signupHandler = async (user: registerHandlerType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(REGISTER_URL, JSON.stringify(user), {
          headers: { "Content-Type": "application/json" },
          // ! withCredentials: true,
        });

        response?.status === 201 ? setUser({ ...user, role: "user" }) : setError(response?.data.message);

        setError(null);
      }
    } catch (err: any) {
      if (!err?.response) {
        setError("خطا در ارتباط با سرور");
      } else if (err.response?.status === 409) {
        console.log("af");
        setError("شماره یا ایمیل قبلا استفاده وارد شده");
      } else {
        setError("ثبت نام به مشکل برخورد");
      }
    }
  };

  return (
    <main className="w-full grid place-items-center">
      <Header title="IRTC	• ثبت نام" />

      {/* {codeSent ? (
        <RegisterVerify loginHandler={loginHandler} phoneNumber={phoneNumber} />
      ) : ( */}
      <RegisterSection submitHandler={signupHandler} error={error} />
      {/* )} */}
    </main>
  );
}

Register.PageLayout = AuthLayout;

export default Register;
``;
