# Yassine Kamoun — Creative 3D Developer Portfolio

A personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Three.js**.

Designed for **Yassine Kamoun**, Full Stack Web Developer based in Casablanca, Morocco.

---

## 🌟 Key Features

- **Futuristic 3D Identity**: Interactive Three.js geometric scene featuring a rotating dual-torus knot core, wireframe icosahedron, orbiting rings, and reactive mouse parallax.
- **Dark Futuristic Visual Design**: Deep charcoal/black canvas with purple (`#8b5cf6`), electric blue (`#3b82f6`), and cyan (`#06b6d4`) glows and glassmorphism.
- **Interactive Project Showcase**: High-impact cards for Advvm Sportswear, TechPal Golf Teetime, GymFlow, and Full Stack E-commerce with technology tags and conditional live demo/GitHub triggers.
- **Categorized Technical Matrix**: Frontend, Backend, Database, and Developer Tooling with interactive category filters.
- **Education & Credentials**: Displays the Specialized Technician Diploma in Digital Development (Web Full Stack) from ISTA Arts Graphiques Casablanca.
- **Configurable Experience Pathway**: Built with an expandable architecture for future internships and career milestones.
- **Direct Multi-Channel Contact**: Client-side mailto form, direct email copy, telephone call button, and WhatsApp messaging (+212 651199965).
- **Desktop Custom Cursor**: Smooth lerp cursor with interactive hover detection, automatically disabled on touch devices or under reduced-motion mode.
- **Production Performance**: Code splitting, Three.js chunk isolation, SEO metadata, and responsive layouts across mobile, tablet, and widescreen.

---

## 📁 Project Architecture

```
my portfolio/
├── public/
│   ├── favicon.svg              # Custom YK monogram SVG favicon
│   └── projects/                # Place project screenshot images here
├── src/
│   ├── assets/                  # Static assets & logos
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed glassmorphic navigation with mobile drawer
│   │   ├── Hero.jsx             # Full-screen hero section with CTA & social links
│   │   ├── HeroThreeScene.jsx   # Three.js 3D geometric interactive scene
│   │   ├── About.jsx            # Biography, core pillars & education badges
│   │   ├── Skills.jsx           # Categorized technical toolkit & filter tabs
│   │   ├── Projects.jsx         # Project gallery with live indicators & modals
│   │   ├── ProjectVisualPlaceholder.jsx # 3D styled visual fallback for projects
│   │   ├── Experience.jsx       # 5 core focus domains & career pathway
│   │   ├── Education.jsx        # Specialized Technician Diploma credentials
│   │   ├── Contact.jsx          # Multi-channel contact hub & mailto form
│   │   ├── Footer.jsx           # Footer with social links & back-to-top
│   │   ├── CustomCursor.jsx     # Desktop smooth follower cursor
│   │   ├── LoadingScreen.jsx    # Futuristic initialization loader
│   │   └── SocialIcons.jsx      # Pixel-perfect GitHub & LinkedIn SVG icons
│   ├── data/
│   │   ├── personalInfo.js      # Single source of truth for personal data
│   │   ├── skills.js            # Frontend, Backend, DB & Tools lists
│   │   ├── projects.js          # Project definitions & media links
│   │   ├── experience.js        # Timeline items & professional focus areas
│   │   └── education.js         # Degree, institution, and competencies
│   ├── App.jsx                  # Main application layout
│   ├── index.css                # Tailwind CSS v4 imports & custom glows
│   └── main.jsx                 # React root entry point
├── index.html                   # HTML template with SEO & Open Graph meta
├── package.json                 # Dependencies & project scripts
└── vite.config.js               # Vite + Tailwind + Three.js chunk configuration
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) installed on your system.

### Installation
Open your terminal in the project directory and install the dependencies:
```bash
npm install
```

### Run Locally (Development)
Start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the live website.

### Production Build
Generate an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ How to Customize & Update Your Portfolio

### 1. Update Personal Information
Edit `src/data/personalInfo.js`:
- Change your email, phone, location, or social links.
- All components throughout the site update automatically.

### 2. How to Add New Projects
Open `src/data/projects.js` and add a new project object to the `projects` array:
```javascript
{
  id: "my-new-project",
  title: "PROJECT TITLE",
  category: "Web Application",
  badge: "Full Stack",
  description: "A description of what your project does and the problem it solves.",
  technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
  image: "/projects/my-screenshot.png", // or leave "" to use the 3D placeholder
  liveUrl: "https://my-demo-url.com",   // leave "" if no live link exists
  githubUrl: "https://github.com/...", // leave "" if repository is private
  featured: true,
  highlights: [
    "Feature one description",
    "Feature two description"
  ]
}
```

### 3. How to Replace Project Screenshots
1. Take a screenshot of your project (recommended aspect ratio: 16:9 or ~1200x675px).
2. Save the image in `public/projects/` (e.g. `public/projects/advvm.png`).
3. In `src/data/projects.js`, set the `image` property to `"/projects/advvm.png"`.
4. If `image` is left empty `""`, the portfolio automatically renders a 3D isometric visual placeholder.

### 4. How to Add Internships & Work Experience
Edit `src/data/experience.js` and append an entry to `experienceTimeline`:
```javascript
{
  id: "internship-2026",
  role: "Full Stack Web Developer Intern",
  company: "Company Name",
  period: "July 2026 – September 2026",
  location: "Casablanca, Morocco",
  type: "Internship",
  status: "Completed",
  description: "Developed and maintained full-stack web applications...",
  keyPoints: [
    "Contributed to frontend React components and Laravel API endpoints.",
    "Optimized database queries in MySQL."
  ]
}
```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yassine Kamoun portfolio"
   git remote add origin https://github.com/yassinekamoune47-ctrl/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your portfolio repository.
4. Leave build settings as default:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live with a free SSL certificate!

### Deploying to Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Click **Add new site** > **Import an existing project** from GitHub.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

---

## 📄 License
This project is open-source and created for Yassine Kamoun.
