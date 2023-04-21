import React from "react";

import Header from "../../head";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user-slice";
import { AuthLayout } from "../../../components/layout";
import NumberLogin from "../../../components/login/login";
// import LoginVerify from "@/app/components/login/loginVerify";

import { userType } from "../../../types/user";

type formDataType = {
  password: string;
  phoneNumber: string;
};

function Login() {
  const dispatch = useDispatch();

  // const [codeSent, setCodeSent] = useState<boolean>(false);

  // const [phoneNumber, setPhoneNumber] = useState<string>("");

  const loginHandler = ({ phoneNumber, password }: formDataType) => {
    // setPhoneNumber(number);
    // setCodeSent((prevValue) => !prevValue)

    // dispatch(userActions.login(user));
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
