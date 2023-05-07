import React, { ReactNode, ReactElement } from "react";
import type { AppProps } from "next/app";

import { store } from "../store";
import ErrorBoundary from "./error";
import { Provider } from "react-redux";
import { IranYekan } from "../public/fonts";
import UserWrapper from "../components/layout/persist";

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
          <UserWrapper>
            <Component.PageLayout>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </Component.PageLayout>
          </UserWrapper>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </div>
  );
}

export default MyApp;
