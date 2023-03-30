import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Spiral, Underline } from "../../public/badges";
import { HeaderAvatarImage, HeaderImage, HeaderStarsImage } from "../../public";

import { styles } from "../../styles";

function Hero() {
  return (
    <>
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-y-4">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal font-semibold text-center lg:text-start">
            هر مهارتی را برای
            <br /> پیشبرد مسیر شغلی <br />
            خود بیاموزید
          </h1>

          <Image src={Underline} alt="underline" className="w-48 lg:w-64" />

          <p className="mt-6 px-5 md:px-0 max-w-[24rem] md:max-w-[70%] text-sm lg:text-base !leading-loose text-secondary text-center lg:text-start">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید
          </p>

          <div className="mt-4 flex flex-col md:flex-row items-center gap-x-5 gap-y-8">
            <Link href={"/auth/signup"} className={`${styles.primaryButton} py-3 sm:py-4 px-6 md:px-8`}>
              مشاهده مقاله ها
            </Link>

            <div className="flex gap-x-3">
              <Image src={HeaderAvatarImage} alt="avatars" className="w-24 md:w-32" />

              <div className="space-y-2">
                <Image src={HeaderStarsImage} alt="stars" className="w-20 md:w-28" />
                <h2 className="text-secondary text-xs md:text-sm">4.5/5 براساس 1200</h2>
              </div>
            </div>
          </div>
        </div>

        <Image src={HeaderImage} alt="header image" className="lg:-ml-24 xl:-ml-36 lg:w-[65%]" />
      </section>

      <div className="mt-4 md:-mt-10 grid justify-items-center">
        <Image src={Spiral} alt="spiral badge" className="w-14 lg:w-24" />
      </div>
    </>
  );
}

export default Hero;
