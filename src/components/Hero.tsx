
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/portfolio-data";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 animate-fade-in">
          <div className="space-y-4">
            <p className="text-purple-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Kungumanithish
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              UI/UX Designer | Engineering Student | Web Enthusiast
            </p>
          </div>
          
          <p className="text-gray-400 text-lg max-w-2xl">
            I'm an engineering student pursuing B.Tech in Information Technology at Nandha Engineering College, Erode. 
            I specialize in UI/UX design and have foundational skills in web development. I'm friendly, curious, 
            and always ready to adapt to new challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a href="/Kungumanithish_K_Resume.pdf" download="Kungumanithish_K_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-purple-400 border border-slate-600 hover:border-purple-500/50 rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </Button>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </Button>
            </a>
            <a href={socialLinks.email}>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </Button>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Kungumanithish - UI/UX Designer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center"><span class="text-6xl lg:text-8xl font-bold text-white">K</span></div>';
                  }}
                />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          onClick={scrollToAbout}
          variant="ghost" 
          size="sm" 
          className="text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
