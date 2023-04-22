import React from "react";

import { CloseEyesIcon, OpenEyesIcon } from "../../public/icons/svgs";

type props = {
  id: string;
  type: string;
  title: string;
  onChange?: any;
  password?: true;
  pattern?: string;
  maxlength?: number;
  minLength?: number;
  placeHolder: string;
  value?: string | number;
  error?: string | undefined;
  showPasswordHandler?: () => void;
};

function Input(props: props) {
  const {
    id,
    type,
    title,
    value,
    error,
    pattern,
    password,
    onChange,
    maxlength,
    minLength,
    placeHolder,
    showPasswordHandler,
  } = props;

  return (
    <div className="relative mt-2 w-full space-y-2">
      <label htmlFor={id} className="block text-secondary">
        {title}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        pattern={pattern}
        onChange={onChange}
        maxLength={maxlength}
        minLength={minLength}
        placeholder={placeHolder}
        className={`p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary rounded-xl focus:border-2 focus:border-dim-secondary outline-none ${
          error && "border-2 border-red-600 !bg-red-100"
        }`}
      />

      <div className="absolute left-4 top-9">
        {password ? (
          type === "password" ? (
            <button onClick={showPasswordHandler}>
              <CloseEyesIcon />
            </button>
          ) : (
            <button onClick={showPasswordHandler}>
              <OpenEyesIcon />
            </button>
          )
        ) : null}
      </div>
    </div>
  );
}

export default Input;
