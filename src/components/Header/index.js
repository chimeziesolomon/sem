//import React, { useState, useEffect } from 'react';
//import { Link, useLocation  } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
//import { signOutUserStart } from '../../redux/User/user.actions';
//import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
//import Logo from '../../assets/images/sem-logo.jpeg';
import Navigation from './../../components/Navigation';


export const Header = (props) => {
  
  
  return (
    <header id="header">
      <Navigation />
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
     

    </header>
  );
};

Navigation.defaultProps = {
  currentUser: null
};

export default Header;
