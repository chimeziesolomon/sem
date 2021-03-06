import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import bg1 from './../../assets/images/sem-spices.jpeg';

function Hero() {
	return (
		<Container container>
			<Row>
				<Col className="justify-content-center">
					<Col lg={6}>
						<div className="hero-wrapper mb-4">
							<h1
								className="hero-title mb-4"
								style={{
									borderRadius: '70px',
									width: '490px',
									fontSize: '1.3rem',
									textAlign: 'center',
									letterSpacing: '3px'
								}}
							>
								We are the leading foodcare solution provider <br /> {' '}
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
										marginLeft: '8rem'
									}}
								>
									Getting Started
								</Link>
							</div>
						</div>
					</Col>
				</Col>
				<Col
					className="hero-section"
					id="home"
					style={{
						height: '140px',
						borderRadius: '50%',
						float: 'right',
						background: `url(${bg1}) no-repeat`
					}}
				/>
			</Row>
		</Container>
	);
}

export default Hero;
