import React from "react";

import { CloseEyesIcon, OpenEyesIcon } from "@/assets/icons/svgs";

type props = {
  id: string;
  type: string;
  name?: string;
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
  autoComplete?: string | undefined;
};

function Input(props: props) {
  const {
    id,
    type,
    name,
    title,
    value,
    error,
    pattern,
    password,
    onChange,
    maxlength,
    minLength,
    placeHolder,
    autoComplete,
    showPasswordHandler,
  } = props;

  return (
    <div className="relative mt-2 w-full space-y-2">
      <label
        htmlFor={id}
        className="block text-secondary dark:text-secondary-dark"
      >
        {title}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        onChange={onChange}
        maxLength={maxlength}
        minLength={minLength}
        placeholder={placeHolder}
        autoComplete={autoComplete}
        className={`p-3 w-full text-sm md:text-base text-secondary dark:text-secondary-dark bg-dim-secondary rounded-xl outline-none dark:placeholder:opacity-25 ${
          error && "border-2 border-red-600 !bg-red-100"
        }`}
      />

      <div className="absolute left-4 top-9">
        {password ? (
          type === "password" ? (
            <div onClick={showPasswordHandler}>
              <CloseEyesIcon />
            </div>
          ) : (
            <div onClick={showPasswordHandler}>
              <OpenEyesIcon />
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default Input;
