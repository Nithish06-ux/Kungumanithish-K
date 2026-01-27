
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code, BookOpen, UserCheck, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ERP School Project",
      description: "A comprehensive digital solution for school resource planning, built with modern web technologies. Features include student management, attendance tracking, and administrative tools.",
      image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Application",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Student Information Management",
        "Attendance Tracking System", 
        "Administrative Dashboard",
        "Responsive Design"
      ]
    },
    {
      title: "AI Snake Game",
      description: "An interactive snake game enhanced with basic AI logic, showcasing front-end development skills and game programming fundamentals.",
      image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Logic"],
      category: "Game Development",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-Powered Snake Movement",
        "Score Tracking System",
        "Smooth Animations",
        "Interactive Gameplay"
      ]
    },
    {
      title: "Automated Attendance System",
      description: "A smart attendance management solution for schools and colleges, featuring automated tracking and comprehensive reporting capabilities.",
      image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Database"],
      category: "Web Application",
      icon: UserCheck,
      color: "from-green-500 to-teal-500",
      features: [
        "Automated Attendance Tracking",
        "Real-time Reports",
        "Student Database Management",
        "Admin Dashboard"
      ]
    },
    {
      title: "Event Management System",
      description: "A comprehensive platform for organizing and managing events, from planning to execution with seamless coordination tools.",
      image: "/lovable-uploads/f558f7d2-cb1d-4a4d-a48d-f233d5d14976.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Application",
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      features: [
        "Event Scheduling",
        "Registration System",
        "Notification Alerts",
        "Analytics Dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden">
              <div className="relative">
                {/* Project Image/Placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center overflow-hidden">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-medium rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded border border-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity flex items-center gap-2`}
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
