import { ReactNode } from "react";

const PanelLayout = ({ children }: { children: any }) => {
  return (
    <div>
      Panel:
      {children}
    </div>
  );
};
export default PanelLayout;
