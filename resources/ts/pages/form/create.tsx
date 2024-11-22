import { CreateFormForm } from "@/components/form/form/create-form";
import AppLayout from "@/components/layout/app-layout";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function CreateForm() {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([
        { label: "Forms", url: "/forms" },
        { label: "Create Form", url: "/forms/create" },
      ])}
    >
      <h1 className="text-white text-3xl mb-4">Create Form</h1>
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General Information</TabsTrigger>
          <TabsTrigger
            value="fields"
            disabled
            title="You need to create a form first"
          >
            Form Fields
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            disabled
            title="You need to create a form first"
          >
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card className="bg-slate-800 p-4 flex flex-col">
            <span className="text-white text-lg mb-4">General Information</span>
            <CreateFormForm />
            <span className="text-white text-sm mt-4">
              You can add fields and settings after creating the form.
            </span>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
