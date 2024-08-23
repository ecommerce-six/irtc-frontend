"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { NumberLogin, NumberLoginVerify } from "@/features/auth";

import axios from "@/configs/axios";
import { useUser, useAuth, useError } from "@/hooks";
import { checkConnectivity } from "@/utils/checkConnection";

type submitHandlerPropsType = {
  password: string;
  phoneNumber: string;
  rememberMe: boolean;
};

const LOGIN_URL = "/users/login";

function Login() {
  const router = useRouter();
  const { setAuth } = useAuth();
  const { user, getUser } = useUser();
  const { error, setError } = useError();
  const [loading, setLoading] = useState<boolean>(false);

  const loginHandler = async (body: submitHandlerPropsType) => {
    try {
      setLoading(true);
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(LOGIN_URL, JSON.stringify(body), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const token = response.data.data.token;

        if (response?.status === 200) {
          setError(null);

          setAuth({ accessToken: token, rememberMe: body.rememberMe });

          await getUser(token);

          if (user?.id) router.push("/");

          setLoading(false);
          return;
        }

        setError(response?.data.message);
      } else {
        setError("خطا در اتصال به اینترنت");
      }
    } catch (err: any) {
      if (!err?.response) {
        setError("خطا در ارتباط با سرور");
      } else if (err.response?.status === 401) {
        setError("شماره یا رمز اشتباه هست :)");
      } else if (err.response?.status === 404) {
        setError("کاربری با این شماره پیدا نشد :)");
      } else {
        setError("ورود به مشکل خورد :(");
      }
    }
    setLoading(false);
  };

  return (
    <main className="w-full grid place-items-center">
      <title>IRTC • ورود</title>

      {/* {codeSent ? ( */}
      {/* <NumberLoginVerify loginHandler={() => {}} phoneNumber={"09907086274"} /> */}
      {/* ) : ( */}
      <NumberLogin
        error={error}
        loading={loading}
        submitHandler={loginHandler}
      />
      {/* )} */}
    </main>
  );
}

export default Login;
