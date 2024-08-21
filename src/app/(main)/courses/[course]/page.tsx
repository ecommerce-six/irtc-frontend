import React from "react";

import { Testimonials } from "@/components";
import { CourseDetails, CourseDescription } from "@/features/courses/course";

function Course() {
  const course = {
    id: 1,
    rate: 4.8,
    slug: "trading-advanced-strategies",
    title: "استراتژی‌های پیشرفته تریدینگ",
    cover:
      "https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-18-1.webp",
    price: 1500000,
    recordingFinished: true,
    isInstallmentAvailable: true,
    duration: "129 ساعت و 18 دقیقه",
    membersCount: 120,
    shortDescription:
      "دوره‌ای جامع برای یادگیری استراتژی‌های پیشرفته تریدینگ با تمرین‌های عملی.",
    description:
      "دوره 'استراتژی‌های پیشرفته تریدینگ' یک برنامه آموزشی کامل برای تریدرهای حرفه‌ای است که به دنبال ارتقاء مهارت‌های خود و دستیابی به نتایج بهتر در بازارهای مالی هستند. این دوره به مدت 129 ساعت و 18 دقیقه، با ارائه مباحث عمیق و تکنیک‌های پیشرفته، به شما کمک می‌کند تا استراتژی‌های مؤثر را برای تحلیل و مدیریت ریسک‌ها به کار بگیرید. دوره شامل تمرین‌های عملی و شبیه‌سازی‌های واقع‌گرایانه است که به شما امکان می‌دهد تا مفاهیم آموخته‌شده را در محیط‌های واقعی بازار آزمایش کنید. با استفاده از این دوره، شما قادر خواهید بود تا به درک عمیق‌تری از حرکت‌های بازار و چگونگی بهره‌برداری از فرصت‌های مختلف در تریدینگ دست یابید. با پیوستن به این دوره، به جمع 120 نفر دیگر از تریدرهای موفق بپیوندید و از پشتیبانی و مشاوره‌های متخصصان بهره‌مند شوید. هزینه دوره 1,500,000 تومان است و امکان پرداخت اقساطی نیز وجود دارد.",
  };

  return (
    <main>
      <title>IRTC • {course.title}</title>

      <CourseDetails {...course} />

      <CourseDescription slug={course.slug} description={course.description} />

      <Testimonials />
    </main>
  );
}

export default Course;
