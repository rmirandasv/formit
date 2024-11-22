import React from "react";
import { AppLayoutProps } from "./app.layout.types";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app/navigation/app-sidebar";
import AppTopbar from "../app/navigation/app-topbar";

const AppLayout: React.FC<AppLayoutProps> = ({ children, breadcrumbs }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-t from-slate-700 via-slate-800 to-slate-900">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col w-full">
          <AppTopbar breadcrumbs={breadcrumbs} />
          <main className="my-12 max-w-7xl w-full mx-auto flex flex-col">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
