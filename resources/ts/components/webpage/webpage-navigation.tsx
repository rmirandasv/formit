import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@inertiajs/react";

const WebpageNavigation: React.FC = () => {
  return (
    <div className="w-full py-2 bg-transparent flex items-center justify-between px-4 lg:px-8">
      <Link className="text-white text-2xl" href="/">
        Formit
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-lg`}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center">
        <Link
          href="/register"
          className="px-4 py-2 bg-gray-100 text-black uppercase rounded-l-lg"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-transparent text-white uppercase border border-white border-l-0 rounded-r-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default WebpageNavigation;
