import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Footer from './../../components/Footer';
import SemSpices from './../../assets/images/sem-spices.jpeg';

function About() {
  return (
    <Card
      className="text-center"
      style={{
        backgroundColor: 'purple',
      }}>
      <Card.Body>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <p
                className=""
                style={{
                  borderRadius: '70px',
                  width: '490px',
                  fontSize: '1rem',
                  textAlign: 'center',
                  letterSpacing: '3px',
                }}>
                Are you a health enthusiasts, you want to live healthy and make
                healthier choices? Then sem food and spices is your number 1
                plug. Sem Spices are made from a 100% blend of natural herbs and
                roots, they are free from monosodium Glutamate MSG,
                preservatives or any form of artificial additives. Sem spices
                does not only make your food taste better but also help you
                prevent, manage or cure certain health conditions
              </p>
            </Col>
            <Col
              style={{
                background: `url(${SemSpices}) no-repeat`,
              }}
            />
          </Row>
        </Card.Text>
        <Footer />
      </Card.Body>
    </Card>
  );
}

export default About;
