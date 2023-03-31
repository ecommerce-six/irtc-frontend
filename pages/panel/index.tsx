import React from "react";

import Header from "../head";
import { StoreType } from "../../store";
import { useSelector } from "react-redux";
import { PanelLayout } from "../../components/layout";
import UserProfile from "../../components/user/profile";

function Profile() {
  const user = useSelector((state: StoreType) => state.user.user);

  return (
    <>
      <Header title="IRTC	• پروفایل" />

      <UserProfile user={user} />
    </>
  );
}

Profile.PageLayout = PanelLayout;

export default Profile;
