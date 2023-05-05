import React from "react";

import Header from "../../head";
import { AuthLayout } from "../../../components/layout";
import RegisterSection from "../../../components/login/register";

import axios from "../../../modules/axios";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import useError from "../../../hooks/useError";
import { registerHandlerType } from "../../../types/register";
import { checkConnectivity } from "../../../modules/checkConnection";

const REGISTER_URL = "/users/create";

function Register() {
  const { getUser } = useUser();

  const { setAuth } = useAuth();

  const { error, setError } = useError();

  const signupHandler = async (user: registerHandlerType) => {
    try {
      const isConnected = await checkConnectivity();

      if (isConnected) {
        const response = await axios.post(REGISTER_URL, JSON.stringify({ ...user }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const token = response.data.data.token;

        if (response?.status === 200) {
          setAuth({ accessToken: token });

          await getUser();

          setError(null);
          return;
        }

        setError(response?.data.message);
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
