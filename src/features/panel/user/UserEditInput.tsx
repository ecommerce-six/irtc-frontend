import React from "react";

type props = {
  id: string;
  name: string;
  type: string;
  title: string;
  value?: string;
  pattern?: string;
  maxlength?: number;
  className?: string;
  placeHolder: string;
  defaultValue?: string;
  onChange?: (e?: any) => void;
};

function UserEditInput(props: props) {
  const {
    id,
    type,
    name,
    value,
    title,
    pattern,
    onChange,
    maxlength,
    className,
    placeHolder,
    defaultValue,
  } = props;

  return (
    <div className="mt-3 w-full space-y-2">
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
        placeholder={placeHolder}
        defaultValue={defaultValue}
        className={`p-3 w-full text-sm md:text-base text-secondary dark:text-secondary-dark bg-dim-secondary placeholder:opacity-25 rounded-xl outline-none ${className}`}
      />
    </div>
  );
}

export default UserEditInput;
