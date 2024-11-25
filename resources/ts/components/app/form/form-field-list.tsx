import { Accordion } from "@/components/ui/accordion";
import { FormField } from "@/types/global";
import FormFieldItem from "./form-field-item";
import clsx from "clsx";

export default function FormFieldList({ fields }: { fields: FormField[] }) {
  return (
    <Accordion type="multiple">
      {fields.map((field) => (
        <FormFieldItem
          key={field.id}
          field={field}
          className={clsx(
            field.id === fields[0].id && "rounded-t-md",
            field.id === fields[fields.length - 1].id && "rounded-b-md",
          )}
        />
      ))}
    </Accordion>
  );
}
