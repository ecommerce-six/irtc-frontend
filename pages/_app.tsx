import React, { ReactNode, ReactElement } from "react";
import type { AppProps } from "next/app";

import { store } from "../store";
import { Provider } from "react-redux";
import { IranYekan } from "../public/fonts";

import "../styles/globals.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import ErrorBoundary from "./error";

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
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </div>
  );
}

export default MyApp;
