const portfolioData = {
  hero: {
    greeting: "Hello, I'm",
    name: "Kungumanithish K",
    subtitles: ["Full-Stack Web Developer", "UI/UX Designer", "AI & Mobile Enthusiast"],
    bio: "A passionate B.Tech Information Technology student at Nandha Engineering College with deep expertise in UI/UX design and full-stack development. I blend creativity with robust engineering to build scalable web, mobile, and AI solutions.",
    resumeUrl: "/Kungumanithish_K_Resume.pdf",
    profilePhoto: "/profile-photo.jpg",
    socials: {
      github: "https://github.com/Nithish06-ux",
      linkedin: "https://www.linkedin.com/in/kungumanithish-k",
      email: "mailto:kungumanithish@gmail.com",
    },
  },

  about: {
    title: "About Me",
    subtitle: "Get to know who I am",
    description: [
      "I'm Kungumanithish K, a driven B.Tech Information Technology student at Nandha Engineering College with a deep passion for UI/UX design and full-stack web and mobile development.",
      "My journey in tech began with a curiosity about how digital interfaces shape user behavior. Today, I channel that passion into building enterprise PERN stack web apps, intelligent computer vision systems, and cross-platform mobile applications.",
      "When I'm not coding or designing, you'll find me analyzing algorithmic problems in Java, researching LLM architectures, or prototyping interactive interfaces in Figma.",
    ],
    education: {
      degree: "B.Tech Information Technology",
      institution: "Nandha Engineering College, Erode",
      year: "2023 - 2027 (Expected)",
      description: "Focused on software engineering, data structures, full-stack architecture, and human-computer interaction.",
    },
    stats: [
      { label: "Years of Study", value: 4, suffix: "+" },
      { label: "GitHub Repos", value: 11, suffix: "" },
      { label: "Core Stacks", value: 8, suffix: "+" },
    ],
  },

  skills: {
    title: "My Skills",
    subtitle: "What I bring to the table",
    categories: [
      {
        id: "uiux",
        title: "UI/UX Design",
        icon: "palette",
        gradient: "from-purple-500 to-pink-500",
        skills: [
          { name: "User Interface Design", level: 85 },
          { name: "User Experience Research", level: 75 },
          { name: "Wireframing & Prototyping", level: 80 },
          { name: "Design Systems & Tokens", level: 70 },
        ],
      },
      {
        id: "webdev",
        title: "Web Development",
        icon: "code",
        gradient: "from-blue-500 to-cyan-500",
        skills: [
          { name: "React 18 & Vite", level: 85 },
          { name: "Node.js & Express APIs", level: 80 },
          { name: "PostgreSQL & Database Design", level: 75 },
          { name: "Tailwind CSS & Responsive UI", level: 90 },
        ],
      },
      {
        id: "mobile_ai",
        title: "Mobile & AI/ML",
        icon: "terminal",
        gradient: "from-teal-500 to-emerald-500",
        skills: [
          { name: "Flutter & Dart", level: 80 },
          { name: "Python & OpenCV", level: 75 },
          { name: "Machine Learning (Scikit-Learn)", level: 70 },
          { name: "Java Data Structures (DSA)", level: 75 },
        ],
      },
    ],
    tools: [
      "Figma", "React", "Node.js", "Express", "PostgreSQL", "Flutter",
      "Dart", "Python", "OpenCV", "Java", "Tailwind CSS", "Git", "VS Code",
    ],
  },

  projects: [
    {
      id: "vbrionpx",
      title: "vbrionPX — Cloud Pharmacy & GST Platform",
      category: "web",
      categoryLabel: "Full-Stack Web",
      tagline: "Next-gen cloud pharmacy billing, expiry radar, and automated GST compliance.",
      summary:
        "Production-ready, full-stack PERN (PostgreSQL, Express, React, Node.js) web application designed for retail and hospital pharmacies to eliminate stock expiration losses and automate GST invoicing.",
      stack: ["React 18", "PostgreSQL", "Express.js", "Node.js", "Tailwind CSS", "Vite"],
      stackBreakdown: {
        frontend: "React 18, Vite, Tailwind CSS, Heroicons, Framer Motion",
        backend: "Node.js, Express.js REST API with rate limiting & helmet",
        database: "PostgreSQL with connection pooling & local fallback persistence buffer",
        compliance: "Automated GST invoicing, HSN code indexing & thermal receipt engine",
      },
      highlights: [
        "Resilient local persistence buffer ensuring uninterrupted billing during network dropouts",
        "Expiry Radar early-warning algorithm detecting near-expiry batches across SKU inventory",
        "Automated GST calculation, HSN code indexing, and instant thermal receipt printing",
        "High-speed indexed search for over 50,000+ pharmaceutical formulations",
      ],
      problemStatement:
        "Retail and hospital pharmacies struggle with expired stock waste, manual GST accounting errors, and billing halts during unstable internet connections.",
      solution:
        "Engineered a resilient PERN web application with an offline-tolerant persistence buffer, automated tax calculations, and proactive expiry radar alerts.",
      github: "https://github.com/Nithish06-ux/vbrionpx",
      previewType: "dashboard",
      year: "2026",
      status: "PRODUCTION READY",
    },
    {
      id: "smartattend",
      title: "SmartAttend — Intelligent Attendance & Event System",
      category: "mobile",
      categoryLabel: "Mobile & ML Systems",
      tagline: "Campus event management with HMAC-SHA256 rotating QR & ML anomaly detection.",
      summary:
        "Enterprise-grade cross-platform mobile application built with Flutter featuring time-expiring cryptographic QR codes, GPS geofencing, Hive offline caching, and machine learning proxy detection.",
      stack: ["Flutter", "Dart", "FastAPI", "Python", "Firebase", "Hive DB", "Scikit-Learn"],
      stackBreakdown: {
        mobile: "Flutter (Android & iOS), Dart, Provider State Management",
        backend: "FastAPI (Python) microservices, Firebase Cloud Functions & Firestore",
        storage: "Hive NoSQL local cache with automated background cloud sync",
        ml_security: "Scikit-Learn (Isolation Forest & LOF), HMAC-SHA256, Haversine Geofencing",
      },
      highlights: [
        "60-second dynamically rotating cryptographic QR codes preventing proxy attendance via screenshots",
        "Strict GPS Haversine radius validation guaranteeing physical student presence within event hall",
        "Offline-first Hive caching allowing full event check-ins even without campus Wi-Fi",
        "FastAPI ML service using Isolation Forest & LOF algorithms to automatically flag suspicious check-in patterns",
      ],
      problemStatement:
        "Colleges face rampant proxy attendance, student buddy-punching via shared photos, and network dead zones during high-density auditorium gatherings.",
      solution:
        "Integrated time-expiring cryptographic tokens with GPS geofencing and machine learning anomaly detection for verifiable, tamper-proof attendance.",
      github: "https://github.com/Nithish06-ux/Attedance_and_Event_per",
      previewType: "mobile-app",
      year: "2026",
      status: "FEATURE COMPLETE",
    },
    {
      id: "aams",
      title: "AAMS — Facial Biometrics & Encrypted Attendance",
      category: "aiml",
      categoryLabel: "AI & Computer Vision",
      tagline: "Contactless facial recognition system with AES-256 encrypted biometric storage.",
      summary:
        "Comprehensive computer vision attendance solution using OpenCV and Local Binary Patterns Histograms (LBPH) paired with symmetric AES-256 dataset encryption to protect biometric privacy.",
      stack: ["Python", "OpenCV", "LBPH Algorithm", "AES-256", "Node.js", "Express"],
      stackBreakdown: {
        vision: "OpenCV (Haar Cascade detection, LBPH Face Recognizer for feature extraction)",
        security: "Python Cryptography module with AES-256 symmetric dataset encryption",
        automation: "Automated DOCX and Excel attendance report generator with timestamps",
        api: "Express.js & Node.js backend for centralized student record logging",
      },
      highlights: [
        "Real-time video stream face tracking and LBPH model inference with 95%+ classification accuracy",
        "AES-256 dataset encryption ensuring student biometric facial samples are never stored in plaintext",
        "Automated attendance report generation exporting daily and monthly logs directly to Excel and Word",
        "Low-compute architecture optimized to run smoothly on standard webcams without dedicated GPU hardware",
      ],
      problemStatement:
        "Physical biometric scanners cause bottlenecks and hygiene concerns, while unencrypted facial image storage creates severe privacy and compliance vulnerabilities.",
      solution:
        "Constructed a high-speed contactless face recognition pipeline with hardware-efficient LBPH models and mandatory AES encryption for all stored facial encodings.",
      github: "https://github.com/Nithish06-ux/AAMS",
      previewType: "face-scan",
      year: "2026",
      status: "ACTIVE EXPERIMENT",
    },
    {
      id: "vbrion-portfolio",
      title: "vbrion Analytics — Strategic AI Consulting Platform",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Corporate showcase platform blending strategic consulting with AI engineering.",
      summary:
        "A visually striking corporate portfolio website built for vbrion ('vbrion analytics') featuring a bespoke VB astronomical observer identity, interactive service tiers, and dark glassmorphism styling.",
      stack: ["React", "Vite", "Tailwind CSS", "Express", "Node.js", "Framer Motion"],
      stackBreakdown: {
        frontend: "React (Vite), Tailwind CSS, Framer Motion, Lucide Icons",
        styling: "Custom Glassmorphism, Neon Cyan Line Art, Responsive Typography",
        backend: "Express.js, Node.js Contact Ingestion API",
      },
      highlights: [
        "Custom brand identity featuring a cyan-blue line art 'VB' astronomical observer monogram",
        "Interactive service tier breakdowns outlining enterprise AI roadmaps and analytics pipelines",
        "Lead intelligence capture funnel with input sanitization and notification dispatch",
        "60FPS fluid animations and responsive glassmorphism across desktop and mobile devices",
      ],
      problemStatement:
        "Emerging AI consulting firms require a differentiated brand identity that communicates both deep technical rigor and strategic C-suite value.",
      solution:
        "Designed and implemented a high-aesthetic responsive portfolio that showcases consulting frameworks alongside technical capabilities.",
      github: "https://github.com/Nithish06-ux/Vbrion-portfolio",
      previewType: "dashboard",
      year: "2026",
      status: "ACTIVE",
    },
    {
      id: "ai-ml-spp",
      title: "AI-ML-SPP — Educational Analytics & Risk Detection",
      category: "aiml",
      categoryLabel: "AI & Education",
      tagline: "Machine learning platform for early academic risk detection and GPA trajectory prediction.",
      summary:
        "Educational analytics platform applying machine learning models to student academic datasets, offering institutions a proactive tool for early risk detection and personalized learning support.",
      stack: ["Dart", "Flutter", "Python", "Machine Learning", "Predictive Analytics"],
      stackBreakdown: {
        client: "Flutter & Dart cross-platform interactive analytics dashboard",
        ml_core: "Supervised classification & regression algorithms for grade trajectory forecasting",
        analytics: "Correlation heatmaps, semester GPA trends, early risk flags",
      },
      highlights: [
        "Multi-factor risk evaluation synthesizing test scores, attendance patterns, and lab performance",
        "Early warning classification engine categorizing students into clear risk tiers before final exams",
        "Interactive institutional dashboards enabling department heads to spot systemic curriculum gaps",
        "Data-driven educational intervention suggestions for academic counselors",
      ],
      problemStatement:
        "Academic institutions often identify struggling students too late—after semester examinations have already concluded.",
      solution:
        "Created a predictive analytics engine that analyzes continuous assessment signals to provide early alerts weeks before final exams.",
      github: "https://github.com/Nithish06-ux/AI-ML-SPP",
      previewType: "face-scan",
      year: "2026",
      status: "RESEARCH & PROTOTYPE",
    },
    {
      id: "leetcode",
      title: "LeetCode Solutions — Algorithms & BST in Java",
      category: "dsa",
      categoryLabel: "Algorithms & DSA",
      tagline: "Optimized Java implementations of complex Binary Search Trees and tree traversals.",
      summary:
        "Curated collection of optimal Java solutions for challenging tree data structures and LeetCode algorithmic problems, emphasizing minimal auxiliary space and clean recursive logic.",
      stack: ["Java 17", "Binary Search Trees", "Tree Traversal", "DSA", "Recursion"],
      stackBreakdown: {
        language: "Java (OpenJDK 17)",
        structures: "Binary Search Trees (BST), AVL Trees, Balanced Binary Trees",
        complexity: "O(h) height-bounded algorithms with strict boundary validation",
      },
      highlights: [
        "101 Symmetric Tree: Optimal mirror traversal checking tree symmetry in O(N) time and O(h) space",
        "450 Delete Node in BST: Rigorous 3-case node deletion with in-order successor swapping",
        "98 Validate BST: Strict upper/lower boundary recursive validation preventing integer overflow traps",
        "933 Increasing Order Search Tree: In-order relinking of nodes into a right-skewed tree",
      ],
      problemStatement:
        "Mastering non-linear data structures requires writing bug-free recursive traversals that handle edge cases like null subtrees and boundary violations.",
      solution:
        "Constructed tested, documented Java implementations with detailed explanations of time/space complexity trade-offs.",
      github: "https://github.com/Nithish06-ux/Leet-code",
      previewType: "code",
      year: "2026",
      status: "CONTINUOUS PRACTICE",
    },
    {
      id: "portfolio-os",
      title: "Portfolio OS — Cyberpunk Full-Stack PERN",
      category: "web",
      categoryLabel: "Full-Stack Web",
      tagline: "Futuristic terminal portfolio built with React 18, PostgreSQL, and Web Audio API.",
      summary:
        "High-performance developer portfolio featuring a sci-fi cyberpunk HUD interface, zero-dependency real-time Web Audio synthesizer, and full-stack PostgreSQL/Express integration.",
      stack: ["React 18", "Express.js", "PostgreSQL", "Tailwind CSS", "Web Audio API"],
      stackBreakdown: {
        frontend: "React 18, Vite, Tailwind CSS, Framer Motion, JetBrains Mono",
        sound: "Pure Web Audio API real-time audio synthesizer for micro-blips & sweeps",
        backend: "Express.js, Node.js REST API with rate limiting & helmet protection",
        database: "PostgreSQL with fallback data resilience",
        email: "EmailJS integration for direct communication",
      },
      highlights: [
        "Zero-dependency real-time Web Audio API synthesizer generating hover/click sound effects",
        "Interactive boot terminal sequence with speech synthesis and typewriter logging",
        "Modular PERN stack architecture with dual development environment and production build pipeline",
        "Holographic case study modal system providing deep architectural insights into each project",
      ],
      problemStatement:
        "Generic portfolio templates fail to showcase both technical full-stack competence and creative UI/UX craftsmanship.",
      solution:
        "Built a bespoke cyberpunk OS interface that demonstrates full-stack architecture, frontend animations, and audio engineering.",
      github: "https://github.com/Nithish06-ux/nithishkportfolio",
      previewType: "dashboard",
      year: "2026",
      status: "PRODUCTION ACTIVE",
    },
    {
      id: "nithish-dup",
      title: "Mah-LLM — Exploratory Language Model Architecture",
      category: "aiml",
      categoryLabel: "AI & Research",
      tagline: "Experimental study of transformer layers, attention heads, and prompt pipelines.",
      summary:
        "An exploratory AI research repository investigating transformer neural network fundamentals, multi-head self-attention mechanisms, and custom generative prompt pipelines.",
      stack: ["Python", "PyTorch", "Transformers", "LLM", "Tokenizer"],
      stackBreakdown: {
        frameworks: "Python, PyTorch, HuggingFace Transformers",
        concepts: "Self-Attention, Layer Normalization, Token Embeddings, Prompt Engineering",
      },
      highlights: [
        "Hands-on architectural exploration of transformer layers and token embedding spaces",
        "Experimentation with custom prompt templates and inference latency benchmarks",
        "Study of tokenizer dictionaries and memory-efficient generation routines",
      ],
      problemStatement:
        "Understanding modern generative AI requires going beyond black-box APIs to explore the underlying attention mechanics and weight matrices.",
      solution:
        "Created an experimental playground to inspect token flows, attention heatmaps, and local inference mechanics.",
      github: "https://github.com/Nithish06-ux/Nithish-Dup",
      previewType: "neural",
      year: "2026",
      status: "RESEARCH LAB",
    },
    {
      id: "vbrion-portal",
      title: "vbrion Client Portal — Telemetry & Analytics Hub",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Secure client portal for service analytics and API telemetry visualization.",
      summary:
        "Client-facing management dashboard providing real-time telemetry, service usage monitoring, and secure enterprise account workflows for vbrion services.",
      stack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Cloud Telemetry"],
      stackBreakdown: {
        client: "Modular vanilla JavaScript SPA architecture",
        styling: "Custom responsive dark telemetry theme with real-time HUD metrics",
        apis: "Secure RESTful handshakes for client analytics ingestion",
      },
      highlights: [
        "Role-based client telemetry dashboards showing active service metrics",
        "Lightweight vanilla JavaScript architecture delivering instant load speeds",
        "Modular charting components visualizing usage trends and uptime stats",
      ],
      problemStatement:
        "Clients need a clear, unbloated portal to track ongoing AI and consulting deliverables without wading through complex spreadsheets.",
      solution:
        "Developed a streamlined portal emphasizing core KPIs, telemetry status, and secure communication channels.",
      github: "https://github.com/Nithish06-ux/vbrion-portal",
      previewType: "dashboard",
      year: "2026",
      status: "ACTIVE",
    },
    {
      id: "practice",
      title: "Algorithms Playground — DSA Drills & Snippets",
      category: "dsa",
      categoryLabel: "Algorithms & DSA",
      tagline: "Personal coding sandbox for testing algorithms and benchmarking data structures.",
      summary:
        "Dedicated repository for algorithm experiments, data structure drills, and competitive programming challenges designed to sharpen foundational problem-solving skills.",
      stack: ["JavaScript", "Algorithms", "DSA", "Problem Solving"],
      stackBreakdown: {
        topics: "Array manipulation, HashMaps, recursion, dynamic programming fundamentals",
        tests: "Unit verification scripts and edge-case assertion drills",
      },
      highlights: [
        "Hands-on implementations of sorting algorithms, search trees, and graph traversals",
        "Algorithmic complexity profiling comparing naive vs optimal approaches",
        "Rapid prototyping space for small computational experiments",
      ],
      problemStatement:
        "Writing clean production code requires continuous hands-on reinforcement of foundational computer science principles.",
      solution:
        "Maintains a daily practice sandbox for stress-testing algorithmic patterns and data structures.",
      github: "https://github.com/Nithish06-ux/practice",
      previewType: "code",
      year: "2026",
      status: "CONTINUOUS PRACTICE",
    },
    {
      id: "nithish",
      title: "Foundation Sandbox — Boilerplates & Early Code",
      category: "dsa",
      categoryLabel: "Experiments & Archive",
      tagline: "Initial repository tracking early milestones in web technologies and DOM manipulation.",
      summary:
        "Foundational web development archive showcasing early experiments with HTML5, CSS3, JavaScript DOM manipulation, and starter templates from the beginning of the coding journey.",
      stack: ["HTML5", "CSS3", "JavaScript", "Git", "Boilerplates"],
      stackBreakdown: {
        focus: "Semantic HTML, CSS layout paradigms, vanilla JavaScript events",
      },
      highlights: [
        "Archival milestone tracking progression from early web experiments to full-stack PERN systems",
        "Reusable vanilla web boilerplates and responsive CSS layout snippets",
      ],
      problemStatement:
        "Documenting developer growth and foundational milestones creates a clear engineering trajectory.",
      solution:
        "Preserved as an open-source sandbox reflecting early coding journey milestones.",
      github: "https://github.com/Nithish06-ux/nithish",
      previewType: "code",
      year: "2025",
      status: "ARCHIVAL",
    },
  ],

  services: {
    title: "My Services",
    subtitle: "What I can do for you",
    items: [
      {
        id: 1,
        title: "UI/UX Design",
        icon: "palette",
        gradient: "from-purple-500 to-pink-500",
        description: "Creating intuitive, user-centered interfaces that delight users and drive engagement through thoughtful design decisions.",
        features: [
          "User research & persona development",
          "Wireframing & interactive prototyping",
          "Visual design & brand consistency",
          "Usability testing & iteration",
        ],
        deliverables: ["Figma files", "Prototypes", "Style guides"],
      },
      {
        id: 2,
        title: "Full-Stack Web Development",
        icon: "code",
        gradient: "from-blue-500 to-cyan-500",
        description: "Building responsive, performant PERN stack websites that look beautiful on every device and provide seamless user experiences.",
        features: [
          "React 18 & Vite development",
          "Express REST API architecture",
          "PostgreSQL database modeling",
          "Performance & security optimization",
        ],
        deliverables: ["Live websites", "Source code", "Documentation"],
      },
      {
        id: 3,
        title: "Mobile & AI Solutions",
        icon: "settings",
        gradient: "from-teal-500 to-emerald-500",
        description: "Delivering cross-platform Flutter applications and computer vision / ML pipelines tailored to real-world operational needs.",
        features: [
          "Flutter cross-platform apps",
          "OpenCV & biometric recognition",
          "Offline-first sync architectures",
          "ML predictive analytics integration",
        ],
        deliverables: ["Mobile applications", "ML pipelines", "Deployment configs"],
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together",
    email: "kungumanithish@gmail.com",
    location: "Erode, Tamil Nadu, India",
    responseTime: "Within 24 hours",
    socials: {
      github: "https://github.com/Nithish06-ux",
      linkedin: "https://www.linkedin.com/in/kungumanithish-k",
      email: "mailto:kungumanithish@gmail.com",
    },
  },
};

export default portfolioData;
