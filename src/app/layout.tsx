import { UserWrapper, ThemeWrapper } from "@/components/layout";

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
      <ReduxWrapper>
        <ThemeWrapper>
          <UserWrapper>{children}</UserWrapper>
        </ThemeWrapper>
      </ReduxWrapper>
    </html>
  );
}
