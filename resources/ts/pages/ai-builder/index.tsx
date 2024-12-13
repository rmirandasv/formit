import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { AIMessage } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Markdown from "react-markdown";
import { z } from "zod";

const formSchema = z.object({
  message: z.string(),
});

export default function AIBuilderIndex() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    axios
      .post("/api/ai-builder", data)
      .then((response) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: data.message, response: response.data.response },
        ]);
        form.reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([{ label: "AI Builder", url: "/ai-builder" }])}
    >
      <h1 className="text-2xl lg:text-3xl text-white font-semibold">
        AI Builder
      </h1>
      {messages.length > 0 && (
        <Card className="mt-4 bg-transparent">
          <CardContent className="flex flex-col space-y-4 p-4">
            {messages.map((message, index) => (
              <div key={index} className="p-4 bg-slate-800 rounded-md">
                <div className="flex flex-col">
                  <span className="text-white font-bold">Message</span>
                  <p className="text-white text-pretty">{message.message}</p>
                </div>
                <div className="mt-2 flex flex-col">
                  <span className="text-white font-bold">Response</span>
                  <Markdown className="text-white text-pretty">
                    {message.response}
                  </Markdown>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
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
