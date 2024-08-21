import React from "react";
import Timeline from "@mui/lab/Timeline";

import { Heading } from "@/components";
import { RoadmapStation } from "@/components/roadmap";

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
      <title>IRTC • نقشه ی راه</title>

      <Heading
        title="مسیر یادگیری"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="mt-6 ltr">
        <Timeline position="alternate">
          <RoadmapStation
            link="/courses/trading-advanced-strategies"
            icon={TargetIcon}
            header="تعیین اهداف استراتژیک"
            description="اهداف واضح و قابل اندازه‌گیری را برای تریدینگ خود مشخص کنید تا مسیر یادگیری شما متمرکز و هدفمند باشد."
          />

          <RoadmapStation
            link="/courses/technical-analysis-basics"
            icon={BarIcon}
            header="بررسی بازارهای مالی"
            description="با ساختار و عملکرد بازارهای مالی آشنا شوید و اصول پایه تریدینگ را به دقت مطالعه کنید."
          />
          <RoadmapStation
            link="/courses/risk-management-strategies"
            icon={LineChartIcon}
            header="تسلط بر تحلیل‌ها"
            description="مهارت‌های تحلیل تکنیکال و بنیادی را به‌دست آورید تا بتوانید تصمیمات استراتژیک و آگاهانه اتخاذ کنید."
          />

          <RoadmapStation
            link="/courses/financial-management"
            icon={SimulationIcon}
            header="تمرین در محیط شبیه‌سازی"
            description="با استفاده از پلتفرم‌های شبیه‌سازی، مهارت‌های خود را بدون ریسک مالی تقویت کنید و تجربه عملی کسب کنید."
          />
          <RoadmapStation
            link="/courses/stock-market-fundamentals"
            icon={CheckIcon}
            header="ارزیابی و بهینه‌سازی"
            description="به‌طور منظم عملکرد خود را تحلیل کنید و بر اساس تجربیات و بازخوردها، استراتژی‌های تریدینگ خود را بهبود دهید."
          />
        </Timeline>
      </div>
    </section>
  );
}

export default Roadmap;
