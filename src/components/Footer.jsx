import React from 'react';
import SocialIcon from './SocialIcon';

function Footer({ socialLinks }) {
  return (
    <footer className="text-center py-4" style={{ background: '#111' }}>
      {socialLinks.map((item, index) => (
        <SocialIcon key={index} icon={item.icon} link={item.link} />
      ))}
      <p className="text-white mt-3">© 2025 Copyright</p>
    </footer>
  );
}

export default Footer;
