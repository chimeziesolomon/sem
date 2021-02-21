import React from 'react';
import ReactDOM from 'react-dom';
//import './default.scss';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import App from './components/App';
import Dashboard from './components/pages/Dashboard';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Shop from './components/pages/Shop';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/aboutUs" component={AboutUs} />
			<Route path="/contactUs" component={ContactUs} />
			<Route path="/shop" component={Shop} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
