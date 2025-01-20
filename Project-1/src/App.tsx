import React from 'react';
import { Menu, X, Github, Twitter, Linkedin, Mail, ArrowRight, ExternalLink, Code, Zap, Shield } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects = [
    {
      title: 'Project Alpha',
      description: 'Revolutionary blockchain solution for enterprise',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: <Code className="h-8 w-8 mb-4 text-blue-400" />,
      link: 'https://github.com/blueblackteam/project-alpha'
    },
    {
      title: 'Project Beta',
      description: 'AI-powered data analytics platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: <Zap className="h-8 w-8 mb-4 text-blue-400" />,
      link: 'https://github.com/blueblackteam/project-beta'
    },
    {
      title: 'Project Gamma',
      description: 'Next-gen cybersecurity framework',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      icon: <Shield className="h-8 w-8 mb-4 text-blue-400" />,
      link: 'https://github.com/blueblackteam/project-gamma'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Tech visionary with 15+ years of experience',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Full-stack architect and blockchain expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com/in/michael-chen'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      bio: 'Award-winning UX/UI designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com/in/emily-rodriguez'
    }
  ];

  const socialLinks = {
    github: 'https://github.com/blueblackteam',
    twitter: 'https://twitter.com/blueblackteam',
    linkedin: 'https://linkedin.com/company/blueblackteam',
    email: 'contact@blueblackteam.com'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Show success message
      alert('Message sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  const handleTeamMemberClick = (linkedin: string) => {
    window.open(linkedin, '_blank', 'noopener noreferrer');
  };

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  const handleSocialClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-blue-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-blue-black/95 backdrop-blur-sm z-50 border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold text-2xl">
                Blue Black Team
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-500/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-blue-black/95 backdrop-blur-sm border-b border-blue-500/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/10 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-blue-black to-blue-black z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Innovating
              </span>{' '}
              the Future Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate developers, designers, and innovators building the next generation of digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-base font-medium rounded-lg text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-blue-black via-deep-blue to-blue-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Mission</h3>
              <p className="text-gray-300 leading-relaxed">To create innovative solutions that transform industries and improve lives through cutting-edge technology.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Vision</h3>
              <p className="text-gray-300 leading-relaxed">To be the leading force in technological advancement, setting new standards for excellence and innovation.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Values</h3>
              <p className="text-gray-300 leading-relaxed">Innovation, integrity, collaboration, and commitment to excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-blue-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-black via-blue-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.icon}
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-gradient-to-b from-blue-black via-deep-blue to-blue-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => handleTeamMemberClick(member.linkedin)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-black to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-blue-black relative">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 border-2 border-blue-500 text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-6">
                <button 
                  onClick={() => handleSocialClick(socialLinks.github)}
                  className="w-full flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 mr-4">
                    <Github className="h-6 w-6" />
                  </div>
                  <span>github.com/blueblackteam</span>
                </button>
                <button 
                  onClick={() => handleSocialClick(socialLinks.twitter)}
                  className="w-full flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 mr-4">
                    <Twitter className="h-6 w-6" />
                  </div>
                  <span>@blueblackteam</span>
                </button>
                <button 
                  onClick={() => handleSocialClick(socialLinks.linkedin)}
                  className="w-full flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 mr-4">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span>linkedin.com/company/blueblackteam</span>
                </button>
                <button 
                  onClick={() => handleSocialClick(`mailto:${socialLinks.email}`)}
                  className="w-full flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span>contact@blueblackteam.com</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-black to-deep-blue border-t border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Blue Black Team
              </h4>
              <p className="text-gray-400">Building the future of technology, one project at a time.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic space-y-3">
                123 Tech Street<br />
                Innovation City, IC 12345<br />
                United States
              </address>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialClick(socialLinks.github)}
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => handleSocialClick(socialLinks.twitter)}
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => handleSocialClick(socialLinks.linkedin)}
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-500/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Blue Black Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;