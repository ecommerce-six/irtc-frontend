import React, { ReactNode, ReactElement } from "react";
import type { AppProps } from "next/app";

import { store } from "../store";
import { Provider } from "react-redux";
import { IranYekan } from "../public/fonts";

import "../styles/globals.css";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ({ children }: { children: ReactNode }) => ReactElement;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <div className={`${IranYekan.className}`}>
      <Provider store={store}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </div>
  );
}

export default MyApp;
