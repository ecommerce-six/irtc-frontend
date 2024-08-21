import React from "react";
import Image from "next/image";

import { Heading } from "@/components";

import { FrequentlyAskedImage } from "@/assets";
import { NineDots } from "@/assets/badges";

function FrequentlyAsked() {
  return (
    <section className="mt-16">
      <Heading
        title="سوالات متداول شما عزیزان!"
        description="پاسخ به سوالات رایج و مهم برای کمک به شما در درک بهتر خدمات و دوره‌های ما."
      />

      <div className="flex flex-col lg:flex-row justify-between gap-y-8">
        <div className="mt-2 md:mt-6 lg:w-[45%]">
          <h1 className="mt-4 flex items-center gap-x-2">
            <Image src={NineDots} alt="nine dots" />
            <span className="text-base md:text-lg text-primary dark:text-primary-dark font-semibold">
              پشتیبانی دوره ها به چه صورت است؟
            </span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-secondary dark:text-secondary-dark leading-7">
            پشتیبانی دوره اموزشی به صورت دائمی و مادام العمر است.
          </p>

          <h1 className="mt-4 flex items-center gap-x-2">
            <Image src={NineDots} alt="nine dots" />
            <span className="text-base md:text-lg text-primary dark:text-primary-dark font-semibold">
              آیا دوره ها کامل است؟
            </span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-secondary dark:text-secondary-dark leading-7">
            بله، دوره‌های ما به‌طور کامل و جامع طراحی شده‌اند و شامل مباحث نظری
            و عملی همراه با پشتیبانی مستمر هستند.
          </p>

          <h1 className="mt-4 flex items-center gap-x-2">
            <Image src={NineDots} alt="nine dots" />
            <span className="text-base md:text-lg text-primary dark:text-primary-dark font-semibold">
              آیا ضمانت بازگشت وجه دارد؟
            </span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-secondary dark:text-secondary-dark leading-7">
            بله در صورتی که از ان ناراضی باشید بدون هیچ قید و شرطی مبلغ باز
            میگردد.
          </p>
        </div>

        <Image
          src={FrequentlyAskedImage}
          alt="QAndA image"
          className="lg:w-[45%]"
        />
      </div>
    </section>
  );
}

export default FrequentlyAsked;
