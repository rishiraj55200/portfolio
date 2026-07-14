import React from 'react';
import { config } from '../data/config';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">{config.experience.title}</span>
        </h2>
        <div className="timeline">
          {config.experience.items.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h4 className="timeline-company">{item.company} | {item.location}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
