import React from "react";

import Header from "../head";
import { PanelLayout } from "../../components/layout";
import UserProfile from "../../components/user/profile";

function Profile() {

  return (
    <>
      <Header title="IRTC	• پروفایل" />

      <UserProfile />
    </>
  );
}

Profile.PageLayout = PanelLayout;

export default Profile;
