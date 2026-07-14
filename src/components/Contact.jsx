import React, { useState } from 'react';
import { config } from '../data/config';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    formData.append("access_key", "0f4ce607-598e-4977-b448-574f4b627f88");
    
    try {
      setStatus("Sending...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Thanks for reaching out! I'll get back to you soon.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please email me directly.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">{config.contact.title}</span>
        </h2>
        
        <div className="contact-grid">
          <div className="contact-info glass-panel">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-details">
              <a href={`mailto:${config.contact.email}`} className="contact-link">
                <i className="fa-solid fa-envelope"></i> {config.contact.email}
              </a>
            </div>
            <div className="social-links-contact">
              {config.hero.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon-small">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit-btn">
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
