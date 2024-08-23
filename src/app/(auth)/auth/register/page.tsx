"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { RegisterSection, RegisterVerify } from "@/features/auth";

import axios from "@/configs/axios";
import { useUser, useAuth, useError } from "@/hooks";
import { registerHandlerType } from "@/types/register";
import { checkConnectivity } from "@/utils/checkConnection";

const REGISTER_URL = "/users/register";

function Register() {
  const router = useRouter();
  const { setAuth } = useAuth();
  const { user, getUser } = useUser();
  const { error, setError } = useError();

  const signUpHandler = async (body: registerHandlerType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(
          REGISTER_URL,
          JSON.stringify({ ...body }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        const token = response.data.data.token;

        if (response?.status === 200) {
          setAuth({ accessToken: token, rememberMe: body.rememberMe });
          await getUser(token);

          setError(null);

          if (user?.id) router.push("/");

          return;
        }

        setError(response?.data.message);
      } else {
        setError("خطا در ارتباط با اسنترنت.");
      }
    } catch (err: any) {
      if (!err?.response) {
        setError("خطا در ارتباط با سرور");
      } else if (err.response?.status === 409) {
        setError("شماره یا ایمیل قبلا استفاده وارد شده");
      } else {
        setError("ثبت نام به مشکل برخورد");
      }
    }
  };

  return (
    <main className="w-full grid place-items-center">
      <title>IRTC • ثبت نام</title>

      {/* {codeSent ? ( */}
      {/* <RegisterVerify loginHandler={() => {}} phoneNumber={"09907086274"} /> */}
      {/* ) : ( */}
      <RegisterSection submitHandler={signUpHandler} error={error} />
      {/* )} */}
    </main>
  );
}

export default Register;
``;
