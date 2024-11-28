import PublicFormLayout from "@/components/layout/public-form-layout";
import { Form } from "@/types/global";

export default function ThankYout({ form }: { form: Form }) {
  return (
    <PublicFormLayout>
      <div>
        <h1 className="text-3xl text-white font-bold text-center mt-8">
          {form.name}
        </h1>
        <p className="text-center text-white mt-4">{form.description}</p>
        <div className="flex justify-center mt-8">
          <p className="text-white text-center">
            Thank you for submitting your response.
          </p>
        </div>
      </div>
    </PublicFormLayout>
  );
}
