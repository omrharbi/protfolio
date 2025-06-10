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

            {/* Right Content - 3D Profile Image */}
            <div className="flex justify-center lg:justify-start animate-fade-in-delay-3">
              <div className="relative perspective-1000">
                {/* 3D Container with depth layers */}
                <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
                  
                  {/* 3D Background Layers - Creating depth behind the image */}
                  <div className="absolute inset-0 transform translate-x-12 translate-y-12 z-0">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-teal/15 to-teal/5 blur-lg"
                      style={{
                        clipPath: 'polygon(28% 6%, 80% 7%, 102% 51%, 81% 101%, 26% 99%, 2% 57%)',
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 transform translate-x-8 translate-y-8 z-5">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-teal/25 to-teal/10 blur-md"
                      style={{
                        clipPath: 'polygon(28% 6%, 80% 7%, 102% 51%, 81% 101%, 26% 99%, 2% 57%)',
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 transform translate-x-4 translate-y-4 z-10">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-teal/35 to-teal/15 blur-sm"
                      style={{
                        clipPath: 'polygon(28% 6%, 80% 7%, 102% 51%, 81% 101%, 26% 99%, 2% 57%)',
                      }}
                    />
                  </div>

                  {/* Main image container - highest z-index to show in front */}
                  <div className="relative w-full h-full z-20">
                    {/* Hexagonal container for image */}
                    <div 
                      className="w-full h-full overflow-hidden relative"
                      style={{
                        // clipPath: 'polygon(28% 6%, 80% 7%, 102% 51%, 81% 101%, 26% 99%, 2% 57%)',
                      }}
                    >
                      {/* Your image with proper sizing to show full face */}
                      <img
                        src="/WhatsApp Image 2025-06-02 at 14.45.30(3)(1) (Copy).png"
                        alt="Omar Rharbi"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        style={{
                          objectPosition: 'center 20%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback content */}
                      <div className="w-full h-full bg-teal/10 flex items-center justify-center" style={{ display: 'none' }}>
                        <User className="w-24 h-24 text-teal/60" />
                      </div>
                    </div>
                  </div>

                  {/* Floating 3D elements positioned around the image - Full Stack Developer Icons */}
                  {/* Coding/Programming Icon - Top Left with Float Animation */}
                  <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-teal/40 to-teal/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform hover:scale-110 transition-all duration-300 z-30 animate-float-1 animate-pulse-glow">
                    <div className="w-10 h-10 bg-teal/30 rounded-full flex items-center justify-center">
                      <Braces className="w-5 h-5 text-teal drop-shadow-lg animate-rotate-slow" />
                    </div>
                  </div>
                  
                  {/* Database Icon - Bottom Right with Different Float Animation */}
                  <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-br from-teal/40 to-teal/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform hover:scale-110 transition-all duration-300 z-30 animate-float-2">
                    <div className="w-10 h-10 bg-teal/30 rounded-full flex items-center justify-center">
                      <Database className="w-5 h-5 text-teal drop-shadow-lg animate-bounce-subtle" />
                    </div>
                  </div>
                  
                  {/* CSS/Styling Icon - Right Side with Rotation Animation */}
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-teal/40 to-teal/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform hover:scale-110 transition-all duration-300 z-30 animate-float-3">
                    <div className="w-8 h-8 bg-teal/30 rounded-full flex items-center justify-center">
                      <div className="text-teal font-bold text-xs drop-shadow-lg">CSS</div>
                    </div>
                  </div>

                  {/* Additional Full Stack Icon - Left Side with Subtle Float */}
                  <div className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-br from-teal/40 to-teal/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform hover:scale-110 transition-all duration-300 z-30 animate-float-4">
                    <div className="w-8 h-8 bg-teal/30 rounded-full flex items-center justify-center">
                      <Code className="w-4 h-4 text-teal drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Bottom shadow for 3D depth effect */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-4/5 h-16 bg-black/40 rounded-full blur-3xl z-0"></div>
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
              Tech Stack
            </h3>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'HTML5', icon: '🌐' },
              { name: 'CSS3', icon: '🎨' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'TypeScript', icon: '📘' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="bg-light-gray/5 p-6 rounded-xl text-center hover:bg-teal/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-light-gray group-hover:text-teal transition-colors duration-300 font-medium">
                  {tech.name}
                </p>
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