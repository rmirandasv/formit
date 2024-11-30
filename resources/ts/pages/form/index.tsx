import { DeleteForm } from "@/components/form/form/delete-form";
import AppLayout from "@/components/layout/app-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form, Paginated } from "@/types/global";
import { Link } from "@inertiajs/react";

export default function FormIndex({ forms }: { forms: Paginated<Form> }) {
  console.log(forms);
  return (
    <AppLayout breadcrumbs={getBreadcrumb([{ label: "Forms", url: "/forms" }])}>
      <h1 className="text-white text-3xl">Forms</h1>
      <h2 className="text-white text-lg">Manage your forms</h2>
      <div className="mt-4 flex items-center justify-between">
        <Input placeholder="Search forms" className="w-fit" />
        <Link
          href="/forms/create"
          className="p-2 bg-indigo-700 rounded-md text-white"
        >
          Create Form
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {forms.data.map((form) => (
          <Card key={form.id}>
            <CardHeader>
              <CardTitle>{form.name}</CardTitle>
              <CardDescription>{form.description}</CardDescription>
            </CardHeader>
            <CardContent>{form.submissions_count || 0} Submissions</CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/forms/${form.id}`} className="text-indigo-700">
                View
              </Link>
              <Link href={`/forms/${form.id}/edit`} className="text-indigo-700">
                Edit
              </Link>
              <DeleteForm form={form} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
