import React from "react";
import { WebpageLayoutProps } from "./webpage-layout.types";
import WebpageNavigation from "../webpage/webpage-navigation";

const WebPageLayout: React.FC<WebpageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-t from-slate-700 via-slate-800 to-slate-900">
      <WebpageNavigation />
      {children}
    </div>
  );
};

export default WebPageLayout;
