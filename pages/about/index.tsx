import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MainLayout } from "../../components/layout";
import Activity from "../../components/about/activity";
import Heading from "../../components/elements/heading";
import Testmonials from "../../components/home/testimonials";
import Contributor from "../../components/about/contributor";
import InstagramPage from "../../components/home/instagramPage";

import { Speed, SpiralSpiral, Underline } from "../../public/badges";
import { AboutHeroImage, AvatarSample, TargetAboutImage } from "../../public";

import { styles } from "../../styles";

function About() {
  return (
    <main>
      <section>
        <h1 className="mx-auto my-8 flex gap-x-1 text-primary text-[6vw] md:text-[2rem] font-bold w-fit">
          <span className="flex flex-col items-center">
            <span>داستان</span> <Image src={Underline} alt="underline" className="w-[18vw] md:w-[6rem]" />
          </span>
          شکل گیری تیم ما
        </h1>

        <div className="flex items-center justify-between flex-col lg:flex-row gap-y-10">
          <p className="px-2 lg:px-5 w-full lg:w-[45%] text-secondary text-sm md:text-base !leading-loose text-justify">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
            کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در
            محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای
            بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را
            بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید
            مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه
            کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی
            عالی بیشتر مطالعه کنید
          </p>

          <Image src={AboutHeroImage} alt="about iran trading coaching" className="w-full lg:w-[45%]" />
        </div>

        <div className="sm:px-10 flex items-center justify-center sm:justify-between">
          <Image src={SpiralSpiral} alt="spiral spiral" className="hidden sm:block w-32" />

          <div className="px-3 py-5 max-w-[16rem] md:max-w-[16rem] flex flex-col items-center gap-y-2 rounded-xl box-shadow">
            <h1 className="text-primary text-lg sm:text-xl font-bold">به ما بپیوندید</h1>
            <p className="px-2 text-secondary text-xs sm:text-base leading-relaxed text-center">
              اگر در شاخه‌ای متخصص هستید به کمک شما نیاز داریم
            </p>
            <Link href="/" className={styles.brandButton}>
              درخواست همکاری
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <Heading
          title="هدف ما در اول لرن"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
        />

        <div className="mt-10 mb-20 flex items-center justify-between flex-col lg:flex-row gap-y-10">
          <Image src={TargetAboutImage} alt="tra" className="w-full lg:w-[45%]" />

          <p className="px-2 lg:px-5 w-full lg:w-[45%] text-secondary text-sm md:text-base !leading-loose text-justify">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
            کمک یک باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای
            بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را
            بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید
          </p>
        </div>
      </section>

      <InstagramPage />

      <section className="my-20">
        <Heading
          title="بخشی از فعالیت های ما"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
        />

        <Image src={Speed} alt="speed badge" className="m-5" />

        <div className="my-5 flex justify-center gap-8 flex-wrap">
          <Activity header="اموزش آنلاین">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
            کمک بکنید
          </Activity>
          <Activity header="تولید محتوا در اینستاگرام">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
            کمک بکنید
          </Activity>
          <Activity header="مقالات آموزشی">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
            کمک بکنید
          </Activity>
          <Activity header="پادکست">
            آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی
            بیشتر مطالعه کنید آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود عملکرد خود در محل کار، باید با
            کمک بکنید
          </Activity>
        </div>
      </section>

      <section>
        <Heading
          title="تیم تولید محتوا"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
        />

        <div className="my-10 flex justify-center md:justify-start gap-8 flex-wrap">
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
        </div>
      </section>

      <section>
        <Heading
          title="تیم توسعه"
          description="آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
        />

        <div className="my-10 flex justify-center md:justify-start gap-8 flex-wrap">
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
          <Contributor name="ویتو محققیان" position="مدیر تولید محتوا" profile={AvatarSample} />
        </div>
      </section>

      <Testmonials />
    </main>
  );
}

About.PageLayout = MainLayout;

export default About;
