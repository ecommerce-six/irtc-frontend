import React from "react";

import { Error404 } from "@/components";
import { styles } from "@/styles";
import { Footer, Navbar } from "@/components/layout";

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
