import React from "react";
import { styles } from "@/styles";

type props = {
  message: string;
  showHandler: () => void;
  submitHandler: () => void;
};

function Prompt({ message, showHandler, submitHandler }: props) {
  return (
    <>
      <button
        className="fixed top-0 left-0 bg-gray-400 w-full h-screen opacity-50 z-20"
        onClick={showHandler}
      />
      <div className="p-5 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center w-[20rem] rounded-xl bg-background dark:bg-background-dark shadow-dark dark:shadow-darker z-30">
        <p className="text-sm lg:text-base text-primary dark:text-primary-dark !leading-relaxed text-center">
          <span className="text-brand font-bold">&quot; </span>
          {message} <span className="text-brand font-bold">&quot;</span>
        </p>

        <div className="mt-5 flex items-center gap-x-5">
          <button
            onClick={submitHandler}
            className={`${styles.primaryButton} py-2 px-8 hover:scale-[1.05]`}
          >
            تایید
          </button>
          <button
            onClick={showHandler}
            className={`${styles.secondaryButton} text-red-500 hover:text-background border-red-500 hover:bg-red-500 py-2 px-8`}
          >
            لغو
          </button>
        </div>
      </div>
    </>
  );
}

export default Prompt;
