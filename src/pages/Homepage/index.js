import React from 'react';
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
};
export default Homepage;
