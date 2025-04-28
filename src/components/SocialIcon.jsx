import React from 'react';

function SocialIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-3">
      <i className={icon}></i>
    </a>
  );
}

export default SocialIcon;
