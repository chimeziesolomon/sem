import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const index = () => {
  return (
    <div className="carousel">
      <Carousel>
  <Carousel.Item interval={1000}>
    <div className="carousel-items">
    <img 
      src="https://res.cloudinary.com/chimeziesolomon/image/upload/v1578660683/munchamerica6_u6zm1a.jpg"
      alt="First slide"
    />
    </div>
    
    <div  className="carousel-caption">
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <div className="carousel-items">
    <img
      src="https://res.cloudinary.com/chimeziesolomon/image/upload/v1578660703/munchamerica7_nackt0.jpg"
      alt="Second slide"
    />
    </div>
    <div  className="carousel-caption">
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carousel-items">
    <img
      src="https://res.cloudinary.com/chimeziesolomon/image/upload/v1578660725/munchamerica8_wl8obm.jpg"
      alt="Third slide"
    />
    </div>
    <div  className="carousel-caption">
    <Carousel.Caption>
      <h3>Third slide label</h3> 
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default index;