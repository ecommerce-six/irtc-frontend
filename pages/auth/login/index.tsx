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

  const { setAuth, auth } = useAuth();

  const { error, setError } = useError();

  const loginHandler = async (body: submitHandlerPropsType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(LOGIN_URL, JSON.stringify(body), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        // const response = await fetch("https://itc.iran.liara.run/users/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   credentials: "include",
        //   body: JSON.stringify(body),
        // }).then((response) => response.json());

        if (response?.status === 200) {
          const token = response.data.data.token;

          setAuth({ accessToken: token, rememberMe: body.rememberMe });

          console.log(auth);
          await getUser();

          setError(null);
          return;
        }

        setError(response?.data.message);
      }
    } catch (err: any) {
      console.log(err, err.response?.status);
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
