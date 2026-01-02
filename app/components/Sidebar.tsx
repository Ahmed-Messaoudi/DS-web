"use client";

import { BarChart3, BookOpen, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/dashboard/courses", label: "Courses", Icon: BookOpen },
    { href: "/dashboard/grades", label: "Grades", Icon: BarChart3 },
];

interface SidebarProps {
    variant?: "desktop" | "mobile";
    onNavigate?: () => void;
}

export function Sidebar({ variant = "desktop", onNavigate }: SidebarProps) {
    const pathname = usePathname();
    const baseClasses =
        variant === "desktop"
            ? "hidden md:flex w-64 flex-shrink-0 flex-col border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
            : "md:hidden w-full border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 rounded-lg";

    return (
        <aside className={baseClasses}>
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const isDashboard = item.href === "/dashboard";
                    const isActive = isDashboard
                        ? pathname === "/dashboard"
                        : pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onNavigate}
                            className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                                }`}
                        >
                            <item.Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
