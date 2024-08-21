import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from './images/r.jpg';
import image1 from './images/r1.jpg';
import image2 from './images/r3.jpg';
import image3 from './images/r4.jpg';

const reviews = [
  { name: 'Varada', review: 'Amazing service and great experience!', rating: 5, photo: image },
  { name: 'Anagha', review: 'I’m so happy!', rating: 4, photo: image1 },
  { name: 'Aswathy', review: 'Highly recommend, will definitely come back.', rating: 4, photo: image2 },
  { name: 'Manju', review: 'Good quality.', rating: 4, photo: image3 }
];

const Reviews = () => {
  return (
    <Container fluid className="reviews" id='review'>
      <h2>Customer Reviews</h2>
      <Row className="review-list">
        {reviews.map((review, index) => (
          <Col xs={12} sm={6} md={6} key={index} className="mb-4">
            <div className="review-item">
              <img src={review.photo} alt={review.name} className="review-photo" />
              <div className="review-content">
                <p className="review-text">{review.review}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
