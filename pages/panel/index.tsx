import React from "react";

import { useDispatch } from "react-redux";

import { userActions } from "../../store/user-slice";

function Panel() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(userActions.login());
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(userActions.logout());
        }}
      >
        logout
      </button>
    </>
  );
}

export default Panel;
