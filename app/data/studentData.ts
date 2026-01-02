// Mock student data - static data stored here
export const studentData = {
    name: "Messaoudi Ahmed",
    email: "alex.johnson@school.edu",
    studentId: "SJ-2024-001",
    courses: [
        {
            id: 1,
            slug: "web-development",
            name: "Web Development (HTML, CSS, JS)",
            description: "Build responsive, accessible websites with semantic HTML, modern CSS, and vanilla JavaScript.",
            instructor: "Ms. Parker",
            progress: 72,
            grade: "B",
            duration: "6 weeks",
            level: "Beginner",
            outcomes: [
                "Write semantic, accessible HTML",
                "Build responsive layouts with Flexbox/Grid",
                "Add interactivity with DOM events and Fetch API",
            ],
            outline: [
                {
                    title: "Foundations",
                    lessons: ["Semantic HTML structure", "Accessibility basics (labels, alt, landmarks)", "CSS cascade and selectors"],
                },
                {
                    title: "Layouts",
                    lessons: ["Flexbox navigation and cards", "Grid landing pages", "Fluid typography and spacing scales"],
                },
                {
                    title: "JavaScript Essentials",
                    lessons: ["DOM querying and events", "Stateful UI patterns", "Fetch API with JSON"],
                },
            ],
            tasks: [
                { title: "Responsive layout lab", due: "Jan 12", type: "Assignment", weight: "10%" },
                { title: "JS DOM mini-project", due: "Jan 22", type: "Project", weight: "15%" },
            ],
            resources: [
                { title: "MDN Accessibility guide", type: "Article", link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility" },
                { title: "Flexbox Froggy", type: "Practice", link: "https://flexboxfroggy.com/" },
                { title: "You Don't Know JS - Up & Going", type: "Book", link: "https://github.com/getify/You-Dont-Know-JS" },
            ],
        },
        {
            id: 2,
            slug: "data-structures",
            name: "Data Structures",
            description: "Master arrays, stacks, queues, trees, and graphs with practical coding exercises.",
            instructor: "Dr. Lee",
            progress: 58,
            grade: "B-",
            duration: "7 weeks",
            level: "Intermediate",
            outcomes: [
                "Implement core structures in code",
                "Analyze time/space complexity",
                "Traverse trees and graphs with DFS/BFS",
            ],
            outline: [
                { title: "Linear structures", lessons: ["Arrays vs linked lists", "Stacks/queues implementations", "Two-pointer patterns"] },
                { title: "Trees", lessons: ["Binary trees traversals", "BST operations", "Heap basics and priority queues"] },
                { title: "Graphs", lessons: ["Adjacency list vs matrix", "DFS/BFS use-cases", "Shortest paths intro (Dijkstra)"] },
            ],
            tasks: [
                { title: "Trees and graphs quiz", due: "Jan 15", type: "Quiz", weight: "15%" },
                { title: "Implement priority queue", due: "Jan 24", type: "Assignment", weight: "10%" },
            ],
            resources: [
                { title: "Visualgo traversals", type: "Demo", link: "https://visualgo.net/en" },
                { title: "Big O cheat sheet", type: "Reference", link: "https://www.bigocheatsheet.com/" },
                { title: "UCSD DS notes", type: "Notes", link: "https://cse100.ucsd.edu" },
            ],
        },
        {
            id: 3,
            slug: "databases",
            name: "Databases",
            description: "Design relational schemas and write SQL for queries, joins, and indexing.",
            instructor: "Prof. Rivera",
            progress: 82,
            grade: "A-",
            duration: "6 weeks",
            level: "Intermediate",
            outcomes: [
                "Design normalized schemas",
                "Write joins and aggregations",
                "Use indexes for query performance",
            ],
            outline: [
                { title: "Modeling", lessons: ["ER diagrams", "Normalization (1NF-3NF)", "Keys and relationships"] },
                { title: "SQL Queries", lessons: ["INNER/LEFT joins", "Aggregations and grouping", "Subqueries and CTEs"] },
                { title: "Performance", lessons: ["Indexes and EXPLAIN", "Transactions and ACID", "Basic optimization steps"] },
            ],
            tasks: [
                { title: "SQL joins project", due: "Jan 18", type: "Project", weight: "20%" },
                { title: "Indexing lab", due: "Jan 27", type: "Lab", weight: "10%" },
            ],
            resources: [
                { title: "SQLBolt lessons", type: "Practice", link: "https://sqlbolt.com/" },
                { title: "Use The Index, Luke", type: "Article", link: "https://use-the-index-luke.com/" },
                { title: "PostgreSQL EXPLAIN", type: "Docs", link: "https://www.postgresql.org/docs/current/using-explain.html" },
            ],
        },
        {
            id: 4,
            slug: "machine-learning",
            name: "Machine Learning Basics",
            description: "Learn supervised learning, model evaluation, and simple ML workflows.",
            instructor: "Dr. Chen",
            progress: 64,
            grade: "B",
            duration: "8 weeks",
            level: "Intermediate",
            outcomes: [
                "Frame supervised learning problems",
                "Train and evaluate baseline models",
                "Avoid overfitting with validation and regularization",
            ],
            outline: [
                { title: "Foundations", lessons: ["Train/validation/test splits", "Bias-variance intuition", "Metrics: accuracy, F1, RMSE"] },
                { title: "Models", lessons: ["Linear/logistic regression", "k-NN and decision trees", "Regularization basics"] },
                { title: "Workflow", lessons: ["Preprocessing and scaling", "Cross-validation", "Error analysis"] },
            ],
            tasks: [
                { title: "Model evaluation worksheet", due: "Jan 20", type: "Worksheet", weight: "5%" },
                { title: "Baseline classifier build", due: "Jan 29", type: "Project", weight: "15%" },
            ],
            resources: [
                { title: "Coursera ML notes (Week 2)", type: "Notes", link: "https://www.coursera.org/learn/machine-learning" },
                { title: "scikit-learn quickstart", type: "Docs", link: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html" },
                { title: "Bias-variance tradeoff", type: "Article", link: "https://developers.google.com/machine-learning/crash-course/generalization/peril-of-overfitting" },
            ],
        },
    ],
    upcoming: [
        { course: "Web Development", title: "Responsive layout lab", due: "Jan 12", type: "Assignment", weight: "10%" },
        { course: "Data Structures", title: "Trees and graphs quiz", due: "Jan 15", type: "Quiz", weight: "15%" },
        { course: "Databases", title: "SQL joins project", due: "Jan 18", type: "Project", weight: "20%" },
        { course: "Machine Learning", title: "Model evaluation worksheet", due: "Jan 20", type: "Worksheet", weight: "5%" },
    ],
    resources: [
        { course: "Web Development", title: "MDN Flexbox guide", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox" },
        { course: "Data Structures", title: "Visualgo traversal demos", link: "https://visualgo.net/en" },
        { course: "Databases", title: "SQLBolt interactive lessons", link: "https://sqlbolt.com/" },
        { course: "Machine Learning", title: "Google ML Crash Course", link: "https://developers.google.com/machine-learning/crash-course" },
    ],
    grades: [
        { subject: "Web Development", percentage: 82 },
        { subject: "Data Structures", percentage: 74 },
        { subject: "Databases", percentage: 88 },
        { subject: "Machine Learning", percentage: 79 },
        { subject: "Discrete Math", percentage: 85 },
        { subject: "Communication", percentage: 90 },
    ],
    attendance: 93,
    defaultPassword: "password123", // For demo purposes
};

// Helper function to calculate average grade
export const calculateAverageGrade = () => {
    const grades = studentData.grades.map((g) => g.percentage);
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    return Math.round(average * 10) / 10;
};
