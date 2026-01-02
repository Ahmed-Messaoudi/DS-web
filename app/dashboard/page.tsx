"use client";

import { BookOpenCheck, CheckCircle2, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { StatCard } from "@/app/components/StatCard";
import { calculateAverageGrade, studentData } from "../data/studentData";

export default function DashboardPage() {
    const averageGrade = calculateAverageGrade();
    const courseCount = studentData.courses.length;

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Welcome back, {studentData.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Here is your snapshot for the semester.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard title="Active Courses" value={courseCount} icon={<BookOpenCheck className="h-5 w-5" />} />
                <StatCard title="Average Grade" value={`${averageGrade}%`} icon={<LineChart className="h-5 w-5" />} delay={0.05} />
                <StatCard title="Attendance" value={`${studentData.attendance}%`} icon={<CheckCircle2 className="h-5 w-5" />} delay={0.1} />
            </div>

            <section className="grid gap-6 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Course Progress</h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{courseCount} courses</span>
                    </div>
                    <div className="space-y-4">
                        {studentData.courses.slice(0, 3).map((course) => (
                            <div key={course.id} className="space-y-2">
                                <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300">
                                    <span>{course.name}</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-50">{course.progress}%</span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${course.progress}%` }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="h-full rounded-full bg-linear-to-r from-blue-600 to-indigo-600"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Notes</h2>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                        <li>• Keep practicing JavaScript for the web development course.</li>
                        <li>• Aim to raise Data Structures progress above 60% this week.</li>
                        <li>• Review SQL joins for the upcoming databases quiz.</li>
                    </ul>
                </motion.div>
            </section>
        </div>
    );
}
