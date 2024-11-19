import { EditForm } from "@/components/form/form/edit-form";
import AppLayout from "@/components/layout/app-layout";
import { Form } from "@/types/global";

export default function EditFormPage({ form }: { form: Form }) {
  return (
    <AppLayout>
      <h1 className="text-white text-3xl mb-4">Edit {form.name}</h1>
      <EditForm {...form} />
    </AppLayout>
  );
}
