import React from 'react';
import Directory from './../../components/Directory';
import '../../default.scss';
import Hero from '../../components/Hero';

const Homepage = (props) => {
	return (
		<section className="homepage">
			<Hero />
			<Directory />
		</section>
	);
};
export default Homepage;
