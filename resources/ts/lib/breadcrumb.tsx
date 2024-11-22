import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@inertiajs/react";
import React from "react";

type Crumb = {
  label: string;
  url: string;
};

export function getBreadcrumb(crumbs: Crumb[]): React.ReactNode {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index === crumbs.length - 1 ? (
                <BreadcrumbPage className="text-white hover:text-white">
                  {crumb.label}
                </BreadcrumbPage>
              ) : (
                <Link className="hover:text-white" href={crumb.url}>
                  {crumb.label}
                </Link>
              )}
            </BreadcrumbItem>
            {index !== crumbs.length - 1 && (
              <BreadcrumbSeparator className="text-white">
                /
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
