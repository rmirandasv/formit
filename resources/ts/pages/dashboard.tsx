import AppLayout from "@/components/layout/app-layout";
import { getBreadcrumb } from "@/lib/breadcrumb";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([{ label: "Dashboard", url: "/dashboard" }])}
    >
      <h1>Dashboard</h1>
    </AppLayout>
  );
};

export default Dashboard;
