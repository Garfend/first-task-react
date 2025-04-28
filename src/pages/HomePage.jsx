import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutCard from '../components/AboutCard';
import SkillProgress from '../components/SkillProgress';
import PortfolioCard from '../components/PortfolioCard';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/images/image1.webp';


function HomePage() {
  const skills = [
    { skill: 'Angular', percentage: 80 },
    { skill: 'React', percentage: 90 },
  ];
  const portfolioItems = [
    { image: image1, title: 'Project 1', description: 'Description 1' },
    { image: image1, title: 'Project 2', description: 'Description 2' },
    { image: image1, title: 'Project 3', description: 'Description 3' },
    { image: image1, title: 'Project 4', description: 'Description 4' },
  ];
  
  const socialLinks = [
    { icon: 'fab fa-facebook', link: 'https://facebook.com' },
    { icon: 'fab fa-instagram', link: 'https://instagram.com' },
    { icon: 'fab fa-linkedin', link: 'https://linkedin.com' },
  ];

  return (
    <>
     <HeroSection backgroundImage={image1} title="Front-End Developer" />

      <Container className="py-5">
        <h2 className="text-center text-warning mb-5">About</h2>
        <AboutCard
          image= {image1}
          title="I'm a Front-End Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        />

        <h2 className="text-center text-warning my-5">Skills</h2>
        {skills.map((item, idx) => (
          <SkillProgress key={idx} skillName={item.skill} percentage={item.percentage} />
        ))}

        <h2 className="text-center text-warning my-5">Portfolio</h2>
        <Row>
          {portfolioItems.map((item, idx) => (
            <Col md={6} className="d-flex" key={idx}>
              <PortfolioCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer socialLinks={socialLinks} />
    </>
  );
}

export default HomePage;
