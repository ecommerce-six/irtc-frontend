import React from "react";


import Header from "../head";
import Timeline from "@mui/lab/Timeline";
import { StyledEngineProvider } from "@mui/material";
import { MainLayout } from "../../components/layout";
import RoadmapItem from "../../components/roadmap/item";
import Heading from "../../components/elements/heading";
import RightRoadmapItem from "../../components/roadmap/item";

import { Roadmap1 } from "../../public/icons/svgs";


function Roadmap() {
  return (
    <section className="mt-16">
      <Header title="IRTC	• نقشه ی راه" />

      <Heading
        title="مسیر یادگیری"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="mt-6 ltr">
        <StyledEngineProvider>
          <Timeline position="alternate">
            <RoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />

            <RoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />

            <RoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />
            <RightRoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />

            <RoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />

            <RoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />

            <RoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />
            <RightRoadmapItem
              link="/courses/react"
              icon={<Roadmap1 />}
              header="اموزش ری اکت"
              description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
            />
          </Timeline>
        </StyledEngineProvider>
      </div>
    </section>
  );
}

Roadmap.PageLayout = MainLayout;

export default Roadmap;
