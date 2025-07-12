import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code, Palette, Database, User, Braces } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Resume'];

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-navy" />
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-light-gray hover:text-teal transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-teal text-navy px-6 py-2 rounded-lg 
              font-semibold hover:bg-teal/90 transition-all duration-300 transform hover:scale-105">
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-light-gray/20">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-light-gray hover:text-teal transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-teal text-navy px-6 py-2 rounded-lg font-semibold w-fit">
                  Let's Talk
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Background geometric shapes for depth */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-teal/3 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal/8 transform rotate-45 blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-teal text-lg font-medium animate-fade-in-delay-1">
                  Hello, I'm
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-delay-2">
                  Omar Rharbi
                </h1>
                <h2 className="text-2xl lg:text-3xl text-teal font-semibold animate-fade-in-delay-3">
                  Full Stack Developer
                </h2>
              </div>

              <p className="text-light-gray text-lg leading-relaxed max-w-lg animate-fade-in-delay-4">
                I specialize in creating beautiful, functional digital experiences that solve real-world problems. 
                Let's build something amazing together.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-in-delay-5">
                <button className="bg-teal text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Let's Talk
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 animate-fade-in-delay-6">
                <span className="text-light-gray text-sm">Check Out My</span>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    className="w-12 h-12 bg-light-gray/10 rounded-full flex items-center justify-center text-light-gray hover:text-teal hover:bg-teal/10 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="w-12 h-12 bg-light-gray/10 rounded-full flex items-center justify-center text-light-gray hover:text-teal hover:bg-teal/10 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:omar@example.com"
                    className="w-12 h-12 bg-light-gray/10 rounded-full flex
                     items-center justify-center text-light-gray hover:text-teal hover:bg-teal/10 transition-all duration-300"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Image Section */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="fullpage-image-container">
                <img
                  src="/Asset_4300x.png"
                  alt="Omar Rharbi"
                  className="fullpage-profile-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-navy/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h3>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              My technical proficiency across different technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'JavaScript', percentage: 92, icon: Braces },
              { name: 'HTML5', percentage: 95, icon: Code },
              { name: 'CSS3', percentage: 90, icon: Palette },
              { name: 'Next.js', percentage: 88, icon: Code },
              { name: 'GitHub', percentage: 85, icon: Github },
              { name: 'Docker', percentage: 80, icon: Database },
              { name: 'Golang', percentage: 75, icon: Braces },
              { name: 'Rust', percentage: 70, icon: Code },
              { name: 'Java', percentage: 82, icon: Braces },
              { name: 'SQL', percentage: 85, icon: Database }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="relative bg-light-gray/5 p-6 rounded-xl text-center hover:bg-teal/10 transition-all duration-500 transform hover:scale-105 group skill-card"
              >
                {/* Progress Circle */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                    {/* Background circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="rgba(100, 255, 218, 0.1)"
                      strokeWidth="6"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#64FFDA"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - tech.percentage / 100)}`}
                      className="transition-all duration-1000 ease-out group-hover:stroke-teal"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </svg>
                  
                  {/* 3D Icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center group-hover:bg-teal/30 transition-all duration-300 transform group-hover:scale-110 skill-icon-3d">
                      <tech.icon className="w-5 h-5 text-teal" />
                    </div>
                  </div>
                  
                  {/* Percentage display */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-bold text-teal bg-navy px-2 py-1 rounded-full border border-teal/30">
                      {tech.percentage}%
                    </span>
                  </div>
                </div>
                
                <h4 className="text-light-gray group-hover:text-teal transition-colors duration-300 font-semibold text-sm">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h3>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-light-gray/5 rounded-xl overflow-hidden hover:bg-light-gray/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="h-48 bg-teal/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-teal/60" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-teal transition-colors duration-300">
                    Project {project}
                  </h4>
                  <p className="text-light-gray mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-full">React</span>
                      <span className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-full">CSS</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-light-gray group-hover:text-teal transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-navy" />
              </div>
              <span className="text-xl font-bold">Omar Rharbi</span>
            </div>
            <p className="text-light-gray text-center md:text-right">
              © 2025 Omar Rharbi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;