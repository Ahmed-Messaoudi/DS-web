"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar, Sidebar } from "@/app/components";
import { studentData } from "../data/studentData";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (!isLoggedIn) {
            router.replace("/");
        }
    }, [router]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
            <Navbar
                studentName={studentData.name}
                mobileOpen={mobileOpen}
                onToggleSidebar={() => setMobileOpen((prev) => !prev)}
            />

            <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 md:px-6">
                <Sidebar />

                <div className="flex-1 space-y-4">
                    {mobileOpen && <Sidebar variant="mobile" onNavigate={() => setMobileOpen(false)} />}

                    <main className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
