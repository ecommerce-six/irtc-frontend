import React from "react";
import Link from "next/link";
import Image from "next/image";

import { InstagramPhone } from "@/assets";

function InstagramPage() {
  return (
    <section className="relative lg:pt-8 py-6 px-12 mt-14 lg:h-48 flex flex-col lg:flex-row items-center justify-end gap-5 bg-gradient-to-br from-[#F920C3] to-brand rounded-3xl">
      <Image
        src={InstagramPhone}
        alt="instagram phone"
        className="absolute -top-20 sm:-top-28 lg:-top-10 lg:right-5 w-52 sm:w-60 lg:w-72 xl:w-80"
      />

      <div className="w-40 xl:w-0 h-10"></div>

      <h1 className="xl:ml-10 text-lg text-background font-semibold leading-9 text-center">
        ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
      </h1>
      <Link
        href="https://instagram.com/vito.mohagheghian"
        className="bg-background py-3 px-6 rounded-lg text-brand font-semibold text-center"
      >
        مشاهده پست های اینستاگرام
      </Link>
    </section>
  );
}

export default InstagramPage;
