"use client";

import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MainNav } from "./main-nav";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ToggleMenu = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact us",
      active: pathname === "/contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="ml-auto block md:hidden pl-4">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <ul className=" flex flex-col items-start gap-4 px-4 ml-auto">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-lg font-semibold text-muted-foreground",
                route.active && "font-bold text-purple-700"
              )}
            >
              {route.label}
            </Link>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
