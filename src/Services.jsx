import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image4 from './images/b.jpg';
import image5 from './images/h.jpg';
import image6 from './images/b3.jpg';

function Services() {
  return (
    <Container fluid className="services" id="services">
      <h2 className="text-light">Our Services</h2>
      <Row className="service-list">
        <Col xs={12} md={4} className="mb-4">
          <Card className="service-item">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Bridal Makeup</Card.Title>
              <Card.Text>
                Expert bridal makeup to make you look stunning on your special day.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card className="service-item">
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title>Hair Styling</Card.Title>
              <Card.Text>
                Elegant hair styling for brides and bridal parties.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card className="service-item">
            <Card.Img variant="top" src={image6} />
            <Card.Body>
              <Card.Title>Pre-Wedding Packages</Card.Title>
              <Card.Text>
                Comprehensive packages for all your pre-wedding beauty needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
