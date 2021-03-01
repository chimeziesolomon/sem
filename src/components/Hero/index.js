import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import bg1 from './../../assets/images/sem-spices.jpeg';

function Hero() {
	return (
		<section
			className="hero-section"
			id="home"
			style={{ height: '140px', borderRadius: '50%', float: 'right', background: `url(${bg1}) no-repeat` }}
		>
			<Container>
				<Row className="justify-content-center">
					<Col lg={6}>
						<div className="hero-wrapper mb-4">
							<h1 className="hero-title mb-4">
								We are the leading foodcare solution provider <br /> {' '}
								<span>Giving you healthier alternatives </span>
								in Africa
							</h1>

							<p
								className=""
								style={{
									borderRadius: '70px',
									width: '490px',
									fontSize: '1rem',
									textAlign: 'center',
									letterSpacing: '3px'
								}}
							>
								Are you a health enthusiasts, you want to live healthy and make healthier choices? Then
								sem food and spices is your number 1 plug. Sem Spices are made from a 100% blend of
								natural herbs and roots, they are free from monosodium Glutamate MSG, preservatives or
								any form of artificial additives. Sem spices does not only make your food taste better
								but also help you prevent, manage or cure certain health conditions
							</p>

							<div className="mt-4 rounded">
								<Link
									to="#"
									className="btn  mt-2 mr-2"
									style={{
										borderRadius: '20px',
										boxShadow: 'none',
										width: '200px',
										fontSize: 'small',
										textAlign: 'center'
									}}
								>
									Getting Started
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Hero;
