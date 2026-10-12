/**
 * Central portfolio data for Rohan Sandesh.
 * Every section, season, episode and original reads from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rohan Sandesh',
  displayName: 'Rohan Sandesh',
  firstName: 'ROHAN',
  seriesTag: 'THE SERIES',
  /** Studio card shown at the start of the opening sequence. */
  originalLabel: 'A SANDESH ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Learning', 'Building', 'Inspiring'],
  intro:
    'A B.Tech Information Technology student at Rajagiri School of Engineering & Technology, Kochi (CGPA 9.10). Building database-driven web applications and scalable full-stack platforms with Node.js, Express, Django, React, Oracle Database and MongoDB.',
  location: 'Kochi, Kerala, India',
  email: 'rohansandesh840@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rohansandesh-12b930291',
    github: 'https://github.com/rohansandesh',
  },
  resumePdf: '/resume.pdf',
  portrait: {
    src: '/assets/rohan-640.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rohan Sandesh',
  },
  interests: ['Full-Stack Web Development', 'AI & Machine Learning', 'Database Systems & Cloud'],
};

export const education = [
  {
    school: 'Rajagiri School of Engineering & Technology (RSET)',
    place: 'Kochi, Kerala',
    degree: 'Bachelor of Technology — Information Technology',
    period: '2024 – Present',
    score: 'CGPA 9.10',
    detail: 'Branch topper in first semester • Merit award recipient',
  },
  {
    school: 'Mar Thoma Residential School',
    place: 'Thiruvalla, Kerala',
    degree: 'ISC (Class XII) — Science',
    period: '2020 – 2022',
    score: '97%',
    detail: '3rd Rank in School • Mr. Binoj Varghese Kattayickal Memorial Merit Award',
  },
  {
    school: 'Mar Thoma Residential School',
    place: 'Thiruvalla, Kerala',
    degree: 'ICSE (Class X)',
    period: '2019 – 2020',
    score: '95.6%',
    detail: 'School academic distinction',
  },
];

export const experience = [
  {
    company: 'Cognifyz IT Solutions Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    place: 'Online',
    period: 'Jul 2026 – Aug 2026',
    points: [
      'Completed eight progressive tasks across frontend engineering, server-side development, REST APIs, database integration, and authentication.',
      'Built user registration, password hashing, session-based authentication, protected routes, and user-isolated task management using MongoDB and Mongoose.',
      'Integrated an external Weather API with rate limiting, custom middleware, server-side caching, and scheduled background tasks.',
    ],
  },
  {
    company: 'Voleergo Solutions LLP',
    role: 'Python Full Stack Development Intern',
    place: 'Kochi, Kerala',
    period: 'May 2026',
    points: [
      'Built responsive frontend interfaces and Django backend features to master the full lifecycle of a database-driven web application.',
      'Developed REST APIs, authentication workflows, and SQLite database schemas; leveraged Git, GitHub, and Postman for API testing and version control.',
      'Produced a Digital Contact Book application featuring complete CRUD operations and live search filtering.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'tasks' | 'bolt' | 'attendance' | 'mess';
};

export const projects: Project[] = [
  {
    id: 'task-manager',
    title: 'Task Manager',
    year: '2026',
    genre: 'Full-Stack • Node.js • Auth & Caching',
    logline: 'A full-stack task manager featuring session-based authentication, user-isolated MongoDB storage, and Weather API integration with rate limiting and caching.',
    stack: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Mongoose'],
    build: [
      'Completed eight progressive tasks spanning frontend interfaces, server-side routing, database schema modeling, and session-based authentication.',
      'Built user registration, password hashing, session management, and user-isolated task storage using MongoDB and Mongoose.',
      'Integrated a third-party Weather API with rate limiting, custom Express middleware, in-memory caching, and scheduled background tasks.',
    ],
    features: [
      'Registration, secure login & session-based authentication',
      'User-isolated task storage with priorities and due dates',
      'External Weather API integration with rate limiting',
      'Custom Express middleware & server-side caching',
      'Scheduled background maintenance jobs',
    ],
    metrics: [
      { value: '8', label: 'progressive tasks completed' },
      { value: '100%', label: 'session-isolated data privacy' },
      { value: 'Cached', label: 'rate-limited weather API' },
      { value: 'CRUD', label: 'full task lifecycle management' },
      { value: 'Zero', label: 'unauthorized route access' },
    ],
    github: 'https://github.com/rohansandesh',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tasks',
  },
  {
    id: 'ev-charging-system',
    title: 'EV Charging System',
    year: '2026',
    genre: 'Full-Stack • Enterprise DB • PL/SQL',
    logline: 'A comprehensive web platform for locating charging stations and managing live sessions with Oracle Database integration and PL/SQL billing procedures.',
    stack: ['Node.js', 'Express.js', 'Oracle Database', 'SQL', 'PL/SQL'],
    build: [
      'Engineered a complete EV charging web application supporting customer accounts, district-based station filtering, and real-time charger availability.',
      'Implemented live session tracking, charger status toggles, and automated billing procedures calculating GST via PL/SQL stored procedures.',
      'Integrated Oracle Database using the native oracledb driver with transaction management and prepared SQL queries.',
    ],
    features: [
      'Customer registration, authentication & vehicle profiles',
      'District-based station filtering & live charger availability',
      'Session lifecycle tracking (start, stop, status update)',
      'Automated GST billing via Oracle PL/SQL procedures',
      'Oracle Database integration via native oracledb driver',
    ],
    metrics: [
      { value: '14', label: 'districts covered across Kerala' },
      { value: 'PL/SQL', label: 'stored billing procedure' },
      { value: 'Oracle DB', label: 'native enterprise driver' },
      { value: 'Live', label: 'charger availability status' },
      { value: 'Automated', label: 'session billing with GST' },
    ],
    github: 'https://github.com/rohansandesh',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'bolt',
  },
  {
    id: 'student-attendance',
    title: 'Student Attendance System',
    year: '2025',
    genre: 'Web App • Academic Systems • Security',
    logline: 'A web-based attendance management system with subject and date filtering, faculty authentication, and secure PDO prepared statements.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'PDO'],
    build: [
      'Created a secure web application for faculty authentication, student record rosters, and daily subject-wise attendance logging.',
      'Designed attendance history filters, date-range lookups, and visual statistical dashboards for tracking student eligibility.',
      'Hardened against SQL injection using PHP PDO prepared statements, session validation, and cryptographic password hashing.',
    ],
    features: [
      'Teacher authentication & student roster management',
      'Subject & date-based attendance recording',
      'Attendance history filtering & percentage dashboard',
      'PHP PDO prepared statements & password hashing',
      'Server-side validation & session security',
    ],
    metrics: [
      { value: '100%', label: 'PDO prepared statements coverage' },
      { value: 'Subject & Date', label: 'multi-parameter filtering' },
      { value: 'Zero', label: 'SQL injection vulnerabilities' },
      { value: 'Real-time', label: 'eligibility calculations' },
      { value: 'Modular', label: 'student & faculty workflows' },
    ],
    github: 'https://github.com/rohansandesh',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'attendance',
  },
  {
    id: 'messmate',
    title: 'MessMate',
    year: '2026',
    genre: 'Full-Stack • SPA • REST API',
    logline: 'A modern hostel & student mess management application built with a React single-page client, Tailwind CSS, and an Express.js REST API.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js'],
    build: [
      'Built a responsive, fluid user interface leveraging Vite, React modular components, and modern Tailwind CSS design tokens.',
      'Engineered Express.js REST API endpoints consumed asynchronously by the front-end client for real-time meal recording and budgeting.',
      'Implemented client-side caching and responsive state management for seamless mobile and desktop usage.',
    ],
    features: [
      'Single-page application with modular React architecture',
      'Express.js backend REST API endpoints',
      'Tailwind CSS responsive design system',
      'Daily meal logging & student expense tracking',
      'Real-time updates & error resilience',
    ],
    metrics: [
      { value: 'React + Vite', label: 'blazing-fast client app' },
      { value: 'REST API', label: 'Express backend architecture' },
      { value: 'Responsive', label: 'mobile-first layout' },
      { value: 'Modular', label: 'reusable component design' },
      { value: '100%', label: 'custom CSS & Tailwind tokens' },
    ],
    github: 'https://github.com/rohansandesh',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'mess',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'branch-topper',
    title: 'Branch Topper',
    org: 'B.Tech IT, RSET Kochi',
    detail: 'Ranked 1st in the department for the first semester, receiving the College Merit Award.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'cgpa-910',
    title: 'CGPA 9.10',
    org: 'First 4 Semesters',
    detail: 'Consistently maintained top percentile academic performance across foundational engineering semesters.',
    laurel: 'Consistent Excellence',
  },
  {
    id: 'isc-topper',
    title: '97% in ISC (Class XII)',
    org: 'Mar Thoma Residential School',
    detail: 'Secured 3rd rank in school and recipient of the Mr. Binoj Varghese Kattayickal Memorial Merit Award.',
    laurel: '3rd Rank & Merit Award',
  },
  {
    id: 'head-boy',
    title: 'Head Boy',
    org: 'Mar Thoma Residential School',
    detail: 'Elected to lead the entire student body, coordinate student councils, and liaise with institutional leadership.',
    laurel: 'Student Leadership',
  },
  {
    id: 'techkshetra-lead',
    title: 'Core Committee, Documentation',
    org: 'Techkshetra 2026, RSET',
    detail: 'Headed documentation, reporting, and event information management for the inter-college national technical fest.',
    laurel: 'Technical Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'G-Tec', name: 'Python & Django Full Stack', link: 'https://linkedin.com/in/rohansandesh-12b930291' },
  { issuer: 'G-Tec', name: 'Advanced Excel', link: 'https://linkedin.com/in/rohansandesh-12b930291' },
  { issuer: 'G-Tec', name: 'Diploma in Data Entry', link: 'https://linkedin.com/in/rohansandesh-12b930291' },
  { issuer: 'Future Skills Prime', name: 'Digital 101 (30 Hours)', link: 'https://linkedin.com/in/rohansandesh-12b930291' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Responsive web & client SPAs',
    skills: [
      { name: 'React', mono: 'Re', note: 'Core' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'EJS', mono: 'Ej' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server logic, APIs & microservices',
    skills: [
      { name: 'Node.js', mono: 'No', note: 'Core' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Django', mono: 'Dj' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational, NoSQL & enterprise databases',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Oracle Database', mono: 'Or', note: 'PL/SQL' },
      { name: 'SQLite', mono: 'Sl' },
      { name: 'PL/SQL', mono: 'Pl' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Version control & API workflows',
    skills: [
      { name: 'Git', mono: 'Gi' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
  {
    id: 'productivity',
    title: 'Productivity & Leadership',
    subtitle: 'Documentation, reporting & management',
    skills: [
      { name: 'Advanced Excel', mono: 'Xl' },
      { name: 'Technical Documentation', mono: 'Doc' },
      { name: 'Event Management', mono: 'Ev' },
      { name: 'Data Entry', mono: 'De' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science foundations',
    skills: [
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DSA', mono: 'Ds' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'CRUD Architecture', mono: 'Cr' },
      { name: 'Authentication & Security', mono: 'Au' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Voleergo Solutions Internship', 'G-Tec Python & Django Certified', 'Academic Coursework'],
  Java: ['Object-Oriented Programming at RSET', 'DSA implementations'],
  JavaScript: ['MessMate (React)', 'Task Manager (Node.js)', 'Attendance System'],
  React: ['MessMate', 'Voleergo Solutions Internship'],
  'Tailwind CSS': ['MessMate', 'Portfolio Series'],
  'Node.js': ['Cognifyz Full-Stack Internship', 'Task Manager', 'EV Charging System', 'MessMate'],
  'Express.js': ['Task Manager', 'EV Charging System', 'MessMate'],
  Django: ['Voleergo Solutions Internship', 'Digital Contact Book'],
  'REST APIs': ['Task Manager (Weather API)', 'MessMate API', 'Voleergo Solutions'],
  'Oracle Database': ['EV Charging System (PL/SQL Stored Procedures)'],
  MongoDB: ['Task Manager (Cognifyz Internship)', 'Mongoose ODM Schemas'],
  MySQL: ['Student Attendance Management System', 'Academic DBMS'],
  Git: ['All personal & team projects', 'Version control on GitHub'],
  'Technical Documentation': ['RSET IEDC & IIC SEED', 'Techkshetra 2026 Core Committee'],
  'Advanced Excel': ['G-Tec Advanced Excel Certification'],
  DSA: ['Academic Excellence (CGPA 9.10)', 'Algorithm Implementations in C/C++'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The School Years',
    period: '2016 – 2022',
    synopsis: 'Formative schooling at Mar Thoma Residential School, Thiruvalla. Elected Head Boy and finished with 97% in Class XII.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Head Boy',
        description: 'Elected Head Boy at Mar Thoma Residential School — leading student activities and coordinating faculty-student council initiatives.',
        tags: ['Head Boy', 'Leadership', 'Coordination'],
        runtime: '2016 – 2017',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Scholar',
        description: 'ICSE Class X (95.6%) and ISC Class XII (97%), third rank in school and recipient of the Binoj Varghese Memorial Merit Award.',
        tags: ['ISC 97%', '3rd Rank', 'Merit Award'],
        runtime: '2020 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Information Technology',
    period: '2024 – Present',
    synopsis: 'B.Tech in Information Technology at Rajagiri School of Engineering & Technology (RSET), Kochi. Branch topper and 9.10 CGPA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Branch Topper',
        description: 'B.Tech IT at RSET Kochi — topped the first semester with branch topper recognition and maintained a 9.10 CGPA across 4 semesters.',
        tags: ['RSET Kochi', 'Branch Topper', 'CGPA 9.10'],
        runtime: '2024 – Present',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Foundations',
        description: 'Deep dive into Data Structures, Algorithms, OOPs, Database Systems, C, C++, Java, and Python fundamentals.',
        tags: ['DSA', 'OOPs', 'DBMS', 'C / C++'],
        runtime: 'Semesters 1–4',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Internship Arc',
    period: '2026',
    synopsis: 'Hands-on industrial software development across two internships in Python/Django and Node.js/MongoDB full-stack development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Django Chapter',
        description: 'Python Full Stack Intern at Voleergo Solutions LLP — developed REST APIs, Django backend features, React interfaces, and a Digital Contact Book app.',
        tags: ['Python', 'Django', 'React', 'SQLite'],
        runtime: 'May 2026',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Enterprise Stack',
        description: 'Full Stack Development Intern at Cognifyz IT Solutions — built 8 progressive tasks including session authentication, MongoDB, and Weather API integration.',
        tags: ['Node.js', 'Express', 'MongoDB', 'Weather API'],
        runtime: 'Jul – Aug 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Beyond The Editor',
    period: '2025 – Present',
    synopsis: 'Leadership, technical documentation, and community organizing across flagship college fests and Kerala Startup Mission events.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Documentarian',
        description: 'Documentation Team member at RSET IEDC & IIC SEED — managing reports, information tracking, and documentation for startup & innovation programs.',
        tags: ['IEDC', 'IIC SEED', 'Documentation'],
        runtime: '2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Big Stage',
        description: 'Documentation Core Committee for Techkshetra 2026 fest, Abhyanthriki 2025 subcore, and volunteer/anchor at Kerala Startup Mission Huddle Global 2025.',
        tags: ['Techkshetra', 'Huddle Global', 'KSUM', 'Anchor'],
        runtime: '2025 – 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Exploring AI/ML, cloud architecture, and seeking software development internship and placement opportunities.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Architecting modern cloud-native systems, exploring AI/ML models, and building high-performance full-stack web platforms.',
        tags: ['Full-Stack', 'AI / ML', 'System Design'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Academic high', title: 'CGPA 9.10', detail: 'Branch Topper in 1st Semester • RSET Kochi', palette: crimson },
  { label: 'Full-stack intern', title: 'Cognifyz Solutions', detail: '8 progressive tasks • Node.js, Express & MongoDB', palette: amber },
  { label: 'Enterprise DB', title: 'EV Charging System', detail: 'Oracle Database & PL/SQL Stored Procedures', palette: ocean },
  { label: 'Python intern', title: 'Voleergo Solutions', detail: 'Django REST APIs & React development', palette: jade },
  { label: 'Web original', title: 'Task Manager', detail: 'Weather API integration, caching & rate limiting', palette: crimson },
  { label: 'Student leadership', title: 'Head Boy', detail: 'Mar Thoma Residential School', palette: violet },
  { label: 'Startup ecosystem', title: 'Huddle Global 2025', detail: 'Kerala Startup Mission • Volunteer & Event Anchor', palette: amber },
  { label: 'School rank', title: '97% in ISC (XII)', detail: '3rd Rank in School • Memorial Merit Award', palette: jade },
  { label: 'Front-end SPA', title: 'MessMate', detail: 'React, Vite, Tailwind CSS & Express API', palette: ocean },
  { label: 'Certified credentials', title: '4 Certifications', detail: 'Python & Django, Advanced Excel, Data Entry, Digital 101', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · IT at RSET',
    lines: ['Rajagiri School of Engineering & Technology, Kochi', '2024 – Present · First Semester Branch Topper'],
    chips: ['CGPA 9.10'],
  },
  {
    kicker: 'Skills',
    title: 'Full-Stack & Databases',
    lines: ['Node.js, Express.js, Django, React, Vite', 'Oracle Database, MongoDB, MySQL, SQLite, PL/SQL'],
    chips: ['Python', 'Java', 'React', 'Node.js', 'Oracle DB', 'MongoDB'],
  },
  {
    kicker: 'Internships',
    title: 'Two Internships in 2026',
    lines: [
      'Full Stack Developer Intern · Cognifyz IT Solutions (Node.js, Express, MongoDB)',
      'Python Full Stack Intern · Voleergo Solutions (Django, REST, React, SQLite)',
    ],
  },
  {
    kicker: 'Originals',
    title: 'Four Standout Productions',
    lines: [
      'Task Manager — Weather API, rate-limiting & caching',
      'EV Charging System — Oracle Database & PL/SQL billing',
      'Student Attendance — Secure PHP & PDO prepared statements',
      'MessMate — React SPA with Express API',
    ],
  },
  {
    kicker: 'Leadership',
    title: 'Beyond the Editor',
    lines: [
      'Head Boy at Mar Thoma Residential School',
      'Documentation Core Committee · Techkshetra 2026',
      'Kerala Startup Mission · Huddle Global 2025 Anchor',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Professional Certifications',
    lines: ['Python & Django · Advanced Excel', 'Diploma in Data Entry · Digital 101'],
  },
  {
    kicker: 'Mission',
    title: 'Now Seeking',
    lines: ['Software Development Internships & Full-Stack Engineering roles'],
  },
];

export type ProfileId = 'rohan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rohan',
    name: 'Rohan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & leadership first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
