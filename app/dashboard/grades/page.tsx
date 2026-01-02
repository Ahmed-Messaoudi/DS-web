"use client";

import { motion } from "framer-motion";
import { calculateAverageGrade, studentData } from "@/app/data/studentData";

const gradeLetter = (percentage: number) => {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
};

const gradeBadge = (percentage: number) => {
    if (percentage >= 90) return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-100";
    if (percentage >= 80) return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-100";
    if (percentage >= 70) return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-100";
    return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-100";
};

const statusInfo = (percentage: number) => {
    if (percentage >= 85) return { label: "On track", tone: "text-green-700 dark:text-green-200" };
    if (percentage >= 75) return { label: "Keep pushing", tone: "text-blue-700 dark:text-blue-200" };
    return { label: "Needs review", tone: "text-amber-700 dark:text-amber-200" };
};

export default function GradesPage() {
    const averageGrade = calculateAverageGrade();
    const topGrade = studentData.grades.reduce((best, current) =>
        current.percentage > best.percentage ? current : best
        , studentData.grades[0]);
    const lowGrade = studentData.grades.reduce((worst, current) =>
        current.percentage < worst.percentage ? current : worst
        , studentData.grades[0]);

    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Grades</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Overview of your current performance across all subjects.</p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Average grade</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-gray-50">{averageGrade}%</span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                            {gradeLetter(averageGrade)}
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Best subject</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">{topGrade.subject}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{topGrade.percentage}%</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Lowest subject</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">{lowGrade.subject}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{lowGrade.percentage}%</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Subjects tracked</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50">{studentData.grades.length}</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="hidden grid-cols-12 items-center gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400 md:grid">
                    <span className="col-span-5">Subject</span>
                    <span className="col-span-3">Percentage</span>
                    <span className="col-span-2">Letter</span>
                    <span className="col-span-2">Status</span>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                    {studentData.grades.map((grade, idx) => {
                        const status = statusInfo(grade.percentage);

                        return (
                            <motion.div
                                key={grade.subject}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 + idx * 0.04 }}
                                className="grid grid-cols-12 items-center gap-4 px-4 py-4 md:hover:bg-gray-50 md:dark:hover:bg-gray-800"
                            >
                                <div className="col-span-12 space-y-1 md:col-span-5">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">{grade.subject}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 md:hidden">{grade.percentage}% • {status.label}</p>
                                </div>

                                <div className="col-span-12 md:col-span-3">
                                    <div className="flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-gray-50">
                                        <span>{grade.percentage}%</span>
                                    </div>
                                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${grade.percentage}%` }}
                                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 + idx * 0.04 }}
                                            className="h-full rounded-full bg-linear-to-r from-blue-600 to-indigo-600"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-2">
                                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${gradeBadge(grade.percentage)}`}>
                                        {gradeLetter(grade.percentage)}
                                    </span>
                                </div>

                                <div className="col-span-6 text-sm font-semibold md:col-span-2">
                                    <span className={status.tone}>{status.label}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
