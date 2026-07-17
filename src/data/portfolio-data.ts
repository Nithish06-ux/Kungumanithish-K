import { BookOpen, Calendar, Code, Image, Pen, UserCheck, Mail, MapPin, Phone } from 'lucide-react';

// Navigation items used by Navbar and Footer
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

// Skill categories used by Skills section
export const skillCategories = [
  {
    title: "UI/UX Design",
    icon: Pen,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "User Interface Design", level: 85 },
      { name: "User Experience Research", level: 75 },
      { name: "Wireframing & Prototyping", level: 80 },
      { name: "Design Systems", level: 70 },
    ]
  },
  {
    title: "Web Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Responsive Design", level: 80 },
      { name: "React Basics", level: 60 },
    ]
  },
  {
    title: "Programming",
    icon: Image,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Java", level: 70 },
      { name: "Problem Solving", level: 80 },
      { name: "Data Structures", level: 65 },
      { name: "Algorithm Design", level: 60 },
    ]
  }
];

// Technologies & tools chips used by Skills section
export const techTools = [
  'Figma', 'HTML5', 'CSS3', 'JavaScript', 'Python', 'Node', 'SQL', 'MERN', 'Git', 'VS Code',
  'React', 'Tailwind CSS'
];

export const projects = [
  {
    title: "AI-ML-SPP",
    description: "A machine learning project focused on educational analytics. It demonstrates the feasibility and effectiveness of applying ML models for early risk detection, student performance prediction, and data-driven educational decisions.",
    github: "https://github.com/Nithish06-ux/AI-ML-SPP",
    image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
    technologies: ["Dart", "Flutter", "Machine Learning", "Data Analytics"],
    category: "AI & Education",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Student Performance Prediction",
      "Early Risk Detection Dashboard",
      "Educational Data Processing",
      "Predictive Analytics Engine"
    ]
  },
  {
    title: "Attendance and Event Tracker",
    description: "A mobile application built using Flutter/Dart for tracking attendance and managing events seamlessly, showcasing frontend styling and application logic.",
    github: "https://github.com/Nithish06-ux/Attedance_and_Event_per",
    image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
    technologies: ["Dart", "Flutter", "State Management", "Mobile Development"],
    category: "Mobile Application",
    icon: UserCheck,
    color: "from-green-500 to-teal-500",
    features: [
      "Attendance Management System",
      "Event Coordination Tools",
      "Flutter Cross-platform UI",
      "Local Storage / Database integration"
    ]
  },
  {
    title: "Developer Portfolio Website",
    description: "A highly customized single-page interactive developer portfolio. Built using React, TypeScript, Tailwind CSS, and optimized for smooth animations.",
    github: "https://github.com/Nithish06-ux/nithishkportfolio-main",
    image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web Application",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    features: [
      "Fully Responsive SPA Layout",
      "IntersectionObserver Scroll Reveal Animations",
      "EmailJS Form Integration",
      "Clean TypeScript Structure"
    ]
  },
  {
    title: "Nithish-Dup (Mah-LLM)",
    description: "An experimental large language model exploration project, focused on understanding LLM architectures and building custom AI-driven tools.",
    github: "https://github.com/Nithish06-ux/Nithish-Dup",
    image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
    technologies: ["Python", "LLM", "AI/ML", "Experimentation"],
    category: "AI & Research",
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
    features: [
      "LLM Architecture Exploration",
      "Custom AI Tooling",
      "Model Experimentation",
      "Research Prototypes"
    ]
  },
  {
    title: "Practice Playground",
    description: "A personal sandbox repository used for practicing new concepts, algorithms, and small coding experiments to sharpen programming fundamentals.",
    github: "https://github.com/Nithish06-ux/practice",
    image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
    technologies: ["JavaScript", "Algorithms", "DSA", "Experiments"],
    category: "Learning",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Algorithm Practice",
      "Concept Prototyping",
      "Daily Coding Drills",
      "Snippets & Utilities"
    ]
  },
  {
    title: "Nithish Sandbox",
    description: "A miscellaneous repository containing early experiments, boilerplates, and learning snippets from the initial phase of my development journey.",
    github: "https://github.com/Nithish06-ux/nithish",
    image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
    technologies: ["HTML", "CSS", "JavaScript", "Boilerplates"],
    category: "Experiments",
    icon: UserCheck,
    color: "from-pink-500 to-rose-500",
    features: [
      "Early Project Snippets",
      "Learning Milestones",
      "Starter Templates",
      "Personal Notes"
    ]
  }
];

// Services used by Services section
export const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility.",
    icon: Pen,
    color: "from-purple-500 to-pink-500",
    features: [
      "User Interface Design",
      "Wireframing & Prototyping",
      "User Experience Research",
      "Design Systems Creation",
      "Responsive Design Mockups"
    ],
    deliverables: "Figma files, Prototypes, Style guides"
  },
  {
    title: "Web Design & Development",
    description: "Building responsive and modern websites using the latest web technologies and best practices.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Responsive Web Development",
      "HTML, CSS, JavaScript",
      "Modern Framework Integration",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ],
    deliverables: "Live websites, Source code, Documentation"
  },
  {
    title: "Digital Solutions",
    description: "Comprehensive digital solutions tailored to meet specific business and educational needs.",
    icon: Image,
    color: "from-orange-500 to-red-500",
    features: [
      "Custom Web Applications",
      "Interactive Prototypes",
      "Educational Platforms",
      "Game Development",
      "Problem-solving Solutions"
    ],
    deliverables: "Custom applications, Technical documentation"
  }
];

// Working process steps used by Services section
export const workingProcess = [
  { step: "01", title: "Discovery", description: "Understanding your needs and project requirements" },
  { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
  { step: "03", title: "Design & Development", description: "Bringing ideas to life with code and design" },
  { step: "04", title: "Delivery", description: "Testing, refinement, and final project delivery" }
];

// Contact info used by Contact section
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "kungumanithish@gmail.com",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Erode, Tamil Nadu, India",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Response Time",
    details: "Within 24 hours",
    color: "from-orange-500 to-red-500"
  }
];

// Social links used across Hero, Contact, and Footer
export const socialLinks = {
  github: "https://github.com/Nithish06-ux",
  linkedin: "https://www.linkedin.com/in/kungumanithish-k",
  email: "mailto:kungumanithish@gmail.com",
};
