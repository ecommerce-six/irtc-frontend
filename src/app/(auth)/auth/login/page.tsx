"use client";

import React from "react";

import axios from "@/configs/axios";
import useUser from "@/hooks/useUser";
import useAuth from "@/hooks/useAuth";
import useError from "@/hooks/useError";
import NumberLogin from "@/components/login/login";
import { checkConnectivity } from "@/utils/checkConnection";

// export const metadata: Metadata = {
//   title: "IRTC	• ورود",
//   description: "IRTC a website for learning trading",
// };

type submitHandlerPropsType = {
  password: string;
  phoneNumber: string;
  rememberMe: boolean;
};

const LOGIN_URL = "/users/login";

function Login() {
  const { getUser } = useUser();

  const { setAuth } = useAuth();

  const { error, setError } = useError();

  const loginHandler = async (body: submitHandlerPropsType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(LOGIN_URL, JSON.stringify(body), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const token = response.data.data.token;

        if (response?.status === 200) {
          setAuth({ accessToken: token, rememberMe: body.rememberMe });

          await getUser();

          setError(null);

          return;
        }

        setError(response?.data.message);
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
  };

  return (
    <main className="w-full grid place-items-center">
      <NumberLogin submitHandler={loginHandler} error={error} />
    </main>
  );
}

export default Login;
