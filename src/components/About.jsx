import React from 'react';
import { config } from '../data/config';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">{config.about.title}</span>
        </h2>
        <div className="about-content glass-panel">
          <p>{config.about.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
