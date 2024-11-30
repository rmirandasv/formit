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
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/types/global";
import { router } from "@inertiajs/react";
import { useCallback, useState } from "react";

export function DeleteForm({ form }: { form: Form }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const handleDelete = useCallback(() => {
    setIsLoading(true);
    router.delete(`/forms/${form.id}`, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: "Form deleted",
          description: `${form.name} has been deleted.`,
        });
      },
    });
  }, [form]);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete {form.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the form
            and all of its data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isLoading} onClick={handleDelete}>
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
