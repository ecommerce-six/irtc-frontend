import UserWrapper from "@/components/layout/persist";

import { IranYekan } from "@/assets/fonts";
import ReduxWrapper from "@/store/wrapper";

import "@/styles/global.css";
import "@/styles/tailwind.css";
import "@/styles/animation.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={IranYekan.className}>
        <ReduxWrapper>
          <UserWrapper>{children}</UserWrapper>
        </ReduxWrapper>
      </body>
    </html>
  );
}
