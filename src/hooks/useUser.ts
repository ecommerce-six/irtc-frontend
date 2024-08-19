"use client";

import { useDispatch, useSelector } from "react-redux";

import axios from "@/configs/axios";
import { StoreType } from "@/store";
import { userType } from "@/types/user";
import useAxiosPrivate from "./useAxiosPrivate";
import { userActions } from "@/store/user-slice";

const useUser = () => {
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const user: userType | null | undefined = useSelector(
    (state: StoreType) => state.user.user
  );

  const loading: boolean = useSelector(
    (state: StoreType) => state.user.loading
  );

  const setUser = (user: userType) => {
    dispatch(userActions.login(user));
  };

  const setLoading = (loading: boolean) => {
    dispatch(userActions.setLoading(loading));
  };

  const getUser = async (token?: string) => {
    try {
      setLoading(true);

      if (token) {
        const response = await axios.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.data);
      } else {
        const response = await axiosPrivate.get("/users/me");

        setUser(response.data.data);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, setUser, getUser, loading, setLoading };
};

export default useUser;
