import React from 'react';
import { config } from '../data/config';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <h1 className="hero-title animate-on-scroll visible">
          Hi, I'm <span className="hero-name-highlight">{config.hero.firstName} {config.hero.lastName}</span>
        </h1>
        
        <div className="hero-roles animate-on-scroll visible" style={{animationDelay: '0.1s'}}>
          {config.hero.roles.map((role, idx) => (
            <span key={idx} className="role-pill">{role}</span>
          ))}
        </div>

        <div className="hero-stats animate-on-scroll visible" style={{animationDelay: '0.2s'}}>
          {config.hero.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="hero-actions animate-on-scroll visible" style={{animationDelay: '0.3s'}}>
          <a href="#projects" className="btn-primary">
            View Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href={config.hero.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <i className="fa-solid fa-download"></i> Resume
          </a>
          <a href="#contact" className="btn-outline-yellow">
            Contact Me
          </a>
        </div>

        <div className="hero-socials animate-on-scroll visible" style={{animationDelay: '0.4s'}}>
          {config.hero.socials.map((social, idx) => (
            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
