"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const MainNav = () => {
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
    <div className="flex items-center justify-center ml-auto px-8 ">
      <ul className=" hidden md:flex  p-5 px-4 items-center gap-4">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-lg text-muted-foreground font-semibold",
              route.active && "font-bold text-purple-700"
            )}
          >
            {route.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};
