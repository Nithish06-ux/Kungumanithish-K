const express = require("express");
const router = express.Router();

const portfolioData = {
  personal: {
    name: "Kungumanithish K",
    title: "UI/UX Designer | Full-Stack Web Developer | Engineering Student",
    bio: "I'm an engineering student pursuing B.Tech in Information Technology at Nandha Engineering College, Erode. I specialize in UI/UX design, full-stack PERN web development, mobile applications in Flutter, and AI/ML integrations.",
    email: "kungumanithish@gmail.com",
    location: "Erode, Tamil Nadu, India",
    github: "https://github.com/Nithish06-ux",
    linkedin: "https://www.linkedin.com/in/kungumanithish-k",
    education: {
      degree: "B.Tech in Information Technology",
      institution: "Nandha Engineering College, Erode",
      graduationYear: "2027",
    },
  },
  skills: [
    {
      category: "UI/UX Design",
      color: "purple",
      items: [
        { name: "User Interface Design", level: 85 },
        { name: "User Experience Research", level: 75 },
        { name: "Wireframing & Prototyping", level: 80 },
        { name: "Design Systems", level: 70 },
      ],
    },
    {
      category: "Web Development",
      color: "blue",
      items: [
        { name: "React 18 & Vite", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Mobile & AI/ML",
      color: "emerald",
      items: [
        { name: "Flutter & Dart", level: 80 },
        { name: "Python & OpenCV", level: 75 },
        { name: "Machine Learning (Scikit-Learn)", level: 70 },
        { name: "Java Data Structures (DSA)", level: 75 },
      ],
    },
  ],
  technologies: [
    "Figma", "React", "Node", "PostgreSQL", "Flutter", "Dart",
    "Python", "OpenCV", "Java", "Tailwind CSS", "Git", "VS Code"
  ],
  projects: [
    {
      id: "vbrionpx",
      title: "vbrionPX — Cloud Pharmacy & GST Platform",
      category: "web",
      tagline: "Next-gen cloud pharmacy billing, expiry radar, and automated GST compliance.",
      description: "Production-ready, full-stack PERN (PostgreSQL, Express, React, Node.js) web application designed for retail and hospital pharmacies.",
      github: "https://github.com/Nithish06-ux/vbrionpx",
      technologies: ["React 18", "PostgreSQL", "Express.js", "Node.js", "Tailwind CSS", "Vite"],
      features: [
        "Resilient local persistence buffer during offline periods",
        "Expiry Radar early-warning algorithm for near-expiry SKU inventory",
        "Automated GST calculation and instant thermal receipt printing",
        "High-speed indexed search for 50,000+ pharmaceutical formulations"
      ],
    },
    {
      id: "smartattend",
      title: "SmartAttend — Intelligent Attendance & Event System",
      category: "mobile",
      tagline: "Campus event management with HMAC-SHA256 rotating QR & ML anomaly detection.",
      description: "Enterprise-grade cross-platform mobile application built with Flutter featuring time-expiring cryptographic QR codes, GPS geofencing, Hive offline caching, and machine learning proxy detection.",
      github: "https://github.com/Nithish06-ux/Attedance_and_Event_per",
      technologies: ["Flutter", "Dart", "FastAPI", "Python", "Firebase", "Hive DB", "Scikit-Learn"],
      features: [
        "60-second rotating cryptographic QR codes preventing proxy check-ins",
        "GPS Haversine radius validation guaranteeing physical student presence",
        "Offline-first Hive caching with automated background cloud sync",
        "FastAPI ML service using Isolation Forest & LOF algorithms for anomaly detection"
      ],
    },
    {
      id: "aams",
      title: "AAMS — Facial Biometrics & Encrypted Attendance",
      category: "aiml",
      tagline: "Contactless facial recognition system with AES-256 encrypted biometric storage.",
      description: "Comprehensive computer vision attendance solution using OpenCV and Local Binary Patterns Histograms (LBPH) paired with symmetric AES-256 dataset encryption.",
      github: "https://github.com/Nithish06-ux/AAMS",
      technologies: ["Python", "OpenCV", "LBPH Algorithm", "AES-256", "Node.js", "Express"],
      features: [
        "Real-time video stream face tracking and LBPH model inference with 95%+ accuracy",
        "AES-256 dataset encryption protecting biometric samples in storage",
        "Automated attendance report generation directly exporting to Excel and Word",
        "Low-compute architecture running on standard edge webcams without GPU requirement"
      ],
    },
    {
      id: "vbrion-portfolio",
      title: "vbrion Analytics — Strategic AI Consulting Platform",
      category: "web",
      tagline: "Corporate showcase platform blending strategic consulting with AI engineering.",
      description: "A visually striking corporate portfolio website built for vbrion ('vbrion analytics') featuring a bespoke VB astronomical observer identity, interactive service tiers, and dark glassmorphism styling.",
      github: "https://github.com/Nithish06-ux/Vbrion-portfolio",
      technologies: ["React", "Vite", "Tailwind CSS", "Express", "Node.js", "Framer Motion"],
      features: [
        "Cyan-blue line art 'VB' astronomical observer monogram identity",
        "Interactive service tier breakdowns outlining enterprise AI roadmaps",
        "Lead intelligence capture funnel with input sanitization and notification dispatch",
        "60FPS fluid animations and responsive glassmorphism"
      ],
    },
    {
      id: "ai-ml-spp",
      title: "AI-ML-SPP — Educational Analytics & Risk Detection",
      category: "aiml",
      tagline: "Machine learning platform for early academic risk detection and GPA trajectory prediction.",
      description: "Educational analytics platform applying machine learning models to student academic datasets, offering institutions a proactive tool for early risk detection and personalized learning support.",
      github: "https://github.com/Nithish06-ux/AI-ML-SPP",
      technologies: ["Dart", "Flutter", "Python", "Machine Learning", "Predictive Analytics"],
      features: [
        "Multi-factor risk evaluation synthesizing test scores, attendance, and labs",
        "Early warning classification engine categorizing students into clear risk tiers",
        "Interactive institutional dashboards enabling department heads to spot curriculum gaps",
        "Data-driven educational intervention suggestions for academic counselors"
      ],
    },
    {
      id: "leetcode",
      title: "LeetCode Solutions — Algorithms & BST in Java",
      category: "dsa",
      tagline: "Optimized Java implementations of complex Binary Search Trees and tree traversals.",
      description: "Curated collection of optimal Java solutions for challenging tree data structures and LeetCode algorithmic problems, emphasizing minimal auxiliary space and clean recursive logic.",
      github: "https://github.com/Nithish06-ux/Leet-code",
      technologies: ["Java 17", "Binary Search Trees", "Tree Traversal", "DSA", "Recursion"],
      features: [
        "101 Symmetric Tree: Optimal mirror traversal checking tree symmetry in O(N) time",
        "450 Delete Node in BST: Rigorous 3-case node deletion with in-order successor swapping",
        "98 Validate BST: Strict upper/lower boundary recursive validation avoiding overflow",
        "933 Increasing Order Search Tree: In-order relinking of nodes into right-skewed tree"
      ],
    },
    {
      id: "portfolio-os",
      title: "Portfolio OS — Cyberpunk Full-Stack PERN",
      category: "web",
      tagline: "Futuristic terminal portfolio built with React 18, PostgreSQL, and Web Audio API.",
      description: "High-performance developer portfolio featuring a sci-fi cyberpunk HUD interface, zero-dependency real-time Web Audio synthesizer, and full-stack PostgreSQL/Express integration.",
      github: "https://github.com/Nithish06-ux/nithishkportfolio",
      technologies: ["React 18", "Express.js", "PostgreSQL", "Tailwind CSS", "Web Audio API"],
      features: [
        "Zero-dependency real-time Web Audio API synthesizer generating hover/click sound effects",
        "Interactive boot terminal sequence with speech synthesis and typewriter logging",
        "Modular PERN stack architecture with dual development environment and production build pipeline",
        "Holographic case study modal system providing deep architectural insights into each project"
      ],
    },
    {
      id: "nithish-dup",
      title: "Mah-LLM — Exploratory Language Model Architecture",
      category: "aiml",
      tagline: "Experimental study of transformer layers, attention heads, and prompt pipelines.",
      description: "An exploratory AI research repository investigating transformer neural network fundamentals, multi-head self-attention mechanisms, and custom generative prompt pipelines.",
      github: "https://github.com/Nithish06-ux/Nithish-Dup",
      technologies: ["Python", "PyTorch", "Transformers", "LLM", "Tokenizer"],
      features: [
        "Hands-on architectural exploration of transformer layers and token embedding spaces",
        "Experimentation with custom prompt templates and inference latency benchmarks",
        "Study of tokenizer dictionaries and memory-efficient generation routines"
      ],
    },
    {
      id: "vbrion-portal",
      title: "vbrion Client Portal — Telemetry & Analytics Hub",
      category: "web",
      tagline: "Secure client portal for service analytics and API telemetry visualization.",
      description: "Client-facing management dashboard providing real-time telemetry, service usage monitoring, and secure enterprise account workflows for vbrion services.",
      github: "https://github.com/Nithish06-ux/vbrion-portal",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Cloud Telemetry"],
      features: [
        "Role-based client telemetry dashboards showing active service metrics",
        "Lightweight vanilla JavaScript architecture delivering instant load speeds",
        "Modular charting components visualizing usage trends and uptime stats"
      ],
    },
    {
      id: "practice",
      title: "Algorithms Playground — DSA Drills & Snippets",
      category: "dsa",
      tagline: "Personal coding sandbox for testing algorithms and benchmarking data structures.",
      description: "Dedicated repository for algorithm experiments, data structure drills, and competitive programming challenges designed to sharpen foundational problem-solving skills.",
      github: "https://github.com/Nithish06-ux/practice",
      technologies: ["JavaScript", "Algorithms", "DSA", "Problem Solving"],
      features: [
        "Hands-on implementations of sorting algorithms, search trees, and graph traversals",
        "Algorithmic complexity profiling comparing naive vs optimal approaches",
        "Rapid prototyping space for small computational experiments"
      ],
    },
    {
      id: "nithish",
      title: "Foundation Sandbox — Boilerplates & Early Code",
      category: "dsa",
      tagline: "Initial repository tracking early milestones in web technologies and DOM manipulation.",
      description: "Foundational web development archive showcasing early experiments with HTML5, CSS3, JavaScript DOM manipulation, and starter templates from the beginning of the coding journey.",
      github: "https://github.com/Nithish06-ux/nithish",
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Boilerplates"],
      features: [
        "Archival milestone tracking progression from early web experiments to full-stack PERN systems",
        "Reusable vanilla web boilerplates and responsive CSS layout snippets"
      ],
    },
  ],
  stats: {
    yearsOfStudy: "4+",
    repositories: "11",
    skillsAcquired: "8+",
  },
};

// GET /api/portfolio
router.get("/", (req, res) => {
  res.json(portfolioData);
});

// GET /api/portfolio/projects
router.get("/projects", (req, res) => {
  res.json(portfolioData.projects);
});

module.exports = router;
