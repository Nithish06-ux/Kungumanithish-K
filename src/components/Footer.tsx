
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Kungumanithish
            </h3>
            <p className="text-gray-400 text-sm">
              UI/UX Designer & Engineering Student
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Services', id: 'services' },
              { name: 'Contact', id: 'contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp size={16} />
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Kungumanithish. Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="text-center md:text-right">
            <p>
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
