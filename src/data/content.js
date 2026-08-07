export const IDENTITY = {
  brand: "adirajDev",
  name: "Aditya Raj",
  title: "Backend-focused Full Stack Developer",
  valueProp:
    "I design and ship REST APIs and backend systems, then build the React interfaces on top of them.",
  techLine: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "React"],
  location: "Bengaluru, IN",
  email: "aditya13raja@gmail.com",
  phone: "+91-7070694389",
  github: "github.com/adirajDev",
  githubUrl: "https://github.com/adirajDev",
  linkedin: "linkedin.com/in/adirajdev",
  linkedinUrl: "https://www.linkedin.com/in/adirajdev/",
  resumeUrl: "/aditya-raj-resume.pdf",
};

export const HEADERS = [
  { k: "X-Handle", v: "adirajDev" },
  { k: "X-Focus", v: "Backend engineering — Java, Spring Boot, Node.js" },
  { k: "X-Status", v: "Open to full-time roles" },
];

export const CONFIG = [
  { k: "location", v: "Bengaluru, India" },
  { k: "focus", v: "Backend systems & REST APIs" },
  { k: "stack", v: "Java · Spring Boot · Node.js · PostgreSQL" },
  { k: "currently_learning", v: "Spring Boot + PostgreSQL migration" },
  { k: "experience", v: "1+ yr, full-stack internship" },
  { k: "availability", v: "Open to full-time roles" },
];

export const SKILLS = [
  {
    group: "Backend & APIs",
    weight: "primary",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Go Fiber",
      "REST API Design",
      "JWT Auth",
      "RBAC",
      "JPA / Hibernate",
      "Service-Layer Architecture",
      "Exception Handling",
    ],
  },
  {
    group: "Languages",
    weight: "primary",
    items: ["Java", "JavaScript", "TypeScript", "Go", "SQL"],
  },
  {
    group: "Databases & Storage",
    weight: "primary",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    group: "Frontend",
    weight: "secondary",
    items: ["React.js", "Next.js", "Redux Toolkit", "TailwindCSS"],
  },
  {
    group: "Tools & Practice",
    weight: "secondary",
    items: ["Git", "Maven", "Postman", "DSA", "Clean Architecture"],
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Development Intern",
    org: "Jain (Deemed-to-be University)",
    location: "Bengaluru, India",
    period: "Jul 2026 — Present",
    current: true,
    points: [
      "Built a college/exam discovery platform solo — 45+ REST APIs across 4 role types (student, admin, editor, college).",
      "Refactored controllers into a layered, feature-based backend without breaking prod.",
      "Implemented JWT auth with route-level authorization across every secured route.",
      "Replaced a forced password-reset flow with OTP-based reset; built reusable pagination + search.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Alumni-Student Networking Platform",
    summary: "Real-time networking platform for alumni and students with chat, discussions, and job postings.",
    stack: ["Go Fiber", "MongoDB", "React", "Redux Toolkit", "Tailwind", "JWT", "Pusher"],
    url: "https://github.com/adirajDev/alumni-student-backend",
    liveUrl: null,
    points: [
      "Shipped 22 REST APIs covering chat, discussions, blogs, and job postings.",
      "Designed a two-role (alumni/student) access control system on JWT.",
      "Integrated Pusher for real-time WebSocket messaging.",
      "Built the frontend with React, Redux Toolkit, and Tailwind.",
    ],
  },
  {
    name: "Real Estate Marketplace",
    summary: "MERN property marketplace covering listing, search, and buyer-seller flow end to end.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Redux Toolkit", "Tailwind", "Firebase", "JWT"],
    url: "https://github.com/adirajDev/Real-State-Marketplace",
    liveUrl: null,
    points: [
      "Implemented dual auth — Google OAuth and email/password with JWT.",
      "Built REST APIs for property CRUD operations.",
      "Integrated Firebase Storage for fast listing image upload/retrieval.",
      "Added filterable search by price, location, and property type.",
    ],
  },
];

export const EDUCATION = {
  school: "Lovely Professional University",
  location: "Punjab, India",
  degree: "B.Tech, Computer Science and Engineering",
  period: "Jul 2021 — May 2025",
  detail: "CGPA 7.98",
};

export const CERTS = [
  {
    name: "Programming in Java — NPTEL",
    date: "Apr 2023",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS49S5380002504049512",
  },
];

export const NAV = [
  { id: "about", label: "/about" },
  { id: "experience", label: "/experience" },
  { id: "projects", label: "/projects" },
  { id: "skills", label: "/skills" },
  { id: "contact", label: "/contact" },
];
