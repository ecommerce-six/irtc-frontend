import { useState } from "react";

import useUser from "./useUser";
import { axiosPrivate } from "../configs/axios";

const useUpdateUser = () => {
  const [error, setError] = useState<string | null>(null);

  const [message, setMessage] = useState<string | null>(null);

  const { setUser } = useUser();

  const useUpdateMe = async (newUser: any) => {
    try {
      const response = await axiosPrivate.post(
        "/users/update",
        JSON.stringify(newUser)
      );

      const newFetchedUser = response.data.data;

      if (response.status === 200) {
        setUser(newFetchedUser);

        setMessage("تغییر پروفایل با موفقیت انجام شد.");
      }
    } catch (err: any) {
      const statusCode = err?.response.status;

      switch (statusCode) {
        case 403:
          setError("شما ورود به سایت ورود نکرده اید.");
          break;
        case 400:
          setError("رمز عبور قبلی صحیح نمیباشد.");
          break;
        default:
          setError(null);
          break;
      }
    }
  };

  return { useUpdateMe, message, error };
};

export default useUpdateUser;
