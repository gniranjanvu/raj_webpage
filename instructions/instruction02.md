# 🎯 PRUDHVI RAJ CHALAPAKA
## Personal Portfolio - Complete Technical Specification Document

> **Version:** 1.0.0  
> **Last Updated:** 2026-02-04  
> **Author:** Prudhvi Raj Chalapaka  
> **Status:** Ready for Development  
> **Contact:** prudhvirajchalapaka07@gmail.com | +91 7995511692

---

# 📑 TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Design System](#3-design-system)
4. [Public Portfolio - All Sections](#4-public-portfolio---all-sections)
5. [Public Portfolio - Dynamic Pages](#5-public-portfolio---dynamic-pages)
6. [Admin Dashboard - Complete Specification](#6-admin-dashboard---complete-specification)
7. [Database Schema](#7-database-schema)
8. [API Endpoints](#8-api-endpoints)
9. [Animation Specifications](#9-animation-specifications)
10. [Responsive Design](#10-responsive-design)
11. [Project Structure](#11-project-structure)
12. [Email Templates](#12-email-templates)
13. [Default Data (From Resume)](#13-default-data-from-resume)
14. [Implementation Roadmap](#14-implementation-roadmap)
15. [Deployment Guide](#15-deployment-guide)

---

# 1. PROJECT OVERVIEW

## 1.1 Project Description

An industry-grade personal portfolio website for **Prudhvi Raj Chalapaka**, a Robotics & Automation Engineer. Features stunning animations, modern design combining Apple's Liquid Glass (60%), Nothing's Minimalism (30%), and Google's Material Design (10%). Includes comprehensive admin dashboard with OTP-based email authentication.

## 1.2 Owner Information

```yaml
Personal Information:
  Name: Prudhvi Raj Chalapaka
  Title: Robotics & Automation Engineer
  Email: prudhvirajchalapaka07@gmail.com
  Phone: +91 7995511692
  Location: Guntur, India
  Website: prudhvirajchalapaka.in
  LinkedIn: linkedin.com/in/prudhvirajchalapaka
  GitHub: github.com/prudhvirajchalapaka

Profile Summary: |
  Ambitious Robotics & Automation Engineer with a strong foundation in ROS/ROS2, 
  Industrial Automation and autonomous navigation. Proven research capability with 
  an Elsevier-hosted publication on integrating robotic surgery and pharmacotherapy. 
  Combining hands-on experience in simulation (Gazebo/Webots) and embedded systems, 
  I aim to advance the field of autonomy technologies through rigorous academic 
  research and practical innovation.
```

## 1.3 Reference Designs

| Website | Inspiration Elements |
|---------|---------------------|
| https://ruckie.cz/en | Interactive animations, scroll effects |
| https://www.wildishandco.co.uk/ | Typography, layout structure |
| https://jaquier.dev/ | Hero section, contact layout |

## 1.4 Design Philosophy: The Golden Ratio

```
╔════════════════════════════════════════════════════════════════════════════╗
║                         THE GOLDEN RATIO FORMULA                           ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  60% APPLE LIQUID GLASS (The Environment)                                 ║
║  • Frosted glass effects (backdrop-blur)                                  ║
║  • Subtle depth and layered shadows                                       ║
║  • Smooth, fluid transitions (300-500ms)                                  ║
║  • Luminous gradients and light play                                      ║
║  • Premium, refined aesthetics                                            ║
║                                                                            ║
║  30% NOTHING MINIMALIST (The Data)                                        ║
║  • Clean, bold typography (Space Grotesk)                                 ║
║  • Dot-matrix patterns as texture                                         ║
║  • Monospace technical accents (JetBrains Mono)                           ║
║  • High contrast black/white elements                                     ║
║  • Red accent color (#D71921)                                             ║
║                                                                            ║
║  10% MATERIAL EXPRESSIVE (The Action)                                     ║
║  • FAB (Floating Action Buttons)                                          ║
║  • Ripple effects on tap/click                                            ║
║  • Toggle switches with animation                                         ║
║  • Elevated states on interaction                                         ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

## 1.5 Complete Site Map

```
PUBLIC PAGES:
─────────────────────────────────────────────────────────────────────────────
/                                    → Home (Single Page Application)
├── #home                            → Hero Section
├── #experience                      → Experience Section
├── #education                       → Education Section  
├── #projects                        → Featured Projects Section
├── #skills                          → Skills Section
├── #achievements                    → Achievements Section
├── #publications                    → Publications Section
├── #contact                         → Contact Section
└── Footer                           → Footer with Newsletter

/experience/[slug]                   → Experience Detail Page
/education/[slug]                    → Education Detail Page
/projects                            → All Projects Page
/projects/[slug]                     → Project Detail Page

ADMIN PAGES:
─────────────────────────────────────────────────────────────────────────────
/admin                               → Login Page (OTP)
/admin/dashboard                     → Dashboard Home
/admin/experiences                   → Experience List
/admin/experiences/new               → Add Experience
/admin/experiences/[id]              → Edit Experience
/admin/education                     → Education List
/admin/education/new                 → Add Education
/admin/education/[id]                → Edit Education
/admin/projects                      → Projects List
/admin/projects/new                  → Add Project
/admin/projects/[id]                 → Edit Project
/admin/projects/[id]/comments        → Manage Comments
/admin/skills                        → Skills Manager
/admin/skills/categories             → Skill Categories
/admin/certifications                → Certifications List
/admin/certifications/new            → Add Certification
/admin/certifications/[id]           → Edit Certification
/admin/achievements                  → Achievements List
/admin/achievements/new              → Add Achievement
/admin/achievements/[id]             → Edit Achievement
/admin/publications                  → Publications List
/admin/publications/new              → Add Publication
/admin/publications/[id]             → Edit Publication
/admin/messages                      → Messages Inbox
/admin/messages/[id]                 → Message Detail
/admin/subscribers                   → Subscribers List
/admin/resume                        → Resume Manager
/admin/gallery                       → Gallery Manager (Coming Soon)
/admin/settings                      → Settings
/admin/settings/account              → Account Settings
/admin/settings/site                 → Site Settings
/admin/settings/security             → Security Settings
```

---

# 2. TECH STACK & DEPENDENCIES

## 2.1 Core Technologies

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js (App Router) | 14.x+ | Full-stack React |
| Language | TypeScript | 5.x | Type safety |
| Styling | Tailwind CSS | 3.4.x | Utility CSS |
| Animation | Framer Motion | 10.x | React animations |
| Animation | GSAP + ScrollTrigger | 3.12.x | Scroll effects |
| Database | Supabase (PostgreSQL) | Latest | Data & Realtime |
| Auth | Supabase Auth | Latest | OTP Authentication |
| Storage | Supabase Storage | Latest | File uploads |
| Email | Resend | 2.x | Transactional emails |
| Hosting | Vercel | Latest | Deployment |
| VCS | GitHub | - | Source control |

## 2.2 Package.json

```json
{
  "name": "prudhviraj-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:types": "supabase gen types typescript --project-id YOUR_PROJECT_ID > types/supabase.ts"
  },
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.1",
    "tailwind-merge": "^2.2.0",
    "clsx": "^2.1.0",
    "class-variance-authority": "^0.7.0",
    "framer-motion": "^10.18.0",
    "gsap": "^3.12.4",
    "@gsap/react": "^2.0.0",
    "lenis": "^1.0.42",
    "@supabase/supabase-js": "^2.39.0",
    "@supabase/ssr": "^0.1.0",
    "resend": "^2.1.0",
    "@react-email/components": "^0.0.14",
    "lucide-react": "^0.312.0",
    "@tiptap/react": "^2.2.0",
    "@tiptap/starter-kit": "^2.2.0",
    "@tiptap/extension-image": "^2.2.0",
    "@tiptap/extension-link": "^2.2.0",
    "@tiptap/extension-placeholder": "^2.2.0",
    "react-hook-form": "^7.49.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "react-dropzone": "^14.2.0",
    "date-fns": "^3.2.0",
    "sonner": "^1.3.0",
    "sharp": "^0.33.0",
    "uuid": "^9.0.0",
    "recharts": "^2.10.0",
    "embla-carousel-react": "^8.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0",
    "prettier": "^3.2.0",
    "supabase": "^1.136.0"
  }
}
```

## 2.3 Environment Variables

```env
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend
RESEND_API_KEY=re_your-api-key
RESEND_FROM_EMAIL=noreply@prudhvirajchalapaka.in
ADMIN_EMAIL=prudhvirajchalapaka07@gmail.com

# App
NEXT_PUBLIC_APP_URL=https://prudhvirajchalapaka.in
NEXT_PUBLIC_APP_NAME="Prudhvi Raj Chalapaka"
```

---

# 3. DESIGN SYSTEM

## 3.1 Color Tokens

```css
:root {
  /* Apple Glass */
  --glass-bg: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(255, 255, 255, 0.3);
  --blur-lg: 24px;
  
  /* Nothing Colors */
  --nothing-white: #FFFFFF;
  --nothing-black: #000000;
  --nothing-red: #D71921;
  
  /* Gray Scale */
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E5E5E5;
  --gray-300: #D4D4D4;
  --gray-400: #A3A3A3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;
  
  /* Material */
  --material-primary: #6750A4;
  --material-secondary: #625B71;
  --ripple-color: rgba(103, 80, 164, 0.12);
  
  /* Semantic */
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

## 3.2 Typography

```css
:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  --text-hero: clamp(3rem, 10vw, 10rem);
}
```

## 3.3 Spacing

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  
  --section-padding: clamp(4rem, 10vh, 8rem);
  --container-max: 1400px;
}
```

## 3.4 Component Classes

```css
/* Glass Card */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-lg));
  border: 1px solid var(--glass-border);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Material Button */
.btn-primary {
  background: var(--material-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.2s;
}

/* Nothing Tag */
.tag-nothing {
  background: var(--nothing-black);
  color: var(--nothing-white);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
}
```

---

# 4. PUBLIC PORTFOLIO - ALL SECTIONS

## 4.1 Navigation Component

```yaml
Component: Navigation
File: components/layout/Navigation.tsx
Position: Fixed top, z-index: 50

Structure:
┌────────────────────────────────────────────────────────────────────────┐
│ [PRUDHVI]     Home  Experience  Education  Projects  Skills     [☀️][CV]│
└────────────────────────────────────────────────────────────────────────┘

Behavior:
  - Transparent on hero (scrollY < 100)
  - Glass background after scroll
  - Hide on scroll down, show on scroll up
  - Mobile: Hamburger → Full-screen menu

Nav Links:
  - Home → #home
  - Experience → #experience
  - Education → #education
  - Projects → #projects
  - Skills → #skills
  - Achievements → #achievements
  - Publications → #publications
  - Contact → #contact

Right Actions:
  - Theme Toggle (Sun/Moon)
  - "Download CV" button

Mobile Menu:
  - Full screen overlay
  - Centered links (large)
  - Social icons at bottom
  - X close button

Animations:
  - Background opacity transition (300ms)
  - Mobile menu slide from right
  - Links stagger fade (50ms each)
  - Active link underline animation
```

---

## 4.2 HERO SECTION (#home)

```yaml
Section: Hero
ID: home
Height: 100vh
Background: Animated gradient mesh

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                              [Navigation]                                  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│           #ROS2 🤖                                    #AI 🧠               │
│                                                                            │
│    #Embedded ⚡          ╔═══════════════════════╗                         │
│                          ║                       ║                         │
│                          ║    PRUDHVI RAJ        ║        #Vision 👁️      │
│    #PLC 🔧               ║                       ║                         │
│                          ╚═══════════════════════╝                         │
│                                                                            │
│                    Robotics & Automation Engineer                          │
│                         (Typewriter effect)                                │
│                                                                            │
│                            ┌────────┐                                      │
│                            │  📷    │  Profile Photo                       │
│                            │        │  (Liquid glass border)               │
│                            └────────┘                                      │
│                                                                            │
│      "Ambitious engineer with expertise in ROS/ROS2, Industrial           │
│       Automation, and autonomous navigation systems."                      │
│                                                                            │
│                  [View My Work]    [Download CV]                           │
│                                                                            │
│    #Debugging 🐛                                  #Gazebo 🌐               │
│                                                                            │
│                               ↓                                            │
│                          Scroll Down                                       │
└────────────────────────────────────────────────────────────────────────────┘

Components:

1. ANIMATED NAME
   - Text: "PRUDHVI RAJ"
   - Font: Space Grotesk, Black (900)
   - Size: clamp(3rem, 10vw, 10rem)
   - Animation: Letter-by-letter reveal, stagger 0.05s
   - Effect: Gradient text shimmer

2. PROFESSIONAL TITLE (Typewriter)
   - Cycles through:
     • "Robotics & Automation Engineer"
     • "ROS/ROS2 Developer"
     • "Industrial Automation Specialist"
     • "Research Enthusiast"
   - Cursor blink animation
   - 3 second per title, loop

3. PROFILE PHOTO
   - Size: 200px mobile / 280px desktop
   - Shape: Circle
   - Border: Animated gradient (liquid glass)
   - Animation: Subtle float, scale on hover
   - Fallback: Initials "PR" gradient

4. DESCRIPTION
   - Text: 2-3 line profile summary
   - Max-width: 600px
   - Animation: Fade in after name

5. CTA BUTTONS
   - Primary: "View My Work" → #projects
   - Secondary: "Download CV" → Resume download
   - Style: Material ripple effect

6. FLOATING STICKERS (Random positions, float animation)
   - "#ROS2 🤖"
   - "#Embedded ⚡"
   - "#AI 🧠"
   - "#PLC 🔧"
   - "#Debugging 🐛"
   - "#NavStack 🗺️"
   - "#Gazebo 🌐"
   - "#Computer Vision 👁️"

7. SCROLL INDICATOR
   - Position: Bottom center
   - Animation: Bounce
   - Text: "Scroll Down"
   - Icon: Chevron down or mouse

Animations:
  - Name: splitText reveal with GSAP
  - Stickers: Float with random delays
  - Background: Gradient mesh animation
  - Transition to next: Parallax fade
```

---

## 4.3 EXPERIENCE SECTION (#experience)

```yaml
Section: Experience
ID: experience
Scroll Effect: STICKY CARD STACK
Transition In: Fade + Y translation

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   // 01                                                                    │
│   EXPERIENCE                                                               │
│   ───────────────────                                                      │
│   Where I've Worked                                                        │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                                                           [01]   │    │
│   │   ┌──────┐                                                       │    │
│   │   │ LOGO │  KARTHIKESH ROBOTICS                                 │    │
│   │   └──────┘                                                       │    │
│   │                                                                  │    │
│   │   ROBOTICS ENGINEER INTERN                                       │    │
│   │   ═══════════════════════════                                    │    │
│   │                                                                  │    │
│   │   📅 May 2025 - Nov 2025                                        │    │
│   │   📍 Chennai, India                                              │    │
│   │                                                                  │    │
│   │   • Developed Autonomous Mobile Robots                          │    │
│   │   • Worked on ROS2 and Visualization tools                      │    │
│   │   • Implemented Path Planning Algorithms                        │    │
│   │                                                                  │    │
│   │   [ROS2] [Python] [Navigation] [SLAM]                           │    │
│   │                                                                  │    │
│   │                                        [View Details →]          │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│   (Cards stack and pin while scrolling, new cards slide over)             │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

SCROLL BEHAVIOR (Sticky Stack):
  1. Section pins when reaching top
  2. First card is visible
  3. On scroll, next card slides up and overlays previous
  4. Previous cards scale down slightly and move down
  5. Corner number visible on each card
  6. Different background per card (gradient variations)
  7. After last card, section unpins

CARD STRUCTURE:
┌────────────────────────────────────────────────────────────────────────────┐
│ Corner Number (01, 02, 03...)              Top-right, large, 10% opacity   │
├────────────────────────────────────────────────────────────────────────────┤
│ Company Logo          60x60px, rounded, links to company website          │
│ Company Name          text-xl, bold                                        │
│ Role Title            text-3xl, bold, primary color                       │
│ Timeline              📅 MMM YYYY - MMM YYYY (or "Present")               │
│ Location              📍 City, Country                                     │
│ Description           3-4 bullet points                                    │
│ Tech Tags             Pill badges [ROS2] [Python] [etc]                   │
│ View Details Button   Links to /experience/[slug]                         │
└────────────────────────────────────────────────────────────────────────────┘

CARD BACKGROUNDS (Rotate through):
  1. Purple-blue gradient mesh
  2. Dot matrix pattern (Nothing style)
  3. Subtle geometric grid
  4. Abstract shapes gradient

DEFAULT DATA (From Resume):
  Card 1:
    - Role: Robotics Engineer Intern
    - Company: Karthikesh Robotics Private Limited
    - Period: May 2025 - Nov 2025
    - Location: Chennai, India
    - Points:
      • Developed Autonomous Mobile Robots
      • Worked on ROS2 and Visualization tools
      • Implemented Path Planning Algorithms for Arms and Mobile robots
    - Tags: [ROS2, Python, Path Planning, AMR]

  Card 2:
    - Role: Teaching Assistantship Intern
    - Company: Vignan's University
    - Period: Jan 2025 - Apr 2025
    - Location: Guntur, India
    - Points:
      • Taught Students about ROS in Practical Sessions
      • Worked on Research Project for autonomous Robot
      • Helped with Robot Mechanisms, Kinematical & Dynamical Analysis
    - Tags: [ROS, Teaching, Research, Kinematics]

  Card 3:
    - Role: ROS Intern
    - Company: Karthikesh Robotics Private Limited
    - Period: Jan 2025 - Feb 2025
    - Location: Online
    - Points:
      • Worked with ROS2 Framework
      • Learned Docker & GUI for ROS2
    - Tags: [ROS2, Docker, Linux]

ANIMATIONS:
  - Section entry: Header slides in from left
  - Cards: GSAP ScrollTrigger sticky stack
  - Card hover: Slight lift with shadow
  - Tags: Stagger fade in
  - View button: Arrow slides right on hover
```

---

## 4.4 EDUCATION SECTION (#education)

```yaml
Section: Education
ID: education
Scroll Effect: 3D CARD STACK WITH DEPTH
Transition In: Cards fly in from different angles
3D Elements: Floating graduation cap, books (Three.js/Spline optional)

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   // 02                                                                    │
│   EDUCATION                                                                │
│   ───────────────────                                                      │
│   My Academic Journey                                                      │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│        ┌─────────────────────┐                                             │
│       ┌┴────────────────────┐│  ← Stacked cards with perspective          │
│      ┌┴────────────────────┐││                                             │
│      │                     │││                                             │
│      │  🎓                 │││                                             │
│      │  ────────────────   │││                                             │
│      │                     │││                                             │
│      │  B.Tech             ││┘                                             │
│      │  Robotics &         │┘                                              │
│      │  Automation         │                                               │
│      │                     │                                               │
│      │  Vignan's University│                                               │
│      │  2021 - 2025        │                                               │
│      │  CGPA: 7.62/10      │                                               │
│      │                     │                                               │
│      │  [View Details →]   │                                               │
│      └─────────────────────┘                                               │
│                                                                            │
│   (Cards spread out on scroll, rotate in 3D space)                        │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

SCROLL BEHAVIOR (3D Stack):
  1. Cards initially stacked with slight offset
  2. On scroll, cards spread apart
  3. Each card rotates slightly in 3D
  4. Hover reveals more details
  5. Click opens detail page

CARD STRUCTURE:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │   [Institution Logo/Image - Hero]                                  │   │
│  │                                                                    │   │
│  │   DEGREE/PROGRAM                                                   │   │
│  │   ══════════════                                                   │   │
│  │   Major: Robotics & Automation                                     │   │
│  │                                                                    │   │
│  │   🏛️ Institution Name                                             │   │
│  │   📅 2021 - 2025                                                   │   │
│  │   📊 CGPA: 7.62/10                                                 │   │
│  │                                                                    │   │
│  │   Short description about the program and achievements...          │   │
│  │                                                                    │   │
│  │   [View Details →]                                                 │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

DEFAULT DATA (From Resume):

  Card 1 (Latest):
    - Degree: B.Tech
    - Major: Robotics & Automation
    - Institution: Vignan's University
    - Period: 2021 - 2025
    - Grade: CGPA: 7.62/10
    - Location: Guntur

  Card 2:
    - Degree: Intermediate
    - Major: MPC (Maths, Physics, Chemistry)
    - Institution: NRI Junior College
    - Period: 2019 - 2021
    - Grade: 804/1000
    - Location: Tenali

  Card 3:
    - Degree: SSC (10th)
    - Major: General
    - Institution: Gretnaltes Public School
    - Period: 2018 - 2019
    - Grade: GPA: 9.2/10
    - Location: Duggirala

ANIMATIONS:
  - Entry: Cards fly in from different Y positions
  - Stack: Cards have translateZ for depth
  - Scroll: Spread animation with rotation
  - Hover: Card lifts, shows full content
  - 3D objects: Floating cap/books (optional)
```

---

## 4.5 PROJECTS SECTION (#projects)

```yaml
Section: Projects (Featured)
ID: projects
Scroll Effect: HORIZONTAL PARALLAX GALLERY
Transition In: SHATTERED IMAGE TRANSITION (robotics-themed image breaks apart)

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ████████████████████████████████████████████████████████████████████    │
│   █  SCROLL-DRIVEN SHATTERED TRANSITION (Robotics image)             █    │
│   ████████████████████████████████████████████████████████████████████    │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   // 03                                                                    │
│   PROJECTS                                                                 │
│   ───────────────────                                                      │
│   Featured Work                                                            │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ← HORIZONTAL SCROLL GALLERY →                                           │
│                                                                            │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│   │             │  │             │  │             │  │             │      │
│   │   IRAVATH   │  │  DWA LOCAL  │  │  MECANUM    │  │  MODULAR    │      │
│   │   ═══════   │  │  PLANNER    │  │  ROBOT      │  │  MFG SYS    │      │
│   │             │  │             │  │             │  │             │      │
│   │  Autonomous │  │  Turtlebot3 │  │  Multipurp. │  │  Automated  │      │
│   │  Rover      │  │  Custom     │  │  Mobile     │  │  Industry   │      │
│   │             │  │             │  │             │  │             │      │
│   │  [ROS]      │  │  [ROS2]     │  │  [Arduino]  │  │  [PLC]      │      │
│   │  [Jetson]   │  │  [Gazebo]   │  │  [Gazebo]   │  │  [Sensors]  │      │
│   │             │  │             │  │             │  │             │      │
│   │  [View →]   │  │  [View →]   │  │  [View →]   │  │  [View →]   │      │
│   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘      │
│                                                                            │
│                              • • • • •                                     │
│                                                                            │
│                     [View All Projects →]                                  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

SHATTERED TRANSITION:
  - As user scrolls from Education to Projects
  - A robotics-themed image (robot arm, circuit, etc.) appears
  - Image breaks into 20+ fragments
  - Fragments scatter with physics-like animation
  - Reveals Projects section underneath
  - Duration: 1.5s, ease: power4.out

HORIZONTAL PARALLAX BEHAVIOR:
  1. Section pins when reaching viewport
  2. Vertical scroll → Horizontal movement
  3. Cards have parallax (different speeds)
  4. Dynamic font sizes on cards (scale based on position)
  5. After last card, shows "View All" button
  6. Continue scroll → Section unpins

PROJECT CARD STRUCTURE:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────┐         │
│   │                                                             │         │
│   │   [HERO IMAGE - Parallax on hover]                         │         │
│   │                                                             │         │
│   ├─────────────────────────────────────────────────────────────┤         │
│   │                                                             │         │
│   │   FEATURED                      (badge if featured)         │         │
│   │                                                             │         │
│   │   PROJECT TITLE                                             │         │
│   │   ═════════════                                             │         │
│   │                                                             │         │
│   │   Category: Autonomous Navigation                           │         │
│   │                                                             │         │
│   │   Brief description of the project in 2-3 lines            │         │
│   │   explaining what it does and its significance...          │         │
│   │                                                             │         │
│   │   [ROS] [Python] [Jetson] [ML]                             │         │
│   │                                                             │         │
│   │   [View Project →]                                          │         │
│   │                                                             │         │
│   └─────────────────────────────────────────────────────────────┘         │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

DEFAULT FEATURED PROJECTS (From Resume):

  Project 1: IRAVATH
    - Category: Autonomous Navigation
    - Hero: Rover image
    - Tech: [ROS, NavStack, Nvidia Jetson, ML]
    - Description: Autonomous Rover with 3D-printed components, 
      trained for object detection and measurement, 
      Rocker-Boggie mechanism for terrain stability
    - Featured: Yes

  Project 2: DWA LOCAL PLANNER
    - Category: Path Planning
    - Hero: Turtlebot3 simulation
    - Tech: [ROS2, Gazebo, RViz]
    - Description: Custom Local DWA Planner without 
      standard nav2 packages
    - Featured: Yes

  Project 3: MECANUM WHEELED MOBILE ROBOT
    - Category: Mobile Robotics
    - Hero: Mecanum robot image
    - Tech: [Arduino, Gazebo, ROS]
    - Description: Mecanum wheeled robot with manipulator 
      for Agriculture, Hospitality, Housekeeping
    - Featured: Yes

  Project 4: MODULAR MANUFACTURING SYSTEM
    - Category: Industrial Automation
    - Hero: PLC system image
    - Tech: [Pneumatics, PLC, Arduino]
    - Description: Automated manufacturing system 
      using onboard sensor data
    - Featured: Yes

  Project 5: ROBOTIC ARM
    - Category: Manipulators
    - Hero: 6DOF arm image
    - Tech: [Arduino, Custom PCB, Android]
    - Description: 6DOF Robotic Arm designed in Fusion 360, 
      3D printed, controlled via mobile app
    - Featured: Yes

ANIMATIONS:
  - Shattered entry: GSAP with clip-path fragments
  - Horizontal scroll: ScrollTrigger horizontal
  - Card parallax: Different x-translation speeds
  - Card hover: Scale + shadow
  - Dynamic text: Font size based on scroll position
```

---

## 4.6 SKILLS SECTION (#skills)

```yaml
Section: Skills
ID: skills
Scroll Effect: STAGGERED CATEGORY REVEAL
Background: Animated gradient mesh with floating particles

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   // 04                                                                    │
│   SKILLS                                                                   │
│   ───────────────────                                                      │
│   Technologies I Work With                                                 │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   PROGRAMMING LANGUAGES                                                    │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                       │
│   │  🐍   │ │  C    │ │  C++  │ │ MATLAB│ │ Java  │                       │
│   │Python │ │       │ │       │ │       │ │       │                       │
│   │ ★★★★★ │ │ ★★★★★ │ │ ★★★★☆ │ │ ★★★★☆ │ │ ★★☆☆☆ │                       │
│   └───────┘ └───────┘ └───────┘ └───────┘ └───────┘                       │
│                                                                            │
│   FRAMEWORKS & LIBRARIES                                                   │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                       │
│   │  ROS  │ │ ROS2  │ │ YOLO  │ │TensorF│ │ Isaac │                       │
│   │       │ │       │ │       │ │       │ │  Sim  │                       │
│   │ ★★★★★ │ │ ★★★★★ │ │ ★★★★☆ │ │ ★★★☆☆ │ │ ★★★☆☆ │                       │
│   └───────┘ └───────┘ └───────┘ └───────┘ └───────┘                       │
│                                                                            │
│   HARDWARE & BOARDS                                                        │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                       │
│   │Arduino│ │Rasp Pi│ │ STM32 │ │ FPGA  │ │Jetson │                       │
│   │       │ │       │ │       │ │       │ │ Nano  │                       │
│   │ ★★★★★ │ │ ★★★★☆ │ │ ★★★☆☆ │ │ ★★☆☆☆ │ │ ★★★★☆ │                       │
│   └───────┘ └───────┘ └───────┘ └───────┘ └───────┘                       │
│                                                                            │
│   TOOLS & SOFTWARE                                                         │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐             │
│   │  Git  │ │ Linux │ │Webots │ │  TIA  │ │ROBO   │ │Gazebo │             │
│   │       │ │       │ │       │ │Portal │ │GUIDE  │ │       │             │
│   │ ★★★★☆ │ │ ★★★★★ │ │ ★★★★☆ │ │ ★★★☆☆ │ │ ★★★☆☆ │ │ ★★★★★ │             │
│   └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘             │
│                                                                            │
│   CAD/CAM                                                                  │
│   ┌───────┐ ┌───────┐ ┌───────┐                                           │
│   │Solid  │ │Fusion │ │NX CAD │                                           │
│   │Works  │ │ 360   │ │       │                                           │
│   │ ★★★★☆ │ │ ★★★★★ │ │ ★★★☆☆ │                                           │
│   └───────┘ └───────┘ └───────┘                                           │
│                                                                            │
│   TECHNOLOGIES                                                             │
│   ┌───────┐ ┌───────┐ ┌───────┐                                           │
│   │  CNC  │ │  3D   │ │ PLCs  │                                           │
│   │       │ │Print  │ │       │                                           │
│   │ ★★★☆☆ │ │ ★★★★★ │ │ ★★★★☆ │                                           │
│   └───────┘ └───────┘ └───────┘                                           │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

SKILL CARD STRUCTURE:
┌────────────────────────────────────────┐
│                                        │
│   [ICON/LOGO]                         │
│                                        │
│   Skill Name                          │
│                                        │
│   ★★★★☆ (Proficiency)                 │
│                                        │
└────────────────────────────────────────┘

DEFAULT SKILLS DATA (From Resume):

PROGRAMMING LANGUAGES:
  - Python: ★★★★★ (Advanced)
  - C: ★★★★★ (Advanced)
  - C++: ★★★★☆ (Intermediate)
  - MATLAB: ★★★★☆ (Intermediate)
  - Java: ★★☆☆☆ (Novice)

FRAMEWORKS & LIBRARIES:
  - ROS: ★★★★★
  - ROS2: ★★★★★
  - YOLO: ★★★★☆
  - TensorFlow: ★★★☆☆
  - Arduino: ★★★★★
  - NVIDIA Isaac Sim: ★★★☆☆

HARDWARE & BOARDS:
  - Arduino: ★★★★★
  - Raspberry Pi: ★★★★☆
  - STM32: ★★★☆☆
  - FPGA: ★★☆☆☆
  - NVIDIA Jetson Nano: ★★★★☆

TOOLS & SOFTWARE:
  - Git: ★★★★☆
  - Linux: ★★★★★
  - Webots: ★★★★☆
  - TIA Portal: ★★★☆☆
  - Fanuc ROBOGUIDE: ★★★☆☆
  - Gazebo: ★★★★★

CAD/CAM:
  - SolidWorks: ★★★★☆
  - Autodesk Fusion 360: ★★★★★
  - NX CAD: ★★★☆☆

TECHNOLOGIES:
  - CNC: ★★★☆☆
  - 3D Printing: ★★★★★
  - PLCs: ★★★★☆
  - Front-End Web Development: ★★★☆☆

ANIMATIONS:
  - Categories: Slide in from alternating sides
  - Skills: Stagger fade + scale (0.05s delay each)
  - Stars: Fill animation on reveal
  - Hover: Card lift + glow
  - Background: Floating particles (subtle)
```

---

## 4.7 ACHIEVEMENTS SECTION (#achievements)

```yaml
Section: Achievements
ID: achievements
Scroll Effect: CARD STACK SPREAD
Background: Subtle confetti particles on first view

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   // 05                                                                    │
│   ACHIEVEMENTS                                                             │
│   ───────────────────                                                      │
│   Recognition & Awards                                                     │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│         ┌──────────────────────────────────────────────────────┐          │
│        ┌┴─────────────────────────────────────────────────────┐│          │
│       ┌┴─────────────────────────────────────────────────────┐││          │
│      ┌┴─────────────────────────────────────────────────────┐│││          │
│      │                                                      ││││          │
│      │  🏆                                                  ││││          │
│      │                                                      ││││          │
│      │  TEAM HEAD - SPARC                                  │││┘          │
│      │  ════════════════════                                ││┘           │
│      │                                                      │┘            │
│      │  Founding Member & Vice-President                    │             │
│      │  of Robotics Club in University                      │             │
│      │                                                      │             │
│      │  📅 2023                                             │             │
│      │                                                      │             │
│      │  [View Certificate →]                                │             │
│      │                                                      │             │
│      └──────────────────────────────────────────────────────┘             │
│                                                                            │
│   (Cards spread into grid on scroll)                                       │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

SCROLL BEHAVIOR:
  1. Cards start stacked with offset
  2. On scroll, cards spread into 2x2 or 3x2 grid
  3. Each card rotates slightly during spread
  4. Hover shows full content

ACHIEVEMENT CARD:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   [Achievement Icon/Image]                                                 │
│                                                                            │
│   ACHIEVEMENT TITLE                                                        │
│   ═════════════════                                                        │
│                                                                            │
│   Description or subtitle                                                  │
│                                                                            │
│   📅 Date/Year                                                             │
│   🏛️ Issuing Organization                                                 │
│                                                                            │
│   [View Certificate →]                                                     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

DEFAULT ACHIEVEMENTS (From Resume):

  1. Team Head - SPARC
     - Description: Founding Member, Vice-President of Robotics Club in University
     - Organization: Vignan's University
     - Type: Leadership

  2. Outstanding Student Publication Award
     - Description: Hosted on Elsevier
     - Organization: Elsevier
     - Type: Academic

  3. First Prize in Project Presentation
     - Description: Srujanankura - A National Level Technical Fest
     - Organization: Srujanankura
     - Type: Competition

  4. JASC 2024 - Top 5
     - Description: National Level Competition
     - Organization: Janatics India Private Limited
     - Type: Competition

ANIMATIONS:
  - Entry: Confetti burst (once)
  - Stack: Cards with translateY offset
  - Spread: GSAP timeline, stagger 0.1s
  - Hover: Lift + detailed view
```

---

## 4.8 PUBLICATIONS SECTION (#publications)

```yaml
Section: Publications
ID: publications
Scroll Effect: TYPEWRITER TITLE REVEAL
Background: Paper texture with subtle grain

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   // 06                                                                    │
│   PUBLICATIONS                                                             │
│   ───────────────────                                                      │
│   Research & Papers                                                        │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ┌────────────────────────────────────────────────────────────────────┐  │
│   │                                                                    │  │
│   │   📄 JOURNAL ARTICLE                                              │  │
│   │                                                                    │  │
│   │   Integrating robotic surgery and pharmacotherapy:                │  │
│   │   A dual approach to lung cancer management                       │  │
│   │   ═══════════════════════════════════════════════                 │  │
│   │   (Title types out on scroll)                                     │  │
│   │                                                                    │  │
│   │   👤 Authors: Prudhvi Raj Chalapaka, et al.                       │  │
│   │                                                                    │  │
│   │   📚 Published in: Elsevier                                       │  │
│   │   📅 Date: January 2024                                           │  │
│   │                                                                    │  │
│   │   Abstract:                                                        │  │
│   │   Medication and robotic surgery are new approaches in the        │  │
│   │   treatment of lung cancer. This paper explores the integration   │  │
│   │   of both methodologies for improved patient outcomes...          │  │
│   │                                                                    │  │
│   │   [Read Full Paper →]   [View Citation]                           │  │
│   │                                                                    │  │
│   └────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

PUBLICATION CARD:
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   [Publication Type Badge: Journal/Conference/Patent]                      │
│                                                                            │
│   PUBLICATION TITLE                                                        │
│   ═════════════════ (Typewriter animation)                                 │
│                                                                            │
│   👤 Authors: Name1, Name2, et al.                                        │
│   📚 Venue: Journal/Conference Name                                        │
│   📅 Published: MMM YYYY                                                   │
│                                                                            │
│   Abstract preview (3-4 lines)...                                          │
│                                                                            │
│   [Read Paper →]  [Cite]  [DOI]                                           │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

DEFAULT PUBLICATIONS (From Resume):

  1. Title: "Integrating robotic surgery and pharmacotherapy: 
            A dual approach to lung cancer management"
     Type: Journal Article
     Venue: Elsevier
     Date: January 2024
     Authors: Prudhvi Raj Chalapaka, et al.
     Abstract: "Medication and robotic surgery are new approaches 
               in the treatment of lung cancer..."
     DOI: [To be added]

ANIMATIONS:
  - Title: Typewriter effect on scroll reveal
  - Card: Slide in from alternating sides
  - Abstract: Fade in after title completes
  - Buttons: Stagger reveal
```

---

## 4.9 CONTACT SECTION (#contact)

```yaml
Section: Contact
ID: contact
Scroll Effect: MARQUEE BORDER ACTIVATION
Special: 4-sided marquee appears on section entry

Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│ ←←← WANNA TALK WITH ME? 👋 • WANNA TALK WITH ME? 👋 • WANNA TALK ←←←     │
├────────────────────────────────────────────────────────────────────────────┤
│ ↑                                                                        ↓ │
│ ↑   // 07                                                                ↓ │
│ ↑   LET'S CONNECT                                                        ↓ │
│ ↑   ───────────────────                                                  ↓ │
│ ↑                                                                        ↓ │
│ ↑   ┌─────────────────────────────┐  ┌─────────────────────────────┐    ↓ │
│ ↑   │                             │  │                             │    ↓ │
│ ↑   │   SEND ME A MESSAGE         │  │   GET IN TOUCH              │    ↓ │
│ ↑   │   ═══════════════════       │  │   ══════════════            │    ↓ │
│ ↑   │                             │  │                             │    ↓ │
│ ↑   │   Name *                    │  │   Prudhvi Raj Chalapaka     │    ↓ │
│ ↑   │   ┌─────────────────────┐   │  │   Robotics & Automation     │    ↓ │
│ ↑   │   │                     │   │  │   Engineer                  │    ↓ │
│ ↑   │   └─────────────────────┘   │  │                             │    ↓ │
│ ↑   │                             │  │   📧 prudhvirajchalapaka07  │    ↓ │
│ ↑   │   Email *                   │  │      @gmail.com             │    ↓ │
│ ↑   │   ┌─────────────────────┐   │  │                             │    ↓ │
│ ↑   │   │                     │   │  │   📱 +91 7995511692         │    ↓ │
│ ↑   │   └─────────────────────┘   │  │                             │    ↓ │
│ ↑   │                             │  │   📍 Guntur, India          │    ↓ │
│ ↑   │   Phone                     │  │                             │    ↓ │
│ ↑   │   ┌─────────────────────┐   │  │   ─────────────────────     │    ↓ │
│ ↑   │   │                     │   │  │                             │    ↓ │
│ ↑   │   └─────────────────────┘   │  │   SOCIAL                    │    ↓ │
│ ↑   ���                             │  │                             │    ↓ │
│ ↑   │   Project Type (Optional)   │  │   [LinkedIn] [GitHub]       │    ↓ │
│ ↑   │   ┌─────────────────────┐   │  │   [Instagram] [Twitter]     │    ↓ │
│ ↑   │   │ Select type...    ▼│   │  │                             │    ↓ │
│ ↑   │   └─────────────────────┘   │  │   ─────────────────────     │    ↓ │
│ ↑   │                             │  │                             │    ↓ │
│ ↑   │   Message *                 │  │   🟢 Available for work     │    ↓ │
│ ↑   │   ┌─────────────────────┐   │  │                             │    ↓ │
│ ↑   │   │                     │   │  │                             │    ↓ │
│ ↑   │   │                     │   │  │                             │    ↓ │
│ ↑   │   │                     │   │  │                             │    ↓ │
│ ↑   │   └─────────────────────┘   │  │                             │    ↓ │
│ ↑   │                             │  │                             │    ↓ │
│ ↑   │   [Send Message →]          │  │                             │    ↓ │
│ ↑   │                             │  │                             │    ↓ │
│ ↑   └─────────────────────────────┘  └─────────────────────────────┘    ↓ │
│ ↑                                                                        ↓ │
├────────────────────────────────────────────────────────────────────────────┤
│ →→→ WANNA TALK WITH ME? 👋 • WANNA TALK WITH ME? 👋 • WANNA TALK →→→     │
└────────────────────────────────────────────────────────────────────────────┘

MARQUEE BORDER:
  - Text: "WANNA TALK WITH ME? 👋 • " (repeating)
  - Position: All 4 sides of section
  - Activation: When section enters viewport
  - Animation: 
    - Top: Scrolls right-to-left
    - Bottom: Scrolls left-to-right
    - Left: Scrolls bottom-to-top
    - Right: Scrolls top-to-bottom
  - Speed: 20s infinite linear
  - Font: Monospace, bold

CONTACT FORM (Left Container):
  Fields:
    - Name* (required)
    - Email* (required, validated)
    - Phone (optional)
    - Project Type (dropdown):
      - Consultation
      - Collaboration
      - Full-time Opportunity
      - Freelance Project
      - Research Partnership
      - Other
    - Message* (required, textarea)
  
  Submit Button: "Send Message →"
  
  States:
    - Loading: Spinner + "Sending..."
    - Success: "Message sent! I'll get back to you soon."
    - Error: "Something went wrong. Please try again."

CONTACT INFO (Right Container):
  - Name: Prudhvi Raj Chalapaka
  - Title: Robotics & Automation Engineer
  - Email: prudhvirajchalapaka07@gmail.com (mailto link)
  - Phone: +91 7995511692 (tel link)
  - Location: Guntur, India
  
  Social Icons:
    - LinkedIn: linkedin.com/in/prudhvirajchalapaka
    - GitHub: github.com/prudhvirajchalapaka
    - Instagram: (if available)
    - Twitter/X: (if available)
  
  Status: "🟢 Available for work" (configurable)

ANIMATIONS:
  - Marquee: CSS animation, infinite scroll
  - Form fields: Stagger fade in
  - Info card: Slide in from right
  - Submit: Ripple effect
  -
