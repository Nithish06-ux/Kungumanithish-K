
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:kungumanithish@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened!",
      description: "Your email client should open with the pre-filled message.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
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

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{info.title}</h3>
                      <p className="text-gray-400 text-sm">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-medium mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-gray-300 hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                  >
                    <Github size={16} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-gray-300 hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                  >
                    <Linkedin size={16} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-gray-300 hover:bg-pink-600/20 hover:border-pink-500/50 hover:text-pink-300 transition-all duration-300"
                  >
                    <Mail size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind, need design consultation, or just want to connect, 
            I'm always excited to discuss new opportunities and creative challenges.
          </p>
          <Button 
            onClick={() => window.location.href = 'mailto:kungumanithish@gmail.com?subject=Let\'s Work Together!'}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
