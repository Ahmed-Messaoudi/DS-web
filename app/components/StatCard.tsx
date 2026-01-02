"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    delay?: number;
}

export function StatCard({ title, value, icon, delay = 0 }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay }}
            className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">{title}</span>
                <span className="text-lg text-gray-800 dark:text-gray-100" aria-hidden>
                    {icon}
                </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">{value}</div>
        </motion.div>
    );
}
