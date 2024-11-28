import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { FormField as FormFieldType } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  label: z.string().min(3),
  type: z.string(),
  required: z.boolean(),
  options: z.array(z.string()),
});

export default function EditFormField({
  formField,
}: {
  formField: FormFieldType;
}) {
  const fieldForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: formField?.label || "",
      type: formField?.type || "text",
      required: formField?.required || false,
      options: formField?.options || [],
    },
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>("");
  const needOptions = useMemo(
    () => ["radio", "checkbox"].includes(fieldForm.getValues("type")),
    [fieldForm.watch("type")],
  );
  const addOption = useCallback(() => {
    if (!currentOption) return;
    fieldForm.setValue("options", [
      ...fieldForm.getValues("options"),
      currentOption,
    ]);
    setCurrentOption("");
  }, [currentOption, fieldForm]);
  const editOption = useCallback(
    (index: number, value: string) => {
      fieldForm.setValue(
        "options",
        fieldForm
          .getValues("options")
          .map((option, i) => (i === index ? value : option)),
      );
    },
    [fieldForm],
  );
  const removeOption = useCallback(
    (index: number) => {
      const updatedOptions = fieldForm
        .getValues("options")
        .filter((_, i) => i !== index);
      fieldForm.setValue("options", updatedOptions, { shouldDirty: true });
    },
    [fieldForm],
  );
  const onSubmit = useCallback((data: z.infer<typeof formSchema>) => {
    router.put(`/forms/${formField.form_id}/fields/${formField.id}`, data, {
      onSuccess: () => {
        fieldForm.reset();
        setIsOpen(false);
      },
    });
  }, []);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-indigo-600" onClick={() => setIsOpen(true)}>
        Edit
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-slate-200 to-slate-300">
        <SheetHeader>
          <SheetTitle>Field Information</SheetTitle>
          <SheetDescription>Configure the field information</SheetDescription>
        </SheetHeader>
        <Form {...fieldForm}>
          <form
            onSubmit={fieldForm.handleSubmit(onSubmit)}
            className="mt-8 w-full space-y-6"
          >
            <FormField
              name="label"
              control={fieldForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input className="border-2 border-gray-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="type"
              control={fieldForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="border-2 border-gray-400">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="textarea">Textarea</SelectItem>
                        <SelectItem value="radio">Radio</SelectItem>
                        <SelectItem value="checkbox">Checkbox</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {needOptions && (
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Input
                    value={currentOption}
                    onChange={(e) => setCurrentOption(e.target.value)}
                    className="border-2 border-gray-400"
                  />
                  <button
                    type="button"
                    onClick={addOption}
                    className="px-4 py-2 bg-indigo-700 text-white rounded-md ml-2"
                  >
                    <PlusCircledIcon className="size-5" />
                  </button>
                </div>
                {fieldForm.watch("options").map((option, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <Input
                      value={option}
                      onChange={(e) => editOption(index, e.target.value)}
                      className="border-2 border-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className="px-4 py-2 bg-red-700 text-white rounded-md ml-2"
                    >
                      <MinusCircledIcon className="size-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <FormField
              name="required"
              control={fieldForm.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Switch
                        defaultChecked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-slate-800 data-[state=unchecked]:bg-slate-300 border-2 border-gray-500"
                      />
                    </FormControl>
                    <FormLabel>Required</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
