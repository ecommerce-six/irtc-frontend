import Image from "next/image";
import React, { useState } from "react";

import Prompt from "../prompt";

import { AvatarSample } from "../../public";
import { MenuIcon } from "../../public/icons";
import { HomeIcon, LogoutIcon } from "../../public/icons/svgs";
import Link from "next/link";

function Navbar() {
  const [showPrompt, setShowPrompt] = useState(false);
  const loggedIn = true;

  const toggleMenuHandler = () => {
    // dispatch(panelActions.toggleMenu());
  };

  const logoutHandler = () => {
    // dispatch(userActions.logout());
  };

  const showPromptHandler = () => {
    setShowPrompt((prevValue) => !prevValue);
  };

  return (
    <nav className="h-14 flex items-center justify-between">
      <div>
        <button onClick={toggleMenuHandler} className="lg:hidden">
          <Image src={MenuIcon} alt="menu icon" className="w-8 " />
        </button>
        {loggedIn && <button>sdf</button>}
      </div>

      <div className="flex items-center gap-x-4">
        <Link href="/" className="group">
          <HomeIcon className="group-hover:fill-brand" />
        </Link>

        <button className="group" onClick={showPromptHandler}>
          <LogoutIcon className="group-hover:fill-brand" />
        </button>

        <Image src={AvatarSample} alt="" className="w-10 h-10 rounded-full" />

        {showPrompt && (
          <Prompt
            submitHandler={logoutHandler}
            showHandler={showPromptHandler}
            message="آیا مطمنید که میخواهید از حساب خود خارج شوید؟"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
