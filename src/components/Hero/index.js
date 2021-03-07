import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import bg1 from './../../assets/images/sem-spices.jpeg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper-top mb-4">
        <h1 className="hero-title mb-4">
          We are the leading foodcare solution provider <br />{' '}
          <span>Giving you healthier alternatives </span>
          in Africa
        </h1>
        <div className="mt-4 rounded">
          <Link
            to="#"
            className="btn  mt-2 mr-2"
            style={{
              borderRadius: '20px',
              boxShadow: 'none',
              width: '200px',
              fontSize: 'small',
              textAlign: 'center',
              float: 'left',
              marginLeft: '8rem',
            }}>
            Getting Started
          </Link>
        </div>
      </div>
      <div
        className="hero-section-top"
        style={{
          height: '140px',
          borderRadius: '50%',
          background: `url(${bg1}) no-repeat`,
        }}></div>
    </div>
  );
}

//background: `url(${bg1}) no-repeat`

export default Hero;
