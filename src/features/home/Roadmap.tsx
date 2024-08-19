import React from "react";
import Link from "next/link";
import Timeline from "@mui/lab/Timeline";
import { StyledEngineProvider } from "@mui/material";

import { Heading } from "@/components";
import { RoadmapStation } from "@/components/roadmap";

import { styles } from "@/styles";

import { Roadmap1 } from "@/assets/icons/svgs";

function Roadmap() {
  return (
    <section className="mt-16">
      <Heading
        title="مسیر یادگیری"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      >
        <Link
          href={"/roadmap"}
          className={`${styles.secondaryButton} py-3 px-6 w-fit hover:bg-brand `}
        >
          مشاهده همه
        </Link>
      </Heading>

      <div className="mt-6 ltr">
        <StyledEngineProvider>
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
          </Timeline>
        </StyledEngineProvider>
      </div>
    </section>
  );
}

export default Roadmap;
