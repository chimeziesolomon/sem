import React from 'react';
<<<<<<< HEAD
import Directory from '../../components/Directory';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import '../../default.scss';
import  Carousel  from '../../components/Carousel';
import Footer from '../../components/Footer'

const Homepage = (props) => {
  return (
    <section className="homepage">
      <Hero />
      <Directory />
      <Banner />
      <Carousel />
      <Footer />
    </section>
  );
=======
import Directory from './../../components/Directory';
import '../../default.scss';
import Hero from '../../components/Hero';
import Testimonial from '../Testimonial';
import About from '../About';

const Homepage = (props) => {
	return (
		<section className="homepage">
			<div>
				<Hero />
				<Directory />
				<Testimonial />
				<About />
			</div>
		</section>
	);
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b
};
export default Homepage;
