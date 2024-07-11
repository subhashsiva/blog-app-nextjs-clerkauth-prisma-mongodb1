"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const AdminNavRouts = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard/overview",
      label: "Overview",
      active: pathname === "/dashboard/overview",
    },
    {
      href: "/dashboard/users",
      label: "Users",
      active: pathname === "/dashboard/users",
    },
    {
      href: "/dashboard/blogs",
      label: "Blogs",
      active: pathname === "/dashboard/blogs",
    },
  ];
  return (
    <div className="flex items-center justify-center px-8 ">
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
