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
    <div className="w-full text-white h-16 flex items-center justify-between px-4">
      <div className="flex items-center space-x-3">
        <SidebarTrigger className="p-2 bg-slate-800" />
        {breadcrumbs}
      </div>
      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger>{auth.user.name}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppTopbar;
