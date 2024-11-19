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
import { Textarea } from "@/components/ui/textarea";
import { Form as FormType } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(3),
  description: z.string().nullable(),
});

export const EditForm: FC<FormType> = ({ id, name, description }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name,
      description,
    },
  });
  const onSubmit = useCallback(
    (data: z.infer<typeof FormSchema>) => {
      setIsLoading(true);
      router.put(`/forms/${id}`, data);
      setIsLoading(false);
    },
    [id],
  );
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input
                  className="text-white"
                  placeholder="Your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Description</FormLabel>
              <FormControl>
                <Textarea
                  className="text-white"
                  placeholder="Your description"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          variant="outline"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
};
