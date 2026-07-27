import React from 'react';
import { config } from '../data/config';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">{config.certifications.title}</span>
        </h2>
        
        <div className="certifications-grid">
          {config.certifications.list.map((cert, index) => (
            <a 
              key={index} 
              href={cert.certificateUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card glass-panel"
            >
              <div className="cert-image-container">
                {cert.thumbnail ? (
                  <img src={cert.thumbnail} alt={cert.title} className="cert-thumbnail" />
                ) : (
                  <div className="cert-placeholder">
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                )}
                <div className="cert-overlay">
                  <span className="view-text">View Certificate <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer"><i className="fa-solid fa-building"></i> {cert.issuer}</span>
                  <span className="cert-date"><i className="fa-regular fa-calendar"></i> {cert.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
