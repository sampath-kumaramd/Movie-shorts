"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavUserProps {
    data:Category[]
};

const MainNavUser:React.FC<MainNavUserProps> = ({
    data
}) => {
const pathname = usePathname();

const routes = data.map((route) => ({
    href: `/user/category/${route.id}`,
    label: route.name,
    active: pathname === `/user/category/${route.id}`,
}))

  return( <nav
  className="mx-6 flex item space-x-4 lg:space-x-6">
    {routes.map((route) => (
        <Link 
        key={route.href}
        href={route.href}
        className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black dark:text-white" : " text-neutral-500"
        )}>
        {route.label}
        </Link>
    ))}
  </nav>);
};

export default MainNavUser;
