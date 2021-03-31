import React from 'react';
import { Link } from 'react-router-dom';
//import { Container, Row, Col } from 'reactstrap';
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
        <div className="">
          <a
            to="#"
            className=""
            >
            Getting Started
          </a>
        </div>
      </div>
      <div
        className="hero-section-top"
        style={{
          background: `url(${bg1}) no-repeat`,
        }}>
        </div>
    </div>
  );
}
export default Hero;
