import React from 'react';
import { config } from '../data/config';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center', 
      padding: '2rem', 
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--surface-border)',
      fontSize: '0.9rem'
    }}>
      <p>Designed & Built for {config.hero.name}</p>
    </footer>
  );
};

export default Footer;
