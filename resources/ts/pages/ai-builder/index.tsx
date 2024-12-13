import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  message: z.string(),
});

export default function AIBuilderIndex() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    router.post("/api/ai-builder", data);
  };
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([{ label: "AI Builder", url: "/ai-builder" }])}
    >
      <h1 className="text-2xl lg:text-3xl text-white font-semibold">
        AI Builder
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-4 flex flex-col"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="h-36">
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="text-white bg-slate-700"
                    placeholder="Enter your message"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button variant="secondary" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </AppLayout>
  );
}
