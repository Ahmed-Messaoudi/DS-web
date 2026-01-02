# 📚 HORIZON

HORIZON is a modern, animated student dashboard built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. This is a fully functional frontend-only application perfect for educational projects and demos.

## ✨ Features

### 🔐 Authentication
- **Login Page** with email and password validation
- LocalStorage-based session management
- Demo credentials: any valid email + `password123`
- Automatic redirect to dashboard when logged in

### 📊 Dashboard Pages
1. **Dashboard Home** - Welcome page with animated stat cards
   - Total courses enrolled
   - Average grade percentage
   - Attendance percentage
   - Performance charts and progress bars

2. **Courses** - Browse all enrolled courses
   - Course cards with progress bars
   - Instructor information
   - Individual course grades
   - Course performance summary

3. **Grades** - Detailed grade tracking
   - Grade table with all subjects
   - Color-coded grades (A, B, C, D, F)
   - Average grade calculation
   - Performance insights and analytics

### 🎨 User Interface
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark/Light Mode** - Toggle with localStorage persistence
- **Modern Navigation** - Sticky navbar and collapsible sidebar
- **Smooth Animations** - Framer Motion for entrance and hover effects
- **Clean Components** - Reusable, well-structured React components

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Storage**: Browser LocalStorage
- **Package Manager**: npm

## 📁 Project Structure

```
app/
├── components/           # Reusable React components
│   ├── Navbar.tsx       # Top navigation bar
│   ├── Sidebar.tsx      # Left sidebar navigation
│   ├── ThemeToggle.tsx  # Dark/Light mode toggle
│   ├── StatCard.tsx     # Animated stat cards
│   ├── CourseCard.tsx   # Course display card
│   └── index.ts         # Component exports
├── data/
│   └── studentData.ts   # Mock student data
├── dashboard/
│   ├── layout.tsx       # Dashboard layout with auth check
│   ├── page.tsx         # Dashboard home
│   ├── courses/
│   │   └── page.tsx     # Courses page
│   └── grades/
│       └── page.tsx     # Grades page
├── page.tsx             # Login page
├── layout.tsx           # Root layout
├── globals.css          # Global styles
└── providers.tsx        # Theme provider (setup file)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### Login Credentials
- **Email**: Any valid email format (e.g., `student@example.com`)
- **Password**: `password123`

## 📖 How to Use

### 1. Login
Visit the login page and enter valid credentials. You'll be redirected to the dashboard.

### 2. Explore Dashboard
- View your overall statistics and performance
- Check attendance and average grades
- See performance trends

### 3. Browse Courses
- View all enrolled courses
- Check individual progress bars
- See course grades and instructor information

### 4. Check Grades
- View all subject grades in a detailed table
- See color-coded letter grades
- Analyze performance insights
- Identify areas for improvement

### 5. Toggle Theme
Click the sun/moon icon in the navbar to switch between light and dark modes.

### 6. Logout
Click the "Logout" button to clear session and return to login page.

## 🎨 Customization

### Adding New Courses
Edit `app/data/studentData.ts`:
```typescript
{
  id: 7,
  name: "Art History",
  instructor: "Ms. Brown",
  progress: 76,
  grade: "C+",
}
```

### Changing Student Info
Update `app/data/studentData.ts`:
```typescript
export const studentData = {
  name: "Your Name",
  email: "your@email.com",
  // ... rest of data
};
```

### Modifying Demo Password
In `app/data/studentData.ts`:
```typescript
defaultPassword: "your-new-password"
```

## 🎬 Animation Details

- **Page Transitions**: Smooth fade-in animations on page load
- **Card Animations**: Staggered entrance animations for stat and course cards
- **Hover Effects**: Scale and shadow effects on interactive elements
- **Progress Bars**: Animated progress bars with easing
- **Background Blobs**: Animated gradient blobs on login page
- **Theme Toggle**: Rotating icon with smooth transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (single column layouts)
- **Tablet**: 640px - 1024px (2-column layouts)
- **Desktop**: > 1024px (3-column layouts, visible sidebar)

## 🔒 Security Notes

⚠️ **This is a frontend-only application for educational purposes.**

- No real authentication or backend verification
- Data is stored in browser localStorage
- Do not use for production applications
- Consider adding proper backend authentication for real applications

## 🚀 Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📝 Code Quality

- ✅ TypeScript for type safety
- ✅ Clear, commented code
- ✅ Semantic HTML
- ✅ Tailwind utility classes only
- ✅ No external CSS files
- ✅ Reusable components
- ✅ Professional animations

## 🎓 Learning Resources

This project demonstrates:
- Next.js App Router with file-based routing
- Client-side state management with hooks
- Tailwind CSS responsive design
- Framer Motion animations
- TypeScript best practices
- Component composition and reusability
- Dark mode implementation
- LocalStorage usage
- Form validation

## 📄 License

This project is open source and available for educational use.

## 🎯 Demo Walkthrough (10 minutes)

1. **Login** (1 min)
   - Show login page design
   - Demonstrate validation errors
   - Log in with demo credentials

2. **Dashboard Home** (2 min)
   - Show animated stat cards
   - Highlight performance metrics
   - Explain the dashboard overview

3. **Courses Page** (3 min)
   - Browse through course cards
   - Show progress bars
   - Highlight grade colors

4. **Grades Page** (2 min)
   - Show the grades table
   - Explain color-coded system
   - Show performance insights

5. **Theme Toggle** (1 min)
   - Switch between light and dark modes
   - Show persistence on refresh
   - Logout and show login page

6. **Mobile Responsive** (1 min)
   - Resize browser to show responsive design
   - Show mobile navigation

## 🤝 Contributing

Feel free to fork, modify, and improve this project for your educational needs!

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ for students and educators**
