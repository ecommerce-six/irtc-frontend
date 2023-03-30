import React from "react";

type props = {
  id: string;
  name: string;
  type: string;
  title: string;
  pattern?: string;
  maxlength?: number;
  className?: string;
  placeHolder: string;
};

function Input({ title, type, id, placeHolder, pattern, maxlength, name, className }: props) {
  return (
    <div className="mt-3 w-full space-y-2">
      <label htmlFor={id} className="block text-secondary">
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeHolder}
        pattern={pattern}
        maxLength={maxlength}
        className={`p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary rounded-xl outline-none ${className}`}
      />
    </div>
  );
}

export default Input;
