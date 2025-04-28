
import React from 'react';
import { Card } from 'react-bootstrap';

function AboutCard({ image, title, description }) {
  return (
    <Card className="flex-row p-4" style={{ background: 'transparent', color: 'white', border: 'none' }}>
      <Card.Img variant="left" src={image} style={{ width: '200px', height: 'auto', objectFit: 'cover', marginRight: '20px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
