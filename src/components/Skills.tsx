
import { Card, CardContent } from "@/components/ui/card";
import { Code, Pen, Image } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
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

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with and continuously improving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Figma', 'Adobe XD', 'HTML5', 'CSS3', 'JavaScript', 'Python', 'Git', 'VS Code',
              'Photoshop', 'Illustrator', 'React', 'Tailwind CSS'
            ].map((tech, index) => (
              <div key={index} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-gray-300 text-sm hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
