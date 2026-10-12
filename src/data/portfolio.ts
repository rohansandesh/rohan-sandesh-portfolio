/**
 * Central portfolio data for Rohan Sandesh.
 * Every section, season, episode, original, and service reads from this file.
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
  homeIntro:
    "I'm an Information Technology undergraduate who enjoys turning ideas into practical digital solutions. From building full-stack web applications to creating thoughtful designs and well-structured documentation, I enjoy combining technology, creativity, and problem-solving to build meaningful things.",
  intro:
    "I'm an Information Technology undergraduate who enjoys turning ideas into practical digital solutions. From building full-stack web applications to creating thoughtful designs and well-structured documentation, I enjoy combining technology, creativity, and problem-solving to build meaningful things.",
  location: 'Kochi, Kerala, India',
  email: 'rohansandesh840@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rohansandesh-12b930291',
    github: 'https://github.com/rohansandesh',
  },
  resumePdf: '/resume.pdf',
  portrait: {
    src: '/assets/rohan-front.png',
    alt: 'Portrait of Rohan Sandesh',
  },
  homePortrait: {
    src: '/assets/rohan-left.png',
    alt: 'Portrait of Rohan Sandesh looking left',
  },
  aboutPortrait: {
    src: '/assets/rohan-right.png',
    alt: 'Portrait of Rohan Sandesh looking right',
  },
  interests: [
    'Full-Stack Web Development',
    'Graphic Designing',
    'Technical Documentation',
    'AI & Machine Learning',
    'Database Systems & Cloud',
  ],
};

export const aboutContent = {
  paragraphs: [
    "I'm an Information Technology undergraduate who enjoys turning ideas into practical digital solutions. From building full-stack web applications to documenting events, coordinating with teams, and creating visual designs, I enjoy exploring different ways technology and creativity can come together.",
    "I'm always looking for opportunities to learn, experiment, and build something meaningful—whether it's writing code, organizing information, or designing something from scratch.",
    "Learning. Building. Inspiring. That's the mindset I bring to every project I take on.",
  ],
  motto: 'LEARNING. BUILDING. INSPIRING.',
};

export const identityCards = [
  {
    id: 'build',
    number: '01',
    title: 'BUILD',
    accent: '#ff3d5a',
    tagline: 'Practical Technical Solutions',
    description: 'Full-stack development, web applications, and practical technical solutions.',
  },
  {
    id: 'document',
    number: '02',
    title: 'DOCUMENT',
    accent: '#4cc9ff',
    tagline: 'Structured Records & Reports',
    description: 'Technical documentation, event reporting, information organization, and structured records.',
  },
  {
    id: 'design',
    number: '03',
    title: 'DESIGN',
    accent: '#ffb547',
    tagline: 'Visual Communication & Collateral',
    description: 'Graphic design, visual communication, and creative layouts.',
  },
  {
    id: 'collaborate',
    number: '04',
    title: 'COLLABORATE',
    accent: '#46e3a8',
    tagline: 'Coordination & Event Leadership',
    description: 'Team coordination, event participation, communication, and working with different people.',
  },
];

export const education = [
  {
    school: 'Rajagiri School of Engineering & Technology (RSET)',
    place: 'Kochi, Kerala',
    degree: 'Bachelor of Technology — Information Technology',
    period: '2024 – Present',
    score: 'CGPA 9.10',
    detail: 'First-semester branch topper (CGPA 9.76) • Official CGPA after four semesters: 9.10',
  },
  {
    school: 'Mar Thoma Residential School',
    place: 'Thiruvalla, Kerala',
    degree: 'ISC (Class XII) — Science',
    period: '2020 – 2022',
    score: '97%',
    detail: '3rd Rank in School • Mr. Binoj K. Varghese Kattayickal Memorial Merit Award for Biology topper',
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
    period: '4 May 2026 – 15 May 2026',
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
  motif: 'bolt' | 'attendance' | 'tasks' | 'contacts';
};

export const projects: Project[] = [
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
    github: 'https://github.com/rohansandesh/EV-Charging-System',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'bolt',
  },
  {
    id: 'student-attendance',
    title: 'Student Attendance Management System',
    year: '2026',
    genre: 'Web App • Academic Systems • Security',
    logline: 'A web-based attendance management system with subject and date filtering, faculty authentication, and secure database interactions using prepared statements.',
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
    github: 'https://github.com/rohansandesh/Student-Attendance-Management-System',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'attendance',
  },
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
    github: 'https://github.com/rohansandesh/cognifyz-fullstack-internship',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tasks',
  },
  {
    id: 'digital-contact-book',
    title: 'Digital Contact Book',
    year: '2026',
    genre: 'Full-Stack • Django • React SPA',
    logline: 'A full-stack contact management application with complete CRUD workflows, Django REST APIs, SQLite storage, and a responsive search interface.',
    stack: ['Django', 'React', 'REST APIs', 'SQLite', 'Python'],
    build: [
      'Developed a responsive React frontend coupled to a Python Django backend as part of full-stack engineering at Voleergo Solutions.',
      'Implemented robust REST API endpoints supporting complete CRUD operations (create, read, update, delete) for contact records.',
      'Designed real-time client-side search and filtering alongside SQLite relational persistence and schema validation.',
    ],
    features: [
      'Full CRUD contact lifecycle management',
      'Django REST API backend with modular views',
      'Reactive search & dynamic client-side filtering',
      'SQLite database integration with relational schema',
      'Clean component-driven user interface',
    ],
    metrics: [
      { value: 'CRUD', label: 'complete record lifecycle' },
      { value: 'REST API', label: 'Django backend endpoints' },
      { value: 'Instant', label: 'live search & filtering' },
      { value: 'SQLite', label: 'structured data storage' },
      { value: 'Voleergo', label: 'internship capstone production' },
    ],
    github: 'https://github.com/rohansandesh/digital-contact-book',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'contacts',
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
    title: 'First-Semester Branch Topper',
    org: 'B.Tech IT, RSET Kochi',
    detail: 'Ranked 1st in department for semester one with 9.76 CGPA, awarded College Merit recognition.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'cgpa-910',
    title: 'Official CGPA 9.10',
    org: 'First 4 Semesters, RSET',
    detail: 'Consistently maintained top percentile academic performance across four foundational engineering semesters.',
    laurel: 'Consistent Excellence',
  },
  {
    id: 'isc-topper',
    title: '97% in ISC (Class XII)',
    org: 'Mar Thoma Residential School',
    detail: 'Secured 3rd rank in school and recipient of the Mr. Binoj K. Varghese Kattayickal Memorial Merit Award for Biology topper.',
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
    title: 'Documentation Core Committee',
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
    subtitle: 'Spreadsheet management & event logistics',
    skills: [
      { name: 'Advanced Excel', mono: 'Xl' },
      { name: 'Event Management', mono: 'Ev' },
      { name: 'Data Entry', mono: 'De' },
      { name: 'Data Cleaning', mono: 'Dc' },
    ],
  },
  {
    id: 'documentation',
    title: 'Documentation & Communication',
    subtitle: 'Technical writing, reporting & information coordination',
    skills: [
      { name: 'Technical Documentation', mono: 'Doc', note: 'Core' },
      { name: 'Report Writing', mono: 'Rw' },
      { name: 'Event Documentation', mono: 'Ed' },
      { name: 'Information Management', mono: 'Im' },
      { name: 'Coordination & Communication', mono: 'Cc' },
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Creativity Tools',
    subtitle: 'Visual design, creative tools & communication',
    skills: [
      { name: 'Graphic Designing', mono: 'Gd', note: 'Visual' },
      { name: 'Canva', mono: 'Cv' },
      { name: 'Layout & Typography', mono: 'Lt' },
      { name: 'Visual Communication', mono: 'Vc' },
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
  JavaScript: ['Digital Contact Book (React)', 'Task Manager (Node.js)', 'Student Attendance System'],
  React: ['Digital Contact Book', 'Portfolio Series', 'Voleergo Solutions Internship'],
  'Tailwind CSS': ['Portfolio Series Web Architecture'],
  'Node.js': ['Cognifyz Full-Stack Internship', 'Task Manager', 'EV Charging System'],
  'Express.js': ['Task Manager', 'EV Charging System'],
  Django: ['Voleergo Solutions Internship', 'Digital Contact Book'],
  'REST APIs': ['Task Manager (Weather API)', 'Digital Contact Book (Django REST)', 'Voleergo Solutions'],
  'Oracle Database': ['EV Charging System (PL/SQL Stored Procedures)'],
  MongoDB: ['Task Manager (Cognifyz Internship)', 'Mongoose ODM Schemas'],
  MySQL: ['Student Attendance Management System', 'Academic DBMS'],
  Git: ['All personal & team projects', 'Version control on GitHub'],
  'Technical Documentation': ['RSET IEDC & IIC SEED Reports', 'Techkshetra 2026 Core Committee', 'AAD LCS Report'],
  'Report Writing': ['IEDC Summit Promotional Campaign Report', 'Institutional Event Logs'],
  'Event Documentation': ['Techkshetra 2026', 'Abhyanthriki 2025 Sub-Core'],
  'Information Management': ['RSET IEDC Startup Records', 'College Information Tracking'],
  'Coordination & Communication': ['Huddle Global 2025 Panel Anchor', 'Council Leadership'],
  'Advanced Excel': ['G-Tec Advanced Excel Certification', 'Data Cleaning & Standardization Workbook'],
  'Data Entry': ['Diploma in Data Entry (G-Tec)', 'Structured Record Management'],
  'Data Cleaning': ['Data Cleaning & Standardization Workbook', 'Data Validation Logic'],
  'Graphic Designing': ['Aventra Ushers Brand Collateral', 'Business Cards & Event Posters'],
  Canva: ['Promotional Campaigns', 'Social & Print Media Layouts'],
  'Layout & Typography': ['Aventra Ushers Business Card', 'Promotional Manpower Packages'],
  'Visual Communication': ['Event Presentations', 'Branding & Identity Assets'],
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
        description: 'ICSE Class X (95.6%) and ISC Class XII (97%), third rank in school and recipient of the Mr. Binoj K. Varghese Kattayickal Memorial Merit Award for Biology topper.',
        tags: ['ISC 97%', '3rd Rank', 'Merit Award', 'Biology Topper'],
        runtime: '2020 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Information Technology',
    period: '2024 – Present',
    synopsis: 'B.Tech in Information Technology at Rajagiri School of Engineering & Technology (RSET), Kochi. Branch topper and 9.10 CGPA after four semesters.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Branch Topper',
        description: 'B.Tech IT at RSET Kochi — topped the first semester with branch topper recognition (CGPA 9.76) and maintained an official 9.10 CGPA across four completed semesters.',
        tags: ['RSET Kochi', 'Branch Topper', 'CGPA 9.76', 'CGPA 9.10'],
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
        description: 'Python Full Stack Intern at Voleergo Solutions LLP (4 May 2026 – 15 May 2026) — developed REST APIs, Django backend features, React interfaces, and a Digital Contact Book app with SQLite.',
        tags: ['Python', 'Django', 'React', 'SQLite'],
        runtime: '4 May – 15 May 2026',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Enterprise Stack',
        description: 'Full Stack Development Intern at Cognifyz IT Solutions Pvt. Ltd. (July 2026 – August 2026) — built 8 progressive tasks including session authentication, MongoDB, and Weather API integration with caching.',
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
    synopsis: 'Leadership, technical documentation, event reporting, and community organizing across flagship college fests and Kerala Startup Mission events.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Documentarian',
        description: 'Documentation Team member at RSET IEDC & IIC SEED — managing official reports, information tracking, and structured documentation for startup & innovation programs.',
        tags: ['IEDC', 'IIC SEED', 'Documentation', 'Reports'],
        runtime: '2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Global Stage',
        description: 'Kerala Startup Mission’s flagship conclave, Huddle Global 2025 — actively managed delegate hospitality and gifting logistics, and anchored a featured panel discussion.',
        tags: ['Huddle Global 2025', 'KSUM', 'Panel Anchor', 'Hospitality'],
        runtime: '2025',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Big Stage',
        description: 'Served on the Documentation Core Committee for Techkshetra 2026 national technical fest, building on subcore documentation leadership at Abhyanthriki 2025.',
        tags: ['Techkshetra 2026', 'Abhyanthriki 2025', 'Documentation Core'],
        runtime: '2025 – 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Ongoing',
    synopsis: 'Continued full-stack development, exploring AI/ML and cloud architecture, building meaningful digital products, and seeking software development internship and placement opportunities.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Architecting modern cloud-native systems, exploring practical AI/ML models, and building high-performance digital platforms while seeking software engineering opportunities.',
        tags: ['Full-Stack', 'AI / ML', 'Cloud Architecture', 'Placements'],
        runtime: 'In Progress',
        palette: crimson,
      },
    ],
  },
];

export type ServiceSample = {
  title: string;
  type: 'pdf' | 'image' | 'excel' | 'project';
  path?: string;
  downloadName?: string;
  caption?: string;
  isConcept?: boolean;
  projectId?: string;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  palette: Palette;
  featuredSamples: ServiceSample[];
};

export const services: Service[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Full-Stack Web Development',
    category: 'Engineering & Software',
    shortDesc:
      'Building robust, database-driven web applications and scalable platforms with clean architecture and reactive user interfaces.',
    fullDesc:
      'I engineer responsive frontend interfaces and secure backend architectures using modern frameworks, REST APIs, and relational/NoSQL databases. From session-based authentication to third-party API integration with caching, each project is built for maintainability, speed, and clean code.',
    tags: ['Node.js', 'Express', 'Oracle DB', 'PL/SQL', 'PHP', 'MySQL', 'PDO'],
    palette: crimson,
    featuredSamples: [
      {
        title: 'EV Charging System',
        type: 'project',
        projectId: 'ev-charging-system',
        caption: 'Full-stack platform with Node.js, Express, Oracle Database, and PL/SQL billing procedures.',
      },
      {
        title: 'Student Attendance Management System',
        type: 'project',
        projectId: 'student-attendance',
        caption: 'Secure web app with PHP, MySQL, PDO prepared statements, faculty authentication, and multi-parameter filtering.',
      },
    ],
  },
  {
    id: 'resume-design',
    number: '02',
    title: 'ATS-Friendly Resume & CV Design',
    category: 'Career & Documents',
    shortDesc:
      'Structuring professional resumes and CVs engineered for clear hierarchy, readable typography, and ATS-conscious formatting.',
    fullDesc:
      'I create structured, visually polished resumes tailored for applicant tracking systems and hiring managers. Designs prioritize clean typography, standardized section headers, semantic grouping, and scannable layouts without graphics or multi-column traps that disrupt parsing.',
    tags: ['ATS-Conscious', 'Clean Hierarchy', 'Single/Two-Column Formats', 'Executive Layout'],
    palette: ocean,
    featuredSamples: [
      {
        title: 'Anonymized Resume Sample 01',
        type: 'pdf',
        path: '/documents/resume-samples/resume_sample_01.pdf',
        downloadName: 'ATS_Resume_Sample_01.pdf',
        caption: 'Clean, chronological layout with standardized headers and high-contrast typography.',
      },
      {
        title: 'Anonymized Resume Sample 02',
        type: 'pdf',
        path: '/documents/resume-samples/resume_sample_02.pdf',
        downloadName: 'ATS_Resume_Sample_02.pdf',
        caption: 'Skills-focused technical resume format designed for fast human scanning and ATS compliance.',
      },
      {
        title: 'Anonymized Resume Sample 03',
        type: 'pdf',
        path: '/documents/resume-samples/resume_sample_03.pdf',
        downloadName: 'ATS_Resume_Sample_03.pdf',
        caption: 'Streamlined single-page professional profile maximizing space efficiency and readability.',
      },
    ],
  },
  {
    id: 'graphic-design',
    number: '03',
    title: 'Graphic Design',
    category: 'Visual & Identity',
    shortDesc:
      'Designing impactful promotional materials, event collateral, identity assets, and business stationery.',
    fullDesc:
      'I design visual communication collateral with an eye for proportions, typography, and brand identity. Showcasing real design deliverables created for Aventra Ushers—including official print business cards and promotional event posters.',
    tags: ['Canva', 'Print Design', 'Brand Collateral', 'Event Posters', 'Business Cards'],
    palette: amber,
    featuredSamples: [
      {
        title: 'Aventra Ushers — Business Card',
        type: 'pdf',
        path: '/documents/graphic-design/Aventra Ushers - Business Card.pdf',
        downloadName: 'Aventra_Ushers_Business_Card.pdf',
        caption: 'Official corporate stationery design created for Aventra Ushers team members.',
      },
      {
        title: 'Aventra Ushers — Event Poster',
        type: 'image',
        path: '/documents/graphic-design/Aventra Ushers_Poster.png',
        downloadName: 'Aventra_Ushers_Poster.png',
        caption: 'Promotional visual poster designed for brand awareness and event presence.',
      },
      {
        title: 'Promotional Manpower Packages (Past Concept)',
        type: 'pdf',
        path: '/documents/graphic-design/Promotional Manpower Packages.pdf',
        downloadName: 'Promotional_Manpower_Packages.pdf',
        caption: 'Past concept layout sample demonstrating package structuring and tiered pricing presentation.',
        isConcept: true,
      },
    ],
  },
  {
    id: 'documentation',
    number: '04',
    title: 'Technical Documentation & Reporting',
    category: 'Records & Reports',
    shortDesc:
      'Authoring comprehensive technical reports, official event logs, information tracking systems, and institutional records.',
    fullDesc:
      'Drawing from my documentation leadership with RSET IEDC & IIC SEED and national technical fests, I author structured technical documentation and institutional reports. Showcased here are genuine, approved reports capturing engineering algorithms and state-level promotional campaigns.',
    tags: ['Technical Reports', 'Institutional Campaign Reports', 'Event Tracking', 'IEDC / IIC SEED'],
    palette: violet,
    featuredSamples: [
      {
        title: 'AAD LCS Report (Technical Report)',
        type: 'pdf',
        path: '/documents/documentation/aad-lcs-report.pdf',
        downloadName: 'AAD_LCS_Report.pdf',
        caption: 'Detailed technical report detailing Longest Common Subsequence algorithmic implementation and analysis.',
      },
      {
        title: 'IEDC Summit Promotional Campaign Report',
        type: 'pdf',
        path: '/documents/documentation/IEDC Summit Promotional Campaign Report.pdf',
        downloadName: 'IEDC_Summit_Promotional_Campaign_Report.pdf',
        caption: 'Official institutional campaign report documenting promotional outreach and metrics for IEDC Summit.',
      },
    ],
  },
  {
    id: 'data-excel',
    number: '05',
    title: 'Data Entry & Advanced Excel',
    category: 'Data Management & Spreadsheets',
    shortDesc:
      'Structured record management, synthetic data cleaning, validation formulas, and organized reporting dashboards.',
    fullDesc:
      'Backed by G-Tec Advanced Excel and Diploma in Data Entry credentials, I deliver structured data entry, record cleaning, standardisation, and spreadsheet organization. The workbook featured below demonstrates systematic data cleansing, formatting rules, duplicate identification, and audit logging on synthetic data.',
    tags: ['Advanced Excel', 'Data Cleaning', 'Format Validation', 'Duplicate Detection', 'Audit Logs'],
    palette: jade,
    featuredSamples: [
      {
        title: 'Data Cleaning & Standardization Workbook',
        type: 'excel',
        path: '/documents/data-entry-excel/data_cleaning_standardization_portfolio.xlsx',
        downloadName: 'data_cleaning_standardization_portfolio.xlsx',
        caption: 'Demonstration workbook featuring raw synthetic data, cleaned records, validation rules, duplicate detection, and a change log.',
      },
    ],
  },
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
    title: 'Four Standout Productions · 2026',
    lines: [
      'EV Charging System — Oracle Database & PL/SQL billing',
      'Student Attendance — Secure PHP & PDO prepared statements',
      'Task Manager — Weather API, rate-limiting & caching',
      'Digital Contact Book — Django REST & React SPA',
    ],
  },
  {
    kicker: 'Leadership & Documentation',
    title: 'Beyond the Editor',
    lines: [
      'Documentation Core Committee · Techkshetra 2026',
      'RSET IEDC & IIC SEED · Documentation Team',
      'Kerala Startup Mission · Huddle Global 2025 Anchor',
      'Head Boy at Mar Thoma Residential School',
    ],
  },
  {
    kicker: 'Services',
    title: 'Five Curated Capabilities',
    lines: [
      'Full-Stack Web Development · ATS-Friendly Resumes',
      'Graphic Design · Technical Documentation · Data Entry & Excel',
    ],
  },
  {
    kicker: 'Mission',
    title: 'Now Seeking',
    lines: ['Software Development Internships & Full-Stack Engineering roles'],
  },
];

export type SectionId = 'about' | 'journey' | 'originals' | 'services' | 'skills' | 'story';

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  services: { nav: 'Services', card: 'My Services', meta: `${services.length} Curated Capabilities`, palette: crimson },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

export const defaultSectionOrder: SectionId[] = ['about', 'journey', 'originals', 'services', 'skills', 'story'];

export type ProfileId = 'rohan' | 'recruiter' | 'developer' | 'creative';

export type ViewerProfile = {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
};

export const viewerProfiles: ViewerProfile[] = [
  {
    id: 'rohan',
    name: 'Rohan Sandesh',
    blurb: 'The full portfolio experience',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'services', 'skills', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: "I'm hiring — show me the essentials",
    color: '#4cc9ff',
    order: ['about', 'story', 'originals', 'skills', 'journey', 'services'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: "I'm a fellow dev — show me the tech",
    color: '#46e3a8',
    order: ['originals', 'skills', 'about', 'journey', 'services', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Show me design & creative work',
    color: '#ffb547',
    order: ['services', 'about', 'originals', 'skills', 'journey', 'story'],
  },
];
