# 🎯 PRUDHVI RAJ CHALAPAKA
## Personal Portfolio - Complete Technical Specification

> **Version:** 1.0.0  
> **Date:** 2026-02-04  
> **Author:** Prudhvi Raj Chalapaka  
> **Email:** prudhvirajchalapaka07@gmail.com  
> **Phone:** +91 7995511692

---

# 📑 TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Public Pages - All Sections](#4-public-pages---all-sections)
5. [Public Pages - Dynamic Routes](#5-public-pages---dynamic-routes)
6. [Admin Dashboard - Complete](#6-admin-dashboard---complete)
7. [Database Schema](#7-database-schema)
8. [API Endpoints](#8-api-endpoints)
9. [Animations](#9-animations)
10. [Default Data](#10-default-data)
11. [Project Structure](#11-project-structure)
12. [Deployment](#12-deployment)

---

# 1. PROJECT OVERVIEW

## 1.1 Description
Industry-grade personal portfolio for Prudhvi Raj Chalapaka, Robotics & Automation Engineer. Features stunning animations combining Apple Liquid Glass (60%), Nothing Minimalist (30%), and Material Expressive (10%) design philosophies.

## 1.2 Owner Info
```yaml
Name: Prudhvi Raj Chalapaka
Title: Robotics & Automation Engineer
Email: prudhvirajchalapaka07@gmail.com
Phone: +91 7995511692
Location: Guntur, India
Website: prudhvirajchalapaka.in
LinkedIn: prudhvirajchalapaka
GitHub: prudhvirajchalapaka

Bio: |
  Ambitious Robotics & Automation Engineer with strong foundation in ROS/ROS2, 
  Industrial Automation and autonomous navigation. Proven research capability 
  with Elsevier publication on robotic surgery and pharmacotherapy.
```

## 1.3 Complete Sitemap

```
PUBLIC PAGES
══════════════════════════════════════════════════════════════════════════════

/                                    Home (Single Page)
├── #home                            Hero Section
├── #experience                      Experience Section (Sticky Scroll)
├── #education                       Education Section (3D Cards)
├── #projects                        Featured Projects (Horizontal Parallax)
├── #skills                          Skills Section (Category Grid)
├── #achievements                    Achievements (Card Stack)
├── #publications                    Publications Section
├── #contact                         Contact (Marquee Border)
└── Footer                           Footer (Large Marquee)

/experience/[slug]                   Experience Detail Page
/education/[slug]                    Education Detail Page
/projects                            All Projects Page
/projects/[slug]                     Project Detail Page


ADMIN PAGES
══════════════════════════════════════════════════════════════════════════════

/admin                               Login (OTP Email)
│
/admin/dashboard                     Dashboard Home
│   ├── Stats Cards
│   ├── Recent Messages
│   ├── Recent Comments
│   ├── Quick Actions
│   └── Analytics Charts
│
/admin/experiences                   Experiences Manager
│   ├── /admin/experiences           List View
│   ├── /admin/experiences/new       Add New Experience
│   └── /admin/experiences/[id]      Edit Experience
│
/admin/education                     Education Manager
│   ├── /admin/education             List View
│   ├── /admin/education/new         Add New Education
│   └── /admin/education/[id]        Edit Education
│
/admin/projects                      Projects Manager
│   ├── /admin/projects              List View
│   ├── /admin/projects/new          Add New Project
│   ├── /admin/projects/[id]         Edit Project
│   └── /admin/projects/[id]/comments Comments Manager
│
/admin/skills                        Skills Manager
│   ├── /admin/skills                Skills List
│   └── /admin/skills/categories     Category Manager
│
/admin/certifications                Certifications Manager
│   ├── /admin/certifications        List View
│   ├── /admin/certifications/new    Add New
│   └── /admin/certifications/[id]   Edit
│
/admin/achievements                  Achievements Manager
│   ├── /admin/achievements          List View
│   ├── /admin/achievements/new      Add New
│   └── /admin/achievements/[id]     Edit
│
/admin/publications                  Publications Manager
│   ├── /admin/publications          List View
│   ├── /admin/publications/new      Add New
│   └── /admin/publications/[id]     Edit
│
/admin/messages                      Messages Inbox
│   ├── /admin/messages              Inbox List
│   └── /admin/messages/[id]         Message Detail
│
/admin/subscribers                   Subscribers Manager
│
/admin/resume                        Resume Manager
│
/admin/gallery                       Gallery (Coming Soon)
│
/admin/settings                      Settings
    ├── /admin/settings              General
    ├── /admin/settings/account      Account (Email Change)
    ├── /admin/settings/site         Site Settings
    └── /admin/settings/security     Security Settings
```

---

# 2. TECH STACK

```yaml
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animation: Framer Motion + GSAP
Database: Supabase (PostgreSQL)
Auth: Supabase Auth (OTP Email)
Storage: Supabase Storage
Email: Resend
Hosting: Vercel
VCS: GitHub
```

## Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@prudhvirajchalapaka.in
ADMIN_EMAIL=prudhvirajchalapaka07@gmail.com
NEXT_PUBLIC_APP_URL=https://prudhvirajchalapaka.in
```

---

# 3. DESIGN SYSTEM

## 3.1 The Golden Ratio
```
60% APPLE LIQUID GLASS (Environment)
├── Frosted glass effects
├── Subtle depth/shadows
├── Smooth transitions
└── Luminous gradients

30% NOTHING MINIMALIST (Data)
├── Bold typography (Space Grotesk)
├── Dot-matrix patterns
├── Monospace accents (JetBrains Mono)
├── High contrast B/W
└── Red accent (#D71921)

10% MATERIAL EXPRESSIVE (Action)
├── FAB buttons
├── Ripple effects
├── Toggle switches
└── Elevated states
```

## 3.2 Colors
```css
:root {
  /* Glass */
  --glass-bg: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(255, 255, 255, 0.3);
  --blur: 24px;
  
  /* Nothing */
  --nothing-white: #FFFFFF;
  --nothing-black: #000000;
  --nothing-red: #D71921;
  
  /* Grays */
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E5E5E5;
  --gray-500: #737373;
  --gray-800: #262626;
  --gray-900: #171717;
  
  /* Material */
  --material-primary: #6750A4;
  --ripple: rgba(103, 80, 164, 0.12);
  
  /* Semantic */
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

## 3.3 Typography
```css
:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-hero: clamp(3rem, 10vw, 10rem);
}
```

---

# 4. PUBLIC PAGES - ALL SECTIONS

## 4.1 NAVIGATION

```yaml
Component: Navigation
Position: Fixed top, z-50

Desktop Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│ [PRUDHVI]    Home Experience Education Projects Skills Contact    [☀️][CV] │
└────────────────────────────────────────────────────────────────────────────┘

Mobile Layout:
┌────────────────────────────────────────────────────────────────────────────┐
│ [PRUDHVI]                                                           [☰]   │
└────────────────────────────────────────────────────────────────────────────┘

Behavior:
  - Transparent on hero
  - Glass bg after 100px scroll
  - Hide on scroll down
  - Show on scroll up

Nav Links:
  - Home → #home
  - Experience → #experience
  - Education → #education
  - Projects → #projects
  - Skills → #skills
  - Achievements → #achievements
  - Publications → #publications
  - Contact → #contact

Actions:
  - Theme toggle (☀️/🌙)
  - Download CV button

Mobile Menu:
  - Full screen overlay
  - Centered links
  - Social icons bottom
  - X close button
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
│                                                                            │
│           #ROS2 🤖                                    #AI 🧠               │
│                                                                            │
│    #Embedded ⚡                                                            │
│                         ╔══════════════════════════╗                       │
│                         ║                          ║                       │
│    #PLC 🔧              ║     PRUDHVI RAJ          ║      #Vision 👁️      │
│                         ║                          ║                       │
│                         ╚══════════════════════════╝                       │
│                                                                            │
│                    Robotics & Automation Engineer                          │
│                         (Typewriter cycling)                               │
│                                                                            │
│                             ┌────────┐                                     │
│                             │  📷    │ Profile Photo                       │
│                             └────────┘ (Liquid glass border)               │
│                                                                            │
│      "Ambitious engineer with expertise in ROS/ROS2..."                   │
│                                                                            │
│                   [View My Work]    [Download CV]                          │
│                                                                            │
│    #Debugging 🐛                                  #Gazebo 🌐               │
│                                                                            │
│                                ↓                                           │
│                           Scroll Down                                      │
└────────────────────────────────────────────────────────────────────────────┘

Components:

1. ANIMATED NAME
   Text: "PRUDHVI RAJ"
   Font: Space Grotesk Black
   Size: clamp(3rem, 10vw, 10rem)
   Animation: Letter-by-letter reveal (stagger 0.05s)

2. TYPEWRITER TITLE
   Cycles:
     - "Robotics & Automation Engineer"
     - "ROS/ROS2 Developer"
     - "Industrial Automation Specialist"
     - "Research Enthusiast"
   Duration: 3s per title

3. PROFILE PHOTO
   Size: 200
