"use client";

import { ReactNode } from "react";

import Navbar from "@/components/layout/navbar";
import Menu from "@/components/menu/menu";
import ScrollToTop from "@/components/scrollToTop";

import { styles } from "@/styles";
import Error404 from "@/components/404";
import { useAuth, useUser } from "@/hooks";

const PanelLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const { rememberMe } = useAuth();

  if (rememberMe || user?.role) {
    if (!user?.role)
      return <div suppressHydrationWarning={true}>در حال بارگذاری</div>;

    return (
      <div suppressHydrationWarning={true}>
        <span className="purple-gradient" />
        <Navbar />

        <div
          className={`${styles.layout} pb-6 flex flex-col lg:flex-row gap-5`}
        >
          <Menu />

          <div className="w-full">{children}</div>
        </div>

        <ScrollToTop />
      </div>
    );
  }

  return (
    <div suppressHydrationWarning={true}>
      <Error404 />
    </div>
  );
};
export default PanelLayout;
