import React from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "../styles";
import { ErrorImage } from "../public";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div
            className={`${styles.layout} py-10 lg:py-4 flex items-center flex-col lg:flex-row justify-between gap-x-4 gap-y-10`}
          >
            <div className="md:mt-20 flex md:block flex-col items-center space-y-4 py-10">
              <h1 className="text-primary text-4xl lg:text-5xl xl:text-6xl font-semibold !leading-relaxed">
                مشکلی پیش اومد
              </h1>
              <p className="max-w-[90%] md:max-w-[22rem] text-secondary text-sm text-center md:text-start !leading-loose">
                با عرض پوزش مشکلی در سایت بوجود اومد برای رفع آن ابتدا از متصل
                بودن کیفیت اینترنت خود مطمئن شوید در غیر این صورت مشکل از داخل
                سایت می باشد.
              </p>
              <Link
                href="/"
                className={`${styles.primaryButton} inline-block py-3 px-8 hover:scale-[1.05]`}
              >
                بازگشت به خانه
              </Link>
            </div>

            <Image src={ErrorImage} alt="" className="w-[85%] lg:w-[50%]" />
          </div>
        </>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
