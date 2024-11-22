import { Accordion } from "@/components/ui/accordion";
import { FormField } from "@/types/global";
import FormFieldItem from "./form-field-item";

export default function FormFieldList({ fields }: { fields: FormField[] }) {
  return (
    <Accordion type="multiple">
      {fields.map((field) => (
        <FormFieldItem key={field.id} field={field} />
      ))}
    </Accordion>
  );
}
