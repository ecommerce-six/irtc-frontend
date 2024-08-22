import React from "react";

import { Heading } from "@/components";

import { TargetAboutImage } from "@/assets";

const Strategy = () => {
  return (
    <section className="mt-24">
      <Heading
        title="هدف ما در اول لرن"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="mt-10 mb-20 flex items-center justify-between flex-col lg:flex-row gap-y-10">
        <div className="w-full lg:w-[40%]">
          <TargetAboutImage />
        </div>

        <p className="px-2 lg:px-5 w-full lg:w-[45%] text-secondary dark:text-secondary-dark text-sm md:text-base !leading-loose text-justify">
          آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود
          در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
          مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار،
          باید با کمک یک باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می
          خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل
          کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت
          های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
          کمک یک مربی عالی بیشتر مطالعه کنید
        </p>
      </div>
    </section>
  );
};

export default Strategy;
