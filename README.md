# 📚 HORIZON — Student Dashboard (Demo)

HORIZON is a small demo web app that showcases a modern student dashboard: courses, grades, and course detail pages with light/dark mode, responsive layouts, and smooth animations. It is frontend-only with mock data—ideal as an example or starting point.

## ✨ Features

### 🔐 Authentication
- Login page with email/password validation
- LocalStorage-based session persistence
- Demo credentials: any valid email + `password123`

### 📊 Dashboard Pages
1. **Dashboard Home** — animated stat cards (courses, average grade, attendance) and progress bars
2. **Courses** — course cards with progress and instructor info; per-course detail pages with outline, tasks, and resources
3. **Grades** — grade table with averages and color-coding

### 🎨 UI/UX
- Responsive design (mobile/tablet/desktop)
- Light/dark mode toggle with persistence
- Framer Motion entrance/hover animations
- Modern lucide-react icon set

## 🛠️ Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript
- lucide-react

## 📁 Project Structure (key paths)
```
app/
├── components/           # Navbar, Sidebar, ThemeToggle, StatCard, CourseCard
├── data/studentData.ts   # Mock student/courses data
├── dashboard/            # Auth’d pages (home, courses, grades, course detail)
└── page.tsx              # Login page
```

## 🚀 Getting Started
Prereqs: Node 18+ and npm.

Install deps and run dev server:
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build
```

Key data file: mock student/course data lives in [app/data/studentData.ts](app/data/studentData.ts).

## 📝 Status
- Demo/example only. Replace mock data and add real auth/backend before production use.

## 📄 License
See LICENSE (MIT) in the repo.
