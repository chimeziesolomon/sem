import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import bg1 from './../../assets/images/sem-spices.jpeg';
import SemSpices from './../../assets/images/sem-spices.jpeg';
import SemTea from './../../assets/images/sem-banner.jpeg';
import SemGranular from './../../assets/images/sem-spices.jpeg';
import SemCatering from './../../assets/images/sem-cereal.jpeg';
import SemNaturalSweetner from './../../assets/images/sem-date-powder.jpeg';
import '../../default.scss';

//Import Images

const Directory = (props) => {
	return (
		<React.Fragment className="">
			<div className="mainItem">
				<div
					className="item"
					style={{
						backgroundImage: `url(${SemSpices})`
					}}
				>
					<a>Sem Spices</a>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${SemTea})`
					}}
				>
					<a>Sem Tea</a>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${SemGranular})`
					}}
				>
					<a>Sem Granular</a>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${SemCatering})`
					}}
				>
					<a>Sem MSG-free Catering</a>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${SemNaturalSweetner})`
					}}
				>
					<a>Sem Natural Sweetner</a>
				</div>
			</div>
			<Container>
				<Row
					className=""
					style={{
						marginTop: '-20rem',
						paddingBottom: '20px'
					}}
				>
					<Col
						className="hero-section"
						id="home"
						style={{
							height: '140px',
							borderRadius: '30%',
							float: 'right',
							background: `url(${bg1}) no-repeat`
						}}
					/>
					<Col className="justify-content-center">
						<Col lg={6}>
							<div className="hero-wrapper mb-4">
								<h1 className="hero-title mb-4">
									Get this offer of a <br /> <span>special discount of 20% </span>
									it lasts only today
								</h1>

								<div className="mt-4">
									<Link to="#" className="btn btn-rounded">
										Shop Now
									</Link>
								</div>
							</div>
						</Col>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default Directory;
