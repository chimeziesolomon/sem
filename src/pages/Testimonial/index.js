import React from 'react';
import { Carousel } from 'react-bootstrap';
import SemTea from './../../assets/images/sem-banner.jpeg';
import SemGranular from './../../assets/images/sem-spices.jpeg';
import SemCatering from './../../assets/images/sem-cereal.jpeg';
function Testimonial() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<div
						className=" "
						style={{
							textAlign: 'left',
							paddingLeft: '3rem'
						}}
					>
						<img
							className="d-block w-90"
							style={{
								height: '300px',
								width: '400px',
								backgroundImage: `url(${SemTea})`
							}}
						/>
						<h3>Chef Vincent Dough</h3>
						<h4>World Food Tester</h4>
					</div>
					<Carousel.Caption>
						<p
							className=""
							style={{
								height: '300px',
								width: '400px',
								borderRadius: '20px',
								float: 'right'
							}}
						>
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop publishing packages and web page
							editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions have evolved over the years,
							sometimes by accident, sometimes on purpose (injected humour and the like
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<div
						className=" "
						style={{
							textAlign: 'left',
							paddingLeft: '3rem'
						}}
					>
						<img
							className="d-block w-90"
							style={{
								height: '300px',
								width: '400px',
								backgroundImage: `url(${SemGranular})`
							}}
						/>
						<h3>Gladys Morr</h3>
						<h4>Hotelier</h4>
					</div>
					<Carousel.Caption>
						<p
							className=""
							style={{
								height: '300px',
								width: '400px',
								borderRadius: '20px',
								float: 'right'
							}}
						>
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop publishing packages and web page
							editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions have evolved over the years,
							sometimes by accident, sometimes on purpose (injected humour and the like
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<div
						className=" "
						style={{
							textAlign: 'left',
							paddingLeft: '3rem'
						}}
					>
						<img
							className="d-block w-90"
							style={{
								height: '300px',
								width: '400px',
								backgroundImage: `url(${SemCatering})`
							}}
						/>
						<h3>Grace Ama</h3>
						<h4>Hotel Manager</h4>
					</div>
					<Carousel.Caption>
						<p
							className=""
							style={{
								height: '300px',
								width: '400px',
								borderRadius: '20px',
								float: 'right'
							}}
						>
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop publishing packages and web page
							editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions have evolved over the years,
							sometimes by accident, sometimes on purpose (injected humour and the like
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Testimonial;
