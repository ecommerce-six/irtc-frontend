import { useDispatch, useSelector } from "react-redux";

import { StoreType } from "../store";
import { userType } from "../types/user";
import { userActions } from "../store/user-slice";
import useAxiosPrivate from "./useAxiosPrivate";

const useUser = () => {
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const user = useSelector((state: StoreType) => state.user.user);

  const setUser = (user: userType) => {
    dispatch(userActions.login(user));
  };

  const getUser = async () => {
    const response = await axiosPrivate.get("/users/me");


    
    setUser(response.data.data)
  };

  return { user, setUser, getUser };
};

export default useUser;
