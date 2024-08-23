"use client";

import { ReactNode } from "react";

import NotFoundPage from "../not-found";
import { ScrollToTop } from "@/components";
import { Navbar, PanelSidebar } from "@/components/layout";

import { styles } from "@/styles";
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
          <PanelSidebar />

          <div className="w-full">{children}</div>
        </div>

        <ScrollToTop />
      </div>
    );
  }

  return (
    <div suppressHydrationWarning={true}>
      <NotFoundPage />
    </div>
  );
};
export default PanelLayout;
