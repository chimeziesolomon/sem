import React from 'react';
import Hero from '../../components/Hero';
import Directory from './../../components/Directory';
import './default.scss';

const Homepage = (props) => {
	return (
		<section className="homepage">
			<Hero />
			<Directory />
		</section>
	);
};
export default Homepage;
