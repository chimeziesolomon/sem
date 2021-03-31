import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import bg1 from './../../assets/images/sem-spices.jpeg';

function Banner() {
	return (
		<div className="hero-banner">
      <div
        className="hero-banner-top"
        style={{
          background: `url(${bg1}) no-repeat`,
        }}>
        </div>
		<div className="hero-wrapperbanner-top mb-4">
        <h1 className="hero-title mb-4">
          We are giving out this great product <br />{' '}
          <span>20% off </span>
          for your great irresistible dish
        </h1>
        <div className="">
          <a
            to="#"
            className=""
            >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
export default Banner;
