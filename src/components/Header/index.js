import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
//import Logo from '../../assets/images/sem-logo.jpeg';
import { Navigation } from '@material-ui/icons';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

export const Header = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);


  return (
    <header id="header">
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
      <>
      <nav className={`mainMenu ${activeMenu ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">

          <ul>

            <li>
              <Link to="/cart">
                Your Cart ({totalNumCartItems})
                <i class="fas fa-shopping-basket"></i>
              </Link>
            </li>

            {currentUser && [
              <li key={1}>
                <Link to="/dashboard">
                  My Account
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>
                  LogOut
                  <i class="fas fa-sign-out-alt"></i>
                </span>
              </li>
            ]}

            {!currentUser && [
              <li key={1} className="hideOnMobile">
                <Link to="/registration">
                  Register
                </Link>
              </li>,
              <li key={2}>
                <Link to="/login">
                  Login
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>
            ]}

            <li className="mobileMenu">
              <span onClick={() => setActiveMenu(!activeMenu)}>
                <i className="fas fa-bars"></i>
              </span>
            </li>

          </ul>
        </div>
      </>

    </header>
  );
};

Navigation.defaultProps = {
  currentUser: null
};

export default Header;
