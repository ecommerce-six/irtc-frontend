import { useSelector, useDispatch } from "react-redux";

import { StoreType } from "../store";
import { authActions } from "../store/auth-slice";

const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: StoreType) => state.auth);

  const setAuth = (accessToken: string) => {
    dispatch(authActions.setAuth(accessToken));
  };

  return [auth, setAuth] as const;
};

export default useAuth;
