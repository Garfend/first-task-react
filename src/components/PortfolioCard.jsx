import React from 'react';
import { Card } from 'react-bootstrap';

function PortfolioCard({ image, title, description }) {
  return (
    <Card className="mb-4" style={{ background: 'transparent', color: 'white', border: '1px solid #444' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
