import React from "react";
import Image from "next/image";

import Heading from "../elements/heading";

import { QAndAImage } from "../../public";
import { NineDots } from "../../public/badges";

function QAndA() {
  return (
    <section className="mt-16">
      <Heading
        title="سوالات متداول شما عزیزان! "
        description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
      />

      <div className="flex flex-col lg:flex-row justify-between gap-y-8">
        <div className="mt-2 md:mt-6 lg:w-[45%]">
          <h1 className="mt-4 flex items-center gap-x-2">
            <Image src={NineDots} alt="nine dots" />
            <span className="text-base md:text-lg text-primary font-semibold">پشتیبانی دوره ها به چه صورت است؟</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-secondary leading-7">
            پشتیبانی دوره اموزشی به صورت دائمی و مادام العمر است.
          </p>

          <h1 className="mt-4 flex items-center gap-x-2">
            <Image src={NineDots} alt="nine dots" />
            <span className="text-base md:text-lg text-primary font-semibold">آیا دوره ها کامل است؟</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-secondary leading-7">
            پای تو پای در انتخاب مدرسان خود بسیار سخت گیر است و تمامی دوره های حود را سعی کرده است در بیشتر کیفیت علمی و
            مفهومی نگه دارد. پس از نظر کیفیت خیالتان راحت باشد.
          </p>

          <h1 className="mt-4 flex items-center gap-x-2">
            <Image src={NineDots} alt="nine dots" />
            <span className="text-base md:text-lg text-primary font-semibold">آیا ضمانت بازگشت وجه دارد؟</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-secondary leading-7">
            بله در صورتی که از ان ناراضی باشید بدون هیچ قید و شرطی مبلغ باز میگردد.
          </p>
        </div>

        <Image src={QAndAImage} alt="QAndA image" className="lg:w-[45%]" />
      </div>
    </section>
  );
}

export default QAndA;
