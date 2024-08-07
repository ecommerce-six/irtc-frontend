import type { AppProps } from "next/app";
import React, { ReactNode, ReactElement } from "react";

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
        <UserWrapper>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </UserWrapper>
      </Provider>
    </div>
  );
}

export default MyApp;
