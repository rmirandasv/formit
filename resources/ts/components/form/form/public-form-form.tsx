import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Form as FormType } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";

export const DynamicForm = ({ form }: { form: FormType }) => {
  const dynamicSchema: Record<string, ZodSchema> = {};
  form.fields.forEach((field) => {
    const baseSchema = z.string();
    dynamicSchema[field.label] = field.required
      ? baseSchema.min(1, `${field.label} is required`)
      : baseSchema.optional();
  });

  const schema = z.object(dynamicSchema);

  type FormData = z.infer<typeof schema>;

  // Configuración de react-hook-form con el esquema Zod
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: form.fields.reduce(
      (acc, field) => {
        acc[field.label] = field.type === "checkbox" ? [] : "";
        return acc;
      },
      {} as Record<string, FormData[keyof FormData]>,
    ),
  });

  const { handleSubmit, control, getValues } = formMethods;

  const onSubmit = (data: FormData) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <Form {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        {form.fields.map((field) => (
          <FormField
            key={field.id}
            control={control}
            name={field.label}
            render={({ field: fieldProps }) => (
              <FormItem>
                <FormLabel className="text-white">{field.label}</FormLabel>
                <FormControl>
                  <div>
                    {field.type === "text" && (
                      <Input
                        placeholder={field.label}
                        {...fieldProps}
                        required={field.required}
                      />
                    )}
                    {field.type === "textarea" && (
                      <Textarea
                        placeholder={field.label}
                        onChange={fieldProps.onChange}
                        required={field.required}
                      />
                    )}
                    {field.type === "radio" && field.options && (
                      <RadioGroup
                        onValueChange={fieldProps.onChange}
                        className="space-y-2"
                      >
                        {field.options.map((option: string) => (
                          <div
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={option} />
                            <label className="text-white">{option}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                    {field.type === "checkbox" && field.options && (
                      <div className="space-y-2">
                        {field.options.map((option: string) => (
                          <div
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              onCheckedChange={(checked) => {
                                const currentValues =
                                  getValues(field.label) || [];
                                const updatedValues = checked
                                  ? [...currentValues, option]
                                  : currentValues.filter(
                                      (val: string) => val !== option,
                                    );
                                fieldProps.onChange(updatedValues);
                              }}
                            />
                            <label className="text-white">{option}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="flex justify-end">
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
