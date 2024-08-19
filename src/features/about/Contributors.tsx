import React from "react";

import { Heading } from "@/components";
import Contributor from "./Contributor";

import { AvatarSample } from "@/assets";

const Contributors = () => {
  return (
    <section>
      <Heading
        title="تیم تولید محتوا"
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="my-10 flex justify-center md:justify-start gap-8 flex-wrap">
        <Contributor
          name="ویتو محققیان"
          position="مدیر تولید محتوا"
          profile={AvatarSample}
        />
        <Contributor
          name="ویتو محققیان"
          position="مدیر تولید محتوا"
          profile={AvatarSample}
        />
        <Contributor
          name="ویتو محققیان"
          position="مدیر تولید محتوا"
          profile={AvatarSample}
        />
        <Contributor
          name="ویتو محققیان"
          position="مدیر تولید محتوا"
          profile={AvatarSample}
        />
        <Contributor
          name="ویتو محققیان"
          position="مدیر تولید محتوا"
          profile={AvatarSample}
        />
        <Contributor
          name="ویتو محققیان"
          position="مدیر تولید محتوا"
          profile={AvatarSample}
        />
      </div>
    </section>
  );
};

export default Contributors;
