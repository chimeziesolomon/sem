import React from 'react';
//import bg1 from './../../assets/images/sem-spices.jpeg';
import semChef from './../../assets/images/sem-chef.jpg'
import contiChef from './../../assets/images/sem-contichef.jpg';
import foreignChef from './../../assets/images/sem-foreignchef.jpg';
import Carousel from 'react-bootstrap/Carousel';
import '../../default.scss';

const index = () => {
  return (
     <Carousel className="carousel">
  <Carousel.Item>
    <div>
    <img
      className="d-block"
      style={{ 
        width: '50%',
        height: '400px',
        borderRadius: '30%',
        marginLeft: '2rem',
        background: `url(${semChef}) no-repeat`,
      }}/>
      </div>
      
        
    <Carousel.Caption className=""
      style={{ 
        width: '30%',
        height: '400px',
        float: 'right',
        left: '800px',
        alignContent: 'center',
      }}>
      <h3 
      style={{
        color: 'royalblue'
        }}>
          Bruno Stan</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{ 
        width: '50%',
        height: '400px',
        borderRadius: '30%',
        marginLeft: '2rem',
        background: `url(${contiChef}) no-repeat`,
      }}/>
    

    <Carousel.Caption
    style={{ 
      width: '30%',
      height: '400px',
      float: 'right',
      left: '800px',
      alignContent: 'center',
    }}>
    
      <h3  style={{
        color: 'royalblue'
        }}>
          Lilly Gracia</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{ 
        width: '50%',
        height: '400px',
        borderRadius: '30%',
        marginLeft: '2rem',
        background: `url(${foreignChef}) no-repeat`,
      }}/>

    <Carousel.Caption
    style={{ 
      width: '30%',
      height: '400px',
      float: 'right',
      left: '800px',
      alignContent: 'center',
    }}>
      <h3 style={{
        color: 'royalblue'
      }}>
      Theodora  Spiff</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
  );
};

export default index;