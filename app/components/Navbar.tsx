"use client";

import { LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  studentName: string;
  onToggleSidebar: () => void;
  mobileOpen: boolean;
}

export function Navbar({ studentName, onToggleSidebar, mobileOpen }: NavbarProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("studentEmail");
    router.replace("/");
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none md:hidden dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
            aria-pressed={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
            <Image
              src="/Logo4.png"
              alt="HORIZON"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-cover shadow-sm"
            />
            <span className="hidden sm:inline">HORIZON</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">{studentName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Student</p>
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={handleLogout}
            className="hidden rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 md:inline-flex dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            <span className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
