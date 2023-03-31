import React from "react";

import Access from "../../../components/access";
import { PanelLayout } from "../../../components/layout";

function PurchasedCourses() {
  return (
    <Access user author>
      PurchasedCourses
    </Access>
  );
}

PurchasedCourses.PageLayout = PanelLayout;

export default PurchasedCourses;
