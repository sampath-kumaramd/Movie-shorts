"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}:React.HtmlHTMLAttributes<HTMLElement>){
    const pathname = usePathname();
    const params = useParams();

    const routes =[
        {
            href: "/admin/billboards",
            label: "Billboards",
            active: pathname === "/admin/billboards",
        },
        {
            href: "/admin/categories",
            label: "Categories",
            active: pathname === "/admin/categories",
        },
        {
            href: "/admin/actors",
            label: "Actors",
            active: pathname === "/admin/actors",
        },
        {
            href: "/admin/movies",
            label: "Movies",
            active: pathname === "/admin/movies",
        }
        
    ];

    return (
        <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
        {routes.map((route) => (
            <Link 
            key={route.href} 
            href={route.href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-black dark:text-white" : " text-muted-foreground"
            )}
            >
            {route.label}
            </Link>
        ))}
        </nav>
    )
};