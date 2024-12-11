import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, router, usePage } from "@inertiajs/react";
import { Auth } from "@/types/global";

type AppTopbarProps = {
  breadcrumbs?: React.ReactNode;
};

const AppTopbar: FC<AppTopbarProps> = ({ breadcrumbs }) => {
  const { auth } = usePage().props as unknown as { auth: Auth };

  const handleLogout = () => {
    router.post("/logout");
  };

  return (
    <div className="w-full text-white min-h-16 h-auto flex flex-col lg:flex-row items-center justify-between px-4 py-2 lg:py-0">
      <div className="w-full flex items-center justify-between lg:justify-normal lg:space-x-3">
        <SidebarTrigger className="p-2 bg-slate-800" />
        <div className="hidden lg:flex lg:self-start w-10/12">
          {breadcrumbs}
        </div>
        <div className="flex items-center space-x-3 w-2/12 justify-end text-nowrap">
          <DropdownMenu>
            <DropdownMenuTrigger>{auth.user.name}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-4 py-1 w-full flex justify-start lg:hidden">
        {breadcrumbs}
      </div>
    </div>
  );
};

export default AppTopbar;
