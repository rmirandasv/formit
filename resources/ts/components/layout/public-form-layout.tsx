import React, { FC } from "react";
import { PublicFormLayoutProps } from "./public-form-layout.types";

const PublicFormLayout: FC<PublicFormLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full px-4 lg:px-0 flex flex-col bg-gradient-to-t from-slate-700 via-slate-800 to-slate-900">
      <div className="max-w-7xl w-full mx-auto mt-8 flex flex-col bg-slate-700 p-4 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default PublicFormLayout;
