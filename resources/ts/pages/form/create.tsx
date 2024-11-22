import { CreateFormForm } from "@/components/form/form/create-form";
import AppLayout from "@/components/layout/app-layout";
import { getBreadcrumb } from "@/lib/breadcrumb";

export default function CreateForm() {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([
        { label: "Forms", url: "/forms" },
        { label: "Create Form", url: "/forms/create" },
      ])}
    >
      <h1 className="text-white text-3xl mb-4">Create Form</h1>
      <CreateFormForm />
    </AppLayout>
  );
}
