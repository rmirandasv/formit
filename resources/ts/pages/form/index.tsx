import AppLayout from "@/components/layout/app-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form, Paginated } from "@/types/global";
import { Link } from "@inertiajs/react";
import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { FilePlus, MoreVerticalIcon, PlusIcon } from "lucide-react";

export default function FormIndex({ forms }: { forms: Paginated<Form> }) {
  return (
    <AppLayout breadcrumbs={getBreadcrumb([{ label: "Forms", url: "/forms" }])}>
      <h1 className="text-white text-2xl lg:text-3xl">Forms</h1>
      <h2 className="text-white text-lg">Manage your forms</h2>
      <div className="mt-4 flex items-center justify-between">
        <Input placeholder="Search forms" className="w-fit" />
        <Link
          href="/forms/create"
          className="p-2 bg-indigo-700 rounded-md text-white"
        >
          <div>
            <span className="hidden lg:flex">Create Form</span>
            <PlusIcon className="lg:hidden" />
          </div>
        </Link>
      </div>
      {forms.data.length === 0 && (
        <Card className="mt-4 bg-transparent">
          <CardContent className="p-4 flex flex-col">
            <FilePlus className="size-16 self-center text-white" />
            <p className="text-center text-white text-2xl font-bold">
              No forms found
            </p>
            <p className="text-center text-white">
              Create a new form to get started
            </p>
            <Link
              href="/forms/create"
              className="mt-4 p-2 bg-indigo-700 rounded-md text-white self-center"
            >
              Create Form
            </Link>
          </CardContent>
        </Card>
      )}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forms.data.map((form) => (
          <Card key={form.id}>
            <CardHeader>
              <CardTitle className="line-clamp-1">{form.name}</CardTitle>
              <CardDescription className="line-clamp-1">
                {form.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <span className="text-4xl font-bold">
                {form.submissions_count || 0}
              </span>
              <span className="text-lg">Submissions</span>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              {form.active ? (
                <span className="text-green-600">Active</span>
              ) : (
                <span className="text-red-600">Inactive</span>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVerticalIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href={`/forms/${form.id}`}
                      className="w-full flex items-center space-x-2"
                    >
                      <EyeOpenIcon />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href={`/forms/${form.id}/edit`}
                      className="w-full flex items-center space-x-2 text-indigo-600"
                    >
                      <Pencil1Icon />
                      <span>Edit</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
