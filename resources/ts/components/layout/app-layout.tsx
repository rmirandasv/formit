import React from "react";
import { AppLayoutProps } from "./app.layout.types";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app/navigation/app-sidebar";
import AppTopbar from "../app/navigation/app-topbar";

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-t from-slate-700 via-slate-800 to-slate-900">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppTopbar />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
