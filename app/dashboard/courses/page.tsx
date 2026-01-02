"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { CourseCard } from "@/app/components/CourseCard";
import { studentData } from "@/app/data/studentData";

export default function CoursesPage() {
    const avgProgress = Math.round(
        studentData.courses.reduce((sum, c) => sum + c.progress, 0) / studentData.courses.length
    );
    const topCourse = studentData.courses.reduce((best, c) => (c.progress > best.progress ? c : best));

    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Courses</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track your progress across each subject.</p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
                {studentData.courses.map((course, idx) => (
                    <CourseCard
                        key={course.id}
                        slug={course.slug}
                        title={course.name}
                        description={course.description ?? ""}
                        instructor={course.instructor}
                        progress={course.progress}
                        grade={course.grade}
                        delay={idx * 0.05}
                    />
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Average progress</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50">{avgProgress}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Across {studentData.courses.length} active courses</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Top course</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">{topCourse.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{topCourse.progress}% complete</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Instructor: {topCourse.instructor}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active courses</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50">{studentData.courses.length}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Keep momentum on weekly goals</p>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Upcoming work</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">What is due next across your classes.</p>
                        </div>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-100">
                            {studentData.upcoming.length} items
                        </span>
                    </div>
                    <div className="mt-4 space-y-3">
                        {studentData.upcoming.map((item, idx) => (
                            <motion.div
                                key={`${item.course}-${item.title}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: idx * 0.04 }}
                                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-gray-800 dark:bg-gray-800"
                            >
                                <div className="space-y-1">
                                    <p className="font-semibold text-gray-900 dark:text-gray-50">{item.title}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{item.course} • {item.type}</p>
                                </div>
                                <div className="text-right text-xs font-semibold text-gray-700 dark:text-gray-200">
                                    <p>Due {item.due}</p>
                                    <p className="text-gray-500 dark:text-gray-400">Weight {item.weight}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Study resources</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quick links curated for each course.</p>
                    <div className="mt-4 space-y-3">
                        {studentData.resources.map((resource, idx) => (
                            <motion.a
                                key={resource.title}
                                href={resource.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: 0.05 + idx * 0.04 }}
                                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm shadow-sm transition hover:border-blue-400 hover:bg-white dark:border-gray-800 dark:bg-gray-800 dark:hover:border-blue-400"
                            >
                                <div>
                                    <p className="font-semibold text-gray-900 transition-colors duration-150 group-hover:text-black dark:text-gray-50 dark:group-hover:text-black">{resource.title}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{resource.course}</p>
                                </div>
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-200">
                                    Open
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
