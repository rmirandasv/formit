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
      <div className="flex flex-row space-x-4">
        <div className="flex-1">
          <AccordionTrigger className="text-white text-lg">
            {field.label}
          </AccordionTrigger>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-indigo-600">
            Edit
          </Button>
          <DeleteFormField field={field} />
        </div>
      </div>
      <AccordionContent>
        <div className="flex flex-col space-y-2">
          <span className="text-white text-sm">
            Field type: <strong>{field.type}</strong>
          </span>
          {field.options.length > 0 && (
            <span className="text-white text-sm">
              Options: <strong>{field.options.join(", ")}</strong>
            </span>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
