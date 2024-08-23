import React from "react";

import { Error404 } from "@/components";
import { Footer, Navbar } from "@/components/layout";

import { styles } from "@/styles";

const NotFoundPage = () => {
  return (
    <>
      <span className="purple-gradient" />
      <Navbar />

      <div className={styles.layout}>
        <Error404 />
      </div>

      <Footer />
    </>
  );
};

export default NotFoundPage;
