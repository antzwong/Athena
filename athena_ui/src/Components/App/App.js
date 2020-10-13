import React from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';
import Items from '../Items/Items';
import Account from '../Account/Account';
import Logout from '../Logout/Logout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
	return (
		<div className = 'main-container'>
			<div className = 'top-banner'>
				<h1>Welcome Neil Tramsen</h1>
			</div>
			<Router>
				<div className = 'navbar'>
					<NavBar/>
				</div>
				<div className = 'content'>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route exact path='/dashboard' component={Dashboard} />
						<Route exact path='/checkout' component={Checkout} />
						<Route exact path='/search' component={Search} />
						<Route exact path='/myitems' component={Items} />
						<Route exact path='/myaccount' component={Account} />
						<Route exact path='/logout' component={Logout} />
					</Switch>
				</div>
			</Router>
			{/*<div className='checkout'>
				<Checkout className = 'checkout'/>
			</div>*/}
		</div>
	);

}

export default App;
