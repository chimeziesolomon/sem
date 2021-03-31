import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
=======
import '../../default.scss';
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from './../../assets/images/sem-logo.jpeg';
<<<<<<< HEAD
import '../../default.scss';
=======
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
<<<<<<< HEAD
  const { currentUser } = useSelector(mapState);
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
            
          </Link>
        </div>

        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>SignOut</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/shoppingCart">
                 <ShoppingCartIcon /> 
                  </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
=======
	const { currentUser } = useSelector(mapState);
	return (
		<header className="header">
			<div className="wrap">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>
				<div className="callToActions">
					{currentUser && (
						<ul>
							<li>
								<Link to="/dashboard">My Account</Link>
							</li>
							<li>
								<span onClick={() => auth.signOut()}>SignOut</span>
							</li>
						</ul>
					)}
					{!currentUser && (
						<ul>
							<li>
								<Link to="/signup">Signup</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/shoppingCart">
									<ShoppingCartIcon>Shop</ShoppingCartIcon>
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</header>
	);
>>>>>>> a1dfeaef3f61421afbdc11427da176271143dd9b
};
Header.defaultProps = {
  currentUser: null,
};

export default Header;
