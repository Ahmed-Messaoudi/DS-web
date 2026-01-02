"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CourseCardProps {
    slug: string;
    title: string;
    description: string;
    instructor: string;
    progress: number;
    grade: string;
    delay?: number;
}

export function CourseCard({ slug, title, description, instructor, progress, grade, delay = 0 }: CourseCardProps) {
    const gradeColor = (g: string) => {
        if (g.startsWith("A")) return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200";
        if (g.startsWith("B")) return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200";
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-200";
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay }}
            whileHover={{ translateY: -4 }}
            className="h-full"
        >
            <Link
                href={`/dashboard/courses/${slug}`}
                className="flex h-full flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-400"
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Instructor: {instructor}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${gradeColor(grade)}`}>{grade}</span>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium text-gray-600 dark:text-gray-400">
                        <span>Progress</span>
                        <span className="text-gray-900 dark:text-gray-100">{progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: delay + 0.1 }}
                            className="h-full rounded-full bg-linear-to-r from-blue-600 to-indigo-600"
                        />
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
