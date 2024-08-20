import React from "react";

const WelcomeMessage = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="mt-6 text-primary dark:text-primary-dark text-xl md:text-2xl font-bold">
        {title}
      </h1>

      <p className="px-2 mt-4 text-secondary dark:text-secondary-dark text-sm md:text-base text-center">
        به خونه خوش اومدی! اگه عضو مجموعه هستی، وارد شو
      </p>
    </>
  );
};

export default WelcomeMessage;
