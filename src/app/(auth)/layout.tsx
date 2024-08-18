"use client";

import { useRouter } from "next/navigation";

import { styles } from "@/styles";
import { useUser } from "@/hooks";

const AuthLayout = ({ children }: { children: any }) => {
  const router = useRouter();

  const { user } = useUser();

  if (user?.role) router.push("/");

  return (
    <>
      <span className="purple-gradient" />

      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default AuthLayout;
