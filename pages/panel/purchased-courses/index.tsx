import React from "react";

import Header from "../../head";
import Access from "../../../components/access";
import { PanelLayout } from "../../../components/layout";

function PurchasedCourses() {
  return (
    <Access user author>
      <Header title="IRTC	• دوره های خریداری شده" />
      PurchasedCourses
    </Access>
  );
}

PurchasedCourses.PageLayout = PanelLayout;

export default PurchasedCourses;
