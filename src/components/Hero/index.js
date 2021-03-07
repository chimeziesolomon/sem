import React from 'react';
import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import bg1 from './../../assets/images/sem-spices.jpeg';

function Hero() {
  return (
    <div className="hero-container wrap">
      <div className="hero-wrapper-top mb-4">
        <h1 className="hero-title mb-4">
          We are the leading foodcare solution provider <br />{' '}
          <span>Giving you healthier alternatives </span>
          in Africa
        </h1>

        <Link to="#" className="btn btn-rounded mt-4">
          Getting Started
        </Link>
      </div>
      <div
        className="hero-section-top"
        style={{
          background: `url(${bg1}) no-repeat center`,
          backgroundSize: 'contain',
        }}></div>
    </div>
  );
}

export default Hero;
