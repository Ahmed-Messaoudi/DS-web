"use client";

import { ExternalLink } from "lucide-react";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { studentData } from "@/app/data/studentData";

interface CoursePageProps {
    params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: CoursePageProps) {
    const { slug } = use(params);
    const course = studentData.courses.find((c) => c.slug === slug);

    if (!course) return notFound();

    const lessonCount = course.outline?.reduce((sum, section) => sum + section.lessons.length, 0) ?? 0;
    const taskCount = course.tasks?.length ?? 0;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/dashboard/courses" className="font-semibold text-blue-600 dark:text-blue-300">
                    ← Back to courses
                </Link>
                <span className="text-gray-400">/</span>
                <span className="font-semibold text-gray-900 dark:text-gray-50">{course.name}</span>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">Course</p>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">{course.name}</h1>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{course.description}</p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Instructor: {course.instructor}</p>
                        {course.outcomes && (
                            <div className="flex flex-wrap gap-2">
                                {course.outcomes.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-100"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <Stat label="Progress" value={`${course.progress}%`} />
                        <Stat label="Grade" value={course.grade} />
                        <Stat label="Duration" value={course.duration ?? "-"} />
                        <Stat label="Level" value={course.level ?? "-"} />
                    </div>
                </div>
            </motion.section>

            <div className="grid gap-6 lg:grid-cols-3">
                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Course outline</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{lessonCount} lessons across {course.outline?.length ?? 0} modules.</p>
                        </div>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                            Updated weekly
                        </span>
                    </div>

                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        {course.outline?.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: 0.05 + idx * 0.04 }}
                                className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 dark:text-gray-50">{section.title}</p>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{section.lessons.length} lessons</span>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    {section.lessons.map((lesson) => (
                                        <li key={lesson} className="flex items-start gap-2">
                                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                                            <span>{lesson}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Upcoming tasks</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{taskCount > 0 ? "Stay ahead with due dates." : "No tasks posted yet."}</p>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        {course.tasks?.map((task, idx) => (
                            <motion.div
                                key={task.title}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.05 + idx * 0.04 }}
                                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-800"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 dark:text-gray-50">{task.title}</p>
                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{task.type}</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                                    <span>Due {task.due}</span>
                                    <span className="text-gray-500 dark:text-gray-400">Weight {task.weight}</span>
                                </div>
                            </motion.div>
                        ))}
                        {taskCount === 0 && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">Check back soon for new tasks.</p>
                        )}
                    </div>
                </motion.section>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.12 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Resources</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Guides, practice, and references.</p>
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-100">
                        {course.resources?.length ?? 0} links
                    </span>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {course.resources?.map((resource, idx) => (
                        <motion.a
                            key={resource.title}
                            href={resource.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.22, delay: 0.05 + idx * 0.04 }}
                            className="group flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition hover:border-blue-400 hover:bg-white dark:border-gray-800 dark:bg-gray-800 dark:hover:border-blue-400"
                        >
                            <div>
                                <p className="font-semibold text-gray-900 transition-colors duration-150 group-hover:text-black dark:text-gray-50 dark:group-hover:text-black">{resource.title}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{resource.type}</p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-200">
                                Open
                                <ExternalLink className="h-3.5 w-3.5" />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-center text-sm font-semibold text-gray-800 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-50">{value}</p>
        </div>
    );
}