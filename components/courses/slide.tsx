import React from "react";

import CoursePreview from "./coursePreview";

function Slide() {
  return (
    <div className="mb-[3rem]">
      <CoursePreview
        slug={"react"}
        cover={"https://sabzlearn.ir/wp-content/uploads/2022/06/Com_project_price-247x139.png"}
        title={"اموزش راه اندازی کیف پول"}
        rate={4.5}
        price={690000}
        credit={true}
        duration={"100 ساعت و 67 دقیقه"}
        membersCount={1269}
        shortDescription={
          "آیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنیدآیا می خواهید برای بهبود عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه کنید"
        }
        recordingFinished={true}
      />
    </div>
  );
}

export default Slide;
