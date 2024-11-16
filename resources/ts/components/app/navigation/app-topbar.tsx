import { SidebarTrigger } from "@/components/ui/sidebar";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { router, usePage } from "@inertiajs/react";
import { Auth } from "@/types/global";

const AppTopbar: FC = () => {
  const { auth } = usePage().props as unknown as { auth: Auth };

  const handleLogout = () => {
    router.post("/logout");
  };

  return (
    <div className="w-full text-white h-16 flex items-center justify-between px-4">
      <SidebarTrigger className="p-2 bg-slate-800" />
      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger>{auth.user.name}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppTopbar;
