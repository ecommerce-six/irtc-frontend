import React from "react";

import Header from "../../head";
import { useDispatch } from "react-redux";
import axios from "../../../modules/axios";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import useError from "../../../hooks/useError";
import { AuthLayout } from "../../../components/layout";
import NumberLogin from "../../../components/login/login";
import useRefreshToken from "../../../hooks/useRefreshToken";
import { checkConnectivity } from "../../../modules/checkConnection";

type submitHandlerPropsType = {
  password: string;
  phoneNumber: string;
  rememberMe: boolean;
};

const LOGIN_URL = "/users/login";

function Login() {
  const dispatch = useDispatch();

  const { getUser } = useUser();

  const { setAuth, auth } = useAuth();

  const refresh = useRefreshToken();

  const { error, setError } = useError();

  const loginHandler = async (body: submitHandlerPropsType) => {
    try {
      const isConnected = await checkConnectivity();

      console.log(body);

      if (isConnected) {
        const response = await axios.post(LOGIN_URL, JSON.stringify(body), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        // await dispatch(authActions.setAuth({ accessToken: token, rememberMe: true }));
        const token = response.data.data.token;

        if (response?.status === 200) {
          await setAuth({ accessToken: token });

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
