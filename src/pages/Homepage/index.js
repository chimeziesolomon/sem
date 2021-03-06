import React from 'react';
import Directory from './../../components/Directory';
import '../../default.scss';
import Hero from '../../components/Hero';
import Testimonial from '../Testimonial';
import About from '../About';

const Homepage = (props) => {
	return (
		<section className="homepage">
			<Hero />
			<Directory />
			<Testimonial />
			<About />
		</section>
	);
};
export default Homepage;
