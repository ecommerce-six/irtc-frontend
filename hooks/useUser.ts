import { useDispatch, useSelector } from "react-redux";

import { StoreType } from "../store";
import { userType } from "../types/user";
import { userActions } from "../store/user-slice";

const useUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: StoreType) => state.user.user);

  const setUser = (user: userType) => {
    dispatch(userActions.login(user));
  };

  return { user, setUser };
};

export default useUser;
