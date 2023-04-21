import React from "react";

import Header from "../../head";
import axios from "../../../modules/axios";
import useUser from "../../../hooks/useUser";
import useError from "../../../hooks/useError";
import { AuthLayout } from "../../../components/layout";
import NumberLogin from "../../../components/login/login";
import { checkConnectivity } from "../../../modules/checkConnection";

type formDataType = {
  password: string;
  phoneNumber: string;
};

const LOGIN_URL = "/users/login";

function Login() {
  const { setUser } = useUser();

  const { setError } = useError();

  const loginHandler = async (user: formDataType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(LOGIN_URL, JSON.stringify(user), {
          headers: { "Content-Type": "application/json" },
          // ! withCredentials: true,
        });

        console.log(response);

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
      <Header title="IRTC	• ورود" />
      {/* {codeSent ? (
        <LoginVerify loginHandler={loginHandler} phoneNumber={phoneNumber} />
      ) : ( */}
      <NumberLogin submitHandler={loginHandler} />
      {/* )} */}
    </main>
  );
}

Login.PageLayout = AuthLayout;

export default Login;
