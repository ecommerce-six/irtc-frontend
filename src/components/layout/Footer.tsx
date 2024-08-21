import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "@/styles";

import {
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/assets/icons/socials";
import { ZarinPaalLogo } from "@/assets";

type FooterLinkType = {
  path: string;
  text: string;
};

function Footer() {
  const section1 = [
    { path: "", text: "ارتباطات" },
    { path: "", text: "ارائه" },
    { path: "", text: "توسعه وب" },
    { path: "", text: "دیجیتال مارکتینگ" },
    { path: "", text: "توسعه اپلیکیشن موبایل" },
    { path: "", text: "برندینگ" },
    { path: "", text: "UI دیزاین" },
    { path: "", text: "یوتیوبر شو" },
    { path: "", text: "تحقیق UI" },
    { path: "", text: "هوش مصنوعی" },
  ];
  const section2 = [
    { path: "", text: "ارتباطات" },
    { path: "", text: "ارائه" },
    { path: "", text: "توسعه وب" },
    { path: "", text: "دیجیتال مارکتینگ" },
    { path: "", text: "توسعه اپلیکیشن موبایل" },
    { path: "", text: "برندینگ" },
    { path: "", text: "UI دیزاین" },
    { path: "", text: "یوتیوبر شو" },
    { path: "", text: "تحقیق UI" },
    { path: "", text: "هوش مصنوعی" },
  ];
  const section3 = [
    { path: "", text: "مقاله های شروع" },
    { path: "", text: "شغل ها" },
    { path: "", text: "همکاری با ما" },
    { path: "", text: "برنامه ها دیگر" },
  ];
  const section4 = [
    { path: "", text: "ارتباطات" },
    { path: "", text: "ارائه" },
    { path: "", text: "توسعه وب" },
    { path: "", text: "دیجیتال مارکتینگ" },
    { path: "", text: "توسعه اپلیکیشن موبایل" },
    { path: "", text: "برندینگ" },
    { path: "", text: "UI دیزاین" },
    { path: "", text: "یوتیوبر شو" },
    { path: "", text: "تحقیق UI" },
    { path: "", text: "هوش مصنوعی" },
  ];

  return (
    <section className={`${styles.layout} mt-16`}>
      <footer className="p-4 md:p-10 w-full flex justify-between gap-6 md:gap-14 flex-wrap bg-background dark:bg-background-dark shadow-dark dark:shadow-darker rounded-2xl">
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="text-primary dark:text-primary-dark mb-2 font-bold text-lg">
            رویداد ها و بوت کمپ
          </h1>
          {section1.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="inline-block w-[50%] text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark text-sm transition-colors duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="text-primary dark:text-primary-dark mb-2 font-bold text-lg">
            دوره ها پیشرفته
          </h1>
          {section2.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="inline-block w-[50%] text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark text-sm transition-colors duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[10rem] md:w-[15%] space-y-2">
          <h1 className="text-primary dark:text-primary-dark mb-2 font-bold text-lg">
            درباره ی اول لرن
          </h1>
          {section3.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="inline-block w-[100%] text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark text-sm transition-colors duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="text-primary dark:text-primary-dark mb-2 font-bold text-lg">
            ارتباط با ما
          </h1>
          <Link
            href={""}
            className="inline-block w-full text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark text-sm transition-colors duration-300"
          >
            vito.mohagheghian@gmail.com
          </Link>
          <Link
            href={""}
            className="inline-block w-full text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark text-sm transition-colors duration-300"
          >
            تلگرام: hereisvito@
          </Link>
          <p className="text-secondary dark:text-secondary-dark text-sm leading-7">
            هدف مجموعه سون لرن افزایش سطح کیفیت آموزش و ساختن راهی برای ورود
            دانشجویان به بازار کار تخصصی است
          </p>
          <div className="flex items-center gap-x-3">
            <Link href={""}>
              <Image
                src={YoutubeIcon}
                alt="Youtube"
                className="dark:invert brightness-0 hover:scale-105"
              />
            </Link>
            <Link href={""}>
              <Image
                src={TwitterIcon}
                alt="twitter"
                className="dark:invert brightness-0 hover:scale-105"
              />
            </Link>
            <Link href={""}>
              <Image
                src={LinkedInIcon}
                alt="linkedin"
                className="dark:invert brightness-0 hover:scale-105"
              />
            </Link>
            <Link href={""}>
              <Image
                src={InstagramIcon}
                alt="InstagramIcon"
                className="dark:invert brightness-0 hover:scale-105"
              />
            </Link>
          </div>
        </div>
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="text-primary dark:text-primary-dark mb-2 font-bold text-lg">
            دوره ها پیشرفته
          </h1>
          {section4.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="inline-block w-[50%] text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark text-sm transition-colors duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[10rem] md:w-[15%] space-y-2">
          <h1 className="text-primary dark:text-primary-dark mb-2 font-bold text-lg">
            شرکت زمینه
          </h1>
          <Image src={ZarinPaalLogo} alt="zarinpaal icon" />
        </div>
      </footer>

      <p className="px-4 py-6 text-xs md:text-sm text-secondary dark:text-secondary-dark hover:text-primary hover:dark:text-primary-dark font-medium text-center">
        © تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه آی آر تی سی کوچینگ می
        باشد.
      </p>
    </section>
  );
}

export default Footer;
