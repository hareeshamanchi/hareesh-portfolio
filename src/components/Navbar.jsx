import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-close navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <nav className="navbar">
      <div className="logo">Hareesh 🚀</div>

      {isMobile && (
        <div
          className={`menu-icon ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      )}

      <ul className={`nav-links ${open && isMobile ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#certifications" onClick={() => setOpen(false)}>Certifications</a></li>
        <li><a href="#achievements" onClick={() => setOpen(false)}>Achievements</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
