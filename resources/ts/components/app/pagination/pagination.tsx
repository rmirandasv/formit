import { Paginated } from "@/types/global";
import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";
export default function Pagination({
  paginated,
}: {
  paginated: Paginated<unknown>;
}) {
  return (
    <BasePagination>
      <PaginationContent>
        {paginated.prev_page_url && (
          <PaginationItem className="text-white hover:text-slate-900">
            <PaginationPrevious
              href={paginated.prev_page_url || ""}
              disabled={!paginated.prev_page_url}
            />
          </PaginationItem>
        )}
        {paginated.links.map((link, index) => {
          if (index === 0) return null;
          if (index === paginated.links.length - 1) return null;
          return (
            <PaginationItem key={index}>
              <PaginationLink
                href={link.url?.toString() ?? "#"}
                isActive={link.active}
                className={clsx(
                  "text-white hover:text-slate-200",
                  link.active
                    ? "bg-slate-700 hover:bg-white hover:text-slate-900"
                    : "hover:bg-slate-600",
                )}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            </PaginationItem>
          );
        })}
        {paginated.next_page_url && (
          <PaginationItem className="p-2">
            <PaginationNext
              className="text-white hover:text-slate-900"
              href={paginated.next_page_url || ""}
              disabled={!paginated.next_page_url}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </BasePagination>
  );
}
