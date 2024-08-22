import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Spiral, Underline } from "@/assets/badges";
import { HeaderAvatarImage, HeaderImage, HeaderStarsImage } from "@/assets";

import { styles } from "@/styles";

function Hero() {
  return (
    <>
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-y-4">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-primary dark:text-primary-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-normal font-semibold text-center lg:text-start">
            هر مهارتی را برای
            <br /> پیشبرد مسیر شغلی <br />
            خود بیاموزید
          </h1>

          <Image
            src={Underline}
            alt="underline"
            className="w-48 lg:w-64 xl:w-80 dark:invert pointer-events-none"
          />

          <p className="mt-6 px-5 md:px-0 max-w-[24rem] md:max-w-[25rem] text-sm lg:text-base !leading-loose text-secondary dark:text-secondary-dark text-center lg:text-start">
            آیا می‌خواهید مهارت‌های شغلی خود را ارتقا دهید؟ برای افزایش بهره‌وری
            و بهبود عملکرد در محیط کار، با کمک یک مربی حرفه‌ای به مطالعه و
            یادگیری بیشتری بپردازید.
          </p>

          <div className="mt-4 flex flex-col md:flex-row items-center flex-wrap gap-x-5 gap-y-8">
            <Link
              href={"/auth/register"}
              className={`${styles.primaryButton} py-3 sm:py-4 px-6 md:px-8 hover:scale-[1.05]`}
            >
              مشاهده مقاله ها
            </Link>

            <div className="flex items-center gap-3">
              <Image
                src={HeaderAvatarImage}
                alt="avatars"
                className="w-24 md:w-32 h-fit  pointer-events-none"
              />

              <div className="space-y-2">
                <Image
                  src={HeaderStarsImage}
                  alt="stars"
                  className="w-20 md:w-28  pointer-events-none"
                />
                <h2 className="text-secondary dark:text-secondary-dark text-xs md:text-sm ">
                  4.5/5 براساس 1200
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={HeaderImage}
          alt="header image"
          className="lg:-ml-24 xl:-ml-36 lg:w-[67.5%] pointer-events-none"
        />
      </section>

      <div className="mt-4 md:-mt-10 lg:mt-14 xl:mt-5 grid justify-items-center">
        <Image
          src={Spiral}
          alt="spiral badge"
          className="w-14 lg:w-24 dark:invert dark:brightness-0 pointer-events-none"
        />
      </div>
    </>
  );
}

export default Hero;
