import React from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';
import NavBar from '../NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
	return (
		<div className = 'main-container'>
			<div className = 'top-banner'>
				<h1>Welcome Neil Tramsen</h1>
			</div>
			<div className='router'>
				<Router>
					<NavBar/>
					<Switch>
						<Route path='/' />
					</Switch>
				</Router>
			</div>
			<div className='checkout'>
				<Checkout className = 'checkout'/>
			</div>
		</div>
	);

}

export default App;
