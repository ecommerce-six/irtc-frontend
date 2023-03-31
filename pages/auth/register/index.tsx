import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user-slice";
import { AuthLayout } from "../../../components/layout";
import RegisterSection from "../../../components/login/register";
import RegisterVerify from "../../../components/login/registerVerify";

import { userType } from "../../../types/user";
import Header from "../../head";

function Register() {
  const dispatch = useDispatch();

  // const [codeSent, setCodeSent] = useState<boolean>(false);

  // const [phoneNumber, setPhoneNumber] = useState<string>("");

  const signupHandler = (number: string) => {
    // setPhoneNumber(number);
    // setCodeSent((prevValue) => !prevValue);

    const user: userType = {
      role: "admin",
      firstName: "ویتو",
      lastName: "محققیان",
      email: "vito.mohagheghian@gmail.com",
      phoneNumber: "09907086274",
      description:
        "پای تو پای در انتخاب مدرسان  خود بسیار سخت گیر است و تمامی دوره های حود را سعی کرده است در بیشتر کیفیت علمی و لوخود بسیار سخت گیر است و تمامی دوره های حود را سعی کرده است در بیشتر کیفیت علمی و لوخود بسیار سخت گیر است و تمامی دوره های حود را سعی کرده است در بیشتر کیفیت علمی و لوخود بسیار سخت گیر است و تمامی دوره های حود را سعی کرده است در بیشتر کیفیت علمی و لو",
    };

    dispatch(userActions.login(user));
  };

  return (
    <main className="w-full grid place-items-center">
      <Header title="IRTC	• ثبت نام" />
      
      {/* {codeSent ? (
        <RegisterVerify loginHandler={loginHandler} phoneNumber={phoneNumber} />
      ) : ( */}
      <RegisterSection submitHandler={signupHandler} />
      {/* )} */}
    </main>
  );
}

Register.PageLayout = AuthLayout;

export default Register;
