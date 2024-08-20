import React from "react";
import Timeline from "@mui/lab/Timeline";

import { Heading } from "@/components";
import { RoadmapStation } from "@/components/roadmap";

import { Roadmap1 } from "@/assets/icons/svgs";

function Roadmap() {
  return (
    <section className="mt-16">
      <title>IRTC • نقشه ی راه</title>

      <Heading
        title="مسیر یادگیری"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="mt-6 ltr">
        <Timeline position="alternate">
          <RoadmapStation
            link="/courses/react"
            icon={<Roadmap1 />}
            header="اموزش ری اکت"
            description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
          />

          <RoadmapStation
            link="/courses/react"
            icon={<Roadmap1 />}
            header="اموزش ری اکت"
            description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
          />

          <RoadmapStation
            link="/courses/react"
            icon={<Roadmap1 />}
            header="اموزش ری اکت"
            description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
          />

          <RoadmapStation
            link="/courses/react"
            icon={<Roadmap1 />}
            header="اموزش ری اکت"
            description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
          />

          <RoadmapStation
            link="/courses/react"
            icon={<Roadmap1 />}
            header="اموزش ری اکت"
            description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
          />

          <RoadmapStation
            link="/courses/react"
            icon={<Roadmap1 />}
            header="اموزش ری اکت"
            description="...جاوااسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که"
          />
        </Timeline>
      </div>
    </section>
  );
}

export default Roadmap;
