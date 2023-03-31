import React from "react";
import Link from "next/link";
import Image from "next/image";

import { InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "../../public/icons/socials";
import { ZarinPaalLogo } from "../../public";

import { styles } from "../../styles";

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
      <footer className="p-4 md:p-10 w-full flex justify-between gap-6 md:gap-14 flex-wrap bg-background box-shadow rounded-2xl">
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="mb-2 font-bold text-lg">رویداد ها و بوت کمپ</h1>
          {section1.map((link, index) => (
            <Link href={link.path} key={index} className="inline-block w-[50%] text-secondary text-sm">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="mb-2 font-bold text-lg">دوره ها پیشرفته</h1>
          {section2.map((link, index) => (
            <Link href={link.path} key={index} className="inline-block w-[50%] text-secondary text-sm">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[10rem] md:w-[15%] space-y-2">
          <h1 className="mb-2 font-bold text-lg">درباره ی اول لرن</h1>
          {section3.map((link, index) => (
            <Link href={link.path} key={index} className="inline-block w-[100%] text-secondary text-sm">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="mb-2 font-bold text-lg">ارتباط با ما</h1>
          <Link href={""} className="inline-block w-full text-secondary text-sm">
            support../..owlearn.com
          </Link>
          <Link href={""} className="inline-block w-full text-secondary text-sm">
            (+62) 85923935983
          </Link>
          <p className="text-secondary text-sm leading-7">
            هدف مجموعه سون لرن افزایش سطح کیفیت آموزش و ساختن راهی برای ورود دانشجویان به بازار کار تخصصی است
          </p>
          <div className="flex items-center gap-x-3">
            <Link href={""}>
              <Image src={YoutubeIcon} alt="Youtube" />
            </Link>
            <Link href={""}>
              <Image src={TwitterIcon} alt="twitter" />
            </Link>
            <Link href={""}>
              <Image src={LinkedInIcon} alt="linkedin" />
            </Link>
            <Link href={""}>
              <Image src={InstagramIcon} alt="InstagramIcon" />
            </Link>
          </div>
        </div>
        <div className="w-[20rem] md:w-[30%] space-y-2">
          <h1 className="mb-2 font-bold text-lg">دوره ها پیشرفته</h1>
          {section4.map((link, index) => (
            <Link href={link.path} key={index} className="inline-block w-[50%] text-secondary text-sm">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="w-[10rem] md:w-[15%] space-y-2">
          <h1 className="mb-2 font-bold text-lg">شرکت زمینه</h1>
          <Image src={ZarinPaalLogo} alt="zarinpaal icon" />
        </div>
      </footer>

      <p className="px-4 my-5 text-xs md:text-sm text-secondary font-medium text-center">
        © تمامی حقوق مادی و معنوی این سایت متعلق به پای تو پای می باشد.
      </p>
    </section>
  );
}

export default Footer;
