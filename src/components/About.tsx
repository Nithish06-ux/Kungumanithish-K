
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/80">K</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am an engineering student pursuing B.Tech in Information Technology at Nandha Engineering College, Erode. 
                I specialize in UI/UX design and have foundational skills in web development. I'm friendly, curious, 
                and always ready to adapt to new challenges.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My passion lies in creating intuitive and visually appealing digital experiences. I believe that good design 
                is not just about aesthetics, but about solving real problems and making technology accessible to everyone.
              </p>
            </div>

            {/* Education Card */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">Educational Background</h4>
                    <div className="space-y-2">
                      <p className="text-gray-300 font-medium">B.Tech in Information Technology</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>Nandha Engineering College, Erode</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>Expected Graduation: 2027</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400 text-sm">Years of Study</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-pink-400">5+</div>
                <div className="text-gray-400 text-sm">Skills Acquired</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-orange-400">2</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
