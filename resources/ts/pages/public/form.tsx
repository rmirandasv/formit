import { DynamicForm } from "@/components/form/form/public-form-form";
import PublicFormLayout from "@/components/layout/public-form-layout";
import { Form } from "@/types/global";

export default function PublicForm({ form }: { form: Form }) {
  return (
    <PublicFormLayout>
      <div>
        <h1 className="text-3xl text-white font-bold text-center mt-8">
          {form.name}
        </h1>
        <p className="text-center text-white mt-4">{form.description}</p>
        <div className="mt-8 flex flex-col">
          <DynamicForm form={form} />
        </div>
      </div>
    </PublicFormLayout>
  );
}
