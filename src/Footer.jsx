import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <Container fluid>
        <Row>
          <Col>
            <div className="footer-item">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom text-center mt-3"style={{ backgroundColor: '#a10348' }}>
        <p>&copy; 2024 Vertex Web Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
