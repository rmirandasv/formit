import DeleteFormField from "@/components/form/form/delete-form-field";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FormField } from "@/types/global";
import clsx from "clsx";

export default function FormFieldItem({
  field,
  className,
}: {
  field: FormField;
  className?: string;
}) {
  return (
    <AccordionItem
      value={field.id.toString()}
      className={clsx("bg-slate-700 border px-4", className)}
    >
      <div className="flex flex-row justify-between">
        <AccordionTrigger className="text-white text-lg">
          {field.label}
        </AccordionTrigger>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-indigo-600">
            Edit
          </Button>
          <DeleteFormField field={field} />
        </div>
      </div>
      <AccordionContent>{field.type}</AccordionContent>
    </AccordionItem>
  );
}
