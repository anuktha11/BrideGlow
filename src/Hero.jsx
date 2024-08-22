import React from 'react';
import image7 from './images/h1.jpg';
import image8 from './images/lip.jpg';
import image9 from './images/nail.jpg';
import image10 from './images/h2.jpg';
import image11 from './images/h7.jpg';
import image12 from './images/h5.jpg';
import image13 from './images/h4.jpg';
import image14 from './images/eye.jpg';

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-images">
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
          <img src={image10} alt="" />
          <img src={image11} alt="" />
          <img src={image12} alt="" />
          <img src={image13} alt="" />
          <img src={image14} alt="" />
        </div>

        <div className="hero-content">
          <h2>Your Bridal Beauty Destination</h2>
          <p>Let us make your special day even more beautiful.</p>
          <button className="cta">Book Now</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
