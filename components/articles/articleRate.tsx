import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { FilledStarIcon, StarOutlineIcon } from "../../public/icons";
// import { routeActions } from "../../app/store/route-slice";

// type props = {
//   rate: number;
//   setRate: (rate: number) => void;
// };

function ArticleRate() {
  // const LoggedIn = useSelector((state: RootState) => state.user.user);

  const [rate, setRate] = useState(3);

  const rateHandler = (rate: number) => {
    setRate(rate);
  };

  return (
    <div className="mt-4 p-4 flex items-center justify-between flex-col md:flex-row gap-4 bg-dim-secondary rounded-xl">
      <p className="text-secondary text-xs md:text-sm">چه امتیازی به این مقاله میدهید؟</p>

      <div className="flex items-center flex-row-reverse">
        {[...new Array(5)].map((item, index) => (
          <button
            key={index}
            onClick={() => {
              // if (LoggedIn) {
              //   rateHandler(index + 1);
              //   return;
              // }
              // dispatch(redirectActions.redirect(pathname));
              // router.push("/login");
            }}
          >
            <Image src={index < rate ? FilledStarIcon : StarOutlineIcon} alt="star" className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ArticleRate;
