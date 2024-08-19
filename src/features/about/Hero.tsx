import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "@/styles";

import { AboutHeroImage } from "@/assets";
import { SpiralSpiral, Underline } from "@/assets/badges";

const AboutHero = () => {
  return (
    <section>
      <h1 className="mx-auto my-8 flex gap-x-1 text-primary text-[6vw] md:text-[2rem] font-bold w-fit">
        <span className="flex flex-col items-center">
          <span>داستان</span>{" "}
          <Image
            src={Underline}
            alt="underline"
            className="w-[18vw] md:w-[6rem]"
          />
        </span>
        شکل گیری تیم ما
      </h1>

      <div className="flex items-center justify-between flex-col lg:flex-row gap-y-10">
        <p className="px-2 lg:px-5 w-full lg:w-[45%] text-secondary text-sm md:text-base !leading-loose text-justify">
          آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود
          در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
          مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار،
          باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های
          کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک
          یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را
          بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی
          عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود
          بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
          بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟
          برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر
          مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای
          بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه
          کنید
        </p>

        <Image
          src={AboutHeroImage}
          alt="about iran trading coaching"
          className="w-full lg:w-[45%]"
        />
      </div>

      <div className="sm:px-10 flex items-center justify-center sm:justify-between">
        <Image
          src={SpiralSpiral}
          alt="spiral spiral"
          className="hidden sm:block w-32"
        />

        <div className="px-3 py-5 max-w-[16rem] md:max-w-[16rem] flex flex-col items-center gap-y-2 rounded-xl shadow-dark">
          <h1 className="text-primary text-lg sm:text-xl font-bold">
            به ما بپیوندید
          </h1>
          <p className="px-2 text-secondary text-xs sm:text-base leading-relaxed text-center">
            اگر در شاخه‌ای متخصص هستید به کمک شما نیاز داریم
          </p>
          <Link href="/" className={styles.brandButton}>
            درخواست همکاری
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
