import FormSubmissionResult from "@/components/app/form/form-submission-result";
import Pagination from "@/components/app/pagination/pagination";
import AppLayout from "@/components/layout/app-layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { Form, FormSubmission, Paginated } from "@/types/global";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function FormSubmissions({
  form,
  submissions,
}: {
  form: Form;
  submissions: Paginated<FormSubmission>;
}) {
  const [perPage, setPerPage] = useState<string>("10");
  const handleItemsPerPageChange = (itemsPerPage: string) => {
    setPerPage(itemsPerPage);
    router.replace(
      `/forms/${form.id}/submissions?page=1&per_page=${itemsPerPage}`,
    );
  };
  useEffect(() => {
    setPerPage(submissions.per_page.toString());
  }, [submissions.per_page]);
  return (
    <AppLayout
      breadcrumbs={getBreadcrumb([
        { label: "Forms", url: "/forms" },
        { label: form.name, url: `/forms/${form.id}` },
        { label: "Submissions", url: `/forms/${form.id}/submissions` },
      ])}
    >
      <h1 className="text-white text-3xl">Form Submissions</h1>
      <div className="mt-4 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-start">
            <Pagination paginated={submissions} />
          </div>
          <div className="flex items-center space-x-4">
            <Select onValueChange={handleItemsPerPageChange} value={perPage}>
              <SelectTrigger className="w-40 bg-slate-800 text-white text-base">
                <SelectValue placeholder="10 per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Items per page</SelectLabel>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="75">75</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <a
              download
              href={`/forms/${form.id}/submissions/export`}
              className="py-2 px-4 bg-slate-800 text-white rounded-md"
            >
              Export
            </a>
          </div>
        </div>
        {submissions.data.map((submission) => (
          <FormSubmissionResult key={submission.id} submission={submission} />
        ))}
        <Pagination paginated={submissions} />
      </div>
    </AppLayout>
  );
}
