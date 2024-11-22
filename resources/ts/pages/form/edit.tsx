import { EditForm } from "@/components/form/form/edit-form";
import AppLayout from "@/components/layout/app-layout";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form } from "@/types/global";

export default function EditFormPage({ form }: { form: Form }) {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([
        { label: "Forms", url: "/forms" },
        { label: form.name, url: `/forms/${form.id}/edit` },
      ])}
    >
      <h1 className="text-white text-3xl mb-4">Edit {form.name}</h1>
      <EditForm {...form} />
    </AppLayout>
  );
}
