import FormFieldList from "@/components/app/form/form-field-list";
import AddFieldForm from "@/components/form/form/add-field-form";
import { EditForm } from "@/components/form/form/edit-form";
import AppLayout from "@/components/layout/app-layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form } from "@/types/global";

export default function EditFormPage({ form }: { form: Form }) {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([
        { label: "Forms", url: "/forms" },
        { label: form.name, url: `/forms/${form.id}/edit` },
      ])}
    >
      <h1 className="text-white text-3xl mb-4">Edit {form.name}</h1>
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General Information</TabsTrigger>
          <TabsTrigger value="fields">Form Fields</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card className="bg-slate-800 p-4 flex flex-col">
            <span className="text-white text-lg mb-4">General Information</span>
            <EditForm {...form} />
          </Card>
        </TabsContent>
        <TabsContent value="fields">
          <Card className="bg-slate-800 p-4">
            <span className="text-white text-lg mb-4">Form Fields</span>
            <FormFieldList fields={form.fields} />
            <AddFieldForm form={form} />
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card className="bg-slate-800 p-4">
            <span className="text-white text-lg mb-4">Settings</span>
            <p>Settings</p>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
