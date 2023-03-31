import React from "react";

import { useSelector } from "react-redux";
import { PanelLayout } from "../../components/layout";

import UserProfile from "../../components/user/profile";
import { StoreType } from "../../store";
import { userType } from "../../types/user";

function Profile() {
  const user = useSelector((state: StoreType) => state.user.user);

  return <UserProfile user={user} />;
}

Profile.PageLayout = PanelLayout;

export default Profile;
