import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Auth } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().max(255),
  email: z.string().email(),
});

export default function Profile() {
  const { auth } = usePage().props as unknown as { auth: Auth };
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: auth.user.name,
      email: auth.user.email,
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    router.put("/profile", data, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully.",
        });
      },
    });
  };
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([{ label: "Profile", url: "/profile" }])}
    >
      <h1 className="text-white text-3xl mb-4">Profile</h1>
      <Card className="bg-slate-800 p-4 flex flex-col">
        <span className="text-white text-lg mb-4">Profile Information</span>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
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
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-white"
                      placeholder="Your email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </AppLayout>
  );
}
