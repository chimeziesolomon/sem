import Logo from '../../assets/images/sem-logo.jpeg';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import { Navigation } from '@material-ui/icons';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

export const NavigationMenu = () => {
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
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            {' '}
            <span className="sr-only">
              Toggle navigation
            </span> <span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a className="navbar-brand  page-scroll" href="#page-top">
            <img
              className="logo"
              style={{ width: '34px' }}
              src={Logo}
              alt="Sem Logo"
              className="img-fluid img-thumbnail"
            />
          </a>{' '}
        </div>

        <li className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a to="/" href="#home" className="page-scroll">
                Home
              </a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                Dropdown <span className="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a to="/" href="#about" className="page-scroll">
                    About
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a to="/" href="#services" className="page-scroll">
                    Services
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a to="/" href="#portfolio" className="page-scroll">
                    Gallery
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a to="/" href="#team" className="page-scroll">
                    Team
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a to="/" href="#testimonials" className="page-scroll">
                    Testimonials
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a to="/" href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <Link to="/cart">
                Your Cart ({totalNumCartItems})<i class="fas fa-shopping-basket"></i>
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
              </li>,
            ]}
            {!currentUser && [
              <li key={1} className="hideOnMobile">
                <Link to="/registration">Register</Link>
              </li>,
              <li key={2}>
                <Link to="/login">
                  Login
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>,
            ]}
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </li>
      </div>
    </nav>
  );
};
// export default NavigationMenu;
