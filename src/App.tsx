import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A192F', 
      color: '#E6F1FF',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem', 
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            <p style={{ 
              fontSize: '1.5rem', 
              color: '#8892B0', 
              marginBottom: '1rem',
              fontWeight: '300'
            }}>
              Hi I'm
            </p>
            
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 'bold', 
              color: '#E6F1FF',
              margin: '0 0 1rem 0',
              letterSpacing: '2px'
            }}>
              OMAR RHARBI
            </h1>
            
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#64FFDA',
              margin: '0 0 2rem 0',
              fontWeight: '500'
            }}>
              FULL STACK DEVELOPER
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#8892B0',
              lineHeight: '1.6',
              marginBottom: '3rem',
              maxWidth: '500px'
            }}>
              Building digital experiences with modern web technologies and innovative solutions.
            </p>

            {/* Tech Stack */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ 
                color: '#8892B0', 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '1rem'
              }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {['🌐 HTML5', '🎨 CSS3', '⚡ JavaScript', '⚛️ React', '🟢 Node.js', '📘 TypeScript'].map((tech) => (
                  <div key={tech} style={{ 
                    color: '#8892B0',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s'
                  }}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="mailto:omar@example.com" style={{ 
                color: '#8892B0', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Mail size={20} />
                Email
              </a>
              <a href="https://github.com" style={{ 
                color: '#8892B0', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com" style={{ 
                color: '#8892B0', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Omar Rharbi"
                style={{
                  width: '350px',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;