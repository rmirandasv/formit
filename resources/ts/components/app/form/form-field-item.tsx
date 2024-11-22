import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormField } from "@/types/global";

export default function FormFieldItem({ field }: { field: FormField }) {
  return (
    <AccordionItem value={field.id.toString()} className="bg-slate-700 p-4">
      <AccordionTrigger className="text-white">{field.label}</AccordionTrigger>
      <AccordionContent>{field.type}</AccordionContent>
    </AccordionItem>
  );
}
