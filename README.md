# Rohan Sandesh — Personal Portfolio 🎬

> **R SERIES** · *Learning • Building • Inspiring*

A cinematic, streaming-inspired personal portfolio designed and engineered for **Rohan Sandesh**. Built as an interactive, episodic narrative ("R SERIES"), this portfolio presents software engineering projects, technical internships, creative design work, and leadership experiences through a modern, film-grade web experience.

---

## 🌟 Overview & Concept

Traditional developer portfolios often feel like static resumes. **R SERIES** re-imagines the developer portfolio through the visual language and interactive feel of premium streaming platforms:

- **Episodic Storytelling:** Experience, education, and milestones are structured into **5 Seasons** that tell a coherent career story.
- **Cinematic Interactivity:** From an opening sequence and interactive highlight reel to horizontal-scrolling project showcases and parallax-reactive portraits.
- **Direct Engagement:** Live work samples (PDF resumes, event posters, engineering case studies) can be previewed directly on the site, backed by an integrated contact system.

---

## ✨ Key Features & Sections

### 🎬 Opening Sequence & Trailer
- **Studio Title Card:** Smooth intro animation introducing *"A SANDESH ORIGINAL"*.
- **"▶ Play Intro" Highlight Reel:** A full-screen, story-driven reel summarizing key resume highlights with progress indicators and keyboard controls (`Space`, `←`, `→`, `Esc`).

### 👤 Interactive Hero Section
- Dynamic multi-angle portrait cutouts with parallax depth effects reacting to user scrolling and interaction.
- Quick-action controls for immediate project exploration and resume viewing.

### 🍿 "Continue Exploring" Progress Rail
- Real-time scroll observation that tracks which sections of the portfolio the visitor has explored so far, complete with visual progress bars.

### 🎞️ Originals (Flagship Projects)
Curated showcase of four key software engineering projects with horizontal pinned scroll and comprehensive detail modals:
1. **EV Charging Station Slot Booking & Management System** — Full-stack platform built with Node.js, Express, Oracle DB, and PL/SQL procedures for automated billing & slot reservation.
2. **Student Attendance Management System** — Secure, multi-parameter academic tracking web application developed with PHP, MySQL, and PDO prepared statements.
3. **Task Manager & Weather App** — Full-stack productivity hub built during an internship at Cognifyz featuring REST APIs, MongoDB, session auth, and third-party weather API caching.
4. **Digital Contact Book Web Application** — Django and React contact management application built at Voleergo Solutions with search and CRUD capabilities.

### 📅 The Journey (5 Seasons)
Chronological career timeline organized into episodic seasons:
- **Season 1 — Genesis:** Early curiosity, self-taught programming fundamentals, and problem-solving.
- **Season 2 — B.Tech Foundations:** Computer Science & Engineering degree at Rajagiri School of Engineering & Technology (RSET), Kochi.
- **Season 3 — The Internship Arc:** Industrial full-stack experience across Voleergo Solutions (Python/Django) and Cognifyz IT Solutions (Node.js/MongoDB).
- **Season 4 — Beyond The Editor:** Community leadership, documentation for IEDC & IIC SEED, national fest coordination (Techkshetra & Abhyanthriki), and panel anchoring at KSUM Huddle Global.
- **Season 5 — What's Next:** Future goals in full-stack architecture, cloud systems, and high-impact digital products.

### 💼 My Services & Live Work Samples
Interactive service offerings featuring an integrated modal viewer for deliverables:
- **Full-Stack Web Development** (Node.js, Express, PHP, Oracle DB, MySQL, REST APIs)
- **ATS-Friendly Resume & CV Design** (Includes previewable PDF samples)
- **Graphic Design & Branding** (Official collateral for Aventra Ushers, posters, and concepts)
- **Technical Documentation & Reports** (Structured documentation for IEDC, conclaves, and fests)
- **Event Management & Anchoring** (Panel discussions, logistics, and hospitality)

### ⚡ Skill Universe
- Genre-categorized skills matrix (Languages, Frameworks, Databases, Tools & Platforms, Design & Media).
- Interactive cards displaying real-world contextual evidence of where each technology was applied across projects, internships, and certifications.

### 📄 The Full Story & Resume Viewer
- Quick metrics (Education, Internships, Projects, Certifications).
- Built-in PDF resume modal viewer with one-click direct download.

### 📬 The Final Scene (Contact Form)
- Functional contact form connected to **Formspree** with zero external backend dependencies.
- Features client-side validation, email format checking, spam honeypot defense, accessible loading states, and direct email / social links.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) |
| **Form Delivery** | [Formspree](https://formspree.io/) |
| **Hosting** | Static Hosting (Vercel / Netlify / GitHub Pages) |

---

## 📂 Project Structure

```text
rohan-sandesh-portfolio/
├── public/
│   ├── assets/              # Optimized portrait cutouts & graphics
│   └── documents/           # Resumes, graphic design samples & PDFs
├── src/
│   ├── components/
│   │   ├── OpeningSequence.tsx  # Cinematic intro titles & soundstage
│   │   ├── PlayIntro.tsx        # Story-driven highlight reel
│   │   ├── Navbar.tsx           # Floating responsive navigation bar
│   │   ├── Hero.tsx             # Interactive hero with portrait parallax
│   │   ├── ContinueWatching.tsx # Netflix-style watch progress rail
│   │   ├── About.tsx            # Personal background & introduction
│   │   ├── Seasons.tsx          # Episodic timeline (The Journey)
│   │   ├── Originals.tsx        # Pinned horizontal scroll projects
│   │   ├── Services.tsx         # Services catalog with sample preview modal
│   │   ├── Skills.tsx           # Interactive skill categories & evidence
│   │   ├── ResumeViewer.tsx     # Resume showcase & viewer trigger
│   │   ├── ResumeModal.tsx      # Embedded PDF resume reader
│   │   ├── ProjectModal.tsx     # Comprehensive project detail view
│   │   ├── FinalCTA.tsx         # Contact form integrated with Formspree
│   │   ├── Poster.tsx           # Reusable poster & backdrop cards
│   │   └── fx.tsx               # Magnetic buttons, particles, transitions
│   ├── data/
│   │   └── portfolio.ts         # Single source of truth for all content
│   ├── hooks/
│   │   ├── smoothScroll.tsx     # Lenis smooth scroll provider & hooks
│   │   ├── sectionProgress.ts   # Scroll progress tracking per section
│   │   └── useMedia.ts          # Responsive & reduced-motion queries
│   ├── App.tsx                  # Root application orchestrator
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global design system & Tailwind styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (or yarn / pnpm)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rohansandesh/rohan-sandesh-portfolio.git
   cd rohan-sandesh-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `dist/` directory ready for deployment.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Name:** Rohan Sandesh
- **Location:** Kochi, Kerala, India
- **LinkedIn:** [linkedin.com/in/rohansandesh](https://linkedin.com/in/rohansandesh)
- **GitHub:** [github.com/rohansandesh](https://github.com/rohansandesh)
- **Email:** [rohansandesh007@gmail.com](mailto:rohansandesh007@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore the code for inspiration and learning.
