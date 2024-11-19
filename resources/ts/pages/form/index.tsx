import AppLayout from "@/components/layout/app-layout";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Form, Paginated } from "@/types/global";
import { Link } from "@inertiajs/react";

export default function FormIndex({ forms }: { forms: Paginated<Form> }) {
  console.log(forms);
  return (
    <AppLayout>
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
      <div className="mt-2 pb-2 border rounded-md bg-slate-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Slug</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {forms.data.length === 0 && (
              <TableRow>
                <TableCell colSpan={2} className="text-center text-white">
                  No forms found
                </TableCell>
              </TableRow>
            )}
            {forms.data.map((form) => (
              <TableRow key={form.id}>
                <TableCell>{form.name}</TableCell>
                <TableCell>{form.slug}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  );
}
