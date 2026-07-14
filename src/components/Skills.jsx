import React from 'react';
import { config } from '../data/config';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">{config.skills.title}</span>
        </h2>
        <div className="skills-grid">
          {config.skills.categories.map((category, idx) => (
            <div key={idx} className="skill-card glass-panel">
              <h3 className="skill-category-title">{category.name}</h3>
              <div className="skill-tags">
                {category.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
