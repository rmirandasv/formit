import { CreateFormForm } from "@/components/form/form/create-form";
import AppLayout from "@/components/layout/app-layout";

export default function CreateForm() {
  return (
    <AppLayout>
      <h1 className="text-white text-3xl mb-4">Create Form</h1>
      <CreateFormForm />
    </AppLayout>
  );
}
