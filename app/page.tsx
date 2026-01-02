"use client";

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { studentData } from "./data/studentData";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      router.replace("/dashboard");
    }
  }, [router]);

  const validate = () => {
    if (!email.trim()) return "Email is required";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Enter a valid email";
    if (!password) return "Password is required";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (password === studentData.defaultPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("studentEmail", email);
      router.replace("/dashboard");
    } else {
      setError("Incorrect password. Hint: password123");
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex flex-col gap-2 text-center">
            <div className="mx-auto h-12 w-12 overflow-hidden rounded-xl shadow-sm">
              <Image src="/Logo4.png" alt="HORIZON" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">HORIZON</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sign in with any email and the demo password to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                placeholder="password123"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-100">
                {error}
              </p>
            )}

            <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-100">
              Demo password: <span className="font-semibold">password123</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex w-full items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700"
            >
              Sign in
            </motion.button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
