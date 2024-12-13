import { BookText, BrainIcon, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { useMemo } from "react";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "AI Builder",
    url: "/ai-builder",
    icon: BrainIcon,
  },
  {
    title: "Forms",
    url: "/forms",
    icon: BookText,
  },
];

export function AppSidebar() {
  const { url } = usePage();
  const pathname = useMemo(() => url.split("/")[1], [url]);
  return (
    <Sidebar className="border-r-slate-700">
      <SidebarHeader className="bg-slate-800">
        <Link href="/" className="text-white text-2xl">
          Formit
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-slate-800">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={clsx(
                    "text-white",
                    pathname === item.url.split("/")[1] && "bg-slate-700",
                  )}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="bg-slate-800" />
    </Sidebar>
  );
}
