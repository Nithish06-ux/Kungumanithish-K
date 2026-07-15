import { Linkedin, Mail, ArrowLeft, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 pt-16 pb-16">
      <div className="max-w-2xl w-full mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-8">
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </Link>

        {/* Profile Card */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <User size={56} className="text-purple-400" />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Kungumanithish
          </h1>
          <p className="text-purple-400 text-lg font-medium mb-6">
            UI/UX Designer | Engineering Student | Web Enthusiast
          </p>

          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10">
            B.Tech Information Technology student at Nandha Engineering College, Erode. 
            Passionate about UI/UX design, web development, and creating meaningful digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.linkedin.com/in/kungumanithish-k" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </a>

            <a href="mailto:kungumanithish@gmail.com">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Message
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
