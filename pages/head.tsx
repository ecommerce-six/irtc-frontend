import React, { ReactNode } from "react";

import Head from "next/head";

type props = {
  title: string;
  description?: string;
  children?: ReactNode;
};

function Header({ title, description, children }: props) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="common/logo-icon.svg" />
      <meta name="description" content={description ?? "IRTC a website for learning trading"} />
      {children}
    </Head>
  );
}

export default Header;
