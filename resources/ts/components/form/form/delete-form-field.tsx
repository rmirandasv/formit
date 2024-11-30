import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "@/types/global";
import { router } from "@inertiajs/react";
import { useCallback, useState } from "react";

export default function DeleteFormField({ field }: { field: FormField }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleDelete = useCallback(() => {
    setIsLoading(true);
    router.delete(`/forms/${field.form_id}/fields/${field.id}`, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: "Field Deleted",
          description: "Your form field has been deleted.",
        });
      },
    });
  }, [field]);
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-600">Delete</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete {field.label}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your form
            field and all of its data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-500"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
