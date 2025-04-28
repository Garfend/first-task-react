import React from 'react';

function HeroSection({ backgroundImage, title }) {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  return <div style={heroStyle}>{title}</div>;
}

export default HeroSection;
