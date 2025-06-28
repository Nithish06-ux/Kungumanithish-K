
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pen, Code, Image, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
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

  return (
    <section id="services" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a range of design and development services to help bring your digital ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${service.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-2">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Deliverables:</h4>
                    <p className="text-xs text-gray-500">{service.deliverables}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 mt-auto">
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white text-center mb-12">My Working Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and project requirements" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Design & Development", description: "Bringing ideas to life with code and design" },
              { step: "04", title: "Delivery", description: "Testing, refinement, and final project delivery" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                  )}
                </div>
                <h4 className="text-white font-medium mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
