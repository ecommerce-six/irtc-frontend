import React from "react";
import Link from "next/link";
import Timeline from "@mui/lab/Timeline";
import { StyledEngineProvider } from "@mui/material";

import { Heading } from "@/components";
import { RoadmapStation } from "@/components/roadmap";

import { styles } from "@/styles";

import {
  BarIcon,
  CheckIcon,
  TargetIcon,
  LineChartIcon,
  SimulationIcon,
} from "@/assets/icons/roadmap";

function Roadmap() {
  return (
    <section className="mt-16">
      <Heading
        title="مسیر یادگیری"
        description="پیشرفت در مسیر یادگیری را با گام‌های هدفمند و برنامه‌ریزی شده تجربه کنید."
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
              icon={TargetIcon}
              header="تعیین اهداف استراتژیک"
              description="اهداف واضح و قابل اندازه‌گیری را برای تریدینگ خود مشخص کنید تا مسیر یادگیری شما متمرکز و هدفمند باشد."
            />

            <RoadmapStation
              link="/courses/react"
              icon={BarIcon}
              header="بررسی بازارهای مالی"
              description="با ساختار و عملکرد بازارهای مالی آشنا شوید و اصول پایه تریدینگ را به دقت مطالعه کنید."
            />
            <RoadmapStation
              link="/courses/react"
              icon={LineChartIcon}
              header="تسلط بر تحلیل‌ها"
              description="مهارت‌های تحلیل تکنیکال و بنیادی را به‌دست آورید تا بتوانید تصمیمات استراتژیک و آگاهانه اتخاذ کنید."
            />
          </Timeline>
        </StyledEngineProvider>
      </div>
    </section>
  );
}

export default Roadmap;
