import FormFieldList from "@/components/app/form/form-field-list";
import FormChart from "@/components/app/form/form-stats";
import { DeleteForm } from "@/components/form/form/delete-form";
import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form } from "@/types/global";
import { Link } from "@inertiajs/react";
import { ArrowUpRightSquare } from "lucide-react";

export default function ShowForm({
  form,
  submissionsPerDay,
}: {
  form: Form;
  submissionsPerDay: [{ date: string; submissions: number }];
}) {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([
        { label: "Forms", url: "/forms" },
        { label: form.name, url: `/forms/${form.id}` },
      ])}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-3xl">Form Details</h1>
          <div className="flex items-center space-x-2">
            <Link
              href={form.url}
              className="py-2 px-4 text-indigo-100 text-base flex items-baseline space-x-2 uppercase"
            >
              <span>View</span>
              <ArrowUpRightSquare className="size-6" />
            </Link>
            <Link
              href={`/forms/${form.id}/edit`}
              className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md uppercase"
            >
              Edit
            </Link>
            <DeleteForm form={form} />
          </div>
        </div>
        <Card className="mt-4 bg-slate-800 border-2 border-solid border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Form Information</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-x-1">
                <span className="text-white text-sm">Name:</span>
                <Input value={form.name} disabled className="text-white" />
              </div>
              <div className="flex flex-col space-x-1">
                <span className="text-white font-semibold">Description:</span>
                <Textarea
                  value={form.description}
                  disabled
                  className="text-white"
                />
              </div>
              <div className="flex flex-col space-x-1">
                <span className="text-white font-semibold">Active</span>
                <Switch checked={form.active} disabled />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-4 bg-slate-800 border-2 border-solid border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Form fields</CardTitle>
          </CardHeader>
          <CardContent>
            <FormFieldList fields={form.fields} hideActions />
          </CardContent>
        </Card>
        <FormChart data={submissionsPerDay} />
      </div>
    </AppLayout>
  );
}
