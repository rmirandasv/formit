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
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form } from "@/types/global";
import { Link } from "@inertiajs/react";
import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";

type DashboardProps = {
  forms: Form[];
};

const Dashboard: React.FC<DashboardProps> = ({ forms }) => {
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([{ label: "Dashboard", url: "/dashboard" }])}
    >
      <h1 className="text-2xl lg:text-3xl text-white font-bold">Dashboard</h1>
      {forms.length === 0 && (
        <Card className="mt-4 bg-transparent">
          <CardContent className="p-4 flex flex-col">
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
        {forms.map((form) => (
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
};

export default Dashboard;
