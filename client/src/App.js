import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/auth/Signup';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/auth/Login';

function App() {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path='/' component={Home} />
				<section className='container'>
					<Route exact path='/register' component={Signup} />
					<Route exact path='/login' component={Login} />
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
