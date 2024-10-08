import React from "react";
import Image from "next/image";

import Activity from "./Activity";
import { Heading } from "@/components";

import { Speed } from "@/assets/badges";

const Activities = () => {
  return (
    <section className="my-24">
      <Heading
        title="بخشی از فعالیت های ما"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <Image
        src={Speed}
        alt="speed badge"
        className="m-5 w-10 md:w-fit h-10 md:h-fit dark:invert dark:brightness-0 pointer-events-none"
      />

      <div className="my-5 flex justify-center gap-8 flex-wrap">
        <Activity header="اموزش آنلاین">
          آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود
          در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
          مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار،
          باید با کمک بکنید
        </Activity>
        <Activity header="تولید محتوا در اینستاگرام">
          آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود
          در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
          مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار،
          باید با کمک بکنید
        </Activity>
        <Activity header="مقالات آموزشی">
          آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود
          در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
          مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار،
          باید با کمک بکنید
        </Activity>
        <Activity header="پادکست">
          آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود
          در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
          مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار،
          باید با کمک بکنید
        </Activity>
      </div>
    </section>
  );
};

export default Activities;
