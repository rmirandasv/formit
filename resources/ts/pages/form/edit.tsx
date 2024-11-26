import FormFieldList from "@/components/app/form/form-field-list";
import AddFieldForm from "@/components/form/form/add-field-form";
import { EditForm } from "@/components/form/form/edit-form";
import { FormSettingsForm } from "@/components/form/form/form-settings-form";
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
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-white text-3xl mb-4">Edit {form.name}</h1>
        {form.active && (
          <a
            href={form.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Form
          </a>
        )}
      </div>
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
            <span className="text-white text-lg">Form Fields</span>
            <div className="mt-4 flex flex-col space-y-4">
              <FormFieldList fields={form.fields} />
              <AddFieldForm form={form} />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card className="bg-slate-800 p-4">
            <span className="text-white text-lg">Settings</span>
            <div className="mt-4">
              <FormSettingsForm {...form} />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
