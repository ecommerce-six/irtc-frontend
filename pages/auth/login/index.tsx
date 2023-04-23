import React from "react";

import Header from "../../head";
import axios from "../../../modules/axios";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import useError from "../../../hooks/useError";
import { AuthLayout } from "../../../components/layout";
import NumberLogin from "../../../components/login/login";
import { checkConnectivity } from "../../../modules/checkConnection";

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
        });

        if (response?.status === 200) {
          setAuth({ accessToken: response.data.data.token, rememberMe: body.rememberMe });

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
      }
      setError("ورود به مشکل خورد :(");
    }
  };

  return (
    <main className="w-full grid place-items-center">
      <Header title="IRTC	• ورود" />
      {/* {codeSent ? (
        <LoginVerify loginHandler={loginHandler} phoneNumber={phoneNumber} />
      ) : ( */}
      <NumberLogin submitHandler={loginHandler} error={error} />
      {/* )} */}
    </main>
  );
}

Login.PageLayout = AuthLayout;

export default Login;
