import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from './images/pexels-bhoopal-m-642163-1446161.jpg';
import image1 from './images/pexels-thangaraj-editor-404682596-26181046.jpg';
import image2 from './images/pexels-gursher-gill-63702010-13661822.jpg';
import image3 from './images/pexels-minhaz-box-55594885-13123599.jpg';

function Home() {
  return (
    <Container fluid className="image-section" id="home">
      <div className="nara">
        <p>Be the Bride You’ve Always Envisioned - Flawless, Elegant, Beautiful.</p>
      </div>
      <Row className="image-list">
        <Col xs={6} sm={6} md={3} className="image-item">
          <img src={image} alt="" className="img-fluid" />
        </Col>
        <Col xs={6} sm={6} md={3} className="image-item">
          <img src={image1} alt="" className="img-fluid" />
        </Col>
        <Col xs={6} sm={6} md={3} className="image-item">
          <img src={image2} alt="" className="img-fluid" />
        </Col>
        <Col xs={6} sm={6} md={3} className="image-item">
          <img src={image3} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
