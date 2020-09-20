import React from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';
import NavBar from '../NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
	return (
		<div className = 'main-container'>
			<div className = 'top-banner'>
			<h>Welcome User6969</h>
			</div>
			<Router>
				<NavBar/>
				<Switch>
					<Route path='/' />
				</Switch>
			</Router>
			<Checkout/>
		</div>
	);

}

export default App;
